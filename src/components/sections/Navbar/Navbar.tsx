import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight">
          <Link href="/">🚀 MiLogo</Link>
        </div>

        {/* MENÚ */}
        <ul className="flex space-x-6 text-sm md:text-base">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
          </li>
          <li>
            <Link href="/proyectos" className="hover:text-blue-400 transition-colors">Proyectos</Link>
          </li>
          <li>
            <Link href="/sobre-mi" className="hover:text-blue-400 transition-colors">Sobre mí</Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
