# WebKertasari V2 Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready static WebKertasari V2 landing page with modular local content, WhatsApp conversion paths, and a persistent rule-based chatbot.

**Architecture:** Next.js 16 App Router renders the content-heavy landing page as static HTML with `output: "export"`. Business content stays in typed `src/data` modules, pure behavior stays in `src/lib`, and browser-only interactions are isolated in small Client Components. Vitest and Testing Library cover pure helpers and chatbot behavior before each implementation increment.

**Tech Stack:** Next.js 16.2, React 19.2, TypeScript, Tailwind CSS 4, shadcn/ui, Lucide React, Vitest 4, Testing Library, jsdom

**Source specification:** `docs/superpowers/specs/2026-06-05-webkertasari-v2-prd-analysis.md`

---

## File Map

### Project configuration

- `package.json`: scripts and runtime/development dependencies.
- `next.config.ts`: static export and image behavior.
- `postcss.config.mjs`: Tailwind CSS PostCSS plugin.
- `components.json`: shadcn/ui registry configuration.
- `vitest.config.ts`: jsdom test environment and `@/` alias.
- `src/test/setup.ts`: Testing Library matchers and cleanup.

### Application shell

- `src/app/layout.tsx`: fonts, metadata, global document shell.
- `src/app/page.tsx`: composes all landing-page sections.
- `src/app/globals.css`: Tailwind import, tokens, base styles, reduced motion.
- `src/app/icon.svg`: simple wordmark-compatible favicon.
- `src/app/opengraph-image.tsx`: static Open Graph image generated at build time.

### Types and data

- `src/types/content.ts`: service, package, portfolio, article, review, FAQ, and contact types.
- `src/types/chatbot.ts`: chatbot state, steps, messages, and intent types.
- `src/data/services.ts`: eight services and supported website types.
- `src/data/pricing.ts`: four official “Mulai dari” packages.
- `src/data/portfolio.ts`: five clearly labeled Demo entries.
- `src/data/articles.ts`: six static article summaries.
- `src/data/reviews.ts`: four clearly labeled Simulasi entries.
- `src/data/faq.ts`: public FAQ content.
- `src/data/contact.ts`: verified phone, email, location, and optional links.
- `src/data/chatbot.ts`: quick replies, FAQ answers, budget/deadline choices, and package recommendations.

### Pure behavior

- `src/lib/utils.ts`: shadcn `cn` utility.
- `src/lib/whatsapp.ts`: safely formats WhatsApp URLs and consultation summaries.
- `src/lib/chatbot.ts`: input normalization, intent matching, and package recommendation.
- `src/lib/storage.ts`: guarded chatbot session persistence.

### Reusable UI

- `src/components/ui/button.tsx`: shadcn button.
- `src/components/ui/card.tsx`: shadcn card.
- `src/components/ui/badge.tsx`: shadcn badge.
- `src/components/ui/sheet.tsx`: shadcn mobile navigation.
- `src/components/ui/dialog.tsx`: shadcn chatbot dialog.
- `src/components/ui/accordion.tsx`: shadcn FAQ accordion.
- `src/components/shared/section-heading.tsx`: consistent section headings.
- `src/components/shared/whatsapp-link.tsx`: accessible outbound WhatsApp CTA.

### Layout and sections

- `src/components/layout/navbar.tsx`: sticky desktop/mobile navigation.
- `src/components/layout/footer.tsx`: brand, navigation, and verified contact.
- `src/components/sections/hero-section.tsx`: primary value proposition and CTAs.
- `src/components/sections/hero-actions.tsx`: client-only hero chatbot launcher.
- `src/components/sections/services-section.tsx`: eight service cards.
- `src/components/sections/website-types-section.tsx`: supported site-type list.
- `src/components/sections/pricing-section.tsx`: four comparison cards.
- `src/components/sections/analytics-ai-section.tsx`: dark/cyan premium section.
- `src/components/sections/portfolio-section.tsx`: five Demo cards.
- `src/components/sections/articles-section.tsx`: six non-clickbait summary cards.
- `src/components/sections/reviews-section.tsx`: four Simulasi cards.
- `src/components/sections/faq-section.tsx`: accessible accordion.
- `src/components/sections/contact-section.tsx`: contact details and service area.
- `src/components/floating-actions.tsx`: coordinated WhatsApp and chatbot launchers.

### Chatbot

- `src/components/chatbot/chatbot-provider.tsx`: open state shared by hero and floating launcher.
- `src/components/chatbot/chatbot-widget.tsx`: dialog, reducer, persistence, and screen routing.
- `src/components/chatbot/chatbot-message-list.tsx`: semantic conversation history.
- `src/components/chatbot/chatbot-quick-replies.tsx`: quick action controls.
- `src/components/chatbot/chatbot-lead-form.tsx`: name, budget, deadline, and feature capture.
- `src/components/chatbot/chatbot-summary.tsx`: final review and WhatsApp CTA.

### Tests

- `src/lib/whatsapp.test.ts`
- `src/lib/chatbot.test.ts`
- `src/lib/storage.test.ts`
- `src/components/layout/navbar.test.tsx`
- `src/components/sections/content-sections.test.tsx`
- `src/components/chatbot/chatbot-widget.test.tsx`
- `src/app/page.test.tsx`

---

