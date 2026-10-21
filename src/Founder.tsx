import { founder } from './pages'
import { mailto, type Lang } from './content'

export default function Founder({ lang }: { lang: Lang }) {
  const f = founder[lang]
  const Entries = ({ items }: { items: typeof f.experience }) => (
    <ol className="cv-list">
      {items.map((e) => (
        <li key={e.what + e.when}>
          <span className="cv-when">{e.when}</span>
          <div className="cv-body">
            <h4>{e.what}</h4>
            <p className="cv-where">{e.where}</p>
            {e.detail && <p className="cv-detail">{e.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  )

  return (
    <article className="founder wrap">
      <a className="back" href="#top">
        {f.back}
      </a>
      <header className="founder-head">
        <p className="founder-role">{f.role}</p>
        <h1>{f.title}</h1>
        <p className="founder-summary">{f.summary}</p>
        <a className="btn btn-primary" href={mailto(lang === 'es' ? 'Contacto con el fundador' : 'Contact the founder')}>
          {f.contact}
        </a>
      </header>

      <section className="cv-section">
        <h2>{f.sections.experience}</h2>
        <Entries items={f.experience} />
      </section>

      <section className="cv-section">
        <h2>{f.sections.education}</h2>
        <Entries items={f.education} />
      </section>

      <section className="cv-section">
        <h2>{f.sections.research}</h2>
        <p className="cv-text">{f.research}</p>
      </section>

      <div className="cv-cols">
        <section className="cv-section">
          <h2>{f.sections.skills}</h2>
          <ul className="cv-plain">
            {f.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section className="cv-section">
          <h2>{f.sections.languages}</h2>
          <ul className="cv-plain">
            {f.languages.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h2 className="cv-sub">{f.sections.other}</h2>
          <p className="cv-text">{f.other}</p>
        </section>
      </div>
    </article>
  )
}
