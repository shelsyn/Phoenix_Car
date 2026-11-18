import { FaSyncAlt, FaFileContract, FaShoppingCart } from 'react-icons/fa';
import Reveal from '@/components/ui/Reveal';

const options = [
  {
    id: 1,
    icon: FaSyncAlt,
    title: 'Renueva tus activos',
    description: 'Actualiza tu tecnología con equipos más avanzados.',
  },
  {
    id: 2,
    icon: FaFileContract,
    title: 'Extiende tu contrato',
    description: 'Mantén tus activos actuales por más tiempo sin complicaciones.',
  },
  {
    id: 3,
    icon: FaShoppingCart,
    title: 'Compra tus activos',
    description: 'Adquiere tus equipos al mejor precio con opciones de financiamiento.',
  },
];

const Informacion = () => (
  <section id="animated-cards" className="relative overflow-hidden bg-brand-ink py-20 text-white">
    <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
          Fin de contrato
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Opciones al finalizar tu contrato</h2>
        <p className="mt-4 text-white/70 sm:text-lg">
          Explora nuestras soluciones y elige la opción que mejor se adapte a tus necesidades.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {options.map((option, index) => (
          <Reveal
            key={option.id}
            delay={index * 120}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-brand-gold/40 hover:bg-white/10"
          >
            <span className="absolute right-6 top-6 font-display text-5xl font-bold text-white/5">0{index + 1}</span>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-2xl text-brand-ink shadow-lg">
              <option.icon aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-white">{option.title}</h3>
            <p className="mt-2 text-white/70">{option.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Informacion;
