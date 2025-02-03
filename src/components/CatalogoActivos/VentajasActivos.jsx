import { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const ventajas = [
  {
    category: "Administrativas y Financieras",
    points: [
      "No se tiene que hacer un análisis de inversión.",
      "Facilita la renovación tecnológica.",
      "Libera la carga administrativa implícita en el control y administración del Activo.",
    ],
    color: "from-gold-goldTitle to-gold-goldButton",
  },
  {
    category: "Operativas",
    points: [
      "Disminuye la cantidad de proveedores contratados.",
      "Optimiza los tiempos de mantenimiento de los Activos (opcional).",
      "Eleva la capacidad de reacción.",
      "Maximiza la disponibilidad de Activos.",
    ],
    color: "from-gray-500 to-gray-300",
  },
  {
    category: "Económicas y Tributarias",
    points: [
      "El canon de arrendamiento es 100% deducible de impuestos.",
      "No afecta el nivel de endeudamiento.",
      "Genera una mayor eficiencia presupuestal.",
      "Elimina los costos inciertos.",
      "Genera un permanente control de gastos.",
      "Disminuye los riesgos asociados a la posesión de Activos.",
    ],
    color: "from-gold-goldButton to-gold-goldTitle",
  },
];

export default function VentajasActivos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detectar si es escritorio o móvil
  useEffect(() => {
    const updateIsDesktop = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 640);
      }
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

  // Lógica del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % ventajas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="VentajasActivos"
      className="py-16 relative bg-gradient-to-br from-gray-100 via-white to-gold-goldButton"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gold-goldTitle tracking-tight">
            Ventajas
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
            Conoce cómo nuestro modelo de renting puede beneficiar a tu empresa,
            mejorando procesos y reduciendo costos.
          </p>
        </div>

        {/* Carrusel Responsive */}
        <div
          className={`flex ${
            isDesktop ? "flex-row justify-center" : "flex-col items-center"
          } gap-8 lg:gap-10`}
        >
          {ventajas.map((ventaja, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-700 ease-in-out ${
                activeIndex === index || isDesktop
                  ? "scale-100 z-20 opacity-100"
                  : "scale-90 opacity-80 hidden sm:block"
              }`}
            >
              {/* Carta */}
              <div className="w-full sm:w-72 lg:w-80 bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                {/* Ícono decorativo */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${ventaja.color} flex items-center justify-center shadow-md mb-4`}
                >
                  <BsCheckCircleFill className="text-white w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                {/* Título */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  {ventaja.category}
                </h3>
                {/* Lista de puntos */}
                <ul className="text-gray-700 space-y-3 text-sm sm:text-base">
                  {ventaja.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <BsCheckCircleFill className="text-gold-goldTitle w-5 h-5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
