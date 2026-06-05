import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { pricingPackages } from "@/data/pricing";

export function PricingSection() {
  return (
    <section id="paket" className="section-space section-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="Paket Harga"
          title="Pilih Paket yang Sesuai"
          description="Harga awal dibuat transparan. Kebutuhan khusus akan dibahas saat konsultasi."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPackages.map((item) => (
            <Card
              key={item.id}
              className={
                item.featured
                  ? "border-emerald-500 shadow-lg shadow-emerald-900/10"
                  : undefined
              }
            >
              <CardContent className="flex h-full flex-col">
                {item.featured ? <Badge>Rekomendasi</Badge> : null}
                <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                <p className="mt-4 text-sm text-slate-500">Mulai dari</p>
                <p className="text-3xl font-black text-slate-950">
                  {item.price}
                </p>
                <p className="mt-4 min-h-20 leading-7 text-slate-600">
                  {item.audience}
                </p>
                <ul className="mt-5 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  label={`Pilih ${item.name}`}
                  message={`Halo WebKertasari, saya tertarik dengan paket ${item.name} mulai dari ${item.price}.`}
                  variant={item.featured ? "default" : "outline"}
                  className="mt-7 w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
