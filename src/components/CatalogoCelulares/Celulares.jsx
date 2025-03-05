import Image from "next/image";
import { FaMobileAlt, FaShippingFast, FaSyncAlt, FaCamera, FaMemory, FaBatteryFull } from "react-icons/fa";

export default function Celulares() {
  const brands = [
    { name: "Apple", img: "/13.png" },
    { name: "Samsung", img: "/16.png" },
    { name: "Xiaomi", img: "/xiomi.png" },
    { name: "Oppo", img: "/opo.png" },
    { name: "ZTE", img: "/zte.jpg" },
  ];
  

  const celulares2025 = [
    {
      name: "iPhone 16 Pro",
      img: "/16pro.png",
      specs: { camara: "14 MPX", memoria: "256 GB", bateria: "3500 mAh" },
    },
    
    {
      name: "Samsung Galaxy S25 Ultra",
      img: "/16.png",
      specs: { camara: "200 MPX", memoria: "512 GB", bateria: "5000 mAh" },
    },
    {
      name: "Google Pixel 9 Pro",
      img: "/googlecel.png",
      specs: { camara: "50 MPX", memoria: "512 GB", bateria: "4800 mAh" },
    },
  ];
  

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Renting de <span className="text-[#047ab7]">Celulares </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Accede a los mejores dispositivos móviles sin afectar el presupuesto de tu empresa. 
            Nuestro servicio ofrece tecnología de última generación con soporte técnico, mantenimiento y garantía incluida.
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

        {/* Imagen destacada */}
        <div className="flex justify-center relative">
          <Image 
            src="/iphone.png" 
            alt="Renting de Celulares" 
            width={400} 
            height={500} 
            className="drop-shadow-2xl"
          />
        </div>
      </div>
{/* Selección de marcas */}
<div className="mt-24 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Escoge tu marca favorita</h2>
        <p className="mt-4 text-lg text-gray-600">Descubre las mejores opciones en dispositivos móviles.</p>
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform">
              <div className="w-24 h-24">
                <Image 
                  src={brand.img} 
                  alt={brand.name} 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Sección de celulares 2025 */}
      <div className="mt-24 max-w-7xl mx-auto">
      
        <p className="mt-4 text-lg text-gray-600 text-center">
          Descubre los últimos modelos disponibles para renting.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {celulares2025.map((celular, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              
              {/* Contenedor con tamaño fijo para las imágenes */}
              <div className="w-48 h-48 flex justify-center items-center">
                <Image 
                  src={celular.img} 
                  alt={celular.name} 
                  width={192} 
                  height={192} 
                  className="object-contain rounded-md"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">{celular.name}</h3>
              <ul className="text-gray-600 mt-3 text-center space-y-2">
                <li className="flex items-center gap-2">
                  <FaCamera className="text-[#047ab7]" /> {celular.specs.camara} - Cámara Frontal
                </li>
                <li className="flex items-center gap-2">
                  <FaMemory className="text-[#047ab7]" /> {celular.specs.memoria} - Memoria Interna
                </li>
                <li className="flex items-center gap-2">
                  <FaBatteryFull className="text-[#047ab7]" /> {celular.specs.bateria} - Batería
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

     

      {/* Beneficios */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">¿Por qué elegirnos?</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">Nuestro servicio de renting tecnológico ofrece ventajas exclusivas para tu empresa.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaShippingFast className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Entrega Express</h3>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaMobileAlt className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Equipos de Última Generación</h3>
          </div>

          <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <FaSyncAlt className="text-[#047ab7] text-5xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Actualización Continua</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
