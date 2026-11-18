/**
 * MOTOR DE CONVERSACIÓN
 *
 * procesarMensaje(store, entrada) recibe un mensaje del cliente y devuelve los mensajes a enviar.
 * No conoce WhatsApp: el canal convierte las "salidas" abstractas en mensajes reales (ver whatsapp.mjs).
 *
 * entrada = { telefono, texto?, opcionId?, waId?, tipo?, perfilNombre? }
 * salida  = { tipo: 'texto', texto } | { tipo: 'opciones', texto, opciones: [{ id, titulo, descripcion? }] }
 */
import {
  HORAS_ABANDONO,
  HORAS_ATENCION_HUMANA,
  MAX_INTENTOS_INVALIDOS,
  MINUTOS_PARA_OFRECER_REANUDAR,
  SERVICIOS,
} from './config.mjs';
import { NODOS, SISTEMA } from './flujo.mjs';
import { detectarComando, normalizar, validarDisponibilidad, validarNombre } from './texto.mjs';
import { asignarEspecialista } from './asignacion.mjs';
import { notificar } from './notificaciones.mjs';

const MIN = 60 * 1000;

// Código de solicitud que se le muestra al cliente: aleatorio, sin caracteres confusos (0/O, 1/I/L)
const ALFABETO = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function generarCodigo() {
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(8));
  return 'VR-' + Array.from(bytes, (b) => ALFABETO[b % ALFABETO.length]).join('');
}
const RESPUESTAS_GLOBALES = ['consentimiento_datos', 'nombre'];

// ─────────────────────────── Interpretación de respuestas ───────────────────────────

/** Devuelve el `valor` de la opción elegida o null si no se reconoce */
export function interpretarOpcion(nodoId, opciones, entrada) {
  if (entrada.opcionId) {
    const i = entrada.opcionId.indexOf(':');
    const [nodo, valor] = [entrada.opcionId.slice(0, i), entrada.opcionId.slice(i + 1)];
    if (nodo === nodoId && opciones.some((o) => o.valor === valor)) return valor;
  }
  const t = normalizar(entrada.texto);
  if (!t) return null;

  // "1", "opción 1", "la 2"
  const num = t.match(/^(?:opcion |numero |la |el )?(\d{1,2})$/);
  if (num) return opciones[Number(num[1]) - 1]?.valor ?? null;

  // Coincidencia exacta con un sinónimo
  const exacta = opciones.find((o) => o.sinonimos?.includes(t));
  if (exacta) return exacta.valor;

  // Frase que contiene un sinónimo de varias palabras ("sí, acepto la política")
  const conFrase = opciones.filter((o) => o.sinonimos?.some((s) => s.includes(' ') && ` ${t} `.includes(` ${s} `)));
  if (conFrase.length === 1) return conFrase[0].valor;

  // Primera palabra igual a un sinónimo de una palabra ("no, no estoy reportado")
  const primera = t.split(' ')[0];
  const porPrimera = opciones.filter((o) => o.sinonimos?.some((s) => !s.includes(' ') && s === primera));
  if (porPrimera.length === 1) return porPrimera[0].valor;

  return null;
}

// ─────────────────────────── Motor ───────────────────────────

