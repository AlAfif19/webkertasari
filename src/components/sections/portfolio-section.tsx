import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { portfolio } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portofolio" className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Portofolio Demo"
          title="Contoh Website yang Bisa Anda Pesan"
          description="Contoh berikut adalah demonstrasi kemampuan dan bukan klaim proyek pelanggan."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <Image
                src={item.image}
                alt={`Mockup demo ${item.title}`}
                width={720}
                height={480}
                className="aspect-[3/2] w-full object-cover"
              />
              <CardContent>
                <Badge>{item.label}</Badge>
                <p className="mt-4 text-sm text-slate-500">{item.type}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
                {item.href ? (
                  <Button asChild variant="outline" className="mt-5 w-full">
                    <Link
                      href={item.href}
                      aria-label={`Lihat demo ${item.title}`}
                    >
                      Lihat demo
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
