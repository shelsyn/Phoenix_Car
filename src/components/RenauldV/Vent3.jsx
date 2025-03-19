import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function InsuranceCarousel() {
  const insurancePolicies = [
    {
      title: 'Póliza vida',
      description:
        'Asegura el futuro de tus seres queridos. Nuestro seguro de vida ofrece tranquilidad financiera, protegiendo a tu familia en caso de imprevistos.',
      imageUrl: 'https://www.santalucia.es/imagenes_slw4/1574962196248/1574962196248.webp',
      additionalInfo: [
        'Indemnización por fallecimiento.',
        'Cobertura por invalidez total y permanente.',
        'Beneficios para gastos funerarios.',
        'Asesoría personalizada.',
      ],
      color: 'bg-blue-500',
    },
    {
      title: 'Póliza todo riesgo autos',
      description:
        'Protege tu inversión con nuestra póliza todo riesgo. Cubrimos daños a tu vehículo, responsabilidad civil y más.',
      imageUrl: 'https://www.carroya.com/noticias/sites/default/files/entradillas/295512874seguro-todo-riesgo-carroya.jpg',
      additionalInfo: [
        'Cobertura completa contra daños.',
        'Protección contra robo y pérdida total.',
        'Responsabilidad civil incluida.',
        'Asistencia en carretera 24/7.',
      ],
      color: 'bg-green-500',
    },
    {
      title: 'Póliza todo riesgo motos',
      description:
        'Disfruta de la libertad de tu moto con total seguridad. Nuestra póliza todo riesgo te protege contra accidentes, robo y más.',
      imageUrl: 'https://www.colsubsidio.com/seguros-assets/statics/2024-03/Seguro_para_moto_section-informative_descripcion-main_image-1-1.jpg',
      additionalInfo: [
        'Cobertura para motos de cualquier cilindraje.',
        'Protección contra robo y daños.',
        'Asistencia legal en caso de accidente.',
        'Cobertura a terceros.',
      ],
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#047ab7] mb-8">
          Póliza de seguro
        </h2>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          className="max-w-5xl mx-auto"
        >
          {insurancePolicies.map((policy, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl overflow-hidden h-[24rem]"
            >
              <div className="md:w-1/2 relative h-60 md:h-full">
                <img
                  src={policy.imageUrl}
                  alt={policy.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 p-4 md:p-6 flex flex-col">
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#047ab7] mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{policy.description}</p>
                </div>
                <ul className="list-none text-gray-600 md:block hidden"> {/* Hide on small screens, show on medium and up */}
                  {policy.additionalInfo.map((info, infoIndex) => (
                    <li key={infoIndex} className="flex items-center mb-1">
                      <span className="text-sm before:content-['✓'] before:mr-2 before:text-blue-500">
                        {info}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default InsuranceCarousel;
