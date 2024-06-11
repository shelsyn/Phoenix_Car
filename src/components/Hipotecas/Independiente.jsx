import Link from "next/link";

export default function Independiente() {
    return (
        <section id="Independiente">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-6 pb-6 lg:pt-8 lg:pb-8">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="hidden lg:flex justify-center lg:justify-start">
                                <div className="h-64 w-44 sm:h-80 sm:w-60 lg:h-[40rem] lg:w-[30rem] overflow-hidden rounded-lg">
                                    <img
                                        src="./toyota.jpg"
                                        alt="Ilustración de un automóvil"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-4xl text-gold-goldTitle">
                                    Crédito Hipotecario para Independientes
                                </h1>
                                <p className="mt-4 text-lg lg:text-xl text-gold-goldTitle">
                                    <span className="text-xl lg:text-2xl font-semibold">¡Obtén tu hogar siendo independiente! Financiamos tu sueño de tener casa propia. ¡Empieza hoy!</span>
                                </p>
                                <div className="mt-6 sm:mt-8">
                                    <p className="text-lg lg:text-xl text-gray-900 font-semibold mb-2">Documentos requeridos:</p>
                                    <ul className="list-disc list-inside text-lg lg:text-xl text-gray-900">
                                        <li>Certificado de ingresos y retenciones y/o declaración de renta</li>
                                        <li>Documento de identidad ampliado al 150%</li>
                                        <li>Extractos bancarios de los últimos tres meses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
