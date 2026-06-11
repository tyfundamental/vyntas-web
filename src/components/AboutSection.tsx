import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronRight, ChevronDown, Check, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AboutSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section 
      id="nosotros" 
      className="py-24 bg-white border-b border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <span className="text-xs tracking-[0.3em] font-mono text-zinc-500 uppercase block mb-2">SECCIÓN 04 / NOSOTROS</span>
            <h2 className="text-4xl font-light tracking-wide text-zinc-900 uppercase font-sans">
              NOSOTROS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-lg leading-relaxed">
            VYNTAS nace en Sevilla en 2026 con una idea simple: la mayoría de los suplementos del mercado no están a la altura de lo que dicen ser.
          </p>
        </div>

        {/* About Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 uppercase font-sans">La Realidad de la Industria</h3>
            <p className="text-sm sm:text-base text-zinc-650 font-normal leading-relaxed font-sans">
              Botes con estearato de magnesio. Cápsulas con dióxido de titanio. Dosis subclínicas vendidas a precio premium. Claims sin evidencia. Marketing que confunde, etiquetas que ocultan.
            </p>
            <p className="text-sm sm:text-base text-zinc-650 font-normal leading-relaxed font-sans">
              En VYNTAS elegimos el camino opuesto. Desarmamos el ruido corporativo para ofrecer un análisis objetivo y riguroso de cada molécula y dosis sugerida.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2.5 p-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 rounded-sm">
                <Check size={16} className="text-emerald-600 shrink-0" />
                <span>Cero excipientes nocivos</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 rounded-sm">
                <Check size={16} className="text-emerald-600 shrink-0" />
                <span>Traducción científica pura</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 rounded-sm">
                <Check size={16} className="text-emerald-600 shrink-0" />
                <span>Dosificaciones de grado clínico</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 rounded-sm">
                <Check size={16} className="text-emerald-600 shrink-0" />
                <span>Curación e independencia</span>
              </div>
            </div>
          </div>

          {/* Visual card or brand representation */}
          <div className="border border-zinc-200 bg-zinc-50 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[340px]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.03)_0%,transparent_70%)]" />
            
            <div className="space-y-6">
              <span className="text-xs tracking-[0.25em] font-mono text-zinc-500 font-bold uppercase">VYNTAS es la respuesta</span>
              
              <ul className="space-y-4 text-sm sm:text-base text-zinc-650 font-normal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold select-none mt-0.5">·</span>
                  <span>Un medio dedicado a traducir la ciencia real de la longevidad</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold select-none mt-0.5">·</span>
                  <span>Un curador honesto que solo recomienda productos que cumplen estándares clínicos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold select-none mt-0.5">·</span>
                  <span>Un proyecto que aspira, en su próxima fase, a fabricar su propia gama bajo los mismos principios</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-zinc-200">
                <p className="text-base font-bold text-zinc-900 tracking-tight font-sans italic">
                  "No vendemos cápsulas todavía. Vendemos claridad."
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <div className="flex flex-col gap-0.5">
                <span className="text-zinc-800 font-bold font-sans uppercase tracking-wider text-xs">— Daniel Malagón Periánez</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Fundador, VYNTAS</span>
              </div>
              <span className="text-[10px] font-bold select-none text-zinc-400 font-mono tracking-wider">SEVILLA, 2026</span>
            </div>
          </div>
        </div>

        {/* Acrónimo VYNTAS Framework Grid */}
        <div className="mb-20 border border-zinc-200 bg-zinc-50 p-6 sm:p-10 shadow-sm rounded-sm">
          <span className="text-xs tracking-[0.3em] font-mono text-zinc-500 font-bold block mb-6">EL FRAMEWORK INTELECTUAL DE VYNTAS</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col gap-3 relative group hover:border-zinc-400 hover:shadow-sm transition-all duration-300">
              <span className="absolute top-4 right-4 text-5xl font-black text-zinc-200 font-mono group-hover:text-zinc-350 transition-colors select-none">V</span>
              <span className="text-xs tracking-widest font-mono text-zinc-900 font-bold">VITAL</span>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Energía, rendimiento mitocondrial y resiliencia diaria como base de una vida larga.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col gap-3 relative group hover:border-zinc-400 hover:shadow-sm transition-all duration-300">
              <span className="absolute top-4 right-4 text-5xl font-black text-zinc-200 font-mono group-hover:text-zinc-350 transition-colors select-none">Y</span>
              <span className="text-xs tracking-widest font-mono text-zinc-900 font-bold">YIELD (RENDIMIENTO)</span>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Retornos medibles y acumulativos por cada dosis — sin ruido de marketing.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col gap-3 relative group hover:border-zinc-400 hover:shadow-sm transition-all duration-300">
              <span className="absolute top-4 right-4 text-5xl font-black text-zinc-200 font-mono group-hover:text-zinc-350 transition-colors select-none">N</span>
              <span className="text-xs tracking-widest font-mono text-zinc-900 font-bold">NEURAL</span>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Foco, memoria y estado de ánimo, diseñado sin estimulantes ni bajones.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col gap-3 relative group hover:border-zinc-400 hover:shadow-sm transition-all duration-300">
              <span className="absolute top-4 right-4 text-5xl font-black text-zinc-200 font-mono group-hover:text-zinc-350 transition-colors select-none">T</span>
              <span className="text-xs tracking-widest font-mono text-zinc-900 font-bold">TECHNOLOGY</span>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Activos de grado farmacéutico, entrega biodisponible y lotes verificados por terceros.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col gap-3 relative group hover:border-zinc-400 hover:shadow-sm transition-all duration-300">
              <span className="absolute top-4 right-4 text-5xl font-black text-zinc-200 font-mono group-hover:text-zinc-350 transition-colors select-none">A</span>
              <span className="text-xs tracking-widest font-mono text-zinc-900 font-bold">AGE (EDAD)</span>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Marcadores de envejecimiento celular: NAD+, metilación, senescencia — medidos y revertidos.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col gap-3 relative group hover:border-zinc-400 hover:shadow-sm transition-all duration-300">
              <span className="absolute top-4 right-4 text-5xl font-black text-zinc-200 font-mono group-hover:text-zinc-350 transition-colors select-none">S</span>
              <span className="text-xs tracking-widest font-mono text-zinc-900 font-bold">SUPPRESSION</span>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Suprimir los motores del declive: inflamación, estrés oxidativo y deuda de sueño.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs integration requested: PREGUNTAS as a sub-section of NOSOTROS */}
        <div id="preguntas" className="border-t border-zinc-200 pt-20 scroll-mt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle size={18} className="text-zinc-500" />
              <span className="text-xs tracking-[0.3em] font-mono text-zinc-500 uppercase font-bold">SUB-SECCIÓN / SOPORTE INFORMATIVO</span>
            </div>
            <h3 className="text-3xl font-light tracking-wide text-zinc-900 uppercase mb-3">
              Preguntas Frecuentes
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-8">
              Respuestas directas sobre la metodología científica, la reorganización del portal libre de comercio y cómo auditar marcas recomendadas.
            </p>

            {/* Accordion List */}
            <div className="space-y-3">
              {FAQS.map((faq) => {
                const isCurrent = openFAQ === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`border transition-all duration-300 ${isCurrent ? 'border-zinc-300 bg-zinc-50' : 'border-zinc-200 bg-white'}`}
                  >
                    <button
                      id={`faq-toggle-${faq.id}`}
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-5 flex items-center justify-between font-mono text-xs sm:text-sm text-zinc-800 hover:text-zinc-950 transition-colors cursor-pointer select-none font-medium"
                    >
                      <span className="pr-4 tracking-wide text-sm sm:text-base font-sans text-zinc-900 normal-case font-normal">
                        {faq.question}
                      </span>
                      <div className="shrink-0 text-zinc-500">
                        {isCurrent ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isCurrent && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 border-t border-zinc-200 w-full text-xs sm:text-sm font-normal text-zinc-700 leading-relaxed font-sans space-y-4 bg-white">
                            <p className="leading-relaxed">{faq.answer}</p>
                            {faq.source && (
                              <div className="flex items-center gap-1.5 pt-2 text-[10px] sm:text-xs font-mono text-zinc-500 font-bold">
                                <ShieldCheck size={14} className="text-emerald-700" />
                                <span className="uppercase">Fuente certificada: {faq.source}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
