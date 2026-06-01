
// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import EnquiryModal from "../components/EnquiryModal";
// import HeroImg from "../assets/6I4A3707.jpg";
// import ClinicalImg from "../assets/6I4A3712.jpg";
// import HanoiImg1 from "../assets/6I4A3744.jpg";
// import HanoiImg2 from "../assets/6I4A3745.jpg";

// const DaiNamUniversity = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <>
//       <Header />
//       <div className="bg-gray-50 font-sans text-gray-900 min-h-screen">
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
//           @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
//           .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
//           .font-body { font-family: 'Inter', sans-serif; }
//           .material-symbols-outlined {
//             font-family: 'Material Symbols Outlined';
//             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//             font-style: normal;
//             display: inline-block;
//             line-height: 1;
//             text-transform: none;
//             letter-spacing: normal;
//             word-wrap: normal;
//             white-space: nowrap;
//             direction: ltr;
//           }
//           .material-symbols-filled {
//             font-family: 'Material Symbols Outlined';
//             font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//             font-style: normal;
//             display: inline-block;
//             line-height: 1;
//           }
//           .glass-nav {
//             background: rgba(255, 255, 255, 0.7);
//             backdrop-filter: blur(12px);
//           }
//         `}</style>

//         <main className="pb-24">

//           {/* Hero Section */}
//           <section className="relative px-6 py-12 md:py-20 max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//               {/* Left Content */}
//               <div className="lg:col-span-7 z-10">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6">
//                   <span className="material-symbols-outlined text-sm">location_on</span>
//                   Hanoi, Vietnam
//                 </div>
//                 <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-gray-900 tracking-tight mb-6 leading-tight">
//                   Dai Nam <br />
//                   <span className="text-red-800">University (DNU)</span>
//                 </h1>
//                 <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
//                   Excellence in Medical Education at the heart of Vietnam's capital. A premier destination for
//                   international students pursuing a global career in medicine.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
//                     Apply Now
//                     <span className="material-symbols-outlined">arrow_forward</span>
//                   </button>
//                   <button type="button" onClick={() => setIsModalOpen(true)} className="bg-yellow-100 text-yellow-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-md transition-all active:scale-95">
//                     Download Brochure
//                     <span className="material-symbols-outlined">download</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Right Image */}
//               <div className="lg:col-span-5 relative mt-12 lg:mt-0">
//                 <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
//                   <img
//                     src={HeroImg}
//                     alt="Dai Nam University Campus"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
//                 </div>
//                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
//                   <div className="text-3xl font-bold text-red-800 font-headline">$5,000</div>
//                   <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Annual Tuition Starts At</div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Global Education Bento Grid */}
//           <section className="bg-gray-50 py-20 px-6">
//             <div className="max-w-7xl mx-auto">
//               <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//                 <div className="max-w-2xl">
//                   <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-[#CC1B1B]">A Truly Global Education</h2>
//                   <p className="text-slate-500">
//                     Tailored for the next generation of international medical practitioners, DNU provides a seamless
//                     transition into the professional world.
//                   </p>
//                 </div>
//                 <div className="bg-teal-50 border border-teal-100 px-6 py-3 rounded-xl">
//                   <span className="text-teal-700 font-bold flex items-center gap-2">
//                     <span className="material-symbols-filled">verified</span>
//                     NMC RECOGNISED
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Feature 1 - English Medium */}
//                 <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-700">
//                   <div className="flex items-start gap-6">
//                     <div className="bg-red-50 p-4 rounded-full">
//                       <span className="material-symbols-outlined text-red-700 text-3xl">translate</span>
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold font-headline mb-3">100% English Medium</h3>
//                       <p className="text-slate-500 leading-relaxed mb-6">
//                         All medical programs for international students are conducted entirely in English. From lectures
//                         and clinical rotations to assessments and textbooks, we ensure zero language barriers in your
//                         academic journey.
//                       </p>
//                       <div className="flex flex-wrap gap-3">
//                         <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">English Textbooks</span>
//                         <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">Foreign Faculty</span>
//                         <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">Global Standards</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Feature 2 - 80% International */}
//                 <div className="bg-red-100 p-8 rounded-xl text-red-900 flex flex-col justify-between">
//                   <span className="material-symbols-outlined text-5xl opacity-50">public</span>
//                   <div>
//                     <h3 className="text-4xl font-extrabold font-headline mb-2 tracking-tighter">80%</h3>
//                     <p className="font-medium">International student body in Medical Sciences Program.</p>
//                   </div>
//                 </div>

