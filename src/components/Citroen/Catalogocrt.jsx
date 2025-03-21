import React, { useMemo } from 'react';

function Catalogo() {
  const productos = [
    {
      id: 1,
      nombre: 'Nueva C3',
      precio: 67990000,
      imagen: 'https://www.citroen.com.co/wp-content/uploads/2023/05/c3-gris-artense-bitono-negro.jpg',
      descripcion: 'Nueva C3',
    },
    {
      id: 2,
      nombre: 'Nueva C4 Cactus',
      precio: 93990000,
      imagen: 'https://www.citroen.com.co/wp-content/uploads/2023/08/c4-rojo-rubi.jpg',
      descripcion: 'LA NUEVA CITROËN C4 CACTUS',
    },
    {
      id: 3,
      nombre: 'Nueva Aircross SUV',
      precio: 79990000,
      imagen: 'https://www.citroen.com.co/wp-content/uploads/2022/10/blanco-nacar-unique-1.jpg',
      descripcion: 'NUEVA AIRCROSS SUV',
    },
    {
      id: 4,
      nombre: 'SUV C5 Aircross',
      precio: 148490000,
      imagen: 'https://visuel3d-secure.citroen.com/V3DImage.ashx?client=DI1&version=1CCESYUP41B0EO70&color=0MM00N9V&width=360&ratio=1&view=001&format=jpg&quality=90',
      descripcion: 'SUV C5 Aircross',
    },
  ];

  const productosFiltrados = useMemo(() => {
    return productos;
  }, [productos]);

  return (
    <div className="bg-gray-100 py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Catalog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Catálogo Citroen
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
                    <span className="font-normal text-sm mr-1">a partir de</span>
                    ${producto.precio.toLocaleString()}
                  </span>
                </div>
                <a
                  href={`https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.`}
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
