import Link from "next/link";
import Slider from "react-slick";

export default function ServiciosCarrusel() {
  const items = [
    {
      src: "https://trinyrent.com/wp-content/uploads/2023/06/renting-de-vehiculos-en-Peru.jpg",
      href: "/catalogoNatural",
      label: "Renting Vehicular para Personas Naturales",
    },
    {
      src: "https://rentingautomayor.com/wp-content/uploads/2022/06/RentingAutomayor_Web_Inicio_junio-03.png",
      href: "/catalogoEmpresa",
      label: "Renting Vehicular para Empresas",
    },
    {
      src: "https://www.organizacionforsa.com/img/dummies/alquiler.jpg",
      href: "/catalogoActivo",
      label: "Alquiler de Maquinaria Pesada",
    },
    {
      src: "https://static.wixstatic.com/media/af5ee7_abf4748fa18c4f8dbb4a626f8a98a783~mv2.jpg",
      href: "/medicina",
      label: "Renting de Equipos Médicos",
    },
    {
      src: "https://itelco.com.co/wp-content/uploads/2020/07/itelco-seguridad-electronica-768x381-1.jpg",
      href: "/celulares",
      label: "Renting de Equipos de Oficina",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Móviles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="servicios" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#047ab7] mb-4">
            Nuestro Catálogo de Soluciones
          </h2>
          <p className="text-lg text-gray-600 sm:text-xl">
            Descubre nuestras opciones y elige el servicio ideal para ti o tu empresa.
          </p>
        </div>

        {/* Carrusel */}
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-2">
              <Link href={item.href}>
                <div className="relative group rounded-lg overflow-hidden shadow-xl border border-gray-200">
                  {/* Imagen de fondo */}
                  <div
                    className="h-64 sm:h-72 lg:h-80 bg-gray-200 rounded-lg"
                    style={{
                      backgroundImage: `url(${item.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Capa de fondo con degradado en móviles */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent sm:group-hover:from-black/70 transition-all duration-300">
                    <span className="text-lg sm:text-xl font-bold text-white text-center">
                      {item.label}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
