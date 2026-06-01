

// import { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import EnquiryModal from "../components/EnquiryModal";

// // ── Assets ──────────────────────────────────────────────
// import NCTUStudent  from "../assets/DSC02197.jpg";
// import HeroImage1   from "../assets/DSC02283.jpg";
// import HeroImage2   from "../assets/DSC02256.jpg";
// import PharmacyImg  from "../assets/DSC02228.jpg";
// import GenMedImg    from "../assets/DSC08785.jpg";
// import NursingImg   from "../assets/DSC06843.jpg";
// import CollegeImg   from "../assets/namCanPic.webp";
// // ────────────────────────────────────────────────────────
// // IMPORTANT — rename the uploaded files in src/assets/ like this:
// //   1778668027175_students.webp   →  nctu-pharmacy.webp
// //   1778668069029_DSC08781.jpg    →  nctu-general-medicine.jpg
// //   1778668100357_DSC06843.JPG    →  nctu-nursing.jpg
// //   1778668237814_namCan.webp     →  nctu-campus.webp
// // ────────────────────────────────────────────────────────

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

//   .nctu-page-container {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     min-height: 100dvh;
//     background: #f8f9fa;
//     font-family: 'Inter', sans-serif;
//     color: #191c1d;
//   }

//   .nctu-page-container * {
//     box-sizing: border-box;
//   }

//   .material-symbols-outlined {
//     font-family: 'Material Symbols Outlined';
//     font-weight: normal;
//     font-style: normal;
//     font-size: 24px;
//     line-height: 1;
//     display: inline-block;
//     font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//   }

//   .font-headline {
//     font-family: 'Plus Jakarta Sans', sans-serif;
//   }

//   /* ── Hero Carousel ── */
//   .hero-slide {
//     position: absolute;
//     inset: 0;
//     transition: opacity 1s ease-in-out;
//   }
//   .hero-slide.active  { opacity: 1; z-index: 1; }
//   .hero-slide.inactive{ opacity: 0; z-index: 0; }

//   .carousel-dot {
//     width: 10px; height: 10px;
//     border-radius: 50%;
//     border: 2px solid rgba(255,255,255,0.8);
//     background: transparent;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     padding: 0;
//   }
//   .carousel-dot.active {
//     background: #fff;
//     transform: scale(1.2);
//   }

//   /* ── Responsive ── */
//   @media (max-width: 768px) {
//     .teaching-hospital-inner { flex-direction: column !important; gap: 32px !important; }
//     .student-life-inner       { flex-direction: column !important; padding: 32px 24px !important; }
//     .programs-grid            { grid-template-columns: 1fr !important; }
//     .facts-grid               { grid-template-columns: 1fr !important; }
//     .facts-grid .fact-span-2  { grid-column: span 1 !important; }
//   }
//   @media (max-width: 480px) {
//     .stats-grid-cta   { grid-template-columns: 1fr 1fr !important; }
//     .disclaimer-grid  { grid-template-columns: 1fr !important; }
//   }
// `;

// const Icon = ({ name, style }) => (
//   <span className="material-symbols-outlined" style={style}>{name}</span>
// );

// export default function NCTUMedical() {
//   return (
//     <>
//       <Header />
//       <div className="nctu-page-container">
//         <style>{styles}</style>
//         <main>
//           <HeroSection />
//           <UniversityFacts />
//           <TeachingHospital />
//           <AcademicPrograms />
//           <StudentLifeCost />
//           <DisclaimerSection />
//           <CTASection />
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    HERO — auto-sliding carousel (DSC02283 + DSC02256)
// ═══════════════════════════════════════════════════════ */
// const heroSlides = [
//   { src: HeroImage1, alt: "White Coat Ceremony – Nam Can Tho University" },
//   { src: HeroImage2, alt: "Medical Students Group – White Coat Ceremony 2026" },
// ];

// function HeroSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 4500);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <section style={{ position: "relative", height: 751, display: "flex", alignItems: "center", overflow: "hidden" }}>

//         {heroSlides.map((s, i) => (
//           <div key={i} className={`hero-slide ${i === current ? "active" : "inactive"}`}>
//             <img src={s.src} alt={s.alt}
//               style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
//             <div style={{
//               position: "absolute", inset: 0,
//               background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.2) 100%)",
//             }} />
//           </div>
//         ))}

//         {/* Text content */}
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10, width: "100%" }}>
//           <div style={{ maxWidth: 640 }}>
//             <span style={{
//               background: "#fecc00", color: "#6e5700", fontWeight: 700,
//               letterSpacing: "0.12em", fontSize: 12, textTransform: "uppercase",
//               padding: "8px 16px", borderRadius: 9999, marginBottom: 24, display: "inline-block",
//             }}>Study MBBS in Vietnam</span>

//             <h1 style={{
//               fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
//               color: "#fff", marginBottom: 24, lineHeight: 1.1,
//               fontFamily: "'Plus Jakarta Sans', sans-serif",
//             }}>
//               Your Medical Career at NCTU
//             </h1>

//             <div style={{ borderLeft: "4px solid #c8102e", paddingLeft: 16, marginBottom: 36 }}>
//               <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
//                 Step into a world-class medical ecosystem. Combining academic rigor with the clinical powerhouse of Nam Can Tho University Hospital.
//               </p>
//             </div>

