# Specialized Portfolio Demos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build content-rich, static UMKM, organization, retail POS, and analytics demos with realistic simulated data and detailed homepage thumbnails.

**Architecture:** Keep the shared demo shell in `portfolio-demo-page.tsx`, but move each kind-specific interface into a focused server component. Store all fictional catalog, gallery, POS, and analytics data in typed optional fields on `PortfolioDemo`, allowing the route to remain statically generated without APIs or client state.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Lucide icons, Vitest, Testing Library, Next Image.

---

## File Map

- Modify `src/types/portfolio-demo.ts`: define product, gallery, POS, and analytics data contracts.
- Modify `src/data/portfolio-demos.ts`: replace service-demo content and add complete specialized data.
- Modify `src/data/portfolio.ts`: rename the POS portfolio card and point cards to enriched thumbnails.
- Create `src/components/demos/umkm-catalog.tsx`: render product catalog and order actions.
- Create `src/components/demos/organization-gallery.tsx`: render fictional activity documentation.
- Create `src/components/demos/pos-overview.tsx`: render retail cashier, cart, stock, and transaction views.
- Create `src/components/demos/analytics-overview.tsx`: own the complete operational dashboard.
- Modify `src/components/demos/portfolio-demo-page.tsx`: compose specialized sections and remove inline analytics implementation.
- Modify `src/data/portfolio-demos.test.ts`: validate specialized data completeness.
- Modify `src/app/demo/[slug]/page.test.tsx`: verify every specialized interface renders.
- Modify `src/components/sections/content-sections.test.tsx`: verify enriched homepage thumbnails.
- Create or replace assets under `public/images/demos/umkm/`, `public/images/demos/organization/`, and `public/images/portfolio/`.

### Task 1: Extend Specialized Demo Types

**Files:**
- Modify: `src/types/portfolio-demo.ts`
- Test: `src/data/portfolio-demos.test.ts`

- [ ] **Step 1: Write failing data-contract tests**

Add assertions that require six UMKM products, six organization photos, POS
catalog/cart/payment/transaction data, and analytics product/stock/transaction
data:

```ts
const umkm = getPortfolioDemoBySlug("website-umkm");
expect(umkm?.products).toHaveLength(6);
expect(umkm?.products?.map((product) => product.price)).toContain("Rp48.000");

const organization = getPortfolioDemoBySlug("website-organisasi");
expect(organization?.gallery).toHaveLength(6);
expect(organization?.gallery?.every((item) => item.imageAlt.length > 20)).toBe(true);

const pos = getPortfolioDemoBySlug("website-pos-pelayanan");
expect(pos?.pos?.products.length).toBeGreaterThanOrEqual(6);
expect(pos?.pos?.cart).toHaveLength(3);
expect(pos?.pos?.paymentMethods).toEqual(["Tunai", "QRIS", "Kartu debit"]);

const analytics = getPortfolioDemoBySlug("dashboard-analitik");
expect(analytics?.analytics?.topProducts).toHaveLength(4);
expect(analytics?.analytics?.transactions).toHaveLength(4);
```

- [ ] **Step 2: Run the data test and verify RED**

Run:

```powershell
npm test -- --run src/data/portfolio-demos.test.ts
```

Expected: TypeScript or assertion failures because the specialized fields do
not exist.

- [ ] **Step 3: Add typed contracts**

Add these structures to `src/types/portfolio-demo.ts`:

```ts
export type DemoProduct = {
  name: string;
  category: string;
  size: string;
  price: string;
  stock: number;
  image: string;
  imageAlt: string;
  badge?: string;
  description: string;
};

export type DemoGalleryItem = {
  title: string;
  date: string;
  location: string;
  caption: string;
  image: string;
  imageAlt: string;
};

export type DemoTransaction = {
  id: string;
  time: string;
  customer: string;
  method: string;
  total: string;
  status: string;
};

export type DemoPosData = {
  cashier: string;
  shift: string;
  categories: string[];
  products: Array<DemoProduct & { sku: string }>;
  cart: Array<{ name: string; quantity: number; total: string }>;
  subtotal: string;
  discount: string;
  tax: string;
  total: string;
  paymentMethods: string[];
  transactions: DemoTransaction[];
};

export type DemoAnalyticsData = {
  period: string;
  topProducts: Array<{ name: string; units: number; revenue: string }>;
  lowStock: Array<{ name: string; stock: number }>;
  transactions: DemoTransaction[];
};
```

