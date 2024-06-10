import Link from "next/link";

export default function TipoPersona() {
    return (
      <section id="tipoPersona">
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-[39rem] sm:pt-24 sm:pb-[608px] lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight sm:text-6xl xs:text-3xl text-gold-goldTitle">Nuestro Catálogo</h1>
                <p className="mt-4 text-2xl xs:text-xl text-gray-900">
                  Optimiza tu tiempo y ahorra dinero con nuestro servicio de renting de carros. ¡Explora nuestro completo catálogo y elige el vehículo perfecto para ti!
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img src="./toyota.jpg" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.unsplash.com/photo-1552559789-c57c0a79a8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="./ojo.png" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="./cams.png" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="./vass.png" alt="" className="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <Link href="/catalogoNatural" className="rounded-lg border border-transparent bg-gold-goldTitle py-3 px-8 text-center font-normal text-white hover:bg-gold-goldText mr-4">
                      Catálogo Natutal
                    </Link>
                    <Link href="/catalogoEmpresa" className="rounded-lg border border-transparent bg-gold-goldTitle py-3 px-8 text-center font-normal text-white hover:bg-gold-goldText">
                      Catálogo Empresa
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    }
  