import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  clearChatbotSession,
  loadChatbotSession,
  saveChatbotSession,
} from "./storage";

const session = {
  version: 1 as const,
  step: "welcome" as const,
  lead: {
    name: "",
    websiteType: "",
    packageName: "",
    budget: "",
    deadline: "",
    features: "",
  },
  messages: [],
};

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("chatbot storage", () => {
  it("round-trips a valid session", () => {
    expect(saveChatbotSession(session)).toBe(true);
    expect(loadChatbotSession()).toEqual(session);
  });

  it("ignores malformed storage", () => {
    localStorage.setItem("webkertasari-chatbot-v1", "{bad json");
    expect(loadChatbotSession()).toBeNull();
  });

  it("returns false when storage throws", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(() => {
      throw new Error("blocked");
    });
    expect(saveChatbotSession(session)).toBe(false);
  });

  it("clears saved state", () => {
    saveChatbotSession(session);
    clearChatbotSession();
    expect(loadChatbotSession()).toBeNull();
  });
});
