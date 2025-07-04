'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav aria-label="Global" className="backdrop-blur-sm bg-gray-50/[.3] dark:bg-gray-800/[.3] w-full mx-auto fixed z-50 top-0 start-0 flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 flex-wrap">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ZeeTech</span>
            <img
              alt="ZeeTech Mex S.A. de C.V."
              src="/logo-black.svg"
              className="h-20 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Menu principal</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" end className="text-sm/6 font-semibold text-gray-900 dark:text-white rounded-full hover:bg-red-800 p-2">
            Inicio
          </NavLink>
          <NavLink to="/nosotros" aria-label="Sección sobre nosotros de Zeetech" className="text-sm/6 font-semibold text-gray-900 dark:text-white rounded-full hover:bg-red-800 p-2">
            Sobre nosotros
          </NavLink>
          <NavLink to="/servicios" aria-label="Servicios de desarrollo de software de Zeetech" className="text-sm/6 font-semibold text-gray-900 dark:text-white rounded-full hover:bg-red-800 p-2">
            Servicios
          </NavLink>
          {/* <NavLink to="/blog" className="text-sm/6 font-semibold text-gray-900 dark:text-white rounded-full hover:bg-red-800 p-2">
            Blog
          </NavLink> */}
          <NavLink to="/contactanos" aria-label="Sección de contacto de Zeetech" className="text-sm/6 font-semibold text-gray-900 dark:text-white rounded-full hover:bg-red-800 p-2">
            Contáctanos
          </NavLink>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-[49]" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[51] w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ZeeTech</span>
              <img
                alt="Zeetech"
                src="/logo-black.svg"
                className="h-20 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <NavLink to="/" end className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-red-900" onClick={() => setMobileMenuOpen(false)}>
                  Inicio
                </NavLink>
                <NavLink to="/nosotros" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-red-900" onClick={() => setMobileMenuOpen(false)}>
                  Sobre nosotros
                </NavLink>
                <NavLink to="/servicios" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-red-900" onClick={() => setMobileMenuOpen(false)}>
                  Servicios
                </NavLink>
                {/* <NavLink to="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-red-900">
                  Blog
                </NavLink> */}
                <NavLink to="/contactanos" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-red-900" onClick={() => setMobileMenuOpen(false)}>
                  Contáctanos
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