//             <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
//               <button type="button" onClick={() => setIsModalOpen(true)} style={{
//                 background: "#c8102e", color: "#fff", padding: "16px 32px", borderRadius: 12,
//                 fontWeight: 700, border: "none", cursor: "pointer",
//                 display: "flex", alignItems: "center", gap: 8, fontSize: 15,
//               }}>
//                 Apply for Admission <Icon name="trending_flat" style={{ color: "#fff", fontSize: 22 }} />
//               </button>
//               <button type="button" onClick={() => setIsModalOpen(true)} style={{
//                 background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
//                 border: "2px solid rgba(255,255,255,0.4)", color: "#fff",
//                 padding: "16px 32px", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontSize: 15,
//               }}>
//                 Download Brochure
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Dots */}
//         <div style={{
//           position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
//           display: "flex", gap: 10, zIndex: 10,
//         }}>
//           {heroSlides.map((_, i) => (
//             <button key={i}
//               className={`carousel-dot ${i === current ? "active" : ""}`}
//               onClick={() => setCurrent(i)}
//               aria-label={`Slide ${i + 1}`} />
//           ))}
//         </div>
//       </section>

//       <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    UNIVERSITY FACTS
// ═══════════════════════════════════════════════════════ */
// function UniversityFacts() {
//   return (
//     <section style={{ padding: "80px 0", background: "#f8fafc" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//         <div className="facts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>

//           <div className="fact-span-2" style={{
//             gridColumn: "span 2", background: "#fff", padding: 32, borderRadius: 16,
//             display: "flex", flexDirection: "column", justifyContent: "space-between",
//             border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
//           }}>
//             <div>
//               <div style={{ color: "#0369a1", fontSize: 40, display: "block", marginBottom: 16 }}>
//                 <Icon name="verified" />
//               </div>
//               <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>
//                 Established 2013
//               </h3>
//               <p style={{ color: "#64748b", lineHeight: 1.6, textAlign: "justify" }}>
//                 A decade of excellence in higher education, producing Vietnam's next generation of healthcare leaders.
//               </p>
//             </div>
//           </div>

//           <div style={{ background: "#e0f2fe", padding: 32, borderRadius: 16, color: "#0c4a6e", border: "1px solid #bae6fd" }}>
//             <div style={{ fontSize: 40, display: "block", marginBottom: 16 }}><Icon name="location_on" /></div>
//             <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0c4a6e" }}>Can Tho City</h3>
//             <p style={{ fontSize: 14, lineHeight: 1.6, textAlign: "justify" }}>
//               The heart of the Mekong Delta, offering a serene yet vibrant academic environment.
//             </p>
//           </div>

//           <div style={{ background: "#f0f4f8", padding: 32, borderRadius: 16, color: "#1e293b", border: "1px solid #cbd5e1" }}>
//             <div style={{ fontSize: 40, display: "block", marginBottom: 16, color: "#0f172a" }}><Icon name="account_balance" /></div>
//             <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>Private</h3>
//             <p style={{ fontSize: 14, lineHeight: 1.6, textAlign: "justify" }}>
//               Independently governed with massive infrastructure investment and international standards.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    TEACHING HOSPITAL — nctu-campus.webp (namCan.webp renamed)
// ═══════════════════════════════════════════════════════ */
// function TeachingHospital() {
//   return (
//     <section style={{ padding: "96px 0" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//         <div className="teaching-hospital-inner" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 64 }}>

//           {/* Image */}
//           <div style={{ flex: "1 1 400px", position: "relative" }}>
//             <img
//               alt="Nam Can Tho University Campus"
//               src={CollegeImg}
//               style={{
//                 borderRadius: 40, boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
//                 width: "100%", height: 500, objectFit: "cover", objectPosition: "center",
//                 position: "relative", zIndex: 1,
//               }}
//             />
//             <div style={{
//               position: "absolute", bottom: -32, right: -32, background: "#fff",
//               padding: 24, borderRadius: 24, boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
//               maxWidth: 280, zIndex: 2,
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
//                 <Icon name="vital_signs" style={{ color: "#9e001f", fontSize: 22 }} />
//                 <span style={{ fontWeight: 700, fontSize: 17 }}>Direct Clinical Access</span>
//               </div>
//               <p style={{ fontSize: 12, color: "#5c403f" }}>
//                 Students start clinical observation in one of the region's most advanced tertiary care centers.
//               </p>
//             </div>
//           </div>

//           {/* Text */}
//           <div style={{ flex: "1 1 400px" }}>
//             <h2 className="font-headline" style={{
//               fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
//               color: "#191c1d", marginBottom: 24, lineHeight: 1.3,
//             }}>
//               Nam Can Tho University Hospital: Your{" "}
//               <span style={{ color: "#9e001f" }}>Clinical Advantage</span>
//             </h2>
//             <p style={{ fontSize: 18, color: "#5c403f", marginBottom: 32, lineHeight: 1.7, textAlign: "justify" }}>
//               Unlike traditional programs, NCTU integrates the university and hospital into one seamless campus. This ensures that every MBBS aspirant gets hands-on experience under the mentorship of senior consultants.
//             </p>
//             <ul style={{ listStyle: "none", marginBottom: 40 }}>
//               {[
//                 "800+ Bed Multi-specialty Facility",
//                 "Advanced Imaging & Diagnostic Center",
//                 "24/7 Emergency & Critical Care Training",
//               ].map(item => (
//                 <li key={item} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//                   <Icon name="check_circle" style={{ color: "#9e001f", fontSize: 22, fontVariationSettings: "'FILL' 1" }} />
//                   <span style={{ fontWeight: 500 }}>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    ACADEMIC PROGRAMS
//    1 → Pharmacy        (nctu-pharmacy.webp)
//    2 → General Medicine(nctu-general-medicine.jpg)
//    3 → Nursing         (nctu-nursing.jpg)
// ═══════════════════════════════════════════════════════ */
// const programs = [
//   {
//     title: "Pharmacy",
//     desc: "Advanced pharmaceutical sciences focusing on research and clinical pharmacology.",
//     img: PharmacyImg,
//   },
//   {
//     title: "General Medicine",
//     desc: "6-year comprehensive MBBS curriculum with integrated clinical rotations.",
//     img: GenMedImg,
//   },
//   {
//     title: "Nursing",
//     desc: "Focusing on compassionate care, patient safety, and community health management.",
//     img: NursingImg,
//   },
// ];

