import Image from "next/image";
import { FaCheckCircle, FaStore, FaSyncAlt, FaCogs, FaChartLine, FaHeadset } from "react-icons/fa";

export default function POS() {
  return (
    <section className="relative bg-gradient-to-b from-[#1e4d89] to-[#05a0e3] text-white">
      {/* Sección Hero */}
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Información */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Alquiler de <span className="text-yellow-300">POS</span>, la solución para vender más rápido
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Optimiza tu negocio con nuestros sistemas de punto de venta avanzados. Controla inventarios, gestiona ventas en la nube y 
            aumenta tu eficiencia con tecnología de vanguardia.
          </p>
          <div className="mt-8 flex gap-4">
            <a
             href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-[#1e4d89] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="relative flex justify-center">
         
          <Image
            src="/posimg.png"
            alt="POS Terminal"
            width={500}
            height={400}
            className="drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className="bg-white text-gray-900 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">¿Por qué alquilar un POS?</h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Obtén acceso a un sistema de ventas moderno sin costos elevados.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Tarjeta 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <FaStore className="text-[#047ab7] text-5xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Mayor Rapidez</h3>
              <p className="text-gray-600 mt-2">Reduce tiempos de espera y mejora la atención a tus clientes.</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <FaCogs className="text-[#047ab7] text-5xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Mantenimiento Incluido</h3>
              <p className="text-gray-600 mt-2">Soporte técnico y repotenciación de equipos garantizados.</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <FaSyncAlt className="text-[#047ab7] text-5xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Actualización sin Costo</h3>
              <p className="text-gray-600 mt-2">Renueva tu sistema POS sin afectar tu presupuesto.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios en Pasos */}
      <div className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#1e4d89] to-[#05a0e3] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Beneficios Clave del Renting POS</h2>
          <p className="mt-4 text-lg text-gray-200">
            Descubre cómo nuestro servicio puede impulsar tu negocio.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-yellow-400 text-4xl" />
              <p className="text-lg">Gestión avanzada de inventario.</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-yellow-400 text-4xl" />
              <p className="text-lg">Reportes y análisis en tiempo real.</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-yellow-400 text-4xl" />
              <p className="text-lg">Integración con distintos métodos de pago.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
