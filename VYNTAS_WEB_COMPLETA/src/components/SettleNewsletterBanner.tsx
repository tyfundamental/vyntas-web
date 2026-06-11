import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, X, ArrowRight, Shield } from 'lucide-react';
import { subscribeToNewsletter, getLocalSubscribers } from '../lib/newsletterService';

export default function SettleNewsletterBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user already dismissed the banner or is already subscribed
    const isDismissed = localStorage.getItem('vyntas_banner_dismissed') === 'true';
    const isSubscribed = getLocalSubscribers().length > 0;

    if (isDismissed || isSubscribed) {
      return;
    }

    // Wait 60 seconds before showing the banner
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 60000); // 60,000ms = 60 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('vyntas_banner_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Por favor, ingresa tu correo.');
      return;
    }

    setLoading(true);
    try {
      const result = await subscribeToNewsletter(trimmed);
      if (result.success) {
        setSubmitted(true);
        // Automatically hide success state after 4 seconds
        setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem('vyntas_banner_dismissed', 'true');
        }, 4000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="settle-newsletter-banner"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-sm border border-zinc-800 bg-[#0d0d0d] text-zinc-100 p-6 shadow-2xl rounded-none font-sans"
        >
          {/* Close button */}
          <button
            id="dismiss-newsletter-banner"
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1"
            aria-label="Cerrar aviso"
          >
            <X size={14} />
          </button>

          {submitted ? (
            /* Success View */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-2 space-y-3"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center border border-zinc-800 bg-[#0a0a0a] text-emerald-500 rounded-none">
                <Check size={16} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-xs tracking-widest font-mono text-zinc-400 uppercase font-bold">
                  Suscrito Core de VYNTAS
                </h4>
                <p className="text-sm text-zinc-200 mt-1">
                  Gracias. Te llegará el primer paper este lunes.
                </p>
              </div>
            </motion.div>
          ) : (
            /* Form View */
            <div className="space-y-4">
              
              {/* Floating Header */}
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center border border-zinc-800 bg-[#0a0a0a] text-zinc-400">
                  <Mail size={11} />
                </div>
                <span className="text-[9px] tracking-[0.2em] text-zinc-500 font-mono uppercase font-bold">
                  CIENCIA DE VANGUARDIA • LUNES
                </span>
              </div>

              {/* Pitch */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold tracking-tight text-white uppercase font-sans">
                  VYNTAS Newsletter Basal
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Recibe un análisis científico del paper semanal sin ruido ni spam.
                </p>
              </div>

              {/* Mini Form */}
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo"
                    required
                    disabled={loading}
                    className="flex-grow bg-[#0a0a0a] border border-zinc-800 hover:border-zinc-750 text-xs px-3 py-2 text-white font-mono placeholder:text-zinc-650 focus:outline-none focus:border-zinc-500 transition-all rounded-none"
                  />
                  <button
                    id="banner-newsletter-submit"
                    type="submit"
                    disabled={loading}
                    className="bg-[#1a1a1a] border border-zinc-800 text-white hover:bg-zinc-100 hover:text-black hover:border-white px-3 py-2 text-[10px] font-mono tracking-wider uppercase transition-all duration-300 font-bold cursor-pointer rounded-none flex items-center justify-center gap-1.5"
                  >
                    <span>OK</span>
                    <ArrowRight size={10} />
                  </button>
                </div>

                {error && (
                  <p className="text-[10px] tracking-wide text-red-500 font-mono mt-1">
                    {error}
                  </p>
                )}
              </form>

              {/* Understated disclaimer text with direct email contact */}
              <p className="text-[9px] text-zinc-500 leading-relaxed text-center block">
                Sin marketing agresivo. O suscríbete directo escribiendo a <a href="mailto:info@vyntas.com?subject=Suscripción%20Vyntas%20Banner&body=Me%20gustaría%20suscribirme%20a%20la%20lista." className="underline text-zinc-400 hover:text-emerald-400 transition-colors font-mono">info@vyntas.com</a>.
              </p>

            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
