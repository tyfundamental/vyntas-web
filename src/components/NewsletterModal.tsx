import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Mail, Shield } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/newsletterService';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

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
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="newsletter-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            id="newsletter-modal-box"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden border border-zinc-800 bg-[#0d0d0d] text-zinc-100 p-8 md:p-10 shadow-2xl rounded-none font-sans"
          >
            {/* Fine Hairline Decor Corners */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-zinc-750" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-zinc-750" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-zinc-750" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-zinc-750" />

            {/* Close Button */}
            <button
              id="close-newsletter-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors duration-200 p-1.5 bg-[#0a0a0a] border border-zinc-805 hover:bg-zinc-900"
              aria-label="Cerrar modal"
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <div id="newsletter-form-container" className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-[#0a0a0a] text-zinc-400">
                    <Mail size={16} className="stroke-[1.5]" />
                  </div>
                  <span className="text-xs tracking-[0.2em] text-zinc-500 font-mono font-bold">CONEXIÓN DIRECTA</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.25em] font-mono text-zinc-500 font-bold block select-none uppercase">VYNTAS NEWSLETTER</span>
                  <h3 className="text-2xl font-light text-white tracking-wide uppercase">
                    Cada lunes. Un paper. Sin ruido.
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  Recibe una traducción accesible de un paper científico sobre longevidad, recuperación o optimización metabólica cada semana. Más insights honestos sobre la industria de los suplementos. Cero spam.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      id="newsletter-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="DIRECCIÓN DE CORREO"
                      className="w-full bg-[#0a0a0a] border border-zinc-800 text-sm px-4 py-3.5 text-white tracking-wider placeholder:text-zinc-650 focus:outline-none focus:border-zinc-550 transition-all uppercase font-mono rounded-none"
                      disabled={loading}
                    />
                  </div>

                  {error && (
                    <p className="text-xs tracking-wider text-red-500 font-mono">{error}</p>
                  )}

                  <button
                    id="submit-newsletter-btn"
                    type="submit"
                    className="w-full bg-[#111111] leading-none hover:bg-zinc-100 hover:text-black hover:border-white text-white transition-all duration-300 text-xs sm:text-sm tracking-[0.25em] font-bold py-4 border border-zinc-800 flex items-center justify-center gap-2 font-mono cursor-pointer shadow-md rounded-none"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="inline-block animate-pulse">SINCRO DE SERVIDOR...</span>
                    ) : (
                      <span>SUSCRIBIRME AL PROTOCOLO →</span>
                    )}
                  </button>
                </form>

                {/* Direct email manual alternative option */}
                <div className="text-center pt-2">
                  <span className="text-[9px] text-zinc-500 font-mono uppercase block tracking-widest font-bold">ALTA DIRECTA ALTERNATIVA</span>
                  <a
                    href="mailto:info@vyntas.com?subject=Suscripción%20Directa%20VYNTAS&body=Hola%20equipo%20VYNTAS,%0A%0ADeseo%20darme%20de%20alta%20manualmente%20en%20vuestra%20lista%20de%20difusión%20científica."
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors underline decoration-zinc-800 hover:decoration-emerald-700 pt-1 font-mono font-semibold"
                  >
                    O escríbenos a info@vyntas.com
                  </a>
                </div>

                <div className="pt-4 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500 font-mono font-bold">
                  <div className="flex items-center gap-1.5">
                    <Shield size={12} className="text-zinc-500" />
                    <span>ENCRIPTACIÓN CERO PROPAGADA</span>
                  </div>
                  <span>REF: EDICIÓN LUNES</span>
                </div>
              </div>
            ) : (
              <motion.div
                id="newsletter-success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-zinc-800 bg-[#0a0a0a] text-emerald-500 rounded-none mb-2">
                  <Check size={24} className="stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                  CONEXIÓN ESTABLECIDA
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal max-w-sm mx-auto mb-2">
                  Gracias. Te llegará el primer paper este lunes de forma exclusiva.
                </p>

                {/* Seamless Direct Email Option inside modal */}
                <div className="p-4 border border-zinc-850 bg-[#070707]/80 text-left space-y-2 max-w-xs mx-auto">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">¿Confirmar por email directo?</span>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-sans">
                    También puedes enviar un correo directo para asegurar tu alta inmediata en la base de datos:
                  </p>
                  <a
                    href={`mailto:info@vyntas.com?subject=Confirmación%20Suscripción%20VYNTAS&body=Hola%20equipo%20VYNTAS,%0A%0AConfirmo%20mi%20suscripción%20desde%20la%20plataforma%20con%20el%20correo:%20${encodeURIComponent(email)}`}
                    className="w-full bg-[#111111] hover:bg-zinc-100 hover:text-black border border-zinc-800 hover:border-white text-white font-mono text-[9px] py-2 font-bold uppercase transition-colors text-center block"
                  >
                    Confirmar vía info@vyntas.com
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    id="success-newsletter-close-btn"
                    onClick={onClose}
                    className="bg-[#111111] hover:bg-white hover:text-black border border-zinc-800 hover:border-white text-white transition-all duration-300 text-xs tracking-[0.2em] font-bold px-6 py-3.5 font-mono cursor-pointer shadow-md rounded-none"
                  >
                    VOLVER AL SITIO
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

