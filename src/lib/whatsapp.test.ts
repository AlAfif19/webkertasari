import { describe, expect, it } from "vitest";
import { buildConsultationMessage, buildWhatsAppUrl } from "./whatsapp";

describe("buildWhatsAppUrl", () => {
  it("encodes the message and uses the international number", () => {
    const url = buildWhatsAppUrl("Halo WebKertasari");

    expect(url).toBe(
      "https://wa.me/6282164410775?text=Halo%20WebKertasari",
    );
  });
});

describe("buildConsultationMessage", () => {
  it("includes every collected lead field", () => {
    const message = buildConsultationMessage({
      name: "Dina",
      websiteType: "Website UMKM",
      packageName: "Profesional",
      budget: "Rp700.000 - Rp1.500.000",
      deadline: "1 bulan",
      features: "Katalog dan WhatsApp",
    });

    expect(message).toContain("Nama: Dina");
    expect(message).toContain("Jenis website: Website UMKM");
    expect(message).toContain("Paket yang diminati: Profesional");
    expect(message).toContain("Budget: Rp700.000 - Rp1.500.000");
    expect(message).toContain("Target selesai: 1 bulan");
    expect(message).toContain("Kebutuhan fitur: Katalog dan WhatsApp");
  });
});
