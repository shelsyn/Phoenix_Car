/**
 * API del simulador del chatbot (página /probar-bot).
 * Usa el mismo motor que WhatsApp, pero devuelve las respuestas en vez de enviarlas.
 *
 * Solo está disponible en desarrollo (npm run dev) o si se define CHATBOT_PRUEBA=1.
 * Los "clientes" del simulador usan teléfonos que empiezan por 000, para no mezclarse con reales.
 */
import { procesarMensaje } from '@/lib/chatbot/motor.mjs';
import { obtenerStore } from '@/lib/chatbot/store/index.mjs';

const habilitado = () => process.env.NODE_ENV !== 'production' || process.env.CHATBOT_PRUEBA === '1';

export default async function handler(req, res) {
  if (!habilitado()) return res.status(404).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { telefono, texto, opcionId, minutosDespues } = req.body || {};
  if (!/^000\d{6,12}$/.test(String(telefono || ''))) return res.status(400).json({ error: 'Teléfono de prueba inválido' });

  // Permite simular el paso del tiempo (para probar reanudación y abandono)
  const ahora = new Date(Date.now() + (Number(minutosDespues) || 0) * 60 * 1000);

  try {
    const r = await procesarMensaje(
      obtenerStore(),
      { telefono, texto: texto || '', opcionId: opcionId || undefined, waId: `prueba-${telefono}-${Date.now()}-${Math.random()}`, tipo: opcionId ? 'interactive' : 'text' },
      { ahora }
    );
    return res.status(200).json({
      salidas: r.salidas,
      resultado: r.resultado,
      nodo: r.nodo || null,
      estadoConversacion: r.estadoConversacion || null,
      almacenamiento: obtenerStore().tipo,
    });
  } catch (err) {
    console.error('[chatbot-prueba]', err);
    return res.status(500).json({ error: err.message });
  }
}
