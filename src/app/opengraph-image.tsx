import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "TaxSimpl Advisors LLP — Chartered Accountants in Kolkata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const brand = {
  primary: "#2D6DA3",
  primaryDark: "#1B4466",
  accent: "#5D9BD3",
  light: "#95C1E6",
  background: "#F7F8F9",
  muted: "#5A7289",
} as const;

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brand.background,
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={320}
            height={80}
            style={{ objectFit: "contain", objectPosition: "left center" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              color: brand.primaryDark,
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            Chartered Accountants in Kolkata
          </div>
          <div style={{ fontSize: 30, color: brand.muted, maxWidth: 820 }}>
            GST · Income Tax · Company Registration · Compliance · Virtual CFO
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: brand.primary,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: brand.accent,
              }}
            />
            Trusted by 500+ businesses across India
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
