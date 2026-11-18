import { LifebuoyIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { AiOutlineDollar, AiOutlineCar } from 'react-icons/ai';
import { BsBox2, BsCalendar2Check, BsGraphUpArrow } from 'react-icons/bs';
import { MdOutlineDevices } from 'react-icons/md';
import Reveal from '@/components/ui/Reveal';

const cards = [
  { name: 'Sin cuota inicial', icon: AiOutlineDollar },
  { name: 'Mantenimientos, impuestos y seguros incluidos', icon: LifebuoyIcon },
  { name: 'Gastos y trámites de matrícula incluidos', icon: BsBox2 },
  { name: 'Libertad de capital de trabajo', icon: NewspaperIcon },
  { name: 'No afectes tu nivel de endeudamiento y capacidad de pago', icon: BsCalendar2Check },
  { name: 'Kit de carretera', icon: AiOutlineCar },
  { name: 'Propaga la disponibilidad de activos', icon: MdOutlineDevices },
  { name: 'Reduce la cantidad de proveedores', icon: BsGraphUpArrow },
  { name: 'Excluye los costos', icon: AiOutlineDollar },
];

export default function Renting() {
  return (
    <section id="Renting" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">Renting</span>
            <h2 className="section-title">¿Qué es renting?</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              El renting es un servicio de alquiler de vehículos, activos productivos, computadores y celulares que
              ofrece autonomía y control al cliente durante un tiempo determinado, sin comprarlos. Facilita la
              renovación total e incluye un paquete de servicios adaptado a tus necesidades diarias.
            </p>
            <a href="#ContactUs" className="btn-primary mt-8">
              Quiero más información
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 xl:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal
                key={card.name}
                delay={(i % 3) * 80}
                className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors sm:p-5 hover:border-brand/20 hover:bg-white hover:shadow-xl hover:shadow-brand/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-light text-white shadow-md shadow-brand/20">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-sans text-sm font-semibold sm:mt-4 sm:text-[15px] leading-snug text-slate-800">{card.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
