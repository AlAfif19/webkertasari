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
  disclaimer: string;
  stats: PortfolioDemoStat[];
  features: PortfolioDemoFeature[];
  showcaseTitle: string;
  showcase: PortfolioDemoShowcase[];
  closingTitle: string;
  closingDescription: string;
};
