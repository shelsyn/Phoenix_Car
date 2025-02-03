import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Pensionado() {
    return (
        <section id="Pensionado">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-6 pb-6 lg:pt-8 lg:pb-8">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="flex flex-col gap-x-4 rounded-xl border border-dashed border-gold-goldButton p-5 shadow-lg">
                                <h1 className="text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-4xl text-gold-goldTitle">
                                Crédito Hipotecario para pensionados
                                </h1>
                                <p className="mt-4 text-lg lg:text-xl text-gold-goldTitle">
                                    <span className="text-xl lg:text-2xl font-semibold">Solicitud de vinculación como persona natural.</span>
                                </p>
                                <div className="mt-6 sm:mt-8">
                                    
                                    <ul className="space-y-2">
                                        {[
                                            "Fotocopia del documento ampliado al 150%.",
                                            "Fotocopia del último comprobante de pago de pensión."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center text-base lg:text-lg text-gray-900">
                                                <HomeIcon className="h-5 w-5 text-gray-500 mr-2" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-center lg:justify-end">
                                <div className="w-64 sm:w-80 lg:w-[30rem] overflow-hidden rounded-lg">
                                    <Image
                                        src="https://dontamalio.com/wp-content/uploads/2020/09/mini_subsidio_vivienda_urbana.png"
                                        alt="Ilustración de un automóvil"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}
