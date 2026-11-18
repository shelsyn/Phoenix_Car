import { useEffect, useRef, useState } from 'react';
import { canOptimize, optSrcSet, optUrl } from '@/lib/imagen';

/**
 * <img> optimizado: pide la imagen al optimizador de Next (/_next/image), que
 * la redimensiona al ancho de la pantalla, la convierte a WebP y la guarda en
 * caché en el servidor. Se usa exactamente igual que <img>.
 *
 * Si el optimizador falla (dominio no permitido, imagen rota, etc.) vuelve
 * automáticamente a la URL original, así que nunca empeora lo que ya había.
 */

export default function OptImg({
  src,
  sizes = '(max-width: 768px) 100vw, 50vw',
  maxWidth = 1920,
  quality = 70,
  loading = 'lazy',
  decoding = 'async',
  alt = '',
  onError,
  ...rest
}) {
  // 0 = optimizada, 1 = original (falló el optimizador), 2 = rota (fallaron ambas)
  const [stage, setStage] = useState(0);
  const ref = useRef(null);

  // Si la imagen falló antes de que React cargara, el evento onError se pierde:
  // se revisa al montar (y en cada cambio de etapa) si quedó rota.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setStage((s) => (s < 2 ? s + 1 : s));
  }, [stage]);

  if (stage === 2) {
    // Fondo neutro en lugar del ícono de imagen rota
    const { className = '', style } = rest;
    return (
      <span
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        className={`block bg-gradient-to-br from-slate-100 to-slate-200 ${className}`}
        style={{ minHeight: '8rem', ...style }}
      />
    );
  }

  if (stage === 1 || !canOptimize(src)) {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={(e) => {
          setStage(2);
          onError?.(e);
        }}
        {...rest}
      />
    );
  }

  return (
    <img
      ref={ref}
      src={optUrl(src, Math.min(828, maxWidth), quality)}
      srcSet={optSrcSet(src, maxWidth, quality)}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={() => setStage(1)}
      {...rest}
    />
  );
}
