export type ChatIntent =
  | "price"
  | "duration"
  | "revision"
  | "hosting"
  | "umkm"
  | "portfolio"
  | "organization"
  | "analytics"
  | "ai"
  | "contact"
  | "unknown";

export type ChatStep =
  | "welcome"
  | "service"
  | "recommendation"
  | "name"
  | "budget"
  | "deadline"
  | "features"
  | "summary";

export type ChatbotLead = {
  name: string;
  websiteType: string;
  packageName: string;
  budget: string;
  deadline: string;
  features: string;
};

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export type ChatbotSession = {
  version: 1;
  step: ChatStep;
  lead: ChatbotLead;
  messages: ChatMessage[];
};
