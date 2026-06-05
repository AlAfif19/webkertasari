# PRD Analisis WebKertasari V2

**Produk:** WebKertasari  
**Versi:** V2  
**Tanggal:** 5 Juni 2026  
**Status:** Desain disetujui, menunggu rencana implementasi frontend  
**Pemilik kontak:** WebKertasari  
**WhatsApp dan telepon:** 082164410775  
**Format WhatsApp internasional:** 6282164410775  
**Email:** webkertasari@gmail.com  
**Lokasi:** Kertasari, Kabupaten Bandung, Jawa Barat

## 1. Ringkasan Eksekutif

WebKertasari V2 adalah website promosi jasa pembuatan website untuk UMKM, personal, organisasi, sekolah, komunitas, layanan warga, dan bisnis kecil. Produk menampilkan layanan dari landing page sederhana sampai dashboard analitik dan solusi AI/ML khusus.

Website dibangun sebagai situs statis yang cepat, responsif, mudah dirawat, dan berorientasi pada konversi ke WhatsApp. Pembeda utamanya adalah chatbot rule-based yang membantu pengunjung memahami layanan, menjawab pertanyaan umum, memilih paket, menyusun kebutuhan, dan mengirim ringkasan konsultasi ke WhatsApp tanpa API, database, atau penyimpanan server.

## 2. Latar Belakang dan Masalah

Calon pelanggan lokal sering belum memahami manfaat website, perbedaan paket, proses pengerjaan, atau kapan layanan analitik dan AI/ML dibutuhkan. Pertanyaan dasar yang sama juga dapat berulang dan menambah beban komunikasi pemilik jasa.

Website promosi yang hanya menampilkan informasi belum cukup membantu pengunjung menentukan langkah berikutnya. WebKertasari V2 perlu:

1. Menjelaskan layanan dalam bahasa sederhana.
2. Membuat paket dan harga awal mudah dibandingkan.
3. Menampilkan bukti kemampuan secara transparan.
4. Menjawab FAQ tanpa percakapan manual.
5. Menyaring kebutuhan awal calon pelanggan.
6. Mengarahkan setiap jalur penting ke WhatsApp.

## 3. Tujuan Produk

1. Membuat website promosi jasa yang profesional dan terpercaya.
2. Membantu pengunjung memahami penawaran utama dalam lima detik.
3. Memudahkan pengunjung menemukan layanan dan paket yang sesuai.
4. Menjadikan WhatsApp sebagai jalur konversi utama.
5. Menjawab pertanyaan dasar melalui chatbot rule-based.
6. Menjelaskan layanan analitik dan AI/ML sebagai layanan premium.
7. Menyediakan struktur konten modular yang mudah diperbarui.
8. Menjaga performa, aksesibilitas, SEO dasar, dan responsivitas.

## 4. Sasaran Pengguna

### 4.1 UMKM lokal

Warung, kuliner, toko sembako, laundry, bengkel, konter, jasa dekorasi, jasa servis, dan usaha rumahan.

### 4.2 Personal

Freelancer, mahasiswa, guru, fotografer, kreator, penulis, dan desainer.

### 4.3 Organisasi dan layanan lokal

Karang taruna, komunitas, koperasi, yayasan, kelompok tani, sekolah kecil, posyandu, POS RW, serta layanan informasi warga.

### 4.4 Bisnis berbasis data

Usaha yang membutuhkan dashboard transaksi, laporan pelanggan, analitik, segmentasi, prediksi sederhana, atau rekomendasi berbasis data.

## 5. Proposisi Nilai

WebKertasari membantu usaha dan organisasi lokal memiliki website yang rapi, responsif, mudah dibagikan, dan langsung terhubung ke WhatsApp. Untuk bisnis dengan kebutuhan lebih lanjut, WebKertasari juga menawarkan dashboard analitik dan solusi AI/ML yang dijelaskan tanpa istilah teknis berlebihan.

## 6. Keputusan Produk yang Disetujui

