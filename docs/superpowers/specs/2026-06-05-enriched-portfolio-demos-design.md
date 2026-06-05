# Desain Pengayaan Demo Portofolio

Tanggal: 5 Juni 2026

## Tujuan

Memperkaya lima demo portofolio agar terasa seperti website lengkap, menambah
visual diagram pada dashboard analitik, memperbarui thumbnail dashboard pada
homepage, dan menggunakan potret profesional fiktif pada demo personal.

## Keputusan

- Semua demo mendapat bagian cerita/profil, proses atau langkah, dan FAQ.
- Dashboard mendapat bar chart, line chart, donut chart, sumber kanal, tabel
  aktivitas, dan insight simulasi.
- Thumbnail dashboard diganti dengan ilustrasi mini-dashboard yang lebih kaya.
- Demo personal memakai satu foto AI profesional fiktif dan disclosure jelas.
- Aset foto disimpan lokal; tidak ada hotlink atau identitas orang nyata.
- Semua data, foto, metrik, ulasan, dan identitas tetap berlabel demo,
  simulasi, atau fiktif.
- Implementasi tetap statis tanpa API atau database baru.

## Pengujian

- Data setiap demo memiliki story, process, dan FAQ.
- Demo personal merender foto profil fiktif.
- Dashboard merender tiga jenis diagram dan tabel aktivitas.
- Thumbnail dashboard menunjuk aset baru.
- Demo lain menampilkan bagian cerita, proses, dan FAQ.
- Test, lint, typecheck, dan production build lulus.
