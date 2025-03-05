import Image from "next/image";
import { FaTools, FaIndustry, FaCogs, FaShieldAlt, FaTruck } from "react-icons/fa";

export default function MaquinariaIndustrial() {
  const ventajas = [
    { titulo: "Evita costos elevados", texto: "Reduce la inversión inicial y evita endeudamientos innecesarios en maquinaria costosa.", icon: <FaShieldAlt /> },
    { titulo: "Equipos siempre disponibles", texto: "Accede a maquinaria cuando la necesites, sin preocuparte por almacenaje o depreciación.", icon: <FaIndustry /> },
    { titulo: "Mantenimiento incluido", texto: "Recibe equipos en óptimas condiciones con mantenimientos regulares sin costos adicionales.", icon: <FaTools /> },
    { titulo: "Última tecnología", texto: "Accede a equipos modernos y eficientes para mejorar tu productividad.", icon: <FaCogs /> },
  ];

  const maquinaria = [
    { nombre: "Empacadoras", img: "/EMPAQUE.jpg" },
    { nombre: "Termoformadoras", img: "/termoformadora-3.jpg" },
    { nombre: "Líneas de llenado", img: "/LENEAS.jpg" },
    { nombre: "Compresores", img: "/Compresores.jpg" },
    { nombre: "Tornos", img: "/ton.jpg" },
    { nombre: "Plantas eléctricas", img: "/plam.jpg" },
  ];

  const beneficios = [
    { titulo: "Renovación de Equipos", texto: "Accede a tecnología de punta sin preocupaciones.", icon: <FaCogs /> },
    { titulo: "Variedad de Equipos", texto: "Contamos con un amplio catálogo para cada necesidad.", icon: <FaIndustry /> },
    { titulo: "Mantenimiento Incluido", texto: "Evita costos adicionales en mantenimiento y reparaciones.", icon: <FaTools /> },
    { titulo: "Entrega Rápida", texto: "Disponibilidad inmediata y logística eficiente.", icon: <FaTruck /> },
  ];

  return (
    <div className="bg-gray-100">
     {/* 🌟 Sección Hero */}
     <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image src="/idu.jpg" alt="Maquinaria Industrial" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-3xl bg-black bg-opacity-20 backdrop-blur-sm rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg px-4 py-2 rounded-md">
          Alquiler de <span className="text-[#047ab7]">Maquinaria Industrial</span>
        </h1>
        <p className="mt-4 text-lg drop-shadow-md px-4 py-2 rounded-md">
          Optimiza tu producción con equipos modernos sin costos excesivos.
        </p>
        <div className="mt-6">
          <a href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." target="_blank" rel="noopener noreferrer">
            <button className="bg-[#047ab7] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#035a8d] transition text-lg">
              Cotiza Ahora
            </button>
          </a>
        </div>
      </div>
    </section>

      {/* 🌟 Ventajas del Alquiler */}
      <section className="py-16 max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ventajas del Alquiler</h2>
        <p className="mt-4 text-lg text-gray-600">Renting industrial para mayor eficiencia y menor inversión.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
              <div className="text-[#047ab7] text-5xl mb-3">{ventaja.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{ventaja.titulo}</h3>
              <p className="text-gray-600">{ventaja.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Tipos de Maquinaria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tipos de Maquinaria</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {maquinaria.map((item, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <Image src={item.img} alt={item.nombre} width={400} height={250} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-xl font-bold">{item.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Beneficios del Renting */}
      <section className="py-16 max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Beneficios del Renting Industrial</h2>
        <p className="mt-4 text-lg text-gray-600">Mayor flexibilidad, menores costos y equipos actualizados.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-[#047ab7] text-5xl mb-3 mx-auto">{beneficio.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{beneficio.titulo}</h3>
              <p className="text-gray-600">{beneficio.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}