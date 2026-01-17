import { Clock, MapPin, ArrowUpRight } from 'lucide-react';

export default function HorariosYMapa() {
  const dias = [
    { label: "Lunes — Viernes", horas: "09:00 - 19:00", status: "Abierto" },
    { label: "Sábados", horas: "09:00 - 17:00", status: "Horario Reducido" },
    { label: "Domingos", horas: "Cerrado", status: "Descanso", closed: true },
  ];

  return (
    <section className="bg-[#050505] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* COLUMNA IZQUIERDA: HORARIOS ARTÍSTICOS */}
          <div className="lg:col-span-5 relative">
            {/* Texto de fondo gigante (Marca de agua) */}
            <h2 className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.02] leading-none select-none">
              TIME
            </h2>
            
            <div className="relative z-10">
              <span className="text-amber-500 font-mono tracking-[0.3em] uppercase text-xs mb-2 block">
                Disponibilidad
              </span>
              <h3 className="text-white text-5xl font-serif italic mb-12">Horario de Visitas</h3>
              
              <div className="space-y-12">
                {dias.map((dia, idx) => (
                  <div key={idx} className="group flex items-start gap-6">
                    {/* El indicador visual de tiempo */}
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${dia.closed ? 'bg-red-500/50' : 'bg-amber-500'} shadow-[0_0_15px_rgba(245,158,11,0.5)]`} />
                      {idx !== dias.length - 1 && (
                        <div className="w-[1px] h-20 bg-gradient-to-b from-amber-500/50 to-transparent mt-2" />
                      )}
                    </div>
                    
                    <div className="flex-1 -mt-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className={`text-xl font-bold ${dia.closed ? 'text-white/30' : 'text-white'}`}>
                          {dia.label}
                        </h4>
                        <span className={`text-[10px] uppercase tracking-tighter px-2 py-0.5 border ${dia.closed ? 'border-red-500/30 text-red-500/50' : 'border-amber-500/30 text-amber-500'}`}>
                          {dia.status}
                        </span>
                      </div>
                      <p className={`text-3xl font-mono tracking-tighter ${dia.closed ? 'text-white/10' : 'text-white/60 group-hover:text-white transition-colors'}`}>
                        {dia.horas}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón flotante de contacto */}
              <div className="mt-16 inline-flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
                <span className="text-white font-bold tracking-widest text-sm border-b border-white/10 pb-1">SOLICITAR CITA PREVIA</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA CON OVERLAY */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/5">
              {/* Overlay de dirección profesional */}
              <div className="absolute top-6 left-6 z-20 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-xs shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-2 rounded-lg">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Dirección Principal</p>
                    <p className="text-white/50 text-xs leading-relaxed mt-1">
                      Calle de la Elegancia 42, Planta 1<br/>
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </div>

              {/* Tu iframe del mapa con el filtro que te gustó */}
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.51695274917!2d-4.5503262!3d36.66206979999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fbcb08a52253%3A0xb325bf6236a75e4d!2sLa%20Barber%C3%ADa%20de%20Alhaur%C3%ADn%20de%20la%20Torre!5e0!3m2!1ses!2ses!4v1768146073560!5m2!1ses!2ses" // Reemplazar con URL real
                className="w-full h-full border-0 grayscale invert-[0.9] contrast-[1.2] opacity-80"
                allowFullScreen
                loading="lazy"
              />
              
              {/* Gradiente sutil para integrar el mapa con el fondo negro */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}