import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import type { Article } from "@/types/content";

type ArticlePageProps = {
  article: Article;
  relatedArticles: Article[];
};

export function ArticlePage({
  article,
  relatedArticles,
}: ArticlePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white">
        <div className="site-container flex min-h-18 items-center justify-between gap-4 py-4">
          <Link
            href="/#artikel"
            className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-emerald-700"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Kembali ke artikel
          </Link>
          <Link href="/" className="font-black text-slate-950">
            Web<span className="text-emerald-600">Kertasari</span>
          </Link>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{article.category}</Badge>
              {article.location ? (
                <Badge variant="outline" className="border-white/30 bg-white/10 text-white">
                  <MapPin className="mr-1 size-3" aria-hidden="true" />
                  {article.location}
                </Badge>
              ) : null}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {article.summary}
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <CalendarDays className="size-4" aria-hidden="true" />
              {article.date}
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            <Image
              src={article.image}
              alt={article.imageAlt}
              width={1200}
              height={800}
              priority
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <article className="site-container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-9 text-slate-700">
            {article.introduction}
          </p>

          <blockquote className="my-12 border-l-4 border-emerald-500 bg-emerald-50 px-6 py-5 text-xl font-semibold leading-8 text-emerald-950">
            {article.highlight}
          </blockquote>

          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.points ? (
                  <ul className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-6 text-slate-700">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          className="mt-2 size-2 shrink-0 rounded-full bg-emerald-500"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold">Langkah berikutnya</h2>
            <p className="mt-4 leading-7 text-slate-300">
              {article.conclusion}
            </p>
            <WhatsAppLink
              className="mt-6"
              label="Konsultasikan kebutuhan website"
              message={`Halo WebKertasari, saya membaca artikel "${article.title}" dan ingin berkonsultasi.`}
            />
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="site-container">
          <h2 className="text-3xl font-bold">Artikel terkait</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <Card key={related.slug}>
                <CardContent>
                  <Badge variant="outline">{related.category}</Badge>
                  <h3 className="mt-4 text-xl font-bold">{related.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {related.summary}
                  </p>
                  <Link
                    href={`/artikel/${related.slug}`}
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-700"
                  >
                    Baca artikel
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
