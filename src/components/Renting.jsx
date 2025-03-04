import { LifebuoyIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { AiOutlineDollar, AiOutlineCar } from 'react-icons/ai';
import { BsBox2, BsCalendar2Check, BsGraphUpArrow } from 'react-icons/bs';
import { MdOutlineDevices } from 'react-icons/md';

const cards = [
  {
    name: 'Sin cuota inicial',
    icon: AiOutlineDollar,
  },
  {
    name: 'Mantenimientos, impuestos y seguros incluidos',
    icon: LifebuoyIcon,
  },
  {
    name: 'Sin gastos y trámites de matrícula incluidos',
    icon: BsBox2,
  },
  {
    name: 'Libertad de capital de trabajo',
    icon: NewspaperIcon,
  },
  {
    name: 'No afectes tu nivel de endeudamiento y capacidad de pago',
    icon: BsCalendar2Check,
  },
  {
    name: 'Kit de carretera',
    icon: AiOutlineCar,
  },
  {
    name: 'Propaga la disponibilidad de activos',
    icon: MdOutlineDevices,
  },
  {
    name: 'Reduce la cantidad de proveedores',
    icon: BsGraphUpArrow,
  },
  {
    name: 'Excluye los costos',
    icon: AiOutlineDollar,
  },
];

export default function Renting() {
  return (
    <section id="Renting" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#047ab7]">
            ¿Qué es renting?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
          El renting es un servicio de alquiler de vehículos, activos productivos,
          computadores, celulares, que ofrece autonomía y control al cliente durante un
          tiempo determinado, sin comprarlos, facilitando el proceso de renovación total,
          incluye un paquete de servicios adaptado a las necesidades diarias de los clientes.
          </p>
        </div>

        {/* Contenedor de tarjetas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="relative flex flex-col items-center text-center p-4 sm:p-6 bg-white shadow-lg rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              {/* Ícono */}
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#1e4d89] to-[#05a0e3]">

                <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              {/* Título */}
              <h3 className="mt-3 text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                {card.name}
              </h3>
              {/* Decorativo */}
              <div className="absolute -bottom-2 w-8 h-1 sm:w-10 bg-gradient-to-r from-[#1e4d89] to-[#05a0e3] rounded-full"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
