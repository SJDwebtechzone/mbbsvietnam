import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import docImage from "../assets/doc.jpeg"; // adjust path
import CTA from "../components/CTA_section";
import Admission from "../assets/admission1.webp";
import SEO from "../components/SEO";

const services = [
  {
    id: 1,
    step: "01",
    title: "Admission & Course Selection",
    description:
      "Our expert counsellors evaluate your academic profile, eligibility under NMC guidelines, and career goals to recommend the ideal MBBS program in Vietnam — tailored specifically to you.",
    highlights: ["NMC-compliant programs", "Profile-based matching", "NEXT exam alignment"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    step: "02",
    title: "University Selection",
    description:
      "We shortlist top Vietnamese medical universities — including BMU, Dai Nam, and others — based on accreditation status, fee structure, hospital affiliations, hostel facilities, and Indian student community support.",
    highlights: ["NMC/WHO recognised", "Hospital affiliations", "Indian food & hostel"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    step: "03",
    title: "Documentation Support",
    description:
      "From academic transcripts and SOP drafting to bank statements and medical certificates, we assist in compiling a complete, error-free application package that meets each university's exact requirements.",
    highlights: ["SOP & LOR guidance", "Document checklist", "Error-free submission"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    id: 4,
    step: "04",
    title: "Visa Processing Assistance",
    description:
      "Our team handles the entire Vietnamese student visa process — from preparing the invitation letter and filling forms to scheduling appointments and tracking your application status, ensuring zero delays.",
    highlights: ["Visa form assistance", "Embassy support", "Status tracking"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    step: "05",
    title: "Education Loan Facilitation",
    description:
      "We connect you with leading Indian banks and NBFCs offering collateral-free and collateral-based education loans for MBBS abroad. Our advisors help you prepare documentation and negotiate competitive interest rates.",
    highlights: ["Collateral-free options", "Bank tie-ups", "Loan documentation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    step: "06",
    title: "Forex & Travel Insurance",
    description:
      "We help you secure the best foreign exchange rates for your tuition and living expenses, and arrange comprehensive student travel insurance that meets Vietnamese university requirements.",
    highlights: ["Best forex rates", "Student travel insurance", "University-compliant coverage"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 7,
    step: "07",
    title: "Pre-Departure Orientation",
    description:
      "Before you fly, we conduct a thorough orientation session covering Vietnamese culture, campus life, academic expectations, NEXT exam preparation strategy, and connect you with our alumni network in Vietnam.",
    highlights: ["Cultural orientation", "NEXT exam strategy", "Alumni network access"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    step: "08",
    title: "Airport Pick-Up & Accommodation",
    description:
      "Our on-ground team in Vietnam ensures you are received at the airport on arrival day and safely transferred to your hostel. We pre-arrange accommodation with Indian food facilities, ensuring a comfortable first landing.",
    highlights: ["Airport reception", "Hostel booking", "Indian food arrangements"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 9,
    step: "09",
    title: "Post-Landing & Ongoing Support",
    description:
      "Our support doesn't end at admission. From university registration and SIM card assistance to bank account setup, local navigation, and year-round academic counselling — we remain your trusted partner throughout your MBBS journey.",
    highlights: ["University registration", "Year-round counselling", "Emergency assistance"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "10+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "24/7", label: "Student Support" },
];

const whyItems = [
  { icon: "🎓", title: "NMC Compliant", sub: "NMC & WHO recognised universities" },
  { icon: "🇮🇳", title: "India-Focused", sub: "Indian faculty, food & community" },
  { icon: "✈️", title: "~4–5 Hr Flight", sub: "Vietnam — closest MBBS destination" },
  { icon: "💰", title: "₹3.5L/Year", sub: "Affordable fees, no hidden costs" },
  { icon: "📋", title: "NEXT Aligned", sub: "Curriculum built for NEXT success" },
];

export default function AdmissionServices() {
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif", color: "#191c1d" }}>
      <SEO
        title="MBBS Admission Services Vietnam | Visa, Documentation | VietnamBBS"
        description="Complete MBBS admission services for Vietnam universities. Visa processing, documentation, airport pickup, hostel arrangement and post-landing support."
        keywords="MBBS admission services Vietnam, Vietnam student visa, MBBS documentation Vietnam, Vietnam university admission India"
        canonical="https://www.vietnambbs.com/admissionServices"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "MBBS Admission Services for Vietnam",
          "provider": {
            "@type": "Organization",
            "name": "VietnamBBS",
            "url": "https://www.vietnambbs.com"
          },
          "description": "End-to-end MBBS admission services including visa, documentation, hostel and post-landing support.",
          "areaServed": "India",
          "serviceType": "MBBS Admission Consulting"
        }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap');
        
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        /* ── HERO ── */
        .hero-bg {
          background: #CC1B1B;
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 80% at 0% 100%, rgba(0,0,0,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 100% 0%, rgba(245,197,24,0.18) 0%, transparent 55%);
          pointer-events: none;
        }
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none;
        }

        /* ── STAT CARDS ── */
        .stat-card {
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .stat-card:hover {
          border-color: #F5C518;
          background: rgba(245,197,24,0.12);
        }

        /* ── WHY STRIP ── */
        .why-strip {
          background: #fff;
          border-bottom: 3px solid #F5C518;
          padding: 2rem 1.5rem;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .why-card {
          background: #fff;
          border: 1.5px solid #e5e5e5;
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .why-card:hover {
          border-color: #CC1B1B;
          box-shadow: 0 4px 16px rgba(204,27,27,0.10);
        }

        /* ── SERVICE CARDS ── */
        .service-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
        }
        .service-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #CC1B1B, #F5C518);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          box-shadow: 0 12px 36px rgba(204,27,27,0.12);
          border-color: rgba(204,27,27,0.25);
          transform: translateY(-3px);
        }
        .service-card:hover::after { transform: scaleX(1); }

        .step-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 3.75rem;
          font-weight: 900;
          color: rgba(204,27,27,0.07);
          position: absolute;
          top: 0.75rem;
          right: 1.25rem;
          line-height: 1;
          user-select: none;
          transition: color 0.25s;
        }
        .service-card:hover .step-num { color: rgba(204,27,27,0.14); }

        .icon-box {
          width: 50px; height: 50px;
          border-radius: 10px;
          background: rgba(204,27,27,0.07);
          border: 1.5px solid rgba(204,27,27,0.18);
          display: flex; align-items: center; justify-content: center;
          color: #CC1B1B;
          margin-bottom: 1.25rem;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          flex-shrink: 0;
        }
        .service-card:hover .icon-box {
          background: #CC1B1B;
          border-color: #CC1B1B;
          color: #fff;
        }
        .icon-box svg { width: 22px; height: 22px; }

        /* ── PILLS ── */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
        }
        .pill::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #CC1B1B;
          flex-shrink: 0;
        }

        /* ── DIVIDER ── */
        .gold-bar {
          width: 48px; height: 3px;
          background: #F5C518;
          border-radius: 2px;
          margin: 0.75rem auto 0;
        }

        /* ── SERVICES BG SECTION ── */
        .services-section {
          background: #f8fafc;
          padding: 3rem 1.5rem;
        }
      `}</style>

      <Header />

      {/* Hero — full image height, no cropping */}
      <section style={{ width: "100%", overflow: "hidden" }}>
        <img
          src={Admission}
          alt="Indian doctors"
          loading="eager"
          fetchPriority="high"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* Content — below the hero */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "2rem clamp(1.5rem, 5vw, 4rem) 1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <div style={{
          display: "inline-block",
          padding: "6px 18px",
          borderRadius: "999px",
          border: "1.5px solid rgba(204,27,27,0.3)",
          background: "rgba(204,27,27,0.07)",
          color: "#CC1B1B",
          fontSize: "0.75rem",
          fontWeight: 900,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.25rem",
        }}>
          Our Services
        </div>

        {/* Heading */}
        <h1 className="font-headline" style={{
          color: "#0f172a",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          lineHeight: 1.15,
          marginBottom: "1rem",
        }}>
          End-to-End <span style={{ color: "#CC1B1B" }}>MBBS Admission</span>
          <br />
          Support for Indian Students
        </h1>

        {/* Description */}
        <p style={{
          color: "#334155",
          fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
          lineHeight: 1.8,
          marginBottom: "2rem",
          maxWidth: "700px",
          fontWeight: 600,
        }}>
          From selecting the right NMC-recognised university in Vietnam to
          settling you in on campus — comprehensive, transparent, and
          personalised guidance at every stage.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "2rem", justifyContent: "center" }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              textAlign: "center",
              padding: "16px 24px",
              borderRadius: "14px",
              border: "1.5px solid #e2e8f0",
              background: "#ffffff",
              minWidth: "150px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)"
            }}>
              <div className="font-headline" style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#CC1B1B",
                lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontSize: "0.68rem",
                color: "#475569",
                marginTop: "8px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <main className="services-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: "#CC1B1B", marginBottom: "0.75rem" }}>
              What We Offer
            </p>
            <h2 className="font-headline" style={{ fontSize: "clamp(1.85rem, 4vw, 2.8rem)", fontWeight: 900, color: "#CC1B1B", marginBottom: "0.75rem", lineHeight: 1.2 }}>
              9 Steps to Your MBBS in Vietnam
            </h2>
            <div className="gold-bar" />
            <p style={{ color: "#334155", fontSize: "1.05rem", maxWidth: "600px", margin: "1.25rem auto 0", lineHeight: 1.75, fontWeight: 600 }}>
              A structured, proven process — from your first enquiry to your first day on campus.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <span className="step-num">{service.step}</span>
                <div className="icon-box">{service.icon}</div>
                <h3 className="font-headline" style={{ fontSize: "1.25rem", fontWeight: 900, color: "#0f172a", marginBottom: "0.75rem", lineHeight: 1.35, paddingRight: "2.5rem" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 600 }}>
                  {service.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {service.highlights.map((h) => (
                    <span key={h} className="pill">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}