// function AcademicPrograms() {
//   const [hovered, setHovered] = useState(null);
//   return (
//     <section style={{ padding: "80px 0", background: "#f3f4f5" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: 64 }}>
//         <h2 className="font-headline" style={{
//           fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
//           marginBottom: 16, color: "#CC1B1B",
//         }}>
//           World-Class Programs
//         </h2>
//         <p style={{ color: "#5c403f", maxWidth: 480, margin: "0 auto" }}>
//           Diverse medical streams designed to meet global healthcare demands.
//         </p>
//       </div>

//       <div className="programs-grid" style={{
//         maxWidth: 1200, margin: "0 auto", padding: "0 24px",
//         display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32,
//       }}>
//         {programs.map((prog, i) => (
//           <div key={prog.title}
//             onMouseEnter={() => setHovered(i)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               background: "#fff", padding: 8, borderRadius: 32,
//               transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
//               transition: "transform 0.3s ease", cursor: "pointer",
//             }}
//           >
//             <img
//               alt={prog.title}
//               src={prog.img}
//               style={{
//                 width: "100%", height: 192, objectFit: "cover",
//                 objectPosition: "center top", borderRadius: 28, marginBottom: 24,
//               }}
//             />
//             <div style={{ padding: "0 24px 32px" }}>
//               <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
//                 {prog.title}
//               </h3>
//               <p style={{ color: "#5c403f", fontSize: 14, marginBottom: 24 }}>{prog.desc}</p>
//               <a href="https://nctu.edu.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
//                 <button style={{
//                   width: "100%", padding: "12px 0", borderRadius: 12,
//                   border: "1.5px solid #e5bdbb",
//                   color: hovered === i ? "#fff" : "#9e001f",
//                   background: hovered === i ? "#9e001f" : "transparent",
//                   fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease", fontSize: 14,
//                 }}>
//                   Course Details
//                 </button>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    STUDENT LIFE & COST
// ═══════════════════════════════════════════════════════ */
// function StudentLifeCost() {
//   return (
//     <section style={{ padding: "96px 0", backgroundColor: "#f8f9fb" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//         <div className="student-life-inner" style={{
//           background: "#ffffff", borderRadius: 24, padding: "64px",
//           display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48,
//           overflow: "hidden", position: "relative",
//           border: "1px solid #e5e7eb", boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
//         }}>
//           <div style={{ flex: "1 1 420px", position: "relative", zIndex: 1 }}>
//             <span style={{
//               display: "inline-block", background: "#eef2ff", color: "#171b74",
//               fontSize: 13, fontWeight: 700, padding: "8px 14px",
//               borderRadius: 999, marginBottom: 20, letterSpacing: "0.04em", textTransform: "uppercase",
//             }}>Student Lifestyle</span>

//             <h2 style={{
//               fontSize: "clamp(2rem, 3vw, 2.7rem)", fontWeight: 800, marginBottom: 24,
//               fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#111827", lineHeight: 1.2,
//             }}>
//               Quality Education, <span style={{ color: "#CC1B1B" }}>Affordable Living</span>
//             </h2>

//             <p style={{ fontSize: 16, color: "#4b5563", marginBottom: 40, lineHeight: 1.8, maxWidth: 520 }}>
//               Can Tho offers a significantly lower cost of living compared to Ho Chi Minh City or Hanoi.
//               Students enjoy a comfortable lifestyle with affordable accommodation, fresh local food,
//               and a peaceful academic environment.
//             </p>

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
//               {[
//                 { value: "40% Less", label: "Living Costs than HCM" },
//                 { value: "$200",    label: "Avg. Monthly Expense" },
//               ].map(stat => (
//                 <div key={stat.label} style={{
//                   background: "#f9fafb", border: "1px solid #e5e7eb",
//                   padding: 24, borderRadius: 18,
//                 }}>
//                   <span style={{ fontSize: 28, fontWeight: 800, display: "block", marginBottom: 8, color: "#171b74" }}>
//                     {stat.value}
//                   </span>
//                   <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", fontWeight: 600 }}>
//                     {stat.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div style={{ flex: "1 1 320px", position: "relative", height: 400, borderRadius: 22, overflow: "hidden", boxShadow: "0 16px 35px rgba(0,0,0,0.08)" }}>
//             <img alt="Student Life Can Tho" src={NCTUStudent}
//               style={{ position: "absolute", inset: 0, width: "100%", height: "140%", objectFit: "cover" }} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    DISCLAIMER
// ═══════════════════════════════════════════════════════ */
// function DisclaimerSection() {
//   return (
//     <section style={{ padding: "48px 0", background: "#f8f9fa" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//         <div style={{ border: "2px dashed #e5bdbb", borderRadius: 24, padding: 32, background: "#fff" }}>
//           <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
//             <Icon name="policy" style={{ color: "#735c00", fontSize: 40, flexShrink: 0 }} />
//             <div style={{ flex: 1 }}>
//               <h3 className="font-headline" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#CC1B1B" }}>
//                 International Recognition & Transparency
//               </h3>
//               <div className="disclaimer-grid" style={{
//                 display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                 gap: 24, marginBottom: 24,
//               }}>
//                 {[
//                   { icon: "verified_user", label: "NMC Recognised Programs" },
//                   { icon: "public",        label: "Listed in WHO Directory" },
//                   { icon: "language",      label: "English Medium Instruction" },
//                 ].map(item => (
//                   <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                     <Icon name={item.icon} style={{ color: "#9e001f", fontSize: 22 }} />
//                     <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//               <p style={{ fontSize: 12, color: "#5c403f", lineHeight: 1.7 }}>
//                 Disclaimer: Admissions are subject to eligibility criteria including NEET scores for Indian students
//                 and university entrance examinations. All clinical training is conducted at NCTU Hospital under
//                 the guidance of certified practitioners.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════
//    CTA
// ═══════════════════════════════════════════════════════ */
// function CTASection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <section style={{
//         width: "100%", margin: 0, padding: "60px 24px",
//         background: "linear-gradient(135deg, #fff8f8 0%, #ffffff 45%, #fef2f2 100%)",
//         position: "relative", overflow: "hidden",
//       }}>
//         <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "rgba(204,27,27,0.06)" }} />
//         <div style={{ position: "absolute", bottom: -100, left: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(23,27,116,0.05)" }} />

