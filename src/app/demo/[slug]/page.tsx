import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDemoPage } from "@/components/demos/portfolio-demo-page";
import {
  getPortfolioDemoBySlug,
  portfolioDemos,
} from "@/data/portfolio-demos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioDemos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const demo = getPortfolioDemoBySlug((await params).slug);
  if (!demo) return {};

  return {
    title: `${demo.brand} - Demo ${demo.eyebrow} | WebKertasari`,
    description: demo.description,
  };
}

export default async function PortfolioDemoRoute({ params }: Props) {
  const demo = getPortfolioDemoBySlug((await params).slug);
  if (!demo) notFound();

  return <PortfolioDemoPage demo={demo} />;
}
