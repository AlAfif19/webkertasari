import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  LayoutTemplate,
  Network,
  School,
  Sparkles,
  Store,
} from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "Website UMKM",
    description:
      "Untuk toko, kuliner, jasa rumahan, bengkel, laundry, dan konter.",
    icon: Store,
  },
  {
    title: "Website Portofolio Pribadi",
    description:
      "Untuk freelancer, mahasiswa, guru, fotografer, dan kreator.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Website Organisasi",
    description:
      "Untuk karang taruna, komunitas, koperasi, dan yayasan.",
    icon: Network,
  },
  {
    title: "Website POS atau Layanan Lokal",
    description:
      "Untuk posyandu, POS RW, layanan warga, dan informasi kegiatan.",
    icon: Building2,
  },
  {
    title: "Website Company Profile",
    description: "Untuk bisnis kecil yang ingin tampil lebih profesional.",
    icon: LayoutTemplate,
  },
  {
    title: "Website Landing Page",
    description: "Untuk promosi produk, jasa, event, dan kampanye lokal.",
    icon: Sparkles,
  },
  {
    title: "Website Dashboard Analitik",
    description: "Untuk laporan data, grafik, dan pengambilan keputusan.",
    icon: BarChart3,
  },
  {
    title: "Website AI/ML",
    description:
      "Untuk segmentasi pelanggan, prediksi sederhana, dan rekomendasi berbasis data.",
    icon: School,
  },
];

export const websiteTypes = [
  "Website UMKM",
  "Website toko sederhana",
  "Website portofolio pribadi",
  "Website profil organisasi",
  "Website sekolah",
  "Website jasa rumahan",
  "Website landing page produk",
  "Website katalog produk",
  "Website posyandu",
  "Website POS RW",
  "Website koperasi",
  "Website komunitas",
  "Website event desa",
  "Website dashboard admin",
  "Website dashboard analitik",
  "Website AI customer insight",
];
