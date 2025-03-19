import React from 'react';

function ProductCard() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#047ab7] mb-12">
          Servicios Adicionales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accesorios Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://i.ytimg.com/vi/z4syLj1zcIo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBMgUSh_MA8=&rs=AOn4CLCFJqFeOSkJeIAWIebskR-8xF3KGg"
                alt="Accesorios"
                className="w-full h-full object-cover object-center transition duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">Accesorios</h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-gray-600 mb-4">
                Personaliza tu Renault con accesorios originales.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#047ab7] text-white px-4 py-2 rounded-full hover:bg-[#036fa1] transition duration-300 text-sm w-full text-center font-medium"
              >
                Ver Más
              </a>
            </div>
          </div>

          {/* Repuestos Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxPBz0kcWwlj0tQVMal2GohJJcfuu-AkdTW2SeqNZVhjomi5ClNln58ZX5pccQSGBmgKhxueeKHNW4ywbUREsA95HRIk1a0TUbBaqCUB08PrA7C-rtJSyin9gleIcmhLowwL7i0NcNvwo/s1600/image004%25281%2529.jpg"
                alt="Repuestos"
                className="w-full h-full object-cover object-center transition duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">Repuestos</h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-gray-600 mb-4">
                Cuida tu Renault con repuestos originales.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#047ab7] text-white px-4 py-2 rounded-full hover:bg-[#036fa1] transition duration-300 text-sm w-full text-center font-medium"
              >
                Ver Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