export async function procesarMensaje(store, entrada, { ahora = new Date() } = {}) {
  const salidas = [];
  const texto = (t) => salidas.push({ tipo: 'texto', texto: t });
  const opciones = (t, ops, nodoId) =>
    salidas.push({
      tipo: 'opciones',
      texto: t,
      opciones: ops.map((o) => ({ id: `${nodoId}:${o.valor}`, titulo: o.titulo, ...(o.descripcion && { descripcion: o.descripcion }) })),
    });

  // ── 1. Identificación del usuario (crear o recuperar el lead) ──
  let lead = await store.obtenerLeadPorTelefono(entrada.telefono);
  if (!lead) {
    lead = await store.crearLead({ telefono: entrada.telefono, perfil_nombre: entrada.perfilNombre });
    await store.auditar({ tipo: 'lead_creado', lead_id: lead.id });
  }
  const cambiosLead = {};
  const setLead = (c) => Object.assign(cambiosLead, c) && Object.assign(lead, c);

  let conv = await store.obtenerConversacionAbierta(lead.id);

  // Registro del mensaje entrante (y descarte de duplicados que Meta reenvía)
  const esNuevo = await store.registrarMensaje({
    wa_id: entrada.waId || null, lead_id: lead.id, conversacion_id: conv?.id || null, direccion: 'entrante',
    tipo: entrada.tipo || (entrada.opcionId ? 'interactivo' : 'texto'),
    contenido: { texto: entrada.texto || null, opcionId: entrada.opcionId || null },
  });
  if (!esNuevo) return { salidas: [], resultado: 'duplicado' };

  const cmd = entrada.opcionId ? null : detectarComando(entrada.texto);
  const ctx = () => ({ nombre: lead.nombre || '', ...(conv?.datos?.ctx || {}) });
  let resultado = 'respuesta';

  // ── Funciones auxiliares que modifican la conversación ──
  const enviarPregunta = (id) => {
    const n = NODOS[id];
    if (n.opciones) opciones(n.texto(ctx()), n.opciones, id);
    else texto(n.texto(ctx()));
  };

  const avanzar = async (destino) => {
    let id = destino;
    while (id) {
      const n = NODOS[id];
      if (!n) throw new Error(`Nodo inexistente: ${id}`);
      if (n.servicio) conv.servicio = n.servicio;

      if (n.tipo === 'mensaje') {
        texto(n.texto(ctx()));
        id = n.siguiente.destino;
        continue;
      }
      if (n.tipo === 'salida') {
        texto(n.texto(ctx()));
        Object.assign(conv, { nodo_actual: id, estado: 'finalizada', resultado: n.codigo, finalizada_en: ahora });
        setLead({ estado: n.estadoLead });
        await store.auditar({ tipo: 'salida', lead_id: lead.id, conversacion_id: conv.id, detalle: { nodo: id, codigo: n.codigo, retomable: n.retomable } });
        if (n.codigo === 'pendiente_revision') {
          await notificarSeguro('pendiente_revision', { lead: resumenLead(), servicio: SERVICIOS[conv.servicio] || null, respuestas: conv.datos.respuestas });
        }
        resultado = n.codigo;
        return;
      }
      // pregunta | texto | contacto
      conv.nodo_actual = id;
      conv.datos.intentos = 0;
      enviarPregunta(id);
      return;
    }
  };

  const iniciar = async () => {
    setLead({ estado: lead.estado === 'nuevo' ? 'en_conversacion' : lead.estado });
    if (lead.consentimiento_datos !== true) return avanzar('002');
    if (!lead.nombre) return avanzar('003');
    setLead({ estado: 'en_conversacion' });
    texto(SISTEMA.regreso(ctx())); // usuario existente: no se repiten consentimiento ni nombre
    return avanzar('004');
  };

  const reiniciarRespuestas = () => {
    conv.datos.respuestas = Object.fromEntries(
      Object.entries(conv.datos.respuestas).filter(([k]) => RESPUESTAS_GLOBALES.includes(k))
    );
    conv.datos.pila = [];
    conv.datos.ctx = {};
    conv.servicio = null;
  };

  const resumenLead = () => ({ id: lead.id, telefono: lead.telefono, nombre: lead.nombre, perfil_nombre: lead.perfil_nombre });

  async function notificarSeguro(evento, datos) {
    try {
      await notificar(evento, datos);
    } catch (e) {
      await store.auditar({ tipo: 'error_notificacion', lead_id: lead.id, conversacion_id: conv?.id, detalle: { evento, error: e.message } });
    }
  }

  const transferirAAsesor = async () => {
    Object.assign(conv, { estado: 'atencion_humana' });
    conv.datos.nodoAntesDeAsesor = conv.nodo_actual;
    setLead({ estado: 'atencion_humana' });
    texto(SISTEMA.asesor(ctx()));
    await store.auditar({ tipo: 'transferencia_humana', lead_id: lead.id, conversacion_id: conv.id, detalle: { nodo: conv.nodo_actual } });
    await notificarSeguro('atencion_humana', {
      lead: resumenLead(), nodo: conv.nodo_actual, servicio: SERVICIOS[conv.servicio] || null, respuestas: conv.datos.respuestas,
    });
    resultado = 'atencion_humana';
  };

  const crearSolicitudContacto = async (disponibilidad) => {
    const codigo = generarCodigo();
    let especialista = null;
    try {
      especialista = await asignarEspecialista(store, conv.servicio, codigo);
    } catch (e) {
      await store.auditar({ tipo: 'error_asignacion', lead_id: lead.id, conversacion_id: conv.id, detalle: { error: e.message } });
    }
    const solicitud = await store.crearSolicitud({
      codigo, lead_id: lead.id, conversacion_id: conv.id, servicio: conv.servicio, servicio_nombre: SERVICIOS[conv.servicio],
      disponibilidad_texto: disponibilidad, respuestas: conv.datos.respuestas,
      especialista_id: especialista?.id || null, estado: especialista ? 'asignada' : 'pendiente_asignacion',
    });
    await store.auditar({ tipo: 'solicitud_contacto', lead_id: lead.id, conversacion_id: conv.id, detalle: { codigo, especialista: especialista?.id || null } });
    await notificarSeguro('solicitud_contacto', {
      solicitud: { codigo, servicio: SERVICIOS[conv.servicio], disponibilidad, estado: solicitud.estado },
      lead: resumenLead(), respuestas: conv.datos.respuestas,
      especialista: especialista ? { id: especialista.id, nombre: especialista.nombre, telefono: especialista.telefono, email: especialista.email } : null,
    });
    conv.datos.ctx = { ...conv.datos.ctx, codigoSolicitud: codigo, disponibilidad };
  };

  // ── 2. Atención humana en curso: el bot no interviene ──
  if (conv?.estado === 'atencion_humana') {
    const vencida = ahora - new Date(conv.ultima_actividad) > HORAS_ATENCION_HUMANA * 60 * MIN;
    if (cmd === 'menu' || vencida) {
      Object.assign(conv, { estado: 'finalizada', resultado: 'atencion_humana', finalizada_en: ahora });
      await store.actualizarConversacion(conv.id, conv);
      conv = null; // se abre una conversación nueva abajo
    } else {
      await store.actualizarConversacion(conv.id, { ultima_actividad: ahora });
      return { salidas: [], resultado: 'atencion_humana' };
    }
  }

  // ── 3. Abandono y reanudación ──
  if (conv?.estado === 'activa') {
    const inactivo = ahora - new Date(conv.ultima_actividad);
    if (inactivo > HORAS_ABANDONO * 60 * MIN) {
      Object.assign(conv, { estado: 'abandonada', resultado: 'abandono', finalizada_en: ahora });
      await store.actualizarConversacion(conv.id, conv);
      await store.auditar({ tipo: 'abandono', lead_id: lead.id, conversacion_id: conv.id, detalle: { nodo: conv.nodo_actual } });
      conv = null;
    } else if (inactivo > MINUTOS_PARA_OFRECER_REANUDAR * MIN && conv.nodo_actual !== 'R-001' && !cmd && lead.nombre) {
      conv.datos.nodoReanudar = conv.nodo_actual;
      conv.nodo_actual = 'R-001';
      opciones(SISTEMA.reanudar(ctx()), SISTEMA.opcionesReanudar, 'R-001');
      await guardar('reanudacion_ofrecida');
      return { salidas, resultado: 'reanudacion_ofrecida', nodo: conv.nodo_actual };
    }
  }

  // ── 4. Conversación nueva ──
  let nueva = false;
  if (!conv) {
    conv = await store.crearConversacion(lead.id, ahora);
    nueva = true;
    await store.auditar({ tipo: 'conversacion_iniciada', lead_id: lead.id, conversacion_id: conv.id });
  }

  // ── 5. Comandos globales ──
  if (cmd === 'asesor') {
    await transferirAAsesor();
    return guardar(resultado);
  }
  if (nueva) {
    await iniciar();
    return guardar('inicio');
  }
  if (cmd === 'reiniciar') {
    reiniciarRespuestas();
    await iniciar();
    return guardar('reinicio');
  }
  if (cmd === 'menu') {
    if (lead.consentimiento_datos === true && lead.nombre) {
      reiniciarRespuestas();
      await avanzar('004');
      return guardar('menu');
    }
    texto(SISTEMA.menuSinDatos);
    enviarPregunta(conv.nodo_actual);
    return guardar('menu_no_disponible');
  }
  if (cmd === 'corregir') {
    const anterior = conv.datos.pila.pop();
    if (!anterior) {
      texto(SISTEMA.sinAnterior);
      enviarPregunta(conv.nodo_actual);
      return guardar('sin_anterior');
    }
    const clave = NODOS[anterior].clave;
    if (clave) delete conv.datos.respuestas[clave];
    conv.nodo_actual = anterior;
    conv.datos.intentos = 0;
    texto(SISTEMA.corrigiendo);
    enviarPregunta(anterior);
    await store.auditar({ tipo: 'correccion', lead_id: lead.id, conversacion_id: conv.id, detalle: { nodo: anterior } });
    return guardar('correccion');
  }

  // ── 6. Respuesta a la pregunta actual ──
  const id = conv.nodo_actual;

  // Pregunta de reanudación
  if (id === 'R-001') {
    const v = interpretarOpcion('R-001', SISTEMA.opcionesReanudar, entrada);
    if (v === 'continuar') {
      conv.nodo_actual = conv.datos.nodoReanudar;
      enviarPregunta(conv.nodo_actual);
      return guardar('reanudada');
    }
    if (v === 'reiniciar') {
      reiniciarRespuestas();
      await avanzar('004');
      return guardar('reinicio');
    }
    return invalida('pregunta', () => opciones(SISTEMA.reanudar(ctx()), SISTEMA.opcionesReanudar, 'R-001'));
  }

  const nodo = NODOS[id];
  let valor = null;
  if (nodo.tipo === 'pregunta') valor = interpretarOpcion(id, nodo.opciones, entrada);
  else if (nodo.tipo === 'texto') valor = validarNombre(entrada.texto);
  else if (nodo.tipo === 'contacto') valor = validarDisponibilidad(entrada.texto);

  if (valor == null) {
    const tipoError = nodo.tipo === 'pregunta' ? 'pregunta' : nodo.tipo === 'texto' ? 'nombre' : 'contacto';
    return invalida(tipoError, () => nodo.opciones && enviarPregunta(id));
  }

  // Respuesta válida: persistir
  const clave = nodo.clave || id;
  conv.datos.respuestas[clave] = valor;
  conv.datos.pila.push(id);
  await store.guardarRespuesta({
    lead_id: lead.id, conversacion_id: conv.id, nodo: id, clave, valor: String(valor),
    texto_original: entrada.texto || entrada.opcionId || null,
  });

  if (id === '002') setLead({ consentimiento_datos: valor === 'si', consentimiento_fecha: ahora });
  if (id === '003') setLead({ nombre: valor });
  if (id === '004') conv.servicio = Number(valor);

  if (nodo.tipo === 'contacto') {
    await crearSolicitudContacto(valor);
    await avanzar('S-CITA');
    return guardar(resultado);
  }

  const transicion = nodo.siguiente.destino ? nodo.siguiente : nodo.siguiente[valor];
  if (transicion.estado === 'pendiente') {
    await store.auditar({
      tipo: 'regla_pendiente', lead_id: lead.id, conversacion_id: conv.id,
      detalle: { nodo: id, valor, destino: transicion.destino, pregunta: transicion.nota },
    });
  }
  await avanzar(transicion.destino);
  return guardar(resultado);

  // ── auxiliares de cierre ──
  async function invalida(tipoError, reenviar) {
    conv.datos.intentos = (conv.datos.intentos || 0) + 1;
    texto(SISTEMA.invalido[tipoError] + (conv.datos.intentos >= MAX_INTENTOS_INVALIDOS ? `\n\n${SISTEMA.ofrecerAsesor}` : ''));
    reenviar?.();
    await store.auditar({ tipo: 'respuesta_invalida', lead_id: lead.id, conversacion_id: conv.id, detalle: { nodo: conv.nodo_actual, intentos: conv.datos.intentos } });
    return guardar('respuesta_invalida');
  }

  async function guardar(etiqueta) {
    conv.ultima_actividad = ahora;
    await store.actualizarConversacion(conv.id, conv);
    if (Object.keys(cambiosLead).length) await store.actualizarLead(lead.id, cambiosLead);
    return { salidas, resultado: etiqueta, nodo: conv.nodo_actual, conversacionId: conv.id, leadId: lead.id, estadoConversacion: conv.estado };
  }
}
