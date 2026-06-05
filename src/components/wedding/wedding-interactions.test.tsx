import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { WeddingGuestbook } from "./wedding-guestbook";
import { WeddingRsvp } from "./wedding-rsvp";

beforeEach(() => localStorage.clear());

describe("wedding RSVP", () => {
  it("validates and saves an attendance response", async () => {
    const user = userEvent.setup();
    render(<WeddingRsvp />);

    await user.click(
      screen.getByRole("button", { name: /simpan konfirmasi/i }),
    );
    expect(screen.getByRole("status")).toHaveTextContent(/isi nama/i);

    await user.type(screen.getByLabelText(/nama tamu/i), "Dina");
    await user.selectOptions(screen.getByLabelText(/kehadiran/i), "hadir");
    await user.selectOptions(screen.getByLabelText(/jumlah tamu/i), "2");
    await user.click(
      screen.getByRole("button", { name: /simpan konfirmasi/i }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      /tersimpan di browser/i,
    );
  });
});

describe("wedding guestbook", () => {
  it("saves and displays a guestbook message", async () => {
    const user = userEvent.setup();
    render(<WeddingGuestbook />);

    await user.type(screen.getByLabelText(/nama pengirim/i), "Rani");
    await user.type(
      screen.getByLabelText(/pesan dan doa/i),
      "Selamat berbahagia",
    );
    await user.click(screen.getByRole("button", { name: /simpan ucapan/i }));

    expect(screen.getByText("Selamat berbahagia")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      /tersimpan di browser/i,
    );
  });
});
