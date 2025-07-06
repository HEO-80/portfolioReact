'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:translate-x-0`}
      >
        <div className="p-6 font-bold text-xl">Menú</div>
        <nav className="flex flex-col gap-4 p-4 text-sm">
          <Link href="/" className="hover:text-blue-400">Inicio</Link>
          <Link href="/proyectos" className="hover:text-blue-400">Proyectos</Link>
          <Link href="/sobre-mi" className="hover:text-blue-400">Sobre mí</Link>
          <Link href="/contacto" className="hover:text-blue-400">Contacto</Link>
        </nav>
      </aside>
    </>
  )
}
