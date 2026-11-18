import React, { useState, useMemo } from 'react';
import OptImg from '@/components/ui/OptImg';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('TANK');

  const productos = [
    // TANK
    {
      id: 1,
      nombre: 'TANK 500 HEV',
      version: 'TANK 500 HEV',
      imagen: '/catalogo/ext/gwmqatar-arctic-white-tank500-edb3e3.webp',
      categoria: 'TANK',
      descripcion: 'SUV híbrida de lujo, potente y elegante.',
    },
    {
      id: 2,
      nombre: 'TANK 300 HEV',
      version: 'TANK 300 HEV',
      imagen: '/catalogo/ext/encrypted-tbn0-images-bd47f7.webp',
      categoria: 'TANK',
      descripcion: 'SUV híbrida compacta, lista para la aventura.',
    },
    // HAVAL
    {
      id: 3,
      nombre: 'H6 HEV',
      version: 'H6 HEV',
      imagen: '/catalogo/ext/inchcapelatam-760x360-h6-hibrido-2wd-elite-at-hibrido--f23791.webp',
      categoria: 'HAVAL',
      descripcion: 'SUV híbrida, amplia, cómoda y eficiente.',
    },
    {
      id: 4,
      nombre: 'JOLION PRO HEV',
      version: 'JOLION PRO HEV',
      imagen: '/catalogo/ext/inchcapelatam-haval-versiones-1-02588b.webp',
      categoria: 'HAVAL',
      descripcion: 'SUV híbrida compacta, con estilo y eficiencia.',
    },
    {
      id: 5,
      nombre: 'JOLION HEV',
      version: 'JOLION HEV',
      imagen: '/catalogo/ext/gwm-mx-blue-1-ab8f77.webp',
      categoria: 'HAVAL',
      descripcion: 'SUV híbrida compacta, ágil y confortable.',
    },
    // POER
    {
      id: 6,
      nombre: 'POER PASSENGER',
      version: 'POER PASSENGER',
      imagen: '/catalogo/gwm-poer.webp',
      categoria: 'POER',
      descripcion: 'Pick-up versátil, para trabajo y ocio.',
    },
    {
      id: 7,
      nombre: 'POER MECÁNICA',
      version: 'POER MECÁNICA',
      imagen: '/catalogo/ext/inchcapelatam-760x360-poer-mt-diesel-4x2-elite-negra-83618a.webp',
      categoria: 'POER',
      descripcion: 'Pick-up robusta, ideal para trabajos pesados.',
    },
    {
      id: 8,
      nombre: 'WINGLE 7',
      version: 'WINGLE 7',
      imagen: '/catalogo/gwm-wingle-7.webp',
      categoria: 'POER',
      descripcion: 'Pick-up grande, confortable y capaz.',
    },
    {
      id: 9,
      nombre: 'WINGLE 5',
      version: 'WINGLE 5',
      imagen: '/catalogo/ext/encrypted-tbn0-images-aa8f80.webp',
      categoria: 'POER',
      descripcion: 'Pick-up compacta, funcional y accesible.',
    },
    // ORA
    {
      id: 10,
      nombre: 'ORA 03 GT',
      version: 'ORA 03 GT',
      imagen: '/catalogo/gwm-ora-03.webp',
      categoria: 'ORA',
      descripcion: 'Eléctrico compacto deportivo, ágil y moderno.',
    },
    {
      id: 11,
      nombre: 'ORA 03',
      version: 'ORA 03',
      imagen: '/catalogo/ext/gwmcleber-ora03-todoazul-b433f3.webp',
      categoria: 'ORA',
      descripcion: 'Eléctrico compacto, eficiente y elegante.',
    },
  ];

  const categorias = ['TANK', 'HAVAL', 'POER', 'ORA'];

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
          Catálogo GWM
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

export default Catalogo;
