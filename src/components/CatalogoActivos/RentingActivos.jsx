import { AiOutlineBarChart, AiOutlineDollarCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineDevicesOther } from "react-icons/md";
import Image from "next/image";

const resultados = [
  {
    title: "Incrementa tus Utilidades",
    description:
      "Renueva tu maquinaria pesada sin preocupaciones, aumentando la productividad y reduciendo los tiempos muertos.",
    icon: AiOutlineBarChart,
  },
  {
    title: "Optimiza tus Recursos",
    description:
      "Reduce costos operativos y administrativos al centralizar tus proveedores y maximizar la eficiencia.",
    icon: MdOutlineDevicesOther,
  },
  {
    title: "Control Financiero ",
    description:
      "Accede a maquinaria de alta calidad sin grandes inversiones iniciales ni endeudamiento.",
    icon: AiOutlineDollarCircle,
  },
  {
    title: "Impulsa tu Negocio",
    description:
      "Asegura un rendimiento óptimo con mantenimientos especializados para mantenerte siempre en marcha.",
    icon: BsFillPeopleFill,
  },
];

export default function RentingActivos() {
  return (
    <section id="RentingActivos" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gold-goldTitle">
            MAQUINARIA PESADA
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
            Beneficios del alquiler de maquinaria pesada con{" "}
            <span className="font-bold text-gold-goldTitle">PhoenixCar</span>
          </p>
        </div>

        {/* Resultados */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {resultados.map((resultado) => (
            <div
              key={resultado.title}
              className="relative flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              {/* Ícono */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gold-goldTitle to-gold-goldButton">
                <resultado.icon className="w-8 h-8 text-white" />
              </div>
              {/* Título */}
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-900">
                {resultado.title}
              </h3>
              {/* Descripción */}
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                {resultado.description}
              </p>
              {/* Decorativo */}
              <div className="absolute -bottom-2 w-8 h-1 sm:w-10 bg-gradient-to-r from-gold-goldTitle to-gold-goldButton rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Imagen y Texto */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between">
          {/* Imagen */}
          <div className="lg:w-1/2">
            <Image
              src="https://www.revei2000.com/wp-content/uploads/2021/01/maquinaria-pesada-724x429.jpg"
              alt="Persona usando tecnología"
              className="rounded-lg shadow-md"
              width={724} // Ancho en píxeles
              height={429} // Alto en píxeles
              priority // Optimización para mejorar el rendimiento
            />
          </div>
          {/* Texto */}
          <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
            <h3 className="text-2xl font-bold text-gold-goldTitle mb-4">
              Soluciones de Alquiler de Maquinaria Pesada
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700">
              En <span className="font-bold text-gold-goldTitle">PhoenixCar</span>, transformamos tus operaciones con un servicio de alquiler diseñado para maximizar tu productividad. Con equipos modernos y confiables, somos la solución ideal para industrias como construcción, minería y agricultura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
