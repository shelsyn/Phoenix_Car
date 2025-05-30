export default function Productos() {
  const products = [
    {
      id: 1,
      name: "Cx5 Touring 2.0 At 4X2",
      year: "2024",
      href: "https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias.",
      imageSrc: "https://dercocenter-api.s3.us-east-1.amazonaws.com/images/version/1706733992-ZHtrlJSUKd.webp",
      marca: "Mazda",
      iva: "IVA INCLUIDO",
    },
    {
      id: 2,
      name: "Renegade Connect",
      year: "2024",
      href: "https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias.",
      imageSrc: "https://www.ccarprice.com/products/Jeep_Renegade_Limited_2024.jpg",
      marca: "Jeep",
      iva: "IVA INCLUIDO",
    },
    {
      id: 3,
      name: "Logan Life Ph2",
      year: "2024",
      href: "https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias.",
      imageSrc: "https://agenciauto.com/wp-content/uploads/2021/02/10797-color-vehiculo-nuevo-logan.jpg",
      marca: "Renault",
      iva: "IVA INCLUIDO",
    },
    {
      id: 4,
      name: "Kangoo Evolución",
      year: "2024",
      href: "https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+gracias.",
      imageSrc: "https://img-ik.cars.co.za/news-site-za/images/2021/02/renault-kangoo-express-van-3.jpg",
      marca: "Renault",
      iva: "IVA INCLUIDO",
    },
  ];

  return (
    <section id="Promociones">
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col justify-between rounded-xl shadow-lg p-4 bg-white border border-gray-300"
              >
                {/* Información del producto */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-center space-x-4">
                    {/* Etiquetas elegantes */}
                    <span className="text-sm text-gray-700 bg-white border border-gray-300 rounded-full px-3 py-1">
                      {product.marca}
                    </span>
                    <span className="text-sm text-gray-700 bg-white border border-gray-300 rounded-full px-3 py-1">
                      {product.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-600">{product.iva}</p>
                </div>

                {/* Imagen del producto */}
                <div className="relative h-48 w-full overflow-hidden rounded-lg my-4">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Botón */}
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                  style={{
                    backgroundColor: "#047ab7", // Color dorado formal
                  }}
                >
                  Cotizar
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
