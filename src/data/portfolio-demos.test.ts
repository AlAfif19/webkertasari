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
      expect(demo.story.paragraphs.length).toBeGreaterThanOrEqual(2);
      expect(demo.process).toHaveLength(3);
      expect(demo.faq.length).toBeGreaterThanOrEqual(3);
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

  it("assigns a fictional portrait to the personal demo", () => {
    const personal = getPortfolioDemoBySlug("website-portofolio");
    expect(personal?.portrait).toEqual({
      src: "/images/demos/nadia-pratama.png",
      alt: "Potret AI Nadia Pratama, profesional fiktif untuk demo portofolio",
    });
  });

  it("uses the enriched dashboard thumbnail", () => {
    expect(getPortfolioDemoBySlug("dashboard-analitik")?.image).toBe(
      "/images/portfolio/analytics-dashboard.svg",
    );
  });

  it("provides a realistic six-product UMKM catalog", () => {
    const umkm = getPortfolioDemoBySlug("website-umkm");

    expect(umkm?.products).toHaveLength(6);
    expect(umkm?.products?.map((product) => product.price)).toContain(
      "Rp48.000",
    );
    expect(umkm?.products?.every((product) => product.stock > 0)).toBe(true);
  });

  it("provides six accessible fictional organization photos", () => {
    const organization = getPortfolioDemoBySlug("website-organisasi");

    expect(organization?.gallery).toHaveLength(6);
    expect(
      organization?.gallery?.every((item) => item.imageAlt.length > 20),
    ).toBe(true);
  });

  it("provides a complete retail POS simulation", () => {
    const pos = getPortfolioDemoBySlug("website-pos-pelayanan");

    expect(pos?.pos?.products.length).toBeGreaterThanOrEqual(6);
    expect(pos?.pos?.cart).toHaveLength(3);
    expect(pos?.pos?.paymentMethods).toEqual([
      "Tunai",
      "QRIS",
      "Kartu debit",
    ]);
    expect(pos?.pos?.transactions).toHaveLength(4);
  });

  it("provides operational analytics details", () => {
    const analytics = getPortfolioDemoBySlug("dashboard-analitik");

    expect(analytics?.analytics?.topProducts).toHaveLength(4);
    expect(analytics?.analytics?.lowStock).toHaveLength(3);
    expect(analytics?.analytics?.transactions).toHaveLength(4);
  });
});