//                 {/* Feature 3 - Affordable */}
//                 <div className="bg-white p-8 rounded-xl shadow-sm">
//                   <div className="mb-6">
//                     <span className="material-symbols-outlined text-yellow-600 text-3xl">payments</span>
//                   </div>
//                   <h3 className="text-xl font-bold font-headline mb-2">Affordable Excellence</h3>
//                   <p className="text-slate-500 text-sm leading-relaxed mb-4">
//                     Premium medical education without the premium debt.
//                   </p>
//                   <div className="text-2xl font-bold text-red-800 font-headline">$5,000 – $6,500</div>
//                   <div className="text-xs text-slate-500 font-medium">Per academic year</div>
//                 </div>

//                 {/* Feature 4 - Clinical Exposure */}
//                 <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm relative overflow-hidden">
//                   <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
//                     <div className="w-full md:w-1/3">
//                       <img
//                         src={ClinicalImg}
//                         alt="Medical Students"
//                         className="rounded-lg w-full h-48 object-cover"
//                       />
//                     </div>
//                     <div className="w-full md:w-2/3">
//                       <h3 className="text-xl font-bold font-headline mb-3">Clinical Exposure</h3>
//                       <p className="text-slate-500 text-sm leading-relaxed">
//                         DNU maintains partnerships with top-tier hospitals in Hanoi, offering students intensive
//                         hands-on clinical training from the third year onwards.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="absolute top-0 right-0 p-4 opacity-5">
//                     <span className="material-symbols-outlined text-9xl">medical_services</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Capital Advantage Section */}
//           <section className="py-24 px-6 max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Images */}
//               <div className="order-2 lg:order-1">
//                 <div className="grid grid-cols-2 gap-4">
//                   <img
//                     src={HanoiImg1}
//                     alt="Hanoi Landscape"
//                     className="rounded-xl w-full h-64 object-cover"
//                   />
//                   <img
//                     src={HanoiImg2}
//                     alt="Hanoi Culture"
//                     className="rounded-xl w-full h-64 object-cover mt-8"
//                   />
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="order-1 lg:order-2">
//                 <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs block mb-4">
//                   Location: Hanoi Capital
//                 </span>
//                 <h2 className="text-4xl font-bold font-headline mb-6 leading-tight text-[#CC1B1B]">
//                   The Capital Advantage: <br />Studying in the Heart of Vietnam
//                 </h2>
//                 <p className="text-slate-500 text-lg mb-8 leading-relaxed">
//                   Hanoi is not just a city; it's a living classroom. As the political and cultural capital, students
//                   benefit from the country's most advanced medical infrastructure and a vibrant international community.
//                 </p>
//                 <ul className="space-y-4">
//                   {[
//                     {
//                       title: "Safe & Welcoming",
//                       desc: "Hanoi consistently ranks as one of the safest cities in Southeast Asia for students.",
//                     },
//                     {
//                       title: "Low Cost of Living",
//                       desc: "Modern lifestyle with affordable housing and world-renowned cuisine.",
//                     },
//                     {
//                       title: "Connectivity",
//                       desc: "Centrally located with an international airport connecting you to the world.",
//                     },
//                   ].map((item) => (
//                     <li key={item.title} className="flex items-start gap-3">
//                       <span className="material-symbols-outlined text-red-800">check_circle</span>
//                       <div>
//                         <strong className="text-gray-900 block">{item.title}</strong>
//                         <span className="text-slate-500 text-sm">{item.desc}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Admission Requirements */}
//           <section className="bg-gray-50 py-20 px-6">
//             <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
//               <div className="bg-red-800 px-8 py-10 text-white">
//                 <h2 className="text-3xl font-bold font-headline mb-2">Admission Requirements</h2>
//                 <p className="opacity-80">Streamlined process for international applicants to Dai Nam University.</p>
//               </div>
//               <div className="p-8 md:p-12 space-y-12">
//                 {/* Academic Record */}
//                 <div className="flex flex-col md:flex-row gap-8">
//                   <div className="md:w-1/3">
//                     <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Academic Record</h3>
//                     <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
//                   </div>
//                   <div className="md:w-2/3">
//                     <h4 className="font-bold mb-2">High School Certification</h4>
//                     <p className="text-slate-500 leading-relaxed">
//                       Applicants must have successfully completed 12th Grade (or equivalent) with a minimum of 50%
//                       aggregate in Physics, Chemistry, and Biology.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Entrance Exams */}
//                 <div className="flex flex-col md:flex-row gap-8">
//                   <div className="md:w-1/3">
//                     <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Entrance Exams</h3>
//                     <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
//                   </div>
//                   <div className="md:w-2/3">
//                     <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-yellow-400">
//                       <h4 className="font-bold mb-2 flex items-center gap-2">
//                         <span className="material-symbols-filled text-yellow-600">info</span>
//                         For Indian Applicants
//                       </h4>
//                       <p className="text-slate-500 leading-relaxed">
//                         Qualifying NEET (National Eligibility cum Entrance Test) marks are mandatory as per the
//                         guidelines of the National Medical Commission (NMC).
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Language */}
//                 <div className="flex flex-col md:flex-row gap-8">
//                   <div className="md:w-1/3">
//                     <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Language</h3>
//                     <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
//                   </div>
//                   <div className="md:w-2/3">
//                     <h4 className="font-bold mb-2">English Proficiency</h4>
//                     <p className="text-slate-500 leading-relaxed">
//                       Since the medium of instruction is 100% English, students must demonstrate proficiency. No
//                       IELTS/TOEFL required if previous education was in English medium.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Full Width CTA Section */}
//           <section className="w-full bg-gradient-to-r from-red-50 via-yellow-50 to-white py-8 px-6">
//             <div className="max-w-7xl mx-auto text-center">
//               <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider mb-3">
//                 Admissions Open 2026
//               </span>
//               <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-gray-900 leading-tight mb-3">
//                 Start Your Medical Career <br />
//                 with <span className="text-[#CC1B1B]">Dai Nam University</span>
//               </h2>
//               <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 text-justify md:text-center">
//                 Experience world-class medical education in Hanoi with affordable tuition,
//                 modern hospital training, and a globally recognized degree pathway for
//                 aspiring international doctors.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300"
//                 >
//                   Apply Now
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(true)}
//                   className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition-all duration-300"
//                 >
//                   Get Free Counselling
//                 </button>
//               </div>
//             </div>
//           </section>

