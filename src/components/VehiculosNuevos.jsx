import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';
import OptImg from '@/components/ui/OptImg';

const vehiculos = [
  {
    marca: 'Renault',
    imagen: '/catalogo/ext/casabritanica-casabritanica-sedes-banner-llanogrande-b644f7.webp',
    logo: '/renaulds.avif',
    link: '/renault',
    descripcion: 'Descubre la innovación y el diseño francés.',
  },
  {
    marca: 'Suzuki',
    imagen: '/catalogo/ext/media-1690573974483-abd0de.webp',
    logo: '/susu.avif',
    link: '/suzuki',
    descripcion: 'Explora vehículos compactos y eficientes.',
  },
  {
    marca: 'Citroën',
    imagen: '/catalogo/citroen-c5-aircross.webp',
    logo: '/citro.avif',
    link: '/citroen',
    descripcion: 'Sumérgete en el confort y estilo único.',
  },
  {
    marca: 'Subaru',
    imagen: '/catalogo/ext/subaru-banner-hero-desktop-24f496.webp',
    logo: '/sub.avif',
    link: '/subaru',
    descripcion: 'Siente la seguridad y la tracción integral.',
  },
  {
    marca: 'Chevrolet',
    imagen: '/catalogo/ext/chevrolet-sanjorge-banner-ofertas-desk-v2-c78f9c.webp',
    logo: '/ChevroletLogo.png',
    link: '/chevrolet',
    descripcion: 'Descubre la versatilidad y practicidad.',
  },
  {
    marca: 'GWM',
    imagen: '/catalogo/ext/elcarrocolombiano-20241023-great-wall-motors-colombia-inch-a9b761.webp',
    logo: '/gwm.avif',
    link: '/gwm',
    descripcion: 'Adéntrate en la tecnología y vanguardia.',
  },
  {
    marca: 'Seres',
    imagen: '/catalogo/seres-5.webp',
    logo: '/seres.avif',
    link: '/seres',
    descripcion: 'Vive el futuro de la movilidad eléctrica.',
  },
];

function VehiculosNuevos() {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);

  // Solo empieza a cargar imágenes y a rotar cuando la sección es visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => setCurrent((i) => (i + 1) % vehiculos.length), 5000);
    return () => clearInterval(id);
  }, [inView, paused]);

  // Imágenes ya solicitadas (la actual y la siguiente); se mantienen para no parpadear
  const [seen, setSeen] = useState(() => new Set([0, 1]));
  useEffect(() => {
    setSeen((prev) => {
      const next = (current + 1) % vehiculos.length;
      if (prev.has(current) && prev.has(next)) return prev;
      return new Set([...prev, current, next]);
    });
  }, [current]);

  const brand = vehiculos[current];

  return (
    <section ref={ref} className="bg-white py-20" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Concesionario</span>
          <h2 className="section-title">Vehículos nuevos</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">Trabajamos con las mejores marcas del mercado.</p>
        </Reveal>

        {/* Selector de marcas */}
        <div className="mt-10 flex snap-x gap-3 overflow-x-auto pb-2 sm:justify-center" role="tablist" aria-label="Marcas">
          {vehiculos.map((v, i) => (
            <button
              key={v.marca}
              type="button"
              role="tab"
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className={`flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                i === current
                  ? 'border-brand bg-brand text-white shadow-lg shadow-brand/25'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand/40 hover:text-brand'
              }`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src={v.logo} alt="" className="h-5 w-5 object-contain" loading="lazy" />
              </span>
              {v.marca}
            </button>
          ))}
        </div>

        {/* Marca destacada */}
        <div className="relative mx-auto mt-8 aspect-[4/3] max-w-5xl overflow-hidden rounded-3xl bg-slate-200 shadow-2xl sm:aspect-[16/7]">
          {inView &&
            vehiculos.map((v, i) =>
              !seen.has(i) ? null : (
              <OptImg
                key={v.marca}
                src={v.imagen}
                sizes="(max-width: 1024px) 100vw, 1024px"
                alt={i === current ? v.marca : ''}
                aria-hidden={i !== current}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
              )
            )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-lg sm:h-20 sm:w-20">
                <img src={brand.logo} alt="" className="h-full w-full object-contain" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-4xl">{brand.marca}</h3>
                <p className="mt-1 text-sm text-white/80 sm:text-base">{brand.descripcion}</p>
              </div>
            </div>
            <Link href={brand.link} className="btn-primary self-start sm:self-auto">
              Explorar {brand.marca}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehiculosNuevos;
