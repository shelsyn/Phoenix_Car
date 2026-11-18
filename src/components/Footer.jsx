import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { EMAIL, INSTAGRAM_URL, PHONE, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contacto';

const columns = [
  {
    title: 'Renting',
    links: [
      { name: 'Catálogo Empresa', href: '/catalogoEmpresa' },
      { name: 'Catálogo Persona Natural', href: '/catalogoNatural' },
      { name: 'Maquinaria Pesada', href: '/catalogoActivo' },
      { name: 'Equipos Médicos', href: '/medicina' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { name: 'Inicio', href: '/' },
      { name: 'Crédito de vehículo', href: '/quienesSomos' },
      { name: 'Términos y condiciones', href: '/terminos' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      {/* Brillo decorativo */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="VentRentAll - Inicio">
              <img className="h-12 w-auto" src="/logos.png" alt="VentRentAll" loading="lazy" width="581" height="141" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              Renting de vehículos, maquinaria y equipos para empresas y personas. Sin cuota inicial y con
              mantenimiento, seguros e impuestos incluidos.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`tel:+${PHONE}`} className="flex items-center gap-3 text-white/80 transition hover:text-white">
                <PhoneIcon className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/80 transition hover:text-white">
                <EnvelopeIcon className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/70 transition hover:text-brand-gold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} VENTRENTALL. Todos los derechos reservados.
          </p>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-brand-gold hover:text-brand-ink"
            >
              <AiOutlineInstagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-brand-gold hover:text-brand-ink"
            >
              <AiOutlineWhatsApp className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
