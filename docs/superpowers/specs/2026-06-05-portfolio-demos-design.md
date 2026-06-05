# Desain Lima Demo Portofolio Tambahan

Tanggal: 5 Juni 2026

## Tujuan

Memberi tampilan demo yang dapat dibuka untuk seluruh kartu portofolio
WebKertasari, setara secara kedalaman dengan demo undangan tetapi tetap ringan,
statis, dan mudah dirawat.

## Keputusan

- Lima demo baru tersedia pada `/demo/[slug]`.
- Demo undangan tetap memakai route khusus yang sudah ada.
- Data dan susunan demo baru disimpan dalam TypeScript lokal.
- Satu renderer adaptif menangani tema dan konten berbeda tanpa menduplikasi
  struktur halaman.
- Seluruh nama usaha, orang, organisasi, layanan, metrik, dan aktivitas diberi
  status `Demo` atau `Simulasi`.
- Tidak ada database, API eksternal, login, atau environment variable baru.

## Demo

1. `website-umkm`: toko produk lokal dengan katalog, keunggulan, cara pesan,
   testimoni simulasi, dan CTA WhatsApp.
2. `website-portofolio`: profil desainer/developer fiktif dengan skill,
   pengalaman, karya, dan kontak.
3. `website-organisasi`: organisasi komunitas fiktif dengan program, agenda,
   pengurus, berita singkat, dan kontak.
4. `website-pos-pelayanan`: pusat layanan warga fiktif dengan jenis layanan,
   jadwal, alur pengajuan, pengumuman, dan kontak petugas.
5. `dashboard-analitik`: dashboard bisnis simulasi dengan KPI, grafik batang,
   distribusi layanan, aktivitas, dan catatan interpretasi.

## Arsitektur

`src/data/portfolio-demos.ts` menjadi sumber data dan lookup slug.
`src/components/demos/portfolio-demo-page.tsx` merender halaman berdasarkan
jenis demo. `src/app/demo/[slug]/page.tsx` menghasilkan static params, metadata,
dan 404 untuk slug tidak dikenal.

Semua kartu portofolio memiliki `href` dan tombol `Lihat demo`. Aset lama tetap
menjadi thumbnail sehingga tidak dibutuhkan gambar eksternal baru.

## Aksesibilitas dan Kejujuran Konten

- Heading berurutan dan link kembali tersedia.
- Metrik dashboard memiliki label teks, bukan hanya warna.
- Tombol dan link dapat digunakan melalui keyboard.
- Label `Demo` terlihat di header.
- Testimoni, data, agenda, dan identitas fiktif selalu disebut simulasi.

## Pengujian

- Semua enam kartu portofolio memiliki tautan demo unik.
- Lima slug baru dihasilkan sebagai static params.
- Setiap demo menampilkan judul, label demo, bagian khusus, dan link kembali.
- Slug lookup aman untuk input tidak dikenal.
- Seluruh test, lint, typecheck, dan production build lulus.
