/**
 * Pruebas del motor del chatbot (casos de la especificación, sección 12).
 * Ejecutar:  npm run test:chatbot
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

process.env.SITE_URL = 'https://ventrentall.com';
delete process.env.NOTIFICACIONES_WEBHOOK_URL;
delete process.env.ESPECIALISTAS_JSON;

const { procesarMensaje, interpretarOpcion } = await import('../src/lib/chatbot/motor.mjs');
const { crearStoreMemoria } = await import('../src/lib/chatbot/store/memoria.mjs');
const { NODOS } = await import('../src/lib/chatbot/flujo.mjs');
const { aPayloads } = await import('../src/lib/chatbot/whatsapp.mjs');

let n = 0;
/** Simula un cliente de WhatsApp */
function cliente(store = crearStoreMemoria(), telefono = '5730000' + String(++n).padStart(5, '0')) {
  let reloj = new Date('2026-11-16T15:00:00Z');
  const c = {
    store, telefono,
    async di(texto, { opcionId, minutosDespues = 1, tipo } = {}) {
      reloj = new Date(reloj.getTime() + minutosDespues * 60000);
      const r = await procesarMensaje(store, { telefono, texto, opcionId, waId: `wamid.${telefono}.${++n}`, tipo }, { ahora: reloj });
      r.textos = r.salidas.map((s) => s.texto).join('\n---\n');
      return r;
    },
    /** Saludo + acepta datos + nombre */
    async registrado(nombre = 'Ana') {
      await c.di('Hola');
      await c.di('SI');
      return c.di(nombre);
    },
  };
  return c;
}

const lead = (c) => c.store._db.leads.find((l) => l.telefono === c.telefono);
const solicitudes = (c) => c.store._db.solicitudes.filter((s) => s.lead_id === lead(c).id);

// ───────────── Entrada ─────────────
describe('Entrada (nodos 001–004)', () => {
  test('usuario nuevo: bienvenida con política de datos', async () => {
    const c = cliente();
    const r = await c.di('Hola');
    assert.equal(r.nodo, '002');
    assert.match(r.textos, /bienvenido a VenteRental/);
    assert.match(r.textos, /digita SI/);
    assert.equal(lead(c).estado, 'en_conversacion');
  });

  test('NO acepta datos → salida sin consentimiento, sin captura comercial', async () => {
    const c = cliente();
    await c.di('Hola');
    const r = await c.di('no');
    assert.equal(r.resultado, 'sin_consentimiento');
    assert.equal(r.estadoConversacion, 'finalizada');
    assert.equal(lead(c).consentimiento_datos, false);
    assert.equal(lead(c).nombre, null);
  });

  test('quien dijo NO puede retomar y aceptar después', async () => {
    const c = cliente();
    await c.di('Hola');
    await c.di('no');
    const r = await c.di('Hola otra vez');
    assert.equal(r.nodo, '002');
    await c.di('si');
    assert.equal(lead(c).consentimiento_datos, true);
  });

  test('SI → pide nombre → menú con el nombre', async () => {
    const c = cliente();
    await c.di('Hola');
    const r1 = await c.di('Sí, acepto');
    assert.equal(r1.nodo, '003');
    const r2 = await c.di('me llamo ana maría');
    assert.equal(r2.nodo, '004');
    assert.match(r2.textos, /Sr\. Ana María, seleccione el número del servicio/);
    assert.equal(r2.salidas[0].opciones.length, 5);
  });

  test('nombre inválido se vuelve a pedir', async () => {
    const c = cliente();
    await c.di('Hola');
    await c.di('si');
    const r = await c.di('12345');
    assert.equal(r.resultado, 'respuesta_invalida');
    assert.equal(r.nodo, '003');
  });

  test('usuario existente: no repite consentimiento ni nombre', async () => {
    const c = cliente();
    await c.registrado('Carlos');
    await c.di('5'); await c.di('no'); // termina en una salida
    const r = await c.di('Buenas');
    assert.equal(r.nodo, '004');
    assert.match(r.textos, /Hola de nuevo, Sr\. Carlos/);
    assert.doesNotMatch(r.textos, /política de tratamiento/);
  });

  test('opción de servicio por número, texto o botón', () => {
    const ops = NODOS['004'].opciones;
    assert.equal(interpretarOpcion('004', ops, { texto: '3' }), '3');
    assert.equal(interpretarOpcion('004', ops, { texto: 'opción 4' }), '4');
    assert.equal(interpretarOpcion('004', ops, { texto: 'Crédito vehicular' }), '2');
    assert.equal(interpretarOpcion('004', ops, { opcionId: '004:5' }), '5');
    assert.equal(interpretarOpcion('004', ops, { texto: '9' }), null);
    assert.equal(interpretarOpcion('004', ops, { opcionId: '302:1' }), null); // botón de otra pregunta
  });
});

