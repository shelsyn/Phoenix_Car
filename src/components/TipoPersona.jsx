import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/ui/Reveal';
import OptImg from '@/components/ui/OptImg';

const items = [
  {
    src: '/catalogo/ext/static-dudas-renting-coches-201849541-1-6c6b97.webp',
    href: '/catalogoNatural',
    label: 'Renting Vehicular para Personas Naturales',
    description: 'Disfruta de un vehículo nuevo sin preocuparte por la depreciación.',
  },
  {
    src: '/catalogo/ext/media-1691202677700-bc9a94.webp',
    href: '/catalogoEmpresa',
    label: 'Renting Vehicular para Empresas',
    description: 'Optimiza tu flota vehicular y reduce costos operativos.',
  },
  {
    src: '/catalogo/ext/organizacionforsa-alquiler-fa2eac.webp',
    href: '/catalogoActivo',
    label: 'Alquiler de Maquinaria Pesada',
    description: 'Accede a maquinaria de alta calidad para tus proyectos.',
  },
  {
    src: '/catalogo/ext/promedco-promedco-equipos-medicos-9-11-22-1-13a017.webp',
    href: '/medicina',
    label: 'Renting de Equipos Médicos',
    description: 'Equipa tu clínica con tecnología de punta sin grandes inversiones.',
  },
  {
    src: '/imprefondo.jpg',
    href: '/celulares',
    label: 'Renting de Equipos de Oficina',
    description: 'Mantén tu oficina actualizada con equipos modernos y eficientes.',
  },
];

// Diseño en mosaico: las dos primeras tarjetas son más grandes
const layout = ['lg:col-span-3 lg:row-span-2', 'lg:col-span-3 lg:row-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'];

export default function ServiciosCatalogo() {
  return (
    <section id="servicios" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Soluciones</span>
          <h2 className="section-title">Nuestro catálogo de soluciones</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Descubre nuestras opciones y elige el servicio ideal para ti o tu empresa.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[200px] lg:grid-cols-6">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={i * 60} className={`${layout[i]} ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
              <Link
                href={item.href}
                className="group relative block h-full overflow-hidden rounded-3xl bg-slate-200 shadow-sm ring-1 ring-slate-900/5"
              >
                <OptImg
                  src={item.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.label}</h3>
                    <p className="mt-1 max-w-md text-sm text-white/80">{item.description}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-brand-gold group-hover:text-brand-ink">
                    <ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
