import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
];

const catalogoOptions = [
  { name: "Catálogo Empresa", href: "/catalogoEmpresa" },
  { name: "Catálogo Persona Natural", href: "/catalogoNatural" },
];

const productosOptions = [
  { name: "Maquinaria Pesada", href: "/catalogoActivo" },
];

const creditosOptions = [
  { name: "Crédito de vehículo", href: "/quienesSomos" },
  { name: "Crédito Hipotecario", href: "/hipoteca" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav className="mx-12 flex items-center justify-between space-x-8" aria-label="Global">
          {/* Logo */}
          <div className="flex items-center space-x-4 lg:flex-1">
            <img className="h-16 w-auto object-contain" src="/phonelogo.png" alt="Logo" />
            <div className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: "#b39456" }}>
                PHOENIX
              </span>
              <span className="text-2xl font-bold" style={{ color: "#d6ae7b", marginLeft: "5px" }}>
                CAR
              </span>
            </div>
          </div>

          {/* Menú móvil */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Menú en Escritorio */}
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold leading-6 text-gold-goldButton"
              >
                {item.name}
              </Link>
            ))}
            {/* Catálogo */}
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
                <Popover.Panel className="absolute left-0 z-10 mt-3 w-56 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 space-y-2">
                    {catalogoOptions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 p-2 text-sm leading-6 hover:bg-gray-50"
                      >
                        <span className="w-2 h-2 bg-gold-goldButton rounded-full" />
                        <span className="text-gray-900 font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* Productos */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gold-goldButton">
                Productos
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
                <Popover.Panel className="absolute left-0 z-10 mt-3 w-56 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 space-y-2">
                    {productosOptions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 p-2 text-sm leading-6 hover:bg-gray-50"
                      >
                        <span className="w-2 h-2 bg-gold-goldButton rounded-full" />
                        <span className="text-gray-900 font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* Créditos */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gold-goldButton">
                Créditos
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
                <Popover.Panel className="absolute left-0 z-10 mt-3 w-56 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 space-y-2">
                    {creditosOptions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 p-2 text-sm leading-6 hover:bg-gray-50"
                      >
                        <span className="w-2 h-2 bg-gold-goldButton rounded-full" />
                        <span className="text-gray-900 font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>

          {/* Botón de contacto */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias."
              target="_blank"
              className="text-lg font-semibold leading-6 text-gray-900"
              rel="noreferrer"
            >
              <span className="p-3 rounded-lg bg-gold-goldButton text-white hover:bg-gold-goldBg">
                Contáctenos
              </span>
            </a>
          </div>
        </nav>

        {/* Menú móvil */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 bg-white p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img className="h-10 w-auto object-contain" src="/phonelogo.png" alt="Logo" />
                <div className="flex items-center">
                  <span className="text-lg font-bold" style={{ color: "#b39456" }}>
                    PHOENIX
                  </span>
                  <span className="text-lg font-bold" style={{ color: "#d6ae7b", marginLeft: "5px" }}>
                    CAR
                  </span>
                </div>
              </div>
              <button type="button" onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="block text-gray-900 font-medium">
                  {item.name}
                </Link>
              ))}
              <div>
                <span className="block font-medium text-gray-700">Catálogo</span>
                {catalogoOptions.map((item) => (
                  <Link key={item.name} href={item.href} className="block pl-4 text-gray-700">
                    • {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <span className="block font-medium text-gray-700">Productos</span>
                {productosOptions.map((item) => (
                  <Link key={item.name} href={item.href} className="block pl-4 text-gray-700">
                    • {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <span className="block font-medium text-gray-700">Créditos</span>
                {creditosOptions.map((item) => (
                  <Link key={item.name} href={item.href} className="block pl-4 text-gray-700">
                    • {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