| Area | Keputusan |
|---|---|
| Cakupan | V2 penuh: landing page lengkap dan chatbot rule-based |
| Teknologi | Next.js 16, TypeScript, Tailwind CSS, shadcn/ui |
| Rendering | Static generation |
| Arah visual | Profesional Lokal dengan sentuhan Modern Teknologi pada Analitik/AI |
| Logo awal | Wordmark teks "WebKertasari" |
| Portofolio | Data contoh dengan label "Demo" |
| Ulasan | Data contoh dengan label "Simulasi" |
| Harga | Harga resmi dengan frasa "mulai dari" |
| Artikel | Kartu artikel statis tanpa halaman detail |
| Chatbot | Rule-based lengkap, tanpa AI API |
| Input bebas | Pencocokan kata kunci dengan fallback menu/WhatsApp |
| Penyimpanan | `localStorage`, tanpa pengiriman data ke server |
| Maps dan sosial | Disembunyikan sampai tautan valid tersedia |

## 7. Ruang Lingkup V2

### 7.1 Termasuk

1. Navbar sticky dan menu mobile.
2. Hero dengan CTA WhatsApp dan CTA chatbot.
3. Section layanan.
4. Section jenis website.
5. Section paket harga.
6. Section Analitik dan AI/ML.
7. Portofolio Demo.
8. Kartu artikel statis.
9. Ulasan Simulasi.
10. FAQ.
11. Kontak dan area layanan.
12. Footer.
13. Floating WhatsApp.
14. Chatbot rule-based.
15. Generator ringkasan konsultasi WhatsApp.
16. Penyimpanan sesi chatbot di `localStorage`.
17. SEO dasar dan metadata Open Graph.
18. Desain responsif dan aksesibel.
19. Konten modular dalam file data lokal.

### 7.2 Tidak Termasuk

1. OpenAI API atau chatbot AI.
2. Database dan penyimpanan percakapan server.
3. Dashboard admin.
4. CMS artikel.
5. Form kontak dengan backend.
6. Login pelanggan.
7. Pembayaran, invoice, dan pelacakan proyek.
8. Integrasi CRM, email, Google Sheets, atau sistem tiket.
9. Halaman detail artikel.
10. Tautan Maps atau media sosial yang belum terverifikasi.

## 8. Arsitektur Informasi Halaman

Urutan halaman:

1. Navbar
2. Hero
3. Layanan utama
4. Jenis website
5. Paket harga
6. Analitik dan AI/ML
7. Portofolio Demo
8. Artikel
9. Ulasan Simulasi
10. FAQ
11. Kontak dan area layanan
12. Footer
13. Floating WhatsApp dan chatbot

## 9. Kebutuhan Fungsional

### 9.1 Navbar

- Menampilkan wordmark WebKertasari.
- Menyediakan tautan Beranda, Layanan, Paket, Portofolio, Artikel, Review, dan Kontak.
- Sticky saat halaman digulir.
- Berubah menjadi menu hamburger pada mobile.
- CTA "Konsultasi Gratis" membuka WhatsApp.

### 9.2 Hero

- Judul utama menjelaskan jasa, target pengguna, dan area lokal.
- Subjudul menekankan website responsif dan koneksi WhatsApp.
- CTA utama membuka konsultasi WhatsApp.
- CTA kedua membuka chatbot.
- Menampilkan mockup website dan badge Responsif, SEO Ready, serta WhatsApp Ready.

### 9.3 Layanan dan jenis website

- Menampilkan delapan kategori layanan utama.
- Menampilkan daftar jenis website yang dapat dibuat.
- Bahasa berorientasi manfaat, bukan istilah teknis.
- Setiap kartu dapat mengarahkan pengunjung ke paket atau konsultasi.

### 9.4 Paket harga

| Paket | Harga awal | Sasaran |
|---|---:|---|
| Basic | Rp300.000 | Personal, UMKM kecil, jasa rumahan, portofolio sederhana |
| Profesional | Rp700.000 | UMKM, organisasi, komunitas, sekolah kecil, bisnis lokal |
| Premium Analitik | Rp2.500.000 | Bisnis dengan kebutuhan dashboard dan laporan data |
| AI/ML Custom | Rp4.000.000 | Bisnis dengan kebutuhan segmentasi, prediksi, atau rekomendasi |

Semua harga memakai frasa "Mulai dari". CTA paket menghasilkan pesan WhatsApp yang menyertakan nama paket.

### 9.5 Analitik dan AI/ML

