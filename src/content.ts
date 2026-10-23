export type Lang = 'es' | 'en'

export const EMAIL = 'info@vyntas.com'

const es = {
  nav: { work: 'Qué hago', markets: 'Mercados', content: 'Contenidos', audience: 'Para quién', next: 'Próximos análisis', about: 'Fundador', contact: 'Contacto' },
  newsletter: {
    title: 'La newsletter de Vyntas',
    text: 'Un correo cuando sale un análisis nuevo: qué he probado, qué ha funcionado y qué no. Sin spam y con baja en un clic.',
    label: 'Tu correo electrónico',
    placeholder: 'nombre@empresa.com',
    consent: 'Acepto recibir la newsletter y he leído la',
    privacy: 'política de privacidad',
    submit: 'Suscribirme',
    sending: 'Enviando…',
    ok: 'Suscripción recibida. Revisa tu correo para confirmarla.',
    invalid: 'Escribe un correo válido, por ejemplo nombre@empresa.com.',
    needConsent: 'Marca la casilla de consentimiento para poder suscribirte.',
    error: 'No se ha podido completar la suscripción. Inténtalo de nuevo o escribe a info@vyntas.com.',
  },
  hero: {
    title: 'La IA, probada antes de contarla.',
    lead:
      'Divulgación práctica y científica sobre inteligencia artificial, en español. Pruebo las herramientas nuevas, explico cómo funcionan por dentro y cuento qué están haciendo de verdad las empresas con ellas.',
    primary: 'Recibir los análisis por correo',
    secondary: 'Hablar de un proyecto',
    traceLabel: 'Lo que miro en cada prueba',
    markers: ['Coste', 'Velocidad', 'Privacidad', 'Fiabilidad', '¿Merece la pena?'],
  },
  work: {
    title: 'Qué vas a encontrar aquí',
    items: [
      {
        name: 'Pruebas',
        text: 'Herramientas y modelos nuevos usados en tareas reales, con lo que cuestan, lo que tardan y dónde fallan. Sin notas de prensa recalentadas.',
      },
      {
        name: 'Ciencia',
        text: 'Cómo funciona un modelo de lenguaje, por qué alucina, qué significa entrenar o cuantizar. Explicado con rigor y sin dar por hecho que sabes matemáticas.',
      },
      {
        name: 'Casos de empresa',
        text: 'Qué hacen con IA las empresas de aquí: agroalimentarias, industria, pymes. Qué funcionó, qué no y cuánto costó.',
      },
      {
        name: 'IA privada',
        text: 'Modelos abiertos instalados en tu propio servidor, para que los datos de tu empresa no salgan de ella. Es lo que más pruebo y lo que más me preguntan.',
      },
    ],
  },
  audience: {
    title: 'Para quién es',
    groups: [
      {
        name: 'Empresas',
        text: 'Si quieres usar IA con tus propios datos sin mandarlos a la nube, te ayudo a decidir si tiene sentido, a montarla y a medir si compensa.',
        cta: 'Contar mi caso',
        subject: 'Proyecto de IA para mi empresa',
      },
      {
        name: 'Docentes',
        text: 'Qué herramientas de IA sirven en clase, cómo evaluar cuando el alumnado tiene un asistente en el bolsillo y formación para claustros.',
        cta: 'Pedir información',
        subject: 'IA en el aula',
      },
      {
        name: 'Curiosos con criterio',
        text: 'Si quieres entender la IA sin el ruido de las redes, cada análisis llega a tu correo cuando se publica.',
        cta: 'Apuntarme',
        subject: 'Quiero recibir los análisis',
      },
    ],
  },
  lines: {
    title: 'Otros temas que exploro',
    intro: 'Dos terrenos donde pruebo la IA por curiosidad y comparto lo que aprendo, sin recetas.',
    markets: {
      id: 'mercados',
      name: 'IA y mercados',
      text: 'Experimentos con modelos de IA leyendo resultados empresariales y noticias de mercado, para ver hasta dónde llegan y dónde fallan.',
      points: [
        'Resultados y noticias resumidos con IA y contrastados con las cifras originales',
        'Estrategias probadas con datos históricos, con comisiones y costes incluidos',
        'Qué puede y qué no puede predecir un modelo',
      ],
      disclaimer:
        'Divulgación, no asesoramiento financiero ni recomendación de inversión.',
      cta: 'Recibir los análisis de mercado',
    },
    content: {
      id: 'contenidos',
      name: 'IA y creación de contenidos',
      text: 'Lo que aprendo produciendo los vídeos y artículos de Vyntas con ayuda de IA: qué herramientas uso y en qué punto hace falta una persona.',
      points: [
        'Guiones, artículos y newsletters escritos con IA y revisados a mano',
        'Herramientas de vídeo, voz e imagen probadas y comparadas',
        'Qué permiten YouTube y las redes con el contenido generado con IA',
      ],
      disclaimer: 'Sin fórmulas mágicas: lo que me funciona a mí.',
      cta: 'Montar un flujo de contenidos',
      subject: 'Flujo de contenidos con IA para mi empresa',
    },
  },
  published: {
    title: 'Publicado',
    date: '23 de octubre de 2026',
    item: 'Le doy a cinco modelos de IA los resultados de Iberdrola y compruebo qué entienden',
    summary: 'ChatGPT y Gemini gratis frente a tres modelos en un ordenador propio: aciertos, invenciones, coste y cómo repetirlo.',
    cta: 'Leer el experimento',
  },
  next: {
    title: 'Próximos análisis',
    note: 'En preparación. Saldrán en vídeo, en artículo y en la newsletter.',
    items: [
      'Produzco un vídeo entero con IA: qué hace sola y qué no',
      'Monto una IA privada para una empresa agrícola: coste real y qué hace',
      'Modelos locales frente a la nube: qué datos salen de tu empresa',
      'Cómo funciona un modelo de lenguaje, explicado por un físico',
      'IA en el aula: lo que funciona y lo que no después de un curso usándola',
    ],
  },
  about: {
    title: 'Quién está detrás',
    more: 'Ver trayectoria completa',
    paragraphs: [
      'Soy Daniel Malagón. Físico, doctor en Ingeniería Electrónica y profesor de informática en un instituto de Huelva.',
      'Antes de dar clase investigué en el IMSE-CNM (CSIC), en el CERN y en la Universidad de Oporto, sobre fiabilidad de circuitos e implantes médicos. Esa costumbre de medir antes de opinar es la que aplico ahora a la IA.',
      'Vyntas es donde pongo a prueba lo que sale, lo explico y lo llevo a empresas reales.',
    ],
  },
  contact: {
    title: 'Escríbeme',
    text: 'Para proponer un tema, pedir formación o contarme un proyecto de IA en tu empresa, manda un correo. Contesto personalmente.',
    newsletter: 'Recibir los análisis por correo',
    newsletterSubject: 'Quiero recibir los análisis',
    project: 'Hablar de un proyecto',
    projectSubject: 'Proyecto de IA',
  },
  footer: { youtube: 'Canal de YouTube en preparación', rights: 'Vyntas', legal: 'Aviso legal', privacy: 'Privacidad', founder: 'Fundador' },
  meaning: {
    label: 'Por qué Vyntas',
    text: 'De vinculum, vínculo, y -tas, cualidad: la cualidad de unir la ciencia y la empresa. En el símbolo, la barra sobre la y es el vínculo de las matemáticas y forma ȳ, la media de lo que se mide. La Y es la letra de Pitágoras, el camino que obliga a elegir.',
  },
  langSwitch: 'English',
}

