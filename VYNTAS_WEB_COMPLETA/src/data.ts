import { ScienceMetric, Pathway, Protocol, Article, RecommendedProduct, FAQ } from './types';

export const METRICS: ScienceMetric[] = [
  {
    value: '98%',
    label: 'PUREZA CELULAR',
    description: 'Fracción de compuestos activos certificados mediante análisis cromatográfico de alta resolución (HPLC).'
  },
  {
    value: '2.4×',
    label: 'ACTIVACIÓN SIRT1',
    description: 'Incremento promedio de la transcripción de sirtuinas reguladoras frente a placebo en ensayos in vitro.'
  },
  {
    value: '14d',
    label: 'PERÍODO RE-ESTABLECIDO',
    description: 'Tiempo estimado de optimización de marcadores de resistencia oxidativa según el protocolo basal.'
  }
];

export const PATHWAYS: Pathway[] = [
  {
    id: 'sirt',
    title: 'Vía de las Sirtuinas (SIRT1-7)',
    subtitle: 'Enzimas Limitadoras de la Deacetilación',
    description: 'Regulan el empaquetado del ADN celular, favorecen la reparación mitocondrial y coordinan la respuesta de supervivencia ante el estrés metabólico. Su estimulación depende profundamente de la disponibilidad de NAD+.',
    target: 'Promoción de la biogénesis mitocondrial y desactivación de genes inflamatorios crónicos.',
    markers: ['SIRT1', 'SIRT3', 'NAD+/NADH balance']
  },
  {
    id: 'ampk',
    title: 'Vía del AMPK',
    subtitle: 'Sensor de Energía Celular',
    description: 'Se activa cuando el cociente ATP/AMP disminuye (indicando déficit energético). Impulsa la captación de glucosa, la betaoxidación de ácidos grasos y la autofagia, inhibiendo de forma natural los estados de acumulación lipídica.',
    target: 'Interrupción de la síntesis de glucógeno y lípidos en favor de la producción acelerada de ATP celular.',
    markers: ['AMP-activated protein kinase', 'GLUT4 translocation']
  },
  {
    id: 'mtor',
    title: 'Vía del mTor (Inhibición)',
    subtitle: 'Regulador de Crecimiento y Síntesis',
    description: 'Un estado de sobreestimulación de mTor debido al exceso constante de nutrientes acelera el envejecimiento celular crónico. La sub-expresión o inhibición intermitente es el principal catalizador de los procesos de autofagia profunda y reciclaje de proteínas defectuosas.',
    target: 'Limpieza e hidrólisis lisosomal de orgánulos disfuncionales acumulados.',
    markers: ['p70S6K', 'Inhibición de mTORC1']
  },
  {
    id: 'senescencia',
    title: 'Células Senescentes (Senolíticos)',
    subtitle: 'Fenotipo Secretor Asociado a la Senescencia (SASP)',
    description: 'Células persistentes que han detenido su ciclo de división pero secretan citoquinas proinflamatorias dañinas para el tejido circundante. La depuración dirigida mediada por flavonoides específicos protege el nicho de células madre.',
    target: 'Eliminación selectiva de células resistentes a la apoptosis sin dañar tejidos circundantes.',
    markers: ['p16-INK4a', 'IL-6 / SASP status']
  }
];

