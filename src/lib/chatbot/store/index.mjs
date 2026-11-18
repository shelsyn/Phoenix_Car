/**
 * Selección del almacenamiento del chatbot.
 *
 * 1. Upstash Redis (recomendado, gratis, sin instalar paquetes): se activa solo si existen
 *    KV_REST_API_URL + KV_REST_API_TOKEN  (Vercel → Storage → Upstash for Redis)
 *    o UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN.
 * 2. Memoria: solo para desarrollo y pruebas (en Vercel se pierde entre mensajes).
 *
 * Alternativa Postgres (store/postgres.mjs + docs/chatbot/schema.sql) si en el futuro se
 * necesitan reportes en SQL: requiere `npm install @neondatabase/serverless@1.2.0`.
 */
import { crearStoreMemoria } from './memoria.mjs';
import { crearStoreRedis } from './redis.mjs';

let store;

export function obtenerStore() {
  if (store) return store;

  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) return (store = crearStoreRedis({ url, token }));

  if (process.env.VERCEL) {
    console.error('[chatbot] SIN BASE DE DATOS: configure Upstash Redis en Vercel. Las conversaciones no se conservarán.');
  }
  return (store = crearStoreMemoria());
}
