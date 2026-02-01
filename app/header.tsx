"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto 1: Detectar el scroll para que el header cambie de transparencia
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto 2: Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[60] transition-all duration-500 px-6 md:px-12 py-5 ${
          scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          
          {/* Logo con Serif Clásica */}
          <div className="flex flex-col leading-none">
            <span className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-1">The Art of</span>
            <h1 className="text-xl md:text-2xl font-serif italic tracking-tighter text-white">
              Haro di Barber
            </h1>
          </div>

          {/* Navegación Desktop: Minimalista */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {['Servicios', 'Filosofía', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-amber-500 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón CTA con borde sutil */}
          <div className="flex items-center gap-8">
            <a 
              href="https://booksy.com/..." 
              className="hidden md:block border border-white/20 hover:border-amber-500 px-6 py-2 text-[10px] uppercase tracking-[0.2em] text-white transition-all"
            >
              Cita Online
            </a>

            {/* Hamburguesa refinada */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group flex flex-col gap-1.5 cursor-pointer z-[70]"
            >
              <span className={`h-[1px] w-8 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-[1px] w-8 bg-white transition-all ${isOpen ? 'opacity-0' : 'group-hover:w-4'}`} />
              <span className={`h-[1px] w-8 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Menú Fullscreen con AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[55] flex flex-col justify-center px-10 md:px-24"
          >
            <nav className="flex flex-col gap-6">
              {['Inicio', 'Precios', 'Horarios', 'Ubicación'].map((text, i) => (
                <motion.a
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-7xl font-serif italic text-white hover:text-amber-500 transition-colors inline-block"
                >
                  {text}
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 left-10 md:left-24">
              <p className="text-gray-600 uppercase tracking-widest text-xs">Málaga, ES</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}