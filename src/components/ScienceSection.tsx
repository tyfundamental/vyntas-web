import React, { useState } from 'react';
import { PATHWAYS } from '../data';
import { Pathway } from '../types';
import { Target, BarChart2, BookOpen, Quote } from 'lucide-react';

export default function ScienceSection() {
  const [selectedPathway, setSelectedPathway] = useState<Pathway>(PATHWAYS[0]);

  return (
    <section 
      id="ciencia" 
      className="py-24 bg-white border-b border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <span className="text-xs tracking-[0.3em] font-mono text-zinc-500 uppercase block mb-2">SECCIÓN 01 / FUNDAMENTOS</span>
            <h2 className="text-4xl font-light tracking-wide text-zinc-900 uppercase font-sans">
              La Ciencia de la Longevidad
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-600 font-normal max-w-lg leading-relaxed">
            Investigaciones biomédicas recientes demuestran que el ritmo del envejecimiento no es inmutable, sino una variable regulable a través de interruptores de transcripción metabólica específicos descritos en la bibliografía indexada.
          </p>
        </div>

        {/* Master Details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Pathway Selector Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs tracking-[0.2em] font-mono text-zinc-500 font-bold block mb-2">VÍAS MOLECULARES REGULABLES</span>
            {PATHWAYS.map((pathway) => (
              <button
                key={pathway.id}
                id={`pathway-btn-${pathway.id}`}
                onClick={() => setSelectedPathway(pathway)}
                className={`w-full text-left p-6 border transition-all duration-300 outline-none flex items-center justify-between rounded-none text-sm ${
                  selectedPathway.id === pathway.id
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-md'
                    : 'border-zinc-200 bg-zinc-50/50 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <div>
                  <h4 className="text-sm tracking-wider uppercase font-semibold mb-1">{pathway.title}</h4>
                  <p className={`text-xs font-mono tracking-wide ${selectedPathway.id === pathway.id ? 'text-zinc-300' : 'text-zinc-500'}`}>{pathway.subtitle}</p>
                </div>
                <div className="h-5 w-5 border border-zinc-300 flex items-center justify-center text-[10px] font-mono">
                  {selectedPathway.id === pathway.id ? '●' : ' '}
                </div>
              </button>
            ))}
          </div>

          {/* Active Pathway Details Card */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-6 md:p-10 relative shadow-sm">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-zinc-100 border-l border-b border-zinc-200 text-[10px] font-mono tracking-widest text-zinc-600 font-bold">
              ID COMPUESTO: L-{selectedPathway.id.toUpperCase()}
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-xs tracking-[0.25em] font-mono text-zinc-500 uppercase block mb-1">MICRO-ANÁLISIS DE RUTAS</span>
                <h3 className="text-2xl font-bold text-zinc-900 tracking-wide">{selectedPathway.title}</h3>
                <span className="text-sm text-zinc-600 font-mono italic block mt-1">{selectedPathway.subtitle}</span>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed font-sans">
                {selectedPathway.description}
              </p>

              {/* Targets and markers list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-200">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-800 font-mono text-xs tracking-widest uppercase font-bold">
                    <Target size={14} className="text-zinc-600" />
                    <span>Objetivo Terapéutico</span>
                  </div>
                  <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                    {selectedPathway.target}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-800 font-mono text-xs tracking-widest uppercase font-bold">
                    <BarChart2 size={14} className="text-zinc-600" />
                    <span>Marcadores Clínicos Relativos</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedPathway.markers.map((marker, mIdx) => (
                      <span 
                        key={mIdx}
                        className="text-xs font-mono tracking-wide px-3 py-1 bg-white border border-zinc-200 text-zinc-800 rounded-sm shadow-xs"
                      >
                        {marker}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Static publication highlight */}
              <div className="p-5 bg-white border border-zinc-200 text-sm text-zinc-650 flex items-start gap-4 shadow-xs">
                <BookOpen size={20} className="text-zinc-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider block uppercase mb-1 font-bold">EVIDENCIA CIENTÍFICA CLAVE</span>
                  <p className="italic font-normal leading-relaxed text-zinc-700">
                    "La restauración de marcadores endoteliales e inflamatorios celulares regula selectivamente desacetilasas dependientes y enzimas de supervivencia lisosomal." — Publicación indexada en Nature Medicine & Science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Papers & Evidence Slider / Grid */}
        <div className="mt-16 bg-zinc-50 border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="max-w-4xl">
            <Quote size={32} className="text-zinc-300 mb-4" />
            <h4 className="text-xs sm:text-sm tracking-widest font-mono text-zinc-500 uppercase mb-2 font-bold">Declaración de Consenso de Gerociencia</h4>
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-normal leading-relaxed italic">
              "El incremento de la esperanza de vida saludable (healthspan) reside en el mantenimiento profiláctico celular. El uso ordenado de mímicos calóricos, precursores mitocondriales y depuradores pulsados de células senescentes constituye la tríada biológica de vanguardia que encabeza las investigaciones actuales sobre longevidad humana."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
