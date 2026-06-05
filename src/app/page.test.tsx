import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import HomePage from "./page";

it("renders every approved landing-page section", () => {
  render(<HomePage />);

  expect(
    screen.getByRole("heading", { name: /buat website profesional/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /layanan website webkertasari/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /jenis website yang bisa dibuat/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /pilih paket yang sesuai/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /website lebih cerdas/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /contoh website/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /artikel seputar/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /^review pelanggan$/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /pertanyaan umum/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /siap membuat website/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /area layanan webkertasari/i }),
  ).toBeInTheDocument();
});
