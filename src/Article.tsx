import { MODELS, QUESTIONS, GRADES, type Grade } from './experimentData'
import type { Lang } from './content'

export const KIT = '/experimentos/iberdrola-9m-2026/'

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
        <p className="article-kicker">Experimento del 23 de octubre de 2026</p>
        <h1>Le doy a cinco modelos de IA los resultados de Iberdrola y compruebo qué entienden</h1>
        <p className="article-lead">
          Las versiones gratuitas de ChatGPT y Gemini contestaron casi todo bien. De los tres modelos que funcionan en un ordenador propio, el más reciente, Qwen 3.5, acertó 12 de 15 y no se inventó nada. Los otros dos se inventaron datos cuando el informe no los daba.
        </p>
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

      <section className="article-sec">
        <h2>Qué hice</h2>
        <p>
          Iberdrola publicó el 21 de octubre su informe de resultados de enero a septiembre de 2026. Tomé seis páginas del
          informe oficial, en inglés tal como se publica: los datos principales del periodo (páginas 14 a 16) y el análisis de la
          cuenta de resultados (31 a 33). Son unos 20.000 caracteres.
        </p>
        <p>
          Antes de probar ningún modelo escribí 15 preguntas en español con su respuesta correcta sacada del informe: 6 de datos,
          6 de comprensión y 3 trampa, que preguntan por cosas que el informe no dice. Una buena respuesta a una trampa es «eso no
          aparece».
        </p>
        <ul>
          <li>
            <strong>En la nube</strong>, ChatGPT y Gemini gratis, sin iniciar sesión, con las 15 preguntas en un solo mensaje.
          </li>
          <li>
            <strong>En local</strong>, con Ollama 0.40.9: Llama 3.2 (3B), Gemma 3 (4B) y Qwen 3.5 (4B), todos en su versión
            comprimida estándar (Q4_K_M). Una pregunta cada vez, temperatura 0 y un servidor modesto: 2 núcleos, 8 GB de RAM y
            sin tarjeta gráfica.
          </li>
          <li>La misma instrucción para todos: «Responde en español, de forma breve, basándote en este informe».</li>
        </ul>
        <p>
          Corregí yo cada respuesta con cuatro notas: <em>correcta</em>, <em>a medias</em> (acierta lo principal pero le falta
          algo o añade un dato falso), <em>incorrecta</em> e <em>inventada</em> (en una trampa, da un dato que el informe no
          contiene).
        </p>
      </section>

      <section className="article-sec">
        <h2>Lo que más me llamó la atención</h2>
        <ul>
          <li>
            <strong>Las cifras directas no fueron el problema.</strong> Beneficio, EBITDA, inversión, dividendo y deuda: los cinco
            dieron la cifra buena. Los fallos llegan al interpretar.
          </li>
          <li>
            <strong>Las invenciones suenan creíbles.</strong> Preguntados por la plantilla, Llama dijo 73.000 empleados y Gemma,
            36.444. Gemma dio además un beneficio del tercer trimestre de 1.873,3 millones. Nada de eso está en el texto. Un número
            con decimales parece un dato aunque no lo sea.
          </li>
          <li>
            <strong>La compra de Caruna confundió a cuatro de cinco.</strong> Iberdrola invierte 2.000 millones por el 80 %, en una
            operación que valora la empresa entera en unos 5.000. Dos modelos dijeron que paga 5.000 y otros dos lo explicaron de
            forma que parecen 3.000. Solo ChatGPT lo dejó claro.
          </li>
          <li>
            <strong>El modelo local más reciente marca la diferencia.</strong> Qwen 3.5 superó las tres trampas, como ChatGPT y
            Gemini. Llama 3.2 y Gemma 3, más antiguos, cayeron en dos.
          </li>
          <li>
            <strong>Los errores también están fuera de la IA que usas.</strong> Antes de empezar leí un resumen de estos resultados
            en un portal financiero que daba un beneficio de 5.016 millones y un EBITDA de 11.191. El informe oficial dice 5.816,1
            y 11.890,6. Cualquier cifra hay que contrastarla con la fuente.
          </li>
        </ul>
      </section>

      <section className="article-sec">
        <h2>¿Gratis o de pago?</h2>
        <p>
          Para esta tarea no hizo falta pagar: las versiones gratuitas de ChatGPT y Gemini lo resolvieron. Pero hay matices.
        </p>
        <ul>
          <li>
            <strong>Privacidad.</strong> Lo que pegas en la nube sale de tu ordenador. Según la página de precios de ChatGPT, en el
            plan gratuito «el contenido se utiliza para entrenar nuestros modelos», con opción de desactivarlo. Con un informe
            público da igual; con un documento interno de tu empresa, no.
          </li>
          <li>
            <strong>Tamaño.</strong> Los planes gratuitos limitan cuánto texto puedes pegar. Nuestro extracto de seis páginas cupo
            sin problema; con el informe completo, de 95 páginas, no lo probé. Con documentos largos tocará trocear el texto o
            mirar los planes de pago.
          </li>
          <li>
            <strong>Precios en España</strong> (octubre de 2026): ChatGPT Go cuesta 8 € al mes, Plus 23 € y Pro desde 103 €. Google
            AI Plus cuesta 4,99 €, AI Pro 21,99 € y Ultra desde 99,99 €. Lo que añaden es más uso, documentos más largos y modelos
            más potentes. Los planes de pago no los he probado en este experimento.
          </li>
          <li>
            <strong>En local</strong> no pagas licencias ni sale ningún dato, pero necesitas equipo y paciencia. En nuestro servidor
            sin tarjeta gráfica, contestar las 15 preguntas llevó entre 9 y 22 minutos según el modelo. Con tarjeta gráfica irá más
            rápido, pero aquí no lo he medido.
          </li>
        </ul>
        <p>
          Mi conclusión: para documentos públicos, la nube gratuita basta. Para documentos confidenciales, un modelo local
          reciente como Qwen 3.5 es una opción real, siempre revisando las cifras. Los modelos pequeños más antiguos no los
          usaría para esto.
        </p>
      </section>

      <section className="article-sec">
        <h2>Cómo repetirlo</h2>
        <ol className="steps">
          <li>
            <strong>Descarga el informe.</strong> Está en la web de Iberdrola, en el apartado de resultados para accionistas (
            <a href="https://www.iberdrola.com/shareholders-investors/operational-financial-information/results" target="_blank" rel="noopener noreferrer">
              enlace
            </a>
            ). Copia las páginas 14 a 16 y 31 a 33 en un archivo de texto llamado <code>informe.txt</code>.
          </li>
          <li>
            <strong>En la nube:</strong> abre ChatGPT o Gemini y pega, en un solo mensaje, la instrucción, el texto del informe y
            las 15 preguntas de <a href={KIT + 'preguntas.json'}>preguntas.json</a>.
          </li>
          <li>
            <strong>En tu ordenador:</strong> instala Ollama desde <a href="https://ollama.com" target="_blank" rel="noopener noreferrer">ollama.com</a> (en
            Windows pide Windows 10 22H2 o posterior). Abre una terminal y descarga los modelos: <code>ollama pull qwen3.5:4b</code>,{' '}
            <code>ollama pull gemma3:4b</code> y <code>ollama pull llama3.2:3b</code>. Ocupan entre 2 y 3,4 GB cada uno.
          </li>
          <li>
            <strong>Sube la longitud de contexto.</strong> Es el paso que más se olvida. En un equipo sin una tarjeta gráfica grande,
            Ollama lee por defecto unos 4.000 tokens, y este extracto ocupa unos 5.000. Sin subirlo, el modelo solo lee una parte y
            contesta a ciegas. En la aplicación se cambia en Ajustes, con la barra de longitud de contexto; nosotros usamos 12.288.
          </li>
          <li>
            <strong>Para automatizarlo</strong>, deja <code>informe.txt</code>, <code>preguntas.json</code> y{' '}
            <a href={KIT + 'run.py'}>run.py</a> en una carpeta y ejecuta <code>python run.py qwen3.5:4b</code>. Guarda cada
            respuesta con su tiempo. Con 8 GB de RAM, carga los modelos de uno en uno: dos a la vez no caben.
          </li>
          <li>
            <strong>Corrige</strong> comparando con las respuestas correctas de <code>preguntas.json</code>, y compara tus notas con
            las mías en <a href={KIT + 'correccion.json'}>correccion.json</a>.
          </li>
        </ol>
      </section>

      <section className="article-sec">
        <h2>Límites del experimento</h2>
        <ul>
          <li>Es un solo informe y 15 preguntas. Con otros documentos, los resultados pueden cambiar.</li>
          <li>Corregí yo las respuestas. El criterio y todas las respuestas completas están en las descargas para que lo revises.</li>
          <li>En la nube las preguntas fueron juntas y en local, una a una. ChatGPT no indica qué modelo respondió.</li>
          <li>Los modelos se actualizan a menudo: esto es una foto del 23 de octubre de 2026.</li>
          <li>Es divulgación sobre cómo leen los modelos un informe, no un análisis de la empresa ni una recomendación de inversión.</li>
        </ul>
      </section>

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

      <section className="article-sec">
        <h2>Descargas</h2>
        <ul>
          <li>
            <a href={KIT + 'preguntas.json'}>preguntas.json</a>: las 15 preguntas con su respuesta correcta.
          </li>
          <li>
            <a href={KIT + 'run.py'}>run.py</a>: el script para repetir la prueba local con Ollama.
          </li>
          <li>
            <a href={KIT + 'correccion.json'}>correccion.json</a>: la nota de cada respuesta y el motivo.
          </li>
          <li>
            Respuestas completas: <a href={KIT + 'resultados/chatgpt_gratis.txt'}>ChatGPT</a>,{' '}
            <a href={KIT + 'resultados/gemini_gratis.txt'}>Gemini</a>, <a href={KIT + 'resultados/qwen3.5_4b.json'}>Qwen 3.5</a>,{' '}
            <a href={KIT + 'resultados/gemma3_4b.json'}>Gemma 3</a> y <a href={KIT + 'resultados/llama3.2_3b.json'}>Llama 3.2</a>.
          </li>
        </ul>
        <p className="article-small">
          El texto del informe no se redistribuye aquí: es de Iberdrola y está en su web.
        </p>
      </section>

      <section className="article-sec">
        <h2>Fuentes</h2>
        <ul className="sources">
          <li>
            <a href="https://www.iberdrola.com/shareholders-investors/operational-financial-information/results" target="_blank" rel="noopener noreferrer">
              Iberdrola, resultados de los nueve primeros meses de 2026
            </a>
          </li>
          <li>
            <a href="https://chatgpt.com/es-ES/pricing/" target="_blank" rel="noopener noreferrer">ChatGPT, planes y precios</a>
          </li>
          <li>
            <a href="https://one.google.com/about/google-ai-plans/" target="_blank" rel="noopener noreferrer">Google, planes de IA</a>
          </li>
          <li>
            <a href="https://docs.ollama.com/context-length" target="_blank" rel="noopener noreferrer">Ollama, longitud de contexto</a> y{' '}
            <a href="https://docs.ollama.com/windows" target="_blank" rel="noopener noreferrer">requisitos en Windows</a>
          </li>
        </ul>
      </section>
    </article>
  )
}

