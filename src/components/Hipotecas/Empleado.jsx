import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Empleado() {
    return (
        <section id="Empleado">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Texto e información */}
                            <div className="flex flex-col gap-y-6 rounded-xl border border-dashed border-gold-goldButton p-5 shadow-lg">
                                <h1 className="text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-4xl text-gold-goldTitle">
                                    Crédito Hipotecario para empleado
                                </h1>
                                <p className="mt-2 text-lg lg:text-xl text-gray-800">
                                    Solicitud de vinculación como persona natural.
                                </p>
                                <div className="mt-4 sm:mt-8">
                                    <ul className="space-y-3">
                                        {[
                                            "Solicitud de vinculación como persona natural.",
                                            "Fotocopia del documento ampliado al 150%.",
                                            "Certificado laboral original con vigencia máxima a 90 días, indicando cargo, salario, tiempo de servicio y tipo de contrato.",
                                            "Fotocopia del último comprobante de pago de nómina."
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-base lg:text-lg text-gray-900">
                                                <HomeIcon
                                                    className="h-6 w-6 text-gray-500 mr-4 mt-1 flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="flex justify-center lg:justify-center">
                                <div className="w-96 h-72 sm:h-96 sm:w-120 lg:h-96 lg:w-120 overflow-hidden rounded-lg">
                                    <Image
                                        src="https://s3.pagegear.co/181/69/imagenes-editor/2023/09/0912_primer_plano_agente_bienes_raices_dando_par_llaves_su_nuevo_hogar_xwarfh.jpg"
                                        alt="Persona entregando llaves en una oficina de bienes raíces"
                                        loading="lazy"
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
