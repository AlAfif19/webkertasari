import type { ChatbotSession } from "@/types/chatbot";

const STORAGE_KEY = "webkertasari-chatbot-v1";
const validSteps = new Set([
  "welcome",
  "service",
  "recommendation",
  "name",
  "budget",
  "deadline",
  "features",
  "summary",
]);

function isChatbotSession(value: unknown): value is ChatbotSession {
  if (!value || typeof value !== "object") return false;
  const session = value as Partial<ChatbotSession>;
  if (
    session.version !== 1 ||
    typeof session.step !== "string" ||
    !validSteps.has(session.step) ||
    !session.lead ||
    typeof session.lead !== "object" ||
    !Array.isArray(session.messages)
  ) {
    return false;
  }

  const lead = session.lead as Record<string, unknown>;
  const leadFields = [
    "name",
    "websiteType",
    "packageName",
    "budget",
    "deadline",
    "features",
  ];

  return (
    leadFields.every((field) => typeof lead[field] === "string") &&
    session.messages.every(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof item.id === "string" &&
        (item.role === "bot" || item.role === "user") &&
        typeof item.text === "string",
    )
  );
}

export function loadChatbotSession(): ChatbotSession | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isChatbotSession(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveChatbotSession(session: ChatbotSession): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return true;
  } catch {
    return false;
  }
}

export function clearChatbotSession(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // In-memory state remains usable when browser storage is unavailable.
  }
}
