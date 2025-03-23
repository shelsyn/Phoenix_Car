import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link'; // Import Link from Next.js

const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Crédito de vehículo', href: '/quienesSomos' },
    { name: 'Catálogo Empresa', href: '/catalogoEmpresa' },
    { name: 'Catálogo Activo', href: '/catalogoActivo' },
    { name: 'Medicina', href: '/medicina' },
    { name: 'Catálogo Persona Natural', href: '/catalogoNatural' },
    { name: 'Términos y condiciones', href: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:f002e481-c9de-49f0-be43-0238d920de06' },
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
    <footer className="bg-gradient-to-b from-[#1e4d89] to-[#147ac4] text-white py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"> {/* 3-column grid on desktop */}
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <Link href="/" legacyBehavior>
              <a className="cursor-pointer">
                <img className="h-14 w-auto object-contain" src="/logos.png" alt="Logo" /> {/* Reduced logo size */}
              </a>
            </Link>
         
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Navegación</h4>
            <nav className="flex flex-col space-y-2" aria-label="Footer"> {/* Increased space */}
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.name === 'Términos y condiciones' ? (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-phoenix-orange transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} legacyBehavior>
                      <a className="text-gray-300 hover:text-phoenix-orange transition-colors text-sm">
                        {item.name}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
            <div className="flex flex-col space-y-2"> {/* Increased space */}
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-300 hover:text-phoenix-orange transition-colors flex items-center"
                  rel="noreferrer"
                >
                  <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Phoenix Car. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