### Task 1: Bootstrap the static Next.js application

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tsconfig.json`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

- [ ] **Step 1: Create the package manifest**

```json
{
  "name": "webkertasari",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^1.17.0",
    "next": "^16.2.7",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.3.0",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^24.0.0",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.1.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.2.7",
    "jsdom": "^27.0.0",
    "tailwindcss": "^4.3.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5.9.0",
    "vitest": "^4.1.8"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: `package-lock.json` is created and npm exits with code 0.

- [ ] **Step 3: Add static export and tool configuration**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

```js
// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);
```

```ts
// vitest.config.ts
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
  },
});
```

```ts
// src/test/setup.ts
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => cleanup());
```

- [ ] **Step 4: Add the minimal app shell**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "WebKertasari",
  description: "Jasa pembuatan website untuk UMKM, personal, dan organisasi lokal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
```

```tsx
// src/app/page.tsx
export default function HomePage() {
  return <main><h1>WebKertasari</h1></main>;
}
```

```css
/* src/app/globals.css */
@import "tailwindcss";
@import "tw-animate-css";

:root {
  --navy-950: #071a2e;
  --navy-900: #102a43;
  --navy-700: #334e68;
  --green-600: #13795b;
  --green-500: #18a673;
  --cyan-300: #67e8f9;
  --surface: #f7fafc;
  --muted: #52606d;
  --border: #d9e2ec;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: white;
  color: var(--navy-950);
  font-family: var(--font-sans), Arial, sans-serif;
}
a, button { -webkit-tap-highlight-color: transparent; }
:focus-visible { outline: 3px solid var(--cyan-300); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Verify the bootstrap**

Run: `npm run typecheck && npm run lint && npm run build`

Expected: all commands exit 0 and `out/index.html` exists.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json next.config.ts postcss.config.mjs tsconfig.json eslint.config.mjs vitest.config.ts src
git commit -m "chore: bootstrap static Next.js frontend"
```

---

### Task 2: Add typed content data and WhatsApp conversion helpers

**Files:**
- Create: `src/types/content.ts`
- Create: `src/data/services.ts`
- Create: `src/data/pricing.ts`
- Create: `src/data/portfolio.ts`
- Create: `src/data/articles.ts`
- Create: `src/data/reviews.ts`
- Create: `src/data/faq.ts`
- Create: `src/data/contact.ts`
- Create: `src/lib/whatsapp.test.ts`
- Create: `src/lib/whatsapp.ts`

- [ ] **Step 1: Define content contracts**

```ts
// src/types/content.ts
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingPackage = {
  id: "basic" | "professional" | "analytics" | "ai";
  name: string;
  price: string;
  audience: string;
  features: string[];
  featured?: boolean;
};

export type PortfolioItem = {
  title: string;
  type: string;
  description: string;
  image: string;
  label: "Demo";
};

export type Article = {
  title: string;
  summary: string;
  date: string;
  category: string;
};

export type Review = {
  role: string;
  quote: string;
  rating: 5;
  label: "Simulasi";
};

export type Faq = { question: string; answer: string };

export type ContactData = {
  phoneDisplay: string;
  phoneInternational: string;
  email: string;
  location: string;
  serviceAreas: string[];
  mapsUrl?: string;
  socials: Partial<Record<"instagram" | "facebook" | "tiktok" | "linkedin", string>>;
};
```

- [ ] **Step 2: Add the verified contact and commercial content**

```ts
// src/data/contact.ts
import type { ContactData } from "@/types/content";

export const contact: ContactData = {
  phoneDisplay: "082164410775",
  phoneInternational: "6282164410775",
  email: "webkertasari@gmail.com",
  location: "Kertasari, Kabupaten Bandung, Jawa Barat",
  serviceAreas: ["Kertasari", "Desa sekitar Kertasari", "Kabupaten Bandung", "Layanan remote"],
  socials: {},
};
```

```ts
// src/data/pricing.ts
import type { PricingPackage } from "@/types/content";

export const pricingPackages: PricingPackage[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Rp300.000",
    audience: "Personal, UMKM kecil, jasa rumahan, dan portofolio sederhana.",
    features: ["1 halaman landing page", "Desain responsif", "Tombol WhatsApp", "Kontak dan lokasi", "SEO dasar", "1-2 revisi ringan"],
  },
  {
    id: "professional",
    name: "Profesional",
    price: "Rp700.000",
    audience: "UMKM, organisasi, komunitas, sekolah kecil, dan bisnis lokal.",
    features: ["Landing page lengkap", "Section layanan dan paket", "Artikel dan review", "Floating WhatsApp", "SEO dasar", "Desain premium"],
    featured: true,
  },
  {
    id: "analytics",
    name: "Premium Analitik",
    price: "Rp2.500.000",
    audience: "Bisnis yang membutuhkan dashboard, grafik, dan laporan data.",
    features: ["Dashboard data", "Grafik interaktif", "Filter data", "Export laporan", "Analisis pelanggan", "Visualisasi transaksi"],
  },
  {
    id: "ai",
    name: "AI/ML Custom",
    price: "Rp4.000.000",
    audience: "Bisnis yang membutuhkan segmentasi, prediksi, atau rekomendasi.",
    features: ["Analisis kebutuhan data", "Pembersihan data", "Model AI/ML", "Dashboard hasil", "Pengujian model", "Dokumentasi"],
  },
];
```

```ts
// src/data/services.ts
import {
  BarChart3, BriefcaseBusiness, Building2, LayoutTemplate,
  Network, School, Sparkles, Store,
} from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  { title: "Website UMKM", description: "Untuk toko, kuliner, jasa rumahan, bengkel, laundry, dan konter.", icon: Store },
  { title: "Website Portofolio Pribadi", description: "Untuk freelancer, mahasiswa, guru, fotografer, dan kreator.", icon: BriefcaseBusiness },
  { title: "Website Organisasi", description: "Untuk karang taruna, komunitas, koperasi, dan yayasan.", icon: Network },
  { title: "Website POS atau Layanan Lokal", description: "Untuk posyandu, POS RW, layanan warga, dan informasi kegiatan.", icon: Building2 },
  { title: "Website Company Profile", description: "Untuk bisnis kecil yang ingin tampil lebih profesional.", icon: LayoutTemplate },
  { title: "Website Landing Page", description: "Untuk promosi produk, jasa, event, dan kampanye lokal.", icon: Sparkles },
  { title: "Website Dashboard Analitik", description: "Untuk laporan data, grafik, dan pengambilan keputusan.", icon: BarChart3 },
  { title: "Website AI/ML", description: "Untuk segmentasi pelanggan, prediksi sederhana, dan rekomendasi berbasis data.", icon: School },
];

