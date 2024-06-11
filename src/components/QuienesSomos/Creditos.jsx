const cards = [
    {
      name: 'Crédito de Vehículo para Empleados',
      details: [
        'Solicitud de vinculación como persona natural.',
        'Fotocopia del documento ampliado al 150%',
        'Certificado laboral original con vigencia máxima a 90 días, indicando cargo, salario, tiempo de servicio y tipo de contrato.',
        'Fotocopia del último comprobante de pago de nómina'
      ]
    },
    {
      name: 'Crédito de Vehículo para Independientes',
      details: [
        'Solicitud de vinculación como persona natural.',
        'Fotocopia del documento ampliado al 150%',
        'Declaración de renta o carta de no declarante.',
        'Extractos bancarios de los últimos tres meses'
      ]
    },
    {
      name: 'Crédito de Vehículo para Pensionados',
      details: [
        'Solicitud de vinculación como persona natural.',
        'Fotocopia del documento ampliado al 150%',
        'Fotocopia del último comprobante de pago de pensión'
      ]
    }
  ];
  
  export default function Creditos() {
    return (
      <section id="Creditos" className="">
        <div className="relative isolate overflow-hidden bg-white mt-5 py-0 sm:py-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-bold tracking-tight text-gold-goldTitle xs:text-4xl lg:text-4xl">Créditos</h2>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 mt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {cards.map((card) => (
                <div key={card.name} className="flex flex-col gap-x-4 rounded-xl border border-dashed border-gold-goldButton p-5">
                  <div className="lg:text-lg sm:text-base leading-7">
                    <h3 className="font-semibold text-slate-900">{card.name}</h3>
                    {card.details && (
                      <ul className="list-disc pl-5 mt-2">
                        {card.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-600">{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  