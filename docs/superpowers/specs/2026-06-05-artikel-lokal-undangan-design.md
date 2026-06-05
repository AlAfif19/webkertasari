# Desain Artikel Lokal dan Demo Undangan Pernikahan

Tanggal: 5 Juni 2026

## Tujuan

Menambah konten yang dapat dibuka dan dibaca pada situs WebKertasari, sekaligus
memperluas portofolio dengan demo undangan pernikahan yang interaktif. Seluruh
fitur harus tetap dapat dibangun secara statis, berjalan tanpa database, dan
kompatibel dengan deployment Vercel yang sudah ada.

## Cakupan

Implementasi mencakup:

- Delapan artikel lengkap: enam topik yang sudah tampil di halaman utama dan dua
  artikel baru yang khusus membahas kebutuhan digital di Kertasari.
- Halaman daftar artikel yang tetap terhubung dengan bagian artikel di halaman
  utama.
- Halaman detail artikel dengan tampilan editorial.
- Satu kartu portofolio baru untuk demo undangan pernikahan.
- Halaman demo undangan bergaya elegan klasik.
- Countdown, galeri, susunan acara, peta, RSVP, dan buku tamu simulasi.
- Penyimpanan RSVP dan buku tamu hanya di browser menggunakan `localStorage`.

Tidak termasuk:

- CMS, database, autentikasi, dashboard admin, atau API eksternal.
- Pengiriman RSVP ke WhatsApp atau email.
- Unggah foto oleh pengguna.
- Klaim bahwa nama pasangan, acara, komentar, atau lokasi pada demo merupakan
  data pelanggan nyata.

## Pendekatan Teknis

Konten artikel disimpan sebagai data TypeScript lokal dengan slug unik. Route
dinamis `/artikel/[slug]` menghasilkan halaman statis melalui daftar slug yang
tersedia. Pendekatan ini mengikuti struktur data lokal yang sudah dipakai
WebKertasari, tidak menambah parser Markdown, dan menjaga type safety.

Demo undangan tersedia pada route tetap `/demo/undangan-pernikahan`. Kartu baru
di bagian portofolio mengarah ke route tersebut. Fitur interaktif dipisahkan
menjadi komponen client kecil agar isi utama undangan tetap dapat dirender
secara statis.

## Struktur Artikel

Setiap artikel memiliki:

- `slug`
- judul
- ringkasan
- tanggal
- kategori
- label lokasi bila relevan
- pengantar
- beberapa bagian dengan heading dan paragraf
- poin praktis bila diperlukan
- penutup dan CTA konsultasi

Enam artikel lama:

1. Kenapa UMKM Lokal Perlu Website?
2. Website vs Media Sosial untuk Promosi Usaha
3. Manfaat Website untuk Jasa Rumahan
4. Cara Website Membantu Pelanggan Menghubungi Anda
5. Kapan Bisnis Kecil Butuh Dashboard Analitik?
6. Apa Itu AI dan ML untuk Usaha Kecil?

Dua artikel khusus Kertasari:

1. Peluang Website untuk Usaha dan Wisata Lokal Kertasari
2. Cara Pelaku Usaha Kertasari Menjangkau Pelanggan dari Luar Daerah

Kartu pada bagian artikel menampilkan tautan yang jelas menuju halaman detail.
Halaman detail juga menyediakan navigasi kembali ke daftar artikel dan artikel
terkait.

## Desain Visual Artikel

Gaya yang dipilih adalah editorial:

- Header artikel menggabungkan kategori, judul, ringkasan, tanggal, dan bidang
  visual utama.
- Isi memakai kolom baca yang nyaman dengan elemen editorial pendukung seperti
  kutipan, poin penting, dan panel CTA.
- Desktop dapat memakai komposisi dua kolom pada header dan bagian pendukung.
- Mobile kembali menjadi satu kolom dengan ukuran teks dan jarak baca yang
  nyaman.
- Visual menggunakan aset lokal agar tidak bergantung pada host gambar pihak
  ketiga.

## Demo Undangan Pernikahan

Demo memakai identitas fiktif dan label `Demo` atau `Simulasi` yang terlihat.
Gaya visual elegan klasik memakai warna krem, emas lembut, tipografi serif, dan
ornamen yang tidak berlebihan.

Bagian halaman:

1. Cover pembuka dengan nama pasangan dan tombol membuka undangan.
2. Perkenalan pasangan.
3. Countdown menuju tanggal acara fiktif.
4. Detail akad dan resepsi.
5. Galeri menggunakan aset lokal.
6. Susunan acara.
7. Peta berupa tautan atau embed yang aman menuju lokasi contoh.
8. Form RSVP simulasi.
9. Form dan daftar buku tamu simulasi.
10. Penutup undangan.

## Interaksi dan Penyimpanan

RSVP meminta nama, status kehadiran, dan jumlah tamu yang terbatas. Buku tamu
meminta nama dan pesan singkat. Input divalidasi di browser sebelum disimpan.

Data disimpan pada key `localStorage` khusus demo dan hanya tersedia di browser
yang sama. Halaman harus menjelaskan bahwa:

- data tidak dikirim ke pemilik situs;
- data dapat hilang saat penyimpanan browser dibersihkan;
- fitur ini hanya demonstrasi.

Saat `localStorage` tidak tersedia, halaman tetap dapat dilihat dan form
menampilkan pesan bahwa penyimpanan simulasi tidak tersedia.

## Navigasi

- Kartu artikel pada homepage membuka `/artikel/[slug]`.
- Halaman artikel menyediakan tautan kembali ke `/#artikel`.
- Kartu undangan pada portofolio membuka `/demo/undangan-pernikahan`.
- Demo menyediakan tautan kembali ke `/#portofolio`.
- Tautan internal memakai komponen `Link` Next.js.

## Aksesibilitas

- Heading mengikuti urutan semantik.
- Semua kontrol memiliki label.
- Galeri memiliki teks alternatif yang menyatakan bahwa gambar adalah demo.
- Kontras warna tetap terbaca pada latar krem.
- Interaksi pembuka undangan dan form dapat digunakan dengan keyboard.
- Pesan sukses atau gagal form diumumkan dengan area status.

## Pengujian

Pengujian mencakup:

- Delapan kartu artikel tersedia dan memiliki tautan detail.
- Semua slug artikel dapat menghasilkan halaman.
- Halaman detail menampilkan judul dan isi artikel yang sesuai.
- Kartu demo undangan tersedia dan menuju route demo.
- RSVP memvalidasi input dan menyimpan data valid.
- Buku tamu memvalidasi input, menyimpan, dan menampilkan pesan.
- Penyimpanan simulasi tidak mengganggu render server.
- Typecheck, lint, seluruh tes, dan production build tetap lulus.

## Kriteria Selesai

- Delapan artikel dapat dibuka melalui URL masing-masing.
- Konten artikel lengkap, lokal, dan tidak membuat klaim pelanggan yang tidak
  terverifikasi.
- Demo undangan lengkap dapat digunakan pada desktop dan mobile.
- RSVP serta buku tamu bekerja sebagai simulasi lokal yang diberi label jelas.
- Tidak ada database atau environment variable baru.
- Deployment Vercel tetap memakai konfigurasi Next.js native yang ada.