export const websiteTypes = [
  "Website UMKM", "Website toko sederhana", "Website portofolio pribadi",
  "Website profil organisasi", "Website sekolah", "Website jasa rumahan",
  "Website landing page produk", "Website katalog produk", "Website posyandu",
  "Website POS RW", "Website koperasi", "Website komunitas",
  "Website event desa", "Website dashboard admin", "Website dashboard analitik",
  "Website AI customer insight",
];
```

```ts
// src/data/portfolio.ts
import type { PortfolioItem } from "@/types/content";

export const portfolio: PortfolioItem[] = [
  { title: "Website UMKM", type: "Promosi usaha lokal", description: "Website promosi usaha dengan tombol WhatsApp dan katalog layanan.", image: "/images/portfolio/umkm.webp", label: "Demo" },
  { title: "Website Portofolio", type: "Profil personal", description: "Website untuk menampilkan skill, pengalaman, dan karya.", image: "/images/portfolio/portfolio.webp", label: "Demo" },
  { title: "Website Organisasi", type: "Informasi komunitas", description: "Website kegiatan, profil pengurus, dan kontak organisasi.", image: "/images/portfolio/organization.webp", label: "Demo" },
  { title: "Website POS Pelayanan", type: "Layanan warga", description: "Website informasi layanan, jadwal kegiatan, dan kontak petugas.", image: "/images/portfolio/service.webp", label: "Demo" },
  { title: "Dashboard Analitik", type: "Data bisnis", description: "Website untuk melihat grafik, laporan, dan hasil analisis bisnis.", image: "/images/portfolio/analytics.webp", label: "Demo" },
];
```

```ts
// src/data/articles.ts
import type { Article } from "@/types/content";

export const articles: Article[] = [
  { title: "Kenapa UMKM Lokal Perlu Website?", summary: "Website membantu usaha terlihat profesional, ditemukan, dan mudah dihubungi.", date: "5 Juni 2026", category: "UMKM" },
  { title: "Website vs Media Sosial untuk Promosi Usaha", summary: "Keduanya saling melengkapi: website menjadi pusat informasi yang Anda kendalikan.", date: "5 Juni 2026", category: "Promosi" },
  { title: "Manfaat Website untuk Jasa Rumahan", summary: "Tampilkan layanan, area kerja, harga awal, dan jalur pemesanan dengan jelas.", date: "5 Juni 2026", category: "Bisnis Lokal" },
  { title: "Cara Website Membantu Pelanggan Menghubungi Anda", summary: "CTA dan pesan WhatsApp otomatis mengurangi langkah sebelum konsultasi.", date: "5 Juni 2026", category: "Konversi" },
  { title: "Kapan Bisnis Kecil Butuh Dashboard Analitik?", summary: "Dashboard berguna saat data transaksi mulai sulit dibaca secara manual.", date: "5 Juni 2026", category: "Analitik" },
  { title: "Apa Itu AI dan ML untuk Usaha Kecil?", summary: "AI dapat membantu membaca pola, segmentasi, dan prediksi sederhana dari data.", date: "5 Juni 2026", category: "AI/ML" },
];
```

```ts
// src/data/reviews.ts
import type { Review } from "@/types/content";

export const reviews: Review[] = [
  { role: "Pemilik UMKM Lokal", quote: "Website usaha terlihat lebih rapi dan pelanggan bisa langsung menghubungi WhatsApp.", rating: 5, label: "Simulasi" },
  { role: "Freelancer", quote: "Portofolio menjadi lebih mudah dibagikan kepada calon klien.", rating: 5, label: "Simulasi" },
  { role: "Pengurus Komunitas", quote: "Informasi kegiatan organisasi lebih mudah disusun dan dibagikan.", rating: 5, label: "Simulasi" },
  { role: "Pemilik Jasa Rumahan", quote: "Pelanggan lebih mudah melihat layanan dan area yang dilayani.", rating: 5, label: "Simulasi" },
];
```

```ts
// src/data/faq.ts
import type { Faq } from "@/types/content";

export const faq: Faq[] = [
  { question: "Berapa harga pembuatan website?", answer: "Paket Basic mulai dari Rp300.000, Profesional Rp700.000, Analitik Rp2.500.000, dan AI/ML Rp4.000.000. Harga akhir menyesuaikan kebutuhan." },
  { question: "Berapa lama pengerjaan website?", answer: "Durasi ditentukan oleh jumlah halaman, kesiapan konten, fitur, dan revisi. Estimasi diberikan setelah konsultasi awal." },
  { question: "Apakah desain bisa direvisi?", answer: "Ya. Paket Basic mencakup 1-2 revisi ringan. Cakupan revisi paket lain disepakati saat konsultasi." },
  { question: "Apakah termasuk domain dan hosting?", answer: "Domain dan hosting dibahas terpisah sesuai kebutuhan, masa aktif, dan penyedia yang dipilih." },
  { question: "Apakah website bisa dibuka di HP?", answer: "Ya. Seluruh paket dibuat responsif untuk mobile, tablet, dan desktop." },
  { question: "Apakah bisa membuat dashboard atau AI?", answer: "Ya. Paket Analitik dan AI/ML tersedia untuk bisnis yang sudah memiliki kebutuhan dan data yang cukup." },
];
```

- [ ] **Step 3: Write failing WhatsApp helper tests**

```ts
// src/lib/whatsapp.test.ts
import { describe, expect, it } from "vitest";
import { buildConsultationMessage, buildWhatsAppUrl } from "./whatsapp";

