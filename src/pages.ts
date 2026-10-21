import type { Lang } from './content'

// Datos del titular que aparecen en el aviso legal y la política de privacidad.
export const OWNER = {
  name: 'Daniel Malagón Periánez',
  nif: '', // Se deja vacío a petición del titular
  address: '', // Se deja vacío a petición del titular
  email: 'info@vyntas.com',
  domain: 'vyntas.com',
}

type CvEntry = { when: string; what: string; where: string; detail?: string }

const founderEs = {
  title: 'Daniel Malagón Periánez',
  role: 'Fundador de Vyntas',
  summary:
    'Físico y doctor en Ingeniería Electrónica. Ha investigado la fiabilidad de circuitos integrados frente a radiación en el CSIC y en el CERN, y dispositivos médicos implantables en la Universidad de Oporto. Hoy es profesor de informática en la enseñanza pública andaluza y dirige Vyntas, donde prueba, explica y lleva a empresas la inteligencia artificial.',
  sections: {
    experience: 'Experiencia',
    education: 'Formación',
    research: 'Publicaciones',
    skills: 'Competencias',
    languages: 'Idiomas',
    other: 'Otros',
  },
  experience: [
    {
      when: '2023 – actualidad',
      what: 'Profesor de Informática',
      where: 'Consejería de Desarrollo Educativo y FP, Junta de Andalucía',
      detail:
        'Programación, desarrollo web, bases de datos, redes y seguridad en ESO, Bachillerato y Formación Profesional. Centros: IES La Rábida (Huelva), IES El Majuelo (Gines), IES Punta del Verde (Sevilla) e IES Almicerán (Peal de Becerro).',
    },
    {
      when: '2019 – 2021',
      what: 'Investigador postdoctoral',
      where: 'Faculdade de Engenharia da Universidade do Porto',
      detail: 'Electrónica para implantes médicos activos.',
    },
    {
      when: 'Etapa predoctoral',
      what: 'Personal investigador',
      where: 'Instituto de Microelectrónica de Sevilla (IMSE-CNM, CSIC)',
      detail:
        'Efectos de la radiación en circuitos integrados. Estancia en el CERN (2016) y campañas experimentales en el Centro Nacional de Aceleradores.',
    },
  ] as CvEntry[],
  education: [
    {
      when: '2018',
      what: 'Doctor en Ingeniería Electrónica',
      where: 'Universitat de les Illes Balears',
      detail: 'Tesis sobre errores transitorios inducidos por radiación en moduladores sigma-delta y memorias SRAM.',
    },
    { when: '2022', what: 'Máster en Profesorado (MAES)', where: 'Universidad de Huelva' },
    { when: '2014', what: 'Máster en Microelectrónica', where: 'Universidad de Sevilla' },
    { when: '2011', what: 'Licenciado en Física', where: 'Universidad de Sevilla' },
  ] as CvEntry[],
  research:
    'Coautor de cuatro artículos en revistas indexadas en JCR, dos de ellos como primer autor, publicados en Microelectronics Reliability, IEEE Transactions on Emerging Topics in Computing e IEEE Transactions on Nuclear Science.',
  skills: [
    'Modelos de lenguaje abiertos y despliegue de IA en servidores propios',
    'Python, Kotlin y Android, desarrollo web',
    'Bases de datos, redes y ciberseguridad',
    'Diseño y fiabilidad de circuitos integrados',
    'Docencia y divulgación técnica',
  ],
  languages: ['Español, nativo', 'Portugués, C1', 'Inglés, B2'],
  other: 'Autor de la novela «El hombre que dobló el tiempo».',
  back: 'Volver al inicio',
  contact: 'Contactar',
}

