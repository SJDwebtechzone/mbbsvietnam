import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CanPic1 from '../assets/DSC02197.jpg';
import CanPic2 from '../assets/DSC02334.jpg';
import CanPic3 from '../assets/DSC02391.jpg';
import HeroImage from '../assets/canTho.webp';
import HeroImage1 from '../assets/DSC02503.jpg';
import EnquiryModal from "../components/EnquiryModal";
import SEO from "../components/SEO";

const UniversityProfile = () => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

    .ctu-page-container {
      --primary: #B3261E;
      --primary-container: #F9DEDC;
      --on-primary: #FFFFFF;
      --secondary: #625B71;
      --secondary-container: #E8DEF8;
      --on-secondary-container: #1D192B;
      --tertiary: #7D5260;
      --tertiary-container: #FFD8E4;
      --tertiary-fixed-dim: #7D5260;
      --surface: #FFFBFE;
      --surface-container: #F3EEF5;
      --surface-container-low: #F7F2FA;
      --surface-container-lowest: #FFFFFF;
      --on-surface: #1C1B1F;
      --on-surface-variant: #49454F;
      --outline-variant: #CAC7D0;

      /* Type scale */
      --fs-eyebrow: 13px;
      --fs-small: 15px;
      --fs-body: 16px;
      --fs-body-lg: 18px;
      --fs-h4: 21px;
      --fs-h3: clamp(28px, 3.5vw, 36px);
      --fs-h2: clamp(34px, 4.5vw, 44px);
      --fs-stat: clamp(38px, 4.5vw, 50px);
      --fs-hero: clamp(44px, 7vw, 72px);

      /* Spacing scale */
      --sp-1: 4px;
      --sp-2: 8px;
      --sp-3: 12px;
      --sp-4: 16px;
      --sp-5: 24px;
      --sp-6: 32px;
      --sp-7: 48px;
      --sp-8: 64px;
      --sp-9: 96px;

      --radius-lg: 28px;
      --radius-md: 18px;
      --radius-sm: 12px;

      box-sizing: border-box;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: var(--surface);
      font-family: 'Inter', sans-serif;
      font-size: var(--fs-body);
      line-height: 1.6;
      color: var(--on-surface);
      -webkit-font-smoothing: antialiased;
    }

    .ctu-page-container * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .ctu-page-container .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }

    .ctu-page-container .glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
    }

    .ctu-page-container h1,
    .ctu-page-container h2,
    .ctu-page-container h3,
    .ctu-page-container h4,
    .ctu-page-container h5,
    .ctu-page-container h6 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    .ctu-page-container p {
      font-size: var(--fs-body);
      color: #334155;
      font-weight: 600;
    }

    .ctu-page-container button {
      cursor: pointer;
      border: none;
      font-family: inherit;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    }

    .ctu-page-container button:hover {
      transform: translateY(-2px);
    }

    .ctu-page-container button:active {
      transform: translateY(0);
    }

    .ctu-page-container button:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 3px;
    }

    .ctu-page-container a {
      text-decoration: none;
      color: inherit;
    }

    .ctu-section-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: var(--sp-2);
      padding: 7px 16px;
      background: rgba(179, 38, 30, 0.08);
      color: var(--primary);
      font-size: var(--fs-eyebrow);
      font-weight: 700;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      border-radius: 9999px;
    }

    .ctu-feature-row {
      transition: background 0.2s ease;
    }

    .ctu-feature-row:hover {
      background: rgba(179, 38, 30, 0.04);
    }

    @media (max-width: 768px) {
      .ctu-hero-grid {
        grid-template-columns: 1fr !important;
      }
      .ctu-about-grid {
        grid-template-columns: 1fr !important;
        gap: var(--sp-7) !important;
      }
      .ctu-global-grid {
        grid-template-columns: 1fr !important;
      }
      .ctu-hero-title {
        font-size: clamp(30px, 8vw, 40px) !important;
      }
      .ctu-stats-grid {
        grid-template-columns: 1fr !important;
      }
      .ctu-stats-grid .stats-span-2 {
        grid-column: span 1 !important;
      }
      .ctu-cta-title {
        font-size: clamp(28px, 8vw, 36px) !important;
      }
      .ctu-section-pad {
        padding-top: var(--sp-7) !important;
        padding-bottom: var(--sp-7) !important;
      }
    }

    @media (max-width: 480px) {
      .ctu-about-images {
        grid-template-columns: 1fr !important;
      }
      .ctu-about-images div {
        padding-top: 0 !important;
      }
      .ctu-faculty-badge {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
    }
  `;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <SEO
  title="Can Tho University MBBS 2026 | Fees, Admission | VietnamBBS"
  description="Study MBBS at Can Tho University Vietnam. NMC recognised, fees from ₹4 lakhs, English medium. Located in Can Tho city. Apply now for 2026 admissions."
  keywords="Can Tho University MBBS, CTUMP Vietnam, Can Tho University fees, MBBS Can Tho Vietnam"
  canonical="https://www.vietnambbs.com/universities/can-tho-university"
  schema={{
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Can Tho University of Medicine and Pharmacy",
    "url": "https://www.vietnambbs.com/universities/can-tho-university",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Can Tho",
      "addressCountry": "VN"
    },
    "description": "NMC recognised medical university in Can Tho, Vietnam offering 6-year MBBS program.",
    "telephone": "+91-90034-20057"
  }}
/>
      <Header />
      <div className="ctu-page-container">
        <style>{styles}</style>
        <div style={{ background: 'var(--surface)', color: 'var(--on-surface)' }}>
          <main style={{ paddingBottom: 'var(--sp-8)' }}>

            {/* Hero Section */}
            <section style={{
              position: 'relative',
              minHeight: '520px',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '64px 24px 64px 24px',
              overflow: 'hidden'
            }}>
              {/* Background Banner Image */}
              <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0
              }}>
                <img
                  src={HeroImage}
                  alt="Can Tho University Campus Banner"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)'
                }}></div>
              </div>

              {/* Banner Content Container */}
              <div style={{
                position: 'relative',
                zIndex: 10,
                maxWidth: '1280px',
                margin: '0 auto',
                width: '100%'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 18px',
                    background: 'rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(12px)',
                    width: 'fit-content'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified</span>
                    NMC Recognised &bull; Since 1966
                  </div>
                  <h2 className="ctu-hero-title" style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 'var(--fs-hero)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 14px rgba(0,0,0,0.35)'
                  }}>
                    Can Tho <span style={{ color: '#F5C518' }}>University</span>
                  </h2>
                  <p style={{
                    fontSize: 'clamp(16px, 2vw, 19px)',
                    color: 'rgba(255, 255, 255, 0.92)',
                    lineHeight: 1.6,
                    maxWidth: '580px',
                    textShadow: '0 1px 6px rgba(0,0,0,0.3)'
                  }}>
                    The leading public multidisciplinary university in the heart of Vietnam&apos;s Mekong Delta, fostering innovation and global medical excellence.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '12px' }}>
                    <button type="button" onClick={() => setIsModalOpen(true)} style={{
                      background: '#CC1B1B',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '15px',
                      padding: '16px 32px',
                      borderRadius: '14px',
                      boxShadow: '0 6px 28px rgba(204, 27, 27, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer'
                    }}>
                      Apply Now <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </button>
                    <button type="button" onClick={() => setIsModalOpen(true)} style={{
                      background: 'rgba(255, 255, 255, 0.14)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '15px',
                      padding: '16px 32px',
                      borderRadius: '14px',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      backdropFilter: 'blur(12px)',
                      cursor: 'pointer'
                    }}>
                      Get Free Counseling
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Bento Grid */}
            <section className="ctu-section-pad" style={{
              padding: 'var(--sp-9) 24px',
              background: 'linear-gradient(135deg, #FFFBFE 0%, #F7F2FA 100%)'
            }}>
              <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{
                  textAlign: 'center',
                  maxWidth: '620px',
                  margin: '0 auto 48px auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px'
                }}>
                  <div className="ctu-section-eyebrow">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                    By The Numbers
                  </div>
                  <h2 style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 'var(--fs-h2)',
                    fontWeight: 800,
                    color: '#CC1B1B',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.25
                  }}>
                    Leading the Way in Higher Education
                  </h2>
                  <p style={{ color: '#49454F', fontSize: 'var(--fs-body-lg)', lineHeight: 1.6 }}>
                    Our impact through the numbers tells the story of excellence and growth.
                  </p>
                </div>

                <div className="ctu-stats-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px',
                  gridAutoRows: 'auto'
                }}>
                  {/* Card 1 - Students */}
                  <div style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FDEAEA 100%)',
                    padding: '36px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(179, 38, 30, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 8px 24px rgba(179, 38, 30, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(179, 38, 30, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(179, 38, 30, 0.08)';
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '200px',
                      height: '200px',
                      background: 'rgba(179, 38, 30, 0.05)',
                      borderRadius: '50%'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '48px',
                        height: '48px',
                        background: 'rgba(179, 38, 30, 0.1)',
                        borderRadius: '14px',
                        marginBottom: '16px'
                      }}>
                        <span className="material-symbols-outlined" style={{ color: '#B3261E', fontSize: '26px' }}>groups</span>
                      </div>
                      <h3 style={{ fontSize: 'var(--fs-stat)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, color: '#B3261E', marginBottom: '6px', lineHeight: 1 }}>960+</h3>
                      <p style={{ color: '#49454F', fontWeight: 600, fontSize: 'var(--fs-small)' }}>Students Currently Enrolled</p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '20px',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      borderRadius: 'var(--radius-sm)',
                      width: 'fit-content',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#4CAF50'
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span>
                      20% Growth YoY
                    </div>
                  </div>

                  {/* Card 2 - Faculty */}
                  <div style={{
                    background: 'linear-gradient(135deg, #B3261E 0%, #8B1A14 100%)',
                    padding: '36px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    color: '#FFFFFF',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 8px 32px rgba(179, 38, 30, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 56px rgba(179, 38, 30, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(179, 38, 30, 0.25)';
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: '-60px',
                      left: '-60px',
                      width: '200px',
                      height: '200px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '50%'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '48px',
                        height: '48px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '14px',
                        marginBottom: '16px'
                      }}>
                        <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '26px' }}>school</span>
                      </div>
                      <h3 style={{ fontSize: 'var(--fs-stat)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, marginBottom: '6px', lineHeight: 1 }}>200+</h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600, fontSize: 'var(--fs-small)' }}>Expert Faculty Members</p>
                    </div>

                    <div className="ctu-faculty-badge" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '20px',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 'var(--radius-sm)',
                      width: 'fit-content',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
                      World-Class Educators
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="ctu-section-pad" style={{ padding: 'var(--sp-9) 24px', background: '#FFFBFE' }}>
              <div className="ctu-about-grid" style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center'
              }}>
                <div className="ctu-about-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '32px' }}>
                    <img src={CanPic1} alt="medical lab" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '4/3', width: '100%', objectFit: 'cover' }} />
                    <img src={HeroImage1} alt="student plaza" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '4/3', width: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <img src={CanPic2} alt="campus view" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '4/3', width: '100%', objectFit: 'cover' }} />
                    <img src={CanPic3} alt="students" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '4/3', width: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <h3 style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 'var(--fs-h3)',
                    fontWeight: 700,
                    color: '#CC1B1B',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3
                  }}>
                    Academic Excellence &amp; Multidisciplinary Growth
                  </h3>
                  <p style={{ color: '#49454F', lineHeight: 1.7, fontSize: 'var(--fs-body-lg)' }}>
                    As a comprehensive public institution, Can Tho University (CTUMP) offers a diverse range of undergraduate and postgraduate programs. While widely recognized for its agricultural and environmental research, it stands as a <span style={{ color: '#B3261E', fontWeight: 700 }}>critical multidisciplinary hub</span> in Vietnam's educational ecosystem.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className="ctu-feature-row" style={{ display: 'flex', gap: '18px', padding: '18px', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                      <div style={{ background: 'rgba(179, 38, 30, 0.1)', padding: '14px', borderRadius: 'var(--radius-sm)', height: 'fit-content' }}>
                        <span className="material-symbols-outlined" style={{ color: '#B3261E' }}>menu_book</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <h4 style={{ fontWeight: 700, fontSize: 'var(--fs-h4)', color: 'var(--on-surface)' }}>Credit-Based System</h4>
                        <p style={{ fontSize: 'var(--fs-small)', color: '#49454F', lineHeight: 1.6 }}>Flexible academic structure allowing students to tailor their learning path effectively.</p>
                      </div>
                    </div>
                    <div className="ctu-feature-row" style={{ display: 'flex', gap: '18px', padding: '18px', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                      <div style={{ background: 'rgba(179, 38, 30, 0.1)', padding: '14px', borderRadius: 'var(--radius-sm)', height: 'fit-content' }}>
                        <span className="material-symbols-outlined" style={{ color: '#B3261E' }}>translate</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <h4 style={{ fontWeight: 700, fontSize: 'var(--fs-h4)', color: 'var(--on-surface)' }}>70% English Instruction</h4>
                        <p style={{ fontSize: 'var(--fs-small)', color: '#49454F', lineHeight: 1.6 }}>High-quality programs designed for international standards with significant English medium delivery.</p>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    padding: '28px',
                    background: 'rgba(232, 222, 248, 0.15)',
                    borderLeft: '4px solid #E8DEF8',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    fontStyle: 'italic',
                    fontSize: 'var(--fs-body-lg)',
                    lineHeight: 1.65,
                    color: '#49454F'
                  }}>
                    "CTUMP is not a specialized medical university, but its role in producing world-class researchers and multidisciplinary professionals makes it an essential partner for medical aspirants in Vietnam."
                  </div>
                </div>
              </div>
            </section>

            {/* Global Recognition Section */}
            <section className="ctu-section-pad" style={{ padding: 'var(--sp-9) 24px', background: '#F7F2FA' }}>
              <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
                <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'var(--fs-h2)', fontWeight: 700, color: '#CC1B1B', lineHeight: 1.25 }}>Global Perspective, Local Heart</h3>
                  <p style={{ color: '#49454F', fontSize: 'var(--fs-body-lg)', lineHeight: 1.6 }}>Integrating international standards within the peaceful atmosphere of Can Tho city.</p>
                </div>
                <div className="ctu-global-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px', border: '1px solid rgba(202, 199, 208, 0.15)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'var(--fs-h4)', fontWeight: 700 }}>International Reach</h4>
                      <span className="material-symbols-outlined" style={{ color: '#B3261E', fontSize: '26px' }}>public</span>
                    </div>
                    <p style={{ color: '#49454F', lineHeight: 1.65, fontSize: 'var(--fs-body)' }}>
                      Hosting students from the USA, Japan, and Europe, CTUMP maintains active collaborations with top-tier universities globally, ensuring our research standards meet international benchmarks.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{ padding: '9px 18px', background: 'rgba(125, 82, 96, 0.1)', color: '#7D5260', fontSize: '12px', fontWeight: 700, letterSpacing: '0.03em', borderRadius: '9999px' }}>USA COLLABS</span>
                      <span style={{ padding: '9px 18px', background: 'rgba(125, 82, 96, 0.1)', color: '#7D5260', fontSize: '12px', fontWeight: 700, letterSpacing: '0.03em', borderRadius: '9999px' }}>EU PARTNERS</span>
                      <span style={{ padding: '9px 18px', background: 'rgba(125, 82, 96, 0.1)', color: '#7D5260', fontSize: '12px', fontWeight: 700, letterSpacing: '0.03em', borderRadius: '9999px' }}>JAPANESE ALLIANCE</span>
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px', border: '1px solid rgba(202, 199, 208, 0.15)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'var(--fs-h4)', fontWeight: 700 }}>Life in Can Tho</h4>
                      <span className="material-symbols-outlined" style={{ color: '#625B71', fontSize: '26px' }}>location_on</span>
                    </div>
                    <p style={{ color: '#49454F', lineHeight: 1.65, fontSize: 'var(--fs-body)' }}>
                      Known for its peaceful surroundings, student-friendly culture, and low cost of living. Can Tho is one of the safest cities in Vietnam, providing a focused environment for academic excellence.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: 'var(--fs-small)', fontWeight: 700, color: 'var(--on-surface)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span className="material-symbols-outlined" style={{ color: '#4CAF50', fontSize: '20px' }}>check_circle</span> Safe</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span className="material-symbols-outlined" style={{ color: '#4CAF50', fontSize: '20px' }}>check_circle</span> Affordable</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span className="material-symbols-outlined" style={{ color: '#4CAF50', fontSize: '20px' }}>check_circle</span> Scenic</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Full Width CTA Section */}
            <section className="ctu-section-pad" style={{
              width: "100%",
              margin: "0",
              padding: "104px 24px",
              background: "linear-gradient(135deg, #FFF7F7 0%, #FDEAEA 50%, #F7F2FA 100%)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "220px", height: "220px", background: "rgba(179,38,30,0.08)", borderRadius: "50%", filter: "blur(40px)" }}></div>
              <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "260px", height: "260px", background: "rgba(125,82,96,0.08)", borderRadius: "50%", filter: "blur(50px)" }}></div>

              <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
                <div style={{ display: "inline-block", padding: "9px 20px", background: "#ffffff", color: "#B3261E", borderRadius: "999px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "24px", boxShadow: "0 4px 18px rgba(0,0,0,0.06)" }}>Admissions Open 2026</div>

                <h2 className="ctu-cta-title" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", color: "#CC1B1B", lineHeight: "1.15", letterSpacing: '-0.015em', marginBottom: "22px" }}>
                  Shape Your Future at <br /> Can Tho University
                </h2>

                <p style={{ maxWidth: "760px", margin: "0 auto", fontSize: "clamp(16px, 2vw, 19px)", color: "#49454F", lineHeight: "1.7", marginBottom: "44px" }}>
                  Join a globally connected university known for academic excellence, research innovation, and a vibrant student life in Vietnam's most welcoming city.
                </p>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "18px" }}>
                  <button type="button" onClick={() => setIsModalOpen(true)} style={{ background: "#B3261E", color: "#fff", padding: "16px 34px", borderRadius: "14px", fontSize: "16px", fontWeight: "700", boxShadow: "0 10px 25px rgba(179,38,30,0.18)", cursor: "pointer", border: "none" }}>
                    Apply Now
                  </button>
                  <a
                    href="https://www.ctump.edu.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      background: "#ffffff",
                      color: "#1C1B1F",
                      padding: "16px 34px",
                      borderRadius: "14px",
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid #E0E0E0",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    Visit University
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
};

export default UniversityProfile;
