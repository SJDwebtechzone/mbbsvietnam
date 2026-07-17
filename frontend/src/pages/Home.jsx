// import { useEffect, useState, useRef } from "react";
// import EnquiryModal from "../components/EnquiryModal";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Header from "../components/Header";
// import UniversityCard from "../components/UniversityCard";
// import Footer from "../components/Footer";
// import CTA from "../components/CTA_section";

// // ── Hero slides ──
// import Hero1 from "../assets/hero1.webp";
// import Hero2 from "../assets/hero2.webp";
// import Hero3 from "../assets/hero31.webp";

// // ── University card images (uploaded assets) ──
// import ImgUHS   from "../assets/uclg1.jpeg";
// import ImgNCTU  from "../assets/123.jpg";
// import ImgPCTU  from "../assets/phan.webp";
// import ImgBMTMU from "../assets/uclg4.jpeg";
// import ImgCTU   from "../assets/canTho.webp";
// import ImgDNU   from "../assets/dnu.jpeg";


// const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";
// const API = `${BASE_URL}/universities`;

// // ── Desired display order ──
// const SLUG_ORDER = [
//   "university-of-health-and-sciences",
//   "nam-can-tho-university",
//   "phan-chau-trinh-university",
//   "buon-ma-thuot-medical-university",
//   "can-tho-university",
//   "dai-nam-university",
// ];

// // ── Local image map — always use these for cards ──
// const LOCAL_IMAGE_MAP = {
//   "university-of-health-and-sciences": ImgUHS,
//   "nam-can-tho-university":            ImgNCTU,
//   "phan-chau-trinh-university":        ImgPCTU,
//   "buon-ma-thuot-medical-university":  ImgBMTMU,
//   "can-tho-university":                ImgCTU,
//   "dai-nam-university":                ImgDNU,
// };

// // ── Fallback data ──
// const FALLBACK_UNIVERSITIES = [
//   {
//     id: 1,
//     slug: "university-of-health-and-sciences",
//     name: " Health Sciences-Vietnam National University",
//     short_name: "UHS",
//     fee: "26 Lakhs",
//     image: ImgUHS,
//     highlights: ["NMC Approved", "Top Ranked", "English Medium", "Modern Hospitals"],
//   },
//   {
//     id: 2,
//     slug: "nam-can-tho-university",
//     name: "Nam Can Tho University",
//     short_name: "NCTU",
//     fee: "22 Lakhs",
//     image: ImgNCTU,
//     highlights: ["NMC Approved", "Affordable Fees", "English Medium", "500+ Indian Students"],
//   },
//   {
//     id: 3,
//     slug: "phan-chau-trinh-university",
//     name: "Phan Chau Trinh University",
//     short_name: "PCTU",
//     fee: "23 Lakhs",
//     image: ImgPCTU,
//     highlights: ["NMC Approved", "Central Vietnam", "English Medium", "Indian Food"],
//   },
//   {
//     id: 4,
//     slug: "buon-ma-thuot-medical-university",
//     name: "Buon Ma Thuot Medical University",
//     short_name: "BMTMU",
//     fee: "20 Lakhs",
//     image: ImgBMTMU,
//     highlights: ["NMC Approved", "Low Cost", "English Medium", "Good Infrastructure"],
//   },
//   {
//     id: 5,
//     slug: "can-tho-university",
//     name: "Can Tho University",
//     short_name: "CTU",
//     fee: "24 Lakhs",
//     image: ImgCTU,
//     highlights: ["NMC Approved", "Established", "English Medium", "Strong Faculty"],
//   },
//   {
//     id: 6,
//     slug: "dai-nam-university",
//     name: "Dai Nam University",
//     short_name: "DNU",
//     fee: "21 Lakhs",
//     image: ImgDNU,
//     highlights: ["NMC Approved", "Modern Campus", "English Medium", "Career Support"],
//   },
// ];

// const heroStats = [
//   { num: 960, suffix: "+", label: "Students placed" },
//   { num: 7,   suffix: "",  label: "Top universities" },
//   { num: 25,  prefix: "₹", suffix: "L", label: "Average Tuition Fees" },
//   { num: 98,  suffix: "%", label: "Visa success" },
// ];

