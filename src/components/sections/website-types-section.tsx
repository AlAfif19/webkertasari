import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { websiteTypes } from "@/data/services";

export function WebsiteTypesSection() {
  return (
    <section className="section-space section-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="Fleksibel"
          title="Jenis Website yang Bisa Dibuat"
          description="Pilih contoh yang paling dekat dengan kebutuhan Anda. Struktur akhirnya tetap disesuaikan saat konsultasi."
        />
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
          {websiteTypes.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="px-4 py-2 text-sm"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
