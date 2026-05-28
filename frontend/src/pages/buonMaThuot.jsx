
// import { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import EnquiryModal from "../components/EnquiryModal";

// // ✅ Local image imports from src/assets
// import heroImg from "../assets/6I4A3772.jpg";
// import aboutImg1 from "../assets/6I4A3773.jpg";
// import aboutImg2 from "../assets/6I4A3774.jpg";
// import facilitiesResearchLab from "../assets/DSC02334.jpg";
// import facilitiesLibrary from "../assets/DINH9473.JPG";
// import facilitiesLectureHall from "../assets/DSC02189.jpg";
// import facilitiesCampus from "../assets/DJI_0312.JPG";
// import clinicalImg from "../assets/6I4A3783.jpg";
// import locationImg from "../assets/6I4A3784.jpg";

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

//   /* Scoped styles - only affect this page, not Footer */
//   .buh-page-container {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     min-height: 100vh;
//     background: #f8f9fa;
//   }

//   .buh-page-container * {
//     box-sizing: border-box;
//   }

//   .material-symbols-outlined {
//     font-family: 'Material Symbols Outlined';
//     font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//     display: inline-block;
//     line-height: 1;
//     font-style: normal;
//     letter-spacing: normal;
//     text-transform: none;
//     white-space: nowrap;
//     word-wrap: normal;
//     direction: ltr;
//   }

//   .font-headline { 
//     font-family: 'Plus Jakarta Sans', sans-serif; 
//   }
  
//   .font-body, .font-label { 
//     font-family: 'Inter', sans-serif; 
//   }

//   /* Mobile Responsive */
//   @media (max-width: 768px) {
//     .buh-hero {
//       height: auto !important;
//       min-height: 500px !important;
//       padding: 100px 0 60px !important;
//     }
//     .buh-stats-grid {
//       flex-direction: column !important;
//     }
//     .buh-programs-grid {
//       grid-template-columns: 1fr !important;
//     }
//     .buh-facilities-grid {
//       height: auto !important;
//       grid-template-rows: auto !important;
//     }
//     .buh-facilities-grid > div {
//       min-height: 250px !important;
//     }
//     .buh-about-grid {
//       flex-direction: column !important;
//     }
//     .buh-why-grid {
//       grid-template-columns: 1fr !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .buh-hero-buttons {
//       flex-direction: column !important;
//     }
//     .buh-hero-buttons button {
//       width: 100% !important;
//     }
//   }
// `;

// function MaterialIcon({ name, className = "" }) {
//   return (
//     <span
//       className={`material-symbols-outlined ${className}`}
//       style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
//     >
//       {name}
//     </span>
//   );
// }

// export default function BUHMedical() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const stats = [
//     {
//       icon: "verified",
//       iconBg: "bg-red-100",
//       iconColor: "text-red-700",
//       title: "Government Recognized",
//       subtitle: "MoET & MoH Accredited",
//     },
//     {
//       icon: "medical_services",
//       iconBg: "bg-teal-100",
//       iconColor: "text-teal-700",
//       title: "Specialized Medical Focus",
//       subtitle: "100% Dedicated to Healthcare",
//     },
//     {
//       icon: "payments",
//       iconBg: "bg-yellow-100",
//       iconColor: "text-yellow-700",
//       title: "Affordable Education",
//       subtitle: "Low Cost of Living in Dak Lak",
//     },
//   ];

//   const programs = [
//     {
//       icon: "stethoscope",
//       title: "General Medicine",
//       desc: "MBBS-equivalent comprehensive training in clinical medicine and surgery.",
//       duration: "6 Years Program",
//     },
//     {
//       icon: "medication",
//       title: "Pharmacy",
//       desc: "Focusing on pharmacological sciences, drug development, and patient care.",
//       duration: "5 Years Program",
//     },
//     {
//       icon: "emergency",
//       title: "Nursing",
//       desc: "Advanced nursing care, patient management, and specialized medical support.",
//       duration: "4 Years Program",
//     },
//     {
//       icon: "health_and_safety",
//       title: "Preventive Medicine",
//       desc: "Community health education, epidemiology, and disease prevention strategies.",
//       duration: "6 Years Program",
//     },
//   ];

