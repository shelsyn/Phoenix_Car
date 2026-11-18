import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Indicador de carga entre páginas.
 * - Barra de progreso arriba apenas el usuario hace clic en un enlace interno.
 * - Si la página tarda más de 500 ms, muestra además un aviso "Cargando…" en el centro.
 * - Al terminar, la barra se completa y desaparece.
 */
export default function RouteLoader() {
  const router = useRouter();
  const [fase, setFase] = useState('inactivo'); // inactivo | cargando | terminando
  const [lento, setLento] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const limpiar = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    const inicio = (url, { shallow } = {}) => {
      if (shallow) return;
      // Ignora cambios que solo afectan el #ancla de la misma página
      const destino = url.split('#')[0];
      const actual = router.asPath.split('#')[0];
      if (destino === actual) return;
      limpiar();
      setLento(false);
      setFase('cargando');
      timers.current.push(setTimeout(() => setLento(true), 500));
    };
    const fin = () => {
      limpiar();
      setLento(false);
      setFase((f) => (f === 'cargando' ? 'terminando' : f));
      timers.current.push(setTimeout(() => setFase('inactivo'), 400));
    };

    router.events.on('routeChangeStart', inicio);
    router.events.on('routeChangeComplete', fin);
    router.events.on('routeChangeError', fin);
    return () => {
      limpiar();
      router.events.off('routeChangeStart', inicio);
      router.events.off('routeChangeComplete', fin);
      router.events.off('routeChangeError', fin);
    };
  }, [router]);

  if (fase === 'inactivo') return null;

  return (
    <>
      {/* Barra superior */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-1" role="progressbar" aria-label="Cargando página">
        <div
          className={`h-full bg-gradient-to-r from-brand-gold via-brand-light to-brand-gold shadow-[0_0_10px_rgba(5,160,227,0.7)] ${
            fase === 'cargando' ? 'animate-carga' : 'w-full opacity-0 transition-all duration-300'
          }`}
        />
      </div>

      {/* Aviso si tarda */}
      <div
        className={`pointer-events-none fixed inset-0 z-[190] flex items-center justify-center transition-opacity duration-300 ${
          lento && fase === 'cargando' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-live="polite"
      >
        <div className="flex items-center gap-3 rounded-full bg-brand-ink/90 px-5 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-brand-gold" aria-hidden="true" />
          Cargando…
        </div>
      </div>
    </>
  );
}
