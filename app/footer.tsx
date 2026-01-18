"use client";

import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Elemento de iluminación sutil para separar del contenido anterior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Columna 1: Brand & Filosofía */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-white text-3xl font-serif tracking-tighter mb-2">
                LA BARBERÍA <span className="text-amber-500 italic">.</span>
              </h2>
              <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-light">
                Premium Grooming Club
              </p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light italic">
              "Redefiniendo el estándar del cuidado masculino a través de la maestría técnica y el respeto por la herencia clásica."
            </p>
            {/* Redes Sociales Iconos Minimal */}
            <div className="flex gap-6">
              {[
                { icon: <Instagram size={20} />, link: "#" },
                { icon: <Facebook size={20} />, link: "#" },
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Youtube size={20} />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="text-white/20 hover:text-amber-500 transition-all duration-500 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Explorar</h4>
            <ul className="space-y-4">
              {['Servicios', 'El Equipo', 'Galería', 'Reservas'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/30 hover:text-white text-xs tracking-widest transition-colors font-light uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/30 group cursor-default">
                <MapPin size={14} className="group-hover:text-amber-500 transition-colors" />
                <span className="text-xs font-light tracking-wide">Calle de la Elegancia 42, Madrid</span>
              </li>
              <li className="flex items-center gap-3 text-white/30 group cursor-default">
                <Phone size={14} className="group-hover:text-amber-500 transition-colors" />
                <span className="text-xs font-light tracking-wide">+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-white/30 group cursor-default">
                <Mail size={14} className="group-hover:text-amber-500 transition-colors" />
                <span className="text-xs font-light tracking-wide">info@labarberia.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea Divisoria y Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/10 text-[9px] uppercase tracking-[0.4em] font-light text-center md:text-left">
            © 2024 La Barbería — All rights reserved. Crafted for the modern gentleman.
          </p>
          
          {/* Botón Volver Arriba */}
          <button 
            onClick={scrolltoTop}
            className="group flex items-center gap-3 text-white/20 hover:text-amber-500 transition-all duration-500"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Back to top</span>
            <div className="p-2 border border-white/10 rounded-full group-hover:border-amber-500 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}