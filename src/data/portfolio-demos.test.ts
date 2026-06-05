import { describe, expect, it } from "vitest";
import { getPortfolioDemoBySlug, portfolioDemos } from "./portfolio-demos";

describe("portfolio demo data", () => {
  it("contains five unique and complete demos", () => {
    expect(portfolioDemos).toHaveLength(5);
    expect(new Set(portfolioDemos.map((demo) => demo.slug)).size).toBe(5);

    for (const demo of portfolioDemos) {
      expect(demo.stats.length).toBeGreaterThanOrEqual(3);
      expect(demo.features.length).toBeGreaterThanOrEqual(3);
      expect(demo.showcase.length).toBeGreaterThanOrEqual(3);
      expect(demo.disclaimer).toMatch(/demo|simulasi|fiktif/i);
    }
  });

  it("supports every recommended demo type", () => {
    expect(portfolioDemos.map((demo) => demo.kind)).toEqual([
      "umkm",
      "personal",
      "organization",
      "service",
      "analytics",
    ]);
  });

  it("finds known slugs and rejects unknown slugs", () => {
    expect(getPortfolioDemoBySlug("website-umkm")?.brand).toBe("Rasa Bumi");
    expect(getPortfolioDemoBySlug("tidak-ada")).toBeUndefined();
  });
});
