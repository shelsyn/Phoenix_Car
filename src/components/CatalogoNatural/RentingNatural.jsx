import Image from "next/image";
export default function RentingNatural() {
    return (
      <div className="relative isolate overflow-hidden py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true" />
        <Image src="https://www.pngkey.com/png/full/206-2061960_alquiler-de-carros-en-colombia-carros-de-alquiler.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="mx-auto max-w-2xl mix-blend-lighten	">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Renting Persona Natural</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
            Estrena vehículo de acuerdo al que mejor se ajuste a tus necesidades cada 48 meses, pagas un valor mensual y despreocúpate de los gastos que pueda tener el carro mantenimientos, seguros,
            impuestos cambio de llantas.
          </p>
        </div>
      </div>
    );
  }
  