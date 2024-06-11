import Link from "next/link";

export default function Empleado() {
    return (
        <section id="Empleado">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-4 pb-4 sm:pt-6 sm:pb-6 lg:pt-8 lg:pb-8">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-goldTitle">
                                    Crédito Hipotecario para empleado
                                </h1>
                                <p className="mt-4 text-lg xs:text-xl sm:text-2xl text-gray-900">
                                    Solicitud de vinculación como persona natural.
                                </p>
                                <div className="mt-6 sm:mt-10">
                                    <ul className="list-disc list-inside text-sm xs:text-base sm:text-lg">
                                        <li>Solicitud de vinculación como persona natural.</li>
                                        <li>Fotocopia del documento ampliado al 150%.</li>
                                        <li>Certificado laboral original con vigencia máxima a 90 días, indicando cargo, salario, tiempo de servicio y tipo de contrato.</li>
                                        <li>Fotocopia del último comprobante de pago de nómina.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-center lg:justify-end">
                                <div className="h-64 w-44 sm:h-80 sm:w-60 lg:h-[40rem] lg:w-[30rem] overflow-hidden rounded-lg">
                                    <img
                                        src="./toyota.jpg"
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
