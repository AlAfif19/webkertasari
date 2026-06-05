import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="layanan" className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Layanan"
          title="Layanan Website WebKertasari"
          description="Mulai dari website promosi sederhana sampai dashboard analitik dan solusi berbasis data."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="transition-transform hover:-translate-y-1">
              <CardContent>
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
