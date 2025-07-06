interface CardProps {
  title: string
  description: string
  image?: string
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-4">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded" />}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </div>
  )
}
