import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  FileText,
  HeartHandshake,
  LayoutDashboard,
  MessageCircle,
  PackageCheck,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnalyticsOperations } from "@/components/demos/analytics-operations";
import { OrganizationGallery } from "@/components/demos/organization-gallery";
import { PosOverview } from "@/components/demos/pos-overview";
import { UmkmCatalog } from "@/components/demos/umkm-catalog";
import type {
  PortfolioDemo,
  PortfolioDemoKind,
} from "@/types/portfolio-demo";

type Props = {
  demo: PortfolioDemo;
};

const theme: Record<
  PortfolioDemoKind,
  {
    page: string;
    dark: string;
    soft: string;
    accent: string;
    badge: string;
  }
> = {
  umkm: {
    page: "bg-[#fffaf0] text-[#3d3327]",
    dark: "bg-[#344b3f] text-white",
    soft: "bg-[#f4ead4]",
    accent: "bg-[#c56b3d] hover:bg-[#a9562f]",
    badge: "bg-[#e8d4ad] text-[#594226]",
  },
  personal: {
    page: "bg-[#f8f7ff] text-slate-950",
    dark: "bg-[#17152d] text-white",
    soft: "bg-[#e9e6ff]",
    accent: "bg-violet-600 hover:bg-violet-700",
    badge: "bg-violet-100 text-violet-800",
  },
  organization: {
    page: "bg-[#f4fbf8] text-slate-950",
    dark: "bg-[#0f4b3a] text-white",
    soft: "bg-[#dff3ea]",
    accent: "bg-emerald-700 hover:bg-emerald-800",
    badge: "bg-emerald-100 text-emerald-800",
  },
  service: {
    page: "bg-[#f7fbff] text-slate-950",
    dark: "bg-[#123d68] text-white",
    soft: "bg-[#e0effc]",
    accent: "bg-blue-700 hover:bg-blue-800",
    badge: "bg-blue-100 text-blue-800",
  },
  analytics: {
    page: "bg-[#f4f7fb] text-slate-950",
    dark: "bg-[#071a2e] text-white",
    soft: "bg-[#e5edf5]",
    accent: "bg-cyan-600 hover:bg-cyan-700",
    badge: "bg-cyan-100 text-cyan-900",
  },
};

const featureIcons = {
  umkm: [ShoppingBag, PackageCheck, MessageCircle],
  personal: [Search, Palette, BriefcaseBusiness],
  organization: [Users, HeartHandshake, CalendarDays],
  service: [FileText, Clock3, CircleUserRound],
  analytics: [LayoutDashboard, BarChart3, Sparkles],
} as const;

