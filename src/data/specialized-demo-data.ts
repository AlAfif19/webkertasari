import type {
  DemoAnalyticsData,
  DemoGalleryItem,
  DemoPosData,
  DemoProduct,
  DemoTransaction,
} from "@/types/portfolio-demo";

export const umkmProducts: DemoProduct[] = [
  {
    name: "Kopi Arabika Kertasari",
    category: "Kopi",
    size: "200 g",
    price: "Rp48.000",
    stock: 24,
    image: "/images/demos/umkm/kopi-arabika-kertasari.png",
    imageAlt:
      "Kemasan kopi Arabika Kertasari fiktif untuk katalog demo Rasa Bumi",
    badge: "Terlaris",
    description:
      "Biji kopi sangrai medium dengan aroma cokelat, karamel, dan sedikit citrus.",
  },
  {
    name: "Kopi Susu Gula Aren",
    category: "Minuman",
    size: "250 ml",
    price: "Rp18.000",
    stock: 18,
    image: "/images/demos/umkm/kopi-susu-gula-aren.png",
    imageAlt:
      "Botol kopi susu gula aren fiktif untuk katalog demo Rasa Bumi",
    badge: "Favorit",
    description:
      "Kopi susu siap minum dengan gula aren dan rasa manis yang seimbang.",
  },
  {
    name: "Teh Rempah Gunung",
    category: "Teh",
    size: "10 sachet",
    price: "Rp32.000",
    stock: 31,
    image: "/images/demos/umkm/teh-rempah-gunung.png",
    imageAlt:
      "Kotak teh rempah gunung fiktif untuk katalog demo Rasa Bumi",
    description:
      "Perpaduan teh, jahe, kayu manis, dan serai untuk minuman hangat.",
  },
  {
    name: "Keripik Kentang Balado",
    category: "Camilan",
    size: "150 g",
    price: "Rp22.000",
    stock: 42,
    image: "/images/demos/umkm/keripik-kentang-balado.png",
    imageAlt:
      "Kemasan keripik kentang balado fiktif untuk katalog demo Rasa Bumi",
    description: "Keripik kentang renyah dengan bumbu balado pedas manis.",
  },
  {
    name: "Madu Hutan Kertasari",
    category: "Produk Alam",
    size: "250 ml",
    price: "Rp68.000",
    stock: 7,
    image: "/images/demos/umkm/madu-hutan-kertasari.png",
    imageAlt:
      "Botol madu hutan Kertasari fiktif untuk katalog demo Rasa Bumi",
    badge: "Stok terbatas",
    description:
      "Madu berwarna amber dalam botol kaca yang cocok untuk konsumsi harian.",
  },
  {
    name: "Paket Hampers Lereng",
    category: "Hampers",
    size: "1 paket",
    price: "Rp145.000",
    stock: 9,
    image: "/images/demos/umkm/paket-hampers-lereng.png",
    imageAlt:
      "Paket hampers produk lokal fiktif untuk katalog demo Rasa Bumi",
    badge: "Paket hadiah",
    description:
      "Paket kopi, teh rempah, dan camilan dalam kemasan hadiah sederhana.",
  },
];

