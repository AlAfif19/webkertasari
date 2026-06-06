import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  PackageSearch,
  ReceiptText,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type {
  DemoAnalyticsData,
  PortfolioDemoStat,
} from "@/types/portfolio-demo";

type Props = {
  data: DemoAnalyticsData;
  stats: PortfolioDemoStat[];
};

const menu = [
  ["Ringkasan", LayoutDashboard],
  ["Penjualan", BarChart3],
  ["Produk", ShoppingBag],
  ["Inventori", Boxes],
  ["Pelanggan", Users],
  ["Transaksi", ReceiptText],
] as const;

export function AnalyticsOperations({ data, stats }: Props) {
  return (
    <section className="bg-[#dbe7f1] px-4 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl">
        <div className="grid lg:grid-cols-[220px_1fr]">
          <nav
            aria-label="Menu dashboard"
            className="bg-[#071a2e] p-6 text-white"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-cyan-500 font-black">
                LA
              </span>
              <div>
                <p className="font-black">Lentera</p>
                <p className="text-xs text-slate-400">Analytics demo</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-1">
              {menu.map(([label, Icon], index) => (
                <span
                  key={label}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${
                    index === 0 ? "bg-cyan-500 font-bold" : "text-slate-300"
                  }`}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
            <span className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              <Settings className="size-4" />
              Pengaturan
            </span>
          </nav>

          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-700">
                  Ringkasan operasional
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  Dashboard Penjualan Rasa Bumi
                </h2>
              </div>
              <Badge variant="outline">{data.period}</Badge>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-2xl font-black">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold text-emerald-700">
                    {index === 2 ? "Stabil bulan ini" : "Data simulasi terbaru"}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
              <article className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">
                      Penjualan per bulan
                    </p>
                    <h3 className="mt-2 text-xl font-black">
                      Tren Pendapatan Operasional
                    </h3>
                  </div>
                  <strong>Rp18,4 jt</strong>
                </div>
                <div className="mt-8 flex h-52 items-end gap-3">
                  {[42, 55, 49, 71, 64, 86].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-cyan-700 to-emerald-400"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-slate-500">
                        {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
              <article className="rounded-3xl bg-[#071a2e] p-6 text-white">
                <p className="text-sm font-semibold text-cyan-300">
                  Insight simulasi
                </p>
                <h3 className="mt-2 text-xl font-black">
                  Prioritas Minggu Ini
                </h3>
                <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-300">
                  <p className="rounded-2xl bg-white/10 p-4">
                    Kopi Arabika memberi pendapatan tertinggi. Pastikan stok
                    kemasan 200 g aman menjelang akhir pekan.
                  </p>
                  <p className="rounded-2xl bg-white/10 p-4">
                    Madu dan hampers berada di bawah 10 unit dan perlu masuk
                    daftar pengadaan.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-cyan-700">
                  Kinerja katalog simulasi
                </p>
                <h3 className="mt-2 text-xl font-black">Produk Terlaris</h3>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="text-slate-500">
                      <tr>
                        <th className="pb-3">Produk</th>
                        <th className="pb-3 text-right">Terjual</th>
                        <th className="pb-3 text-right">Pendapatan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {data.topProducts.map((product) => (
                        <tr key={product.name}>
                          <td className="py-4 font-semibold">{product.name}</td>
                          <td className="text-right">{product.units} unit</td>
                          <td className="text-right font-bold">
                            {product.revenue}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
              <article className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-center gap-3 text-amber-900">
                  <PackageSearch className="size-5" />
                  <h3 className="text-xl font-black">Stok Perlu Perhatian</h3>
                </div>
                <div className="mt-5 space-y-3">
                  {data.lowStock.map((product) => (
                    <div
                      key={product.name}
                      className="flex items-center justify-between gap-4 rounded-xl bg-white p-4"
                    >
                      <span className="text-sm font-semibold">
                        {product.name}
                      </span>
                      <Badge variant="outline">{product.stock} unit</Badge>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-cyan-700">
                Arus transaksi simulasi
              </p>
              <h3 className="mt-2 text-xl font-black">Transaksi Terakhir</h3>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="text-slate-500">
                    <tr>
                      <th className="pb-3">ID</th>
                      <th className="pb-3">Waktu</th>
                      <th className="pb-3">Pelanggan</th>
                      <th className="pb-3">Metode</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="py-4 font-semibold">{transaction.id}</td>
                        <td>{transaction.time}</td>
                        <td>{transaction.customer}</td>
                        <td>{transaction.method}</td>
                        <td>
                          <Badge className="bg-emerald-100 text-emerald-800">
                            {transaction.status}
                          </Badge>
                        </td>
                        <td className="text-right font-bold">
                          {transaction.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
