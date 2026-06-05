import { describe, expect, it } from "vitest";
import { matchIntent, recommendPackage } from "./chatbot";

describe("matchIntent", () => {
  it.each([
    ["Berapa harga website?", "price"],
    ["butuh dashboard laporan", "analytics"],
    ["mau machine learning untuk prediksi", "ai"],
    ["apakah termasuk domain dan hosting?", "hosting"],
    ["saya ingin website untuk komunitas", "organization"],
  ])("maps %s to %s", (input, expected) => {
    expect(matchIntent(input)).toBe(expected);
  });

  it("returns unknown for unrelated input", () => {
    expect(matchIntent("cuaca hari ini")).toBe("unknown");
  });
});

describe("recommendPackage", () => {
  it("recommends Professional for an organization site", () => {
    expect(recommendPackage("organization")).toBe("Profesional");
  });

  it("keeps analytics and AI as premium offers", () => {
    expect(recommendPackage("analytics")).toBe("Premium Analitik");
    expect(recommendPackage("ai")).toBe("AI/ML Custom");
  });
});