// ───────────── Flujo 1 ─────────────
describe('Flujo 1: compra de vehículo nuevo', () => {
  for (const [persona, nodoModalidad] of [['1', '102N'], ['2', '102J']]) {
    for (const modalidad of ['1', '2']) {
      test(`persona ${persona === '1' ? 'natural' : 'jurídica'} + ${modalidad === '1' ? 'crédito' : 'contado'} → especialista`, async () => {
        const c = cliente();
        await c.registrado();
        assert.equal((await c.di('1')).nodo, '101');
        assert.equal((await c.di(persona)).nodo, nodoModalidad);
        const r = await c.di(modalidad);
        assert.equal(r.nodo, '103');
        assert.match(r.textos, /¿En qué día y hora desea/);
        const fin = await c.di('Martes a las 10 am');
        assert.equal(fin.resultado, 'cita_solicitada');
        assert.equal(solicitudes(c).length, 1);
        assert.equal(solicitudes(c)[0].servicio, 1);
        assert.equal(solicitudes(c)[0].respuestas.tipo_persona, persona === '1' ? 'natural' : 'juridica');
      });
    }
  }
});

// ───────────── Flujo 2 ─────────────
describe('Flujo 2: crédito vehicular', () => {
  test('natural, no reportado, empleado → especialista', async () => {
    const c = cliente();
    await c.registrado();
    assert.equal((await c.di('2')).nodo, '203');
    const r = await c.di('natural');
    assert.equal(r.nodo, '201');
    assert.match(r.textos, /¿Está usted reportado en Data Crédito\?/);
    assert.equal((await c.di('no')).nodo, '202');
    assert.equal((await c.di('1')).nodo, '204');
    assert.equal((await c.di('mañana 3 pm')).resultado, 'cita_solicitada');
  });

  for (const t of ['2', '3', '4']) {
    test(`tipo de trabajo ${t} también llega al especialista`, async () => {
      const c = cliente();
      await c.registrado();
      await c.di('2'); await c.di('1'); await c.di('no');
      assert.equal((await c.di(t)).nodo, '204');
    });
  }

  test('natural reportado → pendiente de revisión, sin especialista', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('2'); await c.di('1');
    const r = await c.di('si');
    assert.equal(r.resultado, 'pendiente_revision');
    assert.equal(solicitudes(c).length, 0);
    assert.equal(lead(c).estado, 'pendiente_revision');
  });

  test('jurídica: pregunta por la empresa; no reportada → especialista', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('2');
    const r = await c.di('2');
    assert.equal(r.nodo, '201J');
    assert.match(r.textos, /¿Está su empresa reportado en Data Crédito\?/);
    assert.equal((await c.di('no')).nodo, '204');
  });

  test('jurídica reportada → pendiente de revisión', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('2'); await c.di('2');
    assert.equal((await c.di('si')).resultado, 'pendiente_revision');
    assert.equal(solicitudes(c).length, 0);
  });
});

