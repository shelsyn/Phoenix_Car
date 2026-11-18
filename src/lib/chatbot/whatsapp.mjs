/**
 * Canal WhatsApp (Cloud API de Meta): recepción y envío.
 *
 * Variables de entorno: WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_API_VERSION (opcional),
 * WHATSAPP_DRY_RUN=1 (pruebas: no envía, registra en consola).
 */
const API_VERSION = process.env.WHATSAPP_API_VERSION || 'v23.0';
const cut = (t, max) => (t.length > max ? t.slice(0, max - 1) + '…' : t);

// ─────────── Recepción: mensaje de Meta → entrada del motor ───────────
export function aEntrada(message, contacts = []) {
  const perfil = contacts.find((c) => c.wa_id === message.from)?.profile?.name;
  const base = { telefono: message.from, waId: message.id, tipo: message.type, perfilNombre: perfil };
  switch (message.type) {
    case 'text':
      return { ...base, texto: message.text?.body || '' };
    case 'interactive': {
      const r = message.interactive?.button_reply || message.interactive?.list_reply;
      return { ...base, opcionId: r?.id, texto: r?.title || '' };
    }
    case 'button': // respuesta rápida de una plantilla
      return { ...base, opcionId: message.button?.payload, texto: message.button?.text || '' };
    default: // imagen, audio, ubicación, etc.
      return { ...base, texto: '' };
  }
}

// ─────────── Envío: salida del motor → mensaje de WhatsApp ───────────
export function aPayloads(to, salida) {
  if (salida.tipo === 'texto') {
    return [{ to, type: 'text', text: { body: cut(salida.texto, 4096), preview_url: true } }];
  }
  const ops = salida.opciones;
  const payloads = [];
  let cuerpo = salida.texto;
  if (cuerpo.length > 1024) {
    // El cuerpo de un mensaje interactivo admite 1024 caracteres: se envía el texto aparte
    payloads.push({ to, type: 'text', text: { body: cut(cuerpo, 4096) } });
    cuerpo = 'Elija una opción:';
  }
  if (ops.length <= 3 && ops.every((o) => o.titulo.length <= 20)) {
    payloads.push({
      to, type: 'interactive',
      interactive: {
        type: 'button', body: { text: cuerpo },
        action: { buttons: ops.map((o) => ({ type: 'reply', reply: { id: o.id, title: o.titulo } })) },
      },
    });
  } else if (ops.length <= 10) {
    payloads.push({
      to, type: 'interactive',
      interactive: {
        type: 'list', body: { text: cuerpo },
        action: {
          button: 'Ver opciones',
          sections: [{
            title: 'Opciones',
            rows: ops.map((o) => ({ id: o.id, title: cut(o.titulo, 24), ...(o.descripcion && { description: cut(o.descripcion, 72) }) })),
          }],
        },
      },
    });
  } else {
    payloads.push({ to, type: 'text', text: { body: cut(salida.texto, 4096) } });
  }
  return payloads;
}

export const registroPruebas = [];

export async function enviar(payload) {
  const body = { messaging_product: 'whatsapp', ...(payload.to && { recipient_type: 'individual' }), ...payload };
  if (process.env.WHATSAPP_DRY_RUN === '1') {
    registroPruebas.push(body);
    console.log('[whatsapp:dry-run]', JSON.stringify(body));
    return { messages: [{ id: `dry-${registroPruebas.length}` }] };
  }
  const { WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID } = process.env;
  if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) throw new Error('Faltan WHATSAPP_TOKEN o WHATSAPP_PHONE_NUMBER_ID');
  const res = await fetch(`https://graph.facebook.com/${API_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`WhatsApp API ${res.status}: ${JSON.stringify(data.error || data)}`);
  return data;
}

export function marcarLeido(messageId) {
  return enviar({ status: 'read', message_id: messageId }).catch(() => {});
}
