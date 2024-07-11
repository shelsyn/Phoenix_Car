import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';

const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Promociones', href: '#Promociones' },
    { name: 'Crédito de vehículo', href: '/quienesSomos'},
    { name: 'Crédito Hipotecario', href: '/hipoteca'},
    { name: 'Catálogo Empresa', href: '/catalogoEmpresa' },
    { name: 'Catálogo Persona Natural', href: '/catalogoNatural' }
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/phoenix_car_sas/',
      icon: AiOutlineInstagram,
    },
    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias.',
      icon: AiOutlineWhatsApp,
    },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden pt-10 px-4 sm:py-8 lg:px-8">
          <nav className="flex flex-wrap justify-center sm:justify-between sm:space-x-12 xs:space-x-4" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="mb-2 sm:mb-0">
                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-6 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-7 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-gray-500">&copy; 2023 Phoenix Car. Derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