//   const facilities = [
//     {
//       colSpan: "md:col-span-2 md:row-span-2",
//       src: facilitiesResearchLab,
//       label: "Advanced Research Labs",
//       labelSize: "text-xl",
//       padding: "p-8",
//     },
//     {
//       colSpan: "",
//       src: facilitiesLibrary,
//       label: "Medical Digital Library",
//       labelSize: "text-sm",
//       padding: "p-4",
//     },
//     {
//       colSpan: "",
//       src: facilitiesLectureHall,
//       label: "Smart Lecture Halls",
//       labelSize: "text-sm",
//       padding: "p-4",
//     },
//     {
//       colSpan: "md:col-span-2",
//       src: facilitiesCampus,
//       label: "Main Campus Infrastructure",
//       labelSize: "text-lg",
//       padding: "p-6",
//     },
//   ];

//   const whyChoose = [
//     {
//       num: "1",
//       title: "Specialized Focus",
//       desc: "Deep institutional expertise dedicated entirely to the medical sciences.",
//     },
//     {
//       num: "2",
//       title: "Affordable Tuition",
//       desc: "Premium education with a fee structure designed for accessibility.",
//     },
//     {
//       num: "3",
//       title: "Community Integration",
//       desc: "Unique training focus on community healthcare and rural medicine needs.",
//     },
//   ];

//   return (
//     <>
//       <Header />
//       <div className="buh-page-container">
//         <style>{styles}</style>
        
//         <div className="bg-gray-50 text-gray-900 min-h-screen">
//           <main className="pt-0 pb-24 md:pb-12">

