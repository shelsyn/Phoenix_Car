/**
 * Ayudas para pedir imágenes al optimizador de Next (/_next/image).
 * Están en un archivo aparte (no en el componente OptImg) para que Fast Refresh
 * pueda actualizar los componentes sin recargar la página completa en desarrollo.
 */

// Deben existir en images.deviceSizes / images.imageSizes de next.config.js
const WIDTHS = [256, 384, 640, 828, 1080, 1200, 1920];

export function canOptimize(src) {
  if (!src || typeof src !== 'string') return false;
  if (src.startsWith('data:') || src.startsWith('/_next/')) return false;
  if (src.startsWith('/hero/') || src.startsWith('/marcas/')) return false; // ya optimizadas a mano
  const path = src.split('?')[0].toLowerCase();
  if (/\.(svg|gif)$/.test(path)) return false; // vectores y animaciones se sirven tal cual
  return src.startsWith('/') || src.startsWith('./') || /^https?:\/\//.test(src);
}

const normalize = (src) => (src.startsWith('./') ? src.slice(1) : src);

export function optUrl(src, w, q = 70) {
  return `/_next/image?url=${encodeURIComponent(normalize(src))}&w=${w}&q=${q}`;
}

export function optSrcSet(src, maxWidth = 1920, q = 70) {
  return WIDTHS.filter((w) => w <= maxWidth)
    .map((w) => `${optUrl(src, w, q)} ${w}w`)
    .join(', ');
}
