import { FaLaptop, FaSyncAlt, FaCheckCircle, FaHeadset, FaTools, FaShieldAlt, FaShippingFast, FaMoneyBillAlt } from "react-icons/fa";

export default function Computadoras() {
  const brands = [
    { name: "HP", img: "https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png" },
    { name: "Lenovo", img: "https://cdn.worldvectorlogo.com/logos/lenovo-2.svg" },
    { name: "Dell", img: "https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png" },
    { name: "Asus", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" },
    { name: "Apple", img: "https://images.icon-icons.com/2699/PNG/512/apple_logo_icon_168588.png" },
    { name: "Acer", img: "https://1000logos.net/wp-content/uploads/2016/09/Acer-logo.jpg" },
    { name: "Microsoft", img: "https://www.gmevents.ae/wp-content/uploads/2024/03/microsoft-logo.png" },
 
  ];

  const equipos = [
    {
      name: "Dell XPS 15 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDMMka9jiw8k-DhrQgFvIcIqOMZY0cJH1TA&s",
      specs: { procesador: "Intel Core Ultra 9", ram: "32GB", almacenamiento: "1TB SSD", pantalla: "15.6' OLED 4K", grafica: "NVIDIA GeForce RTX 4070" },
    },
    {
      name: "Lenovo ThinkPad X1 Carbon Gen 12",
      img: "https://sourceit.com.sg/cdn/shop/files/lenovo-thinkpad-x1-carbon-gen-12-u7-155u32gb1tb-ssd-21kc0083sg-739192_300x300.jpg?v=1718172060",
      specs: { procesador: "Intel Core Ultra 7", ram: "32GB", almacenamiento: "1TB SSD", pantalla: "14' IPS WUXGA", grafica: "Intel Iris Xe" },
    },
    {
      name: "HP ZBook Fury 16 G10",
      img: "https://www.hp.com/es-es/shop/Html/Merch/Images/c08700238_1750x1285.jpg",
      specs: { procesador: "AMD Ryzen 9 PRO", ram: "64GB", almacenamiento: "2TB SSD", pantalla: "16' IPS WQUXGA", grafica: "NVIDIA RTX A5000" },
    },
    {
      name: "Asus ROG Zephyrus G14",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWEcmwl2PHR6Vqp7idNJLSDbqCng8hm5nIA&s",
      specs: { procesador: "AMD Ryzen 9", ram: "32GB", almacenamiento: "1TB SSD", pantalla: "14' QHD 165Hz", grafica: "NVIDIA GeForce RTX 4060" },
    },
    {
      name: "Apple MacBook Pro 16' M3 Max",
      img: "https://www.compudemano.com/wp-content/uploads/2023/11/macbook-pro-16-m3.jpg",
      specs: { procesador: "Apple M3 Max", ram: "64GB", almacenamiento: "2TB SSD", pantalla: "16.2' Liquid Retina XDR", grafica: "30-core GPU" },
    },
    {
      name: "Acer Predator Helios 16",
      img: "https://www.professionalwireless.com.co/wp-content/uploads/2024/11/Predator-Helios-16-PH16-71-93FR_2.png",
      specs: { procesador: "Intel Core i9", ram: "32GB", almacenamiento: "1TB SSD", pantalla: "16' WQXGA 240Hz", grafica: "NVIDIA GeForce RTX 4080" },
    },
  ];

  const heroImage = "https://newsbook.es/wp-content/uploads/2025/01/acer-pc-copilot-newsbook-ces-2025.png";

    const beneficios = [
    {
      icon: <FaTools className="text-[#047ab7] text-6xl" />,
      title: "Mantenimiento Incluido",
      description: "Nos encargamos del mantenimiento preventivo y correctivo de tus equipos.",
    },
    {
      icon: <FaHeadset className="text-[#047ab7] text-6xl" />,
      title: "Soporte Técnico 24/7",
      description: "Asistencia técnica disponible en todo momento para resolver cualquier duda o problema.",
    },
    {
      icon: <FaSyncAlt className="text-[#047ab7] text-6xl" />,
      title: "Renovación Tecnológica",
      description: "Actualiza tus equipos periódicamente para mantenerte a la vanguardia.",
    },
    {
      icon: <FaShieldAlt className="text-[#047ab7] text-6xl" />,
      title: "Garantía Extendida",
      description: "Cobertura completa para proteger tu inversión y asegurar el funcionamiento de tus equipos.",
    },
    {
      icon: <FaShippingFast className="text-[#047ab7] text-6xl" />,
      title: "Entrega Rápida",
      description: "Recibe tus equipos en tiempo récord para que tu negocio no se detenga.",
    },
    {
      icon: <FaMoneyBillAlt className="text-[#047ab7] text-6xl" />,
      title: "Planes Flexibles",
      description: "Elige el plan que mejor se adapte a las necesidades y presupuesto de tu empresa.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Renting de <span className="text-[#047ab7]">Computadoras</span> para Empresas
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Obtén tecnología de última generación sin inversión inicial. Alquila laptops, desktops y workstations con mantenimiento, soporte y garantía incluida.
            </p>
            <p className="text-md text-gray-600 leading-relaxed">
              Nuestros planes de renting te ofrecen la flexibilidad que necesitas para adaptarte a las demandas de tu negocio.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+informaci%C3%B3n+de+Renting+gracias."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#047ab7] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#035a8d] transition inline-block"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Renting de Computadoras"
              width={550}
              height={550}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Las Mejores Marcas del Mercado</h2>
          <p className="mt-4 text-lg text-gray-600">Equipos de alto rendimiento y última tecnología.</p>
          <div className="mt-12 flex justify-center gap-16 flex-wrap">
            {brands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform">
                <img src={brand.img} alt={brand.name} className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition-all" />
                <p className="mt-3 text-lg font-medium text-gray-700">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de Computadoras */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Equipos Disponibles</h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Descubre los últimos modelos ideales para tu negocio.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {equipos.map((equipo, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
                <img src={equipo.img} alt={equipo.name} className="w-56 h-56 object-contain rounded-xl" />
                <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">{equipo.name}</h3>
                <ul className="text-gray-600 mt-4 text-center space-y-3">
                  <li className="flex items-center gap-2"><FaLaptop className="text-[#047ab7]" /> {equipo.specs.procesador}</li>
                  <li className="flex items-center gap-2"><FaSyncAlt className="text-[#047ab7]" /> {equipo.specs.ram} RAM</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-[#047ab7]" /> {equipo.specs.almacenamiento}</li>
                  {equipo.specs.pantalla && <li className="flex items-center gap-2"><FaCheckCircle className="text-[#047ab7]" /> {equipo.specs.pantalla}</li>}
                  {equipo.specs.grafica && <li className="flex items-center gap-2"><FaCheckCircle className="text-[#047ab7]" /> {equipo.specs.grafica}</li>}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center">¿Por qué elegirnos?</h2>
          <p className="mt-4 text-lg text-gray-600 text-center">Renting flexible y tecnología sin preocupaciones.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
                {beneficio.icon}
                <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">{beneficio.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
