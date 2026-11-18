import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { WHATSAPP_URL } from '@/lib/contacto';

const catalogoOptions = [
  { id: 2, name: 'Catálogo Empresa', desc: 'Flotas y vehículos para tu negocio', href: '/catalogoEmpresa' },
  { id: 3, name: 'Catálogo Persona Natural', desc: 'Tu carro nuevo sin cuota inicial', href: '/catalogoNatural' },
];

const marcasAutos = [
  { id: 4, name: 'Renault', imgSrc: '/renaulds.avif', href: '/renault' },
  /*{ id: 5, name: "Toyota", imgSrc: "/toyor.avif", href: "/toyota" },*/
  { id: 6, name: 'Suzuki', imgSrc: '/susu.avif', href: '/suzuki' },
  { id: 7, name: 'Citroën', imgSrc: '/citro.avif', href: '/citroen' },
  { id: 8, name: 'Subaru', imgSrc: '/sub.avif', href: '/subaru' },
  { id: 9, name: 'Chevrolet', imgSrc: '/ChevroletLogo.png', href: '/chevrolet' },
  { id: 10, name: 'GWM', imgSrc: '/gwm.avif', href: '/gwm' },
  { id: 11, name: 'Seres', imgSrc: '/seres.avif', href: '/seres' },
];

const productosOptions = [
  {
    id: 12,
    name: 'Equipos de Oficina',
    subItems: [
      { id: 13, name: 'Alquiler de Tablets', href: '/tablet' },
      { id: 14, name: 'Alquiler de Celulares', href: '/celulares' },
      { id: 15, name: 'Alquiler de Impresoras', href: '/impresora' },
      { id: 16, name: 'Alquiler de Computadores', href: '/computadores' },
    ],
  },
  {
    id: 17,
    name: 'Alquiler de Maquinaria',
    subItems: [
      { id: 18, name: 'Maquinaria Industrial', href: '/maquinariaIndustrial' },
      { id: 19, name: 'Maquinaria Pesada', href: '/catalogoActivo' },
    ],
  },
  {
    id: 20,
    name: 'Otros Productos',
    subItems: [
      { id: 21, name: 'Puntos de Venta (POS)', href: '/catalogoPOS' },
      { id: 22, name: 'Equipos Médicos', href: '/medicina' },
    ],
  },
];

const creditosOptions = [{ id: 23, name: 'Crédito de vehículo', desc: 'Financia tu próximo carro', href: '/quienesSomos' }];

const navButton =
  'group flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium text-white/85 outline-none transition hover:bg-white/10 hover:text-white data-[open]:bg-white/10 data-[open]:text-white';
const panelBase =
  'absolute left-1/2 z-50 mt-3 -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-900/5 transition duration-200 ease-out data-[closed]:translate-y-1 data-[closed]:opacity-0';

function NavDropdown({ label, children, panelClass }) {
  return (
    <Popover className="relative">
      <PopoverButton className={navButton}>
        {label}
        <ChevronDownIcon className="h-4 w-4 opacity-70 transition group-data-[open]:rotate-180" aria-hidden="true" />
      </PopoverButton>
      <PopoverPanel transition className={`${panelBase} ${panelClass}`}>
        {children}
      </PopoverPanel>
    </Popover>
  );
}

