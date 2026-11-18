import React, { useState, useMemo } from 'react';
import OptImg from '@/components/ui/OptImg';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Carros');

  const productos = [
    {
      id: 1,
      nombre: 'Renault Kwid',
      precio: "Kwid", // Replaced price with name
      imagen: '/catalogo/renault-kwid.webp',
      categoria: 'Carros',
      descripcion: 'Hatchback compacto y moderno.',
    },
    {
      id: 2,
      nombre: 'Renault Sandero',
      precio: "Sandero", // Replaced price with name
      imagen: '/catalogo/ext/maxiautos-1920x750png-f7fcb9.webp',
      categoria: 'Carros',
      descripcion: 'Hatchback versátil y espacioso.',
    },
    {
      id: 3,
      nombre: 'Renault Logan',
      precio: "Logan", // Replaced price with name
      imagen: '/catalogo/ext/cdn-210c18118f-baa799.webp',
      categoria: 'Carros',
      descripcion: 'Sedán espacioso y confortable.',
    },
    {
      id: 4,
      nombre: 'Renault Stepway',
      precio: "Stepway", // Replaced price with name
      imagen: '/catalogo/ext/cdn-d146db8401-b7ec1a.webp',
      categoria: 'Carros',
      descripcion: 'Hatchback aventurero con mayor altura.',
    },
    {
      id: 5,
      nombre: 'Renault Kardian',
      precio: "Kardian", // Replaced price with name
      imagen: '/catalogo/renault-kardian.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV moderna y elegante.',
    },
    {
      id: 6,
      nombre: 'Renault Duster',
      precio: "Duster", // Replaced price with name
      imagen: '/catalogo/renault-duster.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta y robusta.',
    },
    {
      id: 7,
      nombre: 'Renault Captur',
      precio: "Captur", // Replaced price with name
      imagen: '/catalogo/renault-captur.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV elegante y confortable.',
    },
    {
      id: 8,
      nombre: 'Renault Koleos',
      precio: "Koleos", // Replaced price with name
      imagen: '/catalogo/ext/encrypted-tbn0-images-ecc332.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV de lujo, elegante y sofisticada.',
    },
    {
      id: 9,
      nombre: 'Renault Oroch',
      precio: "Oroch", // Replaced price with name
      imagen: '/catalogo/ext/encrypted-tbn0-images-2c78e7.webp',
      categoria: 'PickUps',
      descripcion: 'Pickup compacta, moderna y versátil.',
    },
    {
      id: 10,
      nombre: 'Renault Alaskan',
      precio: "Alaskan", // Replaced price with name
      imagen: '/catalogo/ext/encrypted-tbn0-images-436bdc.webp',
      categoria: 'PickUps',
      descripcion: 'Pickup potente y robusta.',
    },
      {
        id: 11,
        nombre: 'Megane E-Tech',
        precio: "Megane E-Tech", // Replaced price with name
        imagen: '/catalogo/renault-megane-etech.webp',
        categoria: 'Eléctricos E-Tech',
        descripcion: 'Hatchback eléctrico de alto rendimiento.',
      },
      {
        id: 12,
        nombre: 'Kwid E-Tech',
        precio: "Kwid E-Tech", // Replaced price with name
        imagen: '/catalogo/renault-kwid-etech.webp',
        categoria: 'Eléctricos E-Tech',
        descripcion: 'Hatchback eléctrico compacto y eficiente.',
      },
      {
        id: 13,
        nombre: 'Zoe E-Tech',
        precio: "Zoe E-Tech", // Replaced price with name
        imagen: '/catalogo/renault-zoe.webp',
        categoria: 'Eléctricos E-Tech',
        descripcion: 'Hatchback eléctrico elegante y tecnológico.',
      },
      {
        id: 14,
        nombre: 'Renault Kangoo',
        precio: "Kangoo", // Replaced price with name
        imagen: '/catalogo/ext/cdn-575e68ba40-6c4fe1.webp',
        categoria: 'Utilitarios',
        descripcion: 'Vehículo utilitario versátil y espacioso.',
      },
      {
        id: 15,
        nombre: 'Renault Master',
        precio: "Master", // Replaced price with name
        imagen: '/catalogo/ext/motocostarenault-master-exterior1-8f3f39.webp',
        categoria: 'Utilitarios',
        descripcion: 'Vehículo utilitario grande y de alta capacidad.',
      },
      {
        id: 16,
        nombre: 'Renault Trafic',
        precio: "Trafic", // Replaced price with name
        imagen: '/catalogo/ext/encrypted-tbn0-images-416e50.webp',
        categoria: 'Utilitarios',
        descripcion: 'Vehículo utilitario versátil, para pasajeros o carga.',
      },
    {
      id: 17,
      nombre: 'Renault Arkana E-Tech',
      precio: "Arkana E-Tech", // Replaced price with name
      imagen: '/catalogo/ext/res-b59g14axdbw9six87hkbslxjzmbr-4226d2.webp',
      categoria: 'Hybrid E-Tech',
      descripcion: 'SUV híbrido, deportivo y elegante.',
    },
  ];

  const categorias = [
    'Carros',
    'Camionetas',
    'PickUps',
    'Hybrid E-Tech',
    'Eléctricos E-Tech',
    'Utilitarios',
  ];
  
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
          Catálogo Renault
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