// const features = [
//   { icon: "🎓", title: "Expert Guidance", desc: "Personalized counselling to choose the best university for your MBBS journey." },
//   { icon: "🏥", title: "Trusted Universities", desc: "Direct partnerships with top NMC-approved medical universities in Vietnam." },
//   { icon: "💰", title: "Transparent Fees", desc: "No hidden costs. Clear and honest fee structure for students and parents." },
//   { icon: "✈️", title: "End-to-End Support", desc: "From admission to visa, travel, and accommodation – we handle everything." },
//   { icon: "🍛", title: "Indian Food & Hostel", desc: "Comfortable stay with Indian food options for a home-like experience." },
//   { icon: "📞", title: "24/7 Support", desc: "Dedicated support team for students and parents at every step." },
// ];

// function normalizeHighlights(highlights) {
//   if (Array.isArray(highlights)) return highlights;
//   if (typeof highlights === "string") {
//     try {
//       const parsed = JSON.parse(highlights);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch { return []; }
//   }
//   return [];
// }

// function resolveImage(image) {
//   if (!image) return null;
//   if (image.startsWith("http://") || image.startsWith("https://")) return image;
//   const normalized = image.startsWith("/") ? image : `/${image}`;
//   return `${BASE_URL}${normalized}`;
// }

// // ── Merge API rows — local asset images always win ──
// function buildFinalList(apiRows) {
//   return SLUG_ORDER.map((slug) => {
//     const fallback = FALLBACK_UNIVERSITIES.find((f) => f.slug === slug);

//     const apiRow = apiRows.find(
//       (u) =>
//         u.slug === slug ||
//         (u.name || "").toLowerCase().replace(/[^a-z0-9]/g, "-").includes(
//           slug.split("-").slice(0, 2).join("-")
//         )
//     );

//     if (!apiRow) return { ...fallback };

//     return {
//       ...fallback,
//       ...apiRow,
//       id: apiRow.id || fallback.id,
//       slug: slug,
//       name: fallback.name,
//       short_name: apiRow.short_name || fallback.short_name,
//       fee: apiRow.fee || fallback.fee,
//       // ✅ Always use local asset image — API image ignored for cards
//       image: LOCAL_IMAGE_MAP[slug],
//       highlights: normalizeHighlights(apiRow.highlights).length
//         ? normalizeHighlights(apiRow.highlights)
//         : fallback.highlights,
//     };
//   });
// }

// // ── Count-up hook ──
// function useCountUp(target, duration = 1800) {
//   const [count, setCount] = useState(0);
//   const started = useRef(false);
//   useEffect(() => {
//     if (started.current) return;
//     started.current = true;
//     let startTime = null;
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * target));
//       if (progress < 1) requestAnimationFrame(step);
//       else setCount(target);
//     };
//     requestAnimationFrame(step);
//   }, [target, duration]);
//   return count;
// }

// function StatItem({ num, prefix = "", suffix = "", label }) {
//   const count = useCountUp(num, 1800);
//   return (
//     <div className="text-center">
//       <div
//         className="text-base sm:text-xl md:text-2xl font-extrabold leading-none"
//         style={{ color: "#F5C518", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
//       >
//         {prefix}{count}{suffix}
//       </div>
//       <div
//         className="text-[9px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-widest mt-1 text-white"
//         style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
//       >
//         {label}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const [universities, setUniversities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     console.log("🔍 Fetching from:", API);
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 12000);

//     fetch(API, { signal: controller.signal })
//       .then(async (res) => {
//         const text = await res.text();
//         console.log("📡 Status:", res.status, "| Preview:", text.slice(0, 300));
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         let data;
//         try { data = JSON.parse(text); } catch { throw new Error("Invalid JSON from server"); }
//         if (!Array.isArray(data)) throw new Error("Response is not an array: " + typeof data);
//         console.log(`✅ ${data.length} universities received`);
//         return data;
//       })
//       .then((apiData) => {
//         const final = buildFinalList(apiData);
//         console.log("🗂 Final order:", final.map((u) => u.name));
//         setUniversities(final);
//       })
//       .catch((err) => {
//         console.error("❌ API error:", err.message, "→ using fallback");
//         setUniversities(FALLBACK_UNIVERSITIES);
//       })
//       .finally(() => {
//         clearTimeout(timeoutId);
//         setLoading(false);
//       });

//     return () => { clearTimeout(timeoutId); controller.abort(); };
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-white font-sans overflow-x-hidden">
//         <Header />
//         <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