//         </main>
//       </div>

//       <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       <Footer />
//     </>
//   );
// };

// export default DaiNamUniversity;









import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import HeroImg from "../assets/dnu.jpeg";
import ClinicalImg from "../assets/A6400013-Edit.jpg";
import HanoiImg1 from "../assets/uclg8.jpeg";
import HanoiImg2 from "../assets/DSC02199.jpg";

const DaiNamUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="bg-gray-50 font-sans text-gray-900 min-h-screen">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
          .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
          .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-style: normal;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
          }
          .material-symbols-filled {
            font-family: 'Material Symbols Outlined';
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-style: normal;
            display: inline-block;
            line-height: 1;
          }
          .glass-nav {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
          }

          /* Fee table responsive */
          @media (max-width: 768px) {
            .fee-layout-inner { flex-direction: column !important; }
            .fee-departure-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <main className="pb-24">

          {/* ── Hero Section ── */}
          <section className="relative px-6 py-12 md:py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Hanoi, Vietnam
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-gray-900 tracking-tight mb-6 leading-tight">
                  Dai Nam <br />
                  <span className="text-red-800">University (DNU)</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
                  Excellence in Medical Education at the heart of Vietnam's capital. A premier destination for
                  international students pursuing a global career in medicine.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                    Apply Now
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-yellow-100 text-yellow-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-md transition-all active:scale-95">
                    Download Brochure
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                  <img src={HeroImg} alt="Dai Nam University Campus" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
                  <div className="text-3xl font-bold text-red-800 font-headline">$4,100</div>
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Annual Tuition Fee</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Global Education Bento Grid ── */}
          <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-[#CC1B1B]">A Truly Global Education</h2>
                  <p className="text-slate-500">
                    Tailored for the next generation of international medical practitioners, DNU provides a seamless
                    transition into the professional world.
                  </p>
                </div>
                <div className="bg-teal-50 border border-teal-100 px-6 py-3 rounded-xl">
                  <span className="text-teal-700 font-bold flex items-center gap-2">
                    <span className="material-symbols-filled">verified</span>
                    NMC RECOGNISED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-700">
                  <div className="flex items-start gap-6">
                    <div className="bg-red-50 p-4 rounded-full">
                      <span className="material-symbols-outlined text-red-700 text-3xl">translate</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-headline mb-3">100% English Medium</h3>
                      <p className="text-slate-500 leading-relaxed mb-6">
                        All medical programs for international students are conducted entirely in English. From lectures
                        and clinical rotations to assessments and textbooks, we ensure zero language barriers in your
                        academic journey.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">English Textbooks</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">Foreign Faculty</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">Global Standards</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 p-8 rounded-xl text-red-900 flex flex-col justify-between">
                  <span className="material-symbols-outlined text-5xl opacity-50">public</span>
                  <div>
                    <h3 className="text-4xl font-extrabold font-headline mb-2 tracking-tighter">80%</h3>
                    <p className="font-medium">International student body in Medical Sciences Program.</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-yellow-600 text-3xl">payments</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">Affordable Excellence</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Premium medical education without the premium debt.
                  </p>
                  <div className="text-2xl font-bold text-red-800 font-headline">$4,100 / Year</div>
                  <div className="text-xs text-slate-500 font-medium">Per academic year (6 years)</div>
                </div>

                <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="w-full md:w-1/3">
                      <img src={ClinicalImg} alt="Medical Students" className="rounded-lg w-full h-48 object-cover" />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-xl font-bold font-headline mb-3">Clinical Exposure</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        DNU maintains partnerships with top-tier hospitals in Hanoi, offering students intensive
                        hands-on clinical training from the third year onwards.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <span className="material-symbols-outlined text-9xl">medical_services</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Capital Advantage ── */}
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <img src={HanoiImg1} alt="Hanoi Landscape" className="rounded-xl w-full h-64 object-cover" />
                  <img src={HanoiImg2} alt="Hanoi Culture" className="rounded-xl w-full h-64 object-cover mt-8" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs block mb-4">
                  Location: Hanoi Capital
                </span>
                <h2 className="text-4xl font-bold font-headline mb-6 leading-tight text-[#CC1B1B]">
                  The Capital Advantage: <br />Studying in the Heart of Vietnam
                </h2>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                  Hanoi is not just a city; it's a living classroom. As the political and cultural capital, students
                  benefit from the country's most advanced medical infrastructure and a vibrant international community.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Safe & Welcoming", desc: "Hanoi consistently ranks as one of the safest cities in Southeast Asia for students." },
                    { title: "Low Cost of Living", desc: "Modern lifestyle with affordable housing and world-renowned cuisine." },
                    { title: "Connectivity", desc: "Centrally located with an international airport connecting you to the world." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-800">check_circle</span>
                      <div>
                        <strong className="text-gray-900 block">{item.title}</strong>
                        <span className="text-slate-500 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════
              FEE STRUCTURE — from WhatsApp image data
          ══════════════════════════════════════════════════ */}
          <FeeStructure setIsModalOpen={setIsModalOpen} />

          {/* ── Admission Requirements ── */}
          <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-red-800 px-8 py-10 text-white">
                <h2 className="text-3xl font-bold font-headline mb-2">Admission Requirements</h2>
                <p className="opacity-80">Streamlined process for international applicants to Dai Nam University.</p>
              </div>
              <div className="p-8 md:p-12 space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Academic Record</h3>
                    <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-bold mb-2">High School Certification</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Applicants must have successfully completed 12th Grade (or equivalent) with a minimum of 50%
                      aggregate in Physics, Chemistry, and Biology.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Entrance Exams</h3>
                    <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-yellow-400">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <span className="material-symbols-filled text-yellow-600">info</span>
                        For Indian Applicants
                      </h4>
                      <p className="text-slate-500 leading-relaxed">
                        Qualifying NEET (National Eligibility cum Entrance Test) marks are mandatory as per the
                        guidelines of the National Medical Commission (NMC).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold font-headline text-red-800 mb-2">Language</h3>
                    <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-bold mb-2">English Proficiency</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Since the medium of instruction is 100% English, students must demonstrate proficiency. No
                      IELTS/TOEFL required if previous education was in English medium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="w-full bg-gradient-to-r from-red-50 via-yellow-50 to-white py-8 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider mb-3">
                Admissions Open 2026
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-gray-900 leading-tight mb-3">
                Start Your Medical Career <br />
                with <span className="text-[#CC1B1B]">Dai Nam University</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 text-justify md:text-center">
                Experience world-class medical education in Hanoi with affordable tuition,
                modern hospital training, and a globally recognized degree pathway for
                aspiring international doctors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button type="button" onClick={() => setIsModalOpen(true)}
                  className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300">
                  Apply Now
                </button>
                <button type="button" onClick={() => setIsModalOpen(true)}
                  className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition-all duration-300">
                  Get Free Counselling
                </button>
              </div>
            </div>
          </section>

        </main>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
};