- Menjelaskan manfaat dashboard, analisis pelanggan, grafik, segmentasi, prediksi sederhana, dan rekomendasi.
- Menjelaskan alasan biaya lebih tinggi secara singkat.
- Menggunakan visual gelap dengan aksen cyan untuk membedakan layanan premium.
- Tetap menggunakan bahasa yang mudah dipahami pengguna nonteknis.

### 9.6 Portofolio

- Menampilkan minimal lima contoh proyek.
- Setiap kartu diberi label "Demo".
- Tidak menyatakan proyek sebagai pekerjaan pelanggan nyata.
- Gambar menggunakan mockup lokal yang dioptimalkan.
- CTA mengarah ke konsultasi website serupa.

### 9.7 Artikel

- Menampilkan enam kartu artikel awal.
- Setiap kartu berisi judul, ringkasan, tanggal, dan kategori.
- Tidak memiliki halaman detail pada V2.
- Tombol menggunakan label yang tidak menyesatkan, misalnya "Ringkasan Artikel".

### 9.8 Ulasan

- Menampilkan empat ulasan awal.
- Section dan setiap item diberi label "Simulasi".
- Tidak memakai identitas atau foto pelanggan fiktif yang menyerupai testimoni nyata.

### 9.9 Kontak dan area layanan

- Menampilkan WhatsApp, telepon, email, dan lokasi teks.
- Menampilkan Kertasari, desa sekitar Kertasari, Kabupaten Bandung, dan layanan remote.
- Maps dan media sosial tidak dirender sebelum URL valid tersedia.

### 9.10 Floating WhatsApp

- Tetap mudah ditemukan tanpa menutupi chatbot.
- Menggunakan nomor `6282164410775`.
- Membuka tab baru dengan pesan konsultasi yang telah dienkode.
- Memiliki label aksesibel.

## 10. Spesifikasi Chatbot

### 10.1 Tujuan

Chatbot membantu pengunjung menemukan layanan, mendapatkan rekomendasi paket, menjawab FAQ, menyusun kebutuhan awal, dan meneruskan ringkasan ke WhatsApp.

### 10.2 Perilaku utama

1. Chatbot dibuka secara manual dari tombol floating.
2. Popup tidak terbuka otomatis.
3. Pengguna menerima sapaan dan pilihan kebutuhan.
4. Pengguna memilih jenis website.
5. Sistem merekomendasikan paket.
6. Sistem meminta nama.
7. Sistem meminta rentang budget.
8. Sistem meminta target deadline.
9. Sistem menerima kebutuhan fitur.
10. Sistem menampilkan ringkasan.
11. Pengguna mengirim ringkasan ke WhatsApp.

### 10.3 Input teks dan pencocokan kata kunci

Input dinormalisasi menjadi huruf kecil dan dicocokkan terhadap kelompok kata kunci:

- Harga: `harga`, `biaya`, `budget`, `paket`
- Durasi: `durasi`, `berapa lama`, `deadline`, `selesai`
- Revisi: `revisi`, `ubah desain`, `perbaikan`
- Domain/hosting: `domain`, `hosting`, `server`
- UMKM: `umkm`, `toko`, `warung`, `usaha`
- Portofolio: `portofolio`, `personal`, `freelancer`
- Organisasi: `organisasi`, `komunitas`, `yayasan`, `sekolah`
- Analitik: `analitik`, `dashboard`, `grafik`, `laporan`
- AI/ML: `ai`, `machine learning`, `prediksi`, `segmentasi`
- Kontak: `whatsapp`, `kontak`, `pesan`, `konsultasi`

Jika lebih dari satu kelompok cocok, prioritas mengikuti konteks langkah aktif, kemudian kecocokan frasa paling spesifik. Input yang tidak dikenali menghasilkan opsi kembali ke menu utama atau membuka WhatsApp.

### 10.4 Penyimpanan

- State sesi disimpan di `localStorage`.
- Data meliputi langkah aktif, nama, jenis website, paket, budget, deadline, kebutuhan fitur, dan pesan yang relevan.
- Pengguna dapat menghapus dan memulai ulang sesi.
- Jika `localStorage` tidak tersedia, chatbot tetap bekerja dalam state memori sampai halaman ditutup.
- Tidak ada data yang dikirim ke server.

