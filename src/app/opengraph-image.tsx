import { ImageResponse } from "next/og";

export const alt = "TaxSimpl Advisors LLP — Chartered Accountants in Kolkata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f9f7f1",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#0a3d2e",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0a3d2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a84c",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            TS
          </div>
          TaxSimpl Advisors LLP
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              color: "#063222",
              fontWeight: 400,
              maxWidth: 900,
            }}
          >
            Chartered Accountants in Kolkata
          </div>
          <div style={{ fontSize: 32, color: "#4a6358" }}>
            GST · ITR · Company Registration · Compliance
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
