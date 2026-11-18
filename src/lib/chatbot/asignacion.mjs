/**
 * Asignación de especialistas (round-robin por servicio).
 *
 * Fuente de especialistas, en orden:
 *  1. Tabla `especialistas` del almacenamiento.
 *  2. Variable de entorno ESPECIALISTAS_JSON, ej.:
 *     [{"id":"ana","nombre":"Ana Pérez","telefono":"573001112233","email":"ana@ventrentall.com","servicios":[1,2,4]}]
 *     "servicios" vacío u omitido = atiende todos.
 *
 * Si no hay especialistas configurados, la solicitud queda "pendiente_asignacion" (no se pierde).
 */

function desdeEntorno() {
  try {
    const lista = JSON.parse(process.env.ESPECIALISTAS_JSON || '[]');
    return Array.isArray(lista) ? lista.filter((e) => e && e.id && e.activo !== false) : [];
  } catch {
    console.error('[chatbot] ESPECIALISTAS_JSON no es un JSON válido');
    return [];
  }
}

const atiende = (e, servicio) => !e.servicios || e.servicios.length === 0 || e.servicios.map(Number).includes(Number(servicio));

export async function asignarEspecialista(store, servicio, semilla = '') {
  let lista = (await store.listarEspecialistasActivos()) || [];
  const delStore = lista.length > 0;
  if (!delStore) lista = desdeEntorno();

  const candidatos = lista.filter((e) => atiende(e, servicio));
  if (!candidatos.length) return null;

  let elegido;
  if (delStore) {
    // El que lleva más tiempo sin recibir una asignación
    elegido = [...candidatos].sort(
      (a, b) => new Date(a.ultimo_asignado_en || 0) - new Date(b.ultimo_asignado_en || 0)
    )[0];
    await store.marcarAsignacion(elegido.id);
  } else {
    // Sin estado persistente: reparto estable según la solicitud
    let h = 0;
    for (const ch of String(semilla)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    elegido = candidatos[h % candidatos.length];
  }
  return elegido;
}
