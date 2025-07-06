interface InputFieldProps {
  label: string
  name: string
  error?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({ label, name, error, type = 'text', value, onChange }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}
