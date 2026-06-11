export enum View {
  CIENCIA = 'CIENCIA',
  PROTOCOLOS = 'PROTOCOLOS',
  REVISTA = 'REVISTA',
  NOSOTROS = 'NOSOTROS',
  NEWSLETTER = 'NEWSLETTER'
}

export interface ScienceMetric {
  value: string;
  label: string;
  description: string;
}

export interface Pathway {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  target: string;
  markers: string[];
}

export interface Protocol {
  id: string;
  title: string;
  tagline: string;
  pillars: string[];
  objective: string;
  difficulty: 'Sencillo' | 'Intermedio' | 'Avanzado';
  schedule: string;
  guidelines: string[];
  scientificBase: string;
  detailedScience: string;
  linkedProductCategory: string;
  affiliateProducts: {
    brandName: string;
    productName: string;
    puritySpec: string;
    affiliateUrl: string;
    priceEstimate: string;
  }[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
  doi?: string;
  link?: string;
}

export interface RecommendedProduct {
  id: string;
  category: string;
  name: string;
  purity: string;
  dosage: string;
  synopsis: string;
  pros: string[];
  affiliateUrl: string;
  priceEstimate: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  source?: string;
}
