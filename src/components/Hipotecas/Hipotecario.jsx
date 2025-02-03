import React from 'react';
import Image from "next/image";
import { GlobeAltIcon, EyeIcon, HomeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const supportLinks = [
  {
    name: 'Compra De Vivienda Nueva Y Usada',
    description: `Se aceptan ingresos familiares.
Tienes de 20 a 30 años para pagar tu crédito.
Financiación hasta del 70% para vivienda NO VIS y hasta del 80% para vivienda VIS.
Se pueden realizar abonos extraordinarios a capital para reducir el plazo o el valor de la cuota.
Acceso a los programas del Gobierno vigentes, de cobertura de tasa y de subsidio de cuota inicial para la compra de vivienda nueva`,
    icon: HomeIcon,
  },
  {
    name: 'Compra de cartera',
    description: `Sin costo de escrituración.
Reducción de plazo y ahorro de intereses.
Permite tener una tasa más baja a la que tienes actualmente y así mejorar tu flujo de caja.
Con la compra de cartera trasladas tu crédito hipotecario vigente de otra entidad financiera con cuota fija en pesos o en Unidad de Valor Real (UVR).`,
    icon: CurrencyDollarIcon,
  },
];

export default function Hipotecario() {
  return (
    <section id="aboutUs" className="pt-18">
      <div className="bg-white">
        <div className="relative pb-32">
          <div className="absolute inset-0">
            <Image className="h-full w-full object-cover opacity-75" src="https://www.semana.com/resizer/v2/Y6C7P6UHDBC3FHPUIKLBQHY4NM.jpg?auth=add0fb2473c72632eb179721d01d35f8ef6e24c30b95d31e6f9ae0466fd8d11e&smart=true&quality=75&width=1280&height=720" alt="" />
            <div className="absolute inset-0 bg-gold-goldTitle mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-10 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-center">Crédito Hipotecario</h1>
          </div>
        </div>
        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-gray-100 shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gold-goldTitle p-5 shadow-lg">
                    <link.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <div className="mt-4 text-base text-gray-500 text-justify">
                    {link.description.split('\n').map((line, index) => (
                      <div key={index} className="flex items-center">
                        <span className="mr-2"><link.icon className="h-4 w-4 text-gray-500" aria-hidden="true" /></span>
                        <p className="">{line.trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
