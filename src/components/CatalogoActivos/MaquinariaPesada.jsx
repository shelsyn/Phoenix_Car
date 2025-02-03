import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const maquinariaItems = [
  { name: "Montacargas", href: "/montacargas", image: "https://lc.cx/ncC75P" },
  { name: "Excavadoras", href: "/excavadoras", image: "https://lc.cx/ocQRB1" },
  { name: "Retroexcavadoras", href: "/retroexcavadoras", image: "https://lc.cx/hKxhiy" },
  { name: "Vibrocompactadores", href: "/vibrocompactadores", image: "https://lc.cx/tUsT47" },
  { name: "Motoniveladoras", href: "/motoniveladoras", image: "https://lc.cx/wi7-Jg" },
  { name: "Mini excavadoras", href: "/mini-excavadoras", image: "https://lc.cx/af9tnW" },
  { name: "Compresores", href: "/compresores", image: "https://lc.cx/dvSGGX" },
  { name: "Camiones", href: "/camiones", image: "https://lc.cx/44EAhL" },
  { name: "Grúas", href: "/gruas", image: "https://lc.cx/EoeP0i" },
  { name: "Martillos hidráulicos", href: "/martillos-hidraulicos", image: "https://lc.cx/0E3p32" },
  { name: "Bulldozer", href: "/bulldozer", image: "https://lc.cx/DPqp27" },
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
