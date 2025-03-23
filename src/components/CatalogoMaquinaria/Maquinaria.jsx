import Image from "next/image";
import { FaTools, FaIndustry, FaCogs, FaShieldAlt, FaTruck, FaWhatsapp, FaChevronRight, FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function MaquinariaIndustrial() {
  const ventajas = [
    { titulo: "Evita costos elevados", texto: "Reduce la inversión inicial y evita endeudamientos innecesarios en maquinaria costosa.", icon: <FaShieldAlt /> },
    { titulo: "Equipos siempre disponibles", texto: "Accede a maquinaria cuando la necesites, sin preocuparte por almacenaje o depreciación.", icon: <FaIndustry /> },
    { titulo: "Mantenimiento incluido", texto: "Recibe equipos en óptimas condiciones con mantenimientos regulares sin costos adicionales.", icon: <FaTools /> },
    { titulo: "Última tecnología", texto: "Accede a equipos modernos y eficientes para mejorar tu productividad.", icon: <FaCogs /> },
  ];

  const maquinaria = [
    { nombre: "Empacadoras", img: "/EMPAQUE.jpg", descripcion: "Optimiza tu proceso de empaque con nuestras empacadoras de alta eficiencia." },
    { nombre: "Termoformadoras", img: "/termoformadora-3.jpg", descripcion: "Crea envases personalizados con nuestras termoformadoras de última generación." },
    { nombre: "Líneas de llenado", img: "/LENEAS.jpg", descripcion: "Automatiza tu producción con nuestras líneas de llenado precisas y rápidas." },
    { nombre: "Compresores", img: "/Compresores.jpg", descripcion: "Potencia tus operaciones con nuestros compresores de aire confiables y eficientes." },
    { nombre: "Tornos", img: "/ton.jpg", descripcion: "Realiza trabajos de precisión con nuestros tornos de alta calidad." },
    { nombre: "Plantas eléctricas", img: "/plam.jpg", descripcion: "Asegura la continuidad de tus operaciones con nuestras plantas eléctricas de respaldo." },
  ];

  const beneficios = [
    { titulo: "Renovación de Equipos", texto: "Accede a tecnología de punta sin preocupaciones.", icon: <FaCogs /> },
    { titulo: "Variedad de Equipos", texto: "Contamos con un amplio catálogo para cada necesidad.", icon: <FaIndustry /> },
    { titulo: "Mantenimiento Incluido", texto: "Evita costos adicionales en mantenimiento y reparaciones.", icon: <FaTools /> },
    { titulo: "Entrega Rápida", texto: "Disponibilidad inmediata y logística eficiente.", icon: <FaTruck /> },
  ];

  return (
    <div className="bg-gray-100 overflow-hidden">
      {/* 🌟 Sección Hero - Improved Design */}
      <section className="relative h-[450px] sm:h-[600px] flex items-center justify-center text-center text-white overflow-hidden"> {/* Increased height */}
        <Image src="/idu.jpg" alt="Maquinaria Industrial" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-70 grayscale contrast-110" /> {/* Reduced opacity, added grayscale and contrast */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-4xl"> {/* Increased max-width */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-8 sm:p-12"> {/* Added padding and rounded corners */}
            <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg mb-4"> {/* Added margin-bottom */}
              Alquiler de <span className="text-[#0099FF]">Maquinaria Industrial</span> {/* Changed accent color */}
            </h1>
            <p className="text-lg sm:text-xl drop-shadow-md mb-8 opacity-90"> {/* Increased text size, added margin-bottom and opacity */}
              Optimiza tu producción con equipos modernos sin costos excesivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4"> {/* Added flex-direction for buttons */}
              <a href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0099FF] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#0077CC] transition text-lg flex items-center gap-2"> {/* Changed button color and padding */}
                  <FaWhatsapp className="text-lg" />
                  Cotiza Ahora
                </button>
              </a>
              <a href="#catalogo" className="group">
                <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition text-base font-medium flex items-center gap-2 group-hover:scale-105">
                  Ver Catálogo <FaChevronRight className="text-lg" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 Ventajas del Renting - Enhanced */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-16">Beneficios de Elegir Renting</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {ventajas.map((ventaja, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center justify-center">
              <div className="text-[#0099FF] text-7xl mb-6">{ventaja.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{ventaja.titulo}</h3>
              <p className="text-gray-600 text-center">{ventaja.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Catálogo de Maquinaria - Interactive */}
      <section id="catalogo" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-16">Explora Nuestro Catálogo</h2>
          <p className="text-center text-gray-600 mb-12">Descubre la maquinaria perfecta para tu industria.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {maquinaria.map((item, index) => (
              <div key={index} className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                <Image src={item.img} alt={item.nombre} width={400} height={250} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-8">
                  <h3 className="text-white text-xl font-semibold mb-4 text-center">{item.nombre}</h3>
                  <p className="text-white text-sm text-center">{item.descripcion}</p>
                  <a href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." target="_blank" rel="noopener noreferrer" className="group">
                    <button className="mt-4 bg-[#0099FF] text-white px-4 py-2 rounded-md hover:bg-[#0077CC] transition flex items-center gap-2 group-hover:scale-105">
                      Más Información <FaArrowRight />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Beneficios Adicionales - More Impactful */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-16">Beneficios Adicionales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center justify-center">
              <div className="text-[#0099FF] text-7xl mb-6">{beneficio.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{beneficio.titulo}</h3>
              <p className="text-gray-600 text-center">{beneficio.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Sección de Llamada a la Acción (CTA) - Final - Improved */}
      <section className="bg-gradient-to-br from-[#003366] to-[#005599] py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Da el Siguiente Paso</h2>
          <p className="text-lg mb-8 opacity-90">
            Transforma tu producción hoy mismo. <br />
            Contáctanos y descubre cómo podemos ayudarte.
          </p>
          <div className="flex gap-6 items-center">
            <a href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." target="_blank" rel="noopener noreferrer" className="group">
              <button className="bg-[#0099FF] text-white px-8 py-4 rounded-md shadow-lg hover:bg-[#0077CC] transition text-base font-medium flex items-center gap-2 group-hover:scale-105">
                <FaWhatsapp className="text-lg" />
                Contáctanos Ahora
              </button>
            </a>
            <a href="mailto:your-email@example.com" className="group">
              <button className="bg-transparent border border-white text-white px-8 py-4 rounded-md shadow-lg hover:bg-white hover:text-gray-800 transition text-base font-medium flex items-center gap-2 group-hover:scale-105">
                <FaEnvelope className="text-lg" />
                Envíanos un Correo
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
