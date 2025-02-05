import React, { useState, useEffect } from 'react';

export default function Carrusel() {
  const sliderImages = [
    './carr4.png',
    '../ejem.png',
    '../encabezado3.png',
    './renault5.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente de slide cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="Home" className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{
              height: '50vh', // Ajuste de altura inicial
              maxWidth: '100vw', // Ocupa todo el ancho
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Asegura que ocupe todo el contenedor
            />
          </div>
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Anterior"
      >
        &#10094;
      </button>

      {/* Botón siguiente */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Siguiente"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Estilos Responsivos */}
      <style>
        {`
          @media screen and (max-width: 767px) {
            #Home div {
              height: 15vh !important; /* Altura ajustada para móviles */
            }

            #Home img {
              object-fit: cover !important; /* Asegura que las imágenes llenen el contenedor */
            }
          }

          @media screen and (min-width: 768px) and (max-width: 1024px) {
            #Home div {
              height: 40vh !important; /* Altura media para tablets */
            }
          }

          @media screen and (min-width: 1025px) {
            #Home div {
              height: 50vh !important; /* Altura para pantallas grandes */
            }
          }
        `}
      </style>
    </section>
  );
}