describe("buildWhatsAppUrl", () => {
  it("encodes the message and uses the international number", () => {
    const url = buildWhatsAppUrl("Halo WebKertasari");
    expect(url).toBe("https://wa.me/6282164410775?text=Halo%20WebKertasari");
  });
});

describe("buildConsultationMessage", () => {
  it("includes every collected lead field", () => {
    expect(buildConsultationMessage({
      name: "Dina",
      websiteType: "Website UMKM",
      packageName: "Profesional",
      budget: "Rp700.000 - Rp1.500.000",
      deadline: "1 bulan",
      features: "Katalog dan WhatsApp",
    })).toContain("Nama: Dina");
  });
});
```

- [ ] **Step 4: Run the tests to verify failure**

Run: `npm test -- src/lib/whatsapp.test.ts`

Expected: FAIL because `src/lib/whatsapp.ts` does not exist.

- [ ] **Step 5: Implement the WhatsApp helper**

```ts
// src/lib/whatsapp.ts
import { contact } from "@/data/contact";

export type ConsultationLead = {
  name: string;
  websiteType: string;
  packageName: string;
  budget: string;
  deadline: string;
  features: string;
};

export function buildConsultationMessage(lead: ConsultationLead): string {
  return [
    "Halo WebKertasari, saya ingin konsultasi pembuatan website.",
    "",
    `Nama: ${lead.name}`,
    `Jenis website: ${lead.websiteType}`,
    `Paket yang diminati: ${lead.packageName}`,
    `Budget: ${lead.budget}`,
    `Target selesai: ${lead.deadline}`,
    `Kebutuhan fitur: ${lead.features}`,
  ].join("\n");
}

export function buildWhatsAppUrl(
  message = "Halo WebKertasari, saya ingin konsultasi pembuatan website.",
): string {
  return `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 6: Verify data and helper behavior**

Run: `npm test -- src/lib/whatsapp.test.ts && npm run typecheck`

Expected: tests pass and TypeScript exits 0.

- [ ] **Step 7: Commit**

```bash
git add src/types src/data src/lib/whatsapp.ts src/lib/whatsapp.test.ts
git commit -m "feat: add typed content and WhatsApp helpers"
```

---

### Task 3: Build the design system and shared conversion components

**Files:**
- Create: `components.json`
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/ui/badge.tsx`
- Create: `src/components/ui/sheet.tsx`
- Create: `src/components/ui/dialog.tsx`
- Create: `src/components/ui/accordion.tsx`
- Create: `src/components/shared/section-heading.tsx`
- Create: `src/components/shared/whatsapp-link.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Initialize shadcn/ui**

Run: `npx shadcn@latest init --defaults`

Expected: `components.json` and `src/lib/utils.ts` are created without replacing the approved global tokens.

- [ ] **Step 2: Add only required shadcn components**

Run: `npx shadcn@latest add button card badge sheet dialog accordion`

Expected: six component modules are added under `src/components/ui`.

- [ ] **Step 3: Add the shared section heading**

```tsx
// src/components/shared/section-heading.tsx
import { Badge } from "@/components/ui/badge";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "center", inverse = false }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
      <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${inverse ? "text-white" : "text-slate-950"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 ${inverse ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}
```

- [ ] **Step 4: Add the shared WhatsApp CTA**

```tsx
// src/components/shared/whatsapp-link.tsx
import { MessageCircle } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  message?: string;
  label: string;
  variant?: ComponentProps<typeof Button>["variant"];
  className?: string;
};

