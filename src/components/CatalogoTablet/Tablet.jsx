import { Truck, Headset, Wrench } from "lucide-react";

const Tablet = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1e4d89] to-[#05a0e3] rounded-3xl p-10 text-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold">Alquiler de Tablets</h1>
            <p className="text-lg mt-4 leading-relaxed">
              Renta tablets de alta calidad con soporte técnico especializado y 
              flexibilidad en los contratos. Ideal para empresas, eventos y soluciones tecnológicas avanzadas.
            </p>
            <a
             href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-[#047ab7] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
            >
              Cotiza Ahora
            </a>
          </div>
          <div className="flex justify-center">
            <img 
              src="/tableysin.png"
              alt="Alquiler de Tablets"
              className="w-105 object-cover drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Nueva Sección de Ventajas */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-[#047ab7] text-center">Ventajas de Alquilar Tablets</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {/* Opción 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl flex flex-col items-center text-center w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Truck className="w-14 h-14 text-[#047ab7] mb-4" />
            <h4 className="text-xl font-semibold text-gray-800">Entrega Inmediata</h4>
            <p className="text-gray-600 mt-2">
              Recibe las tablets donde las necesites, con flexibilidad en horarios y ubicaciones.
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#047ab7] rounded-t-lg"></div>
          </div>

          {/* Opción 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl flex flex-col items-center text-center w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Headset className="w-14 h-14 text-[#047ab7] mb-4" />
            <h4 className="text-xl font-semibold text-gray-800">Soporte Técnico</h4>
            <p className="text-gray-600 mt-2">
              Asistencia 24/7 con expertos en tecnología para garantizar el mejor rendimiento.
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#047ab7] rounded-t-lg"></div>
          </div>

          {/* Opción 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl flex flex-col items-center text-center w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Wrench className="w-14 h-14 text-[#047ab7] mb-4" />
            <h4 className="text-xl font-semibold text-gray-800">Mantenimiento Incluido</h4>
            <p className="text-gray-600 mt-2">
              Servicio de mantenimiento preventivo y correctivo sin costos adicionales.
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#047ab7] rounded-t-lg"></div>
          </div>
        </div>
      </div>

      {/* Beneficios del Alquiler */}
      <div className="mt-16 bg-[#f4f8fc] py-16 rounded-3xl">
        <h2 className="text-4xl font-bold text-[#047ab7] text-center">Beneficios del Alquiler de Tablets</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-10 px-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
            <p className="text-lg text-gray-700 font-medium">Facilita la renovación tecnológica.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
            <p className="text-lg text-gray-700 font-medium">Optimiza costos y reduce proveedores.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
            <p className="text-lg text-gray-700 font-medium">Mayor flexibilidad en los contratos.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
            <p className="text-lg text-gray-700 font-medium">Atención y soporte técnico garantizado.</p>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Tablet;
