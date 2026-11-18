/**
 * Webhook de la WhatsApp Cloud API — módulo de recepción de mensajes.
 * URL a configurar en Meta:  https://TU-DOMINIO/api/whatsapp
 *
 * Variables: WHATSAPP_VERIFY_TOKEN, WHATSAPP_APP_SECRET (+ las del envío, ver .env.example)
 */
import crypto from 'crypto';
import { procesarMensaje } from '@/lib/chatbot/motor.mjs';
import { obtenerStore } from '@/lib/chatbot/store/index.mjs';
import { aEntrada, aPayloads, enviar, marcarLeido } from '@/lib/chatbot/whatsapp.mjs';

export const config = { api: { bodyParser: false } }; // cuerpo crudo para verificar la firma

const MENSAJE_ERROR =
  'Disculpe, tuvimos un inconveniente técnico al procesar su mensaje. Por favor intente de nuevo en unos minutos o escriba ASESOR.';

async function leerCuerpo(req) {
  const partes = [];
  for await (const p of req) partes.push(typeof p === 'string' ? Buffer.from(p) : p);
  return Buffer.concat(partes);
}

function firmaValida(cuerpo, firma) {
  const secreto = process.env.WHATSAPP_APP_SECRET;
  if (!secreto) return process.env.WHATSAPP_DRY_RUN === '1'; // sin secreto solo en modo prueba
  if (!firma?.startsWith('sha256=')) return false;
  const esperada = Buffer.from('sha256=' + crypto.createHmac('sha256', secreto).update(cuerpo).digest('hex'));
  const recibida = Buffer.from(firma);
  return esperada.length === recibida.length && crypto.timingSafeEqual(esperada, recibida);
}

export default async function handler(req, res) {
  // Verificación del webhook (Meta la hace al configurarlo)
  if (req.method === 'GET') {
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
    if (mode === 'subscribe' && token && token === process.env.WHATSAPP_VERIFY_TOKEN) return res.status(200).send(challenge);
    return res.status(403).send('Token de verificación inválido');
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end();
  }

  const cuerpo = await leerCuerpo(req);
  if (!firmaValida(cuerpo, req.headers['x-hub-signature-256'])) return res.status(401).send('Firma inválida');

  let data;
  try {
    data = JSON.parse(cuerpo.toString('utf8'));
  } catch {
    return res.status(400).send('JSON inválido');
  }

  const store = obtenerStore();
  const resultados = [];

  for (const entry of data.entry || []) {
    for (const change of entry.changes || []) {
      const value = change.value || {};

      // Confirmaciones de entrega/lectura de nuestros mensajes
      for (const st of value.statuses || []) {
        await store.actualizarMensaje(st.id, { estado_entrega: st.status }).catch(() => {});
      }

      for (const message of value.messages || []) {
        const entrada = aEntrada(message, value.contacts);
        try {
          const r = await procesarMensaje(store, entrada);
          resultados.push(r.resultado);
          if (r.resultado === 'duplicado') continue;
          marcarLeido(message.id);
          for (const salida of r.salidas) {
            for (const payload of aPayloads(entrada.telefono, salida)) {
              const enviado = await enviar(payload);
              await store.registrarMensaje({
                wa_id: enviado?.messages?.[0]?.id || null, lead_id: r.leadId, conversacion_id: r.conversacionId,
                direccion: 'saliente', tipo: payload.type, contenido: payload,
              });
            }
          }
        } catch (err) {
          // Se responde 200 igualmente: si no, Meta reintenta y el cliente recibiría mensajes repetidos
          console.error('[chatbot] error procesando', message.id, err);
          resultados.push('error');
          await store.auditar({ tipo: 'error_procesamiento', detalle: { wa_id: message.id, error: err.message } }).catch(() => {});
          await enviar({ to: entrada.telefono, type: 'text', text: { body: MENSAJE_ERROR } }).catch(() => {});
        }
      }
    }
  }

  return res.status(200).json({ ok: true, resultados });
}
