import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
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
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const sliderImages = [
    {
      desktop:
        'https://gwmhg.mx/wp-content/uploads/banners_web_gwm_poer.jpg',
      mobile:
        'https://i0.wp.com/haval.com.bd/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-17.34.23.jpg',
    },
    {
      desktop:
        'https://media.adtorqueedge.com/new-cars/gwmhaval-nz/tank300/banner.jpg',
      mobile:
        'https://www.gwm.cl/media/p51fdjl2/1673628575-ocrjng2qjf.webp',
    },
   
  ];

  let currentImage;
  let currentHeight;
  let currentBackgroundSize;

  return (
    <section id="Home" className="relative w-full overflow-hidden group">
      <Slider {...sliderSettings}>
        {sliderImages.map((image, index) => {
          if (isMobile) {
            currentImage = image.mobile;
            currentHeight = '60vh';
            currentBackgroundSize = 'cover'; // Change to 'cover' for mobile
          } else {
            currentImage = image.desktop;
            currentHeight = '60vh';
            currentBackgroundSize = 'cover'; // Keep 'cover' for desktop
          }
          return (
            <div key={index}>
              <div
                className="w-screen"
                style={{
                  backgroundImage: `url(${currentImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: currentBackgroundSize, // Use the dynamic backgroundSize
                  backgroundRepeat: 'no-repeat',
                  height: currentHeight,
                }}
              />
            </div>
          );
        })}
      </Slider>

      {/* Responsive Styles */}
      <style jsx>{`
        #Home .slick-slide div {
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
      `}</style>
    </section>
  );
}
