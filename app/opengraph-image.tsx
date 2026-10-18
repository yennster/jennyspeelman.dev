import { ImageResponse } from "next/og";

export const alt = "Jenny's apps, built with AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#fff3f8",
          color: "#3b0a2a",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(255,179,214,0.95) 0%, rgba(255,179,214,0) 65%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "100px",
            right: "-220px",
            width: "640px",
            height: "640px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(226,207,255,0.9) 0%, rgba(226,207,255,0) 65%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-260px",
            left: "30%",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(255,214,234,0.95) 0%, rgba(255,214,234,0) 65%)",
            display: "flex",
          }}
        />

        {/* top: domain pill */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "3px solid #f7b6d4",
              background: "#ffffff",
              fontSize: "24px",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              color: "#e01e84",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                background: "#34d399",
                display: "flex",
              }}
            />
            *.jennyspeelman.dev
          </div>
        </div>

        {/* middle: headline + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "112px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "#e01e84" }}>Jenny&apos;s apps,&nbsp;</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ff4fa3 0%, #c4126c 50%, #a855f7 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              built with AI.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "38px",
              color: "#8a4a6e",
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            A playground for the things I prompt into existence.
          </div>
        </div>

        {/* bottom: byline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            color: "#e01e84",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <div style={{ display: "flex" }}>jennyspeelman.dev</div>
          <div style={{ display: "flex" }}>by Jenny Speelman</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
