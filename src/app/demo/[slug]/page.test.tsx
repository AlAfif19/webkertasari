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
    expect(screen.getAllByText("Jan").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Jun").length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByRole("heading", { name: /tren pendapatan/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /pesanan per kanal/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /aktivitas terbaru/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/diagram donat kategori pesanan/i),
    ).toBeInTheDocument();
  });

  it("renders a fictional person photo in the personal portfolio", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "website-portofolio" }),
    });
    render(page);

    expect(
      screen.getByAltText(
        "Potret AI Nadia Pratama, profesional fiktif untuk demo portofolio",
      ),
    ).toHaveAttribute(
      "src",
      expect.stringContaining("nadia-pratama.png"),
    );
  });

  it("renders story, process, and FAQ content for a public demo", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "website-umkm" }),
    });
    render(page);

    expect(
      screen.getByRole("heading", {
        name: "Dari bahan lokal menuju etalase digital.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /cara kerjanya/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /pertanyaan umum/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Pilih produk")).toBeInTheDocument();
  });
});
