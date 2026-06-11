import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShieldAlert, FlaskConical, Calendar, Dumbbell, Quote, BookOpen, AlertCircle } from 'lucide-react';
import { Protocol } from '../types';

interface ProtocolDetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  protocol: Protocol | null;
}

export default function ProtocolDetailDrawer({ isOpen, onClose, protocol }: ProtocolDetailDrawerProps) {
  if (!protocol) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            id="protocol-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Lateral Slider Panel */}
          <motion.div
            id="protocol-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 200 }}
            className="relative w-full max-w-2xl h-full border-l border-zinc-200 bg-white text-zinc-900 flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-zinc-200 flex justify-between items-center z-10 shadow-xs">
              <div>
                <span className="text-xs tracking-[0.25em] text-zinc-500 font-mono font-bold block mb-1">PROGRAMA DE INTERVENCIÓN BIOCIENTÍFICA</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 uppercase font-sans">
                  {protocol.title}
                </h3>
              </div>
              <button
                id="close-protocol-drawer-btn"
                onClick={onClose}
                className="text-zinc-500 hover:text-zinc-950 transition-colors duration-200 p-2 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100"
                aria-label="Cerrar panel científico"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 flex-1 space-y-8">
              {/* Tagline Box */}
              <div className="py-2 border-l-4 border-emerald-500 pl-4">
                <p className="text-base sm:text-lg text-zinc-700 font-normal italic">
                  "{protocol.tagline}"
                </p>
              </div>

              {/* Protocol Spec Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-zinc-200 py-6 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-widest block uppercase font-bold">DIFICULTAD BASAL</span>
                  <div className="flex items-center gap-1.5 font-sans font-medium text-zinc-700">
                    <Dumbbell size={15} className="text-zinc-500" />
                    <span>{protocol.difficulty}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-widest block uppercase font-bold">TEMPORALIZACIÓN</span>
                  <div className="flex items-center gap-1.5 font-sans font-medium text-zinc-700">
                    <Calendar size={15} className="text-zinc-500" />
                    <span>{protocol.schedule}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-widest block uppercase font-bold">BASE BIOACTIVA</span>
                  <div className="flex items-center gap-1.5 font-sans font-medium text-zinc-700">
                    <FlaskConical size={15} className="text-zinc-500" />
                    <span className="truncate">{protocol.pillars.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Objective */}
              <div className="space-y-2">
                <h4 className="text-xs sm:text-sm font-mono tracking-widest text-zinc-500 uppercase font-bold">OBJETIVO CLÍNICO</h4>
                <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
                  {protocol.objective}
                </p>
              </div>

              {/* Deep Science Section */}
              <div className="space-y-4 bg-zinc-50 border border-zinc-200 p-6 shadow-xs">
                <h4 className="text-xs sm:text-sm font-mono tracking-widest text-zinc-800 uppercase flex items-center gap-2 font-bold">
                  <FlaskConical size={16} className="text-emerald-600" />
                  MECANISMOS FISIOLÓGICOS DETALLADOS
                </h4>
                <p className="text-xs sm:text-sm text-zinc-750 font-normal leading-relaxed">
                  {protocol.detailedScience}
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <span className="text-[10px] text-zinc-505 font-mono block mb-1 font-bold">LITERATURA INDEXADA</span>
                  <div className="flex gap-2 items-start text-xs text-zinc-700 font-normal">
                    <Quote size={14} className="text-zinc-400 mt-0.5 shrink-0" />
                    <p className="italic leading-normal select-text">{protocol.scientificBase}</p>
                  </div>
                </div>
              </div>

              {/* Step by Step Administration */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-mono tracking-widest text-zinc-500 uppercase font-bold">GUÍA DE ADMINISTRACIÓN Y DOSIS ADAPTATIVA</h4>
                <div className="space-y-3">
                  {protocol.guidelines.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="flex gap-4 p-5 border border-zinc-200 bg-zinc-50 font-sans shadow-xs"
                    >
                      <span className="text-emerald-700 font-mono text-xs sm:text-sm font-bold leading-none shrink-0 mt-0.5">
                        [{idx + 1}]
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-biased recommended products - affiliate Links */}
              <div className="space-y-5 border-t border-zinc-200 pt-8">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs tracking-[0.25em] text-zinc-500 font-mono uppercase block font-bold">SELECCIÓN SIN INTERÉS COMERCIAL DIRECTO</span>
                  <h4 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">PRODUCTOS VERIFICADOS DE OTRAS MARCAS</h4>
                  <p className="text-sm text-zinc-650 font-normal leading-relaxed">
                    VYNTAS no percibe ganancias por la comercialización directa de suplementos. Presentamos una depuración independiente basada en auditoría HPLC y certificaciones internacionales. Comprar desde estos enlaces de recomendación ayuda a financiar los análisis independientes de laboratorio en España.
                  </p>
                </div>

                <div className="space-y-4">
                  {protocol.affiliateProducts.map((prod, index) => (
                    <div 
                      key={index} 
                      className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between hover:border-zinc-400 transition-colors relative group shadow-sm rounded-sm"
                    >
                      {/* Corner Price Badge */}
                      <div className="absolute top-0 right-0 px-3 py-1 bg-zinc-100 border-l border-b border-zinc-200 text-[10px] font-mono tracking-wider text-zinc-650 font-bold uppercase">
                        GAMA: {prod.priceEstimate}
                      </div>

                      <div className="pr-12 pt-2">
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-600 tracking-wide uppercase">
                          PROVEEDOR INDEPENDIENTE: {prod.brandName}
                        </span>
                        <h5 className="text-sm sm:text-base font-bold text-zinc-900 mt-1 mb-2 font-sans tracking-wide">
                          {prod.productName}
                        </h5>
                        <p className="text-xs font-mono font-medium text-zinc-600 leading-snug">
                          <span className="text-zinc-550 font-bold">Certificación de Lote: </span> 
                          {prod.puritySpec}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-zinc-200">
                        <a 
                          href={prod.affiliateUrl}
                          className="w-full flex items-center justify-between border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-900 hover:text-white py-3 px-4 font-mono text-xs tracking-[0.16em] uppercase transition-all duration-300 pointer-events-auto rounded-xs shadow-xs"
                        >
                          <span>Ver Proveedor de Lote Certificado</span>
                          <ExternalLink size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Disclaimers */}
              <div className="p-5 bg-zinc-100 border border-zinc-200 text-xs sm:text-sm leading-relaxed text-zinc-700 font-normal flex items-start gap-3 rounded-sm shadow-xs">
                <AlertCircle size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  Soberanía de Uso: Esta información es netamente académica. El incremento tisular de elementos moduladores metabólicos estimula la regeneración pero debe ser fiscalizado por un profesional con perfil genómico o hematológico experto.
                </p>
              </div>

            </div>

            {/* Sticky Footnote */}
            <div className="p-5 bg-zinc-100 border-t border-zinc-200 font-mono text-xs text-zinc-500 text-center tracking-wider">
              VYNTAS METODOLOGÍA ANALÍTICA • ENLACES AFILIADOS VERIFICADOS CON ANÁLISIS DE PUREZA HPLC
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
