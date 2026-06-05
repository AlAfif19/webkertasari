import type {
  WeddingGuestbookEntry,
  WeddingRsvp,
} from "@/types/wedding";

const RSVP_KEY = "webkertasari-wedding-rsvp-v1";
const GUESTBOOK_KEY = "webkertasari-wedding-guestbook-v1";

function isValidName(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.trim().length >= 2 &&
    value.trim().length <= 60
  );
}

function normalizeRsvp(value: unknown): WeddingRsvp | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<WeddingRsvp>;

  if (
    !isValidName(candidate.name) ||
    (candidate.attendance !== "hadir" &&
      candidate.attendance !== "tidak-hadir") ||
    !Number.isInteger(candidate.guestCount) ||
    typeof candidate.guestCount !== "number" ||
    candidate.guestCount < 0 ||
    candidate.guestCount > 5
  ) {
    return null;
  }

  return {
    name: candidate.name.trim(),
    attendance: candidate.attendance,
    guestCount:
      candidate.attendance === "tidak-hadir" ? 0 : candidate.guestCount,
  };
}

function normalizeGuestbookEntry(
  value: unknown,
): WeddingGuestbookEntry | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<WeddingGuestbookEntry>;

  if (
    !isValidName(candidate.name) ||
    typeof candidate.message !== "string" ||
    candidate.message.trim().length < 2 ||
    candidate.message.trim().length > 240
  ) {
    return null;
  }

  return {
    name: candidate.name.trim(),
    message: candidate.message.trim(),
  };
}

export function loadRsvp(): WeddingRsvp | null {
  try {
    const raw = window.localStorage.getItem(RSVP_KEY);
    if (!raw) return null;
    return normalizeRsvp(JSON.parse(raw) as unknown);
  } catch {
    return null;
  }
}

export function saveRsvp(value: WeddingRsvp): boolean {
  const normalized = normalizeRsvp(value);
  if (!normalized) return false;

  try {
    window.localStorage.setItem(RSVP_KEY, JSON.stringify(normalized));
    return true;
  } catch {
    return false;
  }
}

export function loadGuestbookEntries(): WeddingGuestbookEntry[] {
  try {
    const raw = window.localStorage.getItem(GUESTBOOK_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map(normalizeGuestbookEntry)
      .filter((entry): entry is WeddingGuestbookEntry => entry !== null)
      .slice(0, 20);
  } catch {
    return [];
  }
}

export function saveGuestbookEntry(value: WeddingGuestbookEntry): boolean {
  const normalized = normalizeGuestbookEntry(value);
  if (!normalized) return false;

  try {
    const entries = [normalized, ...loadGuestbookEntries()].slice(0, 20);
    window.localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(entries));
    return true;
  } catch {
    return false;
  }
}