//         <div style={{ width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}>
//           <span style={{
//             display: "inline-block", padding: "10px 18px", borderRadius: 999,
//             background: "#fff1f2", color: "#cc1b1b", fontSize: 12,
//             fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16,
//           }}>2026 Admissions Open</span>

//           <h2 style={{
//             fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 800, lineHeight: 1.15,
//             color: "#111827", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif",
//           }}>
//             Begin Your <span style={{ color: "#CC1B1B" }}>Medical Journey</span> at NCTU
//           </h2>

//           <p style={{ maxWidth: 700, margin: "0 auto 28px", fontSize: 17, lineHeight: 1.8, color: "#4b5563" }}>
//             Secure your MBBS seat in Vietnam with expert guidance on admission, documentation,
//             visa processing, and travel support.
//           </p>

//           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 32 }}>
//             <button onClick={() => setIsModalOpen(true)} style={{
//               background: "#CC1B1B", color: "#fff", padding: "16px 34px", borderRadius: 14,
//               border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer",
//             }}>
//               Apply Now
//             </button>
//             <a href="https://nctu.edu.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
//               <button style={{
//                 background: "#fff", color: "#171b74", padding: "16px 34px", borderRadius: 14,
//                 border: "1.5px solid #dbeafe", fontWeight: 700, fontSize: 15, cursor: "pointer",
//               }}>
//                 Visit University
//               </button>
//             </a>
//           </div>

//           <div className="stats-grid-cta" style={{
//             display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
//             gap: 18, maxWidth: 900, margin: "0 auto",
//           }}>
//             {[
//               { value: "500+", label: "Students Guided" },
//               { value: "100%", label: "Visa Support" },
//               { value: "₹0",   label: "Counselling Fee" },
//             ].map(item => (
//               <div key={item.label} style={{ background: "#f9fafb", padding: 20, borderRadius: 18, border: "1px solid #e5e7eb" }}>
//                 <div style={{ fontSize: 28, fontWeight: 800, color: "#171b74", marginBottom: 6 }}>{item.value}</div>
//                 <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 600 }}>{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   );
// }










import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

// ── Assets ──────────────────────────────────────────────
import NCTUStudent  from "../assets/DJI.jpg";
import HeroImage1   from "../assets/DSC02283.jpg";
import HeroImage2   from "../assets/DSC02256.jpg";
import PharmacyImg  from "../assets/3.jpg";
import GenMedImg    from "../assets/DSC08785.jpg";
import NursingImg   from "../assets/DSC06843.jpg";
import CollegeImg   from "../assets/namCanPic.webp";
// ────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  .nctu-page-container {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height: 100dvh;
    background: #f8f9fa;
    font-family: 'Inter', sans-serif;
    color: #191c1d;
  }

  .nctu-page-container * {
    box-sizing: border-box;
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    display: inline-block;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .font-headline {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  /* ── Hero Carousel ── */
  .hero-slide {
    position: absolute;
    inset: 0;
    transition: opacity 1s ease-in-out;
  }
  .hero-slide.active  { opacity: 1; z-index: 1; }
  .hero-slide.inactive{ opacity: 0; z-index: 0; }

  .carousel-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.8);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }
  .carousel-dot.active {
    background: #fff;
    transform: scale(1.2);
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .teaching-hospital-inner { flex-direction: column !important; gap: 32px !important; }
    .student-life-inner       { flex-direction: column !important; padding: 32px 24px !important; }
    .programs-grid            { grid-template-columns: 1fr !important; }
    .facts-grid               { grid-template-columns: 1fr !important; }
    .facts-grid .fact-span-2  { grid-column: span 1 !important; }
    .fee-layout               { flex-direction: column !important; }
    .fee-table-scroll         { min-width: unset !important; }
  }
  @media (max-width: 480px) {
    .stats-grid-cta   { grid-template-columns: 1fr 1fr !important; }
    .disclaimer-grid  { grid-template-columns: 1fr !important; }
    .departure-grid   { grid-template-columns: 1fr !important; }
  }
