import { ImageResponse } from "next/og";
import { company } from "@/lib/company";

export const runtime = "nodejs";

export const alt = `${company.name} | 熱絶縁工事・保温板金`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontUrl =
    "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75vY0rw-oME.ttf";

  let fontData: ArrayBuffer | null = null;
  try {
    const res = await fetch(fontUrl, { next: { revalidate: 86400 } });
    if (res.ok) {
      fontData = await res.arrayBuffer();
    }
  } catch {
    fontData = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ffffff",
          backgroundImage:
            "linear-gradient(135deg, #0C3D67 0%, #0F4C81 45%, #1B5DA0 100%)",
          fontFamily: "NotoSansJP, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(125,178,222,0.32) 0%, rgba(15,76,129,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 4,
              background: "#7DB2DE",
            }}
          />
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.4em",
              fontWeight: 700,
              color: "#BBD4EC",
              textTransform: "uppercase",
            }}
          >
            KIKUCHI KOGYO
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            株式会社菊地工業
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#BBD4EC",
              letterSpacing: "0.02em",
            }}
          >
            熱絶縁工事・保温板金
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 26,
              fontWeight: 500,
              color: "#E2EEF8",
              letterSpacing: "0.04em",
            }}
          >
            みんなのライフラインを支える。
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 20,
              color: "#BBD4EC",
              letterSpacing: "0.06em",
            }}
          >
            <span>千葉 / 神奈川 / 茨城</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>令和元年創業</span>
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#7DB2DE",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Thermal Insulation
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "NotoSansJP",
              data: fontData,
              style: "normal",
              weight: 700,
            },
          ]
        : undefined,
    },
  );
}
