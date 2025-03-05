import Head from "next/head";
import { FaCheckCircle, FaHeartbeat, FaTools, FaHandHoldingMedical, FaTruckMoving, FaSync, FaMedkit, FaChartLine, FaStar, FaShieldAlt, FaUsers } from "react-icons/fa";

const imageUrls = {
  "Tomógrafos": "https://imedi.com.co/wp-content/uploads/2020/10/banner-tomografia.png",
  "Angiógrafos": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUeWADkNFIKAgNRebWU1s_d6CeHIOCTD58A&s",
  "Equipo de RX": "https://es.bimedis.com/latest-news/showimg/565_03_ge_proteus_xr_a_585-290jpg_1489423742.342_97412498/850",
  "Ecógrafos": "https://www.tecnicaelectromedica.com/wp-content/uploads/2019/08/P40-ELITE-.jpg",
  "Equipos ultrasonido": "https://www.promedco.com/images/Noticias_2022/ultrasonido-novedades1.png",
  "Equipos dermatológicos": "https://img.freepik.com/fotos-premium/equipos-diagnostico-piel-facial-dermatologia-cosmetologia_83055-1309.jpg?w=360",
  "Equipos estéticos": "https://medicalasersl.com/wp-content/uploads/2024/02/La-importancia-de-invertir-en-equipos-esteticos-profesionales.jpg",
  "Equipos oftalmológicos": "https://medicalmix.com/images/images/carrusel/laseres-oftalmologicos.jpg",
  "Camas hospitalarias médicas": "https://mubimedical.com/wp-content/uploads/2024/03/Life-Elite-Excelencia-en-Camas-Hospitalarias-para-un-Cuidado-Superior.png",
  "Electrocardiógrafos": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcyuhudhhvjiUZLZUlav73eayuJE5JAtRkQ&s",
  "Arcos en C": "https://static.wixstatic.com/media/0495b0_8f18fea3a4794a208490a436dc16d10d~mv2.jpg/v1/fill/w_775,h_467,al_c,lg_1,q_85/0495b0_8f18fea3a4794a208490a436dc16d10d~mv2.jpg"
};

export default function EquiposMedicos() {
  return (
    <>
      <Head>
        <title>Alquiler de Equipos Médicos | VentRentAll</title>
        <meta
          name="description"
          content="Renta de equipos médicos con tecnología de última generación y mantenimiento garantizado. Descubre nuestras ventajas y cotiza ahora."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e4d89] to-[#05a0e3] text-white py-24 px-8 text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold">Alquila Equipos Médicos de Última Generación</h1>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Soluciones médicas innovadoras para hospitales y clínicas. Tecnología avanzada, soporte 24/7 y mantenimiento garantizado.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-white text-[#047ab7] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-transform duration-300 hover:scale-105"
        >
          Solicita tu Cotización
        </a>
      </section>

      {/* Beneficios Claves */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#047ab7]">¿Por qué Elegirnos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "Equipos de Última Tecnología", icon: <FaStar />, desc: "Equipos modernos y actualizados para diagnósticos y tratamientos más precisos." },
            { title: "Mantenimiento Garantizado", icon: <FaShieldAlt />, desc: "Incluye mantenimiento preventivo y correctivo sin costo adicional." },
            { title: "Atención Personalizada", icon: <FaUsers />, desc: "Te asesoramos en cada paso del proceso de renting, con soporte técnico 24/7." }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-[#047ab7] text-4xl">{benefit.icon}</div>
              <h3 className="text-xl font-bold mt-4">{benefit.title}</h3>
              <p className="text-gray-700 mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

{/* Lista de Equipos Médicos Mejorada */}
<section className="py-5 px-8 max-w-7xl mx-auto">
  <h2 className="text-5xl font-bold text-center text-[#047ab7] mb-6">
    Descubre Nuestra Tecnología Médica
  </h2>
  <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
    Equipos de última generación con el respaldo de nuestro servicio técnico especializado. 
    Optimiza tu operación con tecnología de vanguardia.
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {Object.keys(imageUrls).map((item) => (
      <div 
        key={item} 
        className="relative bg-white p-6 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src={imageUrls[item]} 
          alt={item} 
          className="w-full h-48 object-cover rounded-lg"
        />
        
        {/* En móviles, la info siempre está visible */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 
                        transition-opacity duration-300 opacity-100 md:opacity-0 md:hover:opacity-100">
          <h3 className="text-xl font-semibold text-white text-center">{item}</h3>
          <a 
            href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 bg-[#047ab7] text-white rounded-lg shadow-md hover:bg-[#035a8d] transition-all duration-300 text-center"
          >
            Más Información
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Ventajas del Alquiler */}
      <section className="bg-gray-100 py-16 px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#047ab7] mb-6">
      Ventajas del Renting de Equipos Médicos
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Descubre por qué el renting de equipos médicos es la mejor opción para hospitales y clínicas, optimizando costos y asegurando tecnología de vanguardia.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Traslado Inmediato", desc: "Entrega rápida y segura en cualquier ubicación.", icon: <FaTruckMoving className='text-[#047ab7] text-5xl' /> },
        { title: "Optimización Financiera", desc: "Facilidad de pago sin comprometer el flujo de caja.", icon: <FaChartLine className='text-[#047ab7] text-5xl' /> },
        { title: "Acceso a Tecnología Avanzada", desc: "Equipos de última generación sin inversión inicial.", icon: <FaMedkit className='text-[#047ab7] text-5xl' /> },
        { title: "Soporte Técnico Especializado", desc: "Asistencia 24/7 para garantizar el funcionamiento.", icon: <FaTools className='text-[#047ab7] text-5xl' /> },
        { title: "Mantenimiento Preventivo y Correctivo", desc: "Evita costos adicionales y fallas inesperadas.", icon: <FaHeartbeat className='text-[#047ab7] text-5xl' /> },
        { title: "Repotenciación de Equipos", desc: "Actualización constante para máxima eficiencia.", icon: <FaSync className='text-[#047ab7] text-5xl' /> }
      ].map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
          <div className="mb-4">{benefit.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
          <p className="text-gray-600 mt-2">{benefit.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}