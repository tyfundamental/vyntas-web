import { useEffect, useState } from 'react'
import { content, mailto, EMAIL, type Lang } from './content'
import Trace from './Trace'
import Newsletter from './Newsletter'
import Founder from './Founder'
import Legal from './Legal'
import { LINKEDIN } from './pages'

type Page = 'home' | 'fundador' | 'aviso-legal' | 'privacidad'
const PAGES: Page[] = ['fundador', 'aviso-legal', 'privacidad']

function pageFromHash(): Page {
  const h = window.location.hash.slice(1) as Page
  return PAGES.includes(h) ? h : 'home'
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('vyntas-lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <line className="logo-bar" x1="18" y1="11" x2="82" y2="11" />
      <path className="logo-y" d="M50 90 L50 56 L26 27 M50 56 L74 27" />
    </svg>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]
  const [page, setPage] = useState<Page>(pageFromHash)

  useEffect(() => {
    const onHash = () => {
      const next = pageFromHash()
      setPage(next)
      const id = window.location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = next === 'home' && id ? document.getElementById(id) : null
        if (el) el.scrollIntoView()
        else window.scrollTo(0, 0)
      })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('vyntas-lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  return (
    <>
      <a className="skip" href="#main">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <header className="top wrap">
        <a className="brand" href="#top" aria-label="Vyntas">
          <Logo />
          vyntas
        </a>
        <nav aria-label={lang === 'es' ? 'Principal' : 'Main'}>
          <a href="#trabajo">{t.nav.work}</a>
          <a href="#para-quien">{t.nav.audience}</a>
          <a href="#proximos">{t.nav.next}</a>
          <a href="#fundador" aria-current={page === 'fundador' ? 'page' : undefined}>
            {t.nav.about}
          </a>
        </nav>
        <button className="lang" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
          {t.langSwitch}
        </button>
      </header>

      <main id="main">
        {page === 'fundador' && <Founder lang={lang} />}
        {page === 'aviso-legal' && <Legal doc="aviso" lang={lang} />}
        {page === 'privacidad' && <Legal doc="privacidad" lang={lang} />}
        {page === 'home' && (
          <>
        <section className="hero wrap" id="top">
          <div className="hero-text">
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#newsletter">
                {t.hero.primary}
              </a>
              <a className="btn btn-quiet" href={mailto(t.contact.projectSubject)}>
                {t.hero.secondary}
              </a>
            </div>
          </div>
          <Trace markers={t.hero.markers} label={t.hero.traceLabel} />
        </section>

        <section className="work wrap" id="trabajo">
          <h2>{t.work.title}</h2>
          <dl>
            {t.work.items.map((it) => (
              <div className="work-row" key={it.name}>
                <dt>{it.name}</dt>
                <dd>{it.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="audience" id="para-quien">
          <div className="wrap">
            <h2>{t.audience.title}</h2>
            <div className="groups">
              {t.audience.groups.map((g, i) => (
                <article key={g.name}>
                  <h3>{g.name}</h3>
                  <p>{g.text}</p>
                  <a href={i === 2 ? '#newsletter' : mailto(g.subject)}>{g.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lines wrap" aria-labelledby="lines-title">
          <h2 id="lines-title">{t.lines.title}</h2>
          <p className="lines-intro">{t.lines.intro}</p>
          <div className="lines-grid">
            {[t.lines.markets, t.lines.content].map((l) => (
              <article className="line" id={l.id} key={l.id}>
                <h3>{l.name}</h3>
                <p>{l.text}</p>
                <p className="line-note">{l.disclaimer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="next wrap" id="proximos">
          <div className="next-head">
            <h2>{t.next.title}</h2>
            <p>{t.next.note}</p>
          </div>
          <ul>
            {t.next.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </section>

        <section className="about wrap" id="quien">
          <h2>{t.about.title}</h2>
          <div className="about-body">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <a className="about-more" href="#fundador">
              {t.about.more}
            </a>
          </div>
        </section>

        <Newsletter lang={lang} />

        <section className="contact" id="contacto">
          <div className="wrap contact-inner">
            <div>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <a className="contact-mail" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
            <div className="actions">
              <a className="btn btn-amber" href={mailto(t.contact.projectSubject)}>
                {t.contact.project}
              </a>
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <aside className="wrap meaning" aria-label={t.meaning.label}>
        <Logo size={36} />
        <p>
          <strong>{t.meaning.label}.</strong> {t.meaning.text}
        </p>
      </aside>

      <footer className="wrap foot">
        <span>
          © {new Date().getFullYear()} {t.footer.rights}
        </span>
        <nav className="foot-links" aria-label={lang === 'es' ? 'Legal' : 'Legal'}>
          <a href="#fundador">{t.footer.founder}</a>
          <a href="#aviso-legal">{t.footer.legal}</a>
          <a href="#privacidad">{t.footer.privacy}</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
        <span>{t.footer.youtube}</span>
      </footer>
    </>
  )
}