export function WhatsAppLink({ message, label, variant = "default", className }: Props) {
  return (
    <Button asChild variant={variant} className={className}>
      <a href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
```

- [ ] **Step 5: Extend global layout utilities**

Add reusable `.site-container`, `.section-space`, `.section-muted`, `.text-balance`, and dark analytics gradient styles to `globals.css`. Keep every color sourced from the approved navy, green, gray, and cyan tokens.

- [ ] **Step 6: Verify**

Run: `npm run typecheck && npm run lint`

Expected: both commands exit 0.

- [ ] **Step 7: Commit**

```bash
git add components.json src/app/globals.css src/components/ui src/components/shared src/lib/utils.ts
git commit -m "feat: add WebKertasari design system"
```

---

### Task 4: Implement navigation, hero, pricing, contact, and footer

**Files:**
- Create: `src/components/layout/navbar.test.tsx`
- Create: `src/components/layout/navbar.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/sections/hero-section.tsx`
- Create: `src/components/sections/hero-actions.tsx`
- Create: `src/components/sections/services-section.tsx`
- Create: `src/components/sections/pricing-section.tsx`
- Create: `src/components/sections/contact-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write the failing navbar test**

```tsx
// src/components/layout/navbar.test.tsx
import { render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";

it("renders the brand, anchors, and WhatsApp CTA", () => {
  render(<Navbar />);
  expect(screen.getByText("WebKertasari")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Layanan" })).toHaveAttribute("href", "#layanan");
  expect(screen.getByRole("link", { name: "Konsultasi Gratis" })).toHaveAttribute("href", expect.stringContaining("wa.me/6282164410775"));
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm test -- src/components/layout/navbar.test.tsx`

Expected: FAIL because `Navbar` does not exist.

- [ ] **Step 3: Implement the sticky responsive navbar**

Create `Navbar` as a Client Component only because the mobile `Sheet` needs interaction. Use the same anchor list for desktop and mobile, close the sheet after selection, and preserve a visible WhatsApp CTA.

```tsx
const navigation = [
  ["Beranda", "#beranda"],
  ["Layanan", "#layanan"],
  ["Paket", "#paket"],
  ["Portofolio", "#portofolio"],
  ["Artikel", "#artikel"],
  ["Review", "#review"],
  ["Kontak", "#kontak"],
] as const;
```

- [ ] **Step 4: Implement conversion-critical sections**

Implement:

- Hero copy exactly from the PRD with `id="beranda"`.
- Eight service cards with `id="layanan"`.
- Four pricing cards with `id="paket"` and “Mulai dari”.
- Contact details and area chips with `id="kontak"`.
- Footer that renders social links only when `contact.socials` has values.

The hero chatbot button must dispatch a browser event named `webkertasari:open-chatbot`; the provider introduced later will listen for it. This keeps the server-rendered hero independent from chatbot internals.

```tsx
<Button
  type="button"
  variant="outline"
  onClick={() => window.dispatchEvent(new Event("webkertasari:open-chatbot"))}
>
  Coba Chatbot
</Button>
```

Place that control in `src/components/sections/hero-actions.tsx` so `hero-section.tsx` remains a Server Component.

```tsx
// src/components/sections/hero-actions.tsx
"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <WhatsAppLink label="Konsultasi via WhatsApp" />
      <Button
        type="button"
        variant="outline"
        onClick={() => window.dispatchEvent(new Event("webkertasari:open-chatbot"))}
      >
        Coba Chatbot
      </Button>
    </div>
  );
}
```

- [ ] **Step 5: Compose the first usable homepage**

```tsx
// src/app/page.tsx
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 6: Verify test and static build**

Run: `npm test -- src/components/layout/navbar.test.tsx && npm run typecheck && npm run build`

Expected: tests pass; `out/index.html` contains `WebKertasari`, `Mulai dari`, and verified contact text.

- [ ] **Step 7: Commit**

```bash
git add src/app/page.tsx src/components/layout src/components/sections
git commit -m "feat: build core landing page conversion flow"
```

---

### Task 5: Add supporting content sections with transparent labels

**Files:**
- Create: `src/components/sections/content-sections.test.tsx`
- Create: `src/components/sections/website-types-section.tsx`
- Create: `src/components/sections/analytics-ai-section.tsx`
- Create: `src/components/sections/portfolio-section.tsx`
- Create: `src/components/sections/articles-section.tsx`
- Create: `src/components/sections/reviews-section.tsx`
- Create: `src/components/sections/faq-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write failing transparency tests**

```tsx
// src/components/sections/content-sections.test.tsx
import { render, screen } from "@testing-library/react";
import { ArticlesSection } from "./articles-section";
import { PortfolioSection } from "./portfolio-section";
import { ReviewsSection } from "./reviews-section";

it("labels every portfolio item as Demo", () => {
  render(<PortfolioSection />);
  expect(screen.getAllByText("Demo")).toHaveLength(5);
});

it("labels every review as Simulasi", () => {
  render(<ReviewsSection />);
  expect(screen.getAllByText("Simulasi")).toHaveLength(4);
});

it("does not pretend article cards have detail pages", () => {
  render(<ArticlesSection />);
  expect(screen.queryByRole("link", { name: /baca selengkapnya/i })).not.toBeInTheDocument();
  expect(screen.getAllByText("Ringkasan Artikel")).toHaveLength(6);
});
```

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/components/sections/content-sections.test.tsx`

Expected: FAIL because the section modules do not exist.

- [ ] **Step 3: Implement the supporting sections**

Implement with these fixed rendering rules:

- Website types use compact badges/cards and do not duplicate service descriptions.
- Analytics/AI uses the approved navy gradient and cyan accents.
- Portfolio uses five local SVG/WebP mockups under `public/images/portfolio`.
- Article cards are informational only and use a non-link “Ringkasan Artikel” label.
- Reviews display generic roles, no fabricated person names/photos, and visible Simulasi labels.
- FAQ uses shadcn Accordion.

```tsx
// src/components/sections/portfolio-section.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { portfolio } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portofolio" className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Portofolio Demo"
          title="Contoh Website yang Bisa Anda Pesan"
          description="Contoh berikut adalah demonstrasi kemampuan dan bukan klaim proyek pelanggan."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <Image src={item.image} alt={`Mockup demo ${item.title}`} width={720} height={480} className="aspect-[3/2] w-full object-cover" />
              <CardContent className="p-6">
                <Badge>{item.label}</Badge>
                <p className="mt-4 text-sm text-slate-500">{item.type}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Use the same map-based structure for articles and reviews. Article controls must be `<span>Ringkasan Artikel</span>`, not links. Review cards must render `<Badge variant="outline">Simulasi</Badge>`. The FAQ maps `faq` into `AccordionItem` entries using a slug derived from the array index (`faq-1` through `faq-6`).

- [ ] **Step 4: Add sections to `page.tsx` in approved order**

```tsx
<ServicesSection />
<WebsiteTypesSection />
<PricingSection />
<AnalyticsAiSection />
<PortfolioSection />
<ArticlesSection />
<ReviewsSection />
<FaqSection />
<ContactSection />
```

- [ ] **Step 5: Verify content semantics**

Run: `npm test -- src/components/sections/content-sections.test.tsx && npm run typecheck && npm run lint`

Expected: tests pass; there are exactly five Demo labels and four Simulasi labels.

- [ ] **Step 6: Commit**

```bash
git add public/images src/app/page.tsx src/components/sections
git commit -m "feat: add supporting landing page content"
```

---

### Task 6: Implement chatbot intent matching and package recommendations

**Files:**
- Create: `src/types/chatbot.ts`
- Create: `src/data/chatbot.ts`
- Create: `src/lib/chatbot.test.ts`
- Create: `src/lib/chatbot.ts`

- [ ] **Step 1: Define chatbot contracts**

```ts
// src/types/chatbot.ts
export type ChatIntent =
  | "price"
  | "duration"
  | "revision"
  | "hosting"
  | "umkm"
  | "portfolio"
  | "organization"
  | "analytics"
  | "ai"
  | "contact"
  | "unknown";

export type ChatStep =
  | "welcome"
  | "service"
  | "recommendation"
  | "name"
  | "budget"
  | "deadline"
  | "features"
  | "summary";

export type ChatbotLead = {
  name: string;
  websiteType: string;
  packageName: string;
  budget: string;
  deadline: string;
  features: string;
};

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export type ChatbotSession = {
  version: 1;
  step: ChatStep;
  lead: ChatbotLead;
  messages: ChatMessage[];
};
```

- [ ] **Step 2: Write failing intent tests**

```ts
// src/lib/chatbot.test.ts
import { describe, expect, it } from "vitest";
import { matchIntent, recommendPackage } from "./chatbot";

describe("matchIntent", () => {
  it.each([
    ["Berapa harga website?", "price"],
    ["butuh dashboard laporan", "analytics"],
    ["mau machine learning untuk prediksi", "ai"],
    ["apakah termasuk domain dan hosting?", "hosting"],
  ])("maps %s to %s", (input, expected) => {
    expect(matchIntent(input)).toBe(expected);
  });

  it("returns unknown for unrelated input", () => {
    expect(matchIntent("cuaca hari ini")).toBe("unknown");
  });
});

describe("recommendPackage", () => {
  it("recommends Professional for an organization site", () => {
    expect(recommendPackage("organization")).toBe("Profesional");
  });
});
```

- [ ] **Step 3: Run tests to verify failure**

Run: `npm test -- src/lib/chatbot.test.ts`

Expected: FAIL because chatbot behavior is not implemented.

- [ ] **Step 4: Add rule data and pure matcher**

```ts
// src/lib/chatbot.ts
import type { ChatIntent } from "@/types/chatbot";

const intentKeywords: Record<Exclude<ChatIntent, "unknown">, string[]> = {
  price: ["harga", "biaya", "budget", "paket"],
  duration: ["durasi", "berapa lama", "deadline", "selesai"],
  revision: ["revisi", "ubah desain", "perbaikan"],
  hosting: ["domain", "hosting", "server"],
  umkm: ["umkm", "toko", "warung", "usaha"],
  portfolio: ["portofolio", "personal", "freelancer"],
  organization: ["organisasi", "komunitas", "yayasan", "sekolah"],
  analytics: ["analitik", "dashboard", "grafik", "laporan"],
  ai: ["machine learning", "prediksi", "segmentasi", " ai "],
  contact: ["whatsapp", "kontak", "pesan", "konsultasi"],
};

export function normalizeInput(input: string): string {
  return ` ${input.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim()} `;
}

export function matchIntent(input: string): ChatIntent {
  const normalized = normalizeInput(input);
  const matches = Object.entries(intentKeywords)
    .map(([intent, keywords]) => ({
      intent: intent as Exclude<ChatIntent, "unknown">,
      score: Math.max(0, ...keywords.map((keyword) => normalized.includes(keyword) ? keyword.length : 0)),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return matches[0]?.intent ?? "unknown";
}

export function recommendPackage(intent: ChatIntent): string {
  if (intent === "analytics") return "Premium Analitik";
  if (intent === "ai") return "AI/ML Custom";
  if (intent === "organization" || intent === "umkm") return "Profesional";
  return "Basic";
}
```

Add `src/data/chatbot.ts` with the approved responses for price, duration, revision, hosting, analytics, AI/ML, and contact plus quick choices for service, budget, and deadline.

- [ ] **Step 5: Verify**

Run: `npm test -- src/lib/chatbot.test.ts && npm run typecheck`

Expected: all intent and recommendation tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/types/chatbot.ts src/data/chatbot.ts src/lib/chatbot.ts src/lib/chatbot.test.ts
git commit -m "feat: add rule-based chatbot engine"
```

---

### Task 7: Add resilient chatbot session persistence

**Files:**
- Create: `src/lib/storage.test.ts`
- Create: `src/lib/storage.ts`

- [ ] **Step 1: Write failing storage tests**

```ts
// src/lib/storage.test.ts
import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearChatbotSession, loadChatbotSession, saveChatbotSession } from "./storage";

const session = {
  version: 1 as const,
  step: "welcome" as const,
  lead: { name: "", websiteType: "", packageName: "", budget: "", deadline: "", features: "" },
  messages: [],
};

beforeEach(() => localStorage.clear());

it("round-trips a valid session", () => {
  expect(saveChatbotSession(session)).toBe(true);
  expect(loadChatbotSession()).toEqual(session);
});

it("ignores malformed storage", () => {
  localStorage.setItem("webkertasari-chatbot-v1", "{bad json");
  expect(loadChatbotSession()).toBeNull();
});

it("returns false when storage throws", () => {
  vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => { throw new Error("blocked"); });
  expect(saveChatbotSession(session)).toBe(false);
});