//         <section className="relative">

//           {/* ══ HERO SWIPER ══ */}
//           <div className="relative">
//             <Swiper
//               modules={[Pagination, Autoplay]}
//               pagination={{ 
//                 clickable: true,
//                 dynamicBullets: true,
//               }}
//               autoplay={{ delay: 5000, disableOnInteraction: false }}
//               loop={true}
//               className="w-full h-[500px] sm:h-[550px] md:h-[600px]"
//             >
//               {/* Slide 1 */}
//               <SwiperSlide>
//                 <div className="relative w-full h-full">
//                   <img src={Hero1} alt="Vietnam" className="w-full h-full object-cover object-center" />
//                   <div className="absolute inset-0 bg-black/60" />
//                   <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)" }} />
//                   <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />
//                   <div className="absolute inset-0 flex items-center justify-center pb-16 sm:pb-20 px-4">
//                     <div className="max-w-3xl text-center">
//                       <div className="flex justify-center mb-3 sm:mb-5">
//                         <span
//                           className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-yellow-400/60 whitespace-normal text-center"
//                           style={{ background: "rgba(245,197,24,0.12)", color: "#F5C518", backdropFilter: "blur(8px)", boxShadow: "0 0 20px rgba(245,197,24,0.15)" }}
//                         >
//                           <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
//                           For Indian Students · After 12th · NEET Accepted
//                         </span>
//                       </div>
//                       <h1
//                         className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-3 leading-tight"
//                         style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)" }}
//                       >
//                         Dreaming of MBBS?
//                       </h1>
//                       <h2
//                         className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
//                         style={{ color: "#FFFFFF", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
//                       >
//                         Vietnam Makes It Possible!
//                       </h2>
//                       <div className="hidden sm:flex items-center justify-center gap-3 mb-6">
//                         <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/60" />
//                         <span className="text-yellow-400/80 text-xs">✦</span>
//                         <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/60" />
//                       </div>
//                       <p
//                         className="text-xs sm:text-base text-white font-medium mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border border-white/20 inline-block"
//                         style={{ background: "rgba(0,0,0,0.50)", backdropFilter: "blur(10px)", textShadow: "0 1px 6px rgba(0,0,0,0.8)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
//                       >
//                         ✅ Direct admission · ✅ No donation · ✅ No IELTS required
//                       </p>
//                       <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
//                         <button
//                           type="button"
//                           onClick={() => setIsModalOpen(true)}
//                           className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
//                           style={{ background: "linear-gradient(135deg, #CC1B1B 0%, #a01515 100%)", boxShadow: "0 4px 20px rgba(204,27,27,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" }}
//                         >
//                           Apply Now →
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => setIsModalOpen(true)}
//                           className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-200 hover:scale-105"
//                           style={{ background: "linear-gradient(135deg, #F5C518 0%, #d4a800 10%)", color: "#1a0e00", boxShadow: "0 4px 20px rgba(245,197,24,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" }}
//                         >
//                           📄 Download Brochure
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>

//               {/* Slide 2 */}
//               <SwiperSlide>
//                 <div className="relative w-full h-full overflow-hidden">
//                   <img src={Hero2} alt="Vietnam" className="w-full h-full object-cover object-center" />
//                   <div className="absolute inset-0 bg-black/60" />
//                   <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)" }} />
//                   <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />
//                   <div className="absolute inset-0 flex items-center justify-center pb-16 sm:pb-20 px-4">
//                     <div className="max-w-2xl text-center px-4">
//                       <div className="flex justify-center mb-3 sm:mb-5">
//                         <span
//                           className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-white/30 whitespace-normal text-center"
//                           style={{ background: "rgba(255,255,255,0.08)", color: "#FFF5E0", backdropFilter: "blur(8px)" }}
//                         >
//                           <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//                           MBBS in Vietnam · 2026 Admissions
//                         </span>
//                       </div>
//                       <h1
//                         className="font-serif text-3xl sm:text-5xl font-extrabold text-[#F5C518] leading-tight mb-3 sm:mb-4"
//                         style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)" }}
//                       >
//                         Start Your Medical Career <br />
//                         <span style={{ color: "#FFF5E0", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
//                           with Globally Recognized MBBS
//                         </span>
//                       </h1>
//                       <div className="hidden sm:flex items-center justify-center gap-3 mb-5">
//                         <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
//                         <span className="text-white/50 text-xs">✦</span>
//                         <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
//                       </div>
//                       <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#FFF5E0", textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}>
//                         Study in top NMC-approved universities with advanced hospitals,
//                         experienced faculty, and affordable fees for Indian students.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>

