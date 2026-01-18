import { Scissors, Star, Sparkles, ChevronRight } from 'lucide-react';

export default function ServiciosPrecios() {
  const categorias = [
    {
      titulo: "Corte & Estilo",
      subtitulo: "Maestría en tijera y máquina",
      icon: <Scissors className="text-amber-500/80" size={18} />,
      items: [
        { nombre: "Corte de Pelo Senior", precio: "18€", desc: "Lavado ritual y peinado con producto premium" },
        { nombre: "Corte de Pelo Junior", precio: "15€", desc: "Estilo para menores de 12 años" },
        { nombre: "Rapado Integral", precio: "12€", desc: "Degradado uniforme a un solo nivel" },
        { nombre: "Diseño de Hair-Tattoo", precio: "desde 5€", desc: "Arte técnico trazado a navaja" },
      ]
    },
    {
      titulo: "Barba & Cuidado",
      subtitulo: "El arte del afeitado clásico",
      icon: <Star className="text-amber-500/80" size={18} />,
      items: [
        { nombre: "Arreglo de Barba", precio: "10€", desc: "Esculpido, perfilado y rebajado" },
        { nombre: "Afeitado Clásico", precio: "15€", desc: "Protocolo de toalla caliente y navaja" },
        { nombre: "Ritual Spa Barba", precio: "22€", desc: "Tratamiento de vapor, hidratación y masaje" },
      ]
    },
    {
      titulo: "Tratamientos",
      subtitulo: "Cuidado facial especializado",
      icon: <Sparkles className="text-amber-500/80" size={18} />,
      items: [
        { nombre: "Exfoliación Facial", precio: "8€", desc: "Renovación celular e hidratación" },
        { nombre: "Mascarilla Negra", precio: "6€", desc: "Extracción profunda de impurezas" },
        { nombre: "Tinte de Barba", precio: "12€", desc: "Integración cromática natural" },
      ]
    }
  ];

  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Luces de fondo ambientales para dar profundidad */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[150px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[130px] -z-10 opacity-30" />
      
      <div className="max-w-6xl mx-auto">
        {/* Cabecera Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-10 bg-amber-500/40"></span>
              <span className="text-amber-500 font-mono tracking-[0.4em] uppercase text-[10px]">
                Menú de servicios
              </span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-serif leading-tight">
              Calidad en cada <br />
              <span className="italic font-light text-white/90">detalle</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-white/40 max-w-[280px] text-xs leading-relaxed uppercase tracking-widest italic md:ml-auto">
              Combinamos la herencia de la barbería clásica con la vanguardia del estilo moderno.
            </p>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-20">
          {categorias.map((cat, idx) => (
            <div key={idx} className={`space-y-12 ${idx === 2 ? 'lg:col-span-2 lg:max-w-2xl' : ''}`}>
              <div className="relative">
                <div className="flex items-center gap-4 mb-2">
                  <span className="p-2 rounded-full bg-white/5 border border-white/10 text-amber-500">
                    {cat.icon}
                  </span>
                  <h3 className="text-white text-2xl font-serif tracking-wide">{cat.titulo}</h3>
                </div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] ml-14 italic">{cat.subtitulo}</p>
              </div>
              
              <div className="space-y-10 ml-2 md:ml-14">
                {cat.items.map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h4 className="text-white/90 text-lg font-light tracking-wide group-hover:text-amber-400 transition-colors duration-500 lowercase first-letter:uppercase">
                        {item.nombre}
                      </h4>
                      {/* Línea minimalista que crece al hacer hover */}
                      <div className="flex-1 h-[1px] bg-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-amber-500/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      </div>
                      <span className="text-amber-500 font-mono font-medium tracking-tighter text-xl transition-transform group-hover:scale-110">
                        {item.precio}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-white/20 text-[11px] uppercase tracking-widest font-light transition-colors group-hover:text-white/40">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banner Final de Cita Estilo "Atelier" */}
        <div className="mt-32 relative py-12 border-t border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 bg-white/[0.01] -z-10"></div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-serif text-3xl mb-2">¿Buscas un asesoramiento a medida?</h4>
            <p className="text-white/30 text-xs uppercase tracking-[0.2em]">Permite que nuestros maestros barberos definan tu mejor versión.</p>
          </div>
          <button className="group relative px-12 py-5 bg-white overflow-hidden rounded-sm transition-all hover:bg-amber-500">
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-black font-bold tracking-widest text-[10px] uppercase">Agendar Experiencia</span>
              <ChevronRight size={14} className="text-black group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}