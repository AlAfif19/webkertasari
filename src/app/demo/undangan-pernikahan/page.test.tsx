import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import WeddingDemoPage from "./page";

it("renders a complete clearly labeled wedding invitation demo", () => {
  render(<WeddingDemoPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: /alya & fikri/i }),
  ).toBeInTheDocument();
  expect(screen.getAllByText(/simulasi/i).length).toBeGreaterThan(1);
  expect(
    screen.getByRole("heading", { name: /susunan acara/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /galeri cerita/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /konfirmasi kehadiran/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /buku tamu/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /kembali ke portofolio/i }),
  ).toHaveAttribute("href", "/#portofolio");
});
