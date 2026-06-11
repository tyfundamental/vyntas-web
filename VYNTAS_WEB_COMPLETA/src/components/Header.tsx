import React, { useState } from 'react';
import { View } from '../types';
import { Menu, X, Shield } from 'lucide-react';
import VyntasLogo from './VyntasLogo';

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
  onOpenNewsletter: () => void;
}

export default function Header({ activeView, onViewChange, onOpenNewsletter }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: View.CIENCIA, label: 'CIENCIA' },
    { key: View.PROTOCOLOS, label: 'PROTOCOLOS' },
    { key: View.REVISTA, label: 'REVISTA' },
    { key: View.NOSOTROS, label: 'NOSOTROS' },
  ];

  const isNewsletter = activeView === View.NEWSLETTER;

  const handleNavClick = (view: View) => {
    onViewChange(view);
    setMobileMenuOpen(false);

    // Smooth scroll support
    const element = document.getElementById(view.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-all duration-300 ${
      isNewsletter 
        ? 'bg-[#0a0a0a]/90 border-zinc-900 text-zinc-100' 
        : 'bg-white/90 border-zinc-200 border-opacity-90 shadow-xs text-zinc-900'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo and Title */}
        <div 
          onClick={() => handleNavClick(View.CIENCIA)}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="flex items-center justify-center transition-all group-hover:scale-105 duration-300">
            <VyntasLogo size={28} />
          </div>
          <span className={`text-sm font-black tracking-[0.3em] font-sans uppercase transition-colors ${
            isNewsletter ? 'text-white' : 'text-zinc-900'
          }`}>
            VYNTAS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-mono tracking-[0.25em] select-none font-bold ${
          isNewsletter ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
          {navItems.map((item, idx) => (
            <React.Fragment key={item.key}>
              <button
                id={`nav-${item.key.toLowerCase()}`}
                onClick={() => handleNavClick(item.key)}
                className={`py-1 cursor-pointer transition-colors uppercase relative font-bold ${
                  isNewsletter
                    ? `hover:text-white ${activeView === item.key ? 'text-white font-extrabold' : ''}`
                    : `hover:text-[#0c0c0c] ${activeView === item.key ? 'text-[#0c0c0c] font-extrabold' : ''}`
                }`}
              >
                {item.label}
                {activeView === item.key && (
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isNewsletter ? 'bg-white' : 'bg-zinc-900'
                  }`} />
                )}
              </button>
              {idx < navItems.length && (
                <span className={`font-light pointer-events-none select-none transition-colors ${
                  isNewsletter ? 'text-zinc-800' : 'text-zinc-200'
                }`}>·</span>
              )}
            </React.Fragment>
          ))}
          {/* NEWSLETTER Menu Item */}
          <button
            id="nav-newsletter"
            onClick={() => {
              onViewChange(View.NEWSLETTER);
            }}
            className={`py-1 bg-transparent transition-colors cursor-pointer font-bold ${
              isNewsletter 
                ? 'text-white font-extrabold relative' 
                : 'text-zinc-505 hover:text-zinc-950'
            }`}
          >
            NEWSLETTER
            {isNewsletter && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
            )}
          </button>
        </nav>

        {/* Desktop CTA Accent */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center gap-1.5 text-xs font-mono tracking-wider border-r pr-4 font-bold transition-colors ${
            isNewsletter ? 'text-zinc-400 border-zinc-850' : 'text-zinc-500 border-zinc-200'
          }`}>
            <Shield size={13} className="text-emerald-700 shrink-0 mt-0.5" />
            <span>ENLACES VERIFICADOS</span>
          </div>
          <button
            id="header-cta"
            onClick={() => onViewChange(View.NEWSLETTER)}
            className={`px-4 py-1.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm font-bold shadow-xs cursor-pointer border ${
              isNewsletter 
                ? 'border-zinc-800 hover:border-zinc-650 text-zinc-350 hover:text-white bg-[#0e0e0e] hover:bg-[#161616]' 
                : 'border-zinc-300 hover:border-zinc-900 text-zinc-700 hover:text-zinc-955 bg-zinc-50 hover:bg-zinc-100'
            }`}
          >
            Suscripción Científica
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 border transition-all ${
              isNewsletter 
                ? 'text-zinc-400 border-zinc-805 bg-zinc-950 hover:text-white' 
                : 'text-zinc-500 border-zinc-200 bg-white hover:text-zinc-950'
            }`}
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b transition-all ${
          isNewsletter 
            ? 'border-zinc-900 bg-[#0d0d0d]/95 text-white' 
            : 'border-zinc-200 bg-white/95 text-zinc-900'
        }`}>
          <div className="px-6 py-4 flex flex-col space-y-4 text-xs font-mono tracking-[0.2em]">
            {navItems.map((item) => (
              <button
                key={item.key}
                id={`mobile-nav-${item.key.toLowerCase()}`}
                onClick={() => handleNavClick(item.key)}
                className={`py-2 text-left w-full border-b pb-2 transition-colors ${
                  isNewsletter ? 'border-zinc-850' : 'border-zinc-100'
                } ${
                  activeView === item.key 
                    ? `font-bold pl-1 ${isNewsletter ? 'text-white border-zinc-700' : 'text-zinc-950 border-zinc-900'}` 
                    : `${isNewsletter ? 'text-zinc-500' : 'text-zinc-500'}`
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-nav-newsletter"
              onClick={() => {
                setMobileMenuOpen(false);
                onViewChange(View.NEWSLETTER);
              }}
              className={`py-2 text-left w-full border-b pb-2 ${
                isNewsletter 
                  ? 'text-white font-bold pl-1 border-zinc-700' 
                  : 'text-zinc-500 border-zinc-100'
              }`}
            >
              NEWSLETTER
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