### 10.5 Template ringkasan WhatsApp

```text
Halo WebKertasari, saya ingin konsultasi pembuatan website.

Nama: [nama]
Jenis website: [jenis]
Paket yang diminati: [paket]
Budget: [budget]
Target selesai: [deadline]
Kebutuhan fitur: [fitur]
```

## 11. Arah UI

### 11.1 Identitas utama

- Gaya: profesional, lokal, bersih, dan ramah.
- Warna utama: biru tua, hijau WhatsApp, putih, dan abu muda.
- Logo: wordmark "WebKertasari".
- Tipografi: sans-serif modern dengan hierarki tegas.
- Radius kartu dan tombol: moderat, tidak terlalu dekoratif.
- Shadow: ringan untuk membangun hierarki.

### 11.2 Sentuhan teknologi

Section Analitik dan AI/ML menggunakan:

- Latar biru gelap.
- Gradient halus.
- Aksen cyan.
- Grafik atau panel data abstrak.
- Animasi ringan yang tidak menghambat performa.

### 11.3 Responsivitas

- Mobile: satu kolom, CTA mudah ditekan, chatbot ringkas.
- Tablet: dua kolom untuk kartu dan hero bila ruang cukup.
- Desktop: dua sampai empat kolom sesuai jenis konten.
- Fokus utama berada pada layar mobile.

## 12. Struktur Teknis

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    chatbot/
    layout/
    sections/
    ui/
  data/
    articles.ts
    chatbot.ts
    contact.ts
    faq.ts
    portfolio.ts
    pricing.ts
    reviews.ts
    services.ts
    socials.ts
  lib/
    chatbot.ts
    storage.ts
    whatsapp.ts
  types/
    content.ts
    chatbot.ts
public/
  images/