`;

const Icon = ({ name, style }) => (
  <span className="material-symbols-outlined" style={style}>{name}</span>
);

export default function NCTUMedical() {
  return (
    <>
      <Header />
      <div className="nctu-page-container">
        <style>{styles}</style>
        <main>
          <HeroSection />
          <UniversityFacts />
          <TeachingHospital />
          <AcademicPrograms />
          <FeeStructure />
          <ServicesSection />
          <StudentLifeCost />
          <DisclaimerSection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO — auto-sliding carousel
═══════════════════════════════════════════════════════ */
const heroSlides = [
  { src: HeroImage1, alt: "White Coat Ceremony – Nam Can Tho University" },
  { src: HeroImage2, alt: "Medical Students Group – White Coat Ceremony 2026" },
];

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section style={{ position: "relative", height: 751, display: "flex", alignItems: "center", overflow: "hidden" }}>
        {heroSlides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === current ? "active" : "inactive"}`}>
            <img src={s.src} alt={s.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.2) 100%)",
            }} />
          </div>
        ))}

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10, width: "100%" }}>
          <div style={{ maxWidth: 640 }}>
            <span style={{
              background: "#fecc00", color: "#6e5700", fontWeight: 700,
              letterSpacing: "0.12em", fontSize: 12, textTransform: "uppercase",
              padding: "8px 16px", borderRadius: 9999, marginBottom: 24, display: "inline-block",
            }}>Study MBBS in Vietnam</span>

            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
              color: "#fff", marginBottom: 24, lineHeight: 1.1,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Your Medical Career at NCTU
            </h1>

            <div style={{ borderLeft: "4px solid #c8102e", paddingLeft: 16, marginBottom: 36 }}>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
                Step into a world-class medical ecosystem. Combining academic rigor with the clinical powerhouse of Nam Can Tho University Hospital.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <button type="button" onClick={() => setIsModalOpen(true)} style={{
                background: "#c8102e", color: "#fff", padding: "16px 32px", borderRadius: 12,
                fontWeight: 700, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8, fontSize: 15,
              }}>
                Apply for Admission <Icon name="trending_flat" style={{ color: "#fff", fontSize: 22 }} />
              </button>
              <button type="button" onClick={() => setIsModalOpen(true)} style={{
                background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                border: "2px solid rgba(255,255,255,0.4)", color: "#fff",
                padding: "16px 32px", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontSize: 15,
              }}>
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 10, zIndex: 10,
        }}>
          {heroSlides.map((_, i) => (
            <button key={i}
              className={`carousel-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   UNIVERSITY FACTS
═══════════════════════════════════════════════════════ */
function UniversityFacts() {
  return (
    <section style={{ padding: "80px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="facts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>

          <div className="fact-span-2" style={{
            gridColumn: "span 2", background: "#fff", padding: 32, borderRadius: 16,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}>
            <div>
              <div style={{ color: "#0369a1", fontSize: 40, display: "block", marginBottom: 16 }}>
                <Icon name="verified" />
              </div>
              <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>
                Established 2013
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.6, textAlign: "justify" }}>
                A decade of excellence in higher education, producing Vietnam's next generation of healthcare leaders.
              </p>
            </div>
          </div>

          <div style={{ background: "#e0f2fe", padding: 32, borderRadius: 16, color: "#0c4a6e", border: "1px solid #bae6fd" }}>
            <div style={{ fontSize: 40, display: "block", marginBottom: 16 }}><Icon name="location_on" /></div>
            <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0c4a6e" }}>Can Tho City</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, textAlign: "justify" }}>
              The heart of the Mekong Delta, offering a serene yet vibrant academic environment.
            </p>
          </div>

          <div style={{ background: "#f0f4f8", padding: 32, borderRadius: 16, color: "#1e293b", border: "1px solid #cbd5e1" }}>
            <div style={{ fontSize: 40, display: "block", marginBottom: 16, color: "#0f172a" }}><Icon name="account_balance" /></div>
            <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>Private University</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, textAlign: "justify" }}>
              Independently governed with massive infrastructure investment and international standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TEACHING HOSPITAL
═══════════════════════════════════════════════════════ */
function TeachingHospital() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="teaching-hospital-inner" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 64 }}>

          <div style={{ flex: "1 1 400px", position: "relative" }}>
            <img
              alt="Nam Can Tho University Campus"
              src={CollegeImg}
              style={{
                borderRadius: 40, boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                width: "100%", height: 500, objectFit: "cover", objectPosition: "center",
                position: "relative", zIndex: 1,
              }}
            />
            <div style={{
              position: "absolute", bottom: -32, right: -32, background: "#fff",
              padding: 24, borderRadius: 24, boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              maxWidth: 280, zIndex: 2,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Icon name="vital_signs" style={{ color: "#9e001f", fontSize: 22 }} />
                <span style={{ fontWeight: 700, fontSize: 17 }}>Direct Clinical Access</span>
              </div>
              <p style={{ fontSize: 12, color: "#5c403f" }}>
                Students start clinical observation in one of the region's most advanced tertiary care centers.
              </p>
            </div>
          </div>

          <div style={{ flex: "1 1 400px" }}>
            <h2 className="font-headline" style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#191c1d", marginBottom: 24, lineHeight: 1.3,
            }}>
              Nam Can Tho University Hospital: Your{" "}
              <span style={{ color: "#9e001f" }}>Clinical Advantage</span>
            </h2>
            <p style={{ fontSize: 18, color: "#5c403f", marginBottom: 32, lineHeight: 1.7, textAlign: "justify" }}>
              Unlike traditional programs, NCTU integrates the university and hospital into one seamless campus. This ensures that every MBBS aspirant gets hands-on experience under the mentorship of senior consultants.
            </p>
            <ul style={{ listStyle: "none", marginBottom: 40, padding: 0 }}>
              {[
                "300+ Bed Multi-Speciality Facility on Campus",
                "Advanced Imaging & Diagnostic Center",
                "24/7 Emergency & Critical Care Training",
                "Cadaver & Simulation Labs",
              ].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <Icon name="check_circle" style={{ color: "#9e001f", fontSize: 22, fontVariationSettings: "'FILL' 1" }} />
                  <span style={{ fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ACADEMIC PROGRAMS
═══════════════════════════════════════════════════════ */
const programs = [
  {
    title: "Pharmacy",
    desc: "Advanced pharmaceutical sciences focusing on research and clinical pharmacology.",
    img: PharmacyImg,
  },
  {
    title: "General Medicine",
    desc: "6-year comprehensive MBBS curriculum with integrated clinical rotations.",
    img: GenMedImg,
  },
  {
    title: "Nursing",
    desc: "Focusing on compassionate care, patient safety, and community health management.",
    img: NursingImg,
  },
];

function AcademicPrograms() {
  const [hovered, setHovered] = useState(null);
  return (
    <section style={{ padding: "80px 0", background: "#f3f4f5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: 64 }}>
        <h2 className="font-headline" style={{
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
          marginBottom: 16, color: "#CC1B1B",
        }}>
          World-Class Programs
        </h2>
        <p style={{ color: "#5c403f", maxWidth: 480, margin: "0 auto" }}>
          Diverse medical streams designed to meet global healthcare demands.
        </p>
      </div>

      <div className="programs-grid" style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32,
      }}>
        {programs.map((prog, i) => (
          <div key={prog.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "#fff", padding: 8, borderRadius: 32,
              transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
              transition: "transform 0.3s ease", cursor: "pointer",
            }}
          >
            <img
              alt={prog.title}
              src={prog.img}
              style={{
                width: "100%", height: 192, objectFit: "cover",
                objectPosition: "center top", borderRadius: 28, marginBottom: 24,
              }}
            />
            <div style={{ padding: "0 24px 32px" }}>
              <h3 className="font-headline" style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                {prog.title}
              </h3>
              <p style={{ color: "#5c403f", fontSize: 14, marginBottom: 24 }}>{prog.desc}</p>
              <a href="https://nctu.edu.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button style={{
                  width: "100%", padding: "12px 0", borderRadius: 12,
                  border: "1.5px solid #e5bdbb",
                  color: hovered === i ? "#fff" : "#9e001f",
                  background: hovered === i ? "#9e001f" : "transparent",
                  fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease", fontSize: 14,
                }}>
                  Course Details
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FEE STRUCTURE  ← NEW SECTION (from brochure PDF)
═══════════════════════════════════════════════════════ */
function FeeStructure() {
  // 12 semesters × $2,625 each + $1,500 registration = $33,000 grand total
  const semesterFees = [
    { year: "University Registration", sem: "—",       usd: "$1,500",  inr: "₹1,30,000" },
    { year: "1st Year",                sem: "1st Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "",                        sem: "2nd Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "2nd Year",                sem: "3rd Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "",                        sem: "4th Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "3rd Year",                sem: "5th Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "",                        sem: "6th Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "4th Year",                sem: "7th Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "",                        sem: "8th Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "5th Year",                sem: "9th Sem",  usd: "$2,625",  inr: "₹2,40,000" },
    { year: "",                        sem: "10th Sem", usd: "$2,625",  inr: "₹2,40,000" },
    { year: "6th Year",                sem: "11th Sem", usd: "$2,625",  inr: "₹2,40,000" },
    { year: "",                        sem: "12th Sem", usd: "$2,625",  inr: "₹2,40,000" },
  ];

  const departurePayments = [
    { label: "University Registration Fee", amount: "₹1,30,000" },
    { label: "Processing Fee",              amount: "₹2,63,000" },
    { label: "Tuition Fee for 1st Sem",     amount: "₹2,40,000" },
    { label: "Hostel Fee",                  amount: "₹1,60,000" },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", background: "#fecc00", color: "#6e5700",
            fontSize: 12, fontWeight: 700, padding: "8px 16px",
            borderRadius: 9999, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase",
          }}>USA Internship Opportunity Available</span>
          <h2 className="font-headline" style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
            color: "#191c1d", marginBottom: 12,
          }}>
            Tuition <span style={{ color: "#CC1B1B" }}>Fee Structure</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Transparent semester-wise fee breakdown for the full 6-year MBBS program. USD is fixed; INR is approximate reference only.
          </p>
        </div>

        {/* Main layout: table left, departure right */}
        <div className="fee-layout" style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* ── Fee Table ── */}
          <div style={{ flex: "1 1 420px", background: "#f8fafc", borderRadius: 16, overflow: "hidden", border: "1px solid #e2e8f0" }}>
            {/* Table Header */}
            <div style={{ background: "#9e001f", padding: "20px 24px" }}>
              <h3 className="font-headline" style={{ color: "#fff", fontWeight: 700, fontSize: 15, margin: 0 }}>
                Fees Per Semester — 6 Year Program (12 Semesters)
              </h3>
            </div>

            <div style={{ overflowX: "auto" }}>
              <div className="fee-table-scroll" style={{ minWidth: 420 }}>
                {/* Column Headers */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  background: "#fff5f5", padding: "12px 24px",
                  fontSize: 11, fontWeight: 700, color: "#9e001f", textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  <span>Year</span><span>Semester</span><span>USD</span><span>INR (Approx)</span>
                </div>

                {semesterFees.map((row, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    padding: "10px 24px",
                    background: i === 0 ? "#fff" : i % 4 < 2 ? "#fff" : "#fafafa",
                    borderBottom: "1px solid #f1f5f9",
                    alignItems: "center",
                  }}>
                    <span style={{ fontWeight: row.year ? 700 : 400, fontSize: 13, color: row.year ? "#0f172a" : "transparent" }}>
                      {row.year || "—"}
                    </span>
                    <span style={{ fontSize: 13, color: "#475569" }}>{row.sem}</span>
                    <span style={{ fontWeight: 700, color: "#9e001f", fontSize: 13 }}>{row.usd}</span>
                    <span style={{ fontSize: 13, color: "#64748b" }}>{row.inr}</span>
                  </div>
                ))}

                {/* Grand Total Row */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  padding: "16px 24px", background: "#9e001f",
                }}>
                  <span style={{ fontWeight: 800, color: "#fff", fontSize: 14, gridColumn: "span 2" }}>Grand Total</span>
                  <span style={{ fontWeight: 800, color: "#fecc00", fontSize: 14 }}>$33,000</span>
                  <span style={{ fontWeight: 800, color: "#fecc00", fontSize: 14 }}>₹30,10,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Departure Payment Box */}
            <div style={{
              background: "#fff8e1", border: "1px solid #fde68a",
              borderRadius: 16, padding: "28px",
            }}>
              <h3 className="font-headline" style={{ fontWeight: 700, fontSize: 15, color: "#78350f", marginBottom: 4 }}>
                Payment Before Departure from India
              </h3>
              <p style={{ color: "#92400e", fontSize: 12, marginBottom: 20 }}>One time charges for total 6 years</p>

              {departurePayments.map((item, i) => (
                <div key={item.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0",
                  borderBottom: i < departurePayments.length - 1 ? "1px solid rgba(251,191,36,0.3)" : "none",
                }}>
                  <span style={{ color: "#92400e", fontSize: 13 }}>{item.label}</span>
                  <span style={{ fontWeight: 700, color: "#9e001f", fontSize: 14 }}>{item.amount}</span>
                </div>
              ))}

              {/* Total */}
              <div style={{
                marginTop: 16, background: "#9e001f", borderRadius: 12,
                padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Grand Total</span>
                <span style={{ color: "#fecc00", fontWeight: 800, fontSize: 22 }}>₹7,93,000</span>
              </div>
            </div>

            {/* Hostel & Food Box */}
            <div style={{
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              borderRadius: 16, padding: "28px",
            }}>
              <Icon name="hotel" style={{ color: "#15803d", fontSize: 32, display: "block", marginBottom: 12 }} />
              <h3 className="font-headline" style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                Food & Accommodation
              </h3>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#15803d", marginBottom: 4 }}>$1,800</div>
              <div style={{ color: "#64748b", fontSize: 12, marginBottom: 12 }}>Approx ₹1,67,000 per year</div>
              <p style={{ color: "#166534", fontSize: 13, lineHeight: 1.6 }}>
                Separate air-conditioned hostel for Boys and Girls. Authentic North, South & North East Indian cuisine available daily.
              </p>
            </div>

            {/* Processing Fee highlight */}
            <div style={{
              background: "linear-gradient(135deg, #9e001f 0%, #c8102e 100%)",
              borderRadius: 16, padding: "24px 28px", textAlign: "center",
            }}>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
                Initial Processing Fee (1st Year Only)
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#fecc00" }}>₹2,63,000</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 4 }}>Before departure from India</div>
            </div>

          </div>
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 12, marginTop: 28 }}>
          ★ USD is fixed; INR is for approximate reference only. Fees are non-refundable under any circumstances once the admission process is completed.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICES SECTION
═══════════════════════════════════════════════════════ */
function ServicesSection() {
  const services = [
    "Application Form",
    "Registration Fee",
    "Immigration Clearance",
    "Legalization from MEA, India",
    "Document Support",
    "Visa Stamping – Study Visa 6 Years",
    "NMC Eligibility Certificate",
    "6.5 Years Local Support & Guidance",
    "Medical Clearance",
    "NEXT/FMGE/USMLE & PLAB Coaching (1st Yr)",
    "One Way Flight Ticket",
    "Consularization by Embassy of Vietnam",
    "Medical Insurance Processing",
    "North/South & North East Indian Food",
    "Student Caretaker/Manager/Warden",
    "Agreement Undertaking by Students & Parents",
  ];

  return (
    <section style={{ padding: "80px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="font-headline" style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
            marginBottom: 12, color: "#CC1B1B",
          }}>
            Complete Services by Aswad Overseas
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            End-to-end support from India to Vietnam — everything handled for you.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
        }}>
          {services.map(service => (
            <div key={service} style={{
              background: "#fff", borderRadius: 12, padding: "14px 18px",
              display: "flex", alignItems: "flex-start", gap: 12,
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}>
              <Icon name="check_circle" style={{ color: "#9e001f", fontSize: 20, flexShrink: 0, marginTop: 2, fontVariationSettings: "'FILL' 1" }} />
              <span style={{ color: "#374151", fontSize: 13, fontWeight: 500, lineHeight: 1.5 }}>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   STUDENT LIFE & COST
═══════════════════════════════════════════════════════ */
function StudentLifeCost() {
  return (
    <section style={{ padding: "96px 0", backgroundColor: "#f8f9fb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="student-life-inner" style={{
          background: "#ffffff", borderRadius: 24, padding: "64px",
          display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48,
          overflow: "hidden", position: "relative",
          border: "1px solid #e5e7eb", boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
        }}>
          <div style={{ flex: "1 1 420px", position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-block", background: "#eef2ff", color: "#171b74",
              fontSize: 13, fontWeight: 700, padding: "8px 14px",
              borderRadius: 999, marginBottom: 20, letterSpacing: "0.04em", textTransform: "uppercase",
            }}>Student Lifestyle</span>

            <h2 style={{
              fontSize: "clamp(2rem, 3vw, 2.7rem)", fontWeight: 800, marginBottom: 24,
              fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#111827", lineHeight: 1.2,
            }}>
              Quality Education, <span style={{ color: "#CC1B1B" }}>Affordable Living</span>
            </h2>

            <p style={{ fontSize: 16, color: "#4b5563", marginBottom: 40, lineHeight: 1.8, maxWidth: 520 }}>
              Can Tho offers a significantly lower cost of living compared to Ho Chi Minh City or Hanoi.
              Students enjoy a comfortable lifestyle with affordable accommodation, fresh local food,
              and a peaceful academic environment.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { value: "40% Less", label: "Living Costs than HCM" },
                { value: "$200",    label: "Avg. Monthly Expense" },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: "#f9fafb", border: "1px solid #e5e7eb",
                  padding: 24, borderRadius: 18,
                }}>
                  <span style={{ fontSize: 28, fontWeight: 800, display: "block", marginBottom: 8, color: "#171b74" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", fontWeight: 600 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: "1 1 320px", position: "relative", height: 400, borderRadius: 22, overflow: "hidden", boxShadow: "0 16px 35px rgba(0,0,0,0.08)" }}>
            <img alt="Student Life Can Tho" src={NCTUStudent}
              style={{ position: "absolute", inset: 0, width: "100%", height: "140%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   DISCLAIMER
═══════════════════════════════════════════════════════ */
function DisclaimerSection() {
  return (
    <section style={{ padding: "48px 0", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ border: "2px dashed #e5bdbb", borderRadius: 24, padding: 32, background: "#fff" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
            <Icon name="policy" style={{ color: "#735c00", fontSize: 40, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <h3 className="font-headline" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#CC1B1B" }}>
                International Recognition & Transparency
              </h3>
              <div className="disclaimer-grid" style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24, marginBottom: 24,
              }}>
                {[
                  { icon: "verified_user", label: "NMC Recognised Programs" },
                  { icon: "public",        label: "Listed in WHO Directory" },
                  { icon: "language",      label: "English Medium Instruction" },
                  { icon: "biotech",       label: "USMLE & FMGE Coaching" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Icon name={item.icon} style={{ color: "#9e001f", fontSize: 22 }} />
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#5c403f", lineHeight: 1.7 }}>
                Disclaimer: Admissions are subject to eligibility criteria including NEET scores (2024/2025/2026) for Indian students
                and university entrance examinations. All clinical training is conducted at NCTU Hospital under
                the guidance of certified practitioners. Fees are non-refundable under any circumstances once the admission process is completed.
                USD is fixed; INR is for approximate reference only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════ */
function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section style={{
        width: "100%", margin: 0, padding: "60px 24px",
        background: "linear-gradient(135deg, #fff8f8 0%, #ffffff 45%, #fef2f2 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "rgba(204,27,27,0.06)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(23,27,116,0.05)" }} />

        <div style={{ width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-block", padding: "10px 18px", borderRadius: 999,
            background: "#fff1f2", color: "#cc1b1b", fontSize: 12,
            fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16,
          }}>2026 Admissions Open</span>

          <h2 style={{
            fontSize: "clamp(2rem,4vw,3.3rem)", fontWeight: 800, lineHeight: 1.15,
            color: "#111827", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Begin Your <span style={{ color: "#CC1B1B" }}>Medical Journey</span> at NCTU
          </h2>

          <p style={{ maxWidth: 700, margin: "0 auto 28px", fontSize: 17, lineHeight: 1.8, color: "#4b5563" }}>
            Secure your MBBS seat in Vietnam with expert guidance on admission, documentation,
            visa processing, and travel support.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            <button onClick={() => setIsModalOpen(true)} style={{
              background: "#CC1B1B", color: "#fff", padding: "16px 34px", borderRadius: 14,
              border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer",
            }}>
              Apply Now
            </button>
            <a href="https://nctu.edu.vn/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button style={{
                background: "#fff", color: "#171b74", padding: "16px 34px", borderRadius: 14,
                border: "1.5px solid #dbeafe", fontWeight: 700, fontSize: 15, cursor: "pointer",
              }}>
                Visit University
              </button>
            </a>
          </div>

          <div className="stats-grid-cta" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 18, maxWidth: 900, margin: "0 auto",
          }}>
            {[
              { value: "150+", label: "Indian Students" },
              { value: "100%", label: "Visa Support" },
              { value: "₹0",   label: "Counselling Fee" },
              { value: "6.5 Yrs", label: "Local Support" },
            ].map(item => (
              <div key={item.label} style={{ background: "#f9fafb", padding: 20, borderRadius: 18, border: "1px solid #e5e7eb" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#171b74", marginBottom: 6 }}>{item.value}</div>
                <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