export const organizationGallery: DemoGalleryItem[] = [
  {
    title: "Pelatihan Konten Digital",
    date: "14 Juni 2026",
    location: "Balai Warga Kertasari",
    caption:
      "Peserta mempraktikkan foto produk dan penulisan katalog untuk usaha lokal.",
    image: "/images/demos/organization/pelatihan-konten-digital.png",
    imageAlt:
      "Kegiatan fiktif pemuda Indonesia mengikuti pelatihan konten digital di Kertasari",
  },
  {
    title: "Aksi Bersih Lingkungan",
    date: "21 Juni 2026",
    location: "Kampung Cibereum",
    caption:
      "Relawan membersihkan area bersama dan memilah sampah rumah tangga.",
    image: "/images/demos/organization/aksi-bersih-lingkungan.png",
    imageAlt:
      "Kegiatan fiktif relawan muda membersihkan lingkungan kampung di Kertasari",
  },
  {
    title: "Temu dan Briefing Relawan",
    date: "28 Juni 2026",
    location: "Sekretariat Komunitas",
    caption:
      "Relawan baru mengenal program, pembagian peran, dan jadwal kegiatan.",
    image: "/images/demos/organization/briefing-relawan.png",
    imageAlt:
      "Kegiatan fiktif briefing relawan muda Indonesia di ruang komunitas Kertasari",
  },
  {
    title: "Lokakarya Foto Produk",
    date: "12 Juli 2026",
    location: "Ruang Kreatif Tarumajaya",
    caption:
      "Pelaku usaha belajar pencahayaan sederhana untuk foto katalog ponsel.",
    image: "/images/demos/organization/lokakarya-foto-produk.png",
    imageAlt:
      "Kegiatan fiktif lokakarya fotografi produk bagi pemuda dan pelaku UMKM Kertasari",
  },
  {
    title: "Penanaman Bibit Pohon",
    date: "26 Juli 2026",
    location: "Lereng Desa Cibeureum",
    caption:
      "Anggota dan warga menanam bibit sebagai bagian dari edukasi lingkungan.",
    image: "/images/demos/organization/penanaman-pohon.png",
    imageAlt:
      "Kegiatan fiktif pemuda dan warga menanam bibit pohon di lereng Kertasari",
  },
  {
    title: "Diskusi Program Warga",
    date: "9 Agustus 2026",
    location: "Aula Desa Santosa",
    caption:
      "Perwakilan warga menyusun prioritas kegiatan keterampilan berikutnya.",
    image: "/images/demos/organization/diskusi-warga.png",
    imageAlt:
      "Kegiatan fiktif diskusi komunitas antara pemuda dan warga di Kertasari",
  },
];

const transactions: DemoTransaction[] = [
  {
    id: "TRX-1042",
    time: "10.42",
    customer: "Pelanggan umum",
    method: "QRIS",
    total: "Rp116.000",
    status: "Selesai",
  },
  {
    id: "TRX-1038",
    time: "10.18",
    customer: "Ayu",
    method: "Tunai",
    total: "Rp86.000",
    status: "Selesai",
  },
  {
    id: "TRX-1029",
    time: "09.47",
    customer: "Pelanggan umum",
    method: "Kartu debit",
    total: "Rp193.000",
    status: "Selesai",
  },
  {
    id: "TRX-1021",
    time: "09.12",
    customer: "Rizal",
    method: "QRIS",
    total: "Rp54.000",
    status: "Selesai",
  },
];

export const posData: DemoPosData = {
  cashier: "Dina Maharani",
  shift: "Shift pagi - 08.00-15.00",
  categories: ["Semua", "Kopi", "Minuman", "Teh", "Camilan", "Produk Alam"],
  products: umkmProducts.map((product, index) => ({
    ...product,
    sku: `RB-${String(index + 1).padStart(3, "0")}`,
  })),
  cart: [
    { name: "Madu Hutan Kertasari", quantity: 1, total: "Rp68.000" },
    { name: "Kopi Susu Gula Aren", quantity: 2, total: "Rp36.000" },
    { name: "Keripik Kentang Balado", quantity: 1, total: "Rp22.000" },
  ],
  subtotal: "Rp126.000",
  discount: "-Rp10.000",
  tax: "Rp0",
  total: "Rp116.000",
  paymentMethods: ["Tunai", "QRIS", "Kartu debit"],
  transactions,
};

export const analyticsData: DemoAnalyticsData = {
  period: "1-30 Juni 2026",
  topProducts: [
    { name: "Kopi Arabika Kertasari", units: 86, revenue: "Rp4.128.000" },
    { name: "Kopi Susu Gula Aren", units: 142, revenue: "Rp2.556.000" },
    { name: "Madu Hutan Kertasari", units: 31, revenue: "Rp2.108.000" },
    { name: "Keripik Kentang Balado", units: 74, revenue: "Rp1.628.000" },
  ],
  lowStock: [
    { name: "Madu Hutan Kertasari", stock: 7 },
    { name: "Paket Hampers Lereng", stock: 9 },
    { name: "Kopi Susu Gula Aren", stock: 18 },
  ],
  transactions,
};
