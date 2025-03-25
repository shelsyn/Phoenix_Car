import { useState } from "react";
import HeaderNatural from "@/components/CatalogoNatural/HeaderNatural";
import RentingNatural from "@/components/CatalogoNatural/RentingNatural";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Productos from "@/components/Productos";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappButton"; 
const products = [
  {
    id: 1,
    name: 'Vitara Mc 2Wd At Gl+',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './suzuki-Vitara.jpg',
    marca: 'Suzuki',
    tipo: 'Camioneta - SUV',
    ficha: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8d0a4fa4-b9c5-4db4-9c69-37acc2cdfa1e'
  },

  {
    id: 1,
    name: 'Tracker Turbo Ls At',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_aea7e70d73154e948dd6d70f75527a70.jpg',
    marca: 'Chevrolet',
    tipo: 'Camioneta - SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:6858eb01-bab7-4c05-81ad-d86aeb00a0ac'
  },
  {
    id: 1,
    name: 'Nueva Duster Zen 1.6 4X2 Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './duster.jpg',
    marca: 'Renault',
    tipo: 'Camioneta - SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:21e2e904-7fe1-42e7-8494-ad9c5c33438d'
  },
  {
    id: 1,
    name: ' Pulse Impetus At',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './fiat.png',
    marca: 'Fiat',
    tipo: 'Camioneta – SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:c6fd3378-0772-42d0-bc3e-5436334a4a49'
  },
  {
    id: 1,
    name: 'Cx5 Touring 2.0 At 4X2',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './mazda2-0.webp',
    marca: 'Mazda',
    tipo: 'Camioneta – SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ac167ec6-79cf-4bfd-9fbf-cf4498ad5ab7'
  },
  {
    id: 1,
    name: 'T-Cross Trendline Sense 170 Tsi Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './t-cross.jpg',
    marca: 'Volkswagen',
    tipo: 'Camioneta - SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:c16ce7f6-737a-42fc-9b35-777a8ee47b37'
  },
  {
    id: 1,
    name: 'Nueva Koleos Intens 4X4 Ph2',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://cdn.group.renault.com/ren/ar/modelos/koleos/ph1/2560x1440-responsive-format/renault-koleos2-hzg-ph1-exterior-diseno-013.jpg.ximg.xsmall.jpg/46b5832186.jpg',
    marca: 'Renault',
    tipo: 'Camioneta – SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:7fb00daf-f8a0-42c4-ae05-e6bae40e9eed'
  },
  {
    id: 1,
    name: 'Cx5 Grand Touring 2.5 At 4X2',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './mazda2-5.webp',
    marca: 'Mazda',
    tipo: 'Camioneta - SUV',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ac167ec6-79cf-4bfd-9fbf-cf4498ad5ab7'
  },

///////////////AUTOMOVIL////////
  {
    id: 1,
    name: 'Logan Life Ph2',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://agenciauto.com/wp-content/uploads/2021/02/10797-color-vehiculo-nuevo-logan.jpg',
    imageAlt: 'Renault ',
    marca: 'Renault ',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:97e30701-aea4-40a8-9878-6aed570bf12e'
  },

  {
    id: 1,
    name: ' Kwid Zen',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './kwid.jpg',
   marca: 'Renault',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:795b6441-97af-46e1-ae04-2bb968ad558d'
  },
  {
    id: 1,
    name: 'Logan Life Fleet Cvt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './logan2.jpg',
    imageAlt: 'Renault Logan Life Fleet Cvt',
    marca: 'Renault ',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:271725e8-1057-4deb-958f-dfe5b0298387'
  },
  {
    id: 1,
    name: ' New Swift 1.2 Hybrid',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './susukiSwift.png',
    marca: 'Suzuki',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:7bbbb655-403c-427e-beb6-877f5b9a8097'
  },
  {
    id: 1,
    name: 'Onix Nb Lt Turbo At',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './onix.png',
    marca: 'Chevrolet',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:f1bfa9e0-9bdb-455f-81e8-47a1e34891a5'
  },
  {
    id: 1,
    name: ' Logan Intens Cvt Ph2',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://movilidadco.vteximg.com.br/arquivos/ids/975357/Renault-Logan-Intens-CVT-00691234-1.jpg?v=638452706169130000',
    marca: 'Renault',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:97e30701-aea4-40a8-9878-6aed570bf12e'
  },
  {
    id: 1,
    name: ' Virtus Trendline 1.6L 110Hp 5Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://autolab.com.co/wp-content/uploads/2022/06/ddc847450ff156db4098748c83d50f18dd4ec9896b78313c99e0286ec4189b4e.jpg',
    marca: 'Volkswagen',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:37ee82c5-c505-44ee-9cce-c1b0df307e42'
  },
  {
    id: 1,
    name: 'Arona FR 1.6 AT',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://movilidadco.vteximg.com.br/arquivos/ids/950356/Seat-Arona-fr-reference.jpg?v=638406900317400000',
    marca: 'Seat',
    tipo: 'Automovil',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:5be6a945-a718-4c0b-b46f-2985882cdf62'
  },
  ///////////////////////////CAMPEROS/////////////////////////////////
  {
    id: 1,
    name: ' Nivus Comfortline 1.0L 200Tsi 6At',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './nivus.webp',
    marca: 'Volkswagen',
    tipo: 'Campero',
    ficha:''
  },
  /*{
    id: 1,
    name: ' Prado 5 Puertas Diesel 2.8 Tx',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './prado.png',
    marca: 'Toyota ',
    tipo: 'Campero',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:265846d5-9ff8-43ff-8219-0c3706b88bf8'
  },
  */
  {
    id: 1,
    name: ' Duster Iconic 1.3T 4X4 Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: './duster3.jpg',
    marca: 'Renault',
    tipo: 'Campero',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ace1f531-aebd-4733-b8d3-a5d06548e2ee'
  },
  {
    id: 1,
    name: ' Nueva Duster Intens 1.3T 4X4 Mt',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://cdn.group.renault.com/ren/ar/modelos/nuevo-duster/ph1/renault-duster-hjd-ph1-diseno-exterior-017.jpg.ximg.xsmall.jpg/906484ffde.jpg',
    marca: 'Renault',
    tipo: 'Campero',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:950e36d6-5626-4af8-8c81-539679c1e075'
  },
  {
    id: 1,
    name: ' Crossland Edition',
    year: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
    imageSrc: 'https://www.elcolombiano.com/binrepository/1020x680/0c26/1020d627/none/11101/AWQY/grpi20-c02-606-dark-ruby-red_37642515_20210430205013.jpg',
    marca: 'Opel',
    tipo: 'Campero',
    ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:42d09578-c779-4ccc-8e24-7fb05a90aca9'
  },
 
];
export default function CatalogoPersonaNatural() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>VENTRENTALL | Catalogo Natural</title>
        <meta name="description" content="Descubre nuestra selección de vehículos y activos diseñados para personas naturales. Encuentra la mejor opción en VENTRENTALL." />
        <meta name="keywords" content="renting para personas naturales, alquiler de carros, compra de vehículos " />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Header />
      <RentingNatural />
      <section id="catalogoNatural">
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
                  <div className="relative h-56 w-full overflow-hidden flex items-center justify-center bg-white">
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
                        className="py-2 px-4 bg-[#047ab7] text-white font-medium text-center rounded-lg hover:bg-[#05a0e3] transition
"
                      >
                        Ficha técnica
                      </a>
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-4 bg-[#047ab7] text-white font-medium text-center rounded-lg hover:bg-[#05a0e3] transition
"
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