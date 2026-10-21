import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Contador de visitas: Cloudflare Web Analytics (sin cookies).
// Si el dominio está en Cloudflare se puede activar sin código desde el panel;
// si no, basta con definir VITE_CF_BEACON_TOKEN con el token que da Cloudflare.
const beacon = import.meta.env.VITE_CF_BEACON_TOKEN as string | undefined
if (beacon) {
  const s = document.createElement('script')
  s.defer = true
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  s.dataset.cfBeacon = JSON.stringify({ token: beacon })
  document.head.appendChild(s)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
