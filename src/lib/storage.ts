import type { ChatbotSession } from "@/types/chatbot";

const STORAGE_KEY = "webkertasari-chatbot-v1";

export function loadChatbotSession(): ChatbotSession | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ChatbotSession;
    return parsed.version === 1 && Array.isArray(parsed.messages) ? parsed : null;
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
