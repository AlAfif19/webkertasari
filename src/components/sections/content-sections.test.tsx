import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ArticlesSection } from "./articles-section";
import { PortfolioSection } from "./portfolio-section";
import { ReviewsSection } from "./reviews-section";

it("labels every portfolio item as Demo", () => {
  render(<PortfolioSection />);
  expect(screen.getAllByText("Demo")).toHaveLength(5);
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
