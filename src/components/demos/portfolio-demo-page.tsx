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

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl">
        <Image
          src={demo.image}
          alt={`Mockup ${demo.brand} untuk demo`}
          width={720}
          height={480}
          priority
          className="aspect-[3/2] w-full rounded-2xl object-cover"
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