const en: typeof es = {
  nav: { work: 'What I do', markets: 'Markets', content: 'Content', audience: 'Who it’s for', next: 'Coming up', about: 'Founder', contact: 'Contact' },
  newsletter: {
    title: 'The Vyntas newsletter',
    text: 'One email whenever a new analysis is out: what I tested, what worked and what didn’t. No spam, one-click unsubscribe.',
    label: 'Your email',
    placeholder: 'name@company.com',
    consent: 'I agree to receive the newsletter and have read the',
    privacy: 'privacy policy',
    submit: 'Subscribe',
    sending: 'Sending…',
    ok: 'Subscription received. Check your inbox to confirm it.',
    invalid: 'Enter a valid email, for example name@company.com.',
    needConsent: 'Tick the consent box to subscribe.',
    error: 'The subscription couldn’t be completed. Try again or write to info@vyntas.com.',
  },
  hero: {
    title: 'AI, tested before it’s explained.',
    lead:
      'Practical, science-based writing and video about artificial intelligence. I test new tools, explain how they work inside, and report what companies are actually doing with them.',
    primary: 'Get the analyses by email',
    secondary: 'Talk about a project',
    traceLabel: 'What I measure in every test',
    markers: ['Cost', 'Speed', 'Privacy', 'Reliability', 'Worth it?'],
  },
  work: {
    title: 'What you’ll find here',
    items: [
      {
        name: 'Tests',
        text: 'New tools and models used on real tasks, with what they cost, how long they take and where they break. No reheated press releases.',
      },
      {
        name: 'Science',
        text: 'How a language model works, why it hallucinates, what training or quantizing really means. Rigorous, without assuming you know the maths.',
      },
      {
        name: 'Company cases',
        text: 'What local companies do with AI: food and agriculture, industry, small businesses. What worked, what didn’t and what it cost.',
      },
      {
        name: 'Private AI',
        text: 'Open models running on your own server, so your company’s data never leaves it. It’s what I test most and get asked about most.',
      },
    ],
  },
  audience: {
    title: 'Who it’s for',
    groups: [
      {
        name: 'Companies',
        text: 'If you want AI on your own data without sending it to the cloud, I help you decide whether it makes sense, set it up and measure whether it pays off.',
        cta: 'Tell me about it',
        subject: 'AI project for my company',
      },
      {
        name: 'Teachers',
        text: 'Which AI tools work in class, how to assess when students carry an assistant in their pocket, and training for school staff.',
        cta: 'Ask for details',
        subject: 'AI in the classroom',
      },
      {
        name: 'Curious, with judgement',
        text: 'If you want to understand AI without the social-media noise, each analysis reaches your inbox when it’s out.',
        cta: 'Sign me up',
        subject: 'Send me the analyses',
      },
    ],
  },
  lines: {
    title: 'Other topics I explore',
    intro: 'Two areas where I try AI out of curiosity and share what I learn, no recipes.',
    markets: {
      id: 'mercados',
      name: 'AI and markets',
      text: 'Experiments with AI models reading company results and market news, to see how far they get and where they fail.',
      points: [
        'Results and news summarised with AI and checked against the original figures',
        'Strategies tested on historical data, with fees and costs included',
        'What a model can and can’t predict',
      ],
      disclaimer:
        'Educational content, not financial advice or an investment recommendation.',
      cta: 'Get the market analyses',
    },
    content: {
      id: 'contenidos',
      name: 'AI and content creation',
      text: 'What I learn making Vyntas videos and articles with help from AI: which tools I use and where a person is still needed.',
      points: [
        'Scripts, articles and newsletters written with AI and edited by hand',
        'Video, voice and image tools tested and compared',
        'What YouTube and social platforms allow for AI-generated content',
      ],
      disclaimer: 'No magic formulas: just what works for me.',
      cta: 'Set up a content workflow',
      subject: 'AI content workflow for my company',
    },
  },
  published: {
    title: 'Published',
    date: '23 October 2026',
    item: 'I give five AI models Iberdrola’s results and check what they understand (in Spanish)',
    summary: 'Free ChatGPT and Gemini against three models on your own computer: accuracy, made-up figures, cost and how to repeat it.',
    cta: 'Read the experiment',
  },
  next: {
    title: 'Coming up',
    note: 'In progress. Each one comes out as a video, an article and in the newsletter.',
    items: [
      'I make a whole video with AI: what it does alone and what it doesn’t',
      'I build a private AI for a farming company: real cost and what it does',
      'Local models versus the cloud: what data leaves your company',
      'How a language model works, explained by a physicist',
      'AI in the classroom: what works and what doesn’t after a year of using it',
    ],
  },
  about: {
    title: 'Who’s behind it',
    more: 'See full background',
    paragraphs: [
      'I’m Daniel Malagón. Physicist, PhD in Electronic Engineering, and computer science teacher at a secondary school in Huelva, Spain.',
      'Before teaching I did research at IMSE-CNM (CSIC), CERN and the University of Porto, on circuit reliability and medical implants. The habit of measuring before giving an opinion is what I now apply to AI.',
      'Vyntas is where I test what comes out, explain it and take it to real companies.',
    ],
  },
  contact: {
    title: 'Write to me',
    text: 'To suggest a topic, request training or tell me about an AI project at your company, send an email. I reply personally.',
    newsletter: 'Get the analyses by email',
    newsletterSubject: 'Send me the analyses',
    project: 'Talk about a project',
    projectSubject: 'AI project',
  },
  footer: { youtube: 'YouTube channel in progress', rights: 'Vyntas', legal: 'Legal notice', privacy: 'Privacy', founder: 'Founder' },
  meaning: {
    label: 'Why Vyntas',
    text: 'From vinculum, bond, and -tas, quality: the quality of joining science and business. In the symbol, the bar over the y is the mathematical vinculum and makes ȳ, the mean of what is measured. The Y is the letter of Pythagoras, the path that forces a choice.',
  },
  langSwitch: 'Español',
}

export const content = { es, en }
export const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
