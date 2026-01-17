import { Plus, Expand } from 'lucide-react';

export default function GaleriaFotos() {
  // Lista de tus fotos locales en /public
  const fotos = [
    { src: '/foto1.png', size: 'md:col-span-2 md:row-span-2' }, // Foto principal grande
    { src: '/foto2.png', size: 'md:col-span-1 md:row-span-1' },
    { src: '/foto3.png', size: 'md:col-span-1 md:row-span-1' },
    { src: '/foto4.png', size: 'md:col-span-1 md:row-span-2' }, // Foto vertical
    { src: '/foto5.png', size: 'md:col-span-1 md:row-span-1' },
    { src: '/foto6.png', size: 'md:col-span-2 md:row-span-1' }, // Foto panorámica
  ];

  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Estilo Editorial */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-white text-6xl font-serif font-bold leading-none italic">
              Galeria <span className="text-amber-500 text-7xl">.</span>
            </h2>
            <p className="text-white/40 mt-6 text-lg tracking-wide uppercase font-light">
              Capturando la esencia del estilo masculino tradicional y contemporáneo.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-white/10 mx-12 mb-4"></div>
          <div className="text-right">
            <span className="text-white/20 text-8xl font-black italic select-none">01</span>
          </div>
        </div>

        {/* Grid Asimétrico Profesional */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {fotos.map((foto, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden bg-[#111] rounded-sm ${foto.size}`}
            >
              {/* Overlay de color sutil al cargar */}
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <img
                src={foto.src}
                alt={`Trabajo de barbería ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Elementos UI al pasar el ratón (Hover) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[2px]">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="p-4 border border-white/20 rounded-full text-white">
                      <Expand size={24} strokeWidth={1} />
                   </div>
                </div>
              </div>

              {/* Número de foto discreto */}
              <span className="absolute bottom-4 left-4 z-20 text-[10px] text-white/30 font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                REF_00{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Footer de Galería */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-12 py-5 bg-transparent border border-white/10 overflow-hidden transition-all hover:border-amber-500">
            <span className="relative z-10 text-white font-bold tracking-[0.3em] text-xs uppercase group-hover:text-black transition-colors duration-300">
              Cargar más trabajos
            </span>
            <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}