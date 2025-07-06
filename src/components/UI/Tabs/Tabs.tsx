'use client'

import { useState } from 'react'

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <div className="flex space-x-4 border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`py-2 px-4 ${i === activeIndex ? 'border-b-2 border-blue-600 font-bold' : 'text-gray-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex].content}</div>
    </div>
  )
}
