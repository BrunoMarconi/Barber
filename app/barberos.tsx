import { Instagram, Scissors, Award, Sparkles } from 'lucide-react';

export default function Equipo() {
  const especialistas = [
    {
      nombre: "Marco Rossi",
      cargo: "Master Barber & Fundador",
      especialidad: "Corte Clásico y Navaja",
      frase: "La barbería es el arte de la precisión y el respeto por la tradición.",
      foto: "/barbero1.webp",
      ig: "@marco_barber"
    },
    {
      nombre: "Daniel Vega",
      cargo: "Senior Stylist",
      especialidad: "Degradados Modernos",
      frase: "Innovación constante para estilos que rompen moldes.",
      foto: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1760&auto=format&fit=crop",
      ig: "@dani_cuts"
    },
    {
      nombre: "Adrián Sanz",
      cargo: "Especialista en Barba",
      especialidad: "Tratamientos Capilares",
      frase: "Cada barba tiene su propia personalidad, yo solo la resalto.",
      foto: "https://images.unsplash.com/photo-1520338661039-6000008075b8?q=80&w=1770&auto=format&fit=crop",
      ig: "@adrian_grooming"
    }
  ];

  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-amber-500/50" size={14} />
              <span className="text-amber-500 font-mono tracking-[0.4em] uppercase text-[10px]">
                Artesanos del Acero
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-serif font-light leading-[1.1]">
              MAESTROS DE <br /> 
              <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
                LA NAVAJA
              </span>
            </h2>
          </div>
          <div className="lg:max-w-xs border-l border-amber-500/30 pl-8 py-2">
            <p className="text-white/40 text-xs leading-relaxed uppercase tracking-widest italic">
              Un equipo de élite dedicado a elevar el estándar del cuidado masculino a través de la maestría técnica.
            </p>
          </div>
        </div>

        {/* Grid de Especialistas con Estilo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {especialistas.map((pro, idx) => (
            <div key={idx} className="group relative flex flex-col">
              {/* Contenedor de Imagen con Frame de Lujo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] ring-1 ring-white/10 group-hover:ring-amber-500/30 transition-all duration-700">
                <img 
                  src={pro.foto} 
                  alt={pro.nombre}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Overlay Gradiente sofisticado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* Info Flotante (Static + Hover) */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-[1px] w-6 bg-amber-500/60 transition-all group-hover:w-12"></span>
                    <p className="text-amber-500 font-mono text-[9px] uppercase tracking-[0.3em]">
                      {pro.cargo}
                    </p>
                  </div>
                  <h3 className="text-white text-2xl font-serif tracking-wide mb-4 transition-colors group-hover:text-amber-200">
                    {pro.nombre}
                  </h3>
                  
                  {/* Detalles Extras en Hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                    <p className="text-white/60 text-xs italic font-light leading-relaxed mb-6">
                      "{pro.frase}"
                    </p>
                    <div className="flex items-center gap-2 text-white/30 text-[9px] uppercase tracking-widest border-t border-white/10 pt-4">
                       <Award size={12} className="text-amber-500/50" /> 
                       {pro.especialidad}
                    </div>
                  </div>
                </div>

                {/* Instagram Icon Minimalista */}
                <a 
                  href={`https://instagram.com/${pro.ig}`}
                  className="absolute top-6 right-6 p-3 bg-black/40 backdrop-blur-md rounded-sm border border-white/10 text-white hover:bg-amber-500 hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de Sección Minimalista */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent mb-8"></div>
          <p className="text-white/20 text-[10px] tracking-[0.6em] uppercase font-light hover:text-amber-500/50 transition-colors cursor-default">
            Join the grooming elite
          </p>
        </div>
      </div>
    </section>
  );
}