import type { ChatIntent } from "@/types/chatbot";

const intentKeywords: Record<Exclude<ChatIntent, "unknown">, string[]> = {
  price: ["harga", "biaya", "budget", "paket"],
  duration: ["durasi", "berapa lama", "deadline", "selesai"],
  revision: ["revisi", "ubah desain", "perbaikan"],
  hosting: ["domain", "hosting", "server"],
  umkm: ["umkm", "toko", "warung", "usaha"],
  portfolio: ["portofolio", "personal", "freelancer"],
  organization: ["organisasi", "komunitas", "yayasan", "sekolah"],
  analytics: ["analitik", "dashboard", "grafik", "laporan"],
  ai: ["machine learning", "prediksi", "segmentasi", " ai "],
  contact: ["whatsapp", "kontak", "pesan", "konsultasi"],
};

export function normalizeInput(input: string): string {
  return ` ${input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()} `;
}

export function matchIntent(input: string): ChatIntent {
  const normalized = normalizeInput(input);
  const matches = Object.entries(intentKeywords)
    .map(([intent, keywords]) => ({
      intent: intent as Exclude<ChatIntent, "unknown">,
      score: Math.max(
        0,
        ...keywords.map((keyword) =>
          normalized.includes(keyword) ? keyword.length : 0,
        ),
      ),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return matches[0]?.intent ?? "unknown";
}

export function recommendPackage(intent: ChatIntent): string {
  if (intent === "analytics") return "Premium Analitik";
  if (intent === "ai") return "AI/ML Custom";
  if (intent === "organization" || intent === "umkm") return "Profesional";
  return "Basic";
}
