export type PortfolioDemoKind =
  | "umkm"
  | "personal"
  | "organization"
  | "service"
  | "analytics";

export type PortfolioDemoStat = {
  value: string;
  label: string;
};

export type PortfolioDemoFeature = {
  title: string;
  description: string;
};

export type PortfolioDemoShowcase = {
  title: string;
  meta: string;
  description: string;
};

export type PortfolioDemoStory = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: string[];
};

export type PortfolioDemoProcess = {
  step: string;
  title: string;
  description: string;
};

export type PortfolioDemoFaq = {
  question: string;
  answer: string;
};

export type PortfolioDemo = {
  slug: string;
  kind: PortfolioDemoKind;
  brand: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  image: string;
  portrait?: {
    src: string;
    alt: string;
  };
  disclaimer: string;
  stats: PortfolioDemoStat[];
  features: PortfolioDemoFeature[];
  showcaseTitle: string;
  showcase: PortfolioDemoShowcase[];
  story: PortfolioDemoStory;
  process: PortfolioDemoProcess[];
  faq: PortfolioDemoFaq[];
  closingTitle: string;
  closingDescription: string;
};
