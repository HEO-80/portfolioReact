'use client'

import { useState } from 'react'
import InputField from '@/components/UI/InputField/InputField'
import Button from '@/components/UI/Button/Button'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulario enviado')
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <InputField label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Mensaje" name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <Button>Enviar</Button>
      </form>
    </main>
  )
}
