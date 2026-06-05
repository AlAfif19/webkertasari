import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title:
    "WebKertasari | Jasa Pembuatan Website Kertasari untuk UMKM dan Personal",
  description:
    "WebKertasari menyediakan jasa pembuatan website responsif untuk UMKM, personal, organisasi, layanan lokal, dashboard analitik, dan AI/ML. Konsultasi langsung via WhatsApp.",
  keywords: [
    "jasa pembuatan website Kertasari",
    "jasa website UMKM Kertasari",
    "website portofolio pribadi",
    "website organisasi desa",
    "website posyandu",
    "website dashboard analitik",
    "website AI ML",
    "jasa website Kabupaten Bandung",
  ],
  openGraph: {
    title: "WebKertasari",
    description:
      "Website profesional untuk usaha, personal, dan organisasi lokal.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
