import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/newsletterService';

interface NewsletterPageProps {
  onBackToHome: () => void;
}

export default function NewsletterPage({ onBackToHome }: NewsletterPageProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Por favor, ingresa una dirección de correo.');
      return;
    }

    setLoading(true);
    try {
      const result = await subscribeToNewsletter(trimmed);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Ocurrió un error. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="newsletter-page"
      className="min-h-[calc(100vh-4rem)] bg-[#0a0a0a] text-zinc-100 flex flex-col justify-center py-20 px-6 relative overflow-hidden font-sans"
    >
      {/* Decorative fine architectural frame corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-zinc-800" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-zinc-800" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-zinc-800" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-zinc-800" />

      <div className="max-w-xl mx-auto w-full relative z-10">
        
        {/* Back navigation */}
        <motion.button
          id="newsletter-back-btn"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-zinc-550 hover:text-zinc-200 text-xs font-mono tracking-widest uppercase mb-12 cursor-pointer transition-colors group select-none"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver a la Ciencia</span>
        </motion.button>

        <div className="border border-zinc-850 bg-[#0d0d0d] p-8 md:p-12 shadow-2xl relative rounded-none">
          
          {submitted ? (
            /* Success State */
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6 space-y-6"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-zinc-800 bg-[#0a0a0a] text-emerald-500 rounded-none mb-4">
                <Check size={20} className="stroke-[2.5]" />
              </div>
              
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.3em] font-mono text-zinc-550 uppercase block font-bold">
                  SUSCRIPCIÓN CONFIRMADA
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase font-sans">
                  Gracias.
                </h3>
                <p className="text-zinc-650 font-mono text-xs">
                  {email.toLowerCase()}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed font-normal max-w-sm mx-auto">
                Te llegará el primer paper este lunes. Cada entrega contiene un metanálisis detallado y las dosificaciones sugeridas sin manipulación de marca.
              </p>

              {/* Seamless Direct Email Option as requested */}
              <div className="p-5 border border-zinc-850 bg-[#070707]/80 text-left space-y-2.5 max-w-sm mx-auto">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-black block">Alta Manual Directa</span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Hemos guardado tu interés. Para asegurar un alta manual instantánea o si tu bandeja filtra correos automatizados, puedes enviarnos un correo de confirmación a:
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <span className="text-[#a1a1aa] font-mono text-[11px] select-all bg-black px-2.5 py-1.5 border border-zinc-900 flex-1 truncate">
                    info@vyntas.com
                  </span>
                  <a
                    href={`mailto:info@vyntas.com?subject=Suscripción%20Directa%20VYNTAS&body=Hola%20equipo%20VYNTAS,%0A%0ADeseo%20confirmar%20mi%20suscripción%20para:%20${encodeURIComponent(email)}`}
                    className="bg-emerald-650 hover:bg-emerald-700 text-white font-mono text-[10px] px-3.5 py-1.5 font-bold uppercase transition-colors text-center inline-flex items-center justify-center gap-1 shrink-0"
                  >
                    Mandar correo
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-850">
                <button
                  id="newsletter-success-back-btn"
                  onClick={onBackToHome}
                  className="bg-zinc-100 hover:bg-white text-black font-mono font-bold tracking-[0.15em] text-xs px-6 py-3 uppercase transition-all duration-300 cursor-pointer shadow-md rounded-none"
                >
                  VOLVER A LA PLATAFORMA
                </button>
              </div>
            </motion.div>
          ) : (
            /* Subscription Form State */
            <div className="space-y-8">
              
              {/* Monospace Indicator */}
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center border border-zinc-800 bg-[#0a0a0a] text-zinc-400">
                  <Mail size={12} className="stroke-[1.5]" />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-zinc-500 font-mono uppercase font-bold">
                  SOPORTE DE INFORMACIÓN SEMANAL
                </span>
              </div>

              {/* Hero Block */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-zinc-550 block select-none uppercase tracking-widest">
                  VYNTAS NEWSLETTER
                </span>
                <h1 className="text-3xl md:text-4xl font-light tracking-wide text-white uppercase font-sans">
                  Cada lunes. Un paper. Sin ruido.
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                Recibe una traducción accesible de un paper científico sobre longevidad, recuperación o optimización metabólica cada semana. Más insights honestos sobre la industria de los suplementos. Cero spam.
              </p>

              {/* Action Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo Electrónico"
                      required
                      disabled={loading}
                      className="w-full bg-[#0a0a0a] border border-zinc-800 hover:border-zinc-700 text-sm px-4 py-3 text-white tracking-wide placeholder:text-zinc-650 focus:outline-none focus:border-zinc-500 transition-all font-mono rounded-none"
                    />
                  </div>
                  <button
                    id="newsletter-page-submit"
                    type="submit"
                    disabled={loading}
                    className="bg-[#111111] border border-zinc-800 text-white hover:bg-zinc-100 hover:text-black py-3 px-6 text-xs font-mono tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer rounded-none shrink-0 flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {loading ? (
                      <span className="animate-pulse">PROCESANDO...</span>
                    ) : (
                      <>
                        <span>SUSCRIBIRME</span>
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <p className="text-xs tracking-wide text-red-500 font-mono mt-1">
                    {error}
                  </p>
                )}
              </form>

              {/* Direct email manual alternative option */}
              <div className="text-center pt-2">
                <span className="text-[10px] text-zinc-500 font-mono uppercase block tracking-widest font-bold">ALTA DIRECTA ALTERNATIVA</span>
                <a
                  href="mailto:info@vyntas.com?subject=Suscripción%20Directa%20VYNTAS&body=Hola%20equipo%20VYNTAS,%0A%0ADeseo%20darme%20de%20alta%20manualmente%20en%20vuestra%20lista%20de%20difisión%20científica."
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors underline decoration-zinc-800 hover:decoration-emerald-700 pt-1 font-mono font-semibold"
                >
                  O escríbenos a info@vyntas.com
                </a>
              </div>

              {/* Bottom Fine Print Disclaimer */}
              <div className="pt-6 border-t border-zinc-850 space-y-4">
                <p className="text-[11px] text-zinc-500 leading-relaxed font-normal">
                  Sin marketing agresivo. Solo ciencia traducida. Te puedes dar de baja con un clic.
                </p>

                <div className="flex items-center justify-between text-[10px] text-zinc-600 font-mono pt-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Shield size={11} className="text-zinc-500" />
                    <span>ENTREGA PRIVADA SIN COOKIES COMERCIALES</span>
                  </div>
                  <span>REF: EDICIÓN LUNES</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