//               {/* Slide 3 */}
//               <SwiperSlide>
//                 <div className="relative w-full h-full">
//                   <img src={Hero3} alt="MBBS in Vietnam" className="w-full h-full object-cover object-center" />
//                   <div className="absolute inset-0 bg-black/60" />
//                   <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)" }} />
//                   <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />
//                   <div className="absolute inset-0 flex items-center justify-center px-4 pb-16 sm:pb-20">
//                     <div className="max-w-5xl text-center">
//                       <div className="flex justify-center mb-3 sm:mb-5">
//                         <span
//                           className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-white/30 whitespace-normal text-center"
//                           style={{ background: "rgba(255,255,255,0.08)", color: "#FFF5E0", backdropFilter: "blur(8px)" }}
//                         >
//                           <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//                           NMC Approved · Indian Curriculum · Global Career
//                         </span>
//                       </div>
//                       <h1
//                         className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 sm:mb-3 text-white"
//                         style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)" }}
//                       >
//                         Study MBBS in Vietnam
//                       </h1>
//                       <h2
//                         className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5"
//                         style={{ color: "#FFF5E0", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
//                       >
//                         Affordable • Recognized • Career-Focused
//                       </h2>
//                       <div className="hidden sm:flex items-center justify-center gap-3 mb-6">
//                         <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
//                         <span className="text-white/50 text-xs">✦</span>
//                         <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
//                       </div>
//                       <p
//                         className="text-xs sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
//                         style={{ color: "#FFF5E0", textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
//                       >
//                         Get direct admission to top NMC-approved universities with modern
//                         hospitals, Indian curriculum support, and global career opportunities.
//                       </p>
//                       <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
//                         <button
//                           onClick={() => setIsModalOpen(true)}
//                           className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
//                           style={{ background: "linear-gradient(135deg, #CC1B1B 0%, #a01515 100%)", boxShadow: "0 4px 20px rgba(204,27,27,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" }}
//                         >
//                           Apply Now →
//                         </button>
//                         <a
//                           href="https://wa.me/919003420057?text=Hi%20I%20am%20interested%20in%20MBBS%20in%20Vietnam"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-200 hover:scale-105 text-center"
//                           style={{ background: "linear-gradient(135deg, #F5C518 0%, #d4a800 10%)", color: "#1a0e00", boxShadow: "0 4px 20px rgba(245,197,24,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" }}
//                         >
//                           Chat on WhatsApp
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>

//             {/* ══ STATS BAR - Responsive ══ */}
//             <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-center gap-4 sm:gap-8 md:gap-16 px-4 py-3 sm:py-4 flex-wrap">
//               {heroStats.map((s, i) => (
//                 <StatItem key={i} num={s.num} prefix={s.prefix} suffix={s.suffix} label={s.label} />
//               ))}
//             </div>
//           </div>

//           {/* ══ UNIVERSITIES SECTION - Responsive ══ */}
//           <section className="mt-16 px-4 sm:px-6">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#CC1B1B] mb-3 sm:mb-4">
//               Top Medical Universities in Vietnam
//             </h1>
//             <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg max-w-5xl mx-auto mb-8 sm:mb-12 px-2">
//               Vietnam offers top-quality medical education with globally recognized universities,
//               modern hospitals, and English-medium MBBS programs designed for international students.
//             </p>

//             {/* Loading skeletons - Responsive */}
//             {loading && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-2">
//                 {[1, 2, 3, 4, 5, 6].map((i) => (
//                   <div key={i} className="h-72 bg-gray-200 rounded-2xl animate-pulse" />
//                 ))}
//               </div>
//             )}

