'use client'

import { useState } from 'react'

interface AccordionProps {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b py-2">
      <button className="flex justify-between w-full" onClick={() => setOpen(!open)}>
        <span className="font-medium">{question}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-sm text-gray-600">{answer}</p>}
    </div>
  )
}
