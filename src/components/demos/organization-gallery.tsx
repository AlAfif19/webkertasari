import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DemoGalleryItem } from "@/types/portfolio-demo";

type Props = {
  items: DemoGalleryItem[];
};

export function OrganizationGallery({ items }: Props) {
  return (
    <section className="bg-[#dff3ea] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Badge className="bg-emerald-100 text-emerald-800">
              Galeri AI Fiktif
            </Badge>
            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Dokumentasi Kegiatan
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Contoh galeri untuk memperlihatkan kegiatan, lokasi, waktu, dan
              cerita singkat organisasi secara visual.
            </p>
          </div>
          <p className="max-w-sm rounded-2xl bg-white/80 p-4 text-sm leading-6 text-slate-600">
            Seluruh orang, lokasi kegiatan, tanggal, dan dokumentasi adalah
            fiktif. Foto dibuat dengan AI untuk kebutuhan demo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-3xl border border-emerald-950/10 bg-white shadow-sm ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={512}
                height={512}
                className={`w-full object-cover ${
                  index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"
                }`}
              />
              <div className="p-6">
                <Badge className="bg-emerald-50 text-emerald-800">
                  Dokumentasi simulasi
                </Badge>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="size-4" aria-hidden="true" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4" aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
