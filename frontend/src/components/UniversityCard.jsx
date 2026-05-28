import { useState } from "react";

// ── Icon map for plain-string highlights ──────────────────────────
const HIGHLIGHT_ICONS = {
  "nmc":          "✅",
  "approved":     "✅",
  "recognised":   "✅",
  "english":      "🇬🇧",
  "medium":       "🇬🇧",
  "affordable":   "💰",
  "low cost":     "💰",
  "fees":         "💰",
  "indian":       "🍛",
  "food":         "🍛",
  "hostel":       "🏠",
  "modern":       "🏥",
  "hospital":     "🏥",
  "campus":       "🏛️",
  "ranked":       "🏆",
  "top":          "🏆",
  "faculty":      "👨‍🏫",
  "student":      "👨‍🎓",
  "500":          "👨‍🎓",
  "career":       "🚀",
  "support":      "📞",
  "global":       "🌏",
  "established":  "📅",
  "central":      "📍",
  "infrastructure": "🏗️",
};

function getIcon(text = "") {
  const lower = text.toLowerCase();
  for (const [key, icon] of Object.entries(HIGHLIGHT_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return "⭐";
}

// ── Normalize highlights — handles strings, objects, JSON strings ─
function normalizeHighlights(highlights) {
  let arr = [];

  if (Array.isArray(highlights)) {
    arr = highlights;
  } else if (typeof highlights === "string") {
    try {
      const parsed = JSON.parse(highlights);
      arr = Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  } else {
    return [];
  }

  // Convert plain strings → { icon, text } objects
  return arr.map((h) => {
    if (typeof h === "string") return { icon: getIcon(h), text: h };
    if (h && typeof h === "object" && h.text) return h;
    return null;
  }).filter(Boolean);
}

export default function UniversityCard({ university = {}, onOpenEnquiry = () => {} }) {
  const {
    name       = "",
    shortName  = "",
    fee        = "",
    image      = null,
    highlights = [],
    nmcRecognised = true,
  } = university;

  // ── Image error state — also treat null/empty as error ──
  const [imgErr, setImgErr] = useState(!image);
  const safeHighlights = normalizeHighlights(highlights);

  return (
    <article
      style={{
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e5dfd5",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.28s ease, transform 0.28s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 56px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* ── Image / Placeholder ── */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        {!imgErr ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          // ── Gradient placeholder with university initials ──
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #1a2f5e 0%, #CC1B1B 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {/* Initials circle */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              {shortName
                ? shortName.slice(0, 3)
                : name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)
                    .toUpperCase()}
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Vietnam
            </span>
          </div>
        )}

        {/* Gradient overlay on real image */}
        {!imgErr && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Fee badge */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 16,
            zIndex: 2,
            background: "#CC1B1B",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 700,
            padding: "6px 14px",
            borderRadius: "7px",
            letterSpacing: "0.03em",
            boxShadow: "0 2px 10px rgba(204,27,27,0.4)",
          }}
        >
          ₹{fee}/year
        </div>

        {/* NMC badge */}
        {nmcRecognised && (
          <div
            style={{
              position: "absolute",
              bottom: 14,
              right: 16,
              zIndex: 2,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 10px",
              borderRadius: "6px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            NMC Recognised
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div
        style={{
          padding: "22px 22px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Name + Short name */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.28rem",
              fontWeight: 900,
              color: "#CC1B1B",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {name}
          </h2>
          {shortName && (
            <span
              style={{
                background: "#F5C518",
                color: "#0f0b04",
                fontSize: "11px",
                fontWeight: 700,
                padding: "4px 9px",
                borderRadius: "6px",
                letterSpacing: "0.06em",
                flexShrink: 0,
                alignSelf: "flex-start",
                marginTop: "3px",
              }}
            >
              {shortName}
            </span>
          )}
        </div>

        {/* Accent line */}
        <div
          style={{
            width: "36px",
            height: "3px",
            background: "#F5C518",
            borderRadius: "2px",
            margin: "12px 0 16px",
          }}
        />

        {/* Highlights grid */}
        {safeHighlights.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {safeHighlights.map((highlight, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  background: "#faf8f5",
                  border: "1px solid #ede7dc",
                  borderRadius: "9px",
                  padding: "9px 10px",
                  fontSize: "0.83rem",
                  color: "#2d2d2d",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ fontSize: "14px", flexShrink: 0 }}>{highlight.icon}</span>
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>
        ) : (
          // Fallback when no highlights
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {["NMC Approved", "English Medium", "Affordable Fees", "Indian Support"].map((text, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  background: "#faf8f5",
                  border: "1px solid #ede7dc",
                  borderRadius: "9px",
                  padding: "9px 10px",
                  fontSize: "0.83rem",
                  color: "#2d2d2d",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ fontSize: "14px", flexShrink: 0 }}>{getIcon(text)}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #ede7dc", marginBottom: "16px" }} />

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
          <button
            type="button"
            onClick={onOpenEnquiry}
            style={{
              flex: 1,
              background: "#CC1B1B",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.88rem",
              borderRadius: "9px",
              padding: "11px 0",
              textAlign: "center",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Apply Now →
          </button>
          <button
            type="button"
            onClick={onOpenEnquiry}
            style={{
              flex: 1,
              background: "#F5C518",
              color: "#1a2f5e",
              fontWeight: 600,
              fontSize: "0.85rem",
              border: "1.5px solid #c5cde0",
              borderRadius: "9px",
              padding: "10px 0",
              textAlign: "center",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </article>
  );
}
