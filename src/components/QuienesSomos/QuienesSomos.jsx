
import React from 'react';
import { GlobeAltIcon, EyeIcon } from '@heroicons/react/24/outline';

const supportLinks = [
  {
    name: '¿Qué ofrecemos en Hipotecas?',
    description:
      'En nuestro servicio de hipotecas, ofrecemos asesoramiento personalizado para encontrar la mejor opción de financiamiento para la compra de tu hogar, adaptándonos a tus necesidades y perfil financiero.',
    icon: GlobeAltIcon,
  },
  {
    name: '¿Cómo lo hacemos posible?',
    description:
      'Gracias a nuestras alianzas con las principales entidades financieras, facilitamos el acceso a una amplia gama de productos hipotecarios, asegurando condiciones favorables y un proceso claro y eficiente.',
    icon: EyeIcon,
  },
];

export default function QuienesSomos() {
  return (
    <section id="aboutUs" className="pt-18">
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://example.com/your-image-url.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-10 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-center">Crédito de vehículo</h1>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-gray-100 shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gold-goldTitle p-5 shadow-lg">
                    <link.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-gray-500 text-justify">{link.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}