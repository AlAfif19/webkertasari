import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { reviews } from "@/data/reviews";

export function ReviewsSection() {
  return (
    <section id="review" className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Review Pelanggan"
          title="Review Pelanggan"
          description="Contoh format ulasan berikut adalah simulasi dan akan diganti setelah tersedia review pelanggan yang terverifikasi."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <Card key={review.role}>
              <CardContent>
                <Badge variant="outline">{review.label}</Badge>
                <div className="mt-5 flex gap-1 text-amber-400">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 leading-7 text-slate-700">
                  “{review.quote}”
                </blockquote>
                <p className="mt-5 font-semibold">{review.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
