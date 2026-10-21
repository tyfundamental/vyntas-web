import { useState, type FormEvent } from 'react'
import { content, EMAIL, type Lang } from './content'

// Endpoint del formulario del proveedor de newsletter (MailerLite, Brevo, Buttondown…).
// Se configura con la variable de entorno VITE_NEWSLETTER_URL en Cloudflare.
// VITE_NEWSLETTER_FIELD es el nombre del campo de correo que espera el proveedor
// (MailerLite: "fields[email]", Brevo: "EMAIL", Buttondown: "email").
const ENDPOINT = import.meta.env.VITE_NEWSLETTER_URL as string | undefined
const FIELD = (import.meta.env.VITE_NEWSLETTER_FIELD as string | undefined) || 'fields[email]'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function Newsletter({ lang }: { lang: Lang }) {
  const t = content[lang].newsletter
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error')
      setMessage(t.invalid)
      return
    }
    if (!consent) {
      setStatus('error')
      setMessage(t.needConsent)
      return
    }
    if (!ENDPOINT) {
      // Sin proveedor configurado todavía: la suscripción llega por correo.
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Alta newsletter')}&body=${encodeURIComponent(value)}`
      setStatus('ok')
      setMessage(t.ok)
      return
    }
    setStatus('sending')
    try {
      const body = new FormData()
      body.append(FIELD, value)
      body.append('ml-submit', '1')
      body.append('anticsrf', 'true')
      await fetch(ENDPOINT, { method: 'POST', body, mode: 'no-cors' })
      setStatus('ok')
      setMessage(t.ok)
      setEmail('')
      setConsent(false)
    } catch {
      setStatus('error')
      setMessage(t.error)
    }
  }

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="nl-title">
      <div className="wrap newsletter-inner">
        <div>
          <h2 id="nl-title">{t.title}</h2>
          <p className="nl-text">{t.text}</p>
        </div>
        <form className="nl-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="nl-email">{t.label}</label>
          <div className="nl-row">
            <input
              id="nl-email"
              type="email"
              autoComplete="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status === 'error' && message === t.invalid}
              aria-describedby="nl-status"
            />
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? t.sending : t.submit}
            </button>
          </div>
          <div className="nl-consent">
            <input id="nl-consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <label htmlFor="nl-consent">
              {t.consent} <a href="#privacidad">{t.privacy}</a>.
            </label>
          </div>
          <p id="nl-status" className={`nl-status ${status}`} role="status" aria-live="polite">
            {status === 'ok' || status === 'error' ? message : ''}
          </p>
        </form>
      </div>
    </section>
  )
}