it("clears saved state", () => {
  saveChatbotSession(session);
  clearChatbotSession();
  expect(loadChatbotSession()).toBeNull();
});
```

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/lib/storage.test.ts`

Expected: FAIL because storage helpers do not exist.

- [ ] **Step 3: Implement guarded storage**

```ts
// src/lib/storage.ts
import type { ChatbotSession } from "@/types/chatbot";

const STORAGE_KEY = "webkertasari-chatbot-v1";

export function loadChatbotSession(): ChatbotSession | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ChatbotSession;
    return parsed.version === 1 && Array.isArray(parsed.messages) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveChatbotSession(session: ChatbotSession): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return true;
  } catch {
    return false;
  }
}

export function clearChatbotSession(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // In-memory state remains usable when browser storage is unavailable.
  }
}
```

- [ ] **Step 4: Verify**

Run: `npm test -- src/lib/storage.test.ts`

Expected: all four tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/lib/storage.ts src/lib/storage.test.ts
git commit -m "feat: persist chatbot session safely"
```

---

### Task 8: Build the complete chatbot UI and floating actions

**Files:**
- Create: `src/components/chatbot/chatbot-widget.test.tsx`
- Create: `src/components/chatbot/chatbot-provider.tsx`
- Create: `src/components/chatbot/chatbot-widget.tsx`
- Create: `src/components/chatbot/chatbot-message-list.tsx`
- Create: `src/components/chatbot/chatbot-quick-replies.tsx`
- Create: `src/components/chatbot/chatbot-lead-form.tsx`
- Create: `src/components/chatbot/chatbot-summary.tsx`
- Create: `src/components/floating-actions.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write failing interaction tests**

