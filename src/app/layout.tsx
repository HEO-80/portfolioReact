import Navbar from '@/components/sections/Navbar/Navbar'
import Footer from '@/components/sections/Footer'
import Sidebar from '@/components/sections/Sidebar/Sidebar'
import DropdownMenu from '@/components/sections/DropdownMenu/DropdownMenu'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="relative flex">
        <Sidebar />
        <div className="flex-1 min-h-screen">
          <Navbar />
          <main className="p-6">
            {/* Puedes colocar el Dropdown en el contenido si quieres */}
            <div className="flex justify-end mb-4">
              <DropdownMenu />
            </div>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