//             {/* University Cards - Responsive Grid */}
//             {!loading && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-2">
//                 {universities.map((uni) => (
//                   <UniversityCard
//                     key={uni.slug || uni.id}
//                     onOpenEnquiry={() => setIsModalOpen(true)}
//                     university={{
//                       id: uni.id,
//                       slug: uni.slug,
//                       name: uni.name,
//                       shortName: uni.short_name,
//                       fee: uni.fee,
//                       image: uni.image,
//                       highlights: uni.highlights,
//                     }}
//                   />
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* ══ WHY CHOOSE US - Responsive ══ */}
//           <section className="py-12 sm:py-16 mt-12 sm:mt-16 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 text-center">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CC1B1B]">Why Choose Us</h2>
//               <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3 mb-6 sm:mb-10">Your trusted partner for MBBS in Vietnam</p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//                 {features.map((item, i) => (
//                   <div
//                     key={i}
//                     className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
//                   >
//                     <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
//                     <h3 className="text-base sm:text-lg font-semibold text-[#1a2f5e] mb-2">{item.title}</h3>
//                     <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//         </section>
//       </div>

//       <CTA />
//       <Footer />
//     </>
//   );
// }



import { useEffect, useState, useRef } from "react";
import EnquiryModal from "../components/EnquiryModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import UniversityCard from "../components/UniversityCard";
import Footer from "../components/Footer";
import CTA from "../components/CTA_section";
import SEO from "../components/SEO";

// ── Hero slides ──
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero31.webp";

// ── University card images ──
import ImgUHS   from "../assets/uclg1.jpeg";
import ImgNCTU  from "../assets/123.jpg";
import ImgBMTMU from "../assets/uclg4.jpeg";
import ImgCTU   from "../assets/canTho.webp";
import ImgPCTU  from "../assets/phan.webp";
import ImgDNU   from "../assets/dnu.jpeg";
import DONG from "../assets/donga1.jfif";
import ImgUCL from "../assets/cuu_long.jpg";

const heroStats = [
  { num: 960, suffix: "+", label: "Students placed" },
  { num: 8,   suffix: "",  label: "Top universities" },
  { num: 25,  prefix: "₹", suffix: "L", label: "Average Tuition Fees" },
  { num: 98,  suffix: "%", label: "Visa success" },
];

const features = [
  { icon: "🎓", title: "Expert Guidance", desc: "Personalized counselling to choose the best university for your MBBS journey." },
  { icon: "🏥", title: "Trusted Universities", desc: "Direct partnerships with top NMC-approved medical universities in Vietnam." },
  { icon: "💰", title: "Transparent Fees", desc: "No hidden costs. Clear and honest fee structure for students and parents." },
  { icon: "✈️", title: "End-to-End Support", desc: "From admission to visa, travel, and accommodation – we handle everything." },
  { icon: "🍛", title: "Indian Food & Hostel", desc: "Comfortable stay with Indian food options for a home-like experience." },
  { icon: "📞", title: "24/7 Support", desc: "Dedicated support team for students and parents at every step." },
];

// ── FIXED ORDER — No API shuffle, always renders in this exact order ──
const UNIVERSITIES = [
  {
    id: 1,
    slug: "university-of-health-and-sciences",
    name: "University of Health Sciences - Vietnam National University",
    short_name: "UHS",
    fee: "26 Lakhs",
    image: ImgUHS,
    highlights: ["NMC Approved", "Top Ranked", "English Medium", "Modern Hospitals"],
  },
  {
    id: 2,
    slug: "nam-can-tho-university",
    name: "Nam Can Tho University",
    short_name: "NCTU",
    fee: "22 Lakhs",
    image: ImgNCTU,
    highlights: ["NMC Approved", "Affordable Fees", "English Medium", "500+ Indian Students"],
  },
  {
    id: 3,
    slug: "buon-ma-thuot-medical-university",
    name: "Buon Ma Thuot Medical University",
    short_name: "BMTMU",
    fee: "20 Lakhs",
    image: ImgBMTMU,
    highlights: ["NMC Approved", "Low Cost", "English Medium", "Good Infrastructure"],
  },
  {
    id: 8,
    slug: "cuu-long-university",
    name: "Cuu Long University",
    short_name: "UCL",
    fee: "27 Lakhs",
    image: ImgUCL,
    highlights: ["NMC Approved", "Attached Hospital", "English Medium", "Vinh Long City"],
  },
  {
    id: 4,
    slug: "can-tho-university",
    name: "Can Tho University of Medicine and Pharmacy",
    short_name: "CTU",
    fee: "24 Lakhs",
    image: ImgCTU,
    highlights: ["NMC Approved", "Established", "English Medium", "Strong Faculty"],
  },
  {
    id: 5,
    slug: "phan-chau-trinh-university",
    name: "Phan Chau Trinh University",
    short_name: "PCTU",
    fee: "23 Lakhs",
    image: ImgPCTU,
    highlights: ["NMC Approved", "Central Vietnam", "English Medium", "Indian Food"],
  },
  {
    id: 6,
    slug: "dai-nam-university",
    name: "Dai Nam University",
    short_name: "DNU",
    fee: "21 Lakhs",
    image: ImgDNU,
    highlights: ["NMC Approved", "Modern Campus", "English Medium", "Career Support"],
  },
  {
    id: 7,
    slug: "dong-a-university",
    name: "Dong A University",
    short_name: "DAU",
    fee: "21 Lakhs",
    image: DONG,
    highlights: ["NMC Approved", "Modern Campus", "English Medium", "Career Support"],
  },
];

