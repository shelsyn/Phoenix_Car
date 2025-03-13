import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000, // Cambiar a 2000 para cambiar cada 2 segundos
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

// Flecha Siguiente
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
      onClick={onClick}
      aria-label="Siguiente"
    >
      &#10095;
    </div>
  );
}

// Flecha Anterior
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
      onClick={onClick}
      aria-label="Anterior"
    >
      &#10094;
    </div>
  );
}

export default function Carrusel(props) {
  const sliderImages = [
    
    './maquinariabanner.png',
    './cel3.gif',
    './BAN.png',
    './BANER23.png',

  ];

  return (
    <section id="Home" className="relative w-full overflow-hidden group">
      <Slider {...sliderSettings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <div
              className="w-screen"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '55vh', // Altura predeterminada para computadoras
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Estilos Responsivos */}
      <style>
        {`
          @media screen and (max-width: 767px) {
            #Home .slick-slide div {
              background-size: cover !important;
              background-repeat: no-repeat !important;
              background-position: center !important;
              height: 17vh !important; /* Ajustar la altura de la imagen para dispositivos móviles */
            }
          }

          @media screen and (max-width: 1024px) {
            #Home .slick-slide div {
              background-size: cover !important;
              background-repeat: no-repeat !important;
              background-position: center !important;
              height: 20vh !important; /* Ajustar la altura de la imagen para dispositivos iPad */
            }
          }
        `}
      </style>
    </section>
  );
}
