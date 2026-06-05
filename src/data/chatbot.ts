import type { ChatIntent } from "@/types/chatbot";

export const chatbotResponses: Record<
  Exclude<ChatIntent, "unknown">,
  string
> = {
  price:
    "Paket Basic mulai dari Rp300.000, Profesional Rp700.000, Premium Analitik Rp2.500.000, dan AI/ML Custom Rp4.000.000.",
  duration:
    "Durasi menyesuaikan jumlah halaman, kesiapan konten, fitur, dan revisi. Estimasi diberikan setelah kebutuhan awal diketahui.",
  revision:
    "Paket Basic mencakup 1-2 revisi ringan. Cakupan revisi paket lain disepakati saat konsultasi.",
  hosting:
    "Domain dan hosting dibahas terpisah sesuai kebutuhan, masa aktif, dan penyedia yang dipilih.",
  umkm:
    "Website UMKM cocok untuk toko, kuliner, laundry, bengkel, dan jasa rumahan. Paket yang umum dipilih adalah Basic atau Profesional.",
  portfolio:
    "Website portofolio membantu menampilkan profil, pengalaman, skill, dan karya. Paket Basic cocok untuk kebutuhan sederhana.",
  organization:
    "Website organisasi dapat menampilkan profil, pengurus, kegiatan, berita, dan kontak. Paket Profesional paling sesuai.",
  analytics:
    "Dashboard analitik membantu membaca transaksi, grafik pelanggan, filter laporan, dan tren usaha.",
  ai:
    "AI/ML cocok saat bisnis memiliki data untuk segmentasi, prediksi sederhana, atau rekomendasi. Kebutuhan data perlu ditinjau lebih dulu.",
  contact:
    "Anda dapat melanjutkan konsultasi langsung melalui WhatsApp WebKertasari.",
};

export const serviceChoices = [
  { label: "Website UMKM", intent: "umkm" },
  { label: "Website Portofolio", intent: "portfolio" },
  { label: "Website Organisasi", intent: "organization" },
  { label: "Dashboard Analitik", intent: "analytics" },
  { label: "Website AI/ML", intent: "ai" },
] as const;

export const budgetChoices = [
  "Di bawah Rp700.000",
  "Rp700.000 - Rp1.500.000",
  "Rp1.500.000 - Rp3.000.000",
  "Di atas Rp3.000.000",
];

export const deadlineChoices = [
  "1-2 minggu",
  "3-4 minggu",
  "1-2 bulan",
  "Fleksibel",
];