const founderEn: typeof founderEs = {
  title: 'Daniel Malagón Periánez',
  role: 'Founder of Vyntas',
  summary:
    'Physicist with a PhD in Electronic Engineering. He researched the reliability of integrated circuits under radiation at CSIC and CERN, and implantable medical devices at the University of Porto. Today he teaches computer science in Andalusia’s public education system and runs Vyntas, where he tests, explains and brings artificial intelligence to companies.',
  sections: {
    experience: 'Experience',
    education: 'Education',
    research: 'Publications',
    skills: 'Skills',
    languages: 'Languages',
    other: 'Other',
  },
  experience: [
    {
      when: '2023 – present',
      what: 'Computer Science Teacher',
      where: 'Regional Ministry of Education, Junta de Andalucía',
      detail:
        'Programming, web development, databases, networking and security in secondary school and vocational training. Schools: IES La Rábida (Huelva), IES El Majuelo (Gines), IES Punta del Verde (Seville) and IES Almicerán (Peal de Becerro).',
    },
    {
      when: '2019 – 2021',
      what: 'Postdoctoral Researcher',
      where: 'Faculty of Engineering, University of Porto',
      detail: 'Electronics for active medical implants.',
    },
    {
      when: 'Doctoral period',
      what: 'Researcher',
      where: 'Seville Institute of Microelectronics (IMSE-CNM, CSIC)',
      detail:
        'Radiation effects on integrated circuits. Research stay at CERN (2016) and experimental campaigns at the Spanish National Accelerator Centre.',
    },
  ],
  education: [
    {
      when: '2018',
      what: 'PhD in Electronic Engineering',
      where: 'University of the Balearic Islands',
      detail: 'Thesis on radiation-induced soft errors in sigma-delta modulators and SRAM memories.',
    },
    { when: '2022', what: 'Master’s in Secondary Teaching', where: 'University of Huelva' },
    { when: '2014', what: 'Master’s in Microelectronics', where: 'University of Seville' },
    { when: '2011', what: 'Degree in Physics', where: 'University of Seville' },
  ],
  research:
    'Co-author of four papers in JCR-indexed journals, two as first author, published in Microelectronics Reliability, IEEE Transactions on Emerging Topics in Computing and IEEE Transactions on Nuclear Science.',
  skills: [
    'Open language models and AI deployment on in-house servers',
    'Python, Kotlin and Android, web development',
    'Databases, networking and cybersecurity',
    'Integrated circuit design and reliability',
    'Teaching and technical communication',
  ],
  languages: ['Spanish, native', 'Portuguese, C1', 'English, B2'],
  other: 'Author of the novel «El hombre que dobló el tiempo».',
  back: 'Back to home',
  contact: 'Get in touch',
}

export const founder = { es: founderEs, en: founderEn }

// --- Textos legales (en español; la versión inglesa remite a ellos) ---

type LegalDoc = { title: string; updated: string; blocks: { h: string; p: string[] }[] }

const owner = () =>
  `${OWNER.name}${OWNER.nif ? `, con NIF ${OWNER.nif}` : ''}${OWNER.address ? ` y domicilio en ${OWNER.address}` : ''}`

export const legal: Record<'aviso' | 'privacidad', LegalDoc> = {
  aviso: {
    title: 'Aviso legal',
    updated: 'Última actualización: octubre de 2026',
    blocks: [
      {
        h: 'Titular del sitio',
        p: [
          `En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que el sitio ${OWNER.domain} es titularidad de ${owner()}. Correo de contacto: ${OWNER.email}.`,
        ],
      },
      {
        h: 'Objeto',
        p: [
          'Este sitio ofrece contenidos de divulgación sobre inteligencia artificial e información sobre los servicios de Vyntas. Su uso implica la aceptación de este aviso legal.',
        ],
      },
      {
        h: 'Propiedad intelectual',
        p: [
          'Los textos, gráficos, código y demás contenidos del sitio pertenecen a su titular o se usan con permiso. Se permite citarlos con enlace a la fuente. Cualquier otra reproducción requiere autorización previa.',
        ],
      },
      {
        h: 'Responsabilidad',
        p: [
          'Los contenidos tienen carácter divulgativo y no sustituyen el asesoramiento profesional para un caso concreto. El titular no se hace responsable del uso que se haga de ellos ni del contenido de sitios externos enlazados.',
        ],
      },
      {
        h: 'Legislación aplicable',
        p: ['Este aviso se rige por la legislación española.'],
      },
    ],
  },
  privacidad: {
    title: 'Política de privacidad',
    updated: 'Última actualización: octubre de 2026',
    blocks: [
      {
        h: 'Responsable del tratamiento',
        p: [`${owner()}. Contacto: ${OWNER.email}.`],
      },
      {
        h: 'Qué datos tratamos y para qué',
        p: [
          'Newsletter: tu dirección de correo, para enviarte los análisis y novedades de Vyntas. Puedes darte de baja en cualquier momento desde el enlace que incluye cada envío.',
          'Contacto: los datos que incluyas en tu correo, para responderte.',
        ],
      },
      {
        h: 'Base legal',
        p: [
          'Tu consentimiento, que das al suscribirte o al escribirnos y que puedes retirar cuando quieras.',
        ],
      },
      {
        h: 'Con quién se comparten',
        p: [
          'Con el proveedor del servicio de newsletter, que actúa como encargado del tratamiento. No vendemos ni cedemos tus datos a terceros.',
        ],
      },
      {
        h: 'Estadísticas de visitas',
        p: [
          'Medimos el número de visitas con Cloudflare Web Analytics, que no usa cookies ni identifica a las personas que visitan el sitio.',
        ],
      },
      {
        h: 'Cuánto tiempo los conservamos',
        p: ['Mientras sigas suscrito o mientras sea necesario para atender tu consulta.'],
      },
      {
        h: 'Tus derechos',
        p: [
          `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${OWNER.email}. Si consideras que no se han atendido, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
        ],
      },
    ],
  },
}

export const legalNoteEn: Record<Lang, string> = {
  es: '',
  en: 'This legal text is provided in Spanish, the language of the jurisdiction that governs it.',
}
