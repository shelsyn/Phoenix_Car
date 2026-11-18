// Utilidades de texto para interpretar lo que escribe el usuario

/** minúsculas, sin tildes ni signos, espacios simples */
export function normalizar(t = '') {
  return String(t)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9ñ ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** "juan  PEREZ" → "Juan Perez" */
export function capitalizar(t = '') {
  return t
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/(^|\s)(\p{L})/gu, (_, s, l) => s + l.toUpperCase());
}

// Comandos globales disponibles en cualquier punto (mejora propuesta)
const COMANDOS = {
  asesor: ['asesor', 'asesora', 'agente', 'humano', 'hablar con un asesor', 'hablar con asesor', 'persona real'],
  menu: ['menu', 'inicio', 'volver al menu', 'menu principal'],
  corregir: ['corregir', 'atras', 'volver', 'regresar', 'me equivoque'],
  reiniciar: ['reiniciar', 'empezar de nuevo', 'comenzar de nuevo'],
};

export function detectarComando(texto) {
  const t = normalizar(texto);
  if (!t) return null;
  for (const [cmd, frases] of Object.entries(COMANDOS)) if (frases.includes(t)) return cmd;
  return null;
}

const SALUDOS = ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'ola', 'info', 'informacion', 'si', 'no'];

/** Valida un nombre: 2–60 caracteres, solo letras y espacios, que no sea un saludo */
export function validarNombre(texto) {
  const limpio = String(texto || '')
    .replace(/^(me llamo|mi nombre es|soy|yo soy)\s+/i, '')
    .trim();
  if (limpio.length < 2 || limpio.length > 60) return null;
  if (!/^[\p{L}][\p{L}' .-]*$/u.test(limpio)) return null;
  if (SALUDOS.includes(normalizar(limpio))) return null;
  return capitalizar(limpio);
}

/** Valida la disponibilidad para la llamada: texto libre con algo de contenido */
export function validarDisponibilidad(texto) {
  const t = String(texto || '').trim();
  if (t.length < 3 || t.length > 200) return null;
  if (!/[\p{L}\d]/u.test(t)) return null;
  if (['si', 'no', 'ok', 'listo'].includes(normalizar(t))) return null;
  return t;
}
