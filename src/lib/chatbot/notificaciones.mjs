/**
 * Notificaciones al equipo comercial.
 *
 * Envía un POST JSON a NOTIFICACIONES_WEBHOOK_URL (si está configurada) para cada evento relevante.
 * Esa URL puede ser un escenario de Make/Zapier, un Google Apps Script que escriba en una hoja,
 * un webhook de Slack/Teams, etc. Así el equipo se entera sin depender de una herramienta concreta.
 *
 * Opción gratuita recomendada: Google Sheets con docs/chatbot/google-sheets-apps-script.gs
 * (la clave va en la URL: .../exec?secreto=..., porque Apps Script no lee encabezados).
 *
 * Eventos: 'solicitud_contacto' | 'atencion_humana' | 'pendiente_revision'
 */
export async function notificar(evento, datos) {
  const url = process.env.NOTIFICACIONES_WEBHOOK_URL;
  if (!url) return { enviado: false, motivo: 'sin_webhook' };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.NOTIFICACIONES_WEBHOOK_SECRETO && { 'X-Chatbot-Secreto': process.env.NOTIFICACIONES_WEBHOOK_SECRETO }),
    },
    body: JSON.stringify({ evento, fecha: new Date().toISOString(), ...datos }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Webhook de notificaciones respondió ${res.status}`);
  return { enviado: true };
}
