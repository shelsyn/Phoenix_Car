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
        'https://static.caronphone.com/public/brands/7/7_banner.webp',
      mobile:
        'https://derco.com.co/wp-content/uploads/2020/11/banner-noticia-citroen.jpg',
    },
    {
      desktop:
        'https://mye.cl/upload/marca/imagenes/24-02-2025-13-25-30_11-12-2023-07-47-36_banner-c5-tinified1.jpg',
      mobile:
        'https://www.citroen.co.uk/content/dam/citroen/master/b2c/models/new-c5-aircross/s/Citroen_C5_Aircross_ICE_750_936.jpg',
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
