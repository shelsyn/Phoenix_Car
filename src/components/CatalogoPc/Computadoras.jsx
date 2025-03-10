import Image from "next/image";
import { FaLaptop, FaDesktop, FaServer, FaCheckCircle, FaHeadset, FaSyncAlt, FaTools } from "react-icons/fa";

export default function Computadoras() {
  const brands = [
    { name: "HP", img: "/hp.png" },
    { name: "Lenovo", img: "/lenovo.png" },
    { name: "Dell", img: "/dell.png" },
    { name: "Asus", img: "/asus.png" },
    { name: "Apple", img: "/apple.png" },
  ];

  const equipos = [
    {
      name: "Lenovo ThinkPad X1 Carbon Gen 12",
      img: "/lenovo-thinkpad.png",
      specs: { procesador: "Intel Core Ultra 7", ram: "32GB", almacenamiento: "1TB SSD" },
    },
    {
      name: "Dell XPS 15 2025",
      img: "/dell-xps.png",
      specs: { procesador: "Intel Core Ultra 9", ram: "32GB", almacenamiento: "1TB SSD" },
    },
    {
      name: "HP ZBook Fury 16 G10",
      img: "/hp-zbook.png",
      specs: { procesador: "AMD Ryzen 9 PRO", ram: "64GB", almacenamiento: "2TB SSD" },
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Renting de <span className="text-[#047ab7]">Computadoras</span> para Empresas
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Obtén tecnología de última generación sin inversión inicial. Alquila laptops, desktops y workstations con mantenimiento, soporte y garantía incluida.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+informaci%C3%B3n+de+Renting+gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#047ab7] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#035a8d] transition"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <Image 
            src="/laptop-renting.png" 
            alt="Renting de Computadoras" 
            width={400} 
            height={500} 
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Marcas */}
      <div className="mt-24 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Las Mejores Marcas del Mercado</h2>
        <p className="mt-4 text-lg text-gray-600">Equipos de alto rendimiento y última tecnología.</p>
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform">
              <Image src={brand.img} alt={brand.name} width={96} height={96} />
              <p className="mt-2 text-lg font-semibold text-gray-900">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modelos de Computadoras */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">Equipos Disponibles</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Descubre los últimos modelos ideales para tu negocio.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipos.map((equipo, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <Image src={equipo.img} alt={equipo.name} width={192} height={192} />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{equipo.name}</h3>
              <ul className="text-gray-600 mt-3 text-center space-y-2">
                <li className="flex items-center gap-2"><FaLaptop className="text-[#047ab7]" /> {equipo.specs.procesador}</li>
                <li className="flex items-center gap-2"><FaSyncAlt className="text-[#047ab7]" /> {equipo.specs.ram} RAM</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-[#047ab7]" /> {equipo.specs.almacenamiento}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">¿Por qué elegirnos?</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">Renting flexible y tecnología sin preocupaciones.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaTools className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Mantenimiento Incluido</h3>
          </div>
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaHeadset className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Soporte Técnico 24/7</h3>
          </div>
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <FaSyncAlt className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Renovación Tecnológica</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
