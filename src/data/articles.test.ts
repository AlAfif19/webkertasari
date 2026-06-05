import { describe, expect, it } from "vitest";
import { articles, getArticleBySlug } from "./articles";

describe("article data", () => {
  it("contains eight uniquely addressable complete articles", () => {
    expect(articles).toHaveLength(8);
    expect(new Set(articles.map((article) => article.slug)).size).toBe(8);

    for (const article of articles) {
      expect(article.introduction.length).toBeGreaterThan(80);
      expect(article.sections.length).toBeGreaterThanOrEqual(3);
      expect(
        article.sections.every((section) => section.paragraphs.length > 0),
      ).toBe(true);
    }
  });

  it("includes two articles focused on Kertasari", () => {
    expect(
      articles.filter((article) => article.location === "Kertasari"),
    ).toHaveLength(2);
  });

  it("finds an article by slug and returns undefined for unknown slugs", () => {
    expect(
      getArticleBySlug("kenapa-umkm-lokal-perlu-website")?.category,
    ).toBe("UMKM");
    expect(getArticleBySlug("tidak-ada")).toBeUndefined();
  });
});
