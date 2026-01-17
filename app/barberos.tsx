import { Instagram, Scissors, Award } from 'lucide-react';

export default function Equipo() {
  const especialistas = [
    {
      nombre: "Marco Rossi",
      cargo: "Master Barber & Fundador",
      especialidad: "Corte Clásico y Afeitado a Navaja",
      frase: "La barbería es el arte de la precisión y el respeto por la tradición.",
      foto: "/barbero1.webp", // Puedes usar tus fotos locales /foto_equipo1.png
      ig: "@marco_barber"
    },
    {
      nombre: "Daniel Vega",
      cargo: "Senior Stylist",
      especialidad: "Degradados Modernos y Hair-Tattoo",
      frase: "Innovación constante para estilos que rompen moldes.",
      foto: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1760&auto=format&fit=crop",
      ig: "@dani_cuts"
    },
    {
      nombre: "Adrián Sanz",
      cargo: "Especialista en Barba",
      especialidad: "Tratamientos Capilares y Barba",
      frase: "Cada barba tiene su propia personalidad, yo solo la resalto.",
      foto: "https://images.unsplash.com/photo-1520338661039-6000008075b8?q=80&w=1770&auto=format&fit=crop",
      ig: "@adrian_grooming"
    }
  ];

  return (
    <section className="bg-[#050505] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con línea de diseño asimétrica */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <span className="text-amber-500 font-mono tracking-[0.3em] uppercase text-xs mb-3 block">Expertos en Estilo</span>
            <h2 className="text-white text-5xl md:text-6xl font-serif font-bold italic leading-tight">
              MAESTROS DE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">LA NAVAJA</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed border-l-2 border-amber-500 pl-6 mb-2">
            Un equipo de profesionales apasionados dedicados a elevar el estándar del cuidado masculino.
          </p>
        </div>

        {/* Grid de Especialistas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {especialistas.map((pro, idx) => (
            <div key={idx} className="group relative">
              {/* Contenedor de Imagen */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#111]">
                <img 
                  src={pro.foto} 
                  alt={pro.nombre}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                
                {/* Capa de información (Reveal al hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Scissors size={14} /> {pro.cargo}
                  </p>
                  <h3 className="text-white text-3xl font-bold mb-4">{pro.nombre}</h3>
                  
                  <div className="space-y-3 hidden group-hover:block animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-white/70 text-sm italic line-clamp-2">
                      "{pro.frase}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 text-white/40">
                       <div className="flex items-center gap-1 text-xs uppercase tracking-tighter">
                          <Award size={14} className="text-amber-500" /> {pro.especialidad}
                       </div>
                    </div>
                  </div>
                </div>

                {/* Badge de Instagram */}
                <a 
                  href={`https://instagram.com/${pro.ig}`}
                  className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-amber-500 hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pie de sección */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            <span className="text-white/20 text-sm tracking-[0.5em] uppercase font-light">Join our family</span>
            <div className="h-[1px] w-full bg-white/10 mt-2 group-hover:bg-amber-500 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
}