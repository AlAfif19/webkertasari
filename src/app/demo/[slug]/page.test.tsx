import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PortfolioDemoRoute, { generateStaticParams } from "./page";

describe("portfolio demo route", () => {
  it("generates five static demo routes", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "website-umkm" },
      { slug: "website-portofolio" },
      { slug: "website-organisasi" },
      { slug: "website-pos-pelayanan" },
      { slug: "dashboard-analitik" },
    ]);
  });

  it.each([
    ["website-umkm", "Rasa Bumi", "Pilihan Produk"],
    ["website-portofolio", "Nadia Pratama", "Karya Pilihan"],
    ["website-organisasi", "Kertasari Muda", "Agenda Terdekat"],
    ["website-pos-pelayanan", "Pos Layanan Warga", "Layanan Populer"],
    ["dashboard-analitik", "Lentera Analytics", "Aktivitas dan Insight"],
  ])("renders %s as a complete demo", async (slug, brand, sectionTitle) => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug }),
    });
    render(page);

    expect(
      screen.getByRole("heading", { level: 1, name: brand }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: sectionTitle }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/demo|simulasi|fiktif/i).length)
      .toBeGreaterThan(1);
    expect(screen.getByRole("link", { name: /kembali ke portofolio/i }))
      .toHaveAttribute("href", "/#portofolio");
  });

  it("renders an analytics-specific performance overview", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "dashboard-analitik" }),
    });
    render(page);

    expect(
      screen.getByRole("heading", { name: /tren pesanan simulasi/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Rp18,4 jt")).toHaveLength(2);
    expect(screen.getAllByText("Jan")).toHaveLength(2);
    expect(screen.getAllByText("Jun")).toHaveLength(2);
  });
});