// ── Count-up hook ──
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return count;
}

function StatItem({ num, prefix = "", suffix = "", label }) {
  const count = useCountUp(num, 1800);
  return (
    <div className="text-center">
      <div
        className="text-base sm:text-xl md:text-2xl font-extrabold leading-none"
        style={{ color: "#F5C518", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        className="text-[9px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-widest mt-1 text-white"
        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
          <SEO
        title="MBBS in Vietnam 2026 | NMC Recognised Universities | VietnamBBS"
        description="Study MBBS in Vietnam at NMC recognised universities. Fees starting from ₹3.5 lakhs. English medium, WHO listed, 960+ Indian students. Apply for 2026 admissions."
        keywords="MBBS in Vietnam, study medicine Vietnam, NMC recognised Vietnam universities, MBBS abroad India, Vietnam medical colleges"
        canonical="https://www.vietnambbs.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VietnamBBS - MBBS in Vietnam",
          "url": "https://www.vietnambbs.com",
          "logo": "https://www.vietnambbs.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-90034-20057",
            "contactType": "admissions",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/vietnammbbs",
            "https://www.instagram.com/vietnammbbs",
            "https://www.youtube.com/@vietnammbbs"
          ]
        }}
      />
      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Header />
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <section className="relative">

          {/* ══ HERO SWIPER ══ */}
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-[500px] sm:h-[550px] md:h-[600px]"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <img src={Hero1} alt="Vietnam" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center pb-16 sm:pb-20 px-4">
                    <div className="max-w-3xl text-center">
                      <div className="flex justify-center mb-3 sm:mb-5">
                        <span
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-yellow-400/60 whitespace-normal text-center"
                          style={{ background: "rgba(245,197,24,0.12)", color: "#F5C518", backdropFilter: "blur(8px)", boxShadow: "0 0 20px rgba(245,197,24,0.15)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                          For Indian Students · After 12th · NEET Accepted
                        </span>
                      </div>
                      <h1
                        className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-3 leading-tight"
                        style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)" }}
                      >
                        Dreaming of MBBS?
                      </h1>
                      <h2
                        className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
                        style={{ color: "#FFFFFF", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
                      >
                        Vietnam Makes It Possible!
                      </h2>
                      <div className="hidden sm:flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/60" />
                        <span className="text-yellow-400/80 text-xs">✦</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/60" />
                      </div>
                      <p
                        className="text-xs sm:text-base text-white font-medium mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border border-white/20 inline-block"
                        style={{ background: "rgba(0,0,0,0.50)", backdropFilter: "blur(10px)", textShadow: "0 1px 6px rgba(0,0,0,0.8)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
                      >
                        ✅ Direct admission · ✅ No donation · ✅ No IELTS required
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
                          style={{ background: "linear-gradient(135deg, #CC1B1B 0%, #a01515 100%)", boxShadow: "0 4px 20px rgba(204,27,27,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" }}
                        >
                          Apply Now →
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-200 hover:scale-105"
                          style={{ background: "linear-gradient(135deg, #F5C518 0%, #d4a800 10%)", color: "#1a0e00", boxShadow: "0 4px 20px rgba(245,197,24,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" }}
                        >
                          📄 Download Brochure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="relative w-full h-full overflow-hidden">
                  <img src={Hero2} alt="Vietnam" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center pb-16 sm:pb-20 px-4">
                    <div className="max-w-2xl text-center px-4">
                      <div className="flex justify-center mb-3 sm:mb-5">
                        <span
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-white/30 whitespace-normal text-center"
                          style={{ background: "rgba(255,255,255,0.08)", color: "#FFF5E0", backdropFilter: "blur(8px)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          MBBS in Vietnam · 2026 Admissions
                        </span>
                      </div>
                      <h1
                        className="font-serif text-3xl sm:text-5xl font-extrabold text-[#F5C518] leading-tight mb-3 sm:mb-4"
                        style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)" }}
                      >
                        Start Your Medical Career <br />
                        <span style={{ color: "#FFF5E0", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
                          with Globally Recognized MBBS
                        </span>
                      </h1>
                      <div className="hidden sm:flex items-center justify-center gap-3 mb-5">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
                        <span className="text-white/50 text-xs">✦</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
                      </div>
                      <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#FFF5E0", textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}>
                        Study in top NMC-approved universities with advanced hospitals,
                        experienced faculty, and affordable fees for Indian students.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <img src={Hero3} alt="MBBS in Vietnam" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(204,27,27,0.45) 0%, transparent 50%)" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center px-4 pb-16 sm:pb-20">
                    <div className="max-w-5xl text-center">
                      <div className="flex justify-center mb-3 sm:mb-5">
                        <span
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-white/30 whitespace-normal text-center"
                          style={{ background: "rgba(255,255,255,0.08)", color: "#FFF5E0", backdropFilter: "blur(8px)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          NMC Approved · Indian Curriculum · Global Career
                        </span>
                      </div>
                      <h1
                        className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 sm:mb-3 text-white"
                        style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)" }}
                      >
                        Study MBBS in Vietnam
                      </h1>
                      <h2
                        className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5"
                        style={{ color: "#FFF5E0", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
                      >
                        Affordable • Recognized • Career-Focused
                      </h2>
                      <div className="hidden sm:flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40" />
                        <span className="text-white/50 text-xs">✦</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40" />
                      </div>
                      <p
                        className="text-xs sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
                        style={{ color: "#FFF5E0", textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
                      >
                        Get direct admission to top NMC-approved universities with modern
                        hospitals, Indian curriculum support, and global career opportunities.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base text-white font-bold rounded-xl transition-all duration-200 hover:scale-105"
                          style={{ background: "linear-gradient(135deg, #CC1B1B 0%, #a01515 100%)", boxShadow: "0 4px 20px rgba(204,27,27,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" }}
                        >
                          Apply Now →
                        </button>
                        <a
                          href="https://wa.me/919003420057?text=Hi%20I%20am%20interested%20in%20MBBS%20in%20Vietnam"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold rounded-xl transition-all duration-200 hover:scale-105 text-center"
                          style={{ background: "linear-gradient(135deg, #F5C518 0%, #d4a800 10%)", color: "#1a0e00", boxShadow: "0 4px 20px rgba(245,197,24,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" }}
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* ══ STATS BAR ══ */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center items-center gap-4 sm:gap-8 md:gap-16 px-4 py-3 sm:py-4 flex-wrap">
              {heroStats.map((s, i) => (
                <StatItem key={i} num={s.num} prefix={s.prefix} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>

          {/* ══ UNIVERSITIES SECTION ══ */}
          <section className="mt-16 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#CC1B1B] mb-3 sm:mb-4">
              Top Medical Universities in Vietnam
            </h1>
            <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg max-w-5xl mx-auto mb-8 sm:mb-12 px-2">
              Vietnam offers top-quality medical education with globally recognized universities,
              modern hospitals, and English-medium MBBS programs designed for international students.
            </p>

            {/* University Cards — fixed order, local images, no API dependency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-2">
              {UNIVERSITIES.map((uni) => (
                <UniversityCard
                  key={uni.slug}
                  onOpenEnquiry={() => setIsModalOpen(true)}
                  university={{
                    id: uni.id,
                    slug: uni.slug,
                    name: uni.name,
                    shortName: uni.short_name,
                    fee: uni.fee,
                    image: uni.image,
                    highlights: uni.highlights,
                  }}
                />
              ))}
            </div>
          </section>

          {/* ══ WHY CHOOSE US ══ */}
          <section className="py-12 sm:py-16 mt-12 sm:mt-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CC1B1B]">Why Choose Us</h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3 mb-6 sm:mb-10">Your trusted partner for MBBS in Vietnam</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1a2f5e] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </section>
      </div>

      <CTA />
      <Footer />
    </>
  );
}