// ───────────── Flujo 3 ─────────────
describe('Flujo 3: renta de activos productivos', () => {
  for (const activo of ['1', '2', '3', '4', '6']) {
    test(`activo ${activo}: antigüedad SI + ventas SI → especialista`, async () => {
      const c = cliente();
      await c.registrado();
      const r = await c.di('3');
      assert.match(r.textos, /únicamente para empresas/);
      assert.equal(r.nodo, '302');
      assert.equal((await c.di(activo)).nodo, '304');
      assert.equal((await c.di('1')).nodo, '305');
      assert.equal((await c.di('1')).nodo, '306');
      assert.equal((await c.di('viernes en la mañana')).resultado, 'cita_solicitada');
    });
  }

  test('antigüedad NO → salida por antigüedad (3 años), sin especialista', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('3'); await c.di('1');
    const r = await c.di('2');
    assert.equal(r.resultado, 'no_cumple_antiguedad');
    assert.match(r.textos, /3 años o más/);
    assert.equal(solicitudes(c).length, 0);
  });

  test('ventas NO → salida por ventas, sin especialista', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('3'); await c.di('1'); await c.di('1');
    const r = await c.di('no');
    assert.equal(r.resultado, 'no_cumple_ventas');
    assert.match(r.textos, /5 mil millones anual/);
    assert.equal(solicitudes(c).length, 0);
  });

  for (const sub of ['1', '2', '3', '4']) {
    test(`tecnología → subopción ${sub} → especialista directo`, async () => {
      const c = cliente();
      await c.registrado();
      await c.di('3');
      assert.equal((await c.di('5')).nodo, '303');
      assert.equal((await c.di(sub)).nodo, '306');
    });
  }
});

// ───────────── Flujo 4 ─────────────
describe('Flujo 4: renta de vehículos a largo plazo', () => {
  test('presentación + natural + no reportado + ingresos SI → especialista', async () => {
    const c = cliente();
    await c.registrado('Pedro');
    const r = await c.di('4');
    assert.match(r.textos, /SEÑOR PEDRO ÚNICAMENTE RENTAMOS A LARGO PLAZO MÁS DE UN AÑO/);
    assert.match(r.textos, /beneficios tributarios/);
    assert.equal(r.nodo, '402');
    assert.equal((await c.di('1')).nodo, '403');
    assert.equal((await c.di('no')).nodo, '404');
    assert.equal((await c.di('si')).nodo, '405');
    assert.equal((await c.di('lunes 8am')).resultado, 'cita_solicitada');
  });

  test('ingresos NO → mensaje original de rechazo por ingresos', async () => {
    const c = cliente();
    await c.registrado('Pedro');
    await c.di('4'); await c.di('1'); await c.di('no');
    const r = await c.di('no');
    assert.equal(r.resultado, 'rechazo_ingresos');
    assert.match(r.textos, /nivel de ingresos mínimo permitido/);
    assert.equal(lead(c).estado, 'no_califica_ingresos');
    assert.equal(solicitudes(c).length, 0);
  });

  test('natural reportado → pendiente de revisión', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('4'); await c.di('1');
    assert.equal((await c.di('si')).resultado, 'pendiente_revision');
  });

  test('jurídica → especialista (regla provisional P-11)', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('4');
    assert.equal((await c.di('2')).nodo, '405');
    assert.ok(c.store._db.eventos.some((e) => e.tipo === 'regla_pendiente' && e.detalle.pregunta === 'P-11'));
  });
});