function LinkItem({ item }) {
  return (
    <Link
      href={item.href}
      className="block rounded-xl p-3 transition hover:bg-brand-soft"
    >
      <span className="block text-sm font-semibold text-slate-900">{item.name}</span>
      {item.desc && <span className="mt-0.5 block text-xs text-slate-500">{item.desc}</span>}
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú móvil al navegar
  useEffect(() => {
    const close = () => setMobileMenuOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-brand-ink/90 shadow-lg shadow-black/10 backdrop-blur-md' : 'bg-brand-ink'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8" aria-label="Principal">
        <Link href="/" className="flex shrink-0 items-center" aria-label="VentRentAll - Inicio">
          <img className="h-10 w-auto lg:h-12" src="/logos.png" alt="VentRentAll" width="581" height="141" />
        </Link>

        {/* Escritorio */}
        <PopoverGroup className="hidden items-center gap-1 lg:flex">
          <Link href="/" className={navButton}>
            Inicio
          </Link>

          <NavDropdown label="Productos" panelClass="w-[640px]">
            <div className="grid grid-cols-3 gap-2">
              {productosOptions.map((category) => (
                <div key={category.id} className="rounded-xl p-2">
                  <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-brand">{category.name}</p>
                  {category.subItems.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.href}
                      className="block rounded-lg px-2 py-2 text-sm text-slate-700 transition hover:bg-brand-soft hover:text-brand"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown label="Vehículos Nuevos" panelClass="w-[520px]">
            <div className="grid grid-cols-4 gap-2">
              {marcasAutos.map((marca) => (
                <Link
                  key={marca.id}
                  href={marca.href}
                  className="group flex flex-col items-center gap-2 rounded-xl p-3 transition hover:bg-brand-soft"
                >
                  <img src={marca.imgSrc} alt="" className="h-12 w-12 object-contain transition group-hover:scale-110" loading="lazy" />
                  <span className="text-xs font-medium text-slate-600 group-hover:text-brand">{marca.name}</span>
                </Link>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown label="Renting Autos" panelClass="w-72">
            {catalogoOptions.map((item) => (
              <LinkItem key={item.id} item={item} />
            ))}
          </NavDropdown>

          <NavDropdown label="Créditos" panelClass="w-64">
            {creditosOptions.map((item) => (
              <LinkItem key={item.id} item={item} />
            ))}
          </NavDropdown>
        </PopoverGroup>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-ink shadow-md transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            Contáctenos
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-brand-ink px-5 pb-8 pt-4 shadow-2xl transition duration-300 ease-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between">
            <img className="h-9 w-auto" src="/logos.png" alt="VentRentAll" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full p-2 text-white transition hover:bg-white/10"
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-1 text-white">
            <Link href="/" className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-white/10">
              Inicio
            </Link>

            <MobileSection title="Vehículos Nuevos">
              <div className="grid grid-cols-4 gap-2 px-1 pb-2">
                {marcasAutos.map((marca) => (
                  <Link
                    key={marca.id}
                    href={marca.href}
                    className="flex flex-col items-center gap-1 rounded-xl bg-white p-2"
                  >
                    <img src={marca.imgSrc} alt="" className="h-9 w-9 object-contain" loading="lazy" />
                    <span className="text-[10px] font-medium text-slate-600">{marca.name}</span>
                  </Link>
                ))}
              </div>
            </MobileSection>

            <MobileSection title="Renting Autos">
              {catalogoOptions.map((item) => (
                <MobileLink key={item.id} href={item.href}>
                  {item.name}
                </MobileLink>
              ))}
            </MobileSection>

            <MobileSection title="Productos">
              {productosOptions.map((category) => (
                <div key={category.id} className="pb-2">
                  <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">{category.name}</p>
                  {category.subItems.map((sub) => (
                    <MobileLink key={sub.id} href={sub.href}>
                      {sub.name}
                    </MobileLink>
                  ))}
                </div>
              ))}
            </MobileSection>

            <MobileSection title="Créditos">
              {creditosOptions.map((item) => (
                <MobileLink key={item.id} href={item.href}>
                  {item.name}
                </MobileLink>
              ))}
            </MobileSection>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-ink"
          >
            Escríbenos por WhatsApp
          </a>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

function MobileSection({ title, children }) {
  return (
    <Disclosure as="div" className="border-t border-white/10">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold hover:bg-white/5">
        {title}
        <ChevronDownIcon className="h-5 w-5 text-white/60 transition group-data-[open]:rotate-180" aria-hidden="true" />
      </DisclosureButton>
      <DisclosurePanel className="pb-2">{children}</DisclosurePanel>
    </Disclosure>
  );
}

function MobileLink({ href, children }) {
  return (
    <Link href={href} className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
      {children}
    </Link>
  );
}