//             {/* Hero Section */}
//             <section className="relative buh-hero h-[751px] min-h-[600px] flex items-center overflow-hidden mt-0">
//               <div className="absolute inset-0 z-0">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={heroImg}
//                   alt="Modern medical university building"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
//               </div>
//               <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//                 <div className="max-w-2xl">
//                   <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-200 text-yellow-900 text-xs font-bold tracking-widest uppercase mb-6">
//                     Established 2013
//                   </span>
//                   <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] mb-6">
//                     Buon Ma Thuot Medical University
//                   </h1>
//                   <p className="text-xl text-gray-200 font-light leading-relaxed mb-8 border-l-4 border-red-600 pl-6 text-justify">
//                     A Premier Specialized Medical Institution in the Central Highlands of Vietnam. Shaping the future of healthcare through excellence in education.
//                   </p>
//                   <div className="buh-hero-buttons flex flex-wrap gap-4">
//                     <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-red-900/20">
//                       Apply for Admission <MaterialIcon name="arrow_forward" />
//                     </button>
//                     <button type="button" onClick={() => setIsModalOpen(true)} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
//                       Enquire Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Quick Stats */}
//             <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
//               <div className="buh-stats-grid grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {stats.map((stat) => (
//                   <div
//                     key={stat.title}
//                     className="bg-white p-8 rounded-2xl flex items-center gap-6 shadow-2xl shadow-black/5"
//                   >
//                     <div className={`w-14 h-14 rounded-xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
//                       <MaterialIcon name={stat.icon} className="text-3xl" />
//                     </div>
//                     <div>
//                       <h4 className="font-headline font-bold text-gray-900 text-lg">{stat.title}</h4>
//                       <p className="text-gray-500 text-sm">{stat.subtitle}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* About Section */}
//             <section className="py-24 max-w-7xl mx-auto px-6">
//               <div className="buh-about-grid flex flex-col md:flex-row gap-16 items-center">
//                 <div className="md:w-1/2">
//                   <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-6">
//                     Nurturing Excellence Since 2013
//                   </h2>
//                   <p className="text-lg text-gray-500 leading-relaxed mb-6 text-justify">
//                     Established in 2013, Buon Ma Thuot Medical University (BUH) has rapidly emerged as a vital pillar of healthcare education in Dak Lak province. As a specialized institution, we focus exclusively on training high-quality medical professionals tailored to meet the growing health needs of the Central Highlands.
//                   </p>
//                   <p className="text-lg text-gray-500 leading-relaxed text-justify">
//                     Our curriculum integrates rigorous academic theory with intensive clinical practice, ensuring our graduates are not only knowledgeable but clinically proficient and compassionate healers.
//                   </p>
//                 </div>
//                 <div className="md:w-1/2 grid grid-cols-2 gap-4">
//                   <div className="rounded-2xl overflow-hidden h-64">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={aboutImg1}
//                       alt="Medical students in white coats"
//                     />
//                   </div>
//                   <div className="rounded-2xl overflow-hidden h-64 mt-8">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={aboutImg2}
//                       alt="Medical students at graduation"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Medical Programs */}
//             <section className="py-24 bg-gray-100">
//               <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-16">
//                   <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-4">Academic Programs</h2>
//                   <p className="text-gray-500 max-w-2xl mx-auto">
//                     Diverse healthcare specializations designed to meet international medical standards.
//                   </p>
//                 </div>
//                 <div className="buh-programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {programs.map((prog) => (
//                     <div
//                       key={prog.title}
//                       className="bg-white p-8 rounded-2xl group hover:bg-red-700 transition-colors duration-300"
//                     >
//                       <MaterialIcon
//                         name={prog.icon}
//                         className="text-red-700 group-hover:text-white text-4xl mb-6 block"
//                       />
//                       <h3 className="font-headline font-bold text-xl mb-4 text-gray-900 group-hover:text-white">
//                         {prog.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed">
//                         {prog.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* Clinical Power */}
//             <section className="py-24 max-w-7xl mx-auto px-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//                 <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl relative group">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={clinicalImg}
//                     alt="Clinical training room"
//                   />
//                   <div className="absolute inset-0 bg-red-700/20 mix-blend-overlay"></div>
//                 </div>
//                 <div className="order-1 md:order-2">
//                   <div className="flex items-center gap-2 text-red-700 font-bold tracking-tighter uppercase mb-4">
//                     <span className="w-8 h-[2px] bg-red-700 inline-block"></span> Clinical Training
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-gray-900 mb-6">
//                     Hospital Exposure from Day One
//                   </h2>
//                   <p className="text-lg text-gray-500 leading-relaxed mb-8 text-justify">
//                     Our students benefit from intensive clinical rotations at regional general hospitals and specialized medical centers in Dak Lak. This exposure provides real-world experience with diverse patient cases and state-of-the-art diagnostic equipment.
//                   </p>
//                   <ul className="space-y-4">
//                     {[
//                       "Affiliated Regional General Hospitals",
//                       "Direct Patient Interaction Opportunities",
//                       "Modern Clinical Simulation Centers",
//                     ].map((item) => (
//                       <li key={item} className="flex items-center gap-4 text-gray-900 font-medium">
//                         <MaterialIcon name="check_circle" className="text-red-700" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* Academic & Facilities Grid */}
//             <section className="py-24 bg-gray-200/30">
//               <div className="max-w-7xl mx-auto px-6">
//                 <div className="mb-16">
//                   <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-2">
//                     Modern Academic Infrastructure
//                   </h2>
//                   <p className="text-gray-500">World-class facilities fueling research and medical mastery.</p>
//                 </div>
//                 <div className="buh-facilities-grid grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
//                   {facilities.map((fac, idx) => (
//                     <div
//                       key={idx}
//                       className={`${fac.colSpan} rounded-2xl overflow-hidden relative group`}
//                       style={{ minHeight: "200px" }}
//                     >
//                       <img
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         src={fac.src}
//                         alt={fac.label}
//                       />
//                       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
//                         <div className={fac.padding}>
//                           <h4 className={`text-white font-headline font-bold ${fac.labelSize}`}>
//                             {fac.label}
//                           </h4>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* Location Advantage */}
//             <section className="py-24 max-w-7xl mx-auto px-6">
//               <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
//                 <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
//                   <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-[#CC1B1B] mb-6">
//                     The Serenity of Buon Ma Thuot
//                   </h2>
//                   <p className="text-lg text-gray-500 leading-relaxed mb-8 text-justify">
//                     Located in the "Coffee Capital" of Vietnam, our university offers a peaceful, green environment conducive to focused study. Enjoy a significantly lower cost of living compared to Ho Chi Minh City while experiencing the rich culture of the Central Highlands.
//                   </p>
//                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100">
//                     <MaterialIcon name="location_on" className="text-red-700 text-3xl" />
//                     <div className="text-sm font-medium">Dak Lak Province, Central Highlands, Vietnam</div>
//                   </div>
//                 </div>
//                 <div className="md:w-1/2 min-h-[400px]">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={locationImg}
//                     alt="Scenic view of Buon Ma Thuot"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Why Choose & Disclaimer */}
//             <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
//               <div>
//                 <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-8">Why Choose BUH?</h2>
//                 <div className="buh-why-grid space-y-6">
//                   {whyChoose.map((item) => (
//                     <div key={item.num} className="flex gap-4">
//                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
//                         {item.num}
//                       </div>
//                       <div>
//                         <h4 className="font-bold mb-1">{item.title}</h4>
//                         <p className="text-gray-500 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Important Disclaimer */}
//               <div className="bg-red-50 border-2 border-red-100 p-10 rounded-[2rem] relative overflow-hidden">
//                 <div className="absolute -top-6 -right-6 text-red-100">
//                   <MaterialIcon name="gavel" className="text-[120px]" />
//                 </div>
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-3 text-red-700 font-bold mb-6">
//                     <MaterialIcon name="error" />
//                     <h3 className="font-headline text-xl uppercase tracking-wider">Important Disclaimer</h3>
//                   </div>
//                   <p className="text-gray-900 leading-relaxed mb-6 font-medium">For International MBBS Aspirants:</p>
//                   <ul className="space-y-4 text-gray-500 text-sm">
//                     {[
//                       "Verify latest NMC (India) and WHO eligibility guidelines before enrollment.",
//                       "Confirm English-medium instruction tracks specifically for international students.",
//                       "Degree recognition is subject to regulatory changes in home countries.",
//                     ].map((item, i) => (
//                       <li key={i} className="flex gap-3">
//                         <span className="text-red-700 font-bold">•</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* CTA Section */}
//             <section className="w-full bg-gradient-to-r from-red-50 via-white to-pink-50 py-20 px-6">
//               <div className="max-w-7xl mx-auto text-center">
//                 <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm uppercase tracking-wider mb-6">
//                   Begin Your Medical Journey
//                 </span>
//                 <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-gray-900 leading-tight mb-6">
//                   Shape Your Future in Healthcare with BUH
//                 </h2>
//                 <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-justify md:text-center">
//                   Join a globally focused medical university offering affordable tuition, 
//                   modern clinical training, and a peaceful learning environment in Vietnam.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4">
//                   <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
//                   >
//                     Apply Now
//                   </button>
//                   <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
//                   >
//                     Get Free Counselling
//                   </button>
//                 </div>
//               </div>
//             </section>

