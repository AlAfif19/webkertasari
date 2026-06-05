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

it("does not pretend article cards have detail pages", () => {
  render(<ArticlesSection />);
  expect(
    screen.queryByRole("link", { name: /baca selengkapnya/i }),
  ).not.toBeInTheDocument();
  expect(screen.getAllByText("Ringkasan Artikel")).toHaveLength(6);
});