Extend `PortfolioDemo` with:

```ts
products?: DemoProduct[];
gallery?: DemoGalleryItem[];
pos?: DemoPosData;
analytics?: DemoAnalyticsData;
```

- [ ] **Step 4: Run typecheck**

Run:

```powershell
npm run typecheck
```

Expected: PASS after the fields are declared.

- [ ] **Step 5: Commit**

```powershell
git add src/types/portfolio-demo.ts src/data/portfolio-demos.test.ts
git commit -m "test: define specialized demo contracts"
```

### Task 2: Add Realistic Static Data

**Files:**
- Modify: `src/data/portfolio-demos.ts`
- Modify: `src/data/portfolio.ts`
- Test: `src/data/portfolio-demos.test.ts`

- [ ] **Step 1: Populate the UMKM catalog**

Add six products matching the approved specification. Use exact Indonesian
price strings, stock counts, category names, package sizes, descriptions, and
image paths under `/images/demos/umkm/`.

- [ ] **Step 2: Populate the organization gallery**

Add six activity records with fictional June-August 2026 dates, Kertasari
location labels, captions, and image paths under
`/images/demos/organization/`.

- [ ] **Step 3: Convert the service demo to retail POS**

Keep the stable route `/demo/website-pos-pelayanan`, but change its visible
identity to:

```ts
brand: "Rasa Bumi POS",
eyebrow: "Point of Sale - Data Simulasi",
title: "Kasir, stok, dan transaksi dalam satu layar.",
showcaseTitle: "Operasional Toko Hari Ini",
```

Populate at least six products, three cart lines, totals, three payment
methods, four recent transactions, cashier name, and shift hours.

- [ ] **Step 4: Add analytics operational data**

Add four top products, three low-stock records, four recent transactions, and
the reporting period `1-30 Juni 2026`. Values must reuse catalog product names
and remain compatible with the existing KPI totals.

- [ ] **Step 5: Rename the homepage POS card**

Change the portfolio item to:

```ts
title: "Website POS Kasir",
type: "Kasir dan inventori",
description:
  "Demo kasir toko dengan katalog, keranjang, pembayaran, stok, dan transaksi.",
image: "/images/portfolio/pos-dashboard.svg",
```

- [ ] **Step 6: Run focused data tests**

Run:

```powershell
npm test -- --run src/data/portfolio-demos.test.ts
```

Expected: PASS.

- [ ] **Step 7: Commit**

```powershell
git add src/data/portfolio-demos.ts src/data/portfolio.ts src/data/portfolio-demos.test.ts
git commit -m "feat: add realistic portfolio demo data"
```

### Task 3: Generate and Install Fictional Assets

**Files:**
- Create: `public/images/demos/umkm/*.png`
- Create: `public/images/demos/organization/*.png`
- Replace: `public/images/portfolio/umkm.svg`
- Replace: `public/images/portfolio/organization.svg`
- Create: `public/images/portfolio/pos-dashboard.svg`
- Replace: `public/images/portfolio/analytics-dashboard.svg`

- [ ] **Step 1: Generate product imagery**

Use the image-generation tool to create clean editorial product photography
for the six fictional Rasa Bumi products. Avoid real logos and readable brand
marks. Save optimized project copies using lowercase ASCII filenames.

- [ ] **Step 2: Generate fictional organization photography**

Generate six documentary-style photographs of fictional Indonesian young
adults participating in the approved activities. Avoid public figures, real
organization marks, and identifiable real events.

- [ ] **Step 3: Create detailed SVG thumbnails**

Use hand-authored SVG for the four homepage cards:

- UMKM: product cards with names, prices, and order badge
- Organization: photo-grid composition with agenda labels
- POS: sidebar, product grid, cart, and total
- Analytics: sidebar, KPIs, charts, products, and transactions

- [ ] **Step 4: Verify all asset paths**

Run:

```powershell
Get-ChildItem public/images/demos/umkm,public/images/demos/organization,public/images/portfolio
```

Expected: all referenced files exist and filenames match the data exactly.

- [ ] **Step 5: Commit**

```powershell
git add public/images/demos public/images/portfolio
git commit -m "feat: add specialized demo imagery"
```

### Task 4: Build the UMKM Catalog

**Files:**
- Create: `src/components/demos/umkm-catalog.tsx`
- Modify: `src/app/demo/[slug]/page.test.tsx`

