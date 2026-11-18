import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { canOptimize, optSrcSet, optUrl } from '@/lib/imagen';

/**
 * Carrusel ligero (sin librerías) para banners.
 *
 * - Solo descarga la imagen de una diapositiva cuando está por mostrarse.
 * - La primera imagen se carga con prioridad alta (mejora el LCP).
 * - `poster`: imagen fija liviana que se muestra hasta que la diapositiva
 *   animada (GIF/WebP pesado) se vuelve activa.
 * - `srcMobile`: versión pequeña para pantallas < 768px.
 *
 * variant="banner": respeta la proporción del banner (el texto va dentro de la imagen).
 * variant="cover":  altura fija y la imagen recorta para llenar (fotos externas).
 */
export default function HeroCarousel({
  slides,
  variant = 'banner',
  aspect = '2000 / 545',
  interval = 5000,
  label = 'Banners destacados',
}) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const total = slides.length;

  const goTo = useCallback(
    (i) => {
      const next = (i + total) % total;
      setActive(next);
      // Precarga la actual y la siguiente
      setLoaded((prev) => {
        if (prev.has(next) && prev.has((next + 1) % total)) return prev;
        const s = new Set(prev);
        s.add(next);
        s.add((next + 1) % total);
        return s;
      });
    },
    [total]
  );

  useEffect(() => {
    if (total < 2 || paused) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => goTo(active + 1), interval);
    return () => clearInterval(id);
  }, [active, paused, interval, total, goTo]);

  const sizeClass =
    variant === 'cover' ? 'h-[42vh] min-h-[260px] md:h-[62vh] md:max-h-[640px]' : '';
  const sizeStyle = variant === 'banner' ? { aspectRatio: aspect } : undefined;

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={label}
      className="group relative w-full overflow-hidden bg-brand-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) goTo(active + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className={`relative w-full ${sizeClass}`} style={sizeStyle}>
        {slides.map((slide, i) => {
          const isActive = i === active;
          const shouldLoad = loaded.has(i);
          const src = slide.poster && !isActive ? slide.poster : slide.src;
          const srcMobile = slide.poster && !isActive ? slide.poster : slide.srcMobile;
          const content = (
            <picture>
              {srcMobile && (
                <source
                  media="(max-width: 767px)"
                  srcSet={canOptimize(srcMobile) ? optSrcSet(srcMobile, 1080) : srcMobile}
                  sizes="100vw"
                />
              )}
              <img
                src={canOptimize(src) ? optUrl(src, 1920, 75) : src}
                srcSet={canOptimize(src) ? optSrcSet(src, 1920, 75) : undefined}
                sizes="100vw"
                alt={slide.alt || ''}
                className={`h-full w-full ${variant === 'cover' ? 'object-cover' : 'object-contain'}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
                draggable={false}
              />
            </picture>
          );
          return (
            <div
              key={i}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              {shouldLoad &&
                (slide.href ? (
                  <a href={slide.href} tabIndex={isActive ? 0 : -1} className="block h-full w-full">
                    {content}
                  </a>
                ) : (
                  content
                ))}
            </div>
          );
        })}
        {variant === 'cover' && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent" />
        )}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-brand-ink shadow-lg backdrop-blur transition hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 md:block md:opacity-0"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-brand-ink shadow-lg backdrop-blur transition hover:bg-white focus-visible:opacity-100 group-hover:opacity-100 md:block md:opacity-0"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5 md:bottom-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all duration-300 md:h-2 ${
                  i === active ? 'w-6 bg-white md:w-8' : 'w-1.5 bg-white/50 hover:bg-white/80 md:w-2'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
