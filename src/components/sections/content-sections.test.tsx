import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ArticlesSection } from "./articles-section";
import { PortfolioSection } from "./portfolio-section";
import { ReviewsSection } from "./reviews-section";

it("labels and links all six portfolio demos", () => {
  render(<PortfolioSection />);

  expect(screen.getAllByText("Demo")).toHaveLength(6);
  const links = screen.getAllByRole("link", { name: /lihat demo/i });
  expect(links).toHaveLength(6);
  expect(new Set(links.map((link) => link.getAttribute("href"))).size).toBe(6);
  expect(screen.getByRole("link", { name: /lihat demo website umkm/i }))
    .toHaveAttribute("href", "/demo/website-umkm");
  expect(screen.getByRole("link", { name: /lihat demo dashboard analitik/i }))
    .toHaveAttribute("href", "/demo/dashboard-analitik");
  expect(
    screen.getByAltText("Mockup demo Dashboard Analitik"),
  ).toHaveAttribute(
    "src",
    expect.stringContaining("analytics-dashboard.svg"),
  );
});

it("labels every review as Simulasi", () => {
  render(<ReviewsSection />);
  expect(screen.getAllByText("Simulasi")).toHaveLength(4);
});

it("links all eight article cards to their detail pages", () => {
  render(<ArticlesSection />);

  const links = screen.getAllByRole("link", { name: /baca artikel/i });
  expect(links).toHaveLength(8);
  expect(links[0]).toHaveAttribute(
    "href",
    "/artikel/kenapa-umkm-lokal-perlu-website",
  );
  expect(
    screen.getByText("Peluang Website untuk Usaha dan Wisata Lokal Kertasari"),
  ).toBeInTheDocument();
});
