import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, it } from "vitest";
import { ChatbotProvider } from "./chatbot-provider";

function Harness() {
  return (
    <ChatbotProvider>
      <button
        onClick={() =>
          window.dispatchEvent(new Event("webkertasari:open-chatbot"))
        }
      >
        Open
      </button>
    </ChatbotProvider>
  );
}

beforeEach(() => localStorage.clear());

it("opens only after the user requests it", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Open" }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("falls back to menu and WhatsApp for unknown input", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  await user.click(screen.getByRole("button", { name: "Open" }));
  await user.type(screen.getByLabelText("Tulis pertanyaan"), "cuaca hari ini");
  await user.click(screen.getByRole("button", { name: "Kirim" }));

  expect(
    screen.getByText(/belum memahami pertanyaan itu/i),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /whatsapp/i }),
  ).toBeInTheDocument();
});

it("collects a lead and creates an encoded WhatsApp summary", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  await user.click(screen.getByRole("button", { name: "Open" }));
  await user.click(screen.getByRole("button", { name: "Website UMKM" }));
  await user.click(screen.getByRole("button", { name: "Mulai konsultasi" }));

  await user.type(screen.getByLabelText("Nama Anda"), "Dina");
  await user.click(screen.getByRole("button", { name: "Lanjut" }));
  await user.click(
    screen.getByRole("button", { name: "Rp700.000 - Rp1.500.000" }),
  );
  await user.click(screen.getByRole("button", { name: "3-4 minggu" }));
  await user.type(
    screen.getByLabelText("Kebutuhan fitur"),
    "Katalog dan WhatsApp",
  );
  await user.click(screen.getByRole("button", { name: "Lihat ringkasan" }));

  const link = screen.getByRole("link", {
    name: "Kirim Ringkasan ke WhatsApp",
  });
  expect(link).toHaveAttribute(
    "href",
    expect.stringContaining("Nama%3A%20Dina"),
  );
  expect(link).toHaveAttribute(
    "href",
    expect.stringContaining("Katalog%20dan%20WhatsApp"),
  );
});
