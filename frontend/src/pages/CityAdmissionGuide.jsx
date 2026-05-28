import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import statesData from "../data/statesData";
import citiesRegistry from "../data/citiesData";
import phanBanner from "../assets/phan-banner.webp";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const COLORS = {
  majorBg: "#F5F5F5",
  heading: "#333333",
  textMain: "#808080",
  accent: "#F5A623",
  white: "#FFFFFF",
  border: "#E0E0E0",
  smoked: "#E8E8E8",
  muted: "#A0A0A0",
  whatsapp: "#25D366"
};

const WaSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function SectionTitle({ tag, title, highlight, sub }) {
  return (
    <div className="text-center mb-12">
      {tag && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3" style={{ background: COLORS.white, color: COLORS.textMain, border: `1px solid ${COLORS.border}` }}>
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: COLORS.heading }}>
        {title} {highlight && <span style={{ color: COLORS.accent }}>{highlight}</span>}
      </h2>
      {sub && <p className="text-base max-w-2xl mx-auto mt-3 leading-relaxed" style={{ color: COLORS.textMain }}>{sub}</p>}
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl mb-3 overflow-hidden" style={{ background: COLORS.white, border: open ? `1px solid ${COLORS.accent}` : `1px solid ${COLORS.border}` }}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center px-5 py-4 text-left" style={{ background: open ? `${COLORS.accent}0A` : COLORS.white }}>
        <span className="font-semibold text-base" style={{ color: open ? COLORS.accent : COLORS.heading }}>{q}</span>
        <span className="w-7 h-7 rounded-full flex items-center justify-center text-base font-bold" style={open ? { background: COLORS.accent, color: COLORS.white } : { background: COLORS.majorBg, color: COLORS.textMain }}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-4 pt-2 text-sm leading-relaxed" style={{ background: COLORS.majorBg, color: COLORS.textMain, borderTop: `1px solid ${COLORS.border}` }}>{a}</div>}
    </div>
  );
}

function UniImage({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: COLORS.accent }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
        <span className="text-xs text-center px-2 text-white/80">{name}</span>
      </div>
    );
  }
  return <img src={src} alt={name} onError={() => setFailed(true)} className="w-full h-full object-cover" />;
}

