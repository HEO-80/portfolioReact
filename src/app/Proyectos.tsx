import Card from '@/components/UI/Card/Card'

export default function Proyectos() {
  const proyectos = [
    {
      title: 'Mi Portfolio',
      description: 'Hecho con Next.js y Tailwind CSS.',
      image: '/images/portfolio.jpg',
    },
    {
      title: 'Tienda online',
      description: 'React, Redux y Stripe integrados.',
      image: '/images/ecommerce.jpg',
    },
  ]

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {proyectos.map((p, i) => (
          <Card key={i} title={p.title} description={p.description} image={p.image} />
        ))}
      </div>
    </main>
  )
}
