/**
 * Almacenamiento en Upstash Redis (plan gratuito) usando su API REST.
 * No necesita instalar paquetes: solo `fetch`.
 *
 * Variables (Vercel las crea solas al agregar "Upstash for Redis" desde Storage / Marketplace):
 *   KV_REST_API_URL + KV_REST_API_TOKEN   (o UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)
 *
 * Cumple la misma interfaz que store/memoria.mjs.
 *
 * Claves (prefijo "vr:"):
 *   lead:<tel>              JSON del lead
 *   conv:<id>               JSON de la conversación
 *   conv_abierta:<leadId>   id de la conversación activa del lead
 *   convs:<leadId>          lista de ids de conversaciones del lead
 *   resp:<convId>           lista de respuestas (historial)
 *   msgs:<leadId>           lista de los últimos 500 mensajes del lead
 *   wa:<waId>               marca de mensaje ya procesado (7 días) → evita duplicados
 *   sol:<codigo>            JSON de la solicitud de contacto
 *   solicitudes             lista de códigos de solicitud (más reciente primero)
 *   eventos                 lista de los últimos 5000 eventos de auditoría
 *   especialistas           JSON con la lista de especialistas
 */

const SIETE_DIAS = 7 * 24 * 60 * 60;

export function crearStoreRedis({ url, token, fetchImpl = fetch, prefijo = 'vr:' }) {
  if (!url || !token) throw new Error('Faltan la URL o el token de Upstash Redis');
  const base = url.replace(/\/$/, '');

  async function cmd(...args) {
    const res = await fetchImpl(base, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(args.map((a) => (typeof a === 'number' ? String(a) : a))),
      signal: AbortSignal.timeout(8000),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.error) throw new Error(`Redis ${args[0]}: ${data.error || res.status}`);
    return data.result;
  }
  const k = (...partes) => prefijo + partes.join(':');
  const leer = async (clave) => {
    const v = await cmd('GET', clave);
    return v ? JSON.parse(v) : null;
  };
  const escribir = (clave, obj) => cmd('SET', clave, JSON.stringify(obj));
  const nuevoId = (p) => `${p}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
  const telDe = (leadId) => leadId.replace(/^lead_/, '');

  return {
    tipo: 'redis',

    // ── Leads ──
    async obtenerLeadPorTelefono(telefono) {
      return leer(k('lead', telefono));
    },
    async crearLead({ telefono, perfil_nombre }) {
      const ahora = new Date().toISOString();
      const lead = {
        id: `lead_${telefono}`, telefono, perfil_nombre: perfil_nombre || null, nombre: null,
        consentimiento_datos: null, consentimiento_fecha: null, estado: 'nuevo', creado_en: ahora, actualizado_en: ahora,
      };
      // NX: si dos mensajes llegan a la vez, no se pisa el lead
      const ok = await cmd('SET', k('lead', telefono), JSON.stringify(lead), 'NX');
      return ok ? lead : leer(k('lead', telefono));
    },
    async actualizarLead(id, cambios) {
      const clave = k('lead', telDe(id));
      const lead = { ...(await leer(clave)), ...cambios, actualizado_en: new Date().toISOString() };
      await escribir(clave, lead);
      return lead;
    },

    // ── Conversaciones ──
    async obtenerConversacionAbierta(leadId) {
      const id = await cmd('GET', k('conv_abierta', leadId));
      if (!id) return null;
      const conv = await leer(k('conv', id));
      return conv && ['activa', 'atencion_humana'].includes(conv.estado) ? conv : null;
    },
    async crearConversacion(leadId, ahora = new Date()) {
      const conv = {
        id: nuevoId('conv'), lead_id: leadId, estado: 'activa', nodo_actual: null, servicio: null,
        datos: { pila: [], respuestas: {}, intentos: 0 }, resultado: null,
        iniciada_en: ahora, ultima_actividad: ahora, finalizada_en: null,
      };
      await escribir(k('conv', conv.id), conv);
      await cmd('SET', k('conv_abierta', leadId), conv.id);
      await cmd('LPUSH', k('convs', leadId), conv.id);
      return JSON.parse(JSON.stringify(conv));
    },
    async actualizarConversacion(id, cambios) {
      const clave = k('conv', id);
      const conv = { ...(await leer(clave)), ...cambios };
      await escribir(clave, conv);
      return conv;
    },

    // ── Respuestas, mensajes, auditoría ──
    async guardarRespuesta(r) {
      await cmd('LPUSH', k('resp', r.conversacion_id), JSON.stringify({ ...r, creado_en: new Date().toISOString() }));
    },
    async registrarMensaje(m) {
      if (m.wa_id) {
        const nuevo = await cmd('SET', k('wa', m.wa_id), '1', 'NX', 'EX', SIETE_DIAS);
        if (!nuevo) return false;
      }
      if (m.lead_id) {
        await cmd('LPUSH', k('msgs', m.lead_id), JSON.stringify({ ...m, creado_en: new Date().toISOString() }));
        await cmd('LTRIM', k('msgs', m.lead_id), 0, 499);
      }
      return true;
    },
    async actualizarMensaje(waId, cambios) {
      if (waId && cambios.estado_entrega) await cmd('SET', k('wa_estado', waId), cambios.estado_entrega, 'EX', SIETE_DIAS);
    },
    async auditar(evento) {
      await cmd('LPUSH', k('eventos'), JSON.stringify({ ...evento, creado_en: new Date().toISOString() }));
      await cmd('LTRIM', k('eventos'), 0, 4999);
    },

    // ── Solicitudes y especialistas ──
    async crearSolicitud(s) {
      const sol = { id: nuevoId('sol'), creado_en: new Date().toISOString(), ...s };
      await escribir(k('sol', sol.codigo), sol);
      await cmd('LPUSH', k('solicitudes'), sol.codigo);
      return sol;
    },
    async listarEspecialistasActivos() {
      return ((await leer(k('especialistas'))) || []).filter((e) => e.activo !== false);
    },
    async marcarAsignacion(especialistaId, fecha = new Date()) {
      const lista = (await leer(k('especialistas'))) || [];
      const e = lista.find((x) => x.id === especialistaId);
      if (!e) return; // especialistas definidos por variable de entorno: no se persiste
      e.ultimo_asignado_en = fecha;
      await escribir(k('especialistas'), lista);
    },

    // Utilidad para consultas/reportes simples
    async ultimasSolicitudes(n = 50) {
      const codigos = (await cmd('LRANGE', k('solicitudes'), 0, n - 1)) || [];
      return Promise.all(codigos.map((c) => leer(k('sol', c))));
    },
  };
}
