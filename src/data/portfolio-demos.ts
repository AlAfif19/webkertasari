import type { PortfolioDemo } from "@/types/portfolio-demo";
import {
  analyticsData,
  organizationGallery,
  posData,
  umkmProducts,
} from "@/data/specialized-demo-data";

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
    products: umkmProducts,
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
    gallery: organizationGallery,
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
    brand: "Rasa Bumi POS",
    eyebrow: "Point of Sale - Data Simulasi",
    title: "Kasir, stok, dan transaksi dalam satu layar.",
    description:
      "Contoh aplikasi POS statis untuk memperlihatkan katalog kasir, keranjang, pembayaran, stok, dan riwayat transaksi toko.",
    primaryAction: "Buka kasir",
    secondaryAction: "Lihat fitur POS",
    image: "/images/portfolio/pos-dashboard.svg",
    disclaimer:
      "Rasa Bumi POS tidak memproses pembayaran. Produk, stok, kasir, dan transaksi pada halaman ini adalah simulasi.",
    stats: [
      { value: "42", label: "Transaksi simulasi hari ini" },
      { value: "Rp3,8 jt", label: "Penjualan simulasi" },
      { value: "6", label: "Produk dalam katalog" },
      { value: "3", label: "Metode pembayaran" },
    ],
    features: [
      {
        title: "Kasir cepat",
        description:
          "Produk, jumlah barang, diskon, dan total transaksi tersusun dalam satu alur.",
      },
      {
        title: "Pantauan stok",
        description:
          "Stok per produk dan peringatan stok menipis terlihat sebelum transaksi.",
      },
      {
        title: "Riwayat transaksi",
        description:
          "Tabel transaksi membantu kasir memeriksa metode pembayaran dan status.",
      },
    ],
    showcaseTitle: "Operasional Toko Hari Ini",
    showcase: [
      {
        title: "Kasir pagi",
        meta: "08.00-15.00 · Simulasi",
        description: "Ringkasan shift, nama kasir, transaksi, dan kas awal.",
      },
      {
        title: "Stok menipis",
        meta: "3 produk · Simulasi",
        description: "Daftar produk yang perlu diprioritaskan untuk pengadaan.",
      },
      {
        title: "Pembayaran digital",
        meta: "54% QRIS · Simulasi",
        description: "Distribusi cara bayar untuk membantu rekonsiliasi kas.",
      },
    ],
    pos: posData,
    story: {
      eyebrow: "Tentang Sistem Kasir",
      title: "Menyatukan transaksi dan stok tanpa tampilan yang rumit.",
      paragraphs: [
        "Rasa Bumi POS adalah contoh fiktif aplikasi kasir toko yang menampilkan katalog, keranjang, pembayaran, stok, dan transaksi dalam satu layar.",
        "Tampilan ini bersifat statis untuk menunjukkan struktur antarmuka. Tidak ada pembayaran atau perubahan stok yang benar-benar diproses.",
      ],
      highlights: ["Kasir ringkas", "Stok terlihat", "Transaksi tercatat"],
    },
    process: [
      { step: "01", title: "Pilih produk", description: "Kasir mencari produk berdasarkan kategori, nama, atau SKU." },
      { step: "02", title: "Periksa total", description: "Jumlah barang, diskon, dan total ditinjau di keranjang." },
      { step: "03", title: "Pilih pembayaran", description: "Metode pembayaran dipilih sebelum transaksi diselesaikan." },
    ],
    faq: [
      { question: "Apakah transaksi benar-benar tersimpan?", answer: "Tidak. Seluruh interaksi dan transaksi pada demo ini bersifat simulasi." },
      { question: "Bisakah POS terhubung printer?", answer: "Versi produksi dapat dirancang untuk printer struk dan perangkat kasir yang kompatibel." },
      { question: "Apakah stok dapat otomatis berkurang?", answer: "Bisa pada sistem produksi yang memakai database dan pencatatan transaksi." },
    ],
    closingTitle: "Kasir yang jelas membantu operasional tetap rapi.",
    closingDescription:
      "Katalog, pengguna, hak akses, metode pembayaran, stok, dan laporan dapat disesuaikan dengan proses toko.",
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
    analytics: analyticsData,
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