```tsx
// src/components/chatbot/chatbot-widget.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChatbotProvider } from "./chatbot-provider";

it("opens only after the user requests it", async () => {
  const user = userEvent.setup();
  render(<ChatbotProvider><button onClick={() => window.dispatchEvent(new Event("webkertasari:open-chatbot"))}>Open</button></ChatbotProvider>);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Open" }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("falls back to menu and WhatsApp for unknown input", async () => {
  const user = userEvent.setup();
  render(<ChatbotProvider><button onClick={() => window.dispatchEvent(new Event("webkertasari:open-chatbot"))}>Open</button></ChatbotProvider>);
  await user.click(screen.getByRole("button", { name: "Open" }));
  await user.type(screen.getByLabelText("Tulis pertanyaan"), "cuaca hari ini");
  await user.click(screen.getByRole("button", { name: "Kirim" }));
  expect(screen.getByText(/belum memahami pertanyaan/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
});
```

Add a third test that completes name, service, package, budget, deadline, and features, then asserts the final WhatsApp URL contains the encoded summary.

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/components/chatbot/chatbot-widget.test.tsx`

Expected: FAIL because chatbot UI modules do not exist.

- [ ] **Step 3: Implement provider and dialog lifecycle**

`ChatbotProvider` must:

- be a Client Component;
- listen for `webkertasari:open-chatbot`;
- render children plus `ChatbotWidget`;
- keep the dialog closed on first load;
- restore session data without opening the dialog automatically.

```tsx
// src/components/chatbot/chatbot-provider.tsx
"use client";

import { useEffect, useState } from "react";
import { ChatbotWidget } from "./chatbot-widget";

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openChatbot = () => setOpen(true);
    window.addEventListener("webkertasari:open-chatbot", openChatbot);
    return () => window.removeEventListener("webkertasari:open-chatbot", openChatbot);
  }, []);

  return (
    <>
      {children}
      <ChatbotWidget open={open} onOpenChange={setOpen} />
    </>
  );
}
```

- [ ] **Step 4: Implement the reducer-driven conversation**

The reducer state is the `ChatbotSession` contract. Actions must cover:

- `hydrate`
- `chooseService`
- `answerIntent`
- `setName`
- `setBudget`
- `setDeadline`
- `setFeatures`
- `showSummary`
- `reset`

Every transition appends a user message and a bot response. Unknown intent appends the exact fallback: “Maaf, saya belum memahami pertanyaan itu. Pilih menu utama atau lanjutkan konsultasi melalui WhatsApp.”

- [ ] **Step 5: Implement focused child components**

- `ChatbotMessageList`: uses `role="log"`, `aria-live="polite"`, and distinguishes user/bot messages.
- `ChatbotQuickReplies`: renders button choices with stable values.
- `ChatbotLeadForm`: uses explicit labels and one field per active step.
- `ChatbotSummary`: displays all fields, Edit/Reset actions, and final WhatsApp CTA.
- Persist after reducer changes only after hydration completes.

- [ ] **Step 6: Add coordinated floating launchers**

```tsx
// src/components/floating-actions.tsx
"use client";

