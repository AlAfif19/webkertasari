import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { articles } from "@/data/articles";

export function ArticlesSection() {
  return (
    <section id="artikel" className="section-space section-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="Wawasan"
          title="Artikel Seputar Website dan Bisnis Digital"
          description="Ringkasan singkat untuk membantu usaha lokal memahami website, promosi, analitik, dan AI."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title}>
              <CardContent>
                <Badge variant="outline">{article.category}</Badge>
                <h3 className="mt-5 text-xl font-bold">{article.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {article.summary}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="size-4" />
                    {article.date}
                  </span>
                  <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
                    aria-label={`Baca artikel: ${article.title}`}
                  >
                    Baca artikel
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
