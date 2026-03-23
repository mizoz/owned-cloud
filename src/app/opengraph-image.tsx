import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top right, rgba(108,248,187,0.22), transparent 35%), linear-gradient(180deg, #0f172a, #020617)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: 1, color: "#6cf8bb" }}>Owned Cloud</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "86%" }}>
          <div style={{ fontSize: 70, lineHeight: 1.05, fontWeight: 800 }}>
            Trustworthy Automation and Private Cloud Systems
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#cbd5e1" }}>
            Calgary-based architecture for teams that need less manual work and stronger data control.
          </div>
        </div>
        <div style={{ fontSize: 24, fontWeight: 600, color: "#e2e8f0" }}>owned-cloud.com</div>
      </div>
    ),
    size
  );
}
