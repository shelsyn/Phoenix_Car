import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon, FolderIcon, ShoppingBagIcon, CreditCardIcon, X } from "lucide-react";

import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
];

const catalogoOptions = [
  { name: "Catálogo Empresa", href: "/catalogoEmpresa" },
  { name: "Catálogo Persona Natural", href: "/catalogoNatural" },
];

const productosOptions = [
  {
    name: "Equipos de Oficina",
    subItems: [
      { name: "Alquiler de Tablets", href: "/tablet" },
      { name: "Alquiler de Celulares", href: "/celulares" },
      { name: "Alquiler de Impresoras", href: "/alquilerImpresoras" },
      { name: "Alquiler de Computadores", href: "/alquilerComputadores" },
    ],
  },
  {
    name: "Alquiler de Maquinaria",
    subItems: [
      { name: "Maquinaria Industrial", href: "/maquinariaIndustrial" },
      { name: "Maquinaria Pesada ", href: "/catalogoActivo" },
    ],
  },
  {
    name: "Otros Productos",
    subItems: [
  
      { name: "Puntos de Venta (POS)", href: "/catalogoPOS" },
      { name: "Equipos Médicos", href: "/medicina" },
    ],
  },
];


const creditosOptions = [
  { name: "Crédito de vehículo", href: "/quienesSomos" },
  { name: "Crédito Hipotecario", href: "/hipoteca" },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-[#1e4d89] via-[#147ac4] to-[#05a0e3]
">
        <nav className="mx-12 flex items-center justify-between space-x-8" aria-label="Global">
          {/* Logo */}
<div className="flex items-center space-x-4 lg:flex-1">
  <img className="h-16 w-auto object-contain" src="/logos.png" alt="Logo" />
</div>

{/* Menú móvil */}
<div className="flex lg:hidden">
  <button
    type="button"
    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-300 transition-all"
    onClick={() => setMobileMenuOpen(true)}
  >
    <span className="sr-only">Abrir menú</span>
    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  </button>
</div>

{/* Menú en Escritorio */}
<Popover.Group className="hidden lg:flex lg:gap-x-8">
  {navigation.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-lg font-semibold leading-6 text-[#ffffff] hover:text-gray-3000 transition-all"
    >
      {item.name}
    </Link>
  ))}

  {/* Catálogo */}
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white hover:text-gray-200">
      Catálogo
      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
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
              className="flex items-center gap-2 p-2 text-sm leading-6 hover:bg-gray-100"
            >
              <span className="w-2 h-2 bg-[#05a0e3] rounded-full" />
              <span className="text-gray-900 font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>


           
           {/* Productos */}

<Popover className="relative">
  <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-all">
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
    {/* Panel con estructura mejorada */}
    <Popover.Panel className="absolute left-0 z-10 mt-3 w-[650px] bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 p-6 grid grid-cols-3 gap-6 text-left">
      {productosOptions.map((category) => (
        <div key={category.name} className="space-y-3">
          <h4 className="text-gray-800 font-semibold text-md border-b pb-2">{category.name}</h4>
          <div className="space-y-2">
            {category.subItems.map((subItem) => (
              <Link 
                key={subItem.name} 
                href={subItem.href} 
                className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
              >
                <span className="w-2 h-2 bg-[#05a0e3] rounded-full" />
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Popover.Panel>
  </Transition>
</Popover>



            {/* Créditos */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-all">
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
                        <span className="w-2 h-2 bg-[#05a0e3] rounded-full" />
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
            <span className="p-3 rounded-lg bg-[#047ab7] text-white shadow-md hover:bg-[#05a0e3] transition-all">
                Contáctenos
              </span>
            </a>
          </div>
        </nav>

     {/* Menú móvil */}
<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
<Dialog.Panel className="fixed inset-0 z-10 bg-gradient-to-b from-[#2156a4] to-[#05a0e3] p-6 overflow-y-auto max-h-screen">

    <div className="flex justify-between items-center">
      {/* Logo con más espacio */}
      <div className="flex items-center space-x-4 mb-4">
        <img className="h-12 w-auto object-contain" src="/logos.png" alt="Logo" />
      </div>
      <button type="button" onClick={() => setMobileMenuOpen(false)}>
        <X className="h-6 w-6 text-white hover:text-gray-300 transition-all" />
      </button>
    </div>

    <div className="mt-4 space-y-6">
      {/* Inicio */}
      <Link href="/" className="flex items-center gap-3 text-white font-semibold text-lg hover:bg-white/10 p-2 rounded-md transition-all">
        <HomeIcon className="h-5 w-5 text-gray-300" />
        Inicio
      </Link>

      {/* Categoría Catálogo */}
      <div className="border-b border-white/20 pb-3">
        <div className="flex items-center gap-3 text-white font-semibold text-lg">
          <FolderIcon className="h-5 w-5 text-gray-300" />
          Catálogo
        </div>
        <div className="mt-2 space-y-2">
          {catalogoOptions.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-2 pl-6 text-gray-200 hover:text-white hover:bg-white/10 p-2 rounded-md transition-all">
              • {item.name}
            </Link>
          ))}
        </div>
      </div>

     
   {/* Categoría Productos */}
<div className="border-b border-white/20 pb-3">
  <div className="flex items-center gap-3 text-white font-semibold text-lg">
    <ShoppingBagIcon className="h-5 w-5 text-gray-300" />
    Productos
  </div>
  <div className="mt-2 space-y-2">
    {productosOptions.map((category) => (
      <div key={category.name} className="pl-4">
        <h4 className="text-gray-300 font-bold text-sm">{category.name}</h4>
        {category.subItems.map((subItem) => (
          <Link 
            key={subItem.name} 
            href={subItem.href} 
            className="flex items-center gap-2 pl-6 text-gray-200 hover:text-white hover:bg-white/10 p-2 rounded-md transition-all"
          >
            • {subItem.name}
          </Link>
        ))}
      </div>
    ))}
  </div>
</div>


      {/* Categoría Créditos */}
      <div>
        <div className="flex items-center gap-3 text-white font-semibold text-lg">
          <CreditCardIcon className="h-5 w-5 text-gray-300" />
          Créditos
        </div>
        <div className="mt-2 space-y-2">
          {creditosOptions.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-2 pl-6 text-gray-200 hover:text-white hover:bg-white/10 p-2 rounded-md transition-all">
              • {item.name}
            </Link>
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