function HeroMockup({ demo }: Props) {
  const currentTheme = theme[demo.kind];

  if (demo.kind === "analytics") {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
        <div className="rounded-2xl bg-white p-5 text-slate-950">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Ringkasan Juni
              </p>
              <p className="mt-2 text-2xl font-black">Rp18,4 jt</p>
            </div>
            <Badge className={currentTheme.badge}>+12% Simulasi</Badge>
          </div>
          <div className="mt-8 flex h-44 items-end gap-3">
            {[38, 54, 43, 68, 59, 82].map((height, index) => (
              <div key={height} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-cyan-600 to-emerald-400"
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] text-slate-400">
                  {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const heroImage = demo.portrait?.src ?? demo.image;
  const heroAlt =
    demo.portrait?.alt ?? `Mockup ${demo.brand} untuk demo`;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl">
        <Image
          src={heroImage}
          alt={heroAlt}
          width={720}
          height={480}
          priority
          className={`aspect-[3/2] w-full rounded-2xl object-cover ${
            demo.portrait ? "object-[center_35%]" : ""
          }`}
        />
      </div>
      <div className="absolute -bottom-5 -left-4 max-w-56 rounded-2xl bg-white p-4 text-slate-950 shadow-xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Contoh komponen
        </p>
        <p className="mt-2 font-bold">{demo.features[0].title}</p>
      </div>
    </div>
  );
}

function AnalyticsOverview() {
  const bars = [
    ["Jan", 42],
    ["Feb", 56],
    ["Mar", 48],
    ["Apr", 70],
    ["Mei", 64],
    ["Jun", 86],
  ] as const;
  const channels = [
    ["WhatsApp", "54%", "w-[54%]"],
    ["Website", "31%", "w-[31%]"],
    ["Datang langsung", "15%", "w-[15%]"],
  ] as const;
  const activities = [
    ["10.42", "Pesanan Kopi Lereng dikonfirmasi", "Rp245.000"],
    ["09.18", "Stok Teh Rempah diperbarui", "48 unit"],
    ["Kemarin", "Laporan mingguan selesai", "+12%"],
  ] as const;

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-700">
                  Performa bulanan
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Tren Pesanan Simulasi
                </h2>
              </div>
              <Badge variant="outline">Jan-Jun 2026</Badge>
            </div>
            <div className="mt-10 flex h-64 items-end gap-3 sm:gap-5">
              {bars.map(([month, height]) => (
                <div key={month} className="flex flex-1 flex-col items-center gap-3">
                  <span className="text-xs font-semibold text-slate-500">
                    {height}
                  </span>
                  <div
                    className="w-full rounded-t-xl bg-gradient-to-t from-cyan-700 to-emerald-400"
                    style={{ height: `${height}%` }}
                    aria-label={`${month}: ${height} pesanan simulasi`}
                  />
                  <span className="text-xs text-slate-500">{month}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-cyan-300">
              Distribusi simulasi
            </p>
            <h2 className="mt-2 text-2xl font-black">Kategori Pesanan</h2>
            <div className="mt-8 space-y-6">
              {[
                ["Minuman", "46%", "w-[46%]"],
                ["Makanan", "34%", "w-[34%]"],
                ["Lainnya", "20%", "w-[20%]"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className={`h-2 rounded-full bg-cyan-400 ${width}`} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-300">
              Insight simulasi: kategori minuman memberi kontribusi terbesar,
              sehingga stok akhir pekan dapat diprioritaskan.
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-700">
                  Nilai transaksi simulasi
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Tren Pendapatan
                </h2>
              </div>
              <p className="text-sm font-semibold text-emerald-700">
                +12% dari periode lalu
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-slate-50 p-4">
              <svg
                viewBox="0 0 640 220"
                className="h-auto w-full"
                role="img"
                aria-label="Grafik garis tren pendapatan Januari sampai Juni"
              >
                {[40, 90, 140, 190].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    y1={y}
                    x2="620"
                    y2={y}
                    stroke="#cbd5e1"
                    strokeDasharray="5 7"
                  />
                ))}
                <path
                  d="M30 174 C90 166 105 148 145 152 S220 116 260 126 S330 83 380 96 S455 58 500 72 S570 38 610 42"
                  fill="none"
                  stroke="#0891b2"
                  strokeLinecap="round"
                  strokeWidth="8"
                />
                <path
                  d="M30 174 C90 166 105 148 145 152 S220 116 260 126 S330 83 380 96 S455 58 500 72 S570 38 610 42 L610 200 L30 200 Z"
                  fill="url(#income-gradient)"
                  opacity=".35"
                />
                <defs>
                  <linearGradient
                    id="income-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#ecfeff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="grid grid-cols-6 text-center text-xs text-slate-500">
                {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-cyan-700">
              Komposisi simulasi
            </p>
            <h2 className="mt-2 text-2xl font-black">Kategori Pesanan</h2>
            <div className="mt-8 flex justify-center">
              <div
                className="grid size-44 place-items-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#0891b2 0 46%, #34d399 46% 80%, #cbd5e1 80% 100%)",
                }}
                role="img"
                aria-label="Diagram donat kategori pesanan: minuman 46 persen, makanan 34 persen, lainnya 20 persen"
              >
                <div className="grid size-28 place-items-center rounded-full bg-white text-center">
                  <span>
                    <strong className="block text-2xl">126</strong>
                    <span className="text-xs text-slate-500">pesanan</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-7 grid gap-3 text-sm">
              {[
                ["Minuman", "46%", "bg-cyan-600"],
                ["Makanan", "34%", "bg-emerald-400"],
                ["Lainnya", "20%", "bg-slate-300"],
              ].map(([label, value, color]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={`size-3 rounded-full ${color}`} />
                  <span className="flex-1">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-cyan-700">
              Sumber transaksi simulasi
            </p>
            <h2 className="mt-2 text-2xl font-black">Pesanan per Kanal</h2>
            <div className="mt-8 space-y-6">
              {channels.map(([label, value, width]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-slate-100">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-cyan-700 to-emerald-400 ${width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-cyan-300">
              Pembaruan operasional simulasi
            </p>
            <h2 className="mt-2 text-2xl font-black">Aktivitas Terbaru</h2>
            <div className="mt-7 divide-y divide-white/10">
              {activities.map(([time, activity, value]) => (
                <div
                  key={activity}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4"
                >
                  <span className="text-xs text-slate-400">{time}</span>
                  <span className="text-sm leading-6">{activity}</span>
                  <strong className="text-sm text-cyan-300">{value}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function StorySection({ demo }: Props) {
  const currentTheme = theme[demo.kind];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Badge className={currentTheme.badge}>{demo.story.eyebrow}</Badge>
          <h2 className="mt-5 max-w-3xl text-3xl font-black sm:text-4xl">
            {demo.story.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            {demo.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className={`${currentTheme.dark} rounded-3xl p-7 sm:p-9`}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">
            Fokus Utama
          </p>
          <div className="mt-6 space-y-4">
            {demo.story.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
              >
                <CheckCircle2 className="size-5 shrink-0" aria-hidden="true" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function ProcessSection({ demo }: Props) {
  const currentTheme = theme[demo.kind];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Badge className={currentTheme.badge}>Alur Demo</Badge>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Cara kerjanya, langkah demi langkah.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {demo.process.map((item) => (
            <article
              key={item.step}
              className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
            >
              <span className="text-4xl font-black opacity-20">{item.step}</span>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ demo }: Props) {
  const currentTheme = theme[demo.kind];

  return (
    <section className={`${currentTheme.soft} px-4 py-20`}>
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <Badge className={currentTheme.badge}>FAQ Demo</Badge>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Pertanyaan Umum
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Jawaban berikut memperjelas batas antara contoh tampilan dan
            kebutuhan website yang sebenarnya.
          </p>
        </div>
        <div className="space-y-4">
          {demo.faq.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none pr-8 font-bold">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioDemoPage({ demo }: Props) {
  const currentTheme = theme[demo.kind];
  const icons = featureIcons[demo.kind];

  return (
    <main className={`min-h-screen ${currentTheme.page}`}>
      <nav className="border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="site-container flex min-h-18 items-center justify-between gap-4 py-4">
          <Link
            href="/#portofolio"
            className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Kembali ke portofolio
          </Link>
          <Badge className={currentTheme.badge}>Demo</Badge>
        </div>
      </nav>

      <section className={`${currentTheme.dark} overflow-hidden px-4 py-18 sm:py-24`}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] opacity-70">
              {demo.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              {demo.brand}
            </h1>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-bold leading-tight sm:text-4xl">
              {demo.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 opacity-75">
              {demo.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className={currentTheme.accent}>
                <a href="#showcase">
                  {demo.primaryAction}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#fitur">{demo.secondaryAction}</a>
              </Button>
            </div>
          </div>
          <HeroMockup demo={demo} />
        </div>
      </section>

      <section className="border-b border-black/10 bg-white/70 px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {demo.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-black">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <StorySection demo={demo} />

      <section id="fitur" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <Badge className={currentTheme.badge}>Komponen Utama</Badge>
            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Informasi penting, tersusun untuk pengunjung.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {demo.features.map((feature, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
                >
                  <span className={`inline-flex rounded-2xl p-3 ${currentTheme.soft}`}>
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {demo.kind === "analytics" ? <AnalyticsOverview /> : null}
      {demo.kind === "analytics" && demo.analytics ? (
        <AnalyticsOperations data={demo.analytics} stats={demo.stats} />
      ) : null}
      {demo.kind === "umkm" && demo.products ? (
        <UmkmCatalog products={demo.products} />
      ) : null}
      {demo.kind === "organization" && demo.gallery ? (
        <OrganizationGallery items={demo.gallery} />
      ) : null}
      {demo.kind === "service" && demo.pos ? (
        <PosOverview data={demo.pos} />
      ) : null}

      <section id="showcase" className={`${currentTheme.soft} px-4 py-20`}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">
                Konten Demo
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                {demo.showcaseTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Seluruh isi berikut adalah simulasi untuk memperlihatkan struktur
              tampilan, bukan klaim proyek atau data nyata.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {demo.showcase.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className={`${currentTheme.dark} flex aspect-[16/9] items-center justify-center rounded-2xl`}>
                  <span className="text-5xl font-black opacity-30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {item.meta}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection demo={demo} />
      <FaqSection demo={demo} />

      <section className={`${currentTheme.dark} px-4 py-20 text-center`}>
        <div className="mx-auto max-w-3xl">
          <CheckCircle2 className="mx-auto size-8 opacity-70" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            {demo.closingTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 opacity-75">
            {demo.closingDescription}
          </p>
          <Button asChild className={`mt-8 ${currentTheme.accent}`}>
            <a
              href="https://wa.me/6282164410775?text=Halo%20WebKertasari%2C%20saya%20tertarik%20dengan%20contoh%20website."
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi via WhatsApp
              <MessageCircle className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-8 text-sm opacity-60">{demo.disclaimer}</p>
        </div>
      </section>
    </main>
  );
}