// ───────────── Flujo 5 ─────────────
describe('Flujo 5: crédito para empresas', () => {
  test('antigüedad ≥5 SI + ventas SI → especialista', async () => {
    const c = cliente();
    await c.registrado();
    const r = await c.di('5');
    assert.match(r.textos, /únicamente para empresas/);
    assert.equal(r.nodo, '502');
    assert.match(r.textos, /mayor o igual a 5 años/);
    assert.equal((await c.di('si')).nodo, '503');
    assert.equal((await c.di('si')).nodo, '504');
    assert.equal((await c.di('jueves 2 pm')).resultado, 'cita_solicitada');
  });
  test('antigüedad NO → salida (5 años)', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('5');
    const r = await c.di('no');
    assert.equal(r.resultado, 'no_cumple_antiguedad');
    assert.match(r.textos, /5 años/);
  });
  test('ventas NO → salida por ventas', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('5'); await c.di('si');
    assert.equal((await c.di('no')).resultado, 'no_cumple_ventas');
  });
});

// ───────────── Robustez ─────────────
describe('Respuestas inválidas, comandos, abandono y reanudación', () => {
  test('respuesta inválida: repite la pregunta; al 3er intento ofrece asesor', async () => {
    const c = cliente();
    await c.registrado();
    let r = await c.di('quiero algo');
    assert.equal(r.resultado, 'respuesta_invalida');
    assert.equal(r.nodo, '004');
    await c.di('???');
    r = await c.di('no sé');
    assert.match(r.textos, /ASESOR/);
  });

  test('un botón de otra pregunta no se acepta (nunca salta de ruta)', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('3');
    const r = await c.di('SI', { opcionId: '304:si' }); // estamos en 302
    assert.equal(r.resultado, 'respuesta_invalida');
    assert.equal(r.nodo, '302');
  });

  test('mensaje sin texto (foto/audio) se maneja como inválido', async () => {
    const c = cliente();
    await c.registrado();
    const r = await c.di('', { tipo: 'image' });
    assert.equal(r.resultado, 'respuesta_invalida');
  });

  test('CORREGIR vuelve a la pregunta anterior y permite cambiar la ruta', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('4'); await c.di('1'); await c.di('no');
    const r = await c.di('corregir'); // estaba en 404, vuelve a 403
    assert.equal(r.nodo, '403');
    assert.equal((await c.di('si')).resultado, 'pendiente_revision');
  });

  test('MENÚ reinicia la selección de servicio sin pedir datos de nuevo', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('3'); await c.di('1');
    const r = await c.di('menú');
    assert.equal(r.nodo, '004');
    assert.doesNotMatch(r.textos, /política/);
  });

  test('ASESOR transfiere y el bot se calla hasta que escriba MENÚ', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('2');
    const r = await c.di('asesor');
    assert.equal(r.resultado, 'atencion_humana');
    assert.equal(lead(c).estado, 'atencion_humana');
    const silencio = await c.di('hola? sigo esperando');
    assert.equal(silencio.salidas.length, 0);
    const vuelta = await c.di('menu');
    assert.equal(vuelta.nodo, '004');
  });

  test('ASESOR funciona incluso antes de aceptar datos', async () => {
    const c = cliente();
    const r = await c.di('asesor');
    assert.equal(r.resultado, 'atencion_humana');
  });

  test('reanudación tras inactividad: continuar donde quedó', async () => {
    const c = cliente();
    await c.registrado('Laura');
    await c.di('5');
    const r = await c.di('hola', { minutosDespues: 90 });
    assert.equal(r.resultado, 'reanudacion_ofrecida');
    assert.match(r.textos, /Desea continuar/);
    const r2 = await c.di('1');
    assert.equal(r2.nodo, '502');
  });

  test('reanudación: empezar de nuevo', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('5');
    await c.di('hola', { minutosDespues: 90 });
    assert.equal((await c.di('2')).nodo, '004');
  });

  test('abandono (>24 h): nueva conversación, no repite datos', async () => {
    const c = cliente();
    await c.registrado();
    await c.di('3');
    const r = await c.di('hola', { minutosDespues: 60 * 30 });
    assert.equal(r.nodo, '004');
    assert.ok(c.store._db.conversaciones.some((x) => x.estado === 'abandonada'));
  });

  test('mensaje duplicado de Meta no se procesa dos veces', async () => {
    const store = crearStoreMemoria();
    const e = { telefono: '573009998877', texto: 'Hola', waId: 'wamid.DUP' };
    await procesarMensaje(store, e);
    const r = await procesarMensaje(store, e);
    assert.equal(r.resultado, 'duplicado');
  });

  test('error de integración en asignación: la solicitud se crea igual', async () => {
    const c = cliente();
    c.store.listarEspecialistasActivos = async () => { throw new Error('BD caída'); };
    await c.registrado();
    await c.di('1'); await c.di('1'); await c.di('2');
    const r = await c.di('hoy 5pm');
    assert.equal(r.resultado, 'cita_solicitada');
    assert.equal(solicitudes(c)[0].estado, 'pendiente_asignacion');
    assert.ok(c.store._db.eventos.some((e) => e.tipo === 'error_asignacion'));
  });

  test('asignación round-robin por servicio', async () => {
    const store = crearStoreMemoria();
    store._db.especialistas.push(
      { id: 'ana', nombre: 'Ana', servicios: [1], activo: true },
      { id: 'luis', nombre: 'Luis', servicios: [1], activo: true },
      { id: 'eva', nombre: 'Eva', servicios: [3], activo: true },
    );
    const asignados = [];
    for (let i = 0; i < 3; i++) {
      const c = cliente(store);
      await c.registrado();
      await c.di('1'); await c.di('1'); await c.di('2');
      await c.di('mañana');
      asignados.push(solicitudes(c)[0].especialista_id);
    }
    assert.deepEqual(asignados.slice(0, 2).sort(), ['ana', 'luis']);
    assert.ok(!asignados.includes('eva'));
  });
});

