import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Navbar } from "./navbar";

it("renders the brand, anchors, and WhatsApp CTA", () => {
  render(<Navbar />);

  expect(
    screen.getByRole("link", { name: "WebKertasari" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Layanan" })).toHaveAttribute(
    "href",
    "#layanan",
  );
  expect(
    screen.getByRole("link", { name: "Konsultasi Gratis" }),
  ).toHaveAttribute("href", expect.stringContaining("wa.me/6282164410775"));
});
