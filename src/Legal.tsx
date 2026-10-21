import { legal, legalNoteEn } from './pages'
import type { Lang } from './content'

export default function Legal({ doc, lang }: { doc: 'aviso' | 'privacidad'; lang: Lang }) {
  const d = legal[doc]
  return (
    <article className="legal wrap">
      <a className="back" href="#top">
        {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
      </a>
      <h1>{d.title}</h1>
      <p className="legal-updated">{d.updated}</p>
      {legalNoteEn[lang] && <p className="legal-note">{legalNoteEn[lang]}</p>}
      {d.blocks.map((b) => (
        <section key={b.h}>
          <h2>{b.h}</h2>
          {b.p.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </article>
  )
}
