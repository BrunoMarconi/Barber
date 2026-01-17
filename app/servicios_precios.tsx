import { Scissors, Star, Sparkles } from 'lucide-react';

export default function ServiciosPrecios() {
  const categorias = [
    {
      titulo: "Corte & Estilo",
      icon: <Scissors className="text-amber-500" size={20} />,
      items: [
        { nombre: "Corte de Pelo Senior", precio: "18€", desc: "Lavado y peinado incluido" },
        { nombre: "Corte de Pelo Junior", precio: "15€", desc: "Menores de 12 años" },
        { nombre: "Rapado Integral", precio: "12€", desc: "Un solo nivel a máquina" },
        { nombre: "Diseño de Hair-Tattoo", precio: "desde 5€", desc: "Dibujos técnicos con navaja" },
      ]
    },
    {
      titulo: "Barba & Cuidado",
      icon: <Star className="text-amber-500" size={20} />,
      items: [
        { nombre: "Arreglo de Barba", precio: "10€", desc: "Perfilado y rebajado" },
        { nombre: "Afeitado Clásico", precio: "15€", desc: "Toalla caliente y navaja" },
        { nombre: "Ritual Spa Barba", precio: "22€", desc: "Hidratación profunda y masaje" },
      ]
    },
    {
      titulo: "Tratamientos",
      icon: <Sparkles className="text-amber-500" size={20} />,
      items: [
        { nombre: "Exfoliación Facial", precio: "8€", desc: "Eliminación de impurezas" },
        { nombre: "Mascarilla Negra", precio: "6€", desc: "Limpieza de poros" },
        { nombre: "Tinte de Barba", precio: "12€", desc: "Cobertura de canas natural" },
      ]
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-500 font-mono tracking-widest uppercase text-sm">Menú de servicios</span>
            <h2 className="text-white text-5xl font-serif font-bold mt-2 italic">Calidad en cada detalle</h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed border-l border-white/10 pl-6">
            Combinamos técnicas tradicionales con tendencias modernas para un acabado impecable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
          {categorias.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                {cat.icon}
                <h3 className="text-white text-xl font-bold tracking-tight uppercase">{cat.titulo}</h3>
              </div>
              
              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-end gap-4 mb-1">
                      <span className="text-white/90 font-medium group-hover:text-amber-500 transition-colors duration-300">
                        {item.nombre}
                      </span>
                      {/* Línea punteada decorativa */}
                      <div className="flex-1 border-b border-white/10 border-dotted mb-1.5 opacity-30"></div>
                      <span className="text-amber-500 font-bold font-mono">{item.precio}</span>
                    </div>
                    {item.desc && (
                      <p className="text-white/30 text-xs italic tracking-wide">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action final */}
        <div className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg">¿No sabes qué elegir?</h4>
            <p className="text-white/50 text-sm">Pide cita y nuestro equipo te asesorará según tu estilo.</p>
          </div>
          <button className="px-8 py-4 bg-white text-black font-black rounded-full hover:bg-amber-500 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
            RESERVAR AHORA
          </button>
        </div>
      </div>
    </section>
  );
}