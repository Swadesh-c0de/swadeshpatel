import { ImageResponse } from "next/og";

export const alt = "Swadesh Patel | Full-Stack Developer & Systems Enthusiast";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          border: "12px solid #18181b",
          padding: "40px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#ffffff",
              marginBottom: 20,
              lineHeight: 1,
            }}
          >
            SWADESH PATEL
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#a1a1aa",
              letterSpacing: "-0.02em",
            }}
          >
            Full-Stack Engineer &amp; Systems Enthusiast
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              gap: 12,
            }}
          >
            <span
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                color: "#d4d4d8",
                fontSize: 16,
              }}
            >
              Next.js
            </span>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                color: "#d4d4d8",
                fontSize: 16,
              }}
            >
              Go
            </span>
            <span
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                color: "#d4d4d8",
                fontSize: 16,
              }}
            >
              Arch Linux
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
