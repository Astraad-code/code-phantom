import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Éclairage architectural premium";
  const subtitle = searchParams.get("subtitle") ?? "Bureau d'études & conception lumineuse";
  const label = searchParams.get("label") ?? "Code Phantom";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grain overlay effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(200,169,110,0.6), transparent)",
          }}
        />

        {/* Gold dot logo */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "1px solid rgba(200,169,110,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c8a96e",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#f5f5f0",
            }}
          >
            Code Phantom
          </span>
        </div>

        {/* Label badge */}
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c8a96e",
              border: "1px solid rgba(200,169,110,0.3)",
              padding: "4px 10px",
            }}
          >
            {label}
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: title.length > 40 ? "42px" : "52px",
            fontWeight: 300,
            color: "#f5f5f0",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
            maxWidth: "80%",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "16px",
            color: "#555555",
            margin: 0,
            letterSpacing: "0.05em",
          }}
        >
          {subtitle}
        </p>

        {/* Bottom right decoration */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#222222",
          }}
        >
          code-phantom.fr
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
