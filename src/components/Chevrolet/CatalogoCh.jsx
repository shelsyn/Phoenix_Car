import React, { useState, useMemo } from 'react';
import OptImg from '@/components/ui/OptImg';

function CatalogoCh() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Familia N');

  const productos = [
    // Familia N
    {
      id: 1,
      nombre: 'NHR Reward EURO VI',
      version: 'NHR Reward EURO VI',
      imagen: '/catalogo/chevrolet-nhr-reward.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión ligero, eficiente y confiable.',
    },
    {
      id: 2,
      nombre: 'NKR MEDIO EURO VI',
      version: 'NKR MEDIO EURO VI',
      imagen: '/catalogo/ext/busesycamioneschevrolet-x3-1-1eb703.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión mediano, versátil para diversas aplicaciones.',
    },
    {
      id: 3,
      nombre: 'NKR MEDIO EURO V',
      version: 'NKR MEDIO EURO V',
      imagen: '/catalogo/chevrolet-nkr-medio.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión mediano, versátil para diversas aplicaciones.',
    },
    {
      id: 4,
      nombre: 'NKR LARGO EURO VI',
      version: 'NKR LARGO EURO VI',
      imagen: '/catalogo/chevrolet-nkr-largo.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión mediano, con mayor capacidad de carga.',
    },
    {
      id: 5,
      nombre: 'NHR Doble cabina EURO VI',
      version: 'NHR Doble cabina EURO VI',
      imagen: '/catalogo/chevrolet-nhr-doble-cabina.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión ligero con doble cabina para mayor comodidad.',
    },
    {
      id: 6,
      nombre: 'NLR Reward EURO VI',
      version: 'NLR Reward EURO VI',
      imagen: '/catalogo/chevrolet-nlr-reward.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión ligero, con características mejoradas.',
    },
  
    {
      id: 8,
      nombre: 'NPR Euro VI',
      version: 'NPR Euro VI',
      imagen: '/catalogo/chevrolet-npr.webp', // Replace with actual image path
      categoria: 'Familia N',
      descripcion: 'Camión mediano, ideal para transporte urbano.',
    },
   
    // Familia F
    {
      id: 10,
      nombre: 'FRR EURO VI',
      version: 'FRR EURO VI',
      imagen: '/catalogo/chevrolet-frr.webp', // Replace with actual image path
      categoria: 'Familia F',
      descripcion: 'Camión pesado, potente y versátil.',
    },
    {
      id: 11,
      nombre: 'FVR CORTO MECÁNICO EURO VI',
      version: 'FVR CORTO MECÁNICO EURO VI',
      imagen: '/catalogo/chevrolet-fvr-corto.webp', // Replace with actual image path
      categoria: 'Familia F',
      descripcion: 'Camión pesado, con transmisión mecánica.',
    },
    {
      id: 12,
      nombre: 'FVR Largo Euro VI',
      version: 'FVR Largo Euro VI',
      imagen: '/catalogo/chevrolet-fvr-largo.webp', // Replace with actual image path
      categoria: 'Familia F',
      descripcion: 'Camión pesado, con mayor longitud de chasis.',
    },
    
    {
      id: 14,
      nombre: 'FVR X LONG Euro VI',
      version: 'FVR X LONG Euro VI',
      imagen: '/catalogo/chevrolet-fvr-x-long.webp', // Replace with actual image path
      categoria: 'Familia F',
      descripcion: 'Camión pesado, con chasis extra largo.',
    },
  ];

  const categorias = ['Familia N', 'Familia F'];

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
          Catálogo Camiones Chevrolet
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
                    {producto.version}
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

export default CatalogoCh;
