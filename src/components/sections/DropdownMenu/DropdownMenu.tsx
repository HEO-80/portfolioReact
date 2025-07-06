'use client'

import { useState } from 'react'

export default function DropdownMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Opciones
      </button>

      {open && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Perfil</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Ajustes</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cerrar sesión</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}
