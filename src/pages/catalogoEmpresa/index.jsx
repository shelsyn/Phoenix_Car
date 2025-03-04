import { useState } from "react";
import HeaderEmpresas from "@/components/CatalogoEmpresas/HeaderEmpresas";
import RentingEmpresas from "@/components/CatalogoEmpresas/RentingEmpresas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Productos from "@/components/Productos";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappButton"; 

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
        <title>VENTRENTALL | Catálogo Empresarial</title>
        <meta name="description" content="Descubre nuestra selección de vehículos y activos diseñados para empresas. Encuentra la mejor opción en VENTRENTALL." />
        <meta name="keywords" content="renting para empresas, alquiler de flotas, compra de vehículos corporativos, leasing de autos" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <RentingEmpresas />
      <section id="catalogoEmpresa">
        <div className="bg-white">
          <div className="mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-[#047ab7] font-bold text-center mb-8">
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
                        className="py-2 px-4 bg-[#047ab7] text-white font-medium text-center rounded-lg hover:bg-[#05a0e3] transition"
                      >
                        Ficha técnica
                      </a>
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-4 bg-[#047ab7] text-white font-medium text-center rounded-lg hover:bg-[#05a0e3] transition"
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
    <WhatsappButton />
    
    </>
  );
}