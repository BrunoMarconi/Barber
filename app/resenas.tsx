import { Star, Quote, ExternalLink } from 'lucide-react';

export default function Resenas() {
  const testimonios = [
    {
      nombre: "Carlos Mendoza",
      rol: "Cliente desde 2022",
      comentario: "No es solo un corte de pelo, es el ritual. La atención al detalle con la toalla caliente y el perfilado de barba es de otro nivel. El mejor ambiente de la ciudad.",
      estrellas: 5,
      foto: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      nombre: "Alejandro Sanz",
      rol: "Empresario",
      comentario: "Buscaba una barbería que entendiera un estilo clásico pero moderno. El equipo es extremadamente profesional y puntual. Una experiencia de lujo absoluto.",
      estrellas: 5,
      foto: "https://i.pravatar.cc/150?u=alex"
    },
    {
      nombre: "Javier Ortiz",
      rol: "Cliente Habitual",
      comentario: "La primera vez que vine fue por recomendación y ahora no cambio de sitio. Los degradados son perfectos y los productos son de una calidad excepcional.",
      estrellas: 5,
      foto: "https://i.pravatar.cc/150?u=javier"
    }
  ];

  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <Quote className="absolute -top-12 -right-12 size-80 text-white/[0.02] -rotate-12 select-none pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado Estilo Boutique */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-amber-500/40"></div>
              <span className="text-amber-500 font-mono tracking-[0.4em] uppercase text-[10px]">Testimonios Reales</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-serif leading-tight">
              Lo que dicen <br />
              <span className="italic font-light text-white/80 text-4xl md:text-6xl">de nosotros</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex text-amber-500 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" />)}
            </div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase italic">
              Excelencia puntuada con 4.9/5 en Google
            </p>
          </div>
        </div>

        {/* Grid de Reseñas Estilo Card Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonios.map((resena, idx) => (
            <div 
              key={idx} 
              className="relative bg-gradient-to-b from-white/[0.03] to-transparent p-10 rounded-sm border border-white/5 transition-all duration-700 group hover:border-amber-500/20"
            >
              {/* Comilla sutil en cada card */}
              <Quote className="text-amber-500/10 absolute top-8 right-8 size-12 group-hover:text-amber-500/20 transition-colors" />

              <div className="flex text-amber-500/30 mb-8 group-hover:text-amber-500/60 transition-colors">
                {[...Array(resena.estrellas)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>

              <p className="text-white/70 text-lg leading-relaxed font-light mb-12 min-h-[120px]">
                "{resena.comentario}"
              </p>

              {/* Perfil del Cliente Refinado */}
              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="relative shrink-0">
                  <img 
                    src={resena.foto} 
                    alt={resena.nombre} 
                    className="w-14 h-14 rounded-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-amber-500/40 transition-all duration-700" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-1 group-hover:text-amber-200 transition-colors">
                    {resena.nombre}
                  </h4>
                  <p className="text-white/20 text-[9px] uppercase tracking-widest italic">{resena.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final con Efecto Hover */}
        <div className="mt-24 text-center">
          <a 
            href="#" 
            className="group inline-flex items-center gap-4 text-white/40 hover:text-white transition-all duration-500"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase border-b border-white/10 pb-2 group-hover:border-amber-500 transition-all">
              Leer reseñas verificadas en Google
            </span>
            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}