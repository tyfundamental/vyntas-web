import type { Lang } from './content'

export type ExplainerId = 'navier-stokes' | 'riemann'

function Back({ lang }: { lang: Lang }) {
  return (
    <>
      <a className="back" href="#explicada">
        {lang === 'es' ? 'Volver a Ciencia explicada' : 'Back to Science explained'}
      </a>
      {lang === 'en' && <p className="article-note">This article is available in Spanish only.</p>}
    </>
  )
}

function Box({ title, children, tone = 'key' }: { title: string; children: React.ReactNode; tone?: 'key' | 'class' }) {
  return (
    <aside className={`ex-box ex-box-${tone}`}>
      <p className="ex-box-title">{title}</p>
      {children}
    </aside>
  )
}

/* Dibujo: un remolino que se cierra y se estira, cada vez más rápido */
function VortexFigure() {
  const turns = 5
  const pts: string[] = []
  for (let i = 0; i <= 400; i++) {
    const t = i / 400
    const a = t * turns * 2 * Math.PI
    const r = 120 * (1 - t) ** 1.4 + 3
    const x = 170 + r * Math.cos(a)
    const y = 140 + r * Math.sin(a) * 0.42 - t * 95
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return (
    <figure className="ex-figure">
      <svg viewBox="0 0 520 260" role="img" aria-label="Un remolino que se enrolla hacia dentro y se estira hacia arriba; cuanto más se cierra, más rápido gira">
        <polyline className="ex-stroke" points={pts.join(' ')} />
        <circle className="ex-dot" cx="170" cy="45" r="5" />
        <text className="ex-label" x="300" y="70">El centro gira cada vez</text>
        <text className="ex-label" x="300" y="92">más rápido…</text>
        <text className="ex-label ex-label-strong" x="300" y="122">¿hasta el infinito?</text>
        <line className="ex-guide" x1="296" y1="62" x2="182" y2="47" />
        <text className="ex-label ex-muted" x="300" y="200">Por fuera, gira despacio</text>
        <line className="ex-guide" x1="296" y1="195" x2="262" y2="165" />
      </svg>
      <figcaption>
        Idea simplificada del remolino de la demostración: se enrolla hacia dentro y se estira, como el agua que se va por
        el desagüe.
      </figcaption>
    </figure>
  )
}

/* Dibujo: la franja donde viven los ceros y la línea central de Riemann */
function StripFigure() {
  const X = (v: number) => 60 + v * 400
  const zeros = [30, 62, 88, 120, 142, 170, 196, 214]
  return (
    <figure className="ex-figure">
      <svg viewBox="0 0 520 290" role="img" aria-label="Una franja vertical entre 0 y 1. Dentro, una franja más estrecha entre 1/12 y 11/12. En el centro, la línea 1/2 donde están todos los ceros encontrados.">
        <rect className="ex-band-wide" x={X(0)} y="20" width={X(1) - X(0)} height="220" />
        <rect className="ex-band-narrow" x={X(1 / 12)} y="20" width={X(11 / 12) - X(1 / 12)} height="220" />
        <line className="ex-critical" x1={X(0.5)} y1="14" x2={X(0.5)} y2="246" />
        {zeros.map((y) => (
          <circle key={y} className="ex-dot" cx={X(0.5)} cy={240 - y} r="5" />
        ))}
        <text className="ex-label" x={X(0)} y="266" textAnchor="middle">0</text>
        <text className="ex-label" x={X(1 / 12)} y="282" textAnchor="middle">1/12</text>
        <text className="ex-label ex-label-strong" x={X(0.5)} y="266" textAnchor="middle">1/2</text>
        <text className="ex-label" x={X(11 / 12)} y="282" textAnchor="middle">11/12</text>
        <text className="ex-label" x={X(1)} y="266" textAnchor="middle">1</text>
      </svg>
      <figcaption>
        Los ceros de Riemann están dentro de la franja ancha (de 0 a 1). En 2026 una IA demostró que en realidad caben en la
        franja más oscura. La hipótesis dice algo mucho más fuerte: que todos están exactamente en la línea del centro.
      </figcaption>
    </figure>
  )
}

const PRIMES_TABLE: [string, string][] = [
  ['10', '4'],
  ['100', '25'],
  ['1.000', '168'],
  ['10.000', '1.229'],
  ['100.000', '9.592'],
  ['1.000.000', '78.498'],
]

export function NavierStokes({ lang }: { lang: Lang }) {
  return (
    <article className="article wrap">
      <Back lang={lang} />
      <header className="article-head">
        <p className="article-kicker">Ciencia explicada · Para empezar desde cero</p>
        <h1>Navier-Stokes: el problema del millón que una IA dice haber resuelto</h1>
        <p className="article-lead">
          Unas ecuaciones de hace 200 años describen cómo se mueven el agua y el aire. Durante décadas nadie supo si podían
          “romperse”. En septiembre de 2026, OpenAI publicó una demostración hecha por su IA que dice que sí. Te lo explico sin
          fórmulas.
        </p>
      </header>

      <Box title="En una frase">
        <p>
          Las ecuaciones de Navier-Stokes predicen cómo fluyen los líquidos y los gases; la pregunta era si alguna vez pueden
          dar un resultado imposible, como un remolino que gira infinitamente rápido.
        </p>
      </Box>

      <section className="article-sec">
        <h2>1. Unas ecuaciones que están en todas partes</h2>
        <p>
          A principios del siglo XIX, el ingeniero francés Claude-Louis Navier y el físico irlandés George Stokes escribieron
          unas ecuaciones para describir cómo se mueve un fluido, es decir, cualquier cosa que fluye: el agua, el aire, el humo o
          la sangre.
        </p>
        <p>
          La idea de fondo la conoces de Física: es la segunda ley de Newton, fuerza igual a masa por aceleración, aplicada a
          cada trocito de fluido. Cada gota empuja a sus vecinas, la presión la empuja a ella y el rozamiento interno la frena.
        </p>
        <p>
          Se usan cada día para diseñar aviones y coches, para predecir el tiempo, para estudiar cómo circula la sangre por las
          venas o cómo se mueven los océanos.
        </p>
      </section>

      <section className="article-sec">
        <h2>2. La pregunta del millón de dólares</h2>
        <p>
          Que unas ecuaciones funcionen muy bien en la práctica no significa que entendamos todo lo que pueden hacer. La gran
          duda era esta: si empiezas con un fluido tranquilo y sin nada raro, <strong>¿pueden las ecuaciones llegar a decir que
          en algún punto la velocidad se hace infinita?</strong>
        </p>
        <p>
          A eso los matemáticos lo llaman una <strong>singularidad</strong> o “explosión”. En el mundo real nada se mueve
          infinitamente rápido, así que si las ecuaciones lo predijeran querría decir que, en ese punto, dejan de describir bien
          la realidad.
        </p>
        <p>
          Hay algo que juega en contra de la explosión: la <strong>viscosidad</strong>, que es lo “espeso” que es un fluido. La
          miel es muy viscosa y el agua poco. La viscosidad frena y suaviza el movimiento, como un freno que siempre está algo
          pisado. La pregunta era si ese freno basta siempre.
        </p>
        <p>
          En el año 2000, el Instituto Clay de Matemáticas eligió este problema como uno de los siete{' '}
          <strong>Problemas del Milenio</strong>, con un premio de un millón de dólares para quien lo resolviera. Hasta 2026 solo
          se había resuelto uno de los siete: la conjetura de Poincaré, que demostró el matemático ruso Grigori Perelman.
        </p>
      </section>

      <section className="article-sec">
        <h2>3. Qué pasó en 2026</h2>
        <p>
          El 8 de septiembre de 2026, OpenAI (la empresa de ChatGPT) publicó una demostración que, según ellos, resuelve el
          problema. La respuesta es que <strong>sí, las ecuaciones pueden “explotar”</strong>.
        </p>
        <p>
          La hizo un modelo de IA interno, todavía en entrenamiento y más potente que los que se pueden usar en público. No fue
          una sola IA pensando: fueron unos 10.000 “agentes” (copias de la IA que trabajan a la vez y se pasan ideas) durante
          unas 88 horas.
        </p>
        <VortexFigure />
        <p>
          La solución que encontraron es un <strong>remolino</strong> que se enrolla hacia dentro y se estira, como el agua del
          desagüe. Piensa en una patinadora que gira y recoge los brazos: cuanto más se cierra, más rápido gira. En este remolino,
          la velocidad del centro crece sin límite en un tiempo finito, aunque la energía total del fluido no se dispara.
        </p>
        <p>
          Un detalle importante: el remolino necesita una <strong>fuerza externa suave</strong> que lo vaya empujando (como una
          mano que remueve el agua con mucho cuidado). Las reglas oficiales del premio permiten ese tipo de fuerza, pero no es lo
          mismo que demostrar que el agua explota sola, sin ayuda.
        </p>
      </section>

      <section className="article-sec">
        <h2>4. ¿Cómo sabemos que no se lo ha inventado?</h2>
        <p>
          Las IA a veces se inventan cosas, así que no basta con fiarse. OpenAI publicó la demostración en dos formatos: uno
          escrito para matemáticos y otro en <strong>Lean</strong>, un programa que comprueba demostraciones paso a paso.
        </p>
        <Box title="¿Qué es Lean?">
          <p>
            Imagina un corrector como el de un procesador de textos, pero para la lógica: no te deja pasar al paso siguiente si
            no se deduce del anterior. Si Lean acepta una demostración, sus pasos están bien encadenados.
          </p>
        </Box>
        <p>
          Pero Lean tiene un límite: comprueba que los pasos son correctos, no que la pregunta que le has escrito sea
          exactamente la del premio. Revisar eso es trabajo humano y, según la prensa especializada, los expertos en fluidos aún
          lo estaban haciendo semanas después.
        </p>
      </section>

      <section className="article-sec">
        <h2>5. Lo que hay que saber antes de aplaudir</h2>
        <ul className="ex-list">
          <li>
            <strong>Los humanos estaban muy cerca.</strong> Los matemáticos Tristan Buckmaster (Universidad de Nueva York) y
            Levent Alpöge habían publicado ese mismo día explosiones en ecuaciones parecidas, también con ayuda de IA. Hubo una
            polémica sobre quién merece el mérito, y OpenAI negó haberse aprovechado de su trabajo.
          </li>
          <li>
            <strong>Hay matemáticos españoles en esta historia.</strong> La idea de usar una fuerza externa sigue una línea de
            trabajo de Diego Córdoba y Luis Martínez Zoroa. Y Javier Gómez-Serrano, en la Universidad Brown, lleva años
            colaborando con Google DeepMind: en 2025 usaron redes neuronales para encontrar explosiones en ecuaciones de fluidos
            parecidas.
          </li>
          <li>
            <strong>Resolver no es lo mismo que entender.</strong> Varios matemáticos se han quejado de que la demostración es muy
            difícil de leer y de que, de momento, se ha aprendido poco sobre <em>por qué</em> pasa.
          </li>
          <li>
            <strong>OpenAI ha dicho que no reclamará el millón de dólares.</strong>
          </li>
        </ul>
      </section>

      <section className="article-sec">
        <h2>6. Por qué importa</h2>
        <p>
          Es la primera vez que una empresa dice que una IA ha resuelto uno de los Problemas del Milenio. Si los expertos lo
          confirman, demuestra que las IA ya pueden hacer matemáticas nuevas al nivel más alto, y abre una pregunta para el
          futuro: cómo se trabaja en ciencia cuando una máquina encuentra respuestas que a las personas les cuesta entender.
        </p>
      </section>

      <Box title="Para hacer en clase" tone="class">
        <ol>
          <li>
            <strong>Viscosidad.</strong> Deja caer a la vez una canica en un vaso de agua y otra en uno de aceite o miel. ¿Cuál
            frena más? Esa es la viscosidad, el “freno” de las ecuaciones.
          </li>
          <li>
            <strong>Remolino en botella.</strong> Llena una botella de agua, ponla boca abajo sobre un barreño y gírala en
            círculos. Observa el remolino: el centro gira más rápido que el borde.
          </li>
          <li>
            <strong>Para debatir.</strong> Si una IA demuestra algo que ninguna persona entiende del todo, ¿lo consideramos
            conocimiento? ¿Quién debería llevarse el mérito?
          </li>
        </ol>
      </Box>

      <section className="article-sec">
        <h2>Fuentes</h2>
        <ul className="sources">
          <li>
            <a href="https://openai.com/index/navier-stokes-solution/" target="_blank" rel="noopener noreferrer">
              OpenAI, “On the Navier–Stokes Millennium Prize Problem” (8 de septiembre de 2026)
            </a>
          </li>
          <li>
            <a href="https://www.technologyreview.com/2026/09/08/1143747/" target="_blank" rel="noopener noreferrer">
              MIT Technology Review, la polémica y el futuro de las matemáticas (8 de septiembre de 2026)
            </a>
          </li>
          <li>
            <a href="https://www.npr.org/2026/09/22/nx-s1-5968588/openai-navier-stokes-problem-mathematicians-learn-little" target="_blank" rel="noopener noreferrer">
              NPR, qué han aprendido los matemáticos de la demostración (22 de septiembre de 2026)
            </a>
          </li>
          <li>
            <a href="https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/" target="_blank" rel="noopener noreferrer">
              Google DeepMind, singularidades en ecuaciones de fluidos con redes neuronales (18 de septiembre de 2025)
            </a>
          </li>
          <li>
            <a href="https://www.brown.edu/news/2026-08-26/javier-gomez-serrano-lab" target="_blank" rel="noopener noreferrer">
              Universidad Brown, el trabajo de Javier Gómez-Serrano con IA (26 de agosto de 2026)
            </a>
          </li>
        </ul>
        <p className="article-small">
          Artículo de divulgación. Refleja lo publicado hasta noviembre de 2026; la revisión de la demostración por parte de la
          comunidad matemática sigue en curso.
        </p>
      </section>
    </article>
  )
}

export function Riemann({ lang }: { lang: Lang }) {
  return (
    <article className="article wrap">
      <Back lang={lang} />
      <header className="article-head">
        <p className="article-kicker">Ciencia explicada · Para empezar desde cero</p>
        <h1>La hipótesis de Riemann: el misterio de los números primos y lo que la IA ha conseguido</h1>
        <p className="article-lead">
          Es probablemente el problema sin resolver más famoso de las matemáticas. Va de los números primos, lleva abierto desde
          1859 y en 2026 dos inteligencias artificiales han dado pasos importantes hacia él. Pero todavía no está resuelto.
        </p>
      </header>

      <Box title="En una frase">
        <p>
          Riemann descubrió que el reparto de los números primos está controlado por unos puntos especiales, y adivinó que todos
          esos puntos están en una misma línea recta. Nadie ha conseguido demostrarlo.
        </p>
      </Box>

      <section className="article-sec">
        <h2>1. Los números primos, los ladrillos de los números</h2>
        <p>
          Un número primo es el que solo se puede dividir entre 1 y entre sí mismo: 2, 3, 5, 7, 11, 13… Todos los demás números
          se construyen multiplicando primos (por ejemplo, 12 = 2 × 2 × 3), así que son como los ladrillos de las matemáticas.
        </p>
        <p>
          El problema es que aparecen de forma aparentemente desordenada. A veces hay dos casi juntos (11 y 13) y a veces hay
          huecos largos sin ninguno. Pero, si los cuentas, se ve que cada vez son más escasos:
        </p>
        <div className="table-scroll">
          <table className="data-table ex-table">
            <thead>
              <tr>
                <th scope="col">Hasta el número…</th>
                <th scope="col" className="num">Cuántos primos hay</th>
              </tr>
            </thead>
            <tbody>
              {PRIMES_TABLE.map(([n, p]) => (
                <tr key={n}>
                  <td>{n}</td>
                  <td className="num">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Hay una regla aproximada que predice bastante bien estas cantidades. La gran pregunta es <strong>cuánto se equivoca
          esa regla</strong>. Ahí entra Riemann.
        </p>
      </section>

      <section className="article-sec">
        <h2>2. La máquina de Riemann</h2>
        <p>
          En 1859, el matemático alemán Bernhard Riemann estudió una función, la <strong>función zeta</strong>. Piensa en ella
          como una máquina: le das un número y te devuelve otro.
        </p>
        <p>
          Lo interesante son los números que, al meterlos, hacen que la máquina devuelva cero. Se llaman <strong>ceros</strong>.
          Riemann descubrió algo asombroso: esos ceros controlan cómo se reparten los primos. Es como la música: un acorde suena
          como suena por las notas que lo forman. Los primos serían la canción y los ceros, las notas.
        </p>
        <p>
          Hay un detalle: los números que se meten en esta máquina no son los de toda la vida, sino números con dos partes, como
          las dos coordenadas de un punto en un mapa. Por eso cada cero se puede dibujar como un punto en un plano.
        </p>
      </section>

      <section className="article-sec">
        <h2>3. La hipótesis: todos en fila</h2>
        <p>
          Ya se sabía que los ceros importantes están en una franja estrecha del mapa (entre la línea 0 y la línea 1). Riemann
          sospechó algo mucho más preciso: <strong>que todos están exactamente en la línea del medio, la línea 1/2</strong>.
        </p>
        <p>
          Si es verdad, la regla aproximada de los primos se equivoca lo menos posible, y cientos de resultados matemáticos que
          hoy se dan “por si acaso es cierta” quedarían demostrados de golpe.
        </p>
        <p>
          Con ordenadores se han comprobado billones de ceros, y todos están en la línea. ¿Por qué no basta? Porque hay
          infinitos. Comprobar muchos casos no es demostrar: bastaría con un solo cero fuera de la línea para que la hipótesis
          fuera falsa. Por eso es uno de los Problemas del Milenio, con un premio de un millón de dólares.
        </p>
      </section>

      <section className="article-sec">
        <h2>4. Lo que han hecho las IA en 2026</h2>
        <StripFigure />
        <p>
          <strong>Agosto: más ceros garantizados en la línea.</strong> Anthropic (la empresa de Claude) publicó que un modelo
          suyo aún no disponible no consiguió demostrar la hipótesis, pero sí mejoró un resultado de hace décadas: se sabía que,
          como mínimo, alrededor del 41,6&nbsp;% de los ceros están en la línea, y la IA demostró que son al menos el 67,2&nbsp;%. La
          demostración se comprobó con Lean, un programa que verifica la lógica paso a paso, y la revisaron expertos externos.
        </p>
        <p>
          <strong>Octubre: una franja más estrecha.</strong> OpenAI anunció que su IA había demostrado una versión más débil de la
          hipótesis, la llamada “cuasi-hipótesis de Riemann”: todos los ceros están en una franja más estrecha que la de 0 a 1
          (entre 1/12 y 11/12). Varios especialistas creen que es correcta, aunque otros, como Peter Sarnak, no la darán por
          buena hasta que alguien revise todos los detalles.
        </p>
        <Box title="¿Por qué no basta con estos avances?">
          <p>
            La hipótesis es de todo o nada. Aunque se demostrara que el 99,9&nbsp;% de los ceros están en la línea, o que la franja es
            estrechísima, faltaría probar que no hay <em>ni uno solo</em> fuera de la línea 1/2.
          </p>
        </Box>
      </section>

      <section className="article-sec">
        <h2>5. Lo que sigue abierto</h2>
        <p>
          La hipótesis de Riemann sigue sin demostrar. Los propios expertos dudan de que los métodos de 2026 puedan estrecharse
          hasta llegar a la línea del medio. Lo que sí ha cambiado es la forma de trabajar: las IA ya proponen ideas nuevas y las
          entregan en un formato que un ordenador puede comprobar.
        </p>
      </section>

      <Box title="Para hacer en clase" tone="class">
        <ol>
          <li>
            <strong>La criba de Eratóstenes.</strong> Escribe los números del 1 al 100. Tacha los múltiplos de 2 (menos el 2),
            luego los de 3, 5 y 7. Los que quedan son los primos. Comprueba que hay 25.
          </li>
          <li>
            <strong>Primos cada vez más raros.</strong> Cuenta cuántos primos hay entre 1 y 50 y entre 51 y 100. ¿En qué tramo hay
            más? Compáralo con la tabla de arriba.
          </li>
          <li>
            <strong>Para debatir.</strong> Se han comprobado billones de casos y todos cumplen la hipótesis. ¿Por qué un
            matemático no se conforma con eso? ¿Pasa lo mismo en otras ciencias, como la Física?
          </li>
        </ol>
      </Box>

      <section className="article-sec">
        <h2>Fuentes</h2>
        <ul className="sources">
          <li>
            <a href="https://quantamagazine.org/ai-proved-the-quasi-riemann-hypothesis-what-happens-now-20261019" target="_blank" rel="noopener noreferrer">
              Quanta Magazine, la IA demuestra la cuasi-hipótesis de Riemann (19 de octubre de 2026)
            </a>
          </li>
          <li>
            <a href="https://scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math" target="_blank" rel="noopener noreferrer">
              Scientific American, lo que hizo y no hizo Claude con la hipótesis de Riemann (agosto de 2026)
            </a>
          </li>
          <li>
            <a href="https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/" target="_blank" rel="noopener noreferrer">
              TechCrunch, el avance del modelo de Anthropic (11 de agosto de 2026)
            </a>
          </li>
        </ul>
        <p className="article-small">
          Artículo de divulgación. Refleja lo publicado hasta noviembre de 2026; ninguno de los dos avances ha pasado todavía la
          revisión formal por pares de una revista.
        </p>
      </section>
    </article>
  )
}
