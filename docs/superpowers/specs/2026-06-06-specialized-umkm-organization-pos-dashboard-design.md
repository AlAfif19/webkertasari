# Specialized UMKM, Organization, POS, and Dashboard Design

## Objective

Enrich four WebKertasari portfolio demos so each one shows a convincing,
content-rich example instead of reusing generic placeholder cards. The demos
remain static and use clearly labeled fictional or simulated data.

## Scope

### UMKM Demo

The Rasa Bumi demo will present six realistic fictional products:

- Kopi Arabika Kertasari, 200 g, Rp48.000
- Kopi Susu Gula Aren, 250 ml, Rp18.000
- Teh Rempah Gunung, 10 sachets, Rp32.000
- Keripik Kentang Balado, 150 g, Rp22.000
- Madu Hutan Kertasari, 250 ml, Rp68.000
- Paket Hampers Lereng, one package, Rp145.000

Each product card includes an image, category, package size, exact price,
stock status, and optional bestseller label. The section also includes
customer-rating context, delivery coverage, and a WhatsApp order action with
the product name included in the message.

### Organization Demo

The Kertasari Muda demo will add a six-image activity gallery covering:

- Digital-content training
- Community clean-up
- Volunteer briefing
- Local-product photography workshop
- Tree planting
- Community discussion

The images are AI-generated and depict fictional people and events. Each image
has accessible alternative text, a fictional date, location context, and a
short caption. The gallery must remain clearly marked as demo documentation.

### POS Demo

The existing `website-pos-pelayanan` route will become a fictional retail
Point of Sale demo named Rasa Bumi POS. Its portfolio label and description
will be updated accordingly.

The POS view contains:

- Product search field and category controls
- Product grid with prices and stock counts
- Current cart with quantities and line totals
- Subtotal, discount, tax simulation, and total
- Cash, QRIS, and debit payment options
- Low-stock notices
- Recent transaction table
- Shift and cashier summary

Controls may visually represent actions, but the demo remains static and does
not persist cart or transaction changes.

### Analytics Dashboard

The Lentera Analytics demo will show a complete operational dashboard instead
of using a chart-only hero or skeleton-like portfolio thumbnail.

The dashboard presentation includes:

- Sidebar navigation
- Date or reporting-period context
- Revenue, order, average-order, and customer KPI cards
- Revenue trend and order-volume diagrams
- Category and sales-channel distribution
- Best-selling product table
- Low-stock panel
- Recent transaction table
- Short operational insight

All values remain simulated and consistent with the Rasa Bumi product catalog.

### Portfolio Thumbnails

The homepage portfolio cards for UMKM, organization, POS, and analytics will
receive detailed SVG thumbnails. Each thumbnail will show recognizable,
content-filled interfaces or activity imagery rather than generic skeleton
blocks.

## Architecture

The common page shell remains in
`src/components/demos/portfolio-demo-page.tsx`. Specialized content is moved
into focused components under `src/components/demos/`:

- `umkm-catalog.tsx`
- `organization-gallery.tsx`
- `pos-overview.tsx`
- `analytics-overview.tsx`

Shared identity, story, process, FAQ, and closing sections remain in the common
renderer. Specialized components receive typed static data from
`src/data/portfolio-demos.ts`.

The `PortfolioDemo` type gains optional, kind-specific fields for products,
gallery entries, POS data, and analytics content. Runtime narrowing uses the
demo kind and presence of the relevant field. No database, API, login, or new
environment variable is introduced.

## Assets

AI-generated raster images will be stored under:

- `public/images/demos/umkm/`
- `public/images/demos/organization/`

Homepage thumbnails remain lightweight SVG files under
`public/images/portfolio/`. Every generated person and event is fictional.
Image captions and disclaimers state that the content is a simulation.

## Responsive Behavior

- Product and gallery grids collapse from three columns to one column.
- The POS view stacks the product area above the cart on narrow screens.
- Dashboard tables use horizontal overflow where necessary.
- Essential values and labels remain readable without relying on color alone.
- Images use meaningful alternative text and responsive `next/image` sizing.

## Data and Safety Boundaries

- Prices are plausible Indonesian retail examples, not active offers.
- Stock, ratings, customers, transactions, and revenue are simulated.
- WhatsApp links prepare inquiry text only and do not create an order.
- AI images do not represent real members, customers, or documented events.
- The POS controls do not perform or store payment transactions.

## Testing

Automated tests will verify:

- Six complete UMKM products and visible exact prices
- Product WhatsApp links include the selected product
- Six organization gallery images with accessible alternative text
- POS search, categories, cart totals, payment methods, stock, and transaction
  sections are rendered
- Dashboard KPI, charts, product table, stock panel, sidebar, and transactions
  are rendered
- Homepage cards use the enriched thumbnails
- Existing five static demo routes continue to build
- Full Vitest suite, ESLint, TypeScript, and Next.js production build pass

## Out of Scope

- Real checkout or payment integration
- Persistent cart or inventory management
- User authentication and role permissions
- Database-backed transactions
- CMS-backed activity uploads
- Real organization members or event documentation
