import { MODELS, QUESTIONS, GRADES, type Grade } from './experimentData'
import type { Lang } from './content'

const KIT = '/experimentos/iberdrola-9m-2026/'

const gradeLabel: Record<Grade, string> = {
  correcta: 'Correcta',
  parcial: 'A medias',
  incorrecta: 'Incorrecta',
  inventada: 'Inventada',
}

function ScoreChart() {
  const rowH = 34
  const gap = 18
  const labelW = 210
  const barW = 520
  const unit = barW / 15
  const h = MODELS.length * (rowH + gap) + 8
  return (
    <figure className="score-figure">
      <div className="score-scroll">
        <svg
          className="score-chart"
          viewBox={`0 0 ${labelW + barW + 60} ${h}`}
          role="img"
          aria-label="Resultado de cada modelo en las 15 preguntas: correctas, a medias, incorrectas e inventadas"
        >
          {MODELS.map((m, i) => {
            const y = i * (rowH + gap)
            let x = labelW
            return (
              <g key={m.key}>
                <text className="sc-label" x={0} y={y + rowH / 2 - 3}>
                  {m.name}
                </text>
                <text className="sc-sub" x={0} y={y + rowH / 2 + 14}>
                  {m.where}
                </text>
                {GRADES.map((g) => {
                  const n = m.counts[g]
                  if (!n) return null
                  const w = n * unit
                  const rect = (
                    <g key={g}>
                      <rect className={`sc-${g}`} x={x + 1} y={y} width={w - 2} height={rowH} rx={4} />
                      {w > 24 && (
                        <text className={`sc-n sc-n-${g}`} x={x + w / 2} y={y + rowH / 2 + 5} textAnchor="middle">
                          {n}
                        </text>
                      )}
                    </g>
                  )
                  x += w
                  return rect
                })}
                <text className="sc-total" x={labelW + barW + 10} y={y + rowH / 2 + 5}>
                  {m.counts.correcta}/15
                </text>
              </g>
            )
          })}
        </svg>
      </div>
      <figcaption className="score-legend">
        {GRADES.map((g) => (
          <span key={g}>
            <i className={`sw sc-${g}`} aria-hidden="true" />
            {gradeLabel[g]}
          </span>
        ))}
      </figcaption>
    </figure>
  )
}

export default function Article({ lang }: { lang: Lang }) {
  return (
    <article className="article wrap">
      <a className="back" href="#top">
        {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
      </a>
      {lang === 'en' && <p className="article-note">This article is available in Spanish only.</p>}

      <header className="article-head">
        <p className="article-kicker">Experimento · 23 de octubre de 2026</p>
        <h1>Le doy a cinco modelos de IA los resultados de Iberdrola y compruebo qué entienden</h1>
        <p className="article-lead">{/* LEAD */}</p>
      </header>

      <section className="article-sec">
        <h2>El resultado</h2>
        <ScoreChart />
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Modelo</th>
                <th scope="col">Dónde funciona</th>
                <th scope="col">Coste</th>
                <th scope="col" className="num">Correctas</th>
                <th scope="col" className="num">Trampas superadas</th>
                <th scope="col" className="num">Tiempo por respuesta</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((m) => (
                <tr key={m.key}>
                  <th scope="row">{m.name}</th>
                  <td>{m.where}</td>
                  <td>{m.cost}</td>
                  <td className="num">{m.counts.correcta} de 15</td>
                  <td className="num">{m.traps} de 3</td>
                  <td className="num">{m.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* BODY */}

      <section className="article-sec">
        <h2>Pregunta por pregunta</h2>
        <p>Cada pregunta con la respuesta correcta según el informe y la nota de cada modelo. Las respuestas completas están en las descargas.</p>
        <div className="qa-list">
          {QUESTIONS.map((q) => (
            <details key={q.id} className="qa">
              <summary>
                <span className="qa-n">{q.id}</span>
                <span className="qa-q">{q.pregunta}</span>
                <span className="qa-type">{q.tipo === 'trampa' ? 'Trampa' : q.tipo === 'dato' ? 'Dato' : 'Comprensión'}</span>
              </summary>
              <p className="qa-a">
                <strong>Respuesta correcta:</strong> {q.respuesta}
              </p>
              <ul className="qa-grades">
                {MODELS.map((m) => {
                  const [g, note] = q.grades[m.key]
                  return (
                    <li key={m.key}>
                      <span className={`pill pill-${g}`}>{gradeLabel[g]}</span>
                      <span className="qa-model">{m.name}</span>
                      {note && <span className="qa-note">{note}</span>}
                    </li>
                  )
                })}
              </ul>
            </details>
          ))}
        </div>
      </section>
    </article>
  )
}

export { KIT }
