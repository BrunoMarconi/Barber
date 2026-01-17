import { Star, Quote } from 'lucide-react';

export default function Resenas() {
  const testimonios = [
    {
      nombre: "Carlos Mendoza",
      rol: "Cliente desde 2022",
      comentario: "No es solo un corte de pelo, es el ritual. La atención al detalle con la toalla caliente y el perfilado de barba es de otro nivel. El mejor ambiente de la ciudad sin duda.",
      estrellas: 5,
      foto: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      nombre: "Alejandro Sanz",
      rol: "Empresario",
      comentario: "Buscaba una barbería que entendiera un estilo clásico pero moderno. El equipo es extremadamente profesional y puntual, algo que valoro muchísimo. Recomendado 100%.",
      estrellas: 5,
      foto: "https://i.pravatar.cc/150?u=alex"
    },
    {
      nombre: "Javier Ortiz",
      rol: "Cliente Habitual",
      comentario: "La primera vez que vine fue por recomendación y ahora no cambio de sitio. Los degradados son perfectos y los productos que usan huelen increíble. Un 10 en todo.",
      estrellas: 5,
      foto: "https://i.pravatar.cc/150?u=javier"
    }
  ];

  return (
    <section className="bg-[#050505] py-24 px-6 relative overflow-hidden">
      {/* Comilla gigante decorativa de fondo */}
      <Quote className="absolute -top-10 -right-10 size-64 text-white/[0.03] -rotate-12" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-serif font-bold italic mb-4">
            Lo que dicen de <span className="text-amber-500">nosotros</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-white/40 text-sm tracking-widest uppercase">4.9/5 basado en 120+ reseñas</span>
          </div>
        </div>

        {/* Grid de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((resena, idx) => (
            <div 
              key={idx} 
              className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 group"
            >
              {/* Estrellas pequeñas */}
              <div className="flex text-amber-500/50 mb-6 group-hover:text-amber-500 transition-colors">
                {[...Array(resena.estrellas)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Texto de la reseña */}
              <p className="text-white/80 text-lg leading-relaxed italic mb-8">
                "{resena.comentario}"
              </p>

              {/* Info del Cliente */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={resena.foto} 
                    alt={resena.nombre} 
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full border border-amber-500/20 group-hover:border-amber-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{resena.nombre}</h4>
                  <p className="text-white/30 text-xs">{resena.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace a Google Maps / Reseñas reales */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="text-white/50 hover:text-white text-xs font-bold tracking-[0.2em] uppercase border-b border-white/10 pb-2 transition-all"
          >
            Leer todas las opiniones en Google
          </a>
        </div>
      </div>
    </section>
  );
}