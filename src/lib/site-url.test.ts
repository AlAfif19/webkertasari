import { describe, expect, it } from "vitest";
import { getSiteUrl } from "./site-url";

describe("getSiteUrl", () => {
  it("uses a valid absolute production URL", () => {
    expect(getSiteUrl("https://webkertasari.vercel.app").href).toBe(
      "https://webkertasari.vercel.app/",
    );
  });

  it("falls back when the environment value includes the key name", () => {
    expect(
      getSiteUrl(
        "NEXT_PUBLIC_SITE_URL=https://webkertasari.vercel.app",
      ).href,
    ).toBe("http://localhost:3000/");
  });

  it("falls back when the environment value is not an absolute URL", () => {
    expect(getSiteUrl("webkertasari.vercel.app").href).toBe(
      "http://localhost:3000/",
    );
  });
});
