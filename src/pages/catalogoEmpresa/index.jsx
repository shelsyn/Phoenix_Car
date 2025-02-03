import { useState } from "react";
import HeaderEmpresas from "@/components/CatalogoEmpresas/HeaderEmpresas";
import RentingEmpresas from "@/components/CatalogoEmpresas/RentingEmpresas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Productos from "@/components/Productos";
import Head from "next/head";

const products = [
  ////////////////////////camioneta/////////
{
  id: 1,
  name: ' L200 Glx 2.5 Diesel 4X4 Dc Mt',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './mitsu.jpeg',

  marca: 'Mitsubishi',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8f6e9496-535c-4a41-8150-ef8a875d06c1'
},
{
  id: 1,
  name: 'Alaskan Cargo',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './renault.jpg',
  marca: 'Renault',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:a6dc4cb2-321e-4a9d-973d-d5dbf268253f'
},
{
  id: 1,
  name: ' Rich 6 Ev Dc',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './dongfe.webp',
  marca: 'HZna',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:e949e8e8-611b-49c2-89ee-de7825c3479c'
},
{
  id: 1,
  name: ' Colorado (S10) Ls Mt 4X4 2.8 Dsl Cd',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './colorado.png',
  marca: 'Chevrolet ',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8b095944-b71e-4582-854e-ca136efbe5dd'
},
{
  id: 1,
  name: ' Hilux D.C. Diesel 2.4 4X4 Mecanica',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './toyota1.jpg',
  marca: 'Toyota',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:69278af1-8a36-434d-94ec-22618e5864c2'
},
{
  id: 1,
  name: ' Ranger Xls Diesel Mt D/C',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './ford.webp',
  marca: 'Ford ',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:82fe823d-557f-465f-a86a-3709d0de85fc'
},
 ///////////////////////////VANS/////////////////////////////////
 {
  id: 1,
  name: ' New Kangoo Evolución Producto',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './kangoo.jpg',
  marca: 'Renault',
  tipo: 'Vans',
  ficha:''
},
//////////////////////////////////camion liviano//////
{
  id: 1,
  name: 'Nhr Reward Euro Iv',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: 'https://www.centrodiesel.com.co/wp-content/uploads/2024/06/nlr-especiales.jpg',
  marca: 'Chevrolet ',
  tipo: 'Camion liviano',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:df7671bd-ac13-4c30-afcb-90953beed280'
},
{
  id: 1,
  name: ' Npr Reward Euro Iv',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
  imageSrc: './camion2.png',
  marca: 'Chevrolet',
  tipo: 'Camion liviano',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0a128bde-9f75-41e9-803b-f99ca254727e'
},
];

export default function CatalogoEmpresa() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Phoenix Car | Catalogo Empresa</title>
        <meta name="description" content="Catálogo de vehículos y activos para empresas" />
      </Head>
      <Header />
      <RentingEmpresas />
      <section id="catalogoEmpresa">
        <div className="bg-white">
          <div className="mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-gold-goldTitle font-bold text-center mb-8">
              Nuestro Catálogo
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div className="p-4 flex flex-col items-center text-center">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex space-x-2 mt-2">
                      <span className="text-sm text-gray-800 bg-gray-200 rounded-full px-3 py-1">
                        {product.marca}
                      </span>
                      <span className="text-sm text-gray-800 bg-gray-200 rounded-full px-3 py-1">
                        {product.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{product.tipo}</p>
                  </div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <div className="mt-4 grid grid-cols-2 gap-4 w-full">
                      <a
                        href={product.ficha}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-4 bg-gold-goldButton text-white font-medium text-center rounded-lg hover:bg-gold-goldHover transition"
                      >
                        Ficha técnica
                      </a>
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-4 bg-gold-goldButton text-white font-medium text-center rounded-lg hover:bg-gold-goldHover transition"
                      >
                        Cotizar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Productos />
      <Footer />

      {/* Botón de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={toggleChat}
          className={`flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-72">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Renta a largo plazo</h3>
            <p className="text-sm text-gray-700 mb-4">
              La renta de vehículos y activos está diseñada para el largo plazo (más de 2 años).{" "}
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
              target="_blank"
              rel="noreferrer"
              className="block bg-green-500 text-white font-bold py-2 px-4 rounded-lg text-center hover:bg-green-600 transition"
            >
              Contáctanos ahora
            </a>
          </div>
        )}
      </div>
    </>
  );
}