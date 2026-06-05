import { BarChart3, CheckCircle2, MessageCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroActions } from "./hero-actions";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="overflow-hidden bg-[linear-gradient(180deg,#f7fafc,white)] py-16 sm:py-24"
    >
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Badge>Jasa Website Kertasari</Badge>
          <h1 className="text-balance mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Buat Website Profesional untuk Usaha, Personal, dan Organisasi
            Lokal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            WebKertasari membantu Anda memiliki website yang rapi, responsif,
            mudah diakses, dan siap mengarahkan pelanggan ke WhatsApp.
          </p>
          <div className="mt-8">
            <HeroActions />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Responsif", "SEO Ready", "WhatsApp Ready"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <CheckCircle2 className="size-4 text-emerald-600" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-10 -z-10 rounded-full bg-emerald-200/35 blur-3xl" />
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="font-bold">Dashboard Usaha</p>
                <div className="flex gap-2">
                  <span className="size-2 rounded-full bg-rose-400" />
                  <span className="size-2 rounded-full bg-amber-300" />
                  <span className="size-2 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <BarChart3 className="size-6 text-cyan-300" />
                  <p className="mt-6 text-2xl font-bold">+24%</p>
                  <p className="text-xs text-slate-300">Pertumbuhan</p>
                </div>
                <div className="rounded-xl bg-emerald-500 p-4">
                  <MessageCircle className="size-6" />
                  <p className="mt-6 text-2xl font-bold">WhatsApp</p>
                  <p className="text-xs text-emerald-50">Siap diklik</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto]">
              <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 text-slate-500">
                <Search className="size-5" />
                Website usaha lokal
              </div>
              <div className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white">
                Hubungi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
