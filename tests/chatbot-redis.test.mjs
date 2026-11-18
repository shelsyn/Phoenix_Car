/**
 * Pruebas del almacenamiento Upstash Redis (store/redis.mjs) contra un simulador de su API REST.
 * Ejecutar:  npm run test:chatbot
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

delete process.env.NOTIFICACIONES_WEBHOOK_URL;
delete process.env.ESPECIALISTAS_JSON;

const { procesarMensaje } = await import('../src/lib/chatbot/motor.mjs');
const { crearStoreRedis } = await import('../src/lib/chatbot/store/redis.mjs');

/** Simulador mínimo de la API REST de Upstash (comandos usados por el adaptador) */
function upstashFalso() {
  const kv = new Map();
  const listas = new Map();
  let llamadas = 0;
  const fetchImpl = async (url, opts) => {
    llamadas++;
    assert.equal(opts.headers.Authorization, 'Bearer token-prueba');
    const [c, key, ...a] = JSON.parse(opts.body);
    let result = null;
    switch (c) {
      case 'GET': result = kv.has(key) ? kv.get(key) : null; break;
      case 'SET': {
        if (a.includes('NX') && kv.has(key)) { result = null; break; }
        kv.set(key, a[0]); result = 'OK'; break;
      }
      case 'LPUSH': { const l = listas.get(key) || []; l.unshift(a[0]); listas.set(key, l); result = l.length; break; }
      case 'LTRIM': { const l = listas.get(key) || []; listas.set(key, l.slice(Number(a[0]), Number(a[1]) + 1)); result = 'OK'; break; }
      case 'LRANGE': { const l = listas.get(key) || []; const fin = Number(a[1]); result = l.slice(Number(a[0]), fin === -1 ? undefined : fin + 1); break; }
      default: return { ok: false, status: 400, json: async () => ({ error: `comando no soportado ${c}` }) };
    }
    return { ok: true, status: 200, json: async () => ({ result }) };
  };
  return { fetchImpl, kv, listas, get llamadas() { return llamadas; } };
}

function cliente(store, telefono) {
  let reloj = new Date('2026-11-18T15:00:00Z');
  let n = 0;
  return async (texto, minutos = 1) => {
    reloj = new Date(reloj.getTime() + minutos * 60000);
    return procesarMensaje(store, { telefono, texto, waId: `wamid.${telefono}.${++n}` }, { ahora: reloj });
  };
}

describe('Store Upstash Redis', () => {
  test('flujo completo hasta la cita y persistencia de datos', async () => {
    const r = upstashFalso();
    const store = crearStoreRedis({ url: 'https://falso.upstash.io', token: 'token-prueba', fetchImpl: r.fetchImpl });
    const di = cliente(store, '573001234567');
    assert.equal((await di('Hola')).nodo, '002');
    assert.equal((await di('si')).nodo, '003');
    assert.equal((await di('Marta Gómez')).nodo, '004');
    assert.equal((await di('5')).nodo, '502');
    assert.equal((await di('si')).nodo, '503');
    assert.equal((await di('si')).nodo, '504');
    const fin = await di('jueves 9 am');
    assert.equal(fin.resultado, 'cita_solicitada');

    const lead = await store.obtenerLeadPorTelefono('573001234567');
    assert.equal(lead.nombre, 'Marta Gómez');
    assert.equal(lead.consentimiento_datos, true);
    assert.equal(lead.estado, 'cita_solicitada');
    const [sol] = await store.ultimasSolicitudes(5);
    assert.equal(sol.servicio, 5);
    assert.equal(sol.disponibilidad_texto, 'jueves 9 am');
    assert.equal(sol.respuestas.antiguedad_5_anios, 'si');
  });

  test('el estado se conserva entre "ejecuciones" (nuevo objeto store, mismos datos)', async () => {
    const r = upstashFalso();
    const crear = () => crearStoreRedis({ url: 'https://falso.upstash.io', token: 'token-prueba', fetchImpl: r.fetchImpl });
    let n = 0;
    const msg = (texto) => procesarMensaje(crear(), { telefono: '573007654321', texto, waId: `w${++n}` });
    await msg('Hola');
    await msg('si');
    await msg('Pedro');
    const r4 = await msg('4');
    assert.equal(r4.nodo, '402'); // otro objeto store, pero recuerda dónde iba
  });

  test('usuario existente vuelve: no repite consentimiento ni nombre', async () => {
    const r = upstashFalso();
    const store = crearStoreRedis({ url: 'https://x', token: 'token-prueba', fetchImpl: r.fetchImpl });
    const di = cliente(store, '573000000001');
    await di('Hola'); await di('si'); await di('Ana'); await di('4'); await di('1'); await di('no');
    assert.equal((await di('no')).resultado, 'rechazo_ingresos');
    const otra = await di('Hola de nuevo');
    assert.equal(otra.nodo, '004');
  });

  test('mensaje duplicado se descarta', async () => {
    const r = upstashFalso();
    const store = crearStoreRedis({ url: 'https://x', token: 'token-prueba', fetchImpl: r.fetchImpl });
    const e = { telefono: '573000000002', texto: 'Hola', waId: 'wamid.MISMO' };
    await procesarMensaje(store, e);
    assert.equal((await procesarMensaje(store, e)).resultado, 'duplicado');
  });

  test('asesor: el bot calla en la siguiente ejecución y vuelve con MENÚ', async () => {
    const r = upstashFalso();
    const crear = () => crearStoreRedis({ url: 'https://x', token: 'token-prueba', fetchImpl: r.fetchImpl });
    let n = 0;
    const msg = (texto) => procesarMensaje(crear(), { telefono: '573000000003', texto, waId: `a${++n}` });
    await msg('Hola'); await msg('si'); await msg('Luis');
    assert.equal((await msg('asesor')).resultado, 'atencion_humana');
    assert.equal((await msg('¿hola?')).salidas.length, 0);
    assert.equal((await msg('menu')).nodo, '004');
  });

  test('round-robin con especialistas guardados en Redis', async () => {
    const r = upstashFalso();
    const store = crearStoreRedis({ url: 'https://x', token: 'token-prueba', fetchImpl: r.fetchImpl });
    r.kv.set('vr:especialistas', JSON.stringify([
      { id: 'ana', nombre: 'Ana', servicios: [1] },
      { id: 'luis', nombre: 'Luis', servicios: [1] },
    ]));
    for (const tel of ['573100000001', '573100000002']) {
      const di = cliente(store, tel);
      await di('Hola'); await di('si'); await di('Cliente'); await di('1'); await di('1'); await di('2');
      await di('mañana');
    }
    const sols = await store.ultimasSolicitudes(2);
    assert.deepEqual(sols.map((s) => s.especialista_id).sort(), ['ana', 'luis']);
  });

  test('error de Redis se propaga (el webhook responde con disculpa)', async () => {
    const store = crearStoreRedis({
      url: 'https://x', token: 'token-prueba',
      fetchImpl: async () => ({ ok: false, status: 500, json: async () => ({ error: 'caído' }) }),
    });
    await assert.rejects(() => procesarMensaje(store, { telefono: '573', texto: 'Hola', waId: 'z' }), /Redis/);
  });
});
