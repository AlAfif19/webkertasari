# WebKertasari

Frontend statis WebKertasari V2 untuk promosi jasa pembuatan website lokal,
paket analitik/AI, konversi WhatsApp, dan chatbot rule-based.

## Development

```bash
npm install
npm run dev
```

Salin `.env.example` menjadi `.env.local` dan isi `NEXT_PUBLIC_SITE_URL` dengan
domain produksi yang sudah terverifikasi sebelum membuat build publik.

## Verification

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

Static output ditulis ke folder `out/`.

## Sebelum publikasi

- Isi `NEXT_PUBLIC_SITE_URL` dengan domain produksi terverifikasi.
- Tinjau ulang harga paket dan detail layanan.
- Tambahkan Maps dan media sosial hanya setelah URL valid tersedia.
- Ganti mockup Demo dan ulasan Simulasi setelah konten nyata terverifikasi.