//           </main>
//         </div>
//       </div>

//       <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       <Footer />
//     </>
//   );
// }










import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

// ✅ Local image imports from src/assets
import heroImg from "../assets/6I4A3772.jpg";
import aboutImg1 from "../assets/6I4A3773.jpg";
import aboutImg2 from "../assets/6I4A3774.jpg";
import facilitiesResearchLab from "../assets/DSC02334.jpg";
import facilitiesLibrary from "../assets/DINH9473.JPG";
import facilitiesLectureHall from "../assets/DSC02189.jpg";
import facilitiesCampus from "../assets/DJI_0312.JPG";
import clinicalImg from "../assets/6I4A3783.jpg";
import locationImg from "../assets/6I4A3784.jpg";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  .buh-page-container {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #f8f9fa;
  }

  .buh-page-container * {
    box-sizing: border-box;
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    display: inline-block;
    line-height: 1;
    font-style: normal;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }

  .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
  .font-body, .font-label { font-family: 'Inter', sans-serif; }

  @media (max-width: 768px) {
    .buh-hero { height: auto !important; min-height: 500px !important; padding: 100px 0 60px !important; }
    .buh-stats-grid { flex-direction: column !important; }
    .buh-programs-grid { grid-template-columns: 1fr !important; }
    .buh-facilities-grid { height: auto !important; grid-template-rows: auto !important; }
    .buh-facilities-grid > div { min-height: 250px !important; }
    .buh-about-grid { flex-direction: column !important; }
    .buh-why-grid { grid-template-columns: 1fr !important; }
  }

  @media (max-width: 480px) {
    .buh-hero-buttons { flex-direction: column !important; }
    .buh-hero-buttons button { width: 100% !important; }
  }
