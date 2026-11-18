/**
 * Almacenamiento en Postgres (Neon / Vercel Postgres) con el driver HTTP de Neon.
 * Requiere: npm install @neondatabase/serverless@1.2.0  y el esquema de docs/chatbot/schema.sql
 *
 * Cumple la misma interfaz que store/memoria.mjs.
 */
import { neon } from '@neondatabase/serverless';

export function crearStorePostgres(databaseUrl) {
  const sql = neon(databaseUrl);
  const uno = (filas) => filas[0] || null;

  return {
    tipo: 'postgres',

    async obtenerLeadPorTelefono(telefono) {
      return uno(await sql`SELECT * FROM leads WHERE telefono = ${telefono}`);
    },
    async crearLead({ telefono, perfil_nombre }) {
      // ON CONFLICT: si dos mensajes llegan a la vez, no se duplica el lead
      return uno(await sql`
        INSERT INTO leads (telefono, perfil_nombre, estado) VALUES (${telefono}, ${perfil_nombre || null}, 'nuevo')
        ON CONFLICT (telefono) DO UPDATE SET actualizado_en = now()
        RETURNING *`);
    },
    async actualizarLead(id, c) {
      return uno(await sql`
        UPDATE leads SET
          nombre = COALESCE(${c.nombre ?? null}, nombre),
          consentimiento_datos = COALESCE(${c.consentimiento_datos ?? null}, consentimiento_datos),
          consentimiento_fecha = COALESCE(${c.consentimiento_fecha ?? null}, consentimiento_fecha),
          estado = COALESCE(${c.estado ?? null}, estado),
          actualizado_en = now()
        WHERE id = ${id} RETURNING *`);
    },

    async obtenerConversacionAbierta(leadId) {
      return uno(await sql`
        SELECT * FROM conversaciones WHERE lead_id = ${leadId} AND estado IN ('activa','atencion_humana')
        ORDER BY iniciada_en DESC LIMIT 1`);
    },
    async crearConversacion(leadId, ahora = new Date()) {
      return uno(await sql`
        INSERT INTO conversaciones (lead_id, estado, datos, iniciada_en, ultima_actividad)
        VALUES (${leadId}, 'activa', ${JSON.stringify({ pila: [], respuestas: {}, intentos: 0 })}::jsonb, ${ahora}, ${ahora})
        RETURNING *`);
    },
    async actualizarConversacion(id, c) {
      return uno(await sql`
        UPDATE conversaciones SET
          estado = COALESCE(${c.estado ?? null}, estado),
          nodo_actual = COALESCE(${c.nodo_actual ?? null}, nodo_actual),
          servicio = CASE WHEN ${'servicio' in c} THEN ${c.servicio ?? null}::int ELSE servicio END,
          datos = COALESCE(${c.datos ? JSON.stringify(c.datos) : null}::jsonb, datos),
          resultado = COALESCE(${c.resultado ?? null}, resultado),
          ultima_actividad = COALESCE(${c.ultima_actividad ?? null}, ultima_actividad),
          finalizada_en = COALESCE(${c.finalizada_en ?? null}, finalizada_en)
        WHERE id = ${id} RETURNING *`);
    },

    async guardarRespuesta(r) {
      await sql`
        INSERT INTO respuestas (lead_id, conversacion_id, nodo, clave, valor, texto_original)
        VALUES (${r.lead_id}, ${r.conversacion_id}, ${r.nodo}, ${r.clave}, ${r.valor}, ${r.texto_original})`;
    },
    async registrarMensaje(m) {
      const filas = await sql`
        INSERT INTO mensajes (wa_id, lead_id, conversacion_id, direccion, tipo, contenido)
        VALUES (${m.wa_id}, ${m.lead_id}, ${m.conversacion_id}, ${m.direccion}, ${m.tipo}, ${JSON.stringify(m.contenido || {})}::jsonb)
        ON CONFLICT (wa_id) DO NOTHING RETURNING id`;
      return filas.length > 0;
    },
    async actualizarMensaje(waId, c) {
      await sql`UPDATE mensajes SET estado_entrega = ${c.estado_entrega ?? null} WHERE wa_id = ${waId}`;
    },
    async auditar(e) {
      await sql`
        INSERT INTO eventos_auditoria (lead_id, conversacion_id, tipo, detalle)
        VALUES (${e.lead_id ?? null}, ${e.conversacion_id ?? null}, ${e.tipo}, ${JSON.stringify(e.detalle || {})}::jsonb)`;
    },

    async crearSolicitud(s) {
      return uno(await sql`
        INSERT INTO solicitudes_contacto
          (codigo, lead_id, conversacion_id, servicio, servicio_nombre, disponibilidad_texto, respuestas, especialista_id, estado)
        VALUES (${s.codigo}, ${s.lead_id}, ${s.conversacion_id}, ${s.servicio}, ${s.servicio_nombre}, ${s.disponibilidad_texto},
                ${JSON.stringify(s.respuestas || {})}::jsonb, ${s.especialista_id}, ${s.estado})
        RETURNING *`);
    },
    async listarEspecialistasActivos() {
      return sql`SELECT * FROM especialistas WHERE activo = true`;
    },
    async marcarAsignacion(especialistaId, fecha = new Date()) {
      await sql`UPDATE especialistas SET ultimo_asignado_en = ${fecha} WHERE id = ${especialistaId}`;
    },
  };
}
