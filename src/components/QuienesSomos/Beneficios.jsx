
import { LifebuoyIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { AiOutlineDollar, AiOutlineCar } from 'react-icons/ai';
import { BsBox2, BsCalendar2Check } from 'react-icons/bs';

const cards = [
    {
        name: 'Financia Tu Sueño: Crédito para Vehículos Nuevos y Usados',
        icon: AiOutlineDollar,
    },
    {
        name: 'Tasa Especial: ¡Aprovecha la Mejor Tasa del Mercado!',
        icon: LifebuoyIcon,
    },
    {
        name: '100% Financiado: Adquiere Tu Carro con el Mejor Financiamiento',
        icon: BsBox2,
    },
    {
        name: '¡Rápida Aprobación!: Agilidad en tu Trámite',
        icon: NewspaperIcon,
    },
    {
        name: 'Flexibilidad Total: Cuotas Extraordinarias Sin Costos Adicionales',
        icon: BsCalendar2Check,
    },
    {
        name: 'Pago a tu Medida: Elige la Cuota que Mejor se Ajuste a Ti',
        icon: AiOutlineCar,
    },
    {
        name: '¡Sin Esperas!: Estudio de Crédito en 24 Horas.',
        icon: BsBox2,
    },
    {
        name: 'Libertad Financiera: Abonos Extra sin Sanciones',
        icon: AiOutlineDollar,
    },
];

export default function Beneficios() {
    return (
        <section id="Beneficios" className="">
            <div className="relative isolate overflow-hidden bg-white mt-5 py-0 sm:py-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-gold-goldTitle xs:text-3xl lg:text-4xl"> Nuestros Beneficios </h2>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 mt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                        {cards.map((card) => (
                            <div key={card.name} className="flex gap-x-4 rounded-xl border border-dashed border-gold-goldButton p-5">
                                <card.icon className="h-12 w-12 flex-none text-gold-goldButton" aria-hidden="true" />
                                <div className="lg:text-lg sm:text-base leading-7">
                                    <h3 className="font-semibold text-slate-900">{card.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}