```

Setiap section hanya bertanggung jawab pada presentasi dan interaksi lokalnya. Konten bisnis berada di `src/data`, sedangkan pembentukan URL WhatsApp, pencocokan chatbot, dan akses penyimpanan berada di `src/lib`.

## 13. SEO

**Meta title:** WebKertasari | Jasa Pembuatan Website Kertasari untuk UMKM dan Personal

**Meta description:** WebKertasari menyediakan jasa pembuatan website responsif untuk UMKM, personal, organisasi, layanan lokal, dashboard analitik, dan AI/ML. Konsultasi langsung via WhatsApp.

Kata kunci utama:

- jasa pembuatan website Kertasari
- jasa website UMKM Kertasari
- website portofolio pribadi
- website organisasi desa
- website posyandu
- website dashboard analitik
- website AI ML
- jasa website Kabupaten Bandung

Metadata Open Graph menggunakan judul, deskripsi, URL produksi, dan gambar preview lokal. URL produksi diisi saat domain telah ditentukan.

## 14. Kebutuhan Nonfungsional

### 14.1 Performa

- Menggunakan static generation.
- Gambar memakai WebP atau AVIF bila sesuai.
- Gambar nonkritis memakai lazy loading.
- Animasi dibatasi pada transform dan opacity.
- Library tambahan hanya dipasang bila benar-benar digunakan.

### 14.2 Aksesibilitas

- Navigasi dan chatbot dapat digunakan dengan keyboard.
- Dialog chatbot mengelola fokus dengan benar.
- Tombol ikon memiliki nama aksesibel.
- Kontras warna memenuhi WCAG AA.
- Pengguna yang memilih reduced motion tidak menerima animasi nonesensial.

### 14.3 Ketahanan

- Konten utama dan tautan WhatsApp tetap tersedia bila chatbot gagal.
- Data opsional kosong tidak menghasilkan kartu atau tautan palsu.
- Kegagalan `localStorage` tidak memblokir percakapan.
- Gambar memiliki fallback visual lokal.

## 15. Strategi Pengujian

1. Unit test untuk pembentukan URL WhatsApp.
2. Unit test untuk normalisasi dan pencocokan kata kunci.
3. Unit test untuk serialisasi state chatbot.
4. Component test untuk buka/tutup dan reset chatbot.
5. Component test untuk rekomendasi paket dan fallback.
6. Integration test untuk alur kebutuhan sampai ringkasan WhatsApp.
7. Pemeriksaan keyboard dan fokus dialog.
8. Pemeriksaan tampilan mobile, tablet, dan desktop.
9. Build produksi dan static generation.
10. Audit Lighthouse untuk performa, aksesibilitas, praktik terbaik, dan SEO.

## 16. Kriteria Keberhasilan

1. Pengunjung memahami jasa utama dalam lima detik.
2. Website tampil baik pada layar mobile.
3. CTA WhatsApp terlihat jelas pada setiap tahap penting.
4. Paket dapat dibandingkan dengan cepat.
5. Layanan Analitik dan AI/ML terlihat premium namun tetap mudah dipahami.
6. Chatbot menjawab FAQ dasar dan mengenali kelompok kata kunci.
7. Chatbot menghasilkan ringkasan kebutuhan yang valid untuk WhatsApp.
8. Sesi chatbot dapat dilanjutkan setelah refresh bila `localStorage` tersedia.
9. Konten dapat diperbarui melalui file data tanpa mengubah komponen.
10. Build produksi berhasil tanpa error.
11. Portofolio dan ulasan contoh diberi label transparan.
12. Tidak ada tautan Maps atau sosial placeholder.

## 17. Prioritas Implementasi Frontend

### Fase 1: Fondasi dan konversi utama

- Setup Next.js, TypeScript, Tailwind CSS, dan shadcn/ui.
- Design tokens, layout, navbar, hero, layanan, paket, kontak, footer.
- Helper dan CTA WhatsApp.
- Responsivitas dasar.

### Fase 2: Konten pendukung

- Jenis website.
- Section Analitik dan AI/ML.
- Portofolio Demo.
- Artikel.
- Ulasan Simulasi.
- FAQ dan area layanan.

### Fase 3: Chatbot

- Model data dan state machine.
- Pencocokan kata kunci.
- Form kebutuhan bertahap.
- `localStorage`.
- Ringkasan dan generator WhatsApp.
- Fallback serta reset sesi.

### Fase 4: Penyempurnaan

- Animasi ringan.
- Metadata dan Open Graph.
- Optimasi gambar.
- Aksesibilitas.
- Pengujian dan Lighthouse.

## 18. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Halaman terlalu panjang | Navigasi anchor, hierarki section yang jelas, dan CTA berkala |
| Chatbot terasa rumit | Pilihan cepat, progress yang jelas, reset, dan fallback menu |
| Harga dianggap harga final | Selalu gunakan frasa "mulai dari" dan jelaskan penyesuaian kebutuhan |
| Konten contoh dianggap nyata | Label Demo dan Simulasi pada section serta item |
| Layanan AI terasa terlalu teknis | Gunakan manfaat bisnis dan contoh konkret |
| Dua tombol floating saling menutupi | Atur posisi responsif dan prioritas visual |
| `localStorage` gagal | Gunakan state memori tanpa memblokir percakapan |

## 19. Dependensi Data Sebelum Publikasi

Data berikut tidak menghalangi implementasi, tetapi perlu disediakan sebelum publikasi akhir:

1. Domain produksi untuk canonical URL dan Open Graph.
2. Google Maps URL atau embed yang valid bila ingin menampilkan peta.
3. URL media sosial yang valid bila ingin menampilkan ikon sosial.
4. Mockup portofolio final.
5. Gambar Open Graph.
6. Peninjauan akhir terhadap harga dan detail layanan.

## 20. Roadmap Setelah V2

### V3

- Chatbot berbasis AI.
- Database.
- Dashboard admin.
- CMS artikel.
- Form order.
- Integrasi email atau Google Sheets.

### V4

- Portal pelanggan.
- Invoice dan pembayaran.
- Pelacakan proyek.
- Sistem tiket.
- Integrasi CRM.

## 21. Definisi Selesai

Frontend V2 dianggap selesai ketika seluruh section dalam ruang lingkup telah dibuat, chatbot rule-based bekerja dari awal sampai pengiriman ringkasan WhatsApp, konten contoh diberi label transparan, build produksi berhasil, layout telah diperiksa pada tiga kelompok viewport, dan audit aksesibilitas serta performa tidak menemukan masalah kritis.
