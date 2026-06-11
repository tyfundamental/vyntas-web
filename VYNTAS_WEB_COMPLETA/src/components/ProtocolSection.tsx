import React, { useState } from 'react';
import { PROTOCOLS } from '../data';
import { Protocol } from '../types';
import { BookOpen, Shield, FlaskConical, ArrowRight } from 'lucide-react';
import ProtocolDetailDrawer from './ProtocolDetailDrawer';

export default function ProtocolSection() {
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenScience = (proto: Protocol) => {
    setSelectedProtocol(proto);
    setIsDrawerOpen(true);
  };

  return (
    <section 
      id="protocolos" 
      className="py-24 bg-zinc-50 border-b border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <span className="text-xs tracking-[0.3em] font-mono text-zinc-500 uppercase block mb-2">SECCIÓN 02 / PROTOCOLOS</span>
            <h2 className="text-4xl font-light tracking-wide text-zinc-900 uppercase font-sans">
              Protocolos de Optimización biomédica
            </h2>
            <p className="text-zinc-650 text-sm sm:text-base mt-2 font-normal font-sans">
              Cuatro caminos basados en literatura indexada y evidencia para optimizar tu biología celular.
            </p>
          </div>
          <div className="text-sm text-zinc-650 font-normal max-w-md leading-relaxed self-start md:self-auto font-sans">
            Directrices sistemáticas fundamentadas en literatura de máxima solvencia. Diseñadas para restablecer la resiliencia mitocondrial y celular humana de forma rigurosa y libre de sesgo comercial.
          </div>
        </div>

        {/* Dynamic Warning Badge */}
        <div className="mb-12 p-6 bg-white border border-zinc-200 flex items-start gap-4 text-sm leading-relaxed text-zinc-700 font-normal font-sans shadow-sm">
          <Shield size={18} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase font-bold block mb-1">DECLARACIÓN INTEGRAL DE INDEPENDENCIA COMERCIAL</span>
            <p className="text-zinc-600">
              Hemos extirpado toda intermediación comercial directa de esta plataforma para resguardar la total solvencia académica. Los siguientes protocolos son herramientas de divulgación abierta. Al interactuar en cada una, podrá consultar investigaciones indexadas y el listado consolidado de marcas y proveedores independientes alternativos autorizados del canal internacional con acreditaciones HPLC de pureza.
            </p>
          </div>
        </div>

        {/* Protocols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROTOCOLS.map((protocol) => (
            <div 
              key={protocol.id} 
              className="border border-zinc-200 bg-white p-6 sm:p-10 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-zinc-100 border-l border-b border-zinc-200 text-xs font-mono text-zinc-600 font-semibold mb-2 shadow-xs pb-1 sm:pb-1.5 pt-1 sm:pt-1.5">
                Dificultad: {protocol.difficulty}
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono text-zinc-500 block mb-2 font-bold">{protocol.schedule}</span>
                
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 mb-2 uppercase font-sans group-hover:text-emerald-700 transition-colors">
                  {protocol.title}
                </h3>

                <p className="text-sm text-zinc-500 leading-relaxed mb-6 font-sans italic">
                  {protocol.tagline}
                </p>

                {/* Pillars Representation */}
                <div className="py-4 border-y border-zinc-100 my-6">
                  <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase block mb-2 font-bold">PILARES MOLECULARES</span>
                  <div className="flex flex-wrap gap-2">
                    {protocol.pillars.map((pillar, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 tracking-wide rounded-sm"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brief Objective info */}
                <p className="text-sm text-zinc-650 font-sans leading-relaxed mb-6">
                  <strong className="text-zinc-800 font-bold">Objetivo clínico:</strong> {protocol.objective}
                </p>
              </div>

              {/* Botón CTA re-formulado según requisición */}
              <div className="space-y-4 pt-6 border-t border-zinc-100">
                <div className="p-4 bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 shadow-xs">
                  <span className="text-[9px] text-zinc-500 tracking-wider font-bold block uppercase mb-1">Cita Biomédica</span>
                  <div className="flex gap-2 items-start text-zinc-700 font-sans font-normal leading-relaxed">
                    <BookOpen size={14} className="shrink-0 text-zinc-450 mt-0.5" />
                    <span className="leading-relaxed italic font-light">{protocol.scientificBase}</span>
                  </div>
                </div>

                <button
                  id={`cta-science-${protocol.id}`}
                  onClick={() => handleOpenScience(protocol)}
                  className="w-full bg-zinc-900 hover:bg-zinc-850 text-white text-xs sm:text-sm font-mono tracking-[0.2em] font-medium py-3.5 border border-zinc-900 transition-all duration-300 uppercase flex items-center justify-center gap-2 rounded-none cursor-pointer shadow-md"
                >
                  <span>Profundizar en la ciencia</span>
                  <ArrowRight size={13} className="relative group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Science Slide Drawer */}
      <ProtocolDetailDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        protocol={selectedProtocol}
      />
    </section>
  );
}
