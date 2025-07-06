'use client'

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-10"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo + redes */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🚀 MiLogo</h2>
          <p className="text-sm mb-4">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces legales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/politica-privacidad">Política de privacidad</Link></li>
            <li><Link href="/aviso-legal">Aviso legal</Link></li>
            <li><Link href="/cookies">Política de cookies</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto / Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="text-sm">info@miportfolio.com</p>
          <p className="text-sm">Calle Falsa 123, Zaragoza</p>
          <p className="text-sm mb-4">+34 600 123 456</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Tu email"
              className="px-3 py-2 text-sm rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-sm py-2 rounded transition">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </motion.footer>
  );
}
