/**
 * Almacenamiento en memoria. Úsese solo en desarrollo y pruebas:
 * en Vercel la memoria se pierde entre ejecuciones (usar store/postgres.mjs).
 *
 * Define la interfaz que debe cumplir cualquier almacenamiento.
 */
let seq = 0;
const nuevoId = (p) => `${p}_${(++seq).toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
const copia = (o) => (o ? structuredClone(o) : o);

export function crearStoreMemoria() {
  const db = { leads: [], conversaciones: [], respuestas: [], mensajes: [], solicitudes: [], eventos: [], especialistas: [] };

  return {
    tipo: 'memoria',
    _db: db, // para pruebas

    // ── Leads ──
    async obtenerLeadPorTelefono(telefono) {
      return copia(db.leads.find((l) => l.telefono === telefono));
    },
    async crearLead({ telefono, perfil_nombre }) {
      const ahora = new Date();
      const lead = {
        id: nuevoId('lead'), telefono, perfil_nombre: perfil_nombre || null, nombre: null,
        consentimiento_datos: null, consentimiento_fecha: null, estado: 'nuevo',
        creado_en: ahora, actualizado_en: ahora,
      };
      db.leads.push(lead);
      return copia(lead);
    },
    async actualizarLead(id, cambios) {
      const l = db.leads.find((x) => x.id === id);
      Object.assign(l, cambios, { actualizado_en: new Date() });
      return copia(l);
    },

    // ── Conversaciones ──
    async obtenerConversacionAbierta(leadId) {
      const abiertas = db.conversaciones.filter((c) => c.lead_id === leadId && ['activa', 'atencion_humana'].includes(c.estado));
      return copia(abiertas[abiertas.length - 1]);
    },
    async crearConversacion(leadId, ahora = new Date()) {
      const c = {
        id: nuevoId('conv'), lead_id: leadId, estado: 'activa', nodo_actual: null, servicio: null,
        datos: { pila: [], respuestas: {}, intentos: 0 }, resultado: null,
        iniciada_en: ahora, ultima_actividad: ahora, finalizada_en: null,
      };
      db.conversaciones.push(c);
      return copia(c);
    },
    async actualizarConversacion(id, cambios) {
      const c = db.conversaciones.find((x) => x.id === id);
      Object.assign(c, copia(cambios));
      return copia(c);
    },

    // ── Respuestas, mensajes, auditoría ──
    async guardarRespuesta(r) {
      db.respuestas.push({ id: nuevoId('resp'), creado_en: new Date(), ...r });
    },
    /** Devuelve false si el mensaje (por id de WhatsApp) ya se había registrado → evita procesar duplicados */
    async registrarMensaje(m) {
      if (m.wa_id && db.mensajes.some((x) => x.wa_id === m.wa_id)) return false;
      db.mensajes.push({ id: nuevoId('msg'), creado_en: new Date(), ...m });
      return true;
    },
    async actualizarMensaje(waId, cambios) {
      const m = db.mensajes.find((x) => x.wa_id === waId);
      if (m) Object.assign(m, cambios);
    },
    async auditar(evento) {
      db.eventos.push({ id: nuevoId('evt'), creado_en: new Date(), ...evento });
    },

    // ── Solicitudes de contacto y especialistas ──
    async crearSolicitud(s) {
      const sol = { id: nuevoId('sol'), creado_en: new Date(), ...s };
      db.solicitudes.push(sol);
      return copia(sol);
    },
    async listarEspecialistasActivos() {
      return copia(db.especialistas.filter((e) => e.activo !== false));
    },
    async marcarAsignacion(especialistaId, fecha = new Date()) {
      const e = db.especialistas.find((x) => x.id === especialistaId);
      if (e) e.ultimo_asignado_en = fecha;
    },
  };
}
