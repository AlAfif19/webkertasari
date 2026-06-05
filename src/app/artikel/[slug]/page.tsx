import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/articles/article-page";
import { articles, getArticleBySlug } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug((await params).slug);
  if (!article) return {};

  return {
    title: `${article.title} | WebKertasari`,
    description: article.summary,
  };
}

export default async function ArticleRoute({ params }: Props) {
  const article = getArticleBySlug((await params).slug);
  if (!article) notFound();

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return <ArticlePage article={article} relatedArticles={relatedArticles} />;
}
