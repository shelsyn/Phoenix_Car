import HeaderEmpresas from "@/components/CatalogoEmpresa/HeaderEmpresas";
import RentingEmpresas from "@/components/CatalogoEmpresa/RentingEmpresas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Head from "next/head";


const products = [
////////////////////////camioneta/////////
{
  id: 1,
  name: ' L200 Glx 2.5 Diesel 4X4 Dc Mt',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mitsubishi+L200+Glx,+gracias.',
  imageSrc: './mitsu.jpeg',

  marca: 'Mitsubishi',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8f6e9496-535c-4a41-8150-ef8a875d06c1'
},
{
  id: 1,
  name: 'Alaskan Cargo',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+Alaskan,+gracias.',
  imageSrc: './renault.jpg',
  marca: 'Renault',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:a6dc4cb2-321e-4a9d-973d-d5dbf268253f'
},
{
  id: 1,
  name: ' Rich 6 Ev Dc',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+HZna+Rich+6,+gracias.',
  imageSrc: './dongfe.webp',
  marca: 'HZna',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:e949e8e8-611b-49c2-89ee-de7825c3479c'
},
{
  id: 1,
  name: ' Colorado (S10) Ls Mt 4X4 2.8 Dsl Cd',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+Colorado,+gracias.',
  imageSrc: './colorado.png',
  marca: 'Chevrolet ',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8b095944-b71e-4582-854e-ca136efbe5dd'
},
{
  id: 1,
  name: ' Hilux D.C. Diesel 2.4 4X4 Mecanica',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Toyota+Hilux+gracias.',
  imageSrc: './toyota1.jpg',
  marca: 'Toyota',
  tipo: 'Camioneta',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:69278af1-8a36-434d-94ec-22618e5864c2'
},
{
  id: 1,
  name: ' Ranger Xls Diesel Mt D/C',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ford+Ranger,+gracias.',
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
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+New+Kangoo,+gracias.',
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
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+Nhr+Reward,+gracias.',
  imageSrc: './camion1.png',
  marca: 'Chevrolet ',
  tipo: 'Camion liviano',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:df7671bd-ac13-4c30-afcb-90953beed280'
},
{
  id: 1,
  name: ' Npr Reward Euro Iv',
  year: '2024',
  href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+Npr+Reward,+gracias.',
  imageSrc: './camion2.png',
  marca: 'Chevrolet',
  tipo: 'Camion liviano',
  ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:0a128bde-9f75-41e9-803b-f99ca254727e'
},

];
export default function CatalogoEmpresa() {
  return (
    <>
          <Head>
        <title>Phoenix Car | Catalogo Empresa</title>
        <meta
          name="description"
        />
      </Head>
      <Header />
      <RentingEmpresas />
      <section id="catalogoEmpresa">
      <div className="bg-white">
          <div className="mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-gold-goldTitle font-bold ">Nuestro Catálogo</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative rounded-xl shadow-lg">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
               <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-auto object-cover object-center" />
             <style jsx>{`
             @media (max-width: 640px) {
                .relative {
                height: 72vw;
               }
               }
              `}</style>
               </div>
                    <div className="relative p-2">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="flex flex-row items-center space-x-2 mt-1">
                        <p className="text-sm text-gray-900 bg-gold-goldWhite rounded-xl py-0.5 px-1">{product.marca}</p>
                        <p className="text-sm text-gray-900 bg-gold-goldWhite rounded-xl py-0.5 px-1">{product.year}</p>
                      </span>
                      <p className="mt-1 text-sm text-gray-500">{product.tipo}</p>
                      <p className="mt-1 text-lg font-semibold text-slate-700">{product.precio}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                      {/* <p className="relative text-lg font-semibold text-white">{product.precio}</p> */}
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                  <a
                      href={product.ficha}
                      target="_blank"
                      className="col-span-1 relative flex items-center justify-center rounded-md border border-transparent bg-gold-goldButton py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                      rel="noreferrer"
                    >
                      Ficha técnica<span className="sr-only">, {product.name}</span>
                    </a>
                    <a
                      href={product.href}
                      target="_blank"
                      className="col-span-1 relative flex items-center justify-center rounded-md border border-transparent bg-gold-goldButton py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                      rel="noreferrer"
                    >
                      Cotizar<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
   
      {/* <Contacto /> */}
      <Footer />
      <div className="z-[100]">
        <a
          href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+estoy+interesado+en+rentar+un+vehículo,+pordrían+brindarme+más+información,+gracias."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-4 right-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#25D366" className="animate-bounce" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </div>
    </>
  );
}
