import type { PricingPackage } from "@/types/content";

export const pricingPackages: PricingPackage[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Rp300.000",
    audience:
      "Personal, UMKM kecil, jasa rumahan, dan portofolio sederhana.",
    features: [
      "1 halaman landing page",
      "Desain responsif",
      "Tombol WhatsApp",
      "Kontak dan lokasi",
      "SEO dasar",
      "1-2 revisi ringan",
    ],
  },
  {
    id: "professional",
    name: "Profesional",
    price: "Rp700.000",
    audience:
      "UMKM, organisasi, komunitas, sekolah kecil, dan bisnis lokal.",
    features: [
      "Landing page lengkap",
      "Section layanan dan paket",
      "Artikel dan review",
      "Floating WhatsApp",
      "SEO dasar",
      "Desain premium",
    ],
    featured: true,
  },
  {
    id: "analytics",
    name: "Premium Analitik",
    price: "Rp2.500.000",
    audience: "Bisnis yang membutuhkan dashboard, grafik, dan laporan data.",
    features: [
      "Dashboard data",
      "Grafik interaktif",
      "Filter data",
      "Export laporan",
      "Analisis pelanggan",
      "Visualisasi transaksi",
    ],
  },
  {
    id: "ai",
    name: "AI/ML Custom",
    price: "Rp4.000.000",
    audience:
      "Bisnis yang membutuhkan segmentasi, prediksi, atau rekomendasi.",
    features: [
      "Analisis kebutuhan data",
      "Pembersihan data",
      "Model AI/ML",
      "Dashboard hasil",
      "Pengujian model",
      "Dokumentasi",
    ],
  },
];
