import React from 'react';
import { View } from '../types';
import { Shield, Sparkles, FileText } from 'lucide-react';
import VyntasLogo from './VyntasLogo';

interface FooterProps {
  onNavClick: (view: View) => void;
  onOpenNewsletter: () => void;
}

export default function Footer({ onNavClick, onOpenNewsletter }: FooterProps) {
  
  const handleItemClick = (view: View, elementId: string) => {
    onNavClick(view);
    const element = document.getElementById(elementId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <footer className="bg-zinc-100 text-zinc-600 text-sm py-20 border-t border-zinc-200 font-normal select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper Foot Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          {/* Brand/Mission card */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-zinc-900">
              <VyntasLogo size={22} className="hover:scale-105 transition-transform duration-300" />
              <span className="text-sm font-black tracking-[0.25em] font-sans uppercase text-zinc-900">
                VYNTAS
              </span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal font-sans max-w-sm">
              Plataforma independiente para la divulgación analítica, estructuración metodológica de la longevidad y auditoría HPLC de compuestos activos. Vive más. Vive mejor.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-wider font-mono text-zinc-900 uppercase font-bold">EXPLORAR</h4>
            <div className="flex flex-col space-y-2 font-medium text-xs tracking-wide">
              <button 
                onClick={() => handleItemClick(View.CIENCIA, 'ciencia')}
                className="text-left py-0.5 text-zinc-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Ciencia Basal
              </button>
              <button 
                onClick={() => handleItemClick(View.PROTOCOLOS, 'protocolos')}
                className="text-left py-0.5 text-zinc-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Protocolos Moleculares
              </button>
              <button 
                onClick={() => handleItemClick(View.REVISTA, 'revista')}
                className="text-left py-0.5 text-zinc-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Revista & Informes
              </button>
              <button 
                onClick={() => handleItemClick(View.NOSOTROS, 'nosotros')}
                className="text-left py-0.5 text-zinc-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Filosofía de Transparencia
              </button>
            </div>
          </div>

          {/* FAQS & Support */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-wider font-mono text-zinc-900 uppercase font-bold">PREGUNTAS</h4>
            <div className="flex flex-col space-y-2 font-medium text-xs tracking-wide">
              <button 
                onClick={() => handleItemClick(View.NOSOTROS, 'preguntas')}
                className="text-left py-0.5 text-zinc-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Sección Preguntas (FAQS) →
              </button>
              <button 
                onClick={onOpenNewsletter}
                className="text-left py-0.5 text-zinc-600 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                Soporte y Suscripciones →
              </button>
            </div>
          </div>

          {/* Direct connection */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-wider font-mono text-zinc-900 uppercase font-bold">SUSCRIPCIÓN RÁPIDA</h4>
            <p className="text-xs text-zinc-600 font-sans leading-relaxed font-normal">
              Reciba las actualizaciones de HPLC directamente en su casilla postal:
            </p>
            <button
              id="footer-subscribe-btn"
              onClick={onOpenNewsletter}
              className="w-full bg-white border border-zinc-300 hover:border-zinc-400 py-3 px-4 text-xs font-mono text-zinc-500 hover:text-zinc-900 tracking-wide uppercase transition-all text-left font-bold rounded-sm shadow-xs cursor-pointer"
            >
              INGRESAR APARTADO POSTAL ...
            </button>
          </div>
        </div>

        {/* Lower Foot and Disclaimers */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-800 font-bold">
              <Shield size={13} className="text-emerald-700" />
              <span>DESMITIFICACIÓN COMERCIAL INDEPENDIENTE</span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-600 font-normal text-justify">
              <strong>Nota de Responsabilidad:</strong> Las declaraciones y metodologías descritas no han sido formuladas bajo supervisión de entidades de expendio directo. No pretenden diagnosticar, tratar ni prevenir enfermedades biológicas crónicas. El lector conserva soberanía clínica absoluta para auditar y elegir sus propios laboratorios acreditados.
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-between self-start md:self-auto space-y-1 text-xs text-zinc-500 font-bold">
            <span>© 2026 VYNTAS INVESTIGACIONES</span>
            <div className="flex items-center gap-1 text-[11px] text-zinc-600">
              <Sparkles size={11} className="text-emerald-700 animate-pulse" />
              <span>SOPORTE DE ALTA PUREZA VERIFICABLE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
