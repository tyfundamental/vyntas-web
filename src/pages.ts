import type { Lang } from './content'

// Datos del titular que aparecen en el aviso legal y la política de privacidad.
export const OWNER = {
  name: 'Daniel Malagón Periánez',
  nif: '', // Se deja vacío a petición del titular
  address: '', // Se deja vacío a petición del titular
  email: 'info@vyntas.com',
  domain: 'vyntas.com',
}

export const LINKEDIN = 'https://www.linkedin.com/in/daniel-malag%C3%B3n-peri%C3%A1nez-a1679948'

export type Pub = { title: string; authors: string; venue: string; url: string }
export const PUBLICATIONS: Pub[] = [
  {
    title: 'Single Event Upsets characterization of 65 nm CMOS 6T and 8T SRAM cells for ground level environment',
    authors: 'D. Malagón, G. Torrens, J. Segura, S. A. Bota',
    venue: 'Microelectronics Reliability 110, 113696 (2020)',
    url: 'https://doi.org/10.1016/j.microrel.2020.113696',
  },
  {
    title: 'Soft error rate comparison of 6T and 8T SRAM ICs using mono-energetic proton and neutron irradiation sources',
    authors: 'D. Malagón, S. A. Bota, G. Torrens, X. Gili, J. Praena, B. Fernández, M. Macías, J. M. Quesada, C. Guerrero, M. C. Jiménez-Ramos, J. García López, J. L. Merino, J. Segura',
    venue: 'Microelectronics Reliability 78, 38–45 (2017)',
    url: 'https://doi.org/10.1016/j.microrel.2017.07.093',
  },
]

export type Press = { title: Record<'es' | 'en', string>; outlet: string; date: string; url: string }
export const PRESS: Press[] = [
  {
    title: {
      es: 'Circuitos electrónicos más robustos frente a las radiaciones ionizantes',
      en: 'More robust electronic circuits against ionizing radiation (on his doctoral thesis)',
    },
    outlet: 'Diari de la UIB',
    date: '2018',
    url: 'https://diari.uib.es/Hemeroteca/Circuitos-electronicos-mas-robustos-frente-a-las.cid561981',
  },
  {
    title: {
      es: 'La tesis del físico almonteño Daniel Malagón, reconocida con un Cum Laude',
      en: 'Doctoral thesis awarded Cum Laude',
    },
    outlet: 'Huelva Buenas Noticias',
    date: '2018',
    url: 'https://huelvabuenasnoticias.com/2018/08/21/la-tesis-del-fisico-almonteno-daniel-malagon-reconocida-con-un-cum-laude/',
  },
  {
    title: {
      es: 'Almonte reconoce la labor de personas y entidades con la entrega de sus Premios Andalucía',
      en: 'Almonte’s Andalucía Award, Science category',
    },
    outlet: 'Diario de Huelva',
    date: '2018',
    url: 'https://www.diariodehuelva.es/provincia/almonte-reconoce-la-labor-personas-entidades-la-entrega-premios-andalucia/20180301172333169365.html',
  },
  {
    title: {
      es: 'El CNA emplea protones y neutrones para testear circuitos electrónicos',
      en: 'Proton and neutron testing of electronic circuits at the National Accelerator Centre',
    },
    outlet: 'Centro Nacional de Aceleradores',
    date: '2017',
    url: 'https://cna.us.es/index.php/en/news/press-releases/671-el-cna-emplea-protones-y-neutrones-para-testear-circuitos-electronicos',
  },
  {
    title: {
      es: 'El físico almonteño Daniel Malagón lleva un experimento pionero hasta el CERN',
      en: 'A pioneering experiment taken to CERN',
    },
    outlet: 'Huelva Buenas Noticias',
    date: '2016',
    url: 'https://huelvabuenasnoticias.com/2016/11/02/el-fisico-almonteno-daniel-malagon-lleva-un-experimento-pionero-hasta-la-organizacion-europea-para-la-investigacion-nuclear-de-suiza/',
  },
]

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
    awards: 'Reconocimientos',
    press: 'En prensa',
    linkedin: 'Perfil de LinkedIn',
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
      detail: 'Tesis «A Contribution to the Characterization of Radiation-induced Soft Errors in Sigma-Delta Modulators and SRAM Memories», calificada Cum Laude.',
    },
    { when: '2022', what: 'Máster en Profesorado (MAES)', where: 'Universidad de Huelva' },
    { when: '2014', what: 'Máster en Microelectrónica', where: 'Universidad de Sevilla' },
    { when: '2011', what: 'Licenciado en Física', where: 'Universidad de Sevilla' },
  ] as CvEntry[],
  research:
    'Coautor de cuatro artículos en revistas indexadas en JCR, dos de ellos como primer autor, publicados en Microelectronics Reliability, IEEE Transactions on Emerging Topics in Computing e IEEE Transactions on Nuclear Science. Estos son los dos artículos como primer autor:',
  skills: [
    'Modelos de lenguaje abiertos y despliegue de IA en servidores propios',
    'Python, Kotlin y Android, desarrollo web',
    'Bases de datos, redes y ciberseguridad',
    'Diseño y fiabilidad de circuitos integrados',
    'Docencia y divulgación técnica',
  ],
  languages: ['Español, nativo', 'Portugués, C1', 'Inglés, B2'],
  awards: [
    'Premio Andalucía 2018 del Ayuntamiento de Almonte, categoría Ciencia',
    'Tesis doctoral calificada Cum Laude (2018)',
  ],
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
    awards: 'Recognition',
    press: 'In the press',
    linkedin: 'LinkedIn profile',
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
      detail: 'Thesis «A Contribution to the Characterization of Radiation-induced Soft Errors in Sigma-Delta Modulators and SRAM Memories», awarded Cum Laude.',
    },
    { when: '2022', what: 'Master’s in Secondary Teaching', where: 'University of Huelva' },
    { when: '2014', what: 'Master’s in Microelectronics', where: 'University of Seville' },
    { when: '2011', what: 'Degree in Physics', where: 'University of Seville' },
  ],
  research:
    'Co-author of four papers in JCR-indexed journals, two as first author, published in Microelectronics Reliability, IEEE Transactions on Emerging Topics in Computing and IEEE Transactions on Nuclear Science. These are the two first-author papers:',
  skills: [
    'Open language models and AI deployment on in-house servers',
    'Python, Kotlin and Android, web development',
    'Databases, networking and cybersecurity',
    'Integrated circuit design and reliability',
    'Teaching and technical communication',
  ],
  languages: ['Spanish, native', 'Portuguese, C1', 'English, B2'],
  awards: [
    'Andalucía Award 2018 from Almonte Town Council, Science category',
    'Doctoral thesis awarded Cum Laude (2018)',
  ],
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
          'Los análisis sobre mercados financieros son contenido educativo. No constituyen asesoramiento financiero ni recomendación de inversión personalizada, y no deben ser la base única de ninguna decisión de inversión. Invertir conlleva riesgo de pérdida del capital.',
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
