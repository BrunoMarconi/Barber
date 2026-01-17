"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function HomePage() {
  // 1. Configuramos la URL con los parámetros de aspecto
  // background_color: 000000 (Negro para que combine con tu bg-black)
  // text_color: ffffff (Blanco)
  // primary_color: eab308 (El amarillo de tu span 'ESTILO')
  const baseUrl = "https://calendly.com/bmarconi2009/30min";
  const calendlyUrl = `${baseUrl}?background_color=000000&text_color=ffffff&primary_color=eab308&hide_landing_page_details=1&hide_gdpr_banner=1`;

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
      window.Calendly.initPopupWidget({ 
        url: calendlyUrl 
      });
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

      <section className="relative flex min-h-screen items-center justify-center bg-black text-white"
        style={{
          backgroundImage: "url('/image1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-5xl px-6 py-32 text-center mb-70">
          <h1 className="text-4xl md:text-4xl lg:text-7xl font-serif font-extrabold leading-tight"> 
            CONOCEMOS BIEN <br />
            <span className="text-white">TU</span>{' '}
            <span className="text-yellow-500">ESTILO</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Servicios de peluquería premium, adaptados a tu imagen. Reserva una cita y descubre nuestro enfoque personalizado.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button 
              onClick={openCalendly} 
              onMouseEnter={() => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = calendlyUrl;
                document.head.appendChild(link);
              }}
              className="cursor-pointer px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:scale-105 transform transition"
            >
              Reserva ahora
            </button>
            <button className="cursor-pointer px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition">
              Nuestros servicios
            </button>
          </div>
        </div>
      </section>
    </>
  );
}