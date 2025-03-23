import Link from "next/link";
import Slider from "react-slick";

export default function ServiciosCarrusel() {
  const items = [
    {
      src: "https://static.motor.es/fotos-noticias/2018/08/dudas-renting-coches-201849541_1.jpg",
      href: "/catalogoNatural",
      label: "Renting Vehicular para Personas Naturales",
      description: "Disfruta de un vehículo nuevo sin preocuparte por la depreciación.",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D4E12AQHmP8GvodguAQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691202677700?e=2147483647&v=beta&t=7TBJRr2gzk0UVXLLd1JE8SAcoN8SYjkwc-DphcuSuWY",
      href: "/catalogoEmpresa",
      label: "Renting Vehicular para Empresas",
      description: "Optimiza tu flota vehicular y reduce costos operativos.",
    },
    {
      src: "https://www.organizacionforsa.com/img/dummies/alquiler.jpg",
      href: "/catalogoActivo",
      label: "Alquiler de Maquinaria Pesada",
      description: "Accede a maquinaria de alta calidad para tus proyectos.",
    },
    {
      src: "https://www.promedco.com/images/Noticias_2022/promedco-equipos-medicos-9-11-22-1.jpg",
      href: "/medicina",
      label: "Renting de Equipos Médicos",
      description: "Equipa tu clínica con tecnología de punta sin grandes inversiones.",
    },
    {
      src: "https://m.lineaitalia.com.mx/wp-content/uploads/2022/12/Captura-de-pantalla-2022-12-20-a-las-18.41.51-1024x639.png",
      href: "/celulares",
      label: "Renting de Equipos de Oficina",
      description: "Mantén tu oficina actualizada con equipos modernos y eficientes.",
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
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobiles
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
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#047ab7] mb-4">
            Nuestro Catálogo de Soluciones
          </h2>
          <p className="text-lg text-gray-700 sm:text-xl max-w-2xl mx-auto">
            Descubre nuestras opciones y elige el servicio ideal para ti o tu
            empresa. Ofrecemos soluciones innovadoras y flexibles.
          </p>
        </div>

        {/* Carrusel */}
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-3">
              <Link href={item.href}>
                <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Imagen de fondo */}
                  <div
                    className="h-64 sm:h-72 lg:h-80 bg-gray-200 rounded-2xl transition-opacity duration-300 group-hover:opacity-90"
                    style={{
                      backgroundImage: `url(${item.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Capa de fondo con degradado */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                    <span className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
                      {item.label}
                    </span>
                    <p className="text-sm text-gray-200 text-center hidden group-hover:block">
                      {item.description}
                    </p>
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
