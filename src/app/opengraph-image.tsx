import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "WebKertasari, jasa pembuatan website lokal untuk UMKM dan personal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #071a2e, #123e63)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "64%" }}>
            <div
              style={{
                color: "#67e8f9",
                fontSize: 28,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              Jasa Website Kertasari
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.08,
              }}
            >
              Website profesional untuk usaha lokal Anda
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                color: "#cbd5e1",
                fontSize: 30,
              }}
            >
              WebKertasari · Responsif · SEO Ready · WhatsApp Ready
            </div>
          </div>
          <div
            style={{
              marginLeft: 48,
              width: 330,
              height: 330,
              borderRadius: 48,
              border: "2px solid rgba(255,255,255,.16)",
              background: "rgba(255,255,255,.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 110,
              fontWeight: 900,
              color: "#67e8f9",
            }}
          >
            WK
          </div>
        </div>
      </div>
    ),
    size,
  );
}
