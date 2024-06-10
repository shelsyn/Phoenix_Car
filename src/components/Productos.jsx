const products = [
    {
      id: 1,
      name: 'Cx5 Touring 2.0 At 4X2',
      year: '2023',
      href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+Cx5+Touring,+gracias.',
      imageSrc: 'https://m.atcdn.co.uk/vms/media/df522b45ccef4a34b9ebebbd7c747985.jpg',
      precio: '$3´990.000 mensual',
      marca: 'Mazda',
      iva:'IVA INCLUIDO',
      ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ac167ec6-79cf-4bfd-9fbf-cf4498ad5ab7'
      
    },
    
    {
      id: 1,
      name: 'Renegade Connect',
      year: '2023',
      href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Jeep+Camioneta-SUV+gracias.',
      imageSrc: 'https://www.jeep.co.za/content/dam/jeep/crossmarket/new-renegade-2019/Overview/02_colorizer/02_Colors/02_Trims/02_longitude/Longitude_562_my20.png',
      precio: '$2´990.000 mensual',
      marca: 'Jepp',
      iva:'IVA INCLUIDO',
      ficha: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8d0a4fa4-b9c5-4db4-9c69-37acc2cdfa1e'
    },
    {
      id: 1,
      name: 'Logan Life Ph2',
      year: '2023',
      href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+Logan+Life+Ph2+,gracias.',
      imageSrc: 'https://agenciauto.com/wp-content/uploads/2021/02/10797-color-vehiculo-nuevo-logan.jpg',
      imageAlt: 'Renault ',
      precio: '$1´690.000 mensual',
      iva:'IVA INCLUIDO',
      marca: 'Renault ',
      ficha:'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:97e30701-aea4-40a8-9878-6aed570bf12e'
      
    },
    {
      id: 1,
      name: '  Kangoo Evolución ',
      year: '2023',
      href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+New+Kangoo,+gracias.',
      imageSrc: 'https://img-ik.cars.co.za/news-site-za/images/2021/02/renault-kangoo-express-van-3.jpg',
      precio: '$1´990.000 mensual',
      marca: 'Renault New',
      iva:'IVA INCLUIDO',
      ficha:''
    },
  
    
  ];
  
  export default function Productos() {
    return (

      <section id="Promociones">
      <div className="bg-white">
          <div className="mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-gold-goldTitle font-bold ">Nuestras Promociones</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
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
                      <p className="mt-1 text-sm text-gold-goldButton-300 text-gold-goldButton ">{product.iva}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                      {/* <p className="relative text-lg font-semibold text-white">{product.precio}</p> */}
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-2">
                 
                    <a
                      href={product.href}
                      target="_blank"
                      className="col-span-1 relative flex items-center justify-center rounded-md border border-transparent bg-gold-goldButton py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                      rel="noreferrer"
                    >
                      Más información<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    );
  }
  