import { Bot, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <button
        type="button"
        aria-label="Buka chatbot WebKertasari"
        onClick={() => window.dispatchEvent(new Event("webkertasari:open-chatbot"))}
        className="grid size-12 place-items-center rounded-full bg-slate-900 text-white shadow-lg"
      >
        <Bot aria-hidden="true" />
      </button>
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp WebKertasari"
        className="grid size-14 place-items-center rounded-full bg-emerald-600 text-white shadow-lg"
      >
        <MessageCircle aria-hidden="true" />
      </a>
    </div>
  );
}
```

- [ ] **Step 7: Wire the provider into the page**

```tsx
export default function HomePage() {
  return (
    <ChatbotProvider>
      <Navbar />
      <main>{/* approved section order */}</main>
      <Footer />
      <FloatingActions />
    </ChatbotProvider>
  );
}
```

- [ ] **Step 8: Verify complete chatbot behavior**

Run: `npm test -- src/components/chatbot/chatbot-widget.test.tsx src/lib/chatbot.test.ts src/lib/storage.test.ts src/lib/whatsapp.test.ts`

Expected: all tests pass, including unknown fallback and encoded final WhatsApp summary.

- [ ] **Step 9: Commit**

```bash
git add src/app/page.tsx src/components/chatbot src/components/floating-actions.tsx
git commit -m "feat: add persistent rule-based chatbot"
```

---

### Task 9: Complete metadata, static assets, and end-to-end page checks

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/icon.svg`
- Create: `src/app/opengraph-image.tsx`
- Create: `src/app/page.test.tsx`
- Modify: `.gitignore`
- Modify: `README.md`

- [ ] **Step 1: Write the failing page acceptance test**

```tsx
// src/app/page.test.tsx
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

it("renders every approved landing-page section", () => {
  render(<HomePage />);
  expect(screen.getByRole("heading", { name: /buat website profesional/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /layanan website webkertasari/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /pilih paket/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /website lebih cerdas/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /contoh website/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /artikel seputar/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /review pelanggan/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /pertanyaan umum/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /siap membuat website/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test and resolve any semantic gaps**

Run: `npm test -- src/app/page.test.tsx`

Expected initially: FAIL if section headings or providers are not test-safe. Fix headings and browser API guards without weakening assertions.

- [ ] **Step 3: Add final metadata**

```tsx
// metadata excerpt in src/app/layout.tsx
export const metadata: Metadata = {
  title: "WebKertasari | Jasa Pembuatan Website Kertasari untuk UMKM dan Personal",
  description: "WebKertasari menyediakan jasa pembuatan website responsif untuk UMKM, personal, organisasi, layanan lokal, dashboard analitik, dan AI/ML. Konsultasi langsung via WhatsApp.",
  keywords: [
    "jasa pembuatan website Kertasari",
    "jasa website UMKM Kertasari",
    "website portofolio pribadi",
    "website organisasi desa",
    "website dashboard analitik",
    "jasa website Kabupaten Bandung",
  ],
  openGraph: {
    title: "WebKertasari",
    description: "Website profesional untuk usaha, personal, dan organisasi lokal.",
    locale: "id_ID",
    type: "website",
  },
};
```

Add `metadataBase` only after a verified production domain is available. The V2 implementation must not contain a fabricated URL.

- [ ] **Step 4: Add static icon and Open Graph artwork**

Use simple local vector artwork based on the approved wordmark, navy background, green CTA accent, and cyan analytics accent. No external image requests are permitted at runtime.

- [ ] **Step 5: Document local commands and publication dependencies**

````md
<!-- README.md -->
# WebKertasari

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

Static output is written to `out/`.

## Before publishing

- Add the verified production domain as `metadataBase`.
- Review package prices and service details.
- Add Maps and social links only after valid URLs are available.
- Replace Demo mockups and Simulasi reviews when verified real content exists.
````

- [ ] **Step 6: Run the complete automated verification**

Run: `npm test && npm run typecheck && npm run lint && npm run build`

Expected: every command exits 0 and `out/index.html` is generated.

- [ ] **Step 7: Inspect static output constraints**

Run: `rg -n "example\\.com|example$|TODO|TBD|OpenAI|api/" out src README.md`

Expected: no placeholder domain, TODO/TBD, OpenAI integration, or API route exists.

- [ ] **Step 8: Perform browser checks**

Run: `npx serve out`

Verify at widths 375px, 768px, and 1440px:

- all navigation anchors land correctly;
- sticky navbar does not hide headings;
- pricing cards remain readable;
- Demo and Simulasi labels are visible;
- chatbot opens only on request;
- keyboard focus stays within the chatbot dialog;
- chatbot survives refresh when storage is available;
- reset clears the saved conversation;
- floating buttons do not overlap content or each other;
- every WhatsApp link opens the correct number and message;
- reduced-motion mode removes nonessential transitions.

- [ ] **Step 9: Run Lighthouse**

Run against the locally served static build:

```bash
npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./lighthouse-report.json
```

Expected minimums:

- Performance: 90
- Accessibility: 95
- Best Practices: 95
- SEO: 95

Add `lighthouse-report.json` to `.gitignore`; fix any critical accessibility or SEO finding before completion.

- [ ] **Step 10: Final commit**

```bash
git add .gitignore README.md src/app
git commit -m "feat: finalize WebKertasari V2 frontend"
```

---

## Final Verification Checklist

- [ ] `npm test` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` creates `out/`.
- [ ] No server-only Next.js feature or API route exists.
- [ ] No OpenAI dependency or network chatbot call exists.
- [ ] All WhatsApp URLs use `6282164410775`.
- [ ] Every price is presented as “Mulai dari”.
- [ ] Portfolio content is labeled Demo.
- [ ] Review content is labeled Simulasi.
- [ ] Maps and social controls are absent while URLs are empty.
- [ ] Chatbot restores, resets, falls back, and generates a complete WhatsApp summary.
- [ ] Mobile, tablet, and desktop layouts pass manual inspection.
- [ ] Production domain and final media are explicitly treated as publication dependencies.