// ───────────── Integridad del flujo ─────────────
describe('Integridad del flujo', () => {
  test('todas las transiciones apuntan a nodos existentes', () => {
    for (const [id, n] of Object.entries(NODOS)) {
      if (!n.siguiente) continue;
      const destinos = n.siguiente.destino ? [n.siguiente] : Object.values(n.siguiente);
      for (const d of destinos) assert.ok(NODOS[d.destino], `${id} → ${d.destino} no existe`);
      if (n.opciones) for (const o of n.opciones) assert.ok(n.siguiente[o.valor], `${id}: opción ${o.valor} sin destino`);
    }
  });

  test('ninguna salida de rechazo/pendiente crea solicitud de contacto', () => {
    for (const id of ['S-002', 'S-ING', 'S-ANT3', 'S-ANT5', 'S-VEN', 'S-REV']) {
      assert.equal(NODOS[id].tipo, 'salida');
      assert.notEqual(NODOS[id].codigo, 'cita_solicitada');
    }
  });

  test('los mensajes interactivos cumplen los límites de WhatsApp', () => {
    for (const [id, n] of Object.entries(NODOS)) {
      if (!n.opciones) continue;
      const salida = { tipo: 'opciones', texto: n.texto({ nombre: 'Maximiliano Alejandro' }), opciones: n.opciones.map((o) => ({ id: `${id}:${o.valor}`, titulo: o.titulo, descripcion: o.descripcion })) };
      for (const p of aPayloads('573000000000', salida)) {
        if (p.type !== 'interactive') continue;
        const i = p.interactive;
        assert.ok(i.body.text.length <= 1024, `${id}: cuerpo largo`);
        if (i.type === 'button') i.action.buttons.forEach((b) => assert.ok(b.reply.title.length <= 20, `${id}: botón ${b.reply.title}`));
        if (i.type === 'list') {
          const rows = i.action.sections.flatMap((s) => s.rows);
          assert.ok(rows.length <= 10);
          rows.forEach((r) => assert.ok(r.title.length <= 24 && !r.title.endsWith('…'), `${id}: fila ${r.title}`));
        }
      }
    }
  });
});
