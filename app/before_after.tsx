"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Actualizar el ancho del contenedor para el recorte de la imagen
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchend', stopDragging);
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        
        {/* COLUMNA IZQUIERDA: SLIDER */}
        <div className="w-full lg:w-3/5">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] md:aspect-[16/9] cursor-ew-resize select-none overflow-hidden rounded-2xl shadow-2xl bg-neutral-800 group"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Imagen Después (Base) */}
            <Image 
              src="/despues.jpg" 
              alt="Después" 
              fill 
              className="object-cover"
              priority
            />

            {/* Imagen Antes (Capa recortada) */}
            <div
              className="absolute inset-0 overflow-hidden border-r-2 border-white/70 z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                style={{ width: containerWidth, height: '100%', position: 'relative' }}
              >
                <Image 
                  src="/antes.jpg" 
                  alt="Antes" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Manejador Central */}
            <div
              className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-neutral-900 border-4 border-white/20">
                <ChevronLeft size={20} />
                <ChevronRight size={20} />
              </div>
            </div>

            {/* Etiquetas */}
            <div className="absolute top-4 left-4 z-30 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
              Antes
            </div>
            <div className="absolute top-4 right-4 z-30 bg-white/90 text-black text-[10px] font-bold px-3 py-1.5 rounded-full uppercase shadow-lg">
              Después
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: TEXTO */}
        <div className="w-full lg:w-2/5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Estudio de Caso</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-[1.1]">
              Tu visión, <br /> hecha realidad.
            </h3>
          </div>
          
          <p className="text-lg text-neutral-600 leading-relaxed">
            Observa el impacto de nuestro trabajo. Al deslizar el marcador, puedes apreciar cómo transformamos espacios aburridos en entornos llenos de vida y estilo. 
          </p>

          <div className="pt-4 border-t border-neutral-200">
            <button className="bg-neutral-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-neutral-700 transition-colors shadow-lg shadow-neutral-200">
              Ver galería completa
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}