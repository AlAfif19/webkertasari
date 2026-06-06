import Image from "next/image";
import {
  Banknote,
  CreditCard,
  LayoutGrid,
  Minus,
  PackageSearch,
  Plus,
  QrCode,
  ReceiptText,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DemoPosData } from "@/types/portfolio-demo";

type Props = {
  data: DemoPosData;
};

const paymentIcons = [Banknote, QrCode, CreditCard];

export function PosOverview({ data }: Props) {
  const lowStock = data.products.filter((product) => product.stock < 20);

  return (
    <section className="bg-[#e0effc] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Badge className="bg-blue-100 text-blue-800">
              Aplikasi Kasir Statis
            </Badge>
            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Kasir Rasa Bumi
            </h2>
            <p className="mt-3 text-slate-600">
              {data.cashier} · {data.shift}
            </p>
          </div>
          <Badge variant="outline">Data dan tombol hanya simulasi</Badge>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
          <div className="grid min-h-[760px] xl:grid-cols-[88px_1fr_380px]">
            <nav
              aria-label="Menu POS"
              className="hidden bg-[#123d68] p-4 text-white xl:block"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-white/10 font-black">
                RB
              </div>
              <div className="mt-8 grid gap-4">
                {[LayoutGrid, ShoppingCart, PackageSearch, ReceiptText].map(
                  (Icon, index) => (
                    <span
                      key={index}
                      className={`grid size-14 place-items-center rounded-2xl ${
                        index === 0 ? "bg-blue-500" : "bg-white/5"
                      }`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  ),
                )}
              </div>
            </nav>

            <div className="p-5 sm:p-7">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder="Cari produk atau SKU"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none"
                />
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {data.categories.map((category, index) => (
                  <span
                    key={category}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                      index === 0
                        ? "bg-blue-700 text-white"
                        : "border border-slate-200 bg-white"
                    }`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.products.map((product) => (
                  <article
                    key={product.sku}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={512}
                      height={512}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs font-semibold text-slate-400">
                        {product.sku}
                      </p>
                      <h3 className="mt-2 min-h-12 font-bold">{product.name}</h3>
                      <div className="mt-3 flex items-end justify-between gap-3">
                        <div>
                          <p className="font-black text-blue-800">
                            {product.price}
                          </p>
                          <p className="text-xs text-slate-500">
                            Stok {product.stock}
                          </p>
                        </div>
                        <button
                          type="button"
                          disabled
                          aria-label={`Tambah ${product.name} - demo`}
                          className="grid size-9 place-items-center rounded-xl bg-blue-700 text-white opacity-80"
                        >
                          <Plus className="size-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="border-t border-slate-200 bg-white p-5 sm:p-7 xl:border-l xl:border-t-0">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    4 item · Simulasi
                  </p>
                  <h3 className="mt-1 text-xl font-black">
                    Keranjang Saat Ini
                  </h3>
                </div>
                <ShoppingCart className="size-6 text-blue-700" />
              </div>
              <div className="mt-6 divide-y divide-slate-100">
                {data.cart.map((item) => (
                  <div key={item.name} className="py-4">
                    <div className="flex justify-between gap-4">
                      <p className="font-semibold">{item.name}</p>
                      <strong>{item.total}</strong>
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
                      <button
                        type="button"
                        disabled
                        className="grid size-7 place-items-center rounded-lg bg-slate-100"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        disabled
                        className="grid size-7 place-items-center rounded-lg bg-slate-100"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-3 border-t border-slate-200 pt-5 text-sm">
                {[
                  ["Subtotal", data.subtotal],
                  ["Diskon demo", data.discount],
                  ["Pajak", data.tax],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-slate-500">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
                <div className="flex justify-between border-t border-dashed border-slate-200 pt-4 text-xl font-black">
                  <span>Total</span>
                  <span>{data.total}</span>
                </div>
              </div>
              <p className="mt-6 text-sm font-bold">Metode pembayaran</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {data.paymentMethods.map((method, index) => {
                  const Icon = paymentIcons[index];
                  return (
                    <span
                      key={method}
                      className="grid place-items-center gap-2 rounded-xl border border-slate-200 p-3 text-center text-xs font-semibold"
                    >
                      <Icon className="size-5 text-blue-700" />
                      {method}
                    </span>
                  );
                })}
              </div>
              <Button disabled className="mt-5 w-full bg-blue-700">
                Bayar {data.total}
              </Button>
            </aside>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
          <article className="rounded-3xl bg-[#123d68] p-6 text-white">
            <p className="text-sm font-semibold text-blue-200">
              Inventori simulasi
            </p>
            <h3 className="mt-2 text-xl font-black">Stok Perlu Perhatian</h3>
            <div className="mt-5 space-y-3">
              {lowStock.map((product) => (
                <div
                  key={product.name}
                  className="flex justify-between rounded-xl bg-white/10 p-4"
                >
                  <span>{product.name}</span>
                  <strong>{product.stock} unit</strong>
                </div>
              ))}
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl bg-white p-6">
            <p className="text-sm font-semibold text-blue-700">
              Riwayat shift simulasi
            </p>
            <h3 className="mt-2 text-xl font-black">Transaksi Terbaru</h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="text-slate-500">
                  <tr>
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Waktu</th>
                    <th className="pb-3">Pelanggan</th>
                    <th className="pb-3">Pembayaran</th>
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
    </section>
  );
}