export const PROTOCOLS: Protocol[] = [
  {
    id: 'vyntas-core',
    title: 'VYNTAS CORE · CARDIO LIPID',
    tagline: 'Protocolo cardiovascular y lipídico avanzado.',
    pillars: ['Omega-3 rTG', 'Berberina HCl', 'CoQ10 Ubiquinol'],
    objective: 'Optimizar el perfil lipídico celular, el índice protector cardíaco y regular la función mitocondrial miocárdica.',
    difficulty: 'Intermedio',
    schedule: 'Diario junto con las comidas principales',
    guidelines: [
      'Tomar 2g de ácidos grasos Omega-3 en su forma nativa rTG (triglicérido reesterificado) para lograr la máxima solubilización en la bilis y retención de membrana celular.',
      'Suplementar 500mg de Berberina HCl de alta pureza 25 minutos antes del almuerzo para modular la biogénesis del receptor LDL y frenar la inflamación endotelial.',
      'Acompañar con 100mg de Coenzima Q10 activa (Ubiquinol Kaneka) soluble en lípidos para preservar los complejos celulares de transporte de electrones.'
    ],
    scientificBase: 'Bhatt DL, Steg PG, Miller M, et al. (2019). "Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia." New England Journal of Medicine, 380(11), 11-22.',
    detailedScience: 'El estudio clínico controlado REDUCE-IT demostró que dosis puras estandarizadas de EPA reducen significativamente el riesgo de eventos cardiovasculares mayores en un 25% (NEJM, 2019). La Berberina estimula la expresión hepática de receptores de lipoproteínas de baja densidad (LDLR) de forma dependiente a la estabilización de su ARNm (Nature Medicine, 2004), mejorando el aclaramiento sérico. El Ubiquinol optimiza sustancialmente la fracción de eyección cardíaca y mitiga la fatiga celular según el prestigioso ensayo clínico controlado Q-SYMBIO (Mortensen et al., JACC Heart Failure, 2014).',
    linkedProductCategory: 'Cardiovascular & Lipids',
    affiliateProducts: [
      { brandName: 'Thorne', productName: 'Super EPA Pro (rTG Omega-3)', puritySpec: 'Sello NFS para Deporte, Alta Concentración de triglicéridos reesterificados', affiliateUrl: '#premium-epa', priceEstimate: 'Premium' },
      { brandName: 'Life Extension', productName: 'Super Ubiquinol CoQ10 100mg', puritySpec: 'Kaneka Ubiquinol® con Tecnología de Absorción Celular Optimizada', affiliateUrl: '#kaneka-coq10', priceEstimate: 'Medio' },
      { brandName: 'Nootropics Depot', productName: 'Berberina HCl de Alta Pureza 98%', puritySpec: 'Pureza garantizada mediante análisis por cromatografía líquida HPLC', affiliateUrl: '#nd-berberine', priceEstimate: 'Accesible' }
    ]
  },
  {
    id: 'vyntas-gut',
    title: 'VYNTAS GUT · RESET',
    tagline: 'Reparación del eje intestino-cerebro y microbiota.',
    pillars: ['Probióticos multi-cepa', 'Enzimas digestivas', 'Berberina'],
    objective: 'Fortalecer el puente de uniones estrechas del epitelio intestinal y aplacar de modo selectivo la disbiosis o sobrecrecimiento bateriano.',
    difficulty: 'Sencillo',
    schedule: 'Mañanas en ayunas y previo a la ingesta principal',
    guidelines: [
      'Administrar cápsulas probióticas con recubrimiento entérico resistente a ácidos estomacales con un mínimo de 20 mil millones de UFC al despertar.',
      'Ingerir el complejo multienzimático de espectro completo (digestivas) al iniciar el consumo de alimentos voluminosos.',
      'Utilizar Berberina en microdosificaciones para cohibir el florecimiento de bacterias gramnegativas generadoras de LPS proinflamatorios.'
    ],
    scientificBase: 'Bischoff SC, Barbara G, Buurman W, et al. (2014). "Intestinal permeability--a new target for disease prevention and therapy." BMC Gastroenterology, 14, 189.',
    detailedScience: 'La permeabilidad y disfunción de la barrera intestinal están asociadas a microinflamación sistémica de bajo grado. La berberina ejerce un efecto antimicrobiano natural selectivo en casos de disbiosis crónicas e incrementa de modo directo la transcripción de proteínas de uniones estrechas (Tight Junctions) como ocluidinas y ZO-1 (World Journal of Gastroenterology, 2015). Los probióticos multi-cepa (aportando cepas específicas de Lactobacillus rhamnosus y Bifidobacterium lactis) estimulan la segregación de moco y de ácidos grasos de cadena corta (AGCC, como el butirato), promoviendo la homeostasis inmunitaria y neural (Gastroenterology, 2011).',
    linkedProductCategory: 'Gut & Microbiome',
    affiliateProducts: [
      { brandName: 'Thorne', productName: 'FloraSport 20B Probiotic', puritySpec: 'Multi-cepa clínicamente investigada para el esfuerzo inmunológico intestinal', affiliateUrl: '#thorne-intestinal', priceEstimate: 'Premium' },
      { brandName: 'Enzymedica', productName: 'Digest Gold con ATPro', puritySpec: 'Complejo de enzimas de espectro total para absorción macromolecular limpia', affiliateUrl: '#digest-gold', priceEstimate: 'Medio' }
    ]
  },
  {
    id: 'vyntas-longevity',
    title: 'VYNTAS LONGEVITY',
    tagline: 'Longevidad celular y autofagia mitocondrial.',
    pillars: ['Polypodium leucotomos', 'Pterostilbeno', 'Espermidina'],
    objective: 'Potenciar el aclaramiento senolítico suave, la estimulación de deacetilasas sirtuinas y reciclaje lisosomal digestivo.',
    difficulty: 'Avanzado',
    schedule: 'Ciclos de uso intermitente estructurados semanalmente',
    guidelines: [
      'Tomar 480mg de extracto purificado de Polypodium leucotomos para contrarrestar el estrés lumínico-oxidativo a nivel genómico profundo.',
      'Sugerir 150mg de Pterostilbeno metilado por su elevada retención tisular biológica en lugar del resveratrol convencional.',
      'Administrar 5mg de Spermidina de alta pureza por la noche para incentivar las enzimas de autofagia intracelular durante el ayuno biológico natural.'
    ],
    scientificBase: 'Madeo F, Eisenberg T, Pietrocola F, et al. (2018). "Spermidine in health and disease." Science, 359(6374), eaan2788.',
    detailedScience: 'La Espermidina es una poliamina endógena capaz de inducir autofagia celular de forma completamente autónoma mediante la inhibición competitiva de la acetiltransferasa EP300 (Science, 2018), lo que facilita el aclaramiento de agregados proteicos disfuncionales. El Pterostilbeno, un análogo metilado del resveratrol con mayor vida media y biodisponibilidad plasmática superior, actúa activando directamente SIRT1, un regulador epigenético crucial. Por su parte, el extracto de Polypodium leucotomos ofrece actividad antioxidante celular, bloqueando las metaloproteinasas y el daño oxidativo genómico celular (Journal of Dermatological Science, 2015).',
    linkedProductCategory: 'Cellular Longevity',
    affiliateProducts: [
      { brandName: 'Life Extension', productName: 'Youthful Spermidine 5mg Concentré', puritySpec: 'Extracto botánico estandarizado libre de gluten o aditivos de bajo costo', affiliateUrl: '#spermidine', priceEstimate: 'Premium' },
      { brandName: 'Nootropics Depot', productName: 'Pterostilbene Elixir 99%', puritySpec: 'Dosificación micrométrica garantizada por analítica cromatográfica', affiliateUrl: '#pterostilbene', priceEstimate: 'Accesible' }
    ]
  },
  {
    id: 'vyntas-performance',
    title: 'VYNTAS PERFORMANCE',
    tagline: 'Rendimiento, recuperación y plasticidad neuronal.',
    pillars: ['Creatina Creapure®', 'L-Citrulina malato', 'Magnesio L-treonato'],
    objective: 'Elevar la tasa de resíntesis de ATP celular, favorecer la vasodilatación fisiológica y reponer densidad de receptores neuronales.',
    difficulty: 'Sencillo',
    schedule: 'Antes del entrenamiento y 1 hora previa al descanso nocturno',
    guidelines: [
      'Consumir 5g de Creatina Monohidratada Creapure® certificada libre de impurezas para catalizar la recarga de energía en mitocondrias cerebrales.',
      'Suplementar 6g de L-Citrulina Malato para aumentar los nidos de óxido nítrico endotelial, expandiendo el aporte de oxígeno.',
      'Tomar 2g de Magnesio L-Treonato antes de dormir facilitando el paso del ion magnesio al circuito de barrera hematoencefálica cerebral.'
    ],
    scientificBase: 'Slutsky I, Abumaria N, Wu LJ, et al. (2010). "Enhancement of learning and memory by elevating brain magnesium." Neuron, 65(2), 165-177.',
    detailedScience: 'El Magnesio L-Treonato, gracias a su capacidad exclusiva de penetración de la barrera hematoencefálica, eleva sustancialmente el magnesio en el líquido cefalorraquídeo celular, optimizando la plasticidad sináptica y la densidad de receptores NMDA en el hipocampo (Neuron, 2010). La L-Citrulina es un precursor altamente eficiente de óxido nítrico endotelial, expandiendo el volumen de aporte lipídico y gaseoso a tejidos de forma no tóxica (Journal of Strength and Conditioning Research, 2010). La creatina monohidrato incrementa las concentraciones de fosfocreatina tanto a nivel muscular como cortical facilitando la regeneración celular inmediata del ATP (Experimental Gerontology, 2018).',
    linkedProductCategory: 'Performance & Brain',
    affiliateProducts: [
      { brandName: 'Creapure® Premium', productName: 'Creatina Creapure 100% Alemana', puritySpec: 'Sello genuino libre de creatinina, diandiamida o metales pesados inductores de toxicidad', affiliateUrl: '#creapure', priceEstimate: 'Medio' },
      { brandName: 'Life Extension', productName: 'Neuro-Mag L-Threonate', puritySpec: 'Poderosa asimilación neurológica patentada', affiliateUrl: '#neuromag', priceEstimate: 'Premium' },
      { brandName: 'Thorne', productName: 'Amino Complex c/L-Citrulina', puritySpec: 'Fórmula limpia de grado olímpico para permeabilidad circulatoria', affiliateUrl: '#thorne-pre', priceEstimate: 'Premium' }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Estudio Clínico Humano del Mononucleótido de Nicotinamida (NMN) en la Sensibilidad a la Insulina',
    summary: 'El primer ensayo clínico aleatorizado y controlado con placebo que demuestra que el NMN aumenta la sensibilidad a la insulina muscular y la plasticidad metabólica en mujeres prediabéticas.',
    category: 'Bioquímica Aplicada',
    readTime: '7 min',
    date: '24 de Mayo, 2026',
    author: 'Yoshino, M., Breen, J. D., Steinback, K. I., et al.',
    doi: '10.1126/science.abe9985',
    link: 'https://doi.org/10.1126/science.abe9985',
    content: [
      'El papel del Mononucleótido de Nicotinamida (NMN) como precursor clave del Dinucleótido de Nicotinamida y Adenina (NAD+) ha sido ampliamente documentado a nivel preclínico. No obstante, este ensayo clínico de vanguardia liderado por la Universidad de Washington (publicado en Science, 2021) representa la primera validación rigurosa en humanos de sus efectos en la salud metabólica sistémica.',
      'A lo largo de un protocolo aleatorizado de 10 semanas y doble ciego, la administración diaria de 250 mg de NMN por vía oral elevó con éxito los niveles de metabolitos de NAD+ en células musculares esqueléticas. Lo más relevante fue el incremento sustancial en la captación de glucosa estimulada por insulina (un aumento de aproximadamente el 25% en la sensibilidad a la insulina), comparable al beneficio observado tras pérdidas notables de peso corporal o tratamiento con sensibilizadores de primera línea.',
      'El estudio confirma clínicamente que el NMN modula de manera directa la expresión de genes implicados en la remodelación tisular y la biogénesis de colágeno, sentando las bases moleculares para optimizar el envejecimiento metabólico y prevenir la fragilidad muscular asociada a la senescencia orgánica.'
    ]
  },
  {
    id: 'art-2',
    title: 'Fisetina como Agente Senolítico Dirigido: Evidencia de Extensión de la Salud Celular',
    summary: 'Análisis del impacto del flavonoide natural Fisetina en la eliminación selectiva del Fenotipo Secretor Asociado a la Senescencia (SASP) y la mitigación del envejecimiento tisular.',
    category: 'Gerociencia',
    readTime: '8 min',
    date: '10 de Abril, 2026',
    author: 'Yousefzadeh, M. J., Zhu, Y., Weroha, S. J., et al.',
    doi: '10.1016/j.ebiom.2018.09.015',
    link: 'https://doi.org/10.1016/j.ebiom.2018.09.015',
    content: [
      'La acumulación de células senescentes ("células zombies") promueve un estado de microinflamación crónica que propulsa múltiples disfunciones orgánicas. Este estudio fundamental (publicado en EBioMedicine por investigadores de la Clínica Mayo y la Universidad de Minnesota, 2018) identificó a la Fisetina, un flavonoide dietético abundante, como el senolítico natural más potente y selectivo descubierto hasta la fecha.',
      'La investigación demostró que la Fisetina reduce drásticamente las subpoblaciones celulares senescentes en tejidos adiposos y esplénicos de manera selectiva sin perturbar las células sanas vecinas. Esto se logra mediante el bloqueo de vías antiapoptóticas clave como la PI3K/AKT/mTOR y las sirtuinas reguladoras de autofagia corporales.',
      'Un aspecto innovador es el protocolo intermitente validado en modelos maduros (el enfoque "hit-and-run"): la administración concentrada a corto plazo logra mermar de manera persistente las citocinas inflamatorias del secretoma (SASP) como IL-6 e IL-1a, lo que resulta en una extensión sustancial de la longevidad saludable y una restauración sin precedentes de la homeostasis inmunitaria tisular.'
    ]
  },
  {
    id: 'art-3',
    title: 'Activación de la Ruta AMPK y Regulación del Perfil de Colesterol a través de la Berberina',
    summary: 'El innovador hallazgo del mecanismo de acción de la Berberina como un regulador natural de los receptores LDLR independiente de las estatinas mediante la activación mitocondrial celular.',
    category: 'Metabolismo',
    readTime: '6 min',
    date: '18 de Febrero, 2026',
    author: 'Kong, W., Wei, J., Abidi, P., et al.',
    doi: '10.1038/nm1135',
    link: 'https://doi.org/10.1038/nm1135',
    content: [
      'La dislipidemia y los desequilibrios glucémicos son catalizadores directos del envejecimiento vascular. Este influyente artículo publicado en Nature Medicine (2004) descifró cómo la Berberina actúa como un potente e inusual agente hipolipemiante trabajando a través de un mecanismo completamente distinto y complementario al de las estatinas convencionales.',
      'La Berberina incrementa la expresión hepática del gen para el receptor de LDL (LDLR) mediante un mecanismo que estabiliza el ARN mensajero (ARNm) correspondiente, aumentando la tasa de captación y clearance del LDL plasmático de forma sistémica. Adicionalmente, el estudio profundiza en cómo este alcaloide estimula la fosforilación de la Proteína Quinasa Activada por AMP (AMPK).',
      'Al activar AMPK, la berberina promueve la translocación de transportadores GLUT4 a la membrana celular, estimula la betaoxidación lipídica hepática e inhibe la síntesis biológica de ácidos grasos y colesterol, lo que la posiciona como un mímico polifacético de la restricción calórica idóneo para combatir el envejecimiento metabólico prematuro.'
    ]
  }
];

export const RECOMMENDED_PRODUCTS: RecommendedProduct[] = [
  {
    id: 'prod-nmn',
    category: 'NAD+ & Sirtuins',
    name: 'Mononucleótido de Nicotinamida (NMN) 99.2% Purity',
    purity: '99.2% Grado Farmacéutico certificado por terceros',
    dosage: '250mg - 500mg por la mañana en ayunas sublingual.',
    synopsis: 'Donante directo de nucleótidos celulares optimizado para absorción mucosal rápida. Apoya la función mitocondrial mitocondria-núcleo y vigor metabólico global.',
    pros: [
      'Absorción acelerada sin degradación digestiva severa',
      'Testeo exhaustivo lote a lote de metales pesados',
      'Fórmula estabilizada para alta temperatura ambiente'
    ],
    affiliateUrl: '#nmn-recommendation',
    priceEstimate: 'Medio-Alto'
  },
  {
    id: 'prod-fisetina',
    category: 'Senolytics',
    name: 'Fisetina Natural de Extracto de Rhus succedanea',
    purity: '98.5% Fraccionado libre de alérgenos sintéticos',
    dosage: '1000mg diario durante ciclos de 2 días seguidos, repetir mensualmente.',
    synopsis: 'Polifenol senolítico dirigido capaz de inducir apoptosis en linajes celulares envejecidos que expresan p16 y p21 altos, previniendo la secreción tóxica del SASP.',
    pros: [
      'Elevada selectividad de eliminación senolítica demostrada',
      'Pureza validada HPLC independiente',
      'Microcapsulación liposomal para una biodisponibilidad ×5 veces superior'
    ],
    affiliateUrl: '#fisetin-recommendation',
    priceEstimate: 'Medio'
  },
  {
    id: 'prod-berberina',
    category: 'AMPK & Circadian',
    name: 'Clorhidrato de Berberina (HCL) con Cromo y Ácido Alfa-Lipoico',
    purity: '97% Concentración botánica hidrolizada',
    dosage: '500mg ingeridos 25 minutos previo a la comida principal con más carbohidratos.',
    synopsis: 'Mímico botánico de restricción calórica de alta potencia que favorece la fosforilación de AMPK celular y previene picos agudos de insulina sérica.',
    pros: [
      'Excelente soporte para homeostasis de glucosa basal',
      'Sinergizado con ácido alfa lipoico para protección antioxidante',
      'Cápsula vegetal de liberación retardada'
    ],
    affiliateUrl: '#berberine-recommendation',
    priceEstimate: 'Accesible'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Por qué se eliminó la venta directa en esta plataforma?',
    answer: 'Nuestra prioridad es la rigorosidad científica libre de sesgo comercial. Al desacoplar la venta comercial directa y convertirnos en una plataforma netamente educativa, podemos recomendar opciones basadas estrictamente en la pureza de sus lotes analíticos y estudios independientes, sin conflictos de interés.',
    source: 'Estatuto de Divulgación Científica de BioLongevity'
  },
  {
    id: 'faq-2',
    question: '¿Tienen algún conflicto de interés con las marcas de los compuestos recomendados?',
    answer: 'Formulamos comparativas transparentes. Para sustentar la investigación, utilizamos enlaces afiliados con marcas que han cumplido con certificaciones de idoneidad, análisis HPLC independientes constantes y transparencia total. El lector conserva total soberanía de adquirir sus compuestos donde prefiera.',
    source: 'Transparencia de BioLongevity'
  },
  {
    id: 'faq-3',
    question: '¿Cómo se estructuran los protocolos de dosificación sugeridos?',
    answer: 'Cada guía y sugerencia proviene de metanálisis revisados por pares y ensayos clínicos en fases tempranas de longevidad humana. No constituyen prescripción de salud obligatoria. Siempre aconsejamos realizar análisis sanguíneos basales de marcadores inflamatorios y consultar con un médico o geriatra experto antes de alterar su balance energético celular.',
    source: 'Metodología Gerontológica de Soporte'
  },
  {
    id: 'faq-4',
    question: '¿Qué mide exactamente la métrica de pureza biológica?',
    answer: 'La métrica garantiza que los polvos y compuestos recomendados están libres de trazas de aditivos, disolventes de acetato de etilo y metales pesados (cadmio, plomo) habituales en síntesis de bajo costo, manteniendo más de un 98% de densidad activa por unidad molecular.',
    source: 'Garantía Analítica de Calidad de Laboratorio'
  }
];
