import Image from "next/image";
import { FaMobileAlt, FaShippingFast, FaSyncAlt, FaShieldAlt, FaHeadset, FaStar } from "react-icons/fa";

export default function Celulares() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Información */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Renting de <span className="text-[#047ab7]">Celulares Corporativos</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Accede a los mejores dispositivos móviles sin afectar el presupuesto de tu empresa. 
            Nuestro servicio ofrece tecnología de última generación con soporte técnico, mantenimiento y garantía incluida.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-3"><FaStar className="text-[#047ab7]" /> Equipos nuevos y garantizados.</li>
            <li className="flex items-center gap-3"><FaStar className="text-[#047ab7]" /> Entrega rápida y sin complicaciones.</li>
            <li className="flex items-center gap-3"><FaStar className="text-[#047ab7]" /> Mantenimiento preventivo y correctivo.</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#047ab7] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#035a8d] transition"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="flex justify-center relative">
          <div className="absolute -top-6 -left-6 bg-[#047ab7] w-40 h-40 rounded-full opacity-10"></div>
          <Image
            src="/iphone.png"  // Asegúrate de tener esta imagen en public/
            alt="Renting de Celulares"
            width={400}
            height={500}
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">¿Por qué elegirnos?</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Nuestro servicio de renting tecnológico ofrece ventajas exclusivas para tu empresa.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaShippingFast className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Entrega Express</h3>
            <p className="text-gray-600 mt-3 text-center">
              Enviamos y recogemos los equipos a nivel nacional, sin complicaciones.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaMobileAlt className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Equipos de Última Generación</h3>
            <p className="text-gray-600 mt-3 text-center">
              Trabajamos con las mejores marcas para garantizar rendimiento y calidad.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaSyncAlt className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Actualización Continua</h3>
            <p className="text-gray-600 mt-3 text-center">
              Cambia de equipo cuando lo necesites sin afectar tu presupuesto.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaShieldAlt className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Garantía Extendida</h3>
            <p className="text-gray-600 mt-3 text-center">
              Equipos garantizados durante toda la duración del contrato.
            </p>
          </div>

          {/* Tarjeta 5 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaHeadset className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Soporte 24/7</h3>
            <p className="text-gray-600 mt-3 text-center">
              Atención personalizada y asistencia técnica en cualquier momento.
            </p>
          </div>
        </div>
      </div>

   

    </section>
  );
}
