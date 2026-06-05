import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ArticleRoute, { generateStaticParams } from "./page";

describe("article route", () => {
  it("generates one static route for every article", async () => {
    const params = await generateStaticParams();
    expect(params).toHaveLength(8);
    expect(params).toContainEqual({
      slug: "peluang-website-untuk-usaha-dan-wisata-lokal-kertasari",
    });
  });

  it("renders complete editorial content for a known article", async () => {
    const page = await ArticleRoute({
      params: Promise.resolve({
        slug: "kenapa-umkm-lokal-perlu-website",
      }),
    });
    render(page);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Kenapa UMKM Lokal Perlu Website?",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/membangun kepercayaan/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /kembali ke artikel/i }))
      .toHaveAttribute("href", "/#artikel");
  });
});
