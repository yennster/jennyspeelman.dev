import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { accentStops, apps, monogram } from "@/lib/apps";

export const alt = "Jenny's apps, built with AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#44192f";
const muted = "#8d6075";
const rose = "#cf5b8b";
const check = "rgba(207, 91, 139, 0.06)";

function starburst() {
  const points = Array.from({ length: 28 }, (_, i) => {
    const r = i % 2 === 0 ? 50 : 44;
    const a = (Math.PI * 2 * i) / 28;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd3e6"/><stop offset="0.35" stop-color="#e9dcff"/><stop offset="0.65" stop-color="#d4f0fd"/><stop offset="1" stop-color="#ffe1ee"/></linearGradient></defs><polygon points="${points}" fill="url(#f)" stroke="#fff" stroke-width="1.5"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export default async function OpengraphImage() {
  const assets = join(process.cwd(), "assets");
  const [frauncesRegular, frauncesItalic, geist] = await Promise.all([
    readFile(join(assets, "Fraunces-Regular.woff")),
    readFile(join(assets, "Fraunces-Italic.woff")),
    readFile(join(assets, "Geist-Regular.woff")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        backgroundColor: "#fbeef3",
        backgroundImage: `linear-gradient(90deg, ${check} 50%, transparent 50%), linear-gradient(${check} 50%, transparent 50%)`,
        backgroundSize: "36px 36px",
        color: ink,
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 116,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          Jenny&apos;s apps,
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontStyle: "italic",
            fontSize: 116,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: rose,
          }}
        >
          built with AI.
        </div>
        <div
          style={{ display: "flex", marginTop: 32, fontSize: 30, color: muted }}
        >
          A playground for the things I prompt into existence.
        </div>
      </div>

      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: 310,
            padding: 22,
            gap: 18,
            borderRadius: 44,
            background: "rgba(255, 255, 255, 0.6)",
            border: "2px solid #ffffff",
            boxShadow: "0 30px 60px -30px rgba(68, 25, 47, 0.45)",
          }}
        >
          {apps.slice(0, 9).map((app) => {
            const stops = accentStops(app);
            return (
              <div
                key={app.slug}
                style={{
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 74,
                  height: 74,
                  borderRadius: 17,
                  overflow: "hidden",
                  backgroundImage: `linear-gradient(135deg, ${stops.join(", ")})`,
                  boxShadow: "0 8px 16px -8px rgba(68, 25, 47, 0.5)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -36,
                    left: -8,
                    width: 90,
                    height: 74,
                    borderRadius: 40,
                    backgroundImage:
                      "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.12))",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    fontFamily: "Fraunces",
                    fontSize: 38,
                    color: "#ffffff",
                  }}
                >
                  {monogram(app)}
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            position: "absolute",
            top: -52,
            right: -48,
            width: 116,
            height: 116,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(12deg)",
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src={starburst()}
            width={116}
            height={116}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Fraunces",
                fontSize: 40,
                lineHeight: 1,
              }}
            >
              {apps.length}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontSize: 16,
                color: rose,
              }}
            >
              apps
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Fraunces",
          data: frauncesItalic,
          style: "italic",
          weight: 400,
        },
        { name: "Geist", data: geist, style: "normal", weight: 400 },
      ],
    },
  );
}