export default DaiNamUniversity;


/* ══════════════════════════════════════════════════════════
   FEE STRUCTURE COMPONENT
   Data source: WhatsApp image (Manivannan Rajamanickam)
   ══════════════════════════════════════════════════════════ */
function FeeStructure({ setIsModalOpen }) {
  const yearlyFees = [
    { year: "1st Year", usd: "$4,100 + $50", inr: "₹3,73,500" },
    { year: "2nd Year", usd: "$4,100",        inr: "₹3,69,000" },
    { year: "3rd Year", usd: "$4,100",        inr: "₹3,69,000" },
    { year: "4th Year", usd: "$4,100",        inr: "₹3,69,000" },
    { year: "5th Year", usd: "$4,100",        inr: "₹3,69,000" },
    { year: "6th Year", usd: "$4,100",        inr: "₹3,69,000" },
  ];

  const departurePayments = [
    { label: "Admission & University Registration Fees", amount: "₹1,10,000" },
    { label: "One Time Processing Fee",                  amount: "₹3,00,000" },
    { label: "Hostel Fees Starts From",                  amount: "₹1,60,000" },
    { label: "First Semester Fees",                      amount: "₹1,24,500" },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", background: "#fef3c7", color: "#92400e",
            fontSize: 12, fontWeight: 700, padding: "8px 16px",
            borderRadius: 9999, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Transparent & Affordable</span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
            color: "#111827", marginBottom: 12,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Tuition <span style={{ color: "#CC1B1B" }}>Fee Structure</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Year-wise fee breakdown for the complete 6-year MBBS program at Dai Nam University, Hanoi.
          </p>
        </div>

        {/* Layout */}
        <div className="fee-layout-inner" style={{ display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* ── Fee Table ── */}
          <div style={{ flex: "1 1 400px", borderRadius: 16, overflow: "hidden", border: "1px solid #fecaca" }}>
            {/* Header */}
            <div style={{ background: "#b91c1c", padding: "20px 28px" }}>
              <h3 style={{
                color: "#fff", fontWeight: 700, fontSize: 15, margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                Nam Can Tho University — Fee Structure (6 Years)
              </h3>
            </div>

            {/* Column headers */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              background: "#fff5f5", padding: "12px 28px",
              fontSize: 11, fontWeight: 700, color: "#b91c1c",
              textTransform: "uppercase", letterSpacing: "0.08em",
              borderBottom: "1px solid #fecaca",
            }}>
              <span>Year</span><span>USD</span><span>Fees (INR)</span>
            </div>

            {/* Rows */}
            {yearlyFees.map((row, i) => (
              <div key={row.year} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "13px 28px",
                background: i % 2 === 0 ? "#fff" : "#fafafa",
                borderBottom: "1px solid #f1f5f9",
                alignItems: "center",
              }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: "#1e293b" }}>{row.year}</span>
                <span style={{ fontWeight: 700, color: "#b91c1c", fontSize: 13 }}>{row.usd}</span>
                <span style={{ fontSize: 13, color: "#64748b" }}>{row.inr}</span>
              </div>
            ))}

            {/* Grand Total */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              padding: "18px 28px", background: "#b91c1c",
            }}>
              <span style={{ fontWeight: 800, color: "#fff", fontSize: 14 }}>TOTAL</span>
              <span style={{ fontWeight: 800, color: "#fde68a", fontSize: 15 }}>$24,650</span>
              <span style={{ fontWeight: 800, color: "#fde68a", fontSize: 15 }}>₹22,18,500</span>
            </div>

            {/* Note */}
            <div style={{ padding: "12px 28px", background: "#fff7ed", borderTop: "1px solid #fed7aa" }}>
              <p style={{ fontSize: 11, color: "#92400e", margin: 0 }}>
                ★ USD is fixed; INR is for approximate reference only. Fees are non-refundable once admission process is completed.
              </p>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Before Departure Box */}
            <div style={{
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 16, overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            }}>
              <div style={{
                background: "#1e293b", padding: "18px 24px",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span className="material-symbols-outlined" style={{ color: "#fbbf24", fontSize: 20 }}>flight_takeoff</span>
                <h3 style={{
                  color: "#fff", fontWeight: 700, fontSize: 14, margin: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  Before Departure Payables
                </h3>
              </div>

              <div style={{ padding: "20px 24px" }}>
                {departurePayments.map((item, i) => (
                  <div key={item.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "13px 0",
                    borderBottom: i < departurePayments.length - 1 ? "1px solid #f1f5f9" : "none",
                    gap: 12,
                  }}>
                    <span style={{ color: "#475569", fontSize: 13, lineHeight: 1.4, flex: 1 }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: "#b91c1c", fontSize: 14, whiteSpace: "nowrap" }}>{item.amount}</span>
                  </div>
                ))}

                {/* Total */}
                <div style={{
                  marginTop: 16, background: "#1e293b", borderRadius: 12,
                  padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>TOTAL</span>
                  <span style={{ color: "#fde68a", fontWeight: 800, fontSize: 22 }}>₹6,94,500</span>
                </div>
              </div>
            </div>

            {/* Hostel highlight */}
            <div style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1px solid #bbf7d0", borderRadius: 16, padding: "24px",
            }}>
              <span className="material-symbols-outlined" style={{ color: "#15803d", fontSize: 30, display: "block", marginBottom: 10 }}>hotel</span>
              <h4 style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: "#14532d", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Hostel & Accommodation
              </h4>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#15803d", marginBottom: 4 }}>₹1,60,000</div>
              <p style={{ fontSize: 12, color: "#166534", lineHeight: 1.6, margin: 0 }}>
                Separate hostel for Boys and Girls. Indian food available. Safe and secure campus accommodation.
              </p>
            </div>

            {/* CTA inside fee section */}
            <div style={{
              background: "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)",
              borderRadius: 16, padding: "24px", textAlign: "center",
            }}>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                2026 Admissions Open
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#fde68a", marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Book Your Free Counselling
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                style={{
                  background: "#fde68a", color: "#7c2d12", border: "none",
                  padding: "12px 28px", borderRadius: 10, fontWeight: 800,
                  fontSize: 14, cursor: "pointer", width: "100%",
                }}
              >
                Enquire Now →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
