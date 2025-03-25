import { Printer, ShieldCheck, Settings, RefreshCw, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Renovación Tecnológica Sin Complicaciones",
    description: "Mantén tu empresa siempre actualizada con la última tecnología en impresión, sin costos de inversión inicial ni obsolescencia."
  },
  {
    title: "Reducción de Gestión y Proveedores",
    description: "Simplifica la administración de tu infraestructura tecnológica reduciendo la cantidad de proveedores y contratos."
  },
  {
    title: "Máximo Aprovechamiento de los Recursos",
    description: "Asegura la disponibilidad constante de equipos eficientes y en perfecto estado para mejorar la productividad de tu empresa."
  },
  {
    title: "Mayor Agilidad y Flexibilidad",
    description: "Adapta tu capacidad de impresión a las necesidades de tu negocio con soluciones escalables y sin ataduras."
  },
  {
    title: "Mantenimiento y Soporte Técnico Garantizado",
    description: "Evita tiempos muertos con nuestro servicio de mantenimiento preventivo y correctivo, asegurando el rendimiento óptimo de tus equipos."
  }
];

const Printers = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1e4d89] to-[#05a0e3] rounded-3xl p-10 text-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold">Alquiler de Impresoras</h1>
            <p className="text-lg mt-4 leading-relaxed">
              Renta impresoras de alto rendimiento con soporte especializado y planes flexibles.  
              Solución ideal para empresas, oficinas y eventos que buscan calidad y eficiencia sin preocupaciones.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-[#047ab7] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
            >
              Cotiza Ahora
            </a>
          </div>
          <div className="flex justify-center">
            <img 
              src="/imprefondo.jpg"
              alt="Alquiler de Impresoras"
              className="w-full max-w-lg object-cover drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Ventajas del Alquiler */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-[#047ab7] text-center">Ventajas de Alquilar Impresoras</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          <AdvantageCard 
            icon={<ShieldCheck className="w-14 h-14 text-[#047ab7] mb-4" />}
            title="Seguridad Garantizada"
            description="Protección de datos y documentos con medidas avanzadas de seguridad."
          />

          <AdvantageCard 
            icon={<Settings className="w-14 h-14 text-[#047ab7] mb-4" />}
            title="Soporte Especializado"
            description="Asistencia técnica 24/7 para garantizar el mejor rendimiento."
          />

          <AdvantageCard 
            icon={<RefreshCw className="w-14 h-14 text-[#047ab7] mb-4" />}
            title="Mantenimiento Incluido"
            description="Servicio preventivo y correctivo sin costos adicionales."
          />
        </div>
      </div>

      {/* Tipos de Impresoras */}
      <div className="mt-16 bg-[#f4f8fc] py-16 rounded-3xl">
        <h2 className="text-4xl font-bold text-[#047ab7] text-center">¿Qué Impresora Alquilar?</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-10 px-8">
          <PrinterOption
            title="Impresoras Multifuncionales"
            description="La mejor solución para impresión, escaneo y copias en un solo equipo."
            image="/impresoramul.avif"
          />

          <PrinterOption
            title="Impresoras Láser"
            description="Perfectas para alto volumen de impresión con calidad superior."
            image="/lases.png"
          />
        </div>
      </div>

      {/* Beneficios del Servicio */}
      <div className="mt-16 py-16 bg-[#f4f8fc] rounded-3xl">
        <h2 className="text-4xl font-bold text-[#047ab7] text-center">
          Beneficios del Alquiler de Impresoras con VentaRentAll
        </h2>

        <div className="mt-10 flex flex-col items-center">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex items-start space-x-4 bg-white p-6 w-full max-w-3xl rounded-lg shadow-md my-2"
            >
              <CheckCircle className="w-8 h-8 text-[#047ab7] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Tarjeta de Ventaja
const AdvantageCard = ({ icon, title, description }) => (
  <div className="relative bg-white p-6 rounded-lg shadow-xl flex flex-col items-center text-center w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    {icon}
    <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
    <div className="absolute top-0 left-0 w-full h-1 bg-[#047ab7] rounded-t-lg"></div>
  </div>
);

// Componente de Opción de Impresora
const PrinterOption = ({ title, description, image }) => (
  <div className="relative bg-white p-8 rounded-xl shadow-md w-96 flex flex-col items-center text-center hover:scale-105 transition-transform">
    <img 
      src={image} 
      alt={title} 
      className="w-48 h-48 object-cover mb-4"
      loading="lazy"
    />
    <h4 className="text-2xl font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default Printers;
