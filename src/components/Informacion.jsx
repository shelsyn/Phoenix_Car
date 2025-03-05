import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaSyncAlt, FaFileContract, FaShoppingCart } from "react-icons/fa";

const Informacion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Intersection Observer para detectar si el componente está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#animated-cards");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  const options = [
    {
      id: 1,
      icon: <FaSyncAlt />,
      title: "Renueva tus activos",
      description: "Actualiza tu tecnología con equipos más avanzados.",
    },
    {
      id: 2,
      icon: <FaFileContract />,
      title: "Extiende tu contrato",
      description: "Mantén tus activos actuales por más tiempo sin complicaciones.",
    },
    {
      id: 3,
      icon: <FaShoppingCart />,
      title: "Compra tus activos",
      description: "Adquiere tus equipos al mejor precio con opciones de financiamiento.",
    },
  ];

  return (
    <section id="animated-cards" className="py-16 px-6 bg-gray-50">
      {/* Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-[#047ab7] sm:text-5xl mb-4">
          Opciones al Finalizar tu Contrato
        </h1>
        <p className="text-lg text-gray-700">
          Explora nuestras soluciones y elige la opción que mejor se adapte a tus necesidades.
        </p>
      </motion.div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {options.map((option, index) => (
          <motion.div
            key={option.id}
            className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Ícono con mejor diseño */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#b9a63b] text-white rounded-full text-3xl mx-auto shadow-lg">
              {option.icon}
            </div>

            {/* Contenido */}
            <h3 className="text-xl font-semibold text-gray-900 text-center mt-4">
              {option.title}
            </h3>
            <p className="text-gray-600 text-center mt-2">
              {option.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Informacion;
