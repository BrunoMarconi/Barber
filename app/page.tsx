"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function HomePage() {
  // Mantenemos tu lógica de URL intacta, solo refinamos el color a un dorado más "luxe" (#C5A059)
  const baseUrl = "https://calendly.com/bmarconi2009/30min";
  const calendlyUrl = `${baseUrl}?background_color=000000&text_color=ffffff&primary_color=c5a059&hide_landing_page_details=1&hide_gdpr_banner=1`;

  useEffect(() => {
    if (!document.getElementById("calendly-style")) {
      const l = document.createElement("link");
      l.id = "calendly-style";
      l.rel = "stylesheet";
      l.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l);
    }
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://assets.calendly.com" />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive" 
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        {/* Fondo con zoom suave para dar dinamismo de alta calidad */}
        <div 
          className="absolute inset-0 z-0 scale-105 animate-[ken-burns_20s_ease_infinite]"
          style={{
            backgroundImage: "url('/image1.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay graduado: más oscuro abajo para que los botones resalten */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        <div className="relative z-20 w-full max-w-6xl px-6 text-center">
          
          {/* Label de exclusividad */}
          <p className="mb-4 text-xs font-light tracking-[0.5em] text-[#C5A059] uppercase">
            The Ultimate Grooming Experience
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight">
            CONOCEMOS BIEN <br />
            <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-tr from-[#C5A059] via-[#F9E498] to-[#C5A059]">
              TU ESTILO
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-sm md:text-lg text-white/60 font-light leading-relaxed tracking-wide">
            Maestría artesanal y atención al detalle. Reserva tu espacio en la agenda más exclusiva de la ciudad.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Botón Principal: Mantiene toda tu lógica de Calendly */}
            <button 
              onClick={openCalendly} 
              onMouseEnter={() => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = calendlyUrl;
                document.head.appendChild(link);
              }}
              className="group relative cursor-pointer overflow-hidden border border-[#C5A059] bg-[#C5A059] px-12 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white"
            >
              <span className="relative z-10">Reserva ahora</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-black transition-transform duration-300 group-hover:translate-y-0" />
            </button>

            {/* Botón Secundario */}
            <button className="cursor-pointer px-10 py-4 text-xs font-bold uppercase tracking-widest border border-white/20 hover:border-white transition-colors duration-300">
              Nuestros servicios
            </button>
          </div>
        </div>

        {/* Detalles decorativos en las esquinas para el look de "Lujo" */}
        <div className="absolute bottom-10 left-10 hidden md:block border-l border-[#C5A059]/30 pl-4">
          <p className="text-[10px] tracking-widest text-white/40 uppercase">Premium Barbershop</p>
          <p className="text-[10px] tracking-widest text-white/20 uppercase">Sevilla, ES</p>
        </div>
      </section>

      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}