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
    ["website-pos-pelayanan", "Rasa Bumi POS", "Operasional Toko Hari Ini"],
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
    expect(screen.getAllByText("Rp18,4 jt").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Jan").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Jun").length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByRole("heading", { name: /^tren pendapatan$/i }),
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

  it("renders a six-product UMKM catalog with direct order links", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "website-umkm" }),
    });
    render(page);

    expect(
      screen.getByRole("heading", { name: /katalog rasa bumi/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Kopi Arabika Kertasari")).toBeInTheDocument();
    expect(screen.getByText("Rp48.000")).toBeInTheDocument();

    const orderLinks = screen.getAllByRole("link", {
      name: /pesan .* via whatsapp/i,
    });
    expect(orderLinks).toHaveLength(6);
    expect(orderLinks[0]).toHaveAttribute(
      "href",
      expect.stringContaining("Kopi%20Arabika%20Kertasari"),
    );
  });

  it("renders six fictional organization activity photos", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "website-organisasi" }),
    });
    render(page);

    expect(
      screen.getByRole("heading", { name: /dokumentasi kegiatan/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("img", { name: /kegiatan fiktif/i }),
    ).toHaveLength(6);
    expect(screen.getByText("Pelatihan Konten Digital")).toBeInTheDocument();
  });

  it("renders a complete retail POS interface", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "website-pos-pelayanan" }),
    });
    render(page);

    expect(
      screen.getByRole("heading", { name: /kasir rasa bumi/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/cari produk atau sku/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Keranjang Saat Ini")).toBeInTheDocument();
    expect(screen.getAllByText("Rp116.000").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("QRIS").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", { name: /transaksi terbaru/i }),
    ).toBeInTheDocument();
  });

  it("renders a complete operational analytics dashboard", async () => {
    const page = await PortfolioDemoRoute({
      params: Promise.resolve({ slug: "dashboard-analitik" }),
    });
    render(page);

    expect(
      screen.getByRole("navigation", { name: /menu dashboard/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /produk terlaris/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /stok perlu perhatian/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /transaksi terakhir/i }),
    ).toBeInTheDocument();
  });
});
