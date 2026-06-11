import React from 'react';
import { motion } from 'motion/react';
import { METRICS } from '../data';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface HeroProps {
  onScrollToScience: () => void;
  onOpenNewsletter: () => void;
}

export default function Hero({ onScrollToScience, onOpenNewsletter }: HeroProps) {
  return (
    <section 
      id="inicio-hero" 
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-zinc-100 py-24 lg:py-36 border-b border-zinc-200"
    >
      {/* Decorative Blueprint Matrix Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] opacity-35" />

      {/* Extreme Fine Lines */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-zinc-200 hidden xl:block" />
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-zinc-200 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Scientific Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-zinc-200 bg-white shadow-sm px-4 py-1.5"
          >
            <Sparkles size={13} className="text-zinc-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-zinc-650 font-semibold uppercase">
              VYNTAS • REVISIONES BIOQUÍMICAS INDEPENDIENTES 2026
            </span>
          </motion.div>

          {/* Subtitle / Contextual Tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs sm:text-sm tracking-[0.3em] text-zinc-500 font-mono font-bold uppercase"
          >
            GEROCIENCIA Y PROTOCOLOS MOLECULARES EN ESPAÑA
          </motion.p>

          {/* Core Copy - Kept EXACTLY as instructed */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extralight tracking-tight text-zinc-900 leading-[1.05]"
          >
            Vive más. <span className="font-light text-zinc-500 block sm:inline">Vive mejor.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Compromiso ético con la verdad molecular. Analizamos las vías de envejecimiento,
            estructuramos protocolos metabólicos prácticos y comparamos compuestos sin sesgo comercial directo.
          </motion.p>

          {/* Action Buttons with Hairline Outline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Button 1: LEE LA CIENCIA */}
            <button
              id="hero-primary-btn"
              onClick={onScrollToScience}
              className="w-full sm:w-auto bg-zinc-900 text-white hover:bg-zinc-800 text-xs sm:text-sm font-mono tracking-[0.25em] font-medium px-8 py-4 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 uppercase flex items-center justify-center gap-2 rounded-none cursor-pointer shadow-md"
            >
              <BookOpen size={14} />
              <span>LEE LA CIENCIA</span>
            </button>

            {/* Button 2: ÚNETE AL NEWSLETTER */}
            <button
              id="hero-secondary-btn"
              onClick={onOpenNewsletter}
              className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-900 text-xs sm:text-sm font-mono tracking-[0.25em] font-medium px-8 py-4 border border-zinc-300 hover:border-zinc-900 transition-all duration-300 uppercase flex items-center justify-center gap-2 rounded-none cursor-pointer"
            >
              <span>ÚNETE AL NEWSLETTER</span>
              <ArrowRight size={14} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Static Metrics Block - Kept exactly (98%, 2.4×, 14d) with updated descriptions */}
        <div className="mt-20 lg:mt-32 border-t border-zinc-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                id={`hero-metric-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                className="p-6 md:p-8 border border-zinc-200 bg-white relative hover:border-zinc-400 w-full transition-all duration-350 shadow-sm"
              >
                {/* Visual hairline helper */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-zinc-400" />
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-zinc-400" />

                <div className="text-5xl sm:text-6xl font-sans font-light text-zinc-900 tracking-tighter mb-2">
                  {metric.value}
                </div>
                <div className="text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase mb-2 font-bold">
                  {metric.label}
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal font-sans">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
