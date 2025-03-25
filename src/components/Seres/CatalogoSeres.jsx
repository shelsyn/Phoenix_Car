import React, { useState, useMemo } from 'react';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('SUV');

  const productos = [
    // SUV
    {
      id: 1,
      nombre: 'SERES 3',
      version: 'SERES 3',
      imagen: 'https://www.serescolombia.com/seres/site/artic/20230314/imag/foto_0000015220230314121032/rojo.jpeg',
      categoria: 'SUV',
      descripcion: 'SUV compacto eléctrico, ideal para la ciudad.',
    },
    {
      id: 2,
      nombre: 'SERES 5',
      version: 'SERES 5',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_C2gp5Cv47WmKl4bfM2e79NhhTofhAGWGw&s',
      categoria: 'SUV',
      descripcion: 'SUV eléctrico de alto rendimiento, con diseño elegante.',
    },
  ];

  const categorias = ['SUV'];

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
          Catálogo SERES
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
