import { Clock, MapPin, ArrowUpRight } from 'lucide-react';

export default function HorariosYMapa() {
  const dias = [
    { label: "Lunes — Viernes", horas: "09:00 - 19:00", status: "Abierto" },
    { label: "Sábados", horas: "09:00 - 17:00", status: "Horario Reducido" },
    { label: "Domingos", horas: "Cerrado", status: "Descanso", closed: true },
  ];

  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* COLUMNA IZQUIERDA: HORARIOS */}
          <div className="lg:col-span-5 relative">
            {/* Marca de agua elegante detrás del texto */}
            <h2 className="absolute -top-16 -left-12 text-[14rem] font-serif italic text-white/[0.03] leading-none select-none pointer-events-none">
              Time
            </h2>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-amber-500/50"></div>
                <span className="text-amber-500 font-mono tracking-[0.4em] uppercase text-[10px]">
                  Disponibilidad
                </span>
              </div>
              
              <h3 className="text-white text-6xl font-serif leading-tight mb-16">
                Horario de <br />
                <span className="italic font-light">Visitas</span>
              </h3>
              
              <div className="space-y-10">
                {dias.map((dia, idx) => (
                  <div key={idx} className="group relative flex items-end justify-between border-b border-white/10 pb-4 transition-all hover:border-amber-500/40">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className={`text-sm uppercase tracking-widest ${dia.closed ? 'text-white/30' : 'text-white/90'}`}>
                          {dia.label}
                        </h4>
                        {!dia.closed && (
                           <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                        )}
                      </div>
                      <p className={`text-4xl font-light font-mono tracking-tighter ${dia.closed ? 'text-white/10' : 'text-white group-hover:text-amber-200 transition-colors'}`}>
                        {dia.horas}
                      </p>
                    </div>
                    
                    <div className="text-right">
                       <span className={`text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${dia.closed ? 'border-red-900/50 text-red-500/40' : 'border-amber-500/20 text-amber-500/60'}`}>
                          {dia.status}
                        </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón de Cita - Mantiene la importancia pero con clase */}
              <button className="mt-16 group flex items-center gap-6 cursor-pointer bg-transparent border-none outline-none">
                <div className="relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-amber-500">
                  <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <ArrowUpRight size={24} className="relative z-10 text-white group-hover:text-black transition-colors duration-500" />
                </div>
                <div className="text-left">
                  <span className="block text-white font-bold tracking-[0.2em] text-xs uppercase">Solicitar cita previa</span>
                  <span className="block text-white/30 text-[10px] uppercase tracking-widest mt-1 group-hover:text-amber-500/50 transition-colors">Reserva tu ritual</span>
                </div>
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[650px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              
              {/* Card de Dirección Flotante (Glassmorphism) */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/60 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-amber-500 flex items-center justify-center rounded-lg shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-1">Ubicación Exclusiva</h5>
                    <p className="text-white text-lg font-serif">Calle de la Elegancia 42, 28001 Madrid</p>
                    <p className="text-white/40 text-xs mt-1 italic leading-relaxed">Parking privado para clientes disponible</p>
                  </div>
                  <div className="hidden sm:block">
                     <button className="text-[10px] text-white border border-white/20 px-4 py-2 rounded uppercase hover:bg-white hover:text-black transition-all">
                       Cómo llegar
                     </button>
                  </div>
                </div>
              </div>

              {/* El Mapa con Estilo Noir */}
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18..." // Asegúrate de usar la URL de 'Embed' real de Google Maps
                className="w-full h-full border-0 grayscale invert-[0.92] contrast-[1.1] opacity-70 transition-opacity duration-700 group-hover:opacity-90"
                allowFullScreen
                loading="lazy"
              />
              
              {/* Viñeta para suavizar bordes */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}