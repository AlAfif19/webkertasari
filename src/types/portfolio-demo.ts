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

export type DemoProduct = {
  name: string;
  category: string;
  size: string;
  price: string;
  stock: number;
  image: string;
  imageAlt: string;
  badge?: string;
  description: string;
};

export type DemoGalleryItem = {
  title: string;
  date: string;
  location: string;
  caption: string;
  image: string;
  imageAlt: string;
};

export type DemoTransaction = {
  id: string;
  time: string;
  customer: string;
  method: string;
  total: string;
  status: string;
};

export type DemoPosData = {
  cashier: string;
  shift: string;
  categories: string[];
  products: Array<DemoProduct & { sku: string }>;
  cart: Array<{
    name: string;
    quantity: number;
    total: string;
  }>;
  subtotal: string;
  discount: string;
  tax: string;
  total: string;
  paymentMethods: string[];
  transactions: DemoTransaction[];
};

export type DemoAnalyticsData = {
  period: string;
  topProducts: Array<{
    name: string;
    units: number;
    revenue: string;
  }>;
  lowStock: Array<{
    name: string;
    stock: number;
  }>;
  transactions: DemoTransaction[];
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
  products?: DemoProduct[];
  gallery?: DemoGalleryItem[];
  pos?: DemoPosData;
  analytics?: DemoAnalyticsData;
  story: PortfolioDemoStory;
  process: PortfolioDemoProcess[];
  faq: PortfolioDemoFaq[];
  closingTitle: string;
  closingDescription: string;
};