`;

function MaterialIcon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

export default function BUHMedical() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { icon: "verified", iconBg: "bg-red-100", iconColor: "text-red-700", title: "Government Recognized", subtitle: "MoET & MoH Accredited" },
    { icon: "medical_services", iconBg: "bg-teal-100", iconColor: "text-teal-700", title: "Specialized Medical Focus", subtitle: "100% Dedicated to Healthcare" },
    { icon: "payments", iconBg: "bg-yellow-100", iconColor: "text-yellow-700", title: "Affordable Education", subtitle: "Low Cost of Living in Dak Lak" },
  ];

  const programs = [
    { icon: "stethoscope", title: "General Medicine", desc: "MBBS-equivalent comprehensive training in clinical medicine and surgery.", duration: "6 Years Program" },
    { icon: "medication", title: "Pharmacy", desc: "Focusing on pharmacological sciences, drug development, and patient care.", duration: "5 Years Program" },
    { icon: "emergency", title: "Nursing", desc: "Advanced nursing care, patient management, and specialized medical support.", duration: "4 Years Program" },
    { icon: "health_and_safety", title: "Preventive Medicine", desc: "Community health education, epidemiology, and disease prevention strategies.", duration: "6 Years Program" },
  ];

  const facilities = [
    { colSpan: "md:col-span-2 md:row-span-2", src: facilitiesResearchLab, label: "Advanced Research Labs", labelSize: "text-xl", padding: "p-8" },
    { colSpan: "", src: facilitiesLibrary, label: "Medical Digital Library", labelSize: "text-sm", padding: "p-4" },
    { colSpan: "", src: facilitiesLectureHall, label: "Smart Lecture Halls", labelSize: "text-sm", padding: "p-4" },
    { colSpan: "md:col-span-2", src: facilitiesCampus, label: "Main Campus Infrastructure", labelSize: "text-lg", padding: "p-6" },
  ];

  const whyChoose = [
    { num: "1", title: "Specialized Focus", desc: "Deep institutional expertise dedicated entirely to the medical sciences." },
    { num: "2", title: "Affordable Tuition", desc: "Premium education with a fee structure designed for accessibility." },
    { num: "3", title: "Community Integration", desc: "Unique training focus on community healthcare and rural medicine needs." },
  ];

  return (
    <>
      <Header />
      <div className="buh-page-container">
        <style>{styles}</style>

        <div className="bg-gray-50 text-gray-900 min-h-screen">
          <main className="pt-0 pb-24 md:pb-12">

            {/* ── HERO ── */}
            <section className="relative buh-hero h-[751px] min-h-[600px] flex items-center overflow-hidden mt-0">
              <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover" src={heroImg} alt="Buon Ma Thuot Medical University" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-200 text-yellow-900 text-xs font-bold tracking-widest uppercase mb-6">
                    Established 2013
                  </span>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] mb-6">
                    Buon Ma Thuot Medical University
                  </h1>
                  <p className="text-xl text-gray-200 font-light leading-relaxed mb-8 border-l-4 border-red-600 pl-6 text-justify">
                    A Premier Specialized Medical Institution in the Central Highlands of Vietnam. Shaping the future of healthcare through excellence in education.
                  </p>
                  <div className="buh-hero-buttons flex flex-wrap gap-4">
                    <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-red-900/20">
                      Apply for Admission <MaterialIcon name="arrow_forward" />
                    </button>
                    <button type="button" onClick={() => setIsModalOpen(true)} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ── QUICK STATS ── */}
            <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
              <div className="buh-stats-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.title} className="bg-white p-8 rounded-2xl flex items-center gap-6 shadow-2xl shadow-black/5">
                    <div className={`w-14 h-14 rounded-xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
                      <MaterialIcon name={stat.icon} className="text-3xl" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-900 text-lg">{stat.title}</h4>
                      <p className="text-gray-500 text-sm">{stat.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="py-24 max-w-7xl mx-auto px-6">
              <div className="buh-about-grid flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-6">Nurturing Excellence Since 2013</h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-6 text-justify">
                    Established in 2013, Buon Ma Thuot Medical University (BUH) has rapidly emerged as a vital pillar of healthcare education in Dak Lak province. As a specialized institution, we focus exclusively on training high-quality medical professionals tailored to meet the growing health needs of the Central Highlands.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed text-justify">
                    Our curriculum integrates rigorous academic theory with intensive clinical practice, ensuring our graduates are not only knowledgeable but clinically proficient and compassionate healers.
                  </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img className="w-full h-full object-cover" src={aboutImg1} alt="Medical students in white coats" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64 mt-8">
                    <img className="w-full h-full object-cover" src={aboutImg2} alt="Medical students at graduation" />
                  </div>
                </div>
              </div>
            </section>

            {/* ── MEDICAL PROGRAMS ── */}
            <section className="py-24 bg-gray-100">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-4">Academic Programs</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">Diverse healthcare specializations designed to meet international medical standards.</p>
                </div>
                <div className="buh-programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {programs.map((prog) => (
                    <div key={prog.title} className="bg-white p-8 rounded-2xl group hover:bg-red-700 transition-colors duration-300">
                      <MaterialIcon name={prog.icon} className="text-red-700 group-hover:text-white text-4xl mb-6 block" />
                      <h3 className="font-headline font-bold text-xl mb-4 text-gray-900 group-hover:text-white">{prog.title}</h3>
                      <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed">{prog.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── CLINICAL POWER ── */}
            <section className="py-24 max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img className="w-full h-full object-cover" src={clinicalImg} alt="Clinical training room" />
                  <div className="absolute inset-0 bg-red-700/20 mix-blend-overlay" />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold tracking-tighter uppercase mb-4">
                    <span className="w-8 h-[2px] bg-red-700 inline-block" /> Clinical Training
                  </div>
                  <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-gray-900 mb-6">Hospital Exposure from Day One</h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8 text-justify">
                    Our students benefit from intensive clinical rotations at regional general hospitals and specialized medical centers in Dak Lak. This exposure provides real-world experience with diverse patient cases and state-of-the-art diagnostic equipment.
                  </p>
                  <ul className="space-y-4">
                    {["Affiliated Regional General Hospitals", "Direct Patient Interaction Opportunities", "Modern Clinical Simulation Centers"].map((item) => (
                      <li key={item} className="flex items-center gap-4 text-gray-900 font-medium">
                        <MaterialIcon name="check_circle" className="text-red-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── FACILITIES ── */}
            <section className="py-24 bg-gray-200/30">
              <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                  <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-2">Modern Academic Infrastructure</h2>
                  <p className="text-gray-500">World-class facilities fueling research and medical mastery.</p>
                </div>
                <div className="buh-facilities-grid grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                  {facilities.map((fac, idx) => (
                    <div key={idx} className={`${fac.colSpan} rounded-2xl overflow-hidden relative group`} style={{ minHeight: "200px" }}>
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={fac.src} alt={fac.label} />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
                        <div className={fac.padding}>
                          <h4 className={`text-white font-headline font-bold ${fac.labelSize}`}>{fac.label}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ══════════════════════════════════════════════
                FEE STRUCTURE — From Official BMU Brochure
            ══════════════════════════════════════════════ */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                  <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                    Scholarship Available
                  </span>
                  <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                    Tuition <span className="text-[#CC1B1B]">Fee Structure</span>
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                    Transparent, year-wise fee breakdown. USD is fixed; INR is approximate reference only.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                  {/* ── LEFT: Fee Table ── */}
                  <div className="flex-1 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                    {/* Table Header */}
                    <div className="bg-[#CC1B1B] px-5 sm:px-7 py-4 sm:py-5">
                      <h3 className="text-white font-headline font-bold text-sm sm:text-base">
                        Fees Per Year — 6 Years MBBS Program
                      </h3>
                    </div>
                    {/* Column Labels */}
                    <div className="grid grid-cols-3 bg-red-50 px-5 sm:px-7 py-3 text-xs font-bold text-[#CC1B1B] uppercase tracking-wider border-b border-red-100">
                      <span>Year</span>
                      <span>USD (Fixed)</span>
                      <span>INR (Approx)</span>
                    </div>
                    {/* Rows */}
                    {[
                      { year: "University Registration", usd: "$1,500", inr: "₹1,30,000" },
                      { year: "1st Year", usd: "$5,000", inr: "₹4,57,706" },
                      { year: "2nd Year", usd: "$5,000", inr: "₹4,57,706" },
                      { year: "3rd Year", usd: "$5,000", inr: "₹4,57,706" },
                      { year: "4th Year", usd: "$5,000", inr: "₹4,57,706" },
                      { year: "5th Year", usd: "$5,000", inr: "₹4,57,706" },
                      { year: "6th Year", usd: "$5,000", inr: "₹4,57,706" },
                    ].map((row, i) => (
                      <div
                        key={row.year}
                        className={`grid grid-cols-3 px-5 sm:px-7 py-3 text-xs sm:text-sm border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <span className="font-semibold text-gray-900">{row.year}</span>
                        <span className="font-bold text-[#CC1B1B]">{row.usd}</span>
                        <span className="text-gray-500">{row.inr}</span>
                      </div>
                    ))}
                    {/* Grand Total */}
                    <div className="grid grid-cols-3 bg-[#CC1B1B] px-5 sm:px-7 py-4">
                      <span className="font-extrabold text-white text-sm">Grand Total</span>
                      <span className="font-extrabold text-yellow-400 text-sm">$31,500</span>
                      <span className="font-extrabold text-yellow-400 text-sm">₹28,76,236</span>
                    </div>
                    {/* Note */}
                    <div className="px-5 sm:px-7 py-3 bg-red-50 border-t border-red-100">
                      <p className="text-[11px] text-red-700 font-medium">
                        * USD is fixed. INR is for approximate reference only. Fees are non-refundable once admission process is completed.
                      </p>
                    </div>
                  </div>

                  {/* ── RIGHT: Payment Before Departure + Food ── */}
                  <div className="flex-1 space-y-5">

                    {/* Payment Before Departure */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 sm:p-7 shadow-sm">
                      <h3 className="font-headline font-bold text-sm sm:text-base text-yellow-900 mb-1">
                        Payment Before Departure from India
                      </h3>
                      <p className="text-yellow-700 text-xs mb-4">One-time charges for total 6 years</p>
                      {[
                        { label: "University Registration Fee", amount: "₹1,30,000" },
                        { label: "Processing Fee", amount: "₹2,63,000" },
                        { label: "Tuition Fee for 1st Sem", amount: "₹2,28,853" },
                        { label: "Hostel Fee", amount: "₹2,25,000" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-3 border-b border-yellow-200/60 last:border-0">
                          <span className="text-yellow-800 text-xs sm:text-sm">{item.label}</span>
                          <span className="font-bold text-[#CC1B1B] text-sm sm:text-base">{item.amount}</span>
                        </div>
                      ))}
                      {/* Grand Total */}
                      <div className="mt-4 bg-[#CC1B1B] rounded-xl p-4 flex justify-between items-center">
                        <span className="text-white font-bold text-sm">Grand Total</span>
                        <span className="text-yellow-400 font-extrabold text-lg sm:text-xl">₹8,46,853</span>
                      </div>
                    </div>

                    {/* Food & Accommodation */}
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-5 sm:p-7 shadow-sm">
                      <MaterialIcon name="hotel" className="text-[#CC1B1B] text-3xl mb-3" />
                      <h3 className="font-headline font-bold text-sm sm:text-base text-gray-900 mb-1">
                        Food & Accommodation
                      </h3>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#CC1B1B]">$2,500</div>
                      <div className="text-gray-500 text-xs mb-3">Approx ₹2,30,000 per year</div>
                      <p className="text-red-800 text-xs leading-relaxed">
                        AC Hostel for Boys and Girls with dedicated Indian food — North, South & North East Indian cuisine available.
                      </p>
                    </div>

                    {/* Initial Processing Fee highlight */}
                    <div className="bg-white border-2 border-[#CC1B1B] rounded-2xl p-5 sm:p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <MaterialIcon name="info" className="text-[#CC1B1B] text-2xl" />
                        <h3 className="font-headline font-bold text-sm sm:text-base text-gray-900">
                          Initial Processing Fee
                        </h3>
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#CC1B1B] mb-1">₹2,63,000</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Only for 1st Year (before departure from India)</div>
                      <div className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                        Includes: Invitation Letter, Professional Admission Letter, International Student Card, Bank Account Opening, Medical Health Insurance, Visa Processing, One Way Flight, Airport Transportation, Immigration Clearance, NMC Eligibility Certificate & more.
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Services Included ── */}
                <div className="mt-10 sm:mt-12">
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-gray-900 mb-5 text-center">
                    Complete Services by <span className="text-[#CC1B1B]">Aswad Overseas</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {[
                      "Application Form",
                      "Registration Fee",
                      "Immigration Clearance",
                      "Legalization from MEA, India",
                      "Document Support",
                      "Visa Stamping – Study Visa 6 Years",
                      "NMC Eligibility Certificate",
                      "6 Years Local Support & Guidance",
                      "Medical Clearance",
                      "NEXT/FMGE/USMLE & PLAB Coaching (1st Yr)",
                      "One Way Flight Ticket",
                      "Consularization by Embassy of Vietnam",
                      "Medical Insurance Processing",
                      "North/South & North East Indian Food",
                      "Student Caretaker/Manager/Warden",
                      "Agreement Undertaking by Students & Parents",
                    ].map((service) => (
                      <div key={service} className="bg-gray-50 rounded-xl p-3 sm:p-4 flex items-start gap-3 border border-gray-200">
                        <MaterialIcon name="check_circle" className="text-[#CC1B1B] text-lg flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── LOCATION ── */}
            <section className="py-24 max-w-7xl mx-auto px-6">
              <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-[#CC1B1B] mb-6">
                    The Serenity of Buon Ma Thuot
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8 text-justify">
                    Located in the "Coffee Capital" of Vietnam, our university offers a peaceful, green environment conducive to focused study. Enjoy a significantly lower cost of living compared to Ho Chi Minh City while experiencing the rich culture of the Central Highlands.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100">
                    <MaterialIcon name="location_on" className="text-red-700 text-3xl" />
                    <div className="text-sm font-medium">Dak Lak Province, Central Highlands, Vietnam</div>
                  </div>
                </div>
                <div className="md:w-1/2 min-h-[400px]">
                  <img className="w-full h-full object-cover" src={locationImg} alt="Scenic view of Buon Ma Thuot" />
                </div>
              </div>
            </section>

            {/* ── WHY CHOOSE & DISCLAIMER ── */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-[#CC1B1B] mb-8">Why Choose BUH?</h2>
                <div className="space-y-6">
                  {whyChoose.map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-100 p-10 rounded-[2rem] relative overflow-hidden">
                <div className="absolute -top-6 -right-6 text-red-100">
                  <MaterialIcon name="gavel" className="text-[120px]" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-red-700 font-bold mb-6">
                    <MaterialIcon name="error" />
                    <h3 className="font-headline text-xl uppercase tracking-wider">Important Disclaimer</h3>
                  </div>
                  <p className="text-gray-900 leading-relaxed mb-6 font-medium">For International MBBS Aspirants:</p>
                  <ul className="space-y-4 text-gray-500 text-sm">
                    {[
                      "Verify latest NMC (India) and WHO eligibility guidelines before enrollment.",
                      "Confirm English-medium instruction tracks specifically for international students.",
                      "Degree recognition is subject to regulatory changes in home countries.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-red-700 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="w-full bg-gradient-to-r from-red-50 via-white to-pink-50 py-20 px-6">
              <div className="max-w-7xl mx-auto text-center">
                <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm uppercase tracking-wider mb-6">
                  Begin Your Medical Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-gray-900 leading-tight mb-6">
                  Shape Your Future in Healthcare with BUH
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-justify md:text-center">
                  Join a globally focused medical university offering affordable tuition, modern clinical training, and a peaceful learning environment in Vietnam.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => setIsModalOpen(true)} className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300">
                    Apply Now
                  </button>
                  <button onClick={() => setIsModalOpen(true)} className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                    Get Free Counselling
                  </button>
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
}
