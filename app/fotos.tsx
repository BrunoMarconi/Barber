import { Plus, Expand, Camera } from 'lucide-react';

export default function GaleriaFotos() {
  const fotos = [
    { src: '/foto1.png', size: 'md:col-span-2 md:row-span-2', label: "Corte Signature" }, 
    { src: '/foto2.png', size: 'md:col-span-1 md:row-span-1', label: "Detalle Navaja" },
    { src: '/foto3.png', size: 'md:col-span-1 md:row-span-1', label: "Classic Style" },
    { src: '/foto4.png', size: 'md:col-span-1 md:row-span-2', label: "Modern Fade" }, 
    { src: '/foto5.png', size: 'md:col-span-1 md:row-span-1', label: "Ritual Barba" },
    { src: '/foto6.png', size: 'md:col-span-2 md:row-span-1', label: "Atmósfera" }, 
  ];

  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Estilo Editorial Boutique */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl relative">
            <div className="flex items-center gap-4 mb-6 animate-pulse">
              <Camera size={16} className="text-amber-500/60" />
              <span className="text-amber-500 font-mono tracking-[0.5em] uppercase text-[10px]">Exhibición Visual</span>
            </div>
            <h2 className="text-white text-6xl md:text-8xl font-serif font-light leading-none">
              Galería <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-tr from-amber-500 to-amber-200">.</span>
            </h2>
            <p className="text-white/30 mt-10 text-xs md:text-sm tracking-[0.2em] uppercase font-light leading-relaxed max-w-lg border-l border-white/10 pl-8">
              Documentamos el arte de la transformación masculina. Cada imagen es un testimonio de nuestra obsesión por la perfección técnica.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-2">
            <span className="text-white/10 text-9xl font-serif italic select-none leading-none">01</span>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-amber-500/50"></div>
          </div>
        </div>

        {/* Grid Asimétrico Estilo Galería Moderna */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          {fotos.map((foto, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden bg-[#0a0a0a] ring-1 ring-white/5 transition-all duration-700 hover:ring-amber-500/20 ${foto.size}`}
            >
              {/* Overlay de Carga y Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-60 z-10" />
              
              <img
                src={foto.src}
                alt={`Portfolio Item ${index + 1}`}
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Controles UI Premium (Hover) */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-[3px]">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Plus size={28} strokeWidth={1} className="text-amber-200" />
                </div>
                <span className="mt-4 text-[10px] text-white tracking-[0.4em] uppercase font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  Ver Detalles
                </span>
              </div>

              {/* Etiqueta Editorial Inferior */}
              <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
                <p className="text-[9px] text-amber-500 font-mono tracking-[0.3em] uppercase mb-1 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {foto.label}
                </p>
                <span className="block h-[1px] w-0 bg-amber-500/40 group-hover:w-full transition-all duration-700"></span>
                <p className="mt-1 text-[8px] text-white/30 font-mono tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  REF_SERIES_0{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de Galería - Botón Minimalista */}
        <div className="mt-24 flex flex-col items-center gap-8">
          <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
          <button className="group relative px-16 py-6 overflow-hidden transition-all border border-white/5 bg-[#050505] hover:border-amber-500/50">
            <span className="relative z-10 text-white text-[10px] font-bold tracking-[0.5em] uppercase transition-colors duration-500 group-hover:text-white">
              Explorar Portfolio Completo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
}