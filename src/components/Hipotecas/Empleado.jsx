import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Empleado() {
    return (
        <section id="Empleado">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-4 pb-4 sm:pt-6 sm:pb-6 lg:pt-8 lg:pb-8">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="flex flex-col gap-x-4 rounded-xl border border-dashed border-gold-goldButton p-5 shadow-lg">
                                <h1 className="text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-4xl text-gold-goldTitle">
                                    Crédito Hipotecario para empleado
                                </h1>
                                <p className="mt-4 text-lg lg:text-xl text-gray-900">
                                    Solicitud de vinculación como persona natural.
                                </p>
                                <div className="mt-6 sm:mt-10">
                                    <ul className="space-y-2">
                                        {[
                                            "Solicitud de vinculación como persona natural.",
                                            "Fotocopia del documento ampliado al 150%.",
                                            "Certificado laboral original con vigencia máxima a 90 días, indicando cargo, salario, tiempo de servicio y tipo de contrato.",
                                            "Fotocopia del último comprobante de pago de nómina."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-base lg:text-lg text-gray-900">
                                                <HomeIcon className="h-5 w-5 text-gray-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-center"> {/* Aquí he cambiado 'lg:justify-end' por 'lg:justify-center' */}
                                <div className="w-96 h-72 sm:h-96 sm:w-120 lg:h-96 lg:w-120 overflow-hidden rounded-lg"> {/* He ajustado el ancho y alto */}
                                    <img
                                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1450,h_967/https://www.arcaes.com.co/wp-content/uploads/2020/11/credito-hipotecario-comprar-casa-en-colombia-2.jpg"
                                        alt="Descripción de la imagen"
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
