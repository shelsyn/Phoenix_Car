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
  autoplaySpeed: 4000, // cambiar a 2000 para cambiar cada 2 segundos
nextArrow: <CustomNextArrow />,
};

function CustomNextArrow(props) {
  return <div style={{ display: 'none' }} />;
}
export default function Carrusel(props) {
  const sliderImages = [
    // './portada.png',

    
    './carr4.png',
   '../ejem.png',
  '../encabezado3.png',
     './renault5.png',
     
    
  ];
  return (
    <section id="Home">
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
                height: '40vh', // Altura predeterminada para computadora
              }}
            >
              {/* Estilo adicional para dispositivos móviles */}
              <style>
                {`
                 @media screen and (max-width: 767px) {
                  .slick-slide div {
                    background-size: cover !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    height: 17vh !important; // Ajustar la altura de la imagen para dispositivos móviles
                  }
                }

                  @media screen and (max-width: 1024px) {
                    .slick-slide div {
                      background-size: cover !important;
                      background-repeat: no-repeat !important;
                      background-position: center !important;
                      height: 20vh !important; // Ajustar la altura de la imagen para dispositivos iPad
                    }
                  }
                `}
              </style>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
