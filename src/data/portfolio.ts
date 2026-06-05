import type { PortfolioItem } from "@/types/content";

export const portfolio: PortfolioItem[] = [
  {
    title: "Website UMKM",
    type: "Promosi usaha lokal",
    description:
      "Website promosi usaha dengan tombol WhatsApp dan katalog layanan.",
    image: "/images/portfolio/umkm.svg",
    label: "Demo",
  },
  {
    title: "Website Portofolio",
    type: "Profil personal",
    description: "Website untuk menampilkan skill, pengalaman, dan karya.",
    image: "/images/portfolio/portfolio.svg",
    label: "Demo",
  },
  {
    title: "Website Organisasi",
    type: "Informasi komunitas",
    description:
      "Website kegiatan, profil pengurus, dan kontak organisasi.",
    image: "/images/portfolio/organization.svg",
    label: "Demo",
  },
  {
    title: "Website POS Pelayanan",
    type: "Layanan warga",
    description:
      "Website informasi layanan, jadwal kegiatan, dan kontak petugas.",
    image: "/images/portfolio/service.svg",
    label: "Demo",
  },
  {
    title: "Dashboard Analitik",
    type: "Data bisnis",
    description:
      "Website untuk melihat grafik, laporan, dan hasil analisis bisnis.",
    image: "/images/portfolio/analytics.svg",
    label: "Demo",
  },
  {
    title: "Undangan Pernikahan",
    type: "Undangan digital interaktif",
    description:
      "Demo undangan elegan dengan jadwal, galeri, RSVP, dan buku tamu simulasi.",
    image: "/images/portfolio/wedding.svg",
    label: "Demo",
    href: "/demo/undangan-pernikahan",
  },
];
