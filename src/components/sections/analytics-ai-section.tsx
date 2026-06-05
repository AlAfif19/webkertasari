import {
  BarChart3,
  BrainCircuit,
  FileSpreadsheet,
  LineChart,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

const benefits = [
  ["Melihat tren penjualan", LineChart],
  ["Menganalisis pelanggan", Users],
  ["Membuat laporan otomatis", FileSpreadsheet],
  ["Prediksi dan segmentasi", BrainCircuit],
] as const;

export function AnalyticsAiSection() {
  return (
    <section className="analytics-gradient section-space text-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Layanan Premium"
            title="Website Lebih Cerdas dengan Analitik dan AI"
            description="Untuk bisnis yang sudah memiliki data pelanggan, transaksi, produk, atau laporan penjualan, kami dapat mengubahnya menjadi dashboard dan insight yang lebih mudah dibaca."
            align="left"
            inverse
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map(([label, Icon]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <Icon className="size-5 text-cyan-300" />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-7 text-slate-300">
            Biaya lebih tinggi karena mencakup analisis kebutuhan data,
            pembersihan, pemodelan, pengujian, dashboard, dan dokumentasi.
          </p>
          <WhatsAppLink
            label="Diskusikan Kebutuhan Data"
            message="Halo WebKertasari, saya ingin berdiskusi tentang dashboard analitik atau AI/ML."
            className="mt-7"
          />
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Ringkasan Bisnis</p>
            <BarChart3 className="text-cyan-300" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["Penjualan", "Pelanggan", "Produk"].map((item, index) => (
              <div key={item} className="rounded-xl bg-white/10 p-4">
                <p className="text-xs text-slate-300">{item}</p>
                <p className="mt-2 text-xl font-bold">
                  {["24%", "1.2K", "86"][index]}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-52 items-end gap-3 rounded-2xl bg-slate-950/55 p-5">
            {[38, 54, 45, 72, 63, 84, 76, 92].map((height, index) => (
              <div
                key={`${height}-${index}`}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald-500 to-cyan-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
