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
    story: {
      eyebrow: "Cerita Usaha",
      title: "Dari bahan lokal menuju etalase digital.",
      paragraphs: [
        "Rasa Bumi menggambarkan UMKM fiktif yang ingin menyatukan cerita produk, katalog, dan cara pemesanan pada satu alamat yang mudah dibagikan.",
        "Bagian cerita membantu pelanggan memahami bahan, proses, dan nilai usaha sebelum memilih produk atau menghubungi penjual.",
      ],
      highlights: ["Bahan lokal", "Kemasan praktis", "Pemesanan terarah"],
    },
    process: [
      { step: "01", title: "Pilih produk", description: "Baca varian, ukuran, dan keterangan produk demo." },
      { step: "02", title: "Kirim pesanan", description: "Gunakan pesan WhatsApp yang sudah membawa konteks pilihan." },
      { step: "03", title: "Konfirmasi", description: "Penjual memeriksa stok, biaya, dan waktu pengiriman." },
    ],
    faq: [
      { question: "Apakah harga pada demo nyata?", answer: "Tidak. Seluruh harga dan produk hanya contoh struktur katalog." },
      { question: "Bisakah katalog diperbanyak?", answer: "Bisa. Kategori dan produk dapat disesuaikan dengan usaha sebenarnya." },
      { question: "Apakah perlu pembayaran online?", answer: "Tidak wajib. Tahap awal dapat tetap memakai konfirmasi WhatsApp." },
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
    portrait: {
      src: "/images/demos/nadia-pratama.png",
      alt: "Potret AI Nadia Pratama, profesional fiktif untuk demo portofolio",
    },
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
    story: {
      eyebrow: "Tentang Profil",
      title: "Karya yang disertai konteks dan cara berpikir.",
      paragraphs: [
        "Nadia Pratama adalah persona fiktif yang digunakan untuk menunjukkan bagaimana seorang profesional dapat memperkenalkan fokus kerja dan pengalaman secara personal.",
        "Portofolio yang baik tidak hanya memajang hasil akhir, tetapi juga menjelaskan masalah, peran, proses, dan keputusan penting pada setiap karya.",
      ],
      highlights: ["Strategi produk", "Desain antarmuka", "Kolaborasi tim"],
    },
    process: [
      { step: "01", title: "Pahami masalah", description: "Mengumpulkan kebutuhan, batasan, dan konteks pengguna." },
      { step: "02", title: "Uji gagasan", description: "Membuat alur dan prototipe untuk memperoleh masukan." },
      { step: "03", title: "Rancang sistem", description: "Menyempurnakan UI dan dokumentasi agar dapat dikembangkan." },
    ],
    faq: [
      { question: "Apakah Nadia orang nyata?", answer: "Tidak. Nama, foto AI, pengalaman, dan karya semuanya fiktif." },
      { question: "Bisa dipakai untuk profesi lain?", answer: "Bisa untuk developer, fotografer, penulis, konsultan, dan lainnya." },
      { question: "Apakah CV dapat diunduh?", answer: "Fitur unduh dapat ditambahkan setelah dokumen nyata tersedia." },
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
    story: {
      eyebrow: "Tentang Komunitas",
      title: "Menyatukan program, kabar, dan partisipasi.",
      paragraphs: [
        "Kertasari Muda adalah komunitas fiktif yang menggambarkan kebutuhan organisasi lokal untuk menjelaskan tujuan dan kegiatan secara terbuka.",
        "Website menjadi arsip ringan untuk agenda, dokumentasi, profil pengurus, serta informasi bagi warga yang ingin berpartisipasi.",
      ],
      highlights: ["Terbuka", "Kolaboratif", "Berbasis kegiatan"],
    },
    process: [
      { step: "01", title: "Kenali program", description: "Pelajari fokus kegiatan dan sasaran penerima manfaat." },
      { step: "02", title: "Pilih peran", description: "Tentukan bentuk dukungan, relawan, atau kemitraan." },
      { step: "03", title: "Hubungi pengurus", description: "Gunakan kontak resmi yang dicantumkan organisasi." },
    ],
    faq: [
      { question: "Apakah komunitas ini nyata?", answer: "Tidak. Nama, program, anggota, dan agenda adalah simulasi." },
      { question: "Bisakah ada halaman berita?", answer: "Bisa, termasuk kategori berita, dokumentasi, dan arsip kegiatan." },
      { question: "Apakah pengurus dapat diperbarui?", answer: "Data pengurus dapat dikelola melalui pembaruan konten berkala." },
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
    story: {
      eyebrow: "Tentang Pelayanan",
      title: "Mengurangi kebingungan sebelum warga datang.",
      paragraphs: [
        "Pos Layanan Warga adalah contoh fiktif untuk menunjukkan bagaimana persyaratan, jadwal, dan pengumuman dapat disusun dalam bahasa yang mudah dipahami.",
        "Informasi yang konsisten membantu warga menyiapkan dokumen serta memilih jalur kontak yang tepat sebelum mengunjungi lokasi layanan.",
      ],
      highlights: ["Persyaratan jelas", "Jadwal terbuka", "Kontak terarah"],
    },
    process: [
      { step: "01", title: "Pilih layanan", description: "Cari jenis layanan dan baca persyaratan yang dibutuhkan." },
      { step: "02", title: "Siapkan dokumen", description: "Gunakan daftar periksa sebelum mengajukan layanan." },
      { step: "03", title: "Datang atau hubungi", description: "Ikuti jadwal dan saluran petugas yang sesuai." },
    ],
    faq: [
      { question: "Apakah ini situs instansi resmi?", answer: "Bukan. Seluruh identitas dan informasi pelayanan adalah demo." },
      { question: "Bisakah ditambah formulir?", answer: "Bisa, dengan penentuan keamanan dan alur pengelolaan data." },
      { question: "Apakah jadwal dapat berubah?", answer: "Konten jadwal dapat diperbarui sesuai keputusan pengelola." },
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
    image: "/images/portfolio/analytics-dashboard.svg",
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
    story: {
      eyebrow: "Tentang Dashboard",
      title: "Visual yang menjawab pertanyaan, bukan sekadar ramai.",
      paragraphs: [
        "Lentera Analytics menggambarkan dashboard fiktif yang merangkum data penjualan dan pelayanan menjadi indikator yang mudah dipindai.",
        "Setiap diagram diberi konteks dan insight singkat agar pengguna memahami perubahan, distribusi, serta tindakan yang dapat dipertimbangkan.",
      ],
      highlights: ["KPI utama", "Tren waktu", "Distribusi kanal"],
    },
    process: [
      { step: "01", title: "Hubungkan data", description: "Tentukan sumber dan struktur data yang dapat dipercaya." },
      { step: "02", title: "Pilih indikator", description: "Gunakan metrik yang berkaitan langsung dengan keputusan." },
      { step: "03", title: "Baca dan tindak", description: "Tinjau pola lalu catat tindakan serta hasilnya." },
    ],
    faq: [
      { question: "Apakah data dashboard nyata?", answer: "Tidak. Seluruh angka, grafik, dan insight adalah simulasi." },
      { question: "Data dapat berasal dari mana?", answer: "Bisa dari spreadsheet, database, sistem transaksi, atau API yang disetujui." },
      { question: "Apakah dashboard memerlukan login?", answer: "Untuk data sensitif, autentikasi dan pengaturan hak akses direkomendasikan." },
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
