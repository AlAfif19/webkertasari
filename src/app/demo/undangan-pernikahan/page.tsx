import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { WeddingCountdown } from "@/components/wedding/wedding-countdown";
import { WeddingGuestbook } from "@/components/wedding/wedding-guestbook";
import { WeddingRsvp } from "@/components/wedding/wedding-rsvp";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Demo Undangan Pernikahan | WebKertasari",
  description:
    "Demo undangan pernikahan digital elegan dengan RSVP dan buku tamu simulasi.",
};

const gallery = [
  {
    src: "/images/wedding/gallery-1.svg",
    alt: "Ilustrasi lengkung bunga dan pasangan fiktif untuk demo",
  },
  {
    src: "/images/wedding/gallery-2.svg",
    alt: "Ilustrasi cincin dan kartu undangan untuk demo",
  },
  {
    src: "/images/wedding/gallery-3.svg",
    alt: "Ilustrasi meja resepsi dan pegunungan untuk demo",
  },
];

const schedule = [
  ["08.00", "Akad nikah", "Pembukaan dan prosesi akad"],
  ["10.00", "Resepsi", "Sambutan dan ramah tamah"],
  ["12.30", "Penutup", "Doa dan sesi foto keluarga"],
] as const;

export default function WeddingDemoPage() {
  return (
    <main className="wedding-page min-h-screen">
      <nav className="border-b border-[#a4834f]/25 bg-[#fffdf8]/90">
        <div className="site-container flex min-h-18 items-center justify-between gap-4 py-4">
          <Link
            href="/#portofolio"
            className="inline-flex items-center gap-2 font-semibold text-stone-700 hover:text-[#876b3f]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Kembali ke portofolio
          </Link>
          <Badge className="bg-[#876b3f] text-white">Demo</Badge>
        </div>
      </nav>

      <section className="relative overflow-hidden px-4 py-20 text-center sm:py-28">
        <div
          className="absolute left-[-5rem] top-10 size-64 rounded-full border border-[#a4834f]/20"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-[-5rem] size-72 rounded-full border border-[#a4834f]/20"
          aria-hidden="true"
        />
        <div className="wedding-panel relative mx-auto max-w-4xl rounded-[2rem] px-6 py-16 sm:px-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#876b3f]">
            The Wedding of
          </p>
          <h1 className="wedding-serif mt-6 text-5xl font-normal sm:text-7xl">
            Alya &amp; Fikri
          </h1>
          <div className="mx-auto my-8 h-px w-28 bg-[#a4834f]" />
          <p className="wedding-serif text-2xl">20 Desember 2026</p>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-600">
            Nama pasangan, tanggal, tempat, dan seluruh cerita pada halaman ini
            adalah konten fiktif untuk demonstrasi desain.
          </p>
          <Button
            asChild
            className="mt-8 bg-[#876b3f] text-white hover:bg-[#6f5733]"
          >
            <a href="#pasangan">Buka undangan</a>
          </Button>
        </div>
      </section>

      <section id="pasangan" className="px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#876b3f]">
            Pasangan Fiktif
          </p>
          <h2 className="wedding-serif mt-5 text-4xl sm:text-5xl">
            Sebuah contoh cerita bahagia
          </h2>
          <p className="mt-7 text-lg leading-8 text-stone-600">
            Bagian ini dapat digunakan untuk memperkenalkan kedua mempelai
            secara singkat. Pada proyek nyata, teks dan foto akan disesuaikan
            dengan materi yang diberikan oleh pasangan.
          </p>
        </div>
      </section>

      <section className="bg-[#f2e9dc] px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#876b3f]">
              Menuju Hari Bahagia
            </p>
            <h2 className="wedding-serif mt-4 text-4xl">Hitung Mundur</h2>
          </div>
          <div className="mt-10">
            <WeddingCountdown targetIso="2026-12-20T08:00:00+07:00" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#876b3f]">
              Waktu dan Tempat
            </p>
            <h2 className="wedding-serif mt-4 text-4xl">Rangkaian Acara</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Akad Nikah", "08.00 WIB", "Minggu, 20 Desember 2026"],
              ["Resepsi", "10.00 WIB", "Minggu, 20 Desember 2026"],
            ].map(([title, time, date]) => (
              <article
                key={title}
                className="wedding-panel rounded-3xl p-8 text-center"
              >
                <CalendarDays
                  className="mx-auto size-7 text-[#876b3f]"
                  aria-hidden="true"
                />
                <h3 className="wedding-serif mt-5 text-3xl">{title}</h3>
                <p className="mt-4 font-semibold">{date}</p>
                <p className="mt-2 text-stone-600">{time}</p>
                <p className="mt-5 flex items-center justify-center gap-2 text-stone-600">
                  <MapPin className="size-4" aria-hidden="true" />
                  Lokasi Contoh, Kertasari
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#443629] px-4 py-20 text-[#fffdf8]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#dcc397]">
              Agenda
            </p>
            <h2 className="wedding-serif mt-4 text-4xl">Susunan Acara</h2>
          </div>
          <ol className="mt-12 space-y-5">
            {schedule.map(([time, title, description]) => (
              <li
                key={time}
                className="grid gap-3 border-b border-white/15 pb-5 sm:grid-cols-[7rem_1fr]"
              >
                <p className="wedding-serif text-2xl text-[#dcc397]">{time}</p>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-stone-300">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#876b3f]">
              Ilustrasi Demo
            </p>
            <h2 className="wedding-serif mt-4 text-4xl">Galeri Cerita</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {gallery.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-3xl border border-[#a4834f]/25 bg-white p-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2e9dc] px-4 py-20">
        <div className="wedding-panel mx-auto max-w-4xl rounded-3xl p-8 text-center sm:p-12">
          <MapPin className="mx-auto size-8 text-[#876b3f]" aria-hidden="true" />
          <h2 className="wedding-serif mt-5 text-4xl">Petunjuk Lokasi</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
            Lokasi pada demo ini tidak menunjuk tempat acara nyata. Tautan
            berikut hanya membuka pencarian umum wilayah Kertasari.
          </p>
          <Button asChild variant="outline" className="mt-7 border-[#a4834f]">
            <a
              href="https://www.google.com/maps/search/Kertasari,+Kabupaten+Bandung"
              target="_blank"
              rel="noreferrer"
            >
              Buka pencarian peta
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <WeddingRsvp />
          <WeddingGuestbook />
        </div>
      </section>

      <section className="bg-[#443629] px-4 py-20 text-center text-[#fffdf8]">
        <Clock3 className="mx-auto size-7 text-[#dcc397]" aria-hidden="true" />
        <h2 className="wedding-serif mt-5 text-4xl">Terima Kasih</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
          Ini adalah demo WebKertasari. Isi, warna, bagian acara, galeri, dan
          fitur dapat disesuaikan untuk kebutuhan undangan yang sebenarnya.
        </p>
        <WhatsAppLink
          className="mt-7 bg-[#dcc397] text-[#443629] hover:bg-[#ead8b8]"
          label="Konsultasi undangan digital"
          message="Halo WebKertasari, saya tertarik dengan demo undangan pernikahan."
        />
      </section>
    </main>
  );
}