- [ ] **Step 1: Write a failing route test**

Add a test for `/demo/website-umkm`:

```ts
expect(screen.getByRole("heading", { name: /katalog rasa bumi/i }))
  .toBeInTheDocument();
expect(screen.getByText("Kopi Arabika Kertasari")).toBeInTheDocument();
expect(screen.getByText("Rp48.000")).toBeInTheDocument();
expect(screen.getAllByRole("link", { name: /pesan .* via whatsapp/i }))
  .toHaveLength(6);
```

Assert that the Arabika link contains its encoded product name.

- [ ] **Step 2: Run the route test and verify RED**

Run:

```powershell
npm test -- --run "src/app/demo/[slug]/page.test.tsx"
```

Expected: FAIL because the catalog is not rendered.

- [ ] **Step 3: Implement `UmkmCatalog`**

Create a server component accepting `products: DemoProduct[]`. Render a
responsive three-column grid with `Image`, badge, size, exact price, stock,
description, and `WhatsAppLink`. Build each message as:

```ts
`Halo WebKertasari, saya ingin menanyakan produk demo ${product.name} (${product.size}) dengan harga simulasi ${product.price}.`
```

Also render summary chips for `4,9/5 rating simulasi`, `Pengiriman Kertasari
dan sekitarnya`, and `Pesan sebelum 14.00`.

- [ ] **Step 4: Run the route test and verify GREEN**

Run the focused route test again. Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/components/demos/umkm-catalog.tsx src/app/demo/[slug]/page.test.tsx
git commit -m "feat: add realistic UMKM catalog"
```

### Task 5: Build the Organization Gallery

**Files:**
- Create: `src/components/demos/organization-gallery.tsx`
- Modify: `src/app/demo/[slug]/page.test.tsx`

- [ ] **Step 1: Write a failing gallery test**

Render `/demo/website-organisasi` and assert:

```ts
expect(screen.getByRole("heading", { name: /dokumentasi kegiatan/i }))
  .toBeInTheDocument();
expect(screen.getAllByRole("img", { name: /kegiatan fiktif/i }))
  .toHaveLength(6);
expect(screen.getByText("Pelatihan Konten Digital")).toBeInTheDocument();
```

- [ ] **Step 2: Run the route test and verify RED**

Expected: gallery heading and images are absent.

- [ ] **Step 3: Implement `OrganizationGallery`**

Render one large lead image followed by five responsive gallery cards. Include
date, location, caption, AI-fictional badge, meaningful alt text, and a visible
note that no real member or event is represented.

- [ ] **Step 4: Run the focused test and verify GREEN**

- [ ] **Step 5: Commit**

```powershell
git add src/components/demos/organization-gallery.tsx src/app/demo/[slug]/page.test.tsx
git commit -m "feat: add organization activity gallery"
```

### Task 6: Build the Retail POS Interface

**Files:**
- Create: `src/components/demos/pos-overview.tsx`
- Modify: `src/app/demo/[slug]/page.test.tsx`

- [ ] **Step 1: Write failing POS assertions**

For `/demo/website-pos-pelayanan`, assert headings and values:

```ts
expect(screen.getByRole("heading", { name: /kasir rasa bumi/i }))
  .toBeInTheDocument();
expect(screen.getByPlaceholderText(/cari produk atau sku/i))
  .toBeInTheDocument();
expect(screen.getByText("Keranjang Saat Ini")).toBeInTheDocument();
expect(screen.getByText("Rp116.000")).toBeInTheDocument();
expect(screen.getByText("QRIS")).toBeInTheDocument();
expect(screen.getByRole("heading", { name: /transaksi terbaru/i }))
  .toBeInTheDocument();
```

- [ ] **Step 2: Run the route test and verify RED**

- [ ] **Step 3: Implement `PosOverview`**

Build a static application frame with:

- Dark sidebar and cashier/shift identity
- Search input and category pills
- Product cards with price, SKU, stock, and add button visuals
- Cart with three line items and quantity controls marked disabled/demo
- Subtotal, discount, tax, and total rows
- Payment method chips and a disabled `Bayar Rp116.000` button
- Low-stock panel and recent transaction table

Use native table markup for transaction data and visible `Simulasi` labels.

- [ ] **Step 4: Run route test and verify GREEN**

- [ ] **Step 5: Commit**

```powershell
git add src/components/demos/pos-overview.tsx src/app/demo/[slug]/page.test.tsx
git commit -m "feat: add complete POS cashier demo"
```

### Task 7: Extract and Complete the Analytics Dashboard

**Files:**
- Create: `src/components/demos/analytics-overview.tsx`
- Modify: `src/components/demos/portfolio-demo-page.tsx`
- Modify: `src/app/demo/[slug]/page.test.tsx`

- [ ] **Step 1: Expand failing analytics tests**

Keep existing chart tests and add:

```ts
expect(screen.getByRole("navigation", { name: /menu dashboard/i }))
  .toBeInTheDocument();
