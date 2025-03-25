import React, { useState, useMemo } from 'react';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Camionetas');

  const productos = [
    // Camionetas
    {
      id: 1,
      nombre: 'Crosstrek',
      precio: 135900000,
      imagen: 'https://www.subarucolombia.com/subaru/site/artic/20230323/imag/foto_0000021220230323182042/3.png',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y eficiente.',
    },
    {
      id: 2,
      nombre: 'Outback',
      precio: 193900000,
      imagen: 'https://s7d1.scene7.com/is/image/scom/SDI_UAT_360e_032?$750p$',
      categoria: 'Camionetas',
      descripcion: 'SUV versátil y espaciosa.',
    },
    {
      id: 3,
      nombre: 'Evoltis',
      precio: 264900000,
      imagen: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_ea8814c4c90844039fddbf8172a2ffbe.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV robusta, ideal para cualquier terreno.',
    },
    {
      id: 4,
      nombre: 'Forester',
      precio: 159900000,
      imagen: 'https://inchcapelatam.sirv.com/Subaru/Colombia/FORESTER/2.%20Forester%202.0%20Advance%20Exterior/Forester%20Advance%20Cascade%20Green%20Silica.png',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y ágil.',
    },
    // VRX
    {
      id: 5,
      nombre: 'WRX',
      precio: 199990000,
      imagen: 'https://www.subarucolombia.com/subaru/site/artic/20240527/imag/foto_0000016820240527215020/25WRX_0010BP_tS-ES_CVT_E3QF_CW_E3.jpg',
      categoria: 'VRX',
      descripcion: 'Sedán deportivo de alto rendimiento.',
    },
    // Híbridas
    {
      id: 6,
      nombre: 'Forester Hybrid',
      precio: 195900000,
      imagen: 'https://inchcapelatam.sirv.com/Subaru/Colombia/FORESTER/2.%20Forester%202.0%20Advance%20Exterior/Forester%20Advance%20Cascade%20Green%20Silica.png',
      categoria: 'Híbridas',
      descripcion: 'SUV híbrida, eficiente y versátil.',
    },
    {
      id: 7,
      nombre: 'Crosstrek Hybrid',
      precio: 159900000,
      imagen: 'https://cdn-image-handler.oem-production.subaru.com.au/vehicle/2024/crosstrek/specs-pack/my24-crosstrek-awd-hybrid-l-crystal-white-pearl-front.png',
      categoria: 'Híbridas',
      descripcion: 'SUV híbrida, compacta y moderna.',
    },
  ];

  const categorias = ['Camionetas', 'VRX', 'Híbridas'];

  const productosFiltrados = useMemo(() => {
    return productos.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );
  }, [productos, categoriaSeleccionada]);

  return (
    <div className="bg-gray-100 py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center mb-10">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`px-6 py-3 m-1 rounded-full font-semibold transition-colors duration-200 text-sm md:text-base border-2 ${
                categoriaSeleccionada === categoria
                  ? 'bg-[#047ab7] text-white border-[#047ab7]'
                  : 'text-[#047ab7] border-blue-400 hover:bg-blue-50'
              }`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </nav>

        {/* Catalog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Catálogo Subaru
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosFiltrados.length > 0 && productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="relative h-60 group-hover:scale-105 transition duration-300 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-contain object-center transition duration-300"
                  loading="lazy"
                />
                {/* Overlay on the image */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{producto.nombre}</h3>
                  <p className="text-gray-300 text-sm">{producto.descripcion}</p>
                </div>
              </div>

              {/* Price and Button section */}
              <div className="p-5 mt-auto flex flex-col">
                <div className="mb-4">
                  <span className="font-bold text-[#047ab7] text-xl">
                    {producto.nombre}
                  </span>
                </div>
                <a
                  href={`https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#047ab7] text-white px-5 py-3 rounded-full hover:bg-[#036fa1] transition duration-300 text-sm w-full text-center font-medium"
                >
                  Más Información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
