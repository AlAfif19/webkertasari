# Artikel Lokal dan Demo Undangan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menyediakan delapan artikel lokal yang dapat dibaca melalui route statis dan satu demo undangan pernikahan elegan dengan RSVP serta buku tamu berbasis `localStorage`.

**Architecture:** Artikel disimpan sebagai data TypeScript terstruktur dan dirender melalui route statis `/artikel/[slug]`. Demo undangan memakai server-rendered page untuk konten utama serta komponen client terisolasi untuk cover, countdown, RSVP, dan buku tamu; penyimpanan browser ditangani oleh helper tervalidasi yang tidak bergantung pada API atau database.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Vitest, Testing Library, `next/image`, `next/link`, Lucide React.

---

## File Structure

### Article files

- Modify `src/types/content.ts`: expand `Article` into a complete article model.
- Replace `src/data/articles.ts`: provide eight complete, typed articles and lookup helpers.
- Modify `src/components/sections/articles-section.tsx`: link cards to detail routes.
- Modify `src/components/sections/content-sections.test.tsx`: verify eight linked cards.
- Create `src/components/articles/article-page.tsx`: reusable editorial article renderer.
- Create `src/app/artikel/[slug]/page.tsx`: metadata, static params, lookup, and 404 behavior.
- Create `src/app/artikel/[slug]/page.test.tsx`: route and content tests.
- Create `public/images/articles/article-local-business.svg`: local editorial hero visual.
- Create `public/images/articles/article-digital-growth.svg`: second reusable local visual.

### Wedding demo files

- Modify `src/types/content.ts`: make portfolio demo links explicit.
- Modify `src/data/portfolio.ts`: add linked wedding demo item.
- Modify `src/components/sections/portfolio-section.tsx`: render linked demo cards.
- Create `public/images/portfolio/wedding.svg`: portfolio thumbnail.
- Create `public/images/wedding/gallery-1.svg`: local gallery illustration.
- Create `public/images/wedding/gallery-2.svg`: local gallery illustration.
- Create `public/images/wedding/gallery-3.svg`: local gallery illustration.
- Create `src/types/wedding.ts`: RSVP and guestbook domain types.
- Create `src/lib/wedding-storage.ts`: validated browser storage API.
- Create `src/lib/wedding-storage.test.ts`: storage tests.
- Create `src/components/wedding/wedding-countdown.tsx`: deterministic countdown display.
- Create `src/components/wedding/wedding-rsvp.tsx`: RSVP form and status.
- Create `src/components/wedding/wedding-guestbook.tsx`: guestbook form and entries.
- Create `src/components/wedding/wedding-interactions.test.tsx`: user interaction tests.
- Create `src/app/demo/undangan-pernikahan/page.tsx`: complete static wedding demo.
- Create `src/app/demo/undangan-pernikahan/page.test.tsx`: page structure and disclosure tests.
- Modify `src/app/globals.css`: wedding theme utilities and reduced-motion behavior.

### Documentation

- Modify `README.md`: document the new static routes and local-only demo storage.

---

### Task 1: Model and Populate Eight Complete Articles

**Files:**
- Modify: `src/types/content.ts`
- Replace: `src/data/articles.ts`
- Create: `src/data/articles.test.ts`

- [ ] **Step 1: Write the failing article data tests**

Create `src/data/articles.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { articles, getArticleBySlug } from "./articles";

describe("article data", () => {
  it("contains eight uniquely addressable complete articles", () => {
    expect(articles).toHaveLength(8);
    expect(new Set(articles.map((article) => article.slug)).size).toBe(8);

    for (const article of articles) {
      expect(article.introduction.length).toBeGreaterThan(80);
      expect(article.sections.length).toBeGreaterThanOrEqual(3);
      expect(article.sections.every((section) => section.paragraphs.length > 0))
        .toBe(true);
    }
  });

  it("includes two articles focused on Kertasari", () => {
    expect(articles.filter((article) => article.location === "Kertasari"))
      .toHaveLength(2);
  });

  it("finds an article by slug and returns undefined for unknown slugs", () => {
    expect(getArticleBySlug("kenapa-umkm-lokal-perlu-website")?.category)
      .toBe("UMKM");
    expect(getArticleBySlug("tidak-ada")).toBeUndefined();
  });
});
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```powershell
npm test -- src/data/articles.test.ts
```

Expected: FAIL because the current `Article` type has no `slug`, `sections`, or lookup helper and only six entries exist.

- [ ] **Step 3: Expand the article model**

In `src/types/content.ts`, replace the `Article` type with:

```ts
export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  location?: "Kertasari";
  image: string;
  imageAlt: string;
  introduction: string;
  highlight: string;
  sections: ArticleSection[];
  conclusion: string;
};
```

- [ ] **Step 4: Populate the complete local article data**

Replace `src/data/articles.ts` with eight objects matching the approved titles. Use:

```ts
import type { Article } from "@/types/content";