expect(screen.getByRole("heading", { name: /produk terlaris/i }))
  .toBeInTheDocument();
expect(screen.getByRole("heading", { name: /stok perlu perhatian/i }))
  .toBeInTheDocument();
expect(screen.getByRole("heading", { name: /transaksi terakhir/i }))
  .toBeInTheDocument();
```

- [ ] **Step 2: Run the route test and verify RED**

- [ ] **Step 3: Move analytics rendering into a focused component**

Move the existing chart code from `portfolio-demo-page.tsx` to
`analytics-overview.tsx`. Wrap it in an operational dashboard frame with
sidebar navigation, period selector display, KPI cards, existing diagrams,
top-product table, low-stock list, recent transactions, and insight panel.

- [ ] **Step 4: Compose all specialized sections**

In `PortfolioDemoPage`, render:

```tsx
{demo.kind === "umkm" && demo.products ? (
  <UmkmCatalog products={demo.products} />
) : null}
{demo.kind === "organization" && demo.gallery ? (
  <OrganizationGallery items={demo.gallery} />
) : null}
{demo.kind === "service" && demo.pos ? <PosOverview data={demo.pos} /> : null}
{demo.kind === "analytics" && demo.analytics ? (
  <AnalyticsOverview data={demo.analytics} stats={demo.stats} />
) : null}
```

Place specialized content before the generic showcase and keep story, process,
FAQ, and closing sections.

- [ ] **Step 5: Run the route test and verify GREEN**

- [ ] **Step 6: Commit**

```powershell
git add src/components/demos/analytics-overview.tsx src/components/demos/portfolio-demo-page.tsx src/app/demo/[slug]/page.test.tsx
git commit -m "feat: complete analytics operations dashboard"
```

### Task 8: Verify Homepage Cards and Full Application

**Files:**
- Modify: `src/components/sections/content-sections.test.tsx`

- [ ] **Step 1: Add thumbnail assertions**

Assert image sources contain:

```ts
expect(screen.getByAltText("Mockup demo Website UMKM"))
  .toHaveAttribute("src", expect.stringContaining("umkm-catalog.svg"));
expect(screen.getByAltText("Mockup demo Website Organisasi"))
  .toHaveAttribute("src", expect.stringContaining("organization-gallery.svg"));
expect(screen.getByAltText("Mockup demo Website POS Kasir"))
  .toHaveAttribute("src", expect.stringContaining("pos-dashboard.svg"));
expect(screen.getByAltText("Mockup demo Dashboard Analitik"))
  .toHaveAttribute("src", expect.stringContaining("analytics-dashboard.svg"));
```

- [ ] **Step 2: Run focused content and route tests**

```powershell
npm test -- --run src/components/sections/content-sections.test.tsx "src/app/demo/[slug]/page.test.tsx" src/data/portfolio-demos.test.ts
```

Expected: PASS.

- [ ] **Step 3: Run full verification**

```powershell
npm test -- --testTimeout=15000 --maxWorkers=1 --no-file-parallelism
npm run lint
npm run typecheck
$env:NEXT_PUBLIC_SITE_URL='https://webkertasari.vercel.app'
npm run build
```

Expected: all tests pass, ESLint and TypeScript report no errors, and Next.js
builds all static routes.

- [ ] **Step 4: Review scope and generated files**

```powershell
git diff --check
git status --short
git diff --stat master...HEAD
```

Expected: only planned source, test, documentation, and image files are
changed. Do not stage or revert the existing generated `next-env.d.ts` change.

- [ ] **Step 5: Commit any final test-only adjustment**

```powershell
git add src/components/sections/content-sections.test.tsx
git commit -m "test: verify specialized portfolio thumbnails"
```

- [ ] **Step 6: Merge and publish**

Merge the verified feature branch into `master`, rerun focused verification on
the merged result, remove the owned worktree, delete the feature branch, and
push `master` to `origin`.
