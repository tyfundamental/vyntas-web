import React, { useState } from 'react';
import { ARTICLES } from '../data';
import { Article } from '../types';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MagazineSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section 
      id="revista" 
      className="py-24 bg-white border-b border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200">
          <div>
            <span className="text-xs tracking-[0.3em] font-mono text-zinc-500 uppercase block mb-2 font-bold">SECCIÓN 03 / PUBLICACIONES</span>
            <h2 className="text-4xl font-light tracking-wide text-zinc-900 uppercase font-sans">
              Revista e Informes de Divulgación
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-650 font-normal max-w-lg leading-relaxed">
            Reportes especializados que traducen la complejidad de papers biológicos de alto impacto a directrices de rejuvenecimiento celular aplicables.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="article-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {ARTICLES.map((article) => (
                <article 
                  key={article.id}
                  className="border border-zinc-200 bg-zinc-50 p-6 md:p-8 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300 relative group shadow-sm rounded-sm"
                >
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center justify-between mb-4 text-[10px] sm:text-xs font-mono text-zinc-500 tracking-wider font-bold">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-600 uppercase font-bold">{article.category}</span>
                        <span>·</span>
                        <div className="flex items-center gap-1 font-bold">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      {article.doi && (
                        <span className="text-[10px] text-zinc-400 font-mono">
                          DOI disponible
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3 uppercase font-sans group-hover:text-emerald-700 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-zinc-650 leading-relaxed mb-6 font-normal">
                      {article.summary}
                    </p>
                  </div>

                  <div className="border-t border-zinc-200 pt-5 mt-4 flex items-center justify-between">
                    <div className="text-xs text-zinc-500 font-mono font-bold">
                      <span>{article.date}</span>
                    </div>
                    <button
                      id={`read-article-${article.id}`}
                      onClick={() => setSelectedArticle(article)}
                      className="text-xs text-zinc-900 hover:text-emerald-700 font-mono tracking-widest uppercase flex items-center gap-1.5 transition-colors font-bold cursor-pointer"
                    >
                      <span>Leer Artículo</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="article-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-4xl mx-auto bg-white border border-zinc-200 p-6 md:p-12 relative shadow-md rounded-sm"
            >
              {/* Back to feed button */}
              <button
                id="back-to-articles-btn"
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 text-xs font-mono tracking-wider uppercase mb-8 border border-zinc-200 bg-zinc-50 px-5 py-2.5 hover:border-zinc-400 transition-all duration-300 select-none cursor-pointer font-bold shadow-xs"
              >
                <ArrowLeft size={14} />
                <span>Volver a la Revista</span>
              </button>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4 items-center text-[10px] sm:text-xs font-mono text-zinc-650 border-b border-zinc-200 pb-4 font-bold">
                  <span className="text-zinc-950 px-3 py-1 bg-zinc-100 border border-zinc-300 uppercase font-bold">{selectedArticle.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={13} className="text-zinc-500" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={13} className="text-zinc-500" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={13} className="text-zinc-500" />
                    <span>{selectedArticle.readTime} de lectura</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 uppercase font-sans leading-tight">
                  {selectedArticle.title}
                </h3>

                <div className="p-5 bg-zinc-50 border-l-4 border-emerald-500">
                  <p className="text-sm sm:text-base text-zinc-700 font-semibold tracking-wide uppercase font-mono italic">
                    {selectedArticle.summary}
                  </p>
                </div>

                <div className="space-y-6 text-sm sm:text-base md:text-lg text-zinc-700 font-normal leading-relaxed font-sans pt-6 border-t border-zinc-200">
                  {selectedArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Real Verified Scientific Evidence Badge */}
                {selectedArticle.doi && (
                  <div className="mt-8 p-5 rounded-sm border border-zinc-200 bg-emerald-50/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 font-black">DOCUMENTO CIENTÍFICO VERIFICADO</span>
                      <p className="text-xs text-zinc-650 font-mono">
                        DOI: <span className="text-zinc-900 font-bold select-all">{selectedArticle.doi}</span>
                      </p>
                    </div>
                    {selectedArticle.link && (
                      <a
                        href={selectedArticle.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-950 font-mono font-bold tracking-wider uppercase border border-emerald-250 bg-white px-4 py-2 rounded-sm shadow-xs hover:border-emerald-550 hover:bg-emerald-50/40 transition-all duration-300"
                      >
                        <span>Ver Publicación Oficial</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                )}

                {/* Submitting context badge */}
                <div className="mt-8 pt-6 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-505 font-mono font-bold">
                  <span>© BioLongevity Colecciones 2026</span>
                  <span>Lote Analítico Publicado: R-2026</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
