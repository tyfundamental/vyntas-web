import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShieldCheck, CheckSquare, Award } from 'lucide-react';
import { RecommendedProduct } from '../types';
import { RECOMMENDED_PRODUCTS } from '../data';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
}

export default function ComparisonDrawer({ isOpen, onClose, selectedCategory }: ComparisonDrawerProps) {
  // If a category was chosen, bubble it up or highlight; otherwise show all
  const products = selectedCategory
    ? RECOMMENDED_PRODUCTS.filter(p => p.category === selectedCategory || selectedCategory.toLowerCase().includes(p.category.toLowerCase()) || p.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : RECOMMENDED_PRODUCTS;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop screen */}
          <motion.div
            id="comparison-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            id="comparison-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-2xl h-full border-l border-zinc-200 bg-white text-zinc-900 flex flex-col z-10 overflow-y-auto shadow-2xl"
          >
            {/* Header Area */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-zinc-200 flex justify-between items-center z-10">
              <div>
                <span className="text-xs tracking-[0.25em] text-zinc-500 font-mono block mb-1 font-bold">AUDITORÍA INDEPENDIENTE</span>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 uppercase font-sans">Comparativa de Pureza y Proveedores</h3>
              </div>
              <button
                id="close-comparison-btn"
                onClick={onClose}
                className="text-zinc-500 hover:text-zinc-955 transition-colors duration-200 p-2 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100"
                aria-label="Cerrar panel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Inner Content Area */}
            <div className="p-6 md:p-8 flex-1 space-y-8 font-sans">
              {/* Notice / Policy */}
              <div className="p-5 bg-zinc-50 border border-zinc-200 font-normal text-sm text-zinc-650 leading-relaxed relative rounded-sm shadow-xs">
                <div className="absolute top-0 right-0 p-1.5 bg-zinc-250 border-l border-b border-zinc-350 font-mono text-[9px] tracking-wider text-zinc-650 font-bold">
                  ESTATUTO INDEPENDIENTE
                </div>
                <div className="flex gap-3 items-start">
                  <ShieldCheck size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-900 font-bold">Compromiso de cero intermediación comercial directa:</strong>
                    <p className="mt-1">
                      No vendemos compuestos bajo marca propia. Analizamos periódicamente la pureza química mediante certificados de cromatografía líquida de alta resolución (HPLC) provistos por laboratorios europeos y norteamericanos autorizados, indicando la opción recomendada a través de enlaces afiliados verificados de alta reputación.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison list */}
              <div className="space-y-6">
                <h4 className="text-xs font-mono tracking-widest text-zinc-500 uppercase border-b border-zinc-200 pb-2 font-bold">
                  OPCIONES EVALUADAS ({products.length})
                </h4>

                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group border border-zinc-200 bg-white p-6 md:p-8 transition-colors duration-300 hover:border-zinc-350 relative rounded-sm shadow-xs"
                  >
                    {/* Corner Tag */}
                    <div className="absolute top-0 right-0 px-3 py-1 bg-zinc-100 border-l border-b border-zinc-200 text-[10px] font-mono tracking-widest text-zinc-600 uppercase font-bold">
                      {product.priceEstimate} Cost
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Award size={15} className="text-emerald-700" />
                      <span className="text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase font-bold">{product.category}</span>
                    </div>

                    <h5 className="text-lg font-bold text-zinc-900 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors uppercase font-sans">
                      {product.name}
                    </h5>

                    <p className="text-sm text-zinc-650 font-normal mb-4 leading-relaxed">
                      {product.synopsis}
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4 bg-zinc-50 border border-zinc-200 text-xs font-mono mb-6 rounded-sm">
                      <div>
                        <span className="text-zinc-500 text-[10px] block tracking-wider font-bold">CERTIFICADO HPLC DE PUREZA</span>
                        <span className="text-zinc-900 text-sm font-bold tracking-wide">{product.purity}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-[10px] block tracking-wider font-bold">DOSIS RECOMENDADA DIARIA</span>
                        <span className="text-zinc-900 text-sm font-bold tracking-wide">{product.dosage}</span>
                      </div>
                    </div>

                    {/* Pros section */}
                    <div className="space-y-2 mb-6 text-xs sm:text-sm">
                      <span className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase block mb-1 font-bold">Criterios de Excelencia del Lote</span>
                      {product.pros.map((pro, index) => (
                        <div key={index} className="flex gap-2 items-start text-zinc-650 font-normal">
                          <CheckSquare size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>

                    {/* Affiliate Link Call to Action */}
                    <a
                      href={product.affiliateUrl}
                      className="inline-flex w-full items-center justify-between border border-zinc-300 hover:border-zinc-900 bg-zinc-50 hover:bg-zinc-900 hover:text-white py-3.5 px-5 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 font-bold cursor-pointer rounded-sm shadow-xs"
                    >
                      <span>Ver Proveedor de Lote Certificado</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Comparison Table Grid for Quick Comparison */}
              <div className="border border-zinc-200 bg-zinc-50 p-6 space-y-4 rounded-sm shadow-xs">
                <h5 className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-bold">Matriz de Eficacia Molecular</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono text-zinc-700">
                    <thead>
                      <tr className="border-b border-zinc-200 text-[10px] text-zinc-500 tracking-wider font-bold">
                        <th className="py-2 pr-2">MOLÉCULA</th>
                        <th className="py-2">PUNTO DE ACCIÓN</th>
                        <th className="py-2 text-right">BIODISPONIBILIDAD</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 select-none">
                      <tr>
                        <td className="py-2 pr-2 text-zinc-900 font-bold text-xs sm:text-sm">NMN</td>
                        <td className="py-2 text-[11px] sm:text-xs text-zinc-600">Mitocondrial, Transportador Slc12a8</td>
                        <td className="py-2 text-right text-zinc-900 font-bold">Muy Alta</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-2 text-zinc-900 font-bold text-xs sm:text-sm">Fisetina</td>
                        <td className="py-2 text-[11px] sm:text-xs text-zinc-600">Apoptosis selectiva SASP</td>
                        <td className="py-2 text-right text-zinc-900 font-bold">Alta (Liposomal)</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-2 text-zinc-900 font-bold text-xs sm:text-sm">Berberina</td>
                        <td className="py-2 text-[11px] sm:text-xs text-zinc-600">Activador AMPK, Complejo I Mímico</td>
                        <td className="py-2 text-right text-zinc-900 font-bold">Media-Alta</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-2 text-zinc-900 font-bold text-xs sm:text-sm">Resveratrol</td>
                        <td className="py-2 text-[11px] sm:text-xs text-zinc-600">Potenciador de Enlace de Sirtuinas</td>
                        <td className="py-2 text-right text-zinc-900 font-bold">Baja (mejorar c/grasas)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer Sign-off inside Drawer */}
            <div className="p-6 bg-zinc-50 border-t border-zinc-200 text-center font-mono text-xs text-zinc-500 tracking-wider font-bold">
              EL RECOLECTOR DE PUREZA QUÍMICA • CERTIFICACIÓN ACTUALIZADA MAYO 2026
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
