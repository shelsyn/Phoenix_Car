/**
 * Receptor GRATUITO de avisos del chatbot → Google Sheets (+ correo opcional).
 *
 * Instalación (5 minutos):
 *  1. Crea una hoja de cálculo en Google Sheets, por ejemplo "Leads WhatsApp VentaRentAll".
 *  2. Menú Extensiones → Apps Script. Borra lo que haya y pega TODO este archivo.
 *  3. Cambia SECRETO por una frase larga inventada y, si quieres correo, pon EMAIL_EQUIPO.
 *  4. Implementar → Nueva implementación → tipo "Aplicación web":
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier usuario
 *     Autoriza los permisos y copia la URL que termina en /exec.
 *  5. En Vercel crea la variable:
 *       NOTIFICACIONES_WEBHOOK_URL = <URL /exec>?secreto=<tu SECRETO>
 *     y vuelve a publicar el sitio.
 *
 * Cada solicitud de contacto, pedido de asesor o caso pendiente de revisión aparecerá como una fila nueva.
 */

const SECRETO = 'CAMBIA-ESTA-FRASE-SECRETA';
const EMAIL_EQUIPO = ''; // ej. 'gerencia@ventrentall.com' (vacío = sin correo). Gmail gratis: ~100 correos/día

const ENCABEZADOS = ['Fecha', 'Evento', 'Código', 'Servicio', 'Nombre', 'Teléfono', 'Disponibilidad',
  'Especialista', 'Tel. especialista', 'Respuestas', 'Estado seguimiento'];

const NOMBRES_EVENTO = {
  solicitud_contacto: 'Solicitud de contacto',
  atencion_humana: 'Pidió asesor',
  pendiente_revision: 'Pendiente de revisión',
};

function doPost(e) {
  if (!e || !e.parameter || e.parameter.secreto !== SECRETO) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'no autorizado' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const d = JSON.parse(e.postData.contents || '{}');
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(ENCABEZADOS);
    hoja.getRange(1, 1, 1, ENCABEZADOS.length).setFontWeight('bold');
    hoja.setFrozenRows(1);
  }

  const lead = d.lead || {};
  const sol = d.solicitud || {};
  const esp = d.especialista || {};
  const fila = [
    new Date(d.fecha || Date.now()),
    NOMBRES_EVENTO[d.evento] || d.evento,
    sol.codigo || '',
    sol.servicio || d.servicio || '',
    lead.nombre || lead.perfil_nombre || '',
    lead.telefono ? "'+" + lead.telefono : '', // apóstrofo: que Sheets no lo convierta en número
    sol.disponibilidad || '',
    esp.nombre || (d.evento === 'solicitud_contacto' ? 'Sin asignar' : ''),
    esp.telefono || '',
    formatearRespuestas(d.respuestas),
    'Pendiente',
  ];
  hoja.appendRow(fila);

  if (EMAIL_EQUIPO) {
    const destinatarios = [EMAIL_EQUIPO, esp.email].filter(Boolean).join(',');
    MailApp.sendEmail({
      to: destinatarios,
      subject: `[WhatsApp] ${fila[1]} ${sol.codigo || ''} — ${fila[4]}`,
      body: ENCABEZADOS.slice(0, 10).map((h, i) => `${h}: ${fila[i]}`).join('\n') +
        `\n\nWhatsApp del cliente: https://wa.me/${lead.telefono || ''}`,
    });
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

function formatearRespuestas(r) {
  if (!r) return '';
  return Object.keys(r).filter((k) => k !== 'consentimiento_datos').map((k) => `${k}: ${r[k]}`).join(' | ');
}
