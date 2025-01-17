import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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
      icon: "🔄",
      title: "Renueva tus activos",
      description: "Actualiza tu tecnología con equipos más avanzados.",
    },
    {
      id: 2,
      icon: "📜",
      title: "Extiende tu contrato",
      description: "Mantén tus activos actuales por más tiempo.",
    },
    {
      id: 3,
      icon: "💼",
      title: "Compra tus activos",
      description: "Adquiere tus activos al mejor precio del mercado.",
    },
  ];

  return (
    <section id="animated-cards" className="bg-goldWhite py-16 px-6">
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
        {/* Título en dorado */}
        <h1 className="text-4xl font-extrabold text-gold-goldTitle sm:text-5xl mb-4">
          Opciones al Finalizar tu Contrato
        </h1>
        <p className="text-lg text-goldSubtitle mt-4">
          Explora nuestras soluciones y elige la opción que mejor se adapte a
          tus necesidades.
        </p>
      </motion.div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {options.map((option, index) => (
          <motion.div
            key={option.id}
            className="relative bg-goldWhite border border-goldHeader rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            {/* Ícono */}
            <div className="flex items-center justify-center w-14 h-14 bg-goldButton text-white rounded-full text-2xl mx-auto mb-4">
              {option.icon}
            </div>
            {/* Título */}
            <h3 className="text-xl font-semibold text-goldText text-center mb-2">
              {option.title}
            </h3>
            {/* Descripción */}
            <p className="text-goldSubtitle text-center">
              {option.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Informacion;
