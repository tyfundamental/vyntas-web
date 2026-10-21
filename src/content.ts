export type Lang = 'es' | 'en'

export const EMAIL = 'info@vyntas.com'

const es = {
  nav: { work: 'Qué hago', audience: 'Para quién', next: 'Próximos análisis', about: 'Quién soy', contact: 'Contacto' },
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
  next: {
    title: 'Próximos análisis',
    note: 'En preparación. Saldrán en vídeo, en artículo y en la newsletter.',
    items: [
      'Monto una IA privada para una empresa agrícola: coste real y qué hace',
      'Modelos locales frente a la nube: qué datos salen de tu empresa',
      'Cómo funciona un modelo de lenguaje, explicado por un físico',
      'IA en el aula: lo que funciona y lo que no después de un curso usándola',
    ],
  },
  about: {
    title: 'Quién soy',
    paragraphs: [
      'Soy Daniel Malagón. Físico, doctor en Ingeniería Electrónica y profesor de informática en un instituto de Huelva.',
      'Antes de dar clase investigué en el IMSE-CNM (CSIC), en el CERN y en la Universidad de Oporto, sobre fiabilidad de circuitos e implantes médicos. Esa costumbre de medir antes de opinar es la que aplico ahora a la IA.',
      'Vyntas es donde pongo a prueba lo que sale, lo explico y lo llevo a empresas reales.',
    ],
  },
  contact: {
    title: 'Escríbeme',
    text: 'Para recibir los análisis, proponer un tema o contarme un proyecto, manda un correo. Contesto yo.',
    newsletter: 'Recibir los análisis por correo',
    newsletterSubject: 'Quiero recibir los análisis',
    project: 'Hablar de un proyecto',
    projectSubject: 'Proyecto de IA',
  },
  footer: { youtube: 'Canal de YouTube en preparación', rights: 'Vyntas' },
  langSwitch: 'English',
}

const en: typeof es = {
  nav: { work: 'What I do', audience: 'Who it’s for', next: 'Coming up', about: 'About', contact: 'Contact' },
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
  next: {
    title: 'Coming up',
    note: 'In progress. Each one comes out as a video, an article and in the newsletter.',
    items: [
      'I build a private AI for a farming company: real cost and what it does',
      'Local models versus the cloud: what data leaves your company',
      'How a language model works, explained by a physicist',
      'AI in the classroom: what works and what doesn’t after a year of using it',
    ],
  },
  about: {
    title: 'About me',
    paragraphs: [
      'I’m Daniel Malagón. Physicist, PhD in Electronic Engineering, and computer science teacher at a secondary school in Huelva, Spain.',
      'Before teaching I did research at IMSE-CNM (CSIC), CERN and the University of Porto, on circuit reliability and medical implants. The habit of measuring before giving an opinion is what I now apply to AI.',
      'Vyntas is where I test what comes out, explain it and take it to real companies.',
    ],
  },
  contact: {
    title: 'Write to me',
    text: 'To get the analyses, suggest a topic or tell me about a project, send an email. I answer it myself.',
    newsletter: 'Get the analyses by email',
    newsletterSubject: 'Send me the analyses',
    project: 'Talk about a project',
    projectSubject: 'AI project',
  },
  footer: { youtube: 'YouTube channel in progress', rights: 'Vyntas' },
  langSwitch: 'Español',
}

export const content = { es, en }
export const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
