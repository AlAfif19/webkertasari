import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  loadGuestbookEntries,
  loadRsvp,
  saveGuestbookEntry,
  saveRsvp,
} from "./wedding-storage";

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("wedding demo storage", () => {
  it("round-trips a valid RSVP", () => {
    const rsvp = {
      name: "Dina",
      attendance: "hadir" as const,
      guestCount: 2,
    };
    expect(saveRsvp(rsvp)).toBe(true);
    expect(loadRsvp()).toEqual(rsvp);
  });

  it("rejects malformed RSVP storage", () => {
    localStorage.setItem(
      "webkertasari-wedding-rsvp-v1",
      JSON.stringify({ name: "", attendance: "mungkin", guestCount: 99 }),
    );
    expect(loadRsvp()).toBeNull();
  });

  it("appends and loads valid guestbook entries", () => {
    expect(
      saveGuestbookEntry({ name: "Rani", message: "Selamat!" }),
    ).toBe(true);
    expect(loadGuestbookEntries()).toEqual([
      { name: "Rani", message: "Selamat!" },
    ]);
  });

  it("returns false when browser storage is blocked", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => {
      throw new Error("blocked");
    });
    expect(
      saveRsvp({ name: "Dina", attendance: "tidak-hadir", guestCount: 0 }),
    ).toBe(false);
  });
});
