import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingPackage = {
  id: "basic" | "professional" | "analytics" | "ai";
  name: string;
  price: string;
  audience: string;
  features: string[];
  featured?: boolean;
};

export type PortfolioItem = {
  title: string;
  type: string;
  description: string;
  image: string;
  label: "Demo";
};

export type Article = {
  title: string;
  summary: string;
  date: string;
  category: string;
};

export type Review = {
  role: string;
  quote: string;
  rating: 5;
  label: "Simulasi";
};

export type Faq = {
  question: string;
  answer: string;
};

export type ContactData = {
  phoneDisplay: string;
  phoneInternational: string;
  email: string;
  location: string;
  serviceAreas: string[];
  mapsUrl?: string;
  socials: Partial<
    Record<"instagram" | "facebook" | "tiktok" | "linkedin", string>
  >;
};