export const articles: Article[] = [
  {
    slug: "kenapa-umkm-lokal-perlu-website",
    title: "Kenapa UMKM Lokal Perlu Website?",
    summary:
      "Website membantu usaha terlihat profesional, ditemukan, dan mudah dihubungi.",
    date: "5 Juni 2026",
    category: "UMKM",
    image: "/images/articles/article-local-business.svg",
    imageAlt: "Ilustrasi demo etalase digital untuk UMKM lokal",
    introduction:
      "Banyak UMKM mengandalkan rekomendasi pelanggan dan media sosial untuk memperoleh pesanan. Cara tersebut tetap berguna, tetapi website memberi tempat resmi yang dapat menjelaskan usaha secara utuh selama dua puluh empat jam.",
    highlight:
      "Website bukan pengganti percakapan dengan pelanggan, melainkan pintu masuk yang membuat percakapan lebih mudah dimulai.",
    sections: [
      {
        heading: "Membangun kepercayaan sejak pencarian pertama",
        paragraphs: [
          "Calon pelanggan sering mencari nama usaha sebelum menghubungi pemiliknya. Halaman yang memuat profil, layanan, area kerja, dan kontak membuat usaha terlihat lebih siap melayani.",
        ],
      },
      {
        heading: "Menjadi pusat informasi yang Anda kendalikan",
        paragraphs: [
          "Konten media sosial cepat tenggelam. Website menyimpan informasi penting pada alamat yang tetap dan dapat dibagikan kapan saja.",
        ],
        points: [
          "Daftar layanan dan harga awal",
          "Jam operasional dan area pelayanan",
          "Tombol WhatsApp dengan pesan yang sudah disiapkan",
        ],
      },
      {
        heading: "Mulai dari kebutuhan paling penting",
        paragraphs: [
          "UMKM tidak harus langsung memiliki sistem yang rumit. Halaman promosi yang cepat, nyaman di ponsel, dan memiliki jalur kontak jelas sudah menjadi awal yang kuat.",
        ],
      },
    ],
    conclusion:
      "Website sederhana yang terarah dapat membantu UMKM tampil lebih profesional tanpa menambah proses operasional yang rumit.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
```

The remaining seven entries must use these exact slugs:

```ts
[
  "website-vs-media-sosial-untuk-promosi-usaha",
  "manfaat-website-untuk-jasa-rumahan",
  "cara-website-membantu-pelanggan-menghubungi-anda",
  "kapan-bisnis-kecil-butuh-dashboard-analitik",
  "apa-itu-ai-dan-ml-untuk-usaha-kecil",
  "peluang-website-untuk-usaha-dan-wisata-lokal-kertasari",
  "cara-pelaku-usaha-kertasari-menjangkau-pelanggan-luar-daerah",
]
```

Each entry must contain at least three substantive sections. Only the last two use `location: "Kertasari"`. Avoid unverified statistics, customer claims, named businesses, and claims about specific tourism operators.

Use these exact content outlines for the seven additional entries:

| Slug | Category | Image | Section headings |
| --- | --- | --- | --- |
| `website-vs-media-sosial-untuk-promosi-usaha` | Promosi | `article-digital-growth.svg` | `Peran berbeda dalam perjalanan pelanggan`; `Risiko bergantung pada satu platform`; `Menghubungkan website dan media sosial` |
| `manfaat-website-untuk-jasa-rumahan` | Bisnis Lokal | `article-local-business.svg` | `Menjelaskan layanan tanpa menjawab berulang kali`; `Menyaring pertanyaan calon pelanggan`; `Membangun kepercayaan dari rumah` |
| `cara-website-membantu-pelanggan-menghubungi-anda` | Konversi | `article-digital-growth.svg` | `Kurangi langkah menuju percakapan`; `Berikan konteks sebelum pelanggan mengirim pesan`; `Ukur jalur kontak yang paling berguna` |
| `kapan-bisnis-kecil-butuh-dashboard-analitik` | Analitik | `article-digital-growth.svg` | `Tanda pencatatan manual mulai kewalahan`; `Mulai dari pertanyaan bisnis`; `Dashboard sederhana lebih baik daripada data yang ramai` |
| `apa-itu-ai-dan-ml-untuk-usaha-kecil` | AI/ML | `article-digital-growth.svg` | `Memahami istilah tanpa jargon`; `Contoh penggunaan yang realistis`; `Data dan proses tetap menjadi dasar` |
| `peluang-website-untuk-usaha-dan-wisata-lokal-kertasari` | Kertasari | `article-local-business.svg` | `Menampilkan potensi lokal secara mandiri`; `Membantu pengunjung merencanakan kontak`; `Mulai dengan informasi yang dapat diverifikasi` |
| `cara-pelaku-usaha-kertasari-menjangkau-pelanggan-luar-daerah` | Kertasari | `article-local-business.svg` | `Jelaskan lokasi dan jangkauan layanan`; `Bangun bukti yang dapat diperiksa`; `Hubungkan pencarian dengan WhatsApp` |

For each outline, write one introduction of 2-3 sentences, one paragraph of 2-4 sentences under every heading, 3 practical points in the middle section, one single-sentence highlight, and one 2-sentence conclusion. The prose must be original Indonesian copy and must not contain numerical performance claims.

- [ ] **Step 5: Run the article data tests and verify GREEN**

Run:

```powershell
npm test -- src/data/articles.test.ts
```

Expected: 3 tests PASS.

- [ ] **Step 6: Commit the article model and content**

```powershell
git add src/types/content.ts src/data/articles.ts src/data/articles.test.ts
git commit -m "feat: add complete local article content"
```

---

### Task 2: Link Homepage Cards to Eight Article Routes

**Files:**
- Modify: `src/components/sections/content-sections.test.tsx`
- Modify: `src/components/sections/articles-section.tsx`

- [ ] **Step 1: Replace the obsolete article-card test**

In `src/components/sections/content-sections.test.tsx`, replace `does not pretend article cards have detail pages` with:

```tsx
it("links all eight article cards to their detail pages", () => {
  render(<ArticlesSection />);

  const links = screen.getAllByRole("link", { name: /baca artikel/i });
  expect(links).toHaveLength(8);
  expect(links[0]).toHaveAttribute(
    "href",
    "/artikel/kenapa-umkm-lokal-perlu-website",
  );
  expect(
    screen.getByText("Peluang Website untuk Usaha dan Wisata Lokal Kertasari"),
  ).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the section test and verify RED**

Run:

```powershell
npm test -- src/components/sections/content-sections.test.tsx
```

Expected: FAIL because cards still render non-link text and only six summaries.

- [ ] **Step 3: Render accessible detail links**

Update `src/components/sections/articles-section.tsx`:

```tsx
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
```

Replace the trailing `Ringkasan Artikel` span with:

```tsx
<Link
  href={`/artikel/${article.slug}`}
  className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
  aria-label={`Baca artikel: ${article.title}`}
>
  Baca artikel
  <ArrowRight className="size-4" aria-hidden="true" />
</Link>
```

Keep cards semantic and ensure the grid naturally handles eight entries.

- [ ] **Step 4: Run the section test and verify GREEN**

Run:

```powershell
npm test -- src/components/sections/content-sections.test.tsx
```

Expected: all section tests PASS.

- [ ] **Step 5: Commit homepage article navigation**

```powershell
git add src/components/sections/articles-section.tsx src/components/sections/content-sections.test.tsx
git commit -m "feat: link article cards to detail pages"
```

---

### Task 3: Build Static Editorial Article Pages

**Files:**
- Create: `src/components/articles/article-page.tsx`
- Create: `src/app/artikel/[slug]/page.tsx`
- Create: `src/app/artikel/[slug]/page.test.tsx`
- Create: `public/images/articles/article-local-business.svg`
- Create: `public/images/articles/article-digital-growth.svg`

- [ ] **Step 1: Write failing static-route tests**

Create `src/app/artikel/[slug]/page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ArticleRoute, { generateStaticParams } from "./page";

describe("article route", () => {
  it("generates one static route for every article", async () => {
    const params = await generateStaticParams();
    expect(params).toHaveLength(8);
    expect(params).toContainEqual({
      slug: "peluang-website-untuk-usaha-dan-wisata-lokal-kertasari",
    });
  });

  it("renders complete editorial content for a known article", async () => {
    const page = await ArticleRoute({
      params: Promise.resolve({
        slug: "kenapa-umkm-lokal-perlu-website",
      }),
    });
    render(page);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Kenapa UMKM Lokal Perlu Website?",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/membangun kepercayaan/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /kembali ke artikel/i }))
      .toHaveAttribute("href", "/#artikel");
  });
});
```

- [ ] **Step 2: Run route tests and verify RED**

Run:

```powershell
npm test -- "src/app/artikel/[slug]/page.test.tsx"
```

Expected: FAIL because the route and editorial renderer do not exist.

- [ ] **Step 3: Create the editorial renderer**

Create `src/components/articles/article-page.tsx` with props:

```ts
type ArticlePageProps = {
  article: Article;
  relatedArticles: Article[];
};
```

Render:

- A top bar linking to `/#artikel`.
- Editorial hero with category, optional `Kertasari` badge, title, summary, date, and local image.
- `<article>` with introduction, highlighted quote, section headings, paragraphs, and optional point lists.
- Conclusion and `WhatsAppLink` labeled `Konsultasikan kebutuhan website`.
- Up to two related article cards with internal links.

Use `Image`, `Link`, `Badge`, `Card`, `Button`, and `WhatsAppLink`. Keep the reading column at approximately `max-w-3xl` and use semantic `<blockquote>`, `<section>`, and heading order.

- [ ] **Step 4: Create the static route**

Create `src/app/artikel/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/articles/article-page";
import { articles, getArticleBySlug } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug((await params).slug);
  if (!article) return {};

  return {
    title: `${article.title} | WebKertasari`,
    description: article.summary,
  };
}

export default async function ArticleRoute({ params }: Props) {
  const article = getArticleBySlug((await params).slug);
  if (!article) notFound();

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return <ArticlePage article={article} relatedArticles={relatedArticles} />;
}
```

- [ ] **Step 5: Add two local editorial SVG assets**

Create both SVGs at `1200x800`, using only vector shapes, gradients, and text-free illustrative forms:

- `article-local-business.svg`: storefront, phone, and Kertasari mountain silhouettes in navy/emerald.
- `article-digital-growth.svg`: browser panel, chart, and message shapes in navy/cyan/emerald.

Reference one of these two assets from every article to avoid eight near-duplicate files.

- [ ] **Step 6: Run route and section tests**

Run:

```powershell
npm test -- "src/app/artikel/[slug]/page.test.tsx" src/components/sections/content-sections.test.tsx
```

Expected: all selected tests PASS.

- [ ] **Step 7: Commit article routes**

```powershell
git add src/app/artikel src/components/articles public/images/articles
git commit -m "feat: add static editorial article pages"
```

---

### Task 4: Add a Linked Wedding Demo Portfolio Card

**Files:**
- Modify: `src/types/content.ts`
- Modify: `src/data/portfolio.ts`
- Modify: `src/components/sections/portfolio-section.tsx`
- Modify: `src/components/sections/content-sections.test.tsx`
- Create: `public/images/portfolio/wedding.svg`

- [ ] **Step 1: Write the failing portfolio navigation test**

Update the portfolio test:

```tsx
it("labels six portfolio items as Demo and links the wedding example", () => {
  render(<PortfolioSection />);

  expect(screen.getAllByText("Demo")).toHaveLength(6);
  expect(
    screen.getByRole("link", { name: /lihat demo undangan pernikahan/i }),
  ).toHaveAttribute("href", "/demo/undangan-pernikahan");
});
```

- [ ] **Step 2: Run the section tests and verify RED**

Run:

```powershell
npm test -- src/components/sections/content-sections.test.tsx
```

Expected: FAIL because there are five portfolio items and no wedding route link.

- [ ] **Step 3: Add optional demo href to the portfolio type**

In `src/types/content.ts`:

```ts
export type PortfolioItem = {
  title: string;
  type: string;
  description: string;
  image: string;
  label: "Demo";
  href?: string;
};
```

- [ ] **Step 4: Add the wedding portfolio item**

Append to `src/data/portfolio.ts`:

```ts
{
  title: "Undangan Pernikahan",
  type: "Undangan digital interaktif",
  description:
    "Demo undangan elegan dengan jadwal, galeri, RSVP, dan buku tamu simulasi.",
  image: "/images/portfolio/wedding.svg",
  label: "Demo",
  href: "/demo/undangan-pernikahan",
},
```

- [ ] **Step 5: Render a link only for interactive demos**

In `src/components/sections/portfolio-section.tsx`, import `Link`, `ArrowRight`, and `Button`. After the description, render:

```tsx
{item.href ? (
  <Button asChild variant="outline" className="mt-5 w-full">
    <Link
      href={item.href}
      aria-label={`Lihat demo ${item.title}`}
    >
      Lihat demo
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  </Button>
) : null}
```

- [ ] **Step 6: Create the local wedding thumbnail**

Create `public/images/portfolio/wedding.svg` at `720x480` with a cream background, gold border, floral corner ornaments, and centered fictional initials `A & F`. Include no real-person photo.

- [ ] **Step 7: Run the section tests and verify GREEN**

Run:

```powershell
npm test -- src/components/sections/content-sections.test.tsx
```

Expected: all tests PASS.

- [ ] **Step 8: Commit the linked portfolio demo**

```powershell
git add src/types/content.ts src/data/portfolio.ts src/components/sections/portfolio-section.tsx src/components/sections/content-sections.test.tsx public/images/portfolio/wedding.svg
git commit -m "feat: add wedding invitation portfolio demo"
```

---

### Task 5: Implement Validated Wedding Demo Storage

**Files:**
- Create: `src/types/wedding.ts`
- Create: `src/lib/wedding-storage.ts`
- Create: `src/lib/wedding-storage.test.ts`

- [ ] **Step 1: Write failing storage behavior tests**

Create `src/lib/wedding-storage.test.ts`:

```ts
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  loadGuestbookEntries,
  loadRsvp,
  saveGuestbookEntry,
  saveRsvp,
} from "./wedding-storage";

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("wedding demo storage", () => {
  it("round-trips a valid RSVP", () => {
    const rsvp = {
      name: "Dina",
      attendance: "hadir" as const,
      guestCount: 2,
    };
    expect(saveRsvp(rsvp)).toBe(true);
    expect(loadRsvp()).toEqual(rsvp);
  });

  it("rejects malformed RSVP storage", () => {
    localStorage.setItem(
      "webkertasari-wedding-rsvp-v1",
      JSON.stringify({ name: "", attendance: "mungkin", guestCount: 99 }),
    );
    expect(loadRsvp()).toBeNull();
  });

  it("appends and loads valid guestbook entries", () => {
    expect(saveGuestbookEntry({ name: "Rani", message: "Selamat!" }))
      .toBe(true);
    expect(loadGuestbookEntries()).toEqual([
      { name: "Rani", message: "Selamat!" },
    ]);
  });

  it("returns false when browser storage is blocked", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => {
      throw new Error("blocked");
    });
    expect(
      saveRsvp({ name: "Dina", attendance: "tidak-hadir", guestCount: 0 }),
    ).toBe(false);
  });
});
```

- [ ] **Step 2: Run storage tests and verify RED**

Run:

```powershell
npm test -- src/lib/wedding-storage.test.ts
```

Expected: FAIL because the wedding types and storage module do not exist.

- [ ] **Step 3: Define wedding domain types**

Create `src/types/wedding.ts`:

```ts
export type WeddingRsvp = {
  name: string;
  attendance: "hadir" | "tidak-hadir";
  guestCount: number;
};

export type WeddingGuestbookEntry = {
  name: string;
  message: string;
};
```

- [ ] **Step 4: Implement guarded storage helpers**

Create `src/lib/wedding-storage.ts` with constants:

```ts
const RSVP_KEY = "webkertasari-wedding-rsvp-v1";
const GUESTBOOK_KEY = "webkertasari-wedding-guestbook-v1";
```

Implement validators with these rules:

- Trimmed RSVP name: 2-60 characters.
- Attendance: only `hadir` or `tidak-hadir`.
- Guest count: integer 0-5; force `0` for `tidak-hadir`.
- Guestbook name: 2-60 characters.
- Guestbook message: 2-240 characters.
- Parsed malformed JSON returns `null` or `[]`.
- Every browser storage operation is inside `try/catch`.
- `saveGuestbookEntry` prepends the new entry and retains at most 20 entries.

Export:

```ts
export function loadRsvp(): WeddingRsvp | null;
export function saveRsvp(value: WeddingRsvp): boolean;
export function loadGuestbookEntries(): WeddingGuestbookEntry[];
export function saveGuestbookEntry(value: WeddingGuestbookEntry): boolean;
```

- [ ] **Step 5: Run storage tests and verify GREEN**

Run:

```powershell
npm test -- src/lib/wedding-storage.test.ts
```

Expected: 4 tests PASS.

- [ ] **Step 6: Commit storage support**

```powershell
git add src/types/wedding.ts src/lib/wedding-storage.ts src/lib/wedding-storage.test.ts
git commit -m "feat: add local wedding demo storage"
```

---

### Task 6: Build and Test Wedding Interactions

**Files:**
- Create: `src/components/wedding/wedding-countdown.tsx`
- Create: `src/components/wedding/wedding-rsvp.tsx`
- Create: `src/components/wedding/wedding-guestbook.tsx`
- Create: `src/components/wedding/wedding-interactions.test.tsx`

- [ ] **Step 1: Write failing interaction tests**

Create `src/components/wedding/wedding-interactions.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { WeddingGuestbook } from "./wedding-guestbook";
import { WeddingRsvp } from "./wedding-rsvp";

beforeEach(() => localStorage.clear());

describe("wedding RSVP", () => {
  it("validates and saves an attendance response", async () => {
    const user = userEvent.setup();
    render(<WeddingRsvp />);

    await user.click(screen.getByRole("button", { name: /simpan konfirmasi/i }));
    expect(screen.getByRole("status")).toHaveTextContent(/isi nama/i);

    await user.type(screen.getByLabelText(/nama tamu/i), "Dina");
    await user.selectOptions(screen.getByLabelText(/kehadiran/i), "hadir");
    await user.selectOptions(screen.getByLabelText(/jumlah tamu/i), "2");
    await user.click(screen.getByRole("button", { name: /simpan konfirmasi/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/tersimpan di browser/i);
  });
});

describe("wedding guestbook", () => {
  it("saves and displays a guestbook message", async () => {
    const user = userEvent.setup();
    render(<WeddingGuestbook />);

    await user.type(screen.getByLabelText(/nama pengirim/i), "Rani");
    await user.type(screen.getByLabelText(/pesan dan doa/i), "Selamat berbahagia");
    await user.click(screen.getByRole("button", { name: /simpan ucapan/i }));

    expect(screen.getByText("Selamat berbahagia")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(/tersimpan di browser/i);
  });
});
```

- [ ] **Step 2: Run interaction tests and verify RED**

Run:

```powershell
npm test -- src/components/wedding/wedding-interactions.test.tsx
```

Expected: FAIL because the interaction components do not exist.

- [ ] **Step 3: Implement deterministic countdown**

Create `src/components/wedding/wedding-countdown.tsx` as a client component. Accept:

```ts
type Props = {
  targetIso: string;
};
```

Use a one-second interval, compute non-negative days/hours/minutes/seconds, and clear the interval on unmount. Render four labeled values. When elapsed, render `Hari bahagia telah tiba`. Respect reduced-motion through existing global CSS.

- [ ] **Step 4: Implement RSVP form**

Create `src/components/wedding/wedding-rsvp.tsx` as a client component:

- Controlled fields for name, attendance, and guest count.
- Load a saved RSVP in `useEffect`.
- Validate before calling `saveRsvp`.
- Attendance defaults to `hadir`.
- Disable guest count and force zero when not attending.
- Render errors/success in `<p role="status" aria-live="polite">`.
- Always display `Simulasi: data hanya tersimpan di browser ini.`
- On storage failure, show `Penyimpanan browser tidak tersedia.`

- [ ] **Step 5: Implement guestbook form**

Create `src/components/wedding/wedding-guestbook.tsx` as a client component:

- Controlled name and message fields.
- Load entries in `useEffect`.
- Validate trimmed name and message.
- Save through `saveGuestbookEntry`.
- Clear the message after a successful save.
- Display saved entries in a semantic list.
- Render an empty state before any entries exist.
- Use the same simulation disclosure and live status behavior as RSVP.

- [ ] **Step 6: Run interaction and storage tests**

Run:

```powershell
npm test -- src/components/wedding/wedding-interactions.test.tsx src/lib/wedding-storage.test.ts
```

Expected: all selected tests PASS.

- [ ] **Step 7: Commit interaction components**

```powershell
git add src/components/wedding
git commit -m "feat: add wedding RSVP and guestbook interactions"
```

---

### Task 7: Assemble the Complete Elegant Wedding Demo

**Files:**
- Create: `src/app/demo/undangan-pernikahan/page.tsx`
- Create: `src/app/demo/undangan-pernikahan/page.test.tsx`
- Modify: `src/app/globals.css`
- Create: `public/images/wedding/gallery-1.svg`
- Create: `public/images/wedding/gallery-2.svg`
- Create: `public/images/wedding/gallery-3.svg`
- Modify: `README.md`

- [ ] **Step 1: Write the failing wedding page test**

Create `src/app/demo/undangan-pernikahan/page.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import WeddingDemoPage from "./page";

it("renders a complete clearly labeled wedding invitation demo", () => {
  render(<WeddingDemoPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: /alya & fikri/i }),
  ).toBeInTheDocument();
  expect(screen.getAllByText(/simulasi/i).length).toBeGreaterThan(1);
  expect(screen.getByRole("heading", { name: /susunan acara/i }))
    .toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /galeri cerita/i }))
    .toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /konfirmasi kehadiran/i }))
    .toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /buku tamu/i }))
    .toBeInTheDocument();
  expect(screen.getByRole("link", { name: /kembali ke portofolio/i }))
    .toHaveAttribute("href", "/#portofolio");
});
```

- [ ] **Step 2: Run the page test and verify RED**

Run:

```powershell
npm test -- src/app/demo/undangan-pernikahan/page.test.tsx
```

Expected: FAIL because the demo page does not exist.

- [ ] **Step 3: Create three local gallery illustrations**

Create three `1200x900` SVG assets using cream, muted rose, sage, and gold:

- `gallery-1.svg`: floral arch and two abstract silhouettes.
- `gallery-2.svg`: rings, invitation card, and flowers.
- `gallery-3.svg`: reception table and mountain horizon.

The images must be clearly illustrative, contain no real people, and have matching visual language.

- [ ] **Step 4: Assemble the wedding page**

Create `src/app/demo/undangan-pernikahan/page.tsx` with static metadata:

```ts
export const metadata: Metadata = {
  title: "Demo Undangan Pernikahan | WebKertasari",
  description:
    "Demo undangan pernikahan digital elegan dengan RSVP dan buku tamu simulasi.",
};
```

Render these semantic sections in order:

1. A compact top link back to `/#portofolio` and visible `Demo` badge.
2. Hero/cover with `The Wedding of`, `<h1>Alya & Fikri</h1>`, date `20 Desember 2026`, and fictional-content disclosure.
3. Couple introduction using text only, avoiding fake biographies.
4. `<WeddingCountdown targetIso="2026-12-20T08:00:00+07:00" />`.
5. Akad and reception cards with explicitly fictional venue `Lokasi Contoh, Kertasari`.
6. Schedule timeline.
7. Gallery using the three local SVGs and descriptive alt text ending with `untuk demo`.
8. Map panel linking to a general Google Maps search for Kertasari rather than a claimed venue pin.
9. `<WeddingRsvp />`.
10. `<WeddingGuestbook />`.
11. Closing note and a WebKertasari CTA.

Do not add autoplay audio. Do not hide page content behind the cover button; the full demo must remain accessible and testable.

- [ ] **Step 5: Add scoped wedding theme styles**

In `src/app/globals.css`, add reusable classes:

```css
.wedding-page {
  --wedding-ink: #443629;
  --wedding-gold: #a4834f;
  --wedding-cream: #fbf7ef;
  color: var(--wedding-ink);
  background:
    radial-gradient(circle at top, rgb(164 131 79 / 12%), transparent 28rem),
    var(--wedding-cream);
}

.wedding-serif {
  font-family: Georgia, "Times New Roman", serif;
}

.wedding-panel {
  border: 1px solid rgb(164 131 79 / 35%);
  background: rgb(255 253 248 / 92%);
  box-shadow: 0 20px 60px rgb(68 54 41 / 8%);
}
```

Use Tailwind utilities for layout and these classes only for theme tokens that would otherwise repeat.

- [ ] **Step 6: Document routes and local-only storage**

Append to `README.md`:

```md
## Konten lokal

- Artikel lengkap tersedia di `/artikel/[slug]` dan dibangun statis dari `src/data/articles.ts`.
- Demo undangan tersedia di `/demo/undangan-pernikahan`.
- RSVP dan buku tamu demo hanya disimpan di `localStorage` browser; tidak ada data yang dikirim ke server.
```

- [ ] **Step 7: Run wedding page and interaction tests**

Run:

```powershell
npm test -- src/app/demo/undangan-pernikahan/page.test.tsx src/components/wedding/wedding-interactions.test.tsx
```

Expected: all selected tests PASS.

- [ ] **Step 8: Commit the complete wedding page**

```powershell
git add src/app/demo src/app/globals.css public/images/wedding README.md
git commit -m "feat: build elegant wedding invitation demo"
```

---

### Task 8: Full Verification and Deployment Readiness

**Files:**
- Inspect: all files changed in Tasks 1-7
- Preserve: unrelated pre-existing changes such as generated `next-env.d.ts`

- [ ] **Step 1: Run the complete test suite**

```powershell
npm test
```

Expected: all test files PASS with zero failed tests.

- [ ] **Step 2: Run TypeScript validation**

```powershell
npm run typecheck
```

Expected: exit code 0 and no diagnostics.

- [ ] **Step 3: Run lint**

```powershell
npm run lint
```

Expected: exit code 0 and no ESLint errors.

- [ ] **Step 4: Run the production build**

```powershell
$env:NEXT_PUBLIC_SITE_URL='https://webkertasari.vercel.app'
npm run build
```

Expected:

- Build exits with code 0.
- Eight `/artikel/<slug>` routes appear as static output.
- `/demo/undangan-pernikahan` appears as static output.
- No invalid URL or browser API server-rendering errors occur.

- [ ] **Step 5: Inspect scope and generated changes**

```powershell
git status -sb
git diff --check
git diff --stat origin/master...HEAD
```

Expected:

- No whitespace errors.
- Only approved feature files and commits are included.
- Do not stage or revert unrelated user/generated changes.

- [ ] **Step 6: Perform a local browser smoke test**

Run:

```powershell
npm run dev
```

Check:

- `http://localhost:3000/#artikel`
- `http://localhost:3000/artikel/kenapa-umkm-lokal-perlu-website`
- `http://localhost:3000/demo/undangan-pernikahan`

Verify mobile and desktop widths, internal navigation, countdown, RSVP persistence after refresh, guestbook persistence after refresh, and visible simulation disclosures.

- [ ] **Step 7: Commit any verification-only corrections**

Only if verification required a correction, stage the exact paths shown by `git status`:

```powershell
git add src/path/that-was-corrected.ts
git commit -m "fix: finalize article and wedding demo verification"
```

Replace the example path with the actual corrected path; do not use `git add -A`.

- [ ] **Step 8: Publish after user approval**

Push the current feature branch or approved `master` commits only after confirming the intended GitHub workflow:

```powershell
$branch = git branch --show-current
git push origin $branch
```

Vercel should then build from the configured production branch without new environment variables.
