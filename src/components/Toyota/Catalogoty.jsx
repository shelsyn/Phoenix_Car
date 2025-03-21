import React, { useState, useMemo } from 'react';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Carros');

  const productos = [
    // Carros
    {
      id: 1,
      nombre: 'Yaris',
      precio: 89900000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2020/08/Yaris-HB-Siluetas-768x512-1.png',
      categoria: 'Carros',
      descripcion: 'Hatchback compacto y moderno.',
    },
    {
      id: 2,
      nombre: 'Corolla',
      precio: 108500000,
      imagen: 'https://autoamerica.com.co/wp-content/uploads/2020/08/COROLLA-XEI-HEV-PLATA-METALICO.jpg',
      categoria: 'Carros',
      descripcion: 'Sedán versátil y espacioso.',
    },
    // Camionetas (SUVs)
    {
      id: 3,
      nombre: '4Runner',
      precio: 246900000,
      imagen: 'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/4runner/trdpro/8634/040/36/5.png?fmt=png-alpha&wid=930&qlt=90',
      categoria: 'Camionetas',
      descripcion: 'SUV robusta y versátil.',
    },
    {
      id: 4,
      nombre: 'Corolla Cross',
      precio: 135900000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2024/05/Corolla-Cross-SEG_super-blanco-1.png',
      categoria: 'Camionetas',
      descripcion: 'SUV versátil y espaciosa.',
    },
    {
      id: 5,
      nombre: 'Fortuner',
      precio: 237900000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2021/02/super-blanco-2.png',
      categoria: 'Camionetas',
      descripcion: 'SUV robusta, ideal para cualquier terreno.',
    },
    {
      id: 6,
      nombre: 'Land Cruiser 300',
      precio: 613500000,
      imagen: 'https://distoyota.com/wp-content/uploads/2024/01/Land-cruiser-300-ZX-Gasolina-AT.png',
      categoria: 'Camionetas',
      descripcion: 'SUV de lujo, potente y sofisticada.',
    },
    {
      id: 7,
      nombre: 'Land Cruiser Prado',
      precio: 299000000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2024/05/TX-L-super-blanco-1.png',
      categoria: 'Camionetas',
      descripcion: 'SUV de lujo, potente y sofisticada.',
    },
    {
      id: 8,
      nombre: 'RAV 4',
      precio: 198500000,
      imagen: 'https://toyotaarmenia.com/wp-content/uploads/2021/03/7colores_0014_rav4_xle_azul_nocturno.png',
      categoria: 'Camionetas',
      descripcion: 'SUV versátil y espaciosa.',
    },
    {
      id: 9,
      nombre: 'Yaris Cross',
      precio: 131900000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2024/05/Colores-Yaris-Cross-XS-super-blanco-2.png',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta, moderna y eficiente.',
    },
    // PickUps
    {
      id: 10,
      nombre: 'Hilux',
      precio: 213900000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2021/02/hilux_destacada-2-4-AT.jpg',
      categoria: 'PickUps',
      descripcion: 'Pickup resistente y confiable.',
    },
    {
      id: 11,
      nombre: 'Tundra',
      precio: 432000000,
      imagen: 'https://www.toyota.com.co/wp-content/uploads/2023/10/Colores-Tundra_756_blanco-perla.png',
      categoria: 'PickUps',
      descripcion: 'Pickup de alto rendimiento y capacidad.',
    },
  ];

  const categorias = ['Carros', 'Camionetas', 'PickUps'];

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
          Catálogo Toyota
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
                    <span className="font-normal text-sm mr-1">Desde</span>
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
