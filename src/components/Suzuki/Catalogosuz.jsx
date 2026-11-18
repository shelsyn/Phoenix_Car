import React, { useState, useMemo } from 'react';
import OptImg from '@/components/ui/OptImg';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Camionetas');

  const productos = [
    // Camionetas
    {
      id: 1,
      nombre: 'Suzuki S-Cross Híbrida 4x2',
      precio: "S-Cross Híbrida 4x2",
      imagen: '/catalogo/suzuki-s-cross.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y eficiente.',
    },
    {
      id: 2,
      nombre: 'Grand Vitara Híbrida 4x2',
      precio: "Grand Vitara Híbrida 4x2",
      imagen: '/catalogo/ext/suzukiderco-gran-vitara-colors-grey-1a12a7.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV versátil y espaciosa.',
    },
    {
      id: 3,
      nombre: 'Grand Vitara Híbrida 4x4',
      precio: "Grand Vitara Híbrida 4x4",
      imagen: '/catalogo/suzuki-grand-vitara.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV robusta, ideal para cualquier terreno.',
    },
    {
      id: 4,
      nombre: 'Suzuki Fronx Híbrida',
      precio: "Suzuki Fronx Híbrida",
      imagen: '/catalogo/ext/autozen-autozen-suzuki-fronx-blue-61e5ec.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y ágil.',
    },
    {
      id: 5,
      nombre: 'Suzuki Jimny 5 Puertas',
      precio: "Suzuki Jimny 5 Puertas",
      imagen: '/catalogo/ext/encrypted-tbn0-images-aab8c5.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y ágil.',
    },
    {
      id: 6,
      nombre: 'Suzuki Jimny',
      precio: "Suzuki Jimny",
      imagen: '/catalogo/ext/suzukiderco-jimny-interna-a6a56a.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y ágil.',
    },
    // Híbridos
   
    {
      id: 8,
      nombre: 'Suzuki Swift Híbrido',
      precio: "Suzuki Swift Híbrido",
      imagen: '/susukiSwift.png',
      categoria: 'Híbridos',
      descripcion: 'Hatchback compacto, moderno y eficiente.',
    },
    {
      id: 9,
      nombre: 'Grand Vitara Híbrida 4x2',
      precio: "Grand Vitara Híbrida 4x2",
      imagen: '/catalogo/ext/suzukiderco-gran-vitara-colors-grey-1a12a7.webp',
      categoria: 'Híbridos',
      descripcion: 'SUV versátil y espaciosa.',
    },
    
    {
      id: 11,
      nombre: 'Suzuki Fronx Híbrida',
      precio: "Suzuki Fronx Híbrida",
      imagen: '/catalogo/ext/autozen-autozen-suzuki-fronx-blue-61e5ec.webp',
      categoria: 'Híbridos',
      descripcion: 'SUV compacta, moderna y ágil.',
    },
    // Crossovers
    {
      id: 12,
      nombre: 'Nuevo Suzuki Swift Híbrido',
      precio: "Nuevo Suzuki Swift Híbrido",
      imagen: '/catalogo/ext/autozen-autozen-suzuki-swift-sedan-plata-79a1a9.webp',
      categoria: 'Crossovers',
      descripcion: 'Hatchback compacto, moderno y eficiente.',
    },
    {
      id: 13,
      nombre: 'Suzuki Baleno Cross',
      precio: "Suzuki Baleno Cross",
      imagen: '/catalogo/suzuki-baleno-cross.webp',
      categoria: 'Crossovers',
      descripcion: 'Hatchback compacto, moderno y eficiente.',
    },
  ];

  const categorias = ['Camionetas', 'Híbridos', 'Crossovers'];

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
          Catálogo Suzuki
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosFiltrados.length > 0 && productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="relative h-60 group-hover:scale-105 transition duration-300 overflow-hidden">
                <OptImg
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
                    <span className="font-normal text-sm mr-1"></span>
                    {producto.precio}
                  </span>
                </div>
                <a
                  href={`https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#047ab7] text-white px-5 py-3 rounded-full hover:bg-[#036fa1] transition duration-300 text-sm w-full text-center font-medium"
                >
                  Conoce más 
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
