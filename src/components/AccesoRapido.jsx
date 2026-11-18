import Link from 'next/link';
import { ArrowRightIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { WHATSAPP_URL } from '@/lib/contacto';

const items = [
  {
    title: 'Renting para personas',
    text: 'Estrena carro sin cuota inicial y con todo incluido.',
    href: '/catalogoNatural',
    icon: UserIcon,
  },
  {
    title: 'Renting para empresas',
    text: 'Optimiza tu flota y libera capital de trabajo.',
    href: '/catalogoEmpresa',
    icon: BriefcaseIcon,
  },
];

// Barra de accesos rápidos debajo del banner principal
export default function AccesoRapido() {
  return (
    <section className="relative z-10 mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:mt-10 lg:px-8">
      <div className="grid gap-3 rounded-3xl bg-white p-3 shadow-2xl shadow-brand-ink/10 ring-1 ring-slate-900/5 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-brand-soft"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display font-semibold text-slate-900">{item.title}</span>
              <span className="block text-sm text-slate-500">{item.text}</span>
            </span>
            <ArrowRightIcon className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand" aria-hidden="true" />
          </Link>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl bg-brand-ink p-4 text-white transition hover:bg-brand-navy"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]">
            <AiOutlineWhatsApp className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display font-semibold">Cotiza ahora</span>
            <span className="block text-sm text-white/70">Un asesor te atiende por WhatsApp</span>
          </span>
          <ArrowRightIcon className="h-5 w-5 shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
