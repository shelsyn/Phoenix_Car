import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const maquinariaItems = [
  { name: "Montacargas", href: "/montacargas", image: "https://lc.cx/ncC75P" },
  { name: "Excavadoras", href: "/excavadoras", image: "https://lc.cx/ocQRB1" },
  { name: "Retroexcavadoras", href: "/retroexcavadoras", image: "https://lc.cx/hKxhiy" },
  { name: "Vibrocompactadores", href: "/vibrocompactadores", image: "https://s.alicdn.com/@sc04/kf/H92fcd8c3f8be4bfd9006618e5b785dbe6.jpg_720x720q50.jpg" },
  { name: "Motoniveladoras", href: "/motoniveladoras", image: "https://lc.cx/wi7-Jg" },
  { name: "Mini excavadoras", href: "/mini-excavadoras", image: "https://www.topconpositioning.com/content/topconpositioning/global/es/solutions/infrastructure/earthmoving/mini-excavators/_jcr_content/root/container/container/container/teaser_8671333_copy_.coreimg.jpeg/1709084559369/mini-excavator-solutions-web-teaser.jpeg" },
  { name: "Compresores", href: "/compresores", image: "https://maquinariapesadanegocios.com.co/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-10.20.04-1024x768.jpeg" },
  { name: "Camiones", href: "/camiones", image: "https://lc.cx/44EAhL" },
  { name: "Grúas", href: "/gruas", image: "https://gruasarlin.com/wp-content/uploads/2016/04/Grove-GRT8100.jpg" },
  { name: "Martillos hidráulicos", href: "/martillos-hidraulicos", image: "https://bbrskrental.s3-sa-east-1.amazonaws.com/images/slider/Martillos%20Hidraulicos_2020-09-07-184706.jpg" },
  { name: "Bulldozer", href: "/bulldozer", image: "https://webklat.s3.amazonaws.com/wp-content/uploads/sites/23/2022/09/19193655/Maquinaria-Pesada-Que-es-y-para-que-sirve-Komatsu-1.jpg" },
];

export default function MaquinariaPesada() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % maquinariaItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="MaquinariaPesada"
      className="py-16 relative"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 30%, rgba(230, 225, 210, 0.8) 70%, rgba(210, 190, 150, 0.6) 100%)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gold-goldTitle tracking-tight">
            Tipos de Maquinaria Pesada
          </h2>
          <p className="mt-4 text-gray-800 max-w-3xl mx-auto text-base sm:text-lg">
            Explora nuestra amplia selección de maquinaria pesada en PhoenixCar.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Imagen dinámica */}
          <div className="flex-1 text-center lg:text-left">
            <a href={maquinariaItems[activeIndex].href}>
              <img
                src={maquinariaItems[activeIndex].image}
                alt={maquinariaItems[activeIndex].name}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Lista dinámica */}
          <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 text-left">
            {maquinariaItems.map((item, index) => (
              <li
                key={item.name}
                className={`flex items-center gap-3 text-gray-800 cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "text-gold-goldTitle font-semibold"
                    : "hover:text-gold-goldButton"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <BsCheckCircleFill
                  className={`w-4 h-4 ${
                    index === activeIndex ? "text-gold-goldTitle" : "text-gray-500"
                  }`}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de cotizar */}
        <div className="mt-8 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gold-goldButton text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 inline-block"
          >
            Cotiza Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
