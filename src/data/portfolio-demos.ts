import type { PortfolioDemo } from "@/types/portfolio-demo";

export const portfolioDemos: PortfolioDemo[] = [
  {
    slug: "website-umkm",
    kind: "umkm",
    brand: "Rasa Bumi",
    eyebrow: "Produk Lokal Kertasari",
    title: "Cita rasa pegunungan, hadir lebih dekat.",
    description:
      "Contoh website UMKM untuk memperkenalkan produk, katalog, cerita usaha, dan jalur pemesanan WhatsApp dalam satu halaman.",
    primaryAction: "Lihat katalog",
    secondaryAction: "Cara memesan",
    image: "/images/portfolio/umkm.svg",
    disclaimer:
      "Rasa Bumi adalah merek fiktif. Produk, harga, ulasan, dan data pada halaman ini hanya demo.",
    stats: [
      { value: "6", label: "Produk demo" },
      { value: "3", label: "Kategori rasa" },
      { value: "1 hari", label: "Contoh proses pesanan" },
    ],
    features: [
      {
        title: "Bahan pilihan",
        description:
          "Ruang untuk menjelaskan bahan, proses, dan keunggulan produk secara jujur.",
      },
      {
        title: "Katalog ringkas",
        description:
          "Pelanggan dapat melihat varian utama sebelum memulai percakapan.",
      },
      {
        title: "Pesan via WhatsApp",
        description:
          "Tombol pemesanan membawa konteks produk ke pesan awal pelanggan.",
      },
    ],
    showcaseTitle: "Pilihan Produk",
    showcase: [
      {
        title: "Kopi Lereng",
        meta: "Mulai Rp35.000 · Simulasi",
        description: "Profil rasa cokelat dan karamel untuk seduhan harian.",
      },
      {
        title: "Teh Rempah",
        meta: "Mulai Rp28.000 · Simulasi",
        description: "Campuran teh dan rempah hangat dalam kemasan praktis.",
      },
      {
        title: "Keripik Kebun",
        meta: "Mulai Rp18.000 · Simulasi",
        description: "Camilan renyah dengan pilihan rasa ringan dan pedas.",
      },
    ],
    closingTitle: "Siap menerima pesanan lebih terarah?",
    closingDescription:
      "Website UMKM dapat disesuaikan dengan identitas, produk, area layanan, dan alur pemesanan usaha Anda.",
  },
  {
    slug: "website-portofolio",
    kind: "personal",
    brand: "Nadia Pratama",
    eyebrow: "Product Designer · Profil Fiktif",
    title: "Merancang pengalaman digital yang jelas dan manusiawi.",
    description:
      "Contoh website personal untuk menampilkan profil, kemampuan, pengalaman, karya pilihan, dan jalur kontak profesional.",
    primaryAction: "Lihat karya",
    secondaryAction: "Tentang saya",
    image: "/images/portfolio/portfolio.svg",
    disclaimer:
      "Nama, pengalaman, karya, dan pencapaian pada portofolio ini sepenuhnya fiktif untuk kebutuhan demo.",
    stats: [
      { value: "4+", label: "Tahun simulasi" },
      { value: "12", label: "Proyek demo" },
      { value: "5", label: "Keahlian utama" },
    ],
    features: [
      {
        title: "Riset pengguna",
        description:
          "Memahami kebutuhan dan hambatan sebelum menentukan arah desain.",
      },
      {
        title: "UI dan prototipe",
        description:
          "Menyusun alur, antarmuka, dan prototipe yang mudah dievaluasi.",
      },
      {
        title: "Design system",
        description:
          "Menjaga konsistensi komponen saat produk dan tim berkembang.",
      },
    ],
    showcaseTitle: "Karya Pilihan",
    showcase: [
      {
        title: "SakuTani",
        meta: "Product design · Studi kasus simulasi",
        description:
          "Alur pencatatan hasil panen yang dibuat lebih ringkas untuk ponsel.",
      },
      {
        title: "RuangBelajar",
        meta: "UX research · Studi kasus simulasi",
        description:
          "Perbaikan navigasi materi dan pemantauan progres pembelajaran.",
      },
      {
        title: "KlinikKita",
        meta: "UI system · Studi kasus simulasi",
        description:
          "Sistem komponen untuk pengalaman pendaftaran layanan kesehatan.",
      },
    ],
    closingTitle: "Portofolio yang menjelaskan cara Anda bekerja.",
    closingDescription:
      "Struktur dapat disesuaikan untuk developer, desainer, fotografer, penulis, konsultan, atau profesi lainnya.",
  },
  {
    slug: "website-organisasi",
    kind: "organization",
    brand: "Kertasari Muda",
    eyebrow: "Komunitas Fiktif",
    title: "Bergerak bersama untuk lingkungan dan keterampilan pemuda.",
    description:
      "Contoh website organisasi untuk menjelaskan visi, program, agenda, pengurus, kabar kegiatan, dan cara bergabung.",
    primaryAction: "Lihat program",
    secondaryAction: "Agenda kegiatan",
    image: "/images/portfolio/organization.svg",
    disclaimer:
      "Kertasari Muda, pengurus, program, agenda, dan seluruh angka pada halaman ini adalah simulasi.",
    stats: [
      { value: "48", label: "Anggota simulasi" },
      { value: "7", label: "Program demo" },
      { value: "4", label: "Wilayah kegiatan" },
    ],
    features: [
      {
        title: "Kelas keterampilan",
        description:
          "Contoh program belajar bersama untuk kemampuan digital dan kreatif.",
      },
      {
        title: "Aksi lingkungan",
        description:
          "Ruang dokumentasi kegiatan kebersihan dan edukasi lingkungan.",
      },
      {
        title: "Kolaborasi warga",
        description:
          "Informasi bagi relawan dan mitra yang ingin mendukung kegiatan.",
      },
    ],
    showcaseTitle: "Agenda Terdekat",
    showcase: [
      {
        title: "Kelas Konten Digital",
        meta: "14 Juni 2026 · Simulasi",
        description: "Belajar menyusun foto, tulisan, dan katalog usaha lokal.",
      },
      {
        title: "Sabtu Bersih",
        meta: "21 Juni 2026 · Simulasi",
        description: "Kegiatan lingkungan dan pemilahan sampah bersama warga.",
      },
      {
        title: "Temu Relawan",
        meta: "28 Juni 2026 · Simulasi",
        description: "Perkenalan program dan pembagian peran relawan baru.",
      },
    ],
    closingTitle: "Satu pusat informasi untuk gerakan bersama.",
    closingDescription:
      "Website organisasi dapat memudahkan publik memahami kegiatan dan menemukan jalur partisipasi yang tepat.",
  },
  {
    slug: "website-pos-pelayanan",
    kind: "service",
    brand: "Pos Layanan Warga",
    eyebrow: "Pusat Informasi · Simulasi",
    title: "Informasi layanan warga yang lebih mudah ditemukan.",
    description:
      "Contoh website pelayanan untuk menampilkan jenis layanan, persyaratan, jadwal, alur pengajuan, pengumuman, dan kontak petugas.",
    primaryAction: "Cari layanan",
    secondaryAction: "Lihat jadwal",
    image: "/images/portfolio/service.svg",
    disclaimer:
      "Pos Layanan Warga ini bukan instansi resmi. Seluruh layanan, jadwal, persyaratan, dan kontak adalah demo.",
    stats: [
      { value: "8", label: "Layanan demo" },
      { value: "5 hari", label: "Jadwal layanan" },
      { value: "3 langkah", label: "Alur sederhana" },
    ],
    features: [
      {
        title: "Administrasi warga",
        description:
          "Contoh informasi surat pengantar, perubahan data, dan konsultasi.",
      },
      {
        title: "Jadwal kegiatan",
        description:
          "Warga dapat melihat waktu layanan dan kegiatan sebelum datang.",
      },
      {
        title: "Kontak petugas",
        description:
          "Jalur pertanyaan jelas untuk mengurangi kunjungan yang tidak perlu.",
      },
    ],
    showcaseTitle: "Layanan Populer",
    showcase: [
      {
        title: "Surat Pengantar",
        meta: "Estimasi 1 hari · Simulasi",
        description: "Daftar persyaratan dan alur pengajuan yang mudah dipindai.",
      },
      {
        title: "Jadwal Posyandu",
        meta: "Rabu pekan kedua · Simulasi",
        description: "Informasi waktu, lokasi contoh, dan hal yang perlu dibawa.",
      },
      {
        title: "Pengaduan Lingkungan",
        meta: "Respons jam kerja · Simulasi",
        description: "Formulir ringkas untuk meneruskan informasi kepada petugas.",
      },
    ],
    closingTitle: "Pelayanan dimulai dari informasi yang jelas.",
    closingDescription:
      "Konten dapat diatur sesuai layanan desa, komunitas, posyandu, koperasi, atau organisasi pelayanan lainnya.",
  },
  {
    slug: "dashboard-analitik",
    kind: "analytics",
    brand: "Lentera Analytics",
    eyebrow: "Dashboard Bisnis · Data Simulasi",
    title: "Lihat kondisi usaha tanpa tenggelam dalam angka.",
    description:
      "Contoh dashboard analitik untuk merangkum kinerja, tren permintaan, distribusi layanan, dan aktivitas bisnis.",
    primaryAction: "Lihat ringkasan",
    secondaryAction: "Baca insight",
    image: "/images/portfolio/analytics.svg",
    disclaimer:
      "Semua nilai, grafik, persentase, aktivitas, dan insight pada dashboard ini adalah data simulasi.",
    stats: [
      { value: "Rp18,4 jt", label: "Pendapatan simulasi" },
      { value: "126", label: "Pesanan simulasi" },
      { value: "4,8/5", label: "Kepuasan simulasi" },
      { value: "+12%", label: "Perubahan simulasi" },
    ],
    features: [
      {
        title: "Ringkasan KPI",
        description:
          "Metrik utama disusun untuk membantu pembacaan kondisi secara cepat.",
      },
      {
        title: "Tren bulanan",
        description:
          "Grafik sederhana menunjukkan perubahan tanpa visual yang berlebihan.",
      },
      {
        title: "Catatan insight",
        description:
          "Interpretasi singkat membantu menghubungkan data dengan tindakan.",
      },
    ],
    showcaseTitle: "Aktivitas dan Insight",
    showcase: [
      {
        title: "Produk unggulan",
        meta: "Kopi Lereng · 32% simulasi",
        description: "Kontribusi terbesar datang dari kategori minuman utama.",
      },
      {
        title: "Waktu tersibuk",
        meta: "Sabtu · 10.00-13.00 simulasi",
        description: "Kapasitas pelayanan dapat disiapkan sebelum periode ramai.",
      },
      {
        title: "Pelanggan kembali",
        meta: "41% simulasi",
        description: "Program tindak lanjut dapat difokuskan pada pelanggan baru.",
      },
    ],
    closingTitle: "Dashboard yang dimulai dari pertanyaan bisnis.",
    closingDescription:
      "Metrik, grafik, sumber data, dan hak akses dapat disesuaikan dengan proses usaha yang nyata.",
  },
];

export function getPortfolioDemoBySlug(
  slug: string,
): PortfolioDemo | undefined {
  return portfolioDemos.find((demo) => demo.slug === slug);
}
