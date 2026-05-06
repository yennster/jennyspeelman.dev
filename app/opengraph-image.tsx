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
          background: "#0a0a0f",
          color: "#f5f5f7",
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
              "radial-gradient(circle, rgba(124,58,237,0.85) 0%, rgba(124,58,237,0) 65%)",
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
              "radial-gradient(circle, rgba(236,72,153,0.75) 0%, rgba(236,72,153,0) 65%)",
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
              "radial-gradient(circle, rgba(6,182,212,0.65) 0%, rgba(6,182,212,0) 65%)",
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
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              fontSize: "24px",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              color: "rgba(255,255,255,0.75)",
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
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "#f5f5f7" }}>Jenny&apos;s apps,&nbsp;</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #e879f9 0%, #f472b6 50%, #67e8f9 100%)",
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
              color: "rgba(245,245,247,0.65)",
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
            color: "rgba(245,245,247,0.5)",
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
