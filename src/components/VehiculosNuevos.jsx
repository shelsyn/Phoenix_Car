import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const vehiculos = [
  {
    marca: 'RENAULT',
    imagen: 'https://casabritanica.com.co/wp-content/uploads/2024/04/casabritanica-sedes-banner-llanogrande.webp', // URL
    logo: '/renaulds.avif',
    link: '/renault',
    descripcion: 'Descubre la innovación y el diseño francés.',
  },
  {
    marca: 'TOYOTA',
    imagen: 'https://www.matsuri.com.pe/wp-content/uploads/2022/10/Banner-01-2.jpg', // URL
    logo: '/toyor.avif',
    link: '/toyota',
    descripcion: 'Experimenta la calidad y confiabilidad de Toyota.',
  },
  {
    marca: 'SUZUKI',
    imagen: 'https://media.licdn.com/dms/image/v2/D5612AQHp-f3Zg_EwZA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690573974483?e=2147483647&v=beta&t=hHQnmZZ203vhs-vhaegj9USwhAnFLtTjHY_K0GNfxP8', // URL
    logo: '/susu.avif',
    link: '/suzuki',
    descripcion: 'Explora vehículos compactos y eficientes.',
  },
  {
    marca: 'CITROEN',
    imagen: 'https://www.citroen.com.do/wp-content/uploads/2024/07/1004x428.jpg', // URL
    logo: '/citro.avif',
    link: '/citroen',
    descripcion: 'Sumérgete en el confort y estilo único.',
  },
  {
    marca: 'SUBARU',
    imagen: 'https://www.subaru.com.pe/subaru/site/artic/20220817/imag/foto_0000000120220817202733/BANNER_HERO_desktop.png', // URL
    logo: '/sub.avif',
    link: '/subaru',
    descripcion: 'Siente la seguridad y la tracción integral.',
  },
  {
    marca: 'Chevrolet',
    imagen: 'https://www.chevrolet-sanjorge.com.ar/content/dam/chevrolet/sa/ar/es/master/home/index-subcontent/5-subite-a-tu-0km/banner-ofertas-desk_v2.jpg?imwidth=1920', // URL
    logo: '/ChevroletLogo.png',
    link: '/chevrolet',
    descripcion: 'Descubre la versatilidad y practicidad.',
  },
  {
    marca: 'GWM',
    imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2024/10/20241023-GREAT-WALL-MOTORS-COLOMBIA-INCHCAPE-ADELANTO-MARCAS-ORA-POER-HAVAL-TANK-01.jpg', // URL
    logo: '/gwm.avif',
    link: '/gwm',
    descripcion: 'Adéntrate en la tecnología y vanguardia.',
  },
  {
    marca: 'SERES',
    imagen: 'https://www.serescolombia.com/seres/site/artic/20230419/imag/foto_0000000220230419164215/Banner_Promo_Col_Modulo1_Mobile_1.png', // URL
    logo: '/seres.avif',
    link: '/seres',
    descripcion: 'Vive el futuro de la movilidad eléctrica.',
  },
];

function VehiculosNuevos() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % vehiculos.length);
    }, 5000); // Change brand every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBrandClick = (index) => {
    setCurrentBrandIndex(index);
  };

  const currentBrand = vehiculos[currentBrandIndex];

  return (
    <section className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold  text-[#047ab7]  text-center mb-6 md:mb-10">
        Vehículos Nuevos
        </h2>

        {/* Brand Logos Above */}
        <div className="flex flex-row gap-2 md:gap-6 overflow-x-auto md:overflow-x-hidden justify-center mb-6 md:mb-10">
          {vehiculos.map((vehiculo, index) => (
            <button
              key={index}
              onClick={() => handleBrandClick(index)}
              className={`w-14 h-14 md:w-24 md:h-24 rounded-full overflow-hidden transition-opacity duration-300 flex-shrink-0 border-2 border-transparent hover:border-[#047ab7] ${
                currentBrandIndex === index ? 'opacity-100 border-[#047ab7]' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={vehiculo.logo}
                alt={`${vehiculo.marca} Logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Main Brand Spotlight */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full md:w-[750px] h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl"> {/* Adjusted width */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
              <img
                src={currentBrand.imagen}
                alt={currentBrand.marca}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 md:p-10">
              <div className="flex items-center gap-2 md:gap-6">
                <img
                  src={currentBrand.logo}
                  alt={`${currentBrand.marca} Logo`}
                  className="w-14 h-14 md:w-24 md:h-24 object-contain bg-white rounded-full p-1 md:p-3"
                  loading="lazy"
                />
                <h3 className="text-white text-xl md:text-4xl font-bold">{currentBrand.marca}</h3>
              </div>
              <p className="text-white mt-1 md:mt-3 text-sm md:text-lg">{currentBrand.descripcion}</p>
              <Link href={currentBrand.link} passHref>
                <button className="mt-2 md:mt-5 bg-[#047ab7] text-white px-4 py-2 md:px-8 md:py-4 rounded-full hover:bg-[#036fa1] transition duration-300 text-sm md:text-base md:text-lg">
                  Explorar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehiculosNuevos;
