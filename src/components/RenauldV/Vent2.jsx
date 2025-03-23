import React, { useState, useMemo } from 'react';

function Catalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Carros');

  const productos = [
    {
      id: 1,
      nombre: 'Renault Kwid',
      precio: "Kwid", // Replaced price with name
      imagen: 'https://store.autogalias.com/cdn/shop/files/Blanco_fd3291e5-baeb-4c75-a5d1-5cb197cf5a9c.png?v=1704822368',
      categoria: 'Carros',
      descripcion: 'Hatchback compacto y moderno.',
    },
    {
      id: 2,
      nombre: 'Renault Sandero',
      precio: "Sandero", // Replaced price with name
      imagen: 'https://maxiautos.co/img/ybc_blog/post/1920X750png.jpg',
      categoria: 'Carros',
      descripcion: 'Hatchback versátil y espacioso.',
    },
    {
      id: 3,
      nombre: 'Renault Logan',
      precio: "Logan", // Replaced price with name
      imagen: 'https://cdn.group.renault.com/ren/co/vehicles/logan/design/exterior/logan-lateral-exterior.jpg.ximg.xsmall.jpg/210c18118f.jpg',
      categoria: 'Carros',
      descripcion: 'Sedán espacioso y confortable.',
    },
    {
      id: 4,
      nombre: 'Renault Stepway',
      precio: "Stepway", // Replaced price with name
      imagen: 'https://cdn.group.renault.com/ren/mx/mex/vehiculos-comerciales/stepway/gris.jpg.ximg.xsmall.jpg/d146db8401.jpg',
      categoria: 'Carros',
      descripcion: 'Hatchback aventurero con mayor altura.',
    },
    {
      id: 5,
      nombre: 'Renault Kardian',
      precio: "Kardian", // Replaced price with name
      imagen: 'https://www.autocity.ar/wp-content/uploads/2024/10/kardina-autocity.webp',
      categoria: 'Camionetas',
      descripcion: 'SUV moderna y elegante.',
    },
    {
      id: 6,
      nombre: 'Renault Duster',
      precio: "Duster", // Replaced price with name
      imagen: 'https://alborautosrenault.com/wp-content/uploads/2020/02/renault-duster-exterior-1.jpg',
      categoria: 'Camionetas',
      descripcion: 'SUV compacta y robusta.',
    },
    {
      id: 7,
      nombre: 'Renault Captur',
      precio: "Captur", // Replaced price with name
      imagen: 'https://www.portafolio.co/files/article_new_multimedia/uploads/2022/03/31/6245c46862cb9.jpeg',
      categoria: 'Camionetas',
      descripcion: 'SUV elegante y confortable.',
    },
    {
      id: 8,
      nombre: 'Renault Koleos',
      precio: "Koleos", // Replaced price with name
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXbhI8Sz7zE_YjoxqfimTyODur5S_i3UchCrjsN-2M4vCyAbLVPTwPjF09iTHP80ntDM&usqp=CAU',
      categoria: 'Camionetas',
      descripcion: 'SUV de lujo, elegante y sofisticada.',
    },
    {
      id: 9,
      nombre: 'Renault Oroch',
      precio: "Oroch", // Replaced price with name
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjl8dIAyhAhIZPH2eMechHe02jIen2abYMA&s',
      categoria: 'PickUps',
      descripcion: 'Pickup compacta, moderna y versátil.',
    },
    {
      id: 10,
      nombre: 'Renault Alaskan',
      precio: "Alaskan", // Replaced price with name
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7-pR5lMiCnJti4_kFxQlOW_eyo0GIGz2vQ&s',
      categoria: 'PickUps',
      descripcion: 'Pickup potente y robusta.',
    },
      {
        id: 11,
        nombre: 'Megane E-Tech',
        precio: "Megane E-Tech", // Replaced price with name
        imagen: 'https://agenciauto.com/wp-content/uploads/2023/06/bccd134571-1024x576.webp',
        categoria: 'Eléctricos E-Tech',
        descripcion: 'Hatchback eléctrico de alto rendimiento.',
      },
      {
        id: 12,
        nombre: 'Kwid E-Tech',
        precio: "Kwid E-Tech", // Replaced price with name
        imagen: 'https://agenciauto.com/wp-content/uploads/2023/06/kwid-e-tech-electrico-color2-agenciauto.webp',
        categoria: 'Eléctricos E-Tech',
        descripcion: 'Hatchback eléctrico compacto y eficiente.',
      },
      {
        id: 13,
        nombre: 'Zoe E-Tech',
        precio: "Zoe E-Tech", // Replaced price with name
        imagen: 'https://alborautosrenault.com/wp-content/uploads/2024/01/Zoe_05.png',
        categoria: 'Eléctricos E-Tech',
        descripcion: 'Hatchback eléctrico elegante y tecnológico.',
      },
      {
        id: 14,
        nombre: 'Renault Kangoo',
        precio: "Kangoo", // Replaced price with name
        imagen: 'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg.ximg.xsmall.jpg/575e68ba40.jpg',
        categoria: 'Utilitarios',
        descripcion: 'Vehículo utilitario versátil y espacioso.',
      },
      {
        id: 15,
        nombre: 'Renault Master',
        precio: "Master", // Replaced price with name
        imagen: 'https://motocostarenault.com/wp-content/uploads/2021/09/master-exterior1.jpg',
        categoria: 'Utilitarios',
        descripcion: 'Vehículo utilitario grande y de alta capacidad.',
      },
      {
        id: 16,
        nombre: 'Renault Trafic',
        precio: "Trafic", // Replaced price with name
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VR0wcbOL2gr5vFq-Isw-_yelpQsv86zpHQ&s',
        categoria: 'Utilitarios',
        descripcion: 'Vehículo utilitario versátil, para pasajeros o carga.',
      },
    {
      id: 17,
      nombre: 'Renault Arkana E-Tech',
      precio: "Arkana E-Tech", // Replaced price with name
      imagen: 'https://res.cloudinary.com/total-dealer/image/upload/w_3840,f_auto,q_75/v1/production/b59g14axdbw9six87hkbslxjzmbr',
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
                        <span className="font-normal text-sm mr-1"></span>
                        {producto.precio}
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
