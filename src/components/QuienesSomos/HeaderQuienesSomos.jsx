import { Fragment, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AiOutlineCar } from 'react-icons/ai';
import Link from 'next/link';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Catálogo Empresa', href: '/catalogoEmpresa' },
  { name: 'Catálogo Persona Natural', href: '/catalogoNatural' },
  { name: 'creditos', href: '/credito' },
  { name: 'Términos y Condiciones', href: '#Condiciones' },
];

const products = [
  { name: 'Catálogo Empresa', href: '/catalogoEmpresa', icon: AiOutlineCar },
  { name: 'Catálogo Persona Natural', href: '/catalogoNatural', icon: AiOutlineCar },
];

export default function HeaderQuienesSomos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white">
        <nav className="mx-12 flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <img className="h-[97px] w-[285px]" src="/fondoss.png" alt="" />
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-lg font-semibold leading-6 text-gold-goldButton">
              Inicio
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gold-goldButton">
                Catálogo
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-gold-goldText" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a href="#Condiciones" className="text-lg font-semibold leading-6 text-gold-goldButton">
            Términos y Condiciones
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+estoy+interesado+en+rentar+un+vehículo,+pordrían+brindarme+más+información,+gracias."
              target="_blank"
              className="text-lg font-semibold leading-6 text-gray-900"
              rel="noreferrer"
            >
              <span className="p-3 rounded-lg bg-gold-goldButton text-white hover:bg-gold-goldBg">Contáctenos</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gold-goldWhite px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-20" src="/fondoss.png" alt="" />
              </Link>
              <button type="button" className="rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-900">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
