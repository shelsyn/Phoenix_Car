
    import React from 'react';

const products = [
  {
    id: 1,
    name: 'Furgonetas',
    imageSrc: '/furgon.png',
  },
  {
    id: 2,
    name: 'Utilitarios',
    imageSrc: '/Utilitarios.png',
  },
  {
    id: 3,
    name: 'Pickup',
    imageSrc: '/carga.png',
  },
  {
    id: 4,
    name: 'Comerciales de pasajeros',
    imageSrc: 'https://www.autosonline.cl/images/stories/foton/ft-crew/exterior/foton-ft-crew-2.jpg',
  },
  {
    id: 5,
    name: 'Comerciales de carga',
    imageSrc: 'https://leonalperovich.com.ar/wp-content/uploads/2023/08/10005-1.jpg',
  },
  {
    id: 6,
    name: 'Vanes',
    imageSrc: 'https://build.ford.com/dig/Ford/Transit%20VanWagon/2024/HD-TILE/Image%5B%7CFord%7CTransit%20VanWagon%7C2024%7C1%7C1.%7C301A.X2Y.148.PYZ..88C.89K.LRL.18P.XL.20G.B2GAB.16E.85C.41B.90B.21L.96K.CS2.~CA%23KA_SE%23B8.51D.SRW.64D.TC8.RWD.998.57G.FLE.60C.SAA.58U.19Z.62D.18A.15F.BS4.44U.17F.X73.96X.541.CLO.WAL.%5D/EXT/1/vehicle.png',
  },
];

export default function Politicas() {
  return (
    <section id="Promociones">
      <div className="bg-white">
        <div className="mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-[#047ab7] font-bold ">Vehículos públicos y productivos</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative rounded-xl shadow-lg">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img src={product.imageSrc} alt={product.name} className="w-full h-auto object-cover object-center" />
                  </div>
                  <div className="relative p-2">
                    <h3 className="text-xl font-bold text-center" style={{ color: '#451a03' }}>{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.tipo}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-700">{product.precio}</p>
                    <p className="mt-1 text-sm text-gold-goldButton-300 text-gold-goldButton ">{product.iva}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                    {/* <p className="relative text-lg font-semibold text-white">{product.precio}</p> */}
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