function UniversityCard({ u, onApply }) {
  const viewLink = u.slug ? (u.slug.startsWith("/") ? u.slug : `/universities/${u.slug}`) : "#";
  return (
    <div className="rounded-xl overflow-hidden transition-all duration-200" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
      onMouseEnter={(e) => { e.currentTarget.style.border = `1px solid ${COLORS.accent}`; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.border = `1px solid ${COLORS.border}`; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
      <div className="h-44 relative overflow-hidden" style={{ background: COLORS.accent }}>
        <UniImage src={u.image} name={u.name} />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold" style={{ background: COLORS.white, color: COLORS.accent }}>NMC Approved</span>
        {u.location && <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-medium" style={{ background: "rgba(0,0,0,0.6)", color: COLORS.white }}>📍 {u.location}</span>}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-base leading-tight mb-2" style={{ color: COLORS.heading }}>{u.name}</h3>
        <div className="rounded-lg px-3 py-2 mb-3 flex items-baseline gap-2" style={{ background: COLORS.majorBg }}>
          <span className="font-bold text-lg" style={{ color: COLORS.accent }}>{u.fee}</span>
          <span className="text-xs" style={{ color: COLORS.textMain }}>Total Package</span>
        </div>
        <div className="flex gap-2">
          <Link to={viewLink} className="flex-1 text-center py-2 rounded-lg font-medium text-sm" style={{ border: `1px solid ${COLORS.border}`, color: COLORS.textMain }}>View Details</Link>
          <button onClick={onApply} className="flex-1 py-2 rounded-lg font-medium text-sm text-white" style={{ background: COLORS.accent }}>Apply Now →</button>
        </div>
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden animate-pulse" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}>
      <div className="h-44" style={{ background: COLORS.majorBg }} />
      <div className="p-4 space-y-3">
        <div className="h-4 rounded w-3/4" style={{ background: COLORS.majorBg }} />
        <div className="h-10 rounded" style={{ background: COLORS.majorBg }} />
        <div className="flex gap-2"><div className="flex-1 h-9 rounded" style={{ background: COLORS.border }} /><div className="flex-1 h-9 rounded" style={{ background: `${COLORS.accent}33` }} /></div>
      </div>
    </div>
  );
}

// Replace state name with city name in a string
function replaceName(text, stateName, cityName) {
  if (!text || !stateName || !cityName) return text;
  return text
    .replace(new RegExp(stateName, "g"), cityName)
    .replace(new RegExp(stateName.toLowerCase(), "g"), cityName.toLowerCase());
}

export default function CityAdmissionGuide() {
  const { citySlug } = useParams();

  // Look up city metadata
  const cityMeta = citiesRegistry[citySlug];

  // Get parent state data
  const stateData = cityMeta ? statesData[cityMeta.stateSlug] : null;

  const [enquireOpen, setEnquireOpen] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [universitiesLoading, setUnisLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/top-universities/public`)
      .then(r => r.json())
      .then(data => { setUniversities(Array.isArray(data) ? data : []); setUnisLoading(false); })
      .catch(() => { setUniversities([]); setUnisLoading(false); });
  }, []);

  useEffect(() => {
    if (!stateData) return;
    fetch(`${BASE_URL}/api/reviews?state=${encodeURIComponent(stateData.name)}`)
      .then(r => r.json())
      .then(data => { setReviews(Array.isArray(data) ? data : []); setReviewsLoading(false); })
      .catch(() => { setReviews([]); setReviewsLoading(false); });
  }, [stateData?.name]);

  // City not found
  if (!cityMeta || !stateData) {
    return (
      <div className="font-sans">
        <Header />
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 p-8" style={{ background: COLORS.majorBg }}>
          <div className="text-5xl">🏙️</div>
          <h1 className="text-2xl font-bold" style={{ color: COLORS.heading }}>City Not Found</h1>
          <p style={{ color: COLORS.textMain }}>We don't have a guide for <strong>{citySlug}</strong> yet.</p>
          <Link to="/" className="px-5 py-2 rounded-lg text-white text-sm" style={{ background: COLORS.accent }}>← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Build city-specific data by overriding city name in state data
  const cn = cityMeta.cityName;
  const sn = stateData.name;
  const d = stateData;

  const waHref = `https://wa.me/91${d.counselorPhone.replace(/\D/g, "").slice(-10)}?text=Hi%2C%20I%20am%20from%20${encodeURIComponent(cn)}%20and%20interested%20in%20MBBS%20in%20Vietnam%202026.`;

  // Override travel cards with city-specific airport
  const cityTravelCards = [
    { icon: "✈️", title: "Flight Duration", value: cityMeta.flightTime, sub: `From ${cn} Airport` },
    { icon: "🛫", title: "Nearest Airport", value: cityMeta.nearbyAirport, sub: "Direct or 1-stop flights" },
    { icon: "🏙️", title: "Destinations", value: "Can Tho / HCM / Dak Lak", sub: "Vietnam university cities" },
    { icon: "💵", title: "Visa Type", value: "Study Visa – 6 Years", sub: "Stamped from New Delhi Embassy" },
  ];

  return (
    <div className="font-sans" style={{ background: COLORS.smoked, color: COLORS.textMain }}>
      <Header />

      {/* Breadcrumb */}
      <div style={{ background: COLORS.heading, padding: "10px 24px" }}>
        <p className="text-sm max-w-7xl mx-auto text-white/60">
          <Link to="/" className="hover:text-white">Home</Link>
          {" / "}
          <Link to="/mbbsInVietnam" className="hover:text-white">MBBS in Vietnam</Link>
          {" / "}
          <Link to={`/admission-guides/${cityMeta.stateSlug}`} className="hover:text-white">{sn}</Link>
          {" / "}
          <span style={{ color: COLORS.accent }}>{cn} Students</span>
        </p>
      </div>

      {/* Hero — SMOKE */}
      <section className="py-12 px-6" style={{ background: COLORS.smoked, borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3" style={{ background: COLORS.white, color: COLORS.accent }}>
              {cn} Students — 2026 Intake Open
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: COLORS.heading }}>
              Study MBBS in Vietnam<br />from <span style={{ color: COLORS.accent }}>{cn}</span>
            </h1>
            <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: COLORS.textMain }}>
              {replaceName(d.heroSubtitle, sn, cn)}
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setEnquireOpen(true)} className="px-6 py-2.5 rounded-lg font-semibold text-sm text-white" style={{ background: COLORS.accent }}>📞 Enquire Now</button>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg font-medium text-sm" style={{ border: `1px solid ${COLORS.border}`, color: COLORS.textMain }}>
                <WaSvg /> WhatsApp Chat
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg" style={{ border: `1px solid ${COLORS.border}` }}>
              <img src={phanBanner} alt="Vietnam MBBS" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t" style={{ borderColor: COLORS.border }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {d.stats.map((s, i) => (
              <div key={i}>
                <p className="text-sm uppercase tracking-wide" style={{ color: COLORS.textMain }}>{s.label}</p>
                <p className="font-bold text-2xl mt-1" style={{ color: COLORS.heading }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vietnam — WHITE */}
      <section className="py-16 px-6" style={{ background: COLORS.white }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Why Vietnam?"
            title={`Why ${cn} Students Choose`}
            highlight="Vietnam for MBBS"
            sub={`${d.neetCount}+ NEET takers from ${sn} choose us every year.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.whyPoints.map((p, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}>
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-base mb-1" style={{ color: COLORS.heading }}>{replaceName(p.title, sn, cn)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.textMain }}>{replaceName(p.desc, sn, cn)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 rounded-xl overflow-hidden" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}>
            {d.highlightStats.map((s, i) => (
              <div key={i} className="p-4 text-center" style={{ borderLeft: i > 0 ? `1px solid ${COLORS.border}` : "none" }}>
                <p className="font-bold text-2xl" style={{ color: COLORS.accent }}>{s.val}</p>
                <p className="text-sm" style={{ color: COLORS.textMain }}>{replaceName(s.label, sn, cn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities — SMOKE */}
      <section className="py-16 px-6" style={{ background: COLORS.smoked }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Top Universities"
            title="Top Medical Universities"
            highlight="in Vietnam"
            sub={`NMC Approved universities preferred by students from ${cn}.`}
          />
          {universitiesLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array(4).fill().map((_, i) => <CardSkeleton key={i} />)}
            </div>
          )}
          {!universitiesLoading && universities.length === 0 && (
            <div className="text-center py-12"><div className="text-5xl mb-3">🎓</div><p className="text-sm">University listings coming soon. Contact us for details.</p></div>
          )}
          {!universitiesLoading && universities.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {universities.map((u, i) => <UniversityCard key={u.id || i} u={u} onApply={() => setEnquireOpen(true)} />)}
            </div>
          )}
          <p className="text-center text-sm mt-6">
            Students from {cn} have successfully joined these universities.{" "}
            <button onClick={() => setEnquireOpen(true)} className="font-medium hover:underline" style={{ color: COLORS.accent }}>Talk to counselor</button>
          </p>
        </div>
      </section>

      {/* Cost Comparison — WHITE */}
      <section className="py-16 px-6" style={{ background: COLORS.white }}>
        <div className="w-full">
          <SectionTitle
            tag="Cost Comparison"
            title={`How Much Can ${cn} Students`}
            highlight="Save?"
            sub="Compare total cost of MBBS in Vietnam vs private Indian colleges."
          />
          <div className="rounded-xl overflow-hidden" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}>
            <div className="grid grid-cols-3 text-center text-white text-sm font-semibold" style={{ background: COLORS.heading }}>
              <div className="py-3 px-2">Expense Category</div>
              <div className="py-3 px-2">MBBS in Vietnam</div>
              <div className="py-3 px-2">Private India</div>
            </div>
            {d.costRows.map(([cat, vn, ind], i) => (
              <div key={i} className="grid grid-cols-3 text-center text-sm" style={{ borderTop: `1px solid ${COLORS.border}`, background: i % 2 === 0 ? COLORS.white : COLORS.majorBg }}>
                <div className="py-2.5 px-2" style={{ color: COLORS.textMain }}>{cat}</div>
                <div className="py-2.5 px-2 font-medium" style={{ color: COLORS.accent }}>{vn}</div>
                <div className="py-2.5 px-2" style={{ color: COLORS.muted }}>{ind}</div>
              </div>
            ))}
            <div className="grid grid-cols-3 text-center font-bold" style={{ borderTop: `2px solid ${COLORS.accent}`, background: COLORS.majorBg }}>
              <div className="py-2.5 px-2 text-sm" style={{ color: COLORS.heading }}>Total Cost (6 Years)</div>
              <div className="py-2.5 px-2 text-base" style={{ color: COLORS.accent }}>{d.totalVietnam}</div>
              <div className="py-2.5 px-2 text-sm line-through" style={{ color: COLORS.muted }}>{d.totalIndia}</div>
            </div>
          </div>
          <div className="mt-6 rounded-xl p-6 text-center" style={{ background: COLORS.smoked }}>
            <p className="text-sm uppercase tracking-wide mb-1" style={{ color: COLORS.textMain }}>Total Savings for {cn} Students</p>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: COLORS.accent }}>{d.savings}</p>
            <p className="text-sm mt-1">That's <strong>{d.savingsPercent} cheaper</strong> than private Indian colleges!</p>
          </div>
        </div>
      </section>

      {/* Admission Steps — SMOKE */}
      <section className="py-16 px-6" style={{ background: COLORS.smoked }}>
        <div className="w-full">
          <SectionTitle
            tag="Simple Process"
            title="Admission Process for"
            highlight={`${cn} Students`}
            sub="From application to departure, we handle everything."
          />
          <div className="flex flex-col gap-4">
            {d.steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start p-5 rounded-xl w-full" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}>
                <div className="w-9 h-9 rounded-full text-white font-bold text-sm flex items-center justify-center flex-shrink-0" style={{ background: COLORS.accent }}>{s.n}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="font-bold text-base" style={{ color: COLORS.heading }}>{s.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: COLORS.white, color: COLORS.accent }}>{s.time}</span>
                  </div>
                  <p className="text-sm leading-relaxed mt-1 whitespace-pre-line" style={{ color: COLORS.textMain }}>
                    {replaceName(s.desc, sn, cn)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setEnquireOpen(true)} className="px-8 py-3 rounded-xl text-white font-semibold text-base" style={{ background: COLORS.accent }}>
              Start Your Application from {cn} →
            </button>
            <p className="text-xs mt-2">Free counseling for students from {cn}, {sn}</p>
          </div>
        </div>
      </section>

      {/* Travel Guide — WHITE */}
      <section className="py-16 px-6" style={{ background: COLORS.white }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Travel Guide"
            title={`Easy Travel from ${cn}`}
            highlight="to Vietnam"
            sub={`Convenient flight connections from ${cn}.`}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cityTravelCards.map((c, i) => (
              <div key={i} className="p-4 rounded-xl text-center" style={{ background: COLORS.white, border: `1px solid ${i === 0 ? COLORS.accent : COLORS.border}` }}>
                <div className="text-3xl mb-2">{c.icon}</div>
                <p className="text-[11px] uppercase tracking-wide" style={{ color: COLORS.textMain }}>{c.title}</p>
                <p className="font-bold text-base mt-1" style={{ color: COLORS.heading }}>{c.value}</p>
                <p className="text-[10px] mt-0.5" style={{ color: COLORS.muted }}>{c.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl flex items-center gap-3" style={{ background: COLORS.white, border: `1px solid ${COLORS.accent}` }}>
            <span className="text-xl">✅</span>
            <p className="text-sm font-medium" style={{ color: COLORS.accent }}>100% Visa Success Rate for {cn} Students</p>
          </div>
        </div>
      </section>

      {/* Testimonials — SMOKE */}
      <section className="py-16 px-6" style={{ background: COLORS.smoked }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            tag="Testimonials"
            title={`Hear from ${sn} Students`}
            highlight="in Vietnam"
            sub={`Real experiences from students pursuing MBBS in Vietnam from ${cn} and nearby areas.`}
          />
          {reviewsLoading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array(3).fill().map((_, i) => (
                <div key={i} className="h-36 rounded-xl animate-pulse" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }} />
              ))}
            </div>
          )}
          {!reviewsLoading && reviews.length === 0 && (
            <div className="text-center py-12"><div className="text-5xl mb-3">💬</div><p className="text-sm">Student testimonials coming soon!</p></div>
          )}
          {!reviewsLoading && reviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((t, i) => (
                <div key={i} className="p-5 rounded-xl" style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm mb-2" style={{ background: COLORS.accent, color: COLORS.white }}>❝</div>
                  <div className="flex gap-0.5 mb-2 text-sm" style={{ color: COLORS.accent }}>
                    {Array(Number(t.rating) || 5).fill().map((_, j) => <span key={j}>★</span>)}
                  </div>
                  <p className="text-sm italic mb-2">"{t.review}"</p>
                  <p className="text-sm font-bold" style={{ color: COLORS.accent }}>{t.name}<span className="font-normal" style={{ color: COLORS.textMain }}> · {t.city}</span></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ — WHITE */}
      <section className="py-16 px-6" style={{ background: COLORS.white }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            tag="FAQs"
            title="Common Questions from"
            highlight={`${cn} Students`}
            sub={`Get answers about studying MBBS in Vietnam from ${cn}.`}
          />
          {d.faqs.map((f, i) => (
            <FaqItem
              key={i}
              q={replaceName(f.q, sn, cn)}
              a={replaceName(f.a, sn, cn)}
            />
          ))}
        </div>
      </section>

      {/* Final CTA — SMOKE */}
      <section className="py-12 px-6 text-center" style={{ background: COLORS.smoked }}>
        <div className="max-w-xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: COLORS.white, color: COLORS.accent }}>🎓 2026 Admissions Open</span>
          <h2 className="font-bold text-2xl mb-2" style={{ color: COLORS.heading }}>
            Ready to Start Your MBBS Journey from {cn}?
          </h2>
          <p className="text-sm mb-5" style={{ color: COLORS.textMain }}>
            Free counseling for students from {cn}, {sn}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button onClick={() => setEnquireOpen(true)} className="px-6 py-2.5 rounded-xl font-semibold text-sm" style={{ background: COLORS.accent, color: COLORS.white }}>📞 Enquire Now</button>
            <a href={waHref} target="_blank" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-white text-sm" style={{ background: COLORS.whatsapp }}><WaSvg /> WhatsApp Chat</a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Enquire Button */}
      <button onClick={() => setEnquireOpen(true)} className="fixed bottom-5 left-5 z-50 flex items-center gap-1.5 px-3 py-2 rounded-full text-white text-xs shadow-md" style={{ background: COLORS.accent }}>
        📞 Enquire
      </button>

      {/* Enquire Modal */}
      {enquireOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setEnquireOpen(false)}>
          <div className="rounded-xl max-w-md w-full overflow-hidden" style={{ background: COLORS.white }} onClick={(e) => e.stopPropagation()}>
            <div className="px-5 py-4" style={{ background: COLORS.accent }}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-white/80">Free Counseling</p>
                  <h3 className="font-bold text-lg text-white">Enquire for {cn}</h3>
                </div>
                <button onClick={() => setEnquireOpen(false)} className="text-white/80 hover:text-white text-xl">×</button>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {["Full Name", "Phone Number", "Email Address"].map((ph) => (
                <input key={ph} placeholder={ph} className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={{ border: `1px solid ${COLORS.border}`, color: COLORS.heading }}
                  onFocus={(e) => (e.currentTarget.style.border = `1px solid ${COLORS.accent}`)}
                  onBlur={(e) => (e.currentTarget.style.border = `1px solid ${COLORS.border}`)} />
              ))}
              <select className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={{ border: `1px solid ${COLORS.border}`, color: COLORS.textMain }}>
                <option>Select NEET Year</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
              <button className="w-full py-2.5 rounded-lg text-white font-semibold text-sm" style={{ background: COLORS.accent }}>Submit Enquiry →</button>
              <p className="text-center text-xs pt-1">Or reach us on <a href={waHref} target="_blank" style={{ color: COLORS.whatsapp }}>WhatsApp</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
