# Portfolio Demos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan lima halaman demo statis dan membuat seluruh kartu portofolio dapat dibuka.

**Architecture:** Data demo terstruktur berada pada satu modul TypeScript. Route dinamis statis memilih data berdasarkan slug dan menyerahkannya ke renderer adaptif yang menyediakan variasi visual serta bagian khusus dashboard.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vitest, Testing Library.

---

### Task 1: Kontrak Data Demo

**Files:**
- Create: `src/types/portfolio-demo.ts`
- Create: `src/data/portfolio-demos.ts`
- Test: `src/data/portfolio-demos.test.ts`

- [ ] Tulis tes gagal untuk lima slug unik, lookup, dan kelengkapan section.
- [ ] Jalankan `npm test -- src/data/portfolio-demos.test.ts`.
- [ ] Implementasikan tipe dan lima data demo lengkap.
- [ ] Jalankan tes sampai lulus.
- [ ] Commit `feat: add portfolio demo content`.

### Task 2: Tautkan Semua Kartu

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `src/components/sections/content-sections.test.tsx`

- [ ] Ubah tes agar menuntut enam link demo unik.
- [ ] Jalankan tes dan pastikan gagal.
- [ ] Tambahkan href pada lima kartu lama.
- [ ] Jalankan tes sampai lulus.
- [ ] Commit `feat: link every portfolio demo`.

### Task 3: Route dan Renderer Demo

**Files:**
- Create: `src/components/demos/portfolio-demo-page.tsx`
- Create: `src/app/demo/[slug]/page.tsx`
- Test: `src/app/demo/[slug]/page.test.tsx`
- Modify: `src/app/globals.css`
- Modify: `README.md`

- [ ] Tulis tes gagal untuk static params dan tampilan lima demo.
- [ ] Jalankan `npm test -- "src/app/demo/[slug]/page.test.tsx"`.
- [ ] Implementasikan renderer, route, metadata, tema, dan dokumentasi.
- [ ] Jalankan tes route dan section sampai lulus.
- [ ] Commit `feat: build five static portfolio demos`.

### Task 4: Verifikasi dan Integrasi

- [ ] Jalankan `npm test`.
- [ ] Jalankan `npm run lint`.
- [ ] Jalankan `npm run typecheck`.
- [ ] Jalankan production build dengan URL Vercel.
- [ ] Merge ke `master` lokal karena pengguna meminta eksekusi langsung.
- [ ] Ulangi verifikasi pada hasil merge.
