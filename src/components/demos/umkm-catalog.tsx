import Image from "next/image";
import { Clock3, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import type { DemoProduct } from "@/types/portfolio-demo";

type Props = {
  products: DemoProduct[];
};

export function UmkmCatalog({ products }: Props) {
  return (
    <section className="bg-[#f4ead4] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Badge className="bg-[#e8d4ad] text-[#594226]">
              Katalog Produk Demo
            </Badge>
            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Katalog Rasa Bumi
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Contoh katalog dengan harga eceran yang masuk akal, informasi
              kemasan, stok, dan jalur pemesanan yang jelas.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Star className="size-4 fill-amber-400 text-amber-500" />
              4,9/5 rating simulasi
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-emerald-700" />
              Pengiriman Kertasari dan sekitarnya
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="size-4 text-emerald-700" />
              Pesan sebelum 14.00 untuk proses hari yang sama
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={512}
                  height={512}
                  className="aspect-square w-full object-cover"
                />
                {product.badge ? (
                  <Badge className="absolute left-4 top-4 bg-[#344b3f] text-white">
                    {product.badge}
                  </Badge>
                ) : null}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>{product.category}</span>
                  <span>{product.size}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{product.name}</h3>
                <p className="mt-3 min-h-14 leading-7 text-slate-600">
                  {product.description}
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-2xl font-black text-[#344b3f]">
                      {product.price}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Stok simulasi: {product.stock}
                    </p>
                  </div>
                </div>
                <WhatsAppLink
                  className="mt-5 w-full bg-[#c56b3d] hover:bg-[#a9562f]"
                  label={`Pesan ${product.name} via WhatsApp`}
                  message={`Halo WebKertasari, saya ingin menanyakan produk demo ${product.name} (${product.size}) dengan harga simulasi ${product.price}.`}
                />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Produk, harga, stok, rating, dan area pengiriman di atas sepenuhnya
          simulasi.
        </p>
      </div>
    </section>
  );
}
