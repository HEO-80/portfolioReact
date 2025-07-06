interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const base = 'px-4 py-2 rounded font-semibold transition text-white'

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700',
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
