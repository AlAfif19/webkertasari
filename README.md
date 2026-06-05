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

Di Vercel, isi Environment Variable sebagai dua kolom terpisah:

- Key: `NEXT_PUBLIC_SITE_URL`
- Value: `https://webkertasari.vercel.app`

Jangan menyertakan `NEXT_PUBLIC_SITE_URL=` di kolom Value.

## Verification

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

Deployment Vercel memakai integrasi Next.js native dan output internal `.next/`.

## Konten lokal

- Artikel lengkap tersedia di `/artikel/[slug]` dan dibangun statis dari
  `src/data/articles.ts`.
- Demo undangan tersedia di `/demo/undangan-pernikahan`.
- RSVP dan buku tamu demo hanya disimpan di `localStorage` browser; tidak ada
  data yang dikirim ke server.

## Sebelum publikasi

- Isi `NEXT_PUBLIC_SITE_URL` dengan domain produksi terverifikasi.
- Tinjau ulang harga paket dan detail layanan.
- Tambahkan Maps dan media sosial hanya setelah URL valid tersedia.
- Ganti mockup Demo dan ulasan Simulasi setelah konten nyata terverifikasi.
