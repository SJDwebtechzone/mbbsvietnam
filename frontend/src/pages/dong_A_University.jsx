// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import EnquiryModal from "../components/EnquiryModal";

// import Slide1 from "../assets/6I4A3707.jpg";
// import Slide2 from "../assets/6I4A3712.jpg";
// import Slide3 from "../assets/6I4A3741.jpg";
// import About1 from "../assets/6I4A3643.jpg";
// import About2 from "../assets/6I4A3742.jpg";
// import Gallery1 from "../assets/6I4A3649.jpg";
// import Gallery2 from "../assets/6I4A3650.jpg";
// import Gallery3 from "../assets/6I4A3651.jpg";
// import Gallery4 from "../assets/6I4A3652.jpg";
// import Gallery5 from "../assets/6I4A3653.jpg";
// import Campus1 from "../assets/6I4A3743.jpg";
// import Campus2 from "../assets/6I4A3744.jpg";
// import Campus3 from "../assets/6I4A3745.jpg";
// import Campus4 from "../assets/6I4A3746.jpg";
// import Campus5 from "../assets/6I4A3747.jpg";

// const slides = [Slide1, Slide2, Slide3];

// const DongAUniversity = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);

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
//           .slide-fade-enter { opacity: 0; }
//           .slide-fade-active { transition: opacity 0.8s ease-in-out; }
//         `}</style>

//         <main className="pb-24">

//           {/* ── Hero Slider Section ── */}
//           <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
//             {slides.map((src, i) => (
//               <div
//                 key={i}
//                 className="absolute inset-0 transition-opacity duration-1000"
//                 style={{ opacity: currentSlide === i ? 1 : 0 }}
//               >
//                 <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//               </div>
//             ))}

//             {/* Slide Content Overlay */}
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 px-6 text-center">
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/90 text-yellow-900 text-xs font-bold uppercase tracking-widest mb-4">
//                 <span className="material-symbols-outlined text-sm">location_on</span>
//                 Da Nang, Vietnam
//               </div>
//               <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-white tracking-tight mb-4 leading-tight drop-shadow-lg">
//                 Welcome to <span className="text-yellow-400">Dong A University</span>
//               </h1>
//               <p className="text-white/90 text-lg max-w-2xl mb-8 leading-relaxed drop-shadow">
//                 A leading private university in Central Vietnam, offering world-class education with international standards and practical medical training.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95"
//                 >
//                   Apply Now
//                   <span className="material-symbols-outlined">arrow_forward</span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-md transition-all active:scale-95"
//                 >
//                   Get Free Counseling
//                   <span className="material-symbols-outlined">support_agent</span>
//                 </button>
//               </div>

//               {/* Slide Dots */}
//               <div className="flex gap-2 mt-8">
//                 {slides.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentSlide(i)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       currentSlide === i ? "bg-yellow-400 w-8" : "bg-white/50"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Prev / Next Arrows */}
//             <button
//               onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
//               className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition"
//             >
//               <span className="material-symbols-outlined">chevron_left</span>
//             </button>
//             <button
//               onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
//               className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition"
//             >
//               <span className="material-symbols-outlined">chevron_right</span>
//             </button>
//           </section>

//           {/* ── Quick Stats ── */}
//           <section className="py-16 px-6 bg-white">
//             <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { icon: "groups", value: "15,000+", label: "Students Enrolled" },
//                 { icon: "public", value: "30+", label: "Countries Represented" },
//                 { icon: "school", value: "500+", label: "Expert Faculty" },
//                 { icon: "verified", value: "NMC", label: "Recognised" },
//               ].map((stat) => (
//                 <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-all">
//                   <span className="material-symbols-outlined text-red-700 text-4xl mb-3 block">{stat.icon}</span>
//                   <div className="text-3xl font-extrabold font-headline text-red-800 mb-1">{stat.value}</div>
//                   <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ── About Section ── */}
//           <section className="py-20 px-6 bg-gray-50">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs block mb-4">About the University</span>
//                 <h2 className="text-4xl font-bold font-headline mb-6 leading-tight text-[#CC1B1B]">
//                   Excellence in Education <br /> at Da Nang
//                 </h2>
//                 <p className="text-slate-500 text-lg mb-6 leading-relaxed">
//                   Dong A University (DAU) is one of Vietnam's most dynamic private universities, located in the
//                   beautiful coastal city of Da Nang. With a commitment to academic excellence and global
//                   standards, DAU has become a preferred destination for international students pursuing
//                   medicine and health sciences.
//                 </p>
//                 <p className="text-slate-500 text-lg mb-8 leading-relaxed">
//                   The university offers a comprehensive medical program with 100% English medium instruction,
//                   modern laboratory facilities, and strong hospital partnerships for hands-on clinical training.
//                 </p>
//                 <ul className="space-y-4">
//                   {[
//                     { title: "100% English Medium", desc: "All lectures, assessments and textbooks in English." },
//                     { title: "NMC Recognised", desc: "Fully recognised by the National Medical Commission of India." },
//                     { title: "Affordable Tuition", desc: "World-class education starting at $4,500 per year." },
//                     { title: "Modern Campus", desc: "State-of-the-art facilities in the heart of Da Nang city." },
//                   ].map((item) => (
//                     <li key={item.title} className="flex items-start gap-3">
//                       <span className="material-symbols-outlined text-red-800 mt-0.5">check_circle</span>
//                       <div>
//                         <strong className="text-gray-900 block">{item.title}</strong>
//                         <span className="text-slate-500 text-sm">{item.desc}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* About Images */}
//               <div className="grid grid-cols-2 gap-4">
//                 <img src={About1} alt="students" className="rounded-2xl w-full h-64 object-cover shadow-md" />
//                 <img src={About2} alt="campus event" className="rounded-2xl w-full h-64 object-cover shadow-md mt-8" />
//                 <div className="col-span-2 grid grid-cols-3 gap-3">
//                   <img src={Gallery1} alt="students" className="rounded-xl w-full h-32 object-cover" />
//                   <img src={Gallery2} alt="students" className="rounded-xl w-full h-32 object-cover" />
//                   <img src={Gallery3} alt="students" className="rounded-xl w-full h-32 object-cover" />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* ── Info Cards ── */}
//           <section className="py-16 px-6 bg-white">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Tuition Card */}
//               <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-red-700">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="bg-red-50 p-3 rounded-full">
//                     <span className="material-symbols-outlined text-red-700 text-2xl">payments</span>
//                   </div>
//                   <h3 className="text-xl font-bold font-headline">Tuition Fees</h3>
//                 </div>
//                 <div className="text-3xl font-extrabold text-red-800 font-headline mb-1">$4,500 – $5,500</div>
//                 <div className="text-sm text-slate-500">Per academic year (all inclusive)</div>
//               </div>

//               {/* Location Card */}
//               <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-yellow-400">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="bg-yellow-50 p-3 rounded-full">
//                     <span className="material-symbols-outlined text-yellow-600 text-2xl">location_city</span>
//                   </div>
//                   <h3 className="text-xl font-bold font-headline">City Life – Da Nang</h3>
//                 </div>
//                 <p className="text-slate-500 text-sm leading-relaxed mb-4">
//                   Da Nang is Vietnam's most liveable city — safe, clean, with beautiful beaches and a thriving student community.
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {["Safe City", "Beach Access", "Affordable Living", "Connectivity"].map((tag) => (
//                     <span key={tag} className="bg-yellow-50 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
//                   ))}
//                 </div>
//               </div>

//               {/* Program Card */}
//               <div className="bg-red-800 rounded-2xl p-8 text-white">
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="material-symbols-outlined text-yellow-300 text-3xl">menu_book</span>
//                   <h3 className="text-xl font-bold font-headline">MBBS Program</h3>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <div className="text-2xl font-extrabold font-headline">6 Years</div>
//                     <div className="text-xs opacity-75 uppercase tracking-wider">Duration</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-extrabold font-headline">English</div>
//                     <div className="text-xs opacity-75 uppercase tracking-wider">Medium</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* ── Campus Life Gallery ── */}
//           <section className="py-20 px-6 bg-gray-50">
//             <div className="max-w-7xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold font-headline text-[#CC1B1B] mb-4">Life at Dong A University</h2>
//                 <p className="text-slate-500 max-w-xl mx-auto">A vibrant, diverse and welcoming campus community for students from around the world.</p>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 <img src={Gallery4} alt="campus life" className="rounded-2xl w-full h-56 object-cover col-span-2 md:col-span-1" />
//                 <img src={Gallery5} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
//                 <img src={Campus1} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
//                 <img src={Campus2} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
//                 <img src={Campus3} alt="campus life" className="rounded-2xl w-full h-56 object-cover col-span-2 md:col-span-1" />
//                 <img src={Campus4} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
//                 <img src={Campus5} alt="campus life" className="rounded-2xl w-full h-56 object-cover col-span-2 md:col-span-2" />
//               </div>
//             </div>
//           </section>

//           {/* ── Why Choose ── */}
//           <section className="py-20 px-6 bg-white">
//             <div className="max-w-7xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold font-headline text-[#CC1B1B] mb-4">Why Choose Dong A University?</h2>
//                 <p className="text-slate-500 max-w-xl mx-auto">Everything you need for a successful medical career, all in one place.</p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                   { icon: "local_hospital", title: "Hospital Training", desc: "Clinical rotations in top Da Nang hospitals from year 3 onwards with real patient exposure.", color: "bg-red-50", iconColor: "text-red-700" },
//                   { icon: "science", title: "Modern Labs", desc: "Fully equipped anatomy, physiology, biochemistry, and pathology labs with latest equipment.", color: "bg-yellow-50", iconColor: "text-yellow-700" },
//                   { icon: "diversity_3", title: "International Community", desc: "Study alongside students from India, Bangladesh, Nepal, and 30+ other countries.", color: "bg-green-50", iconColor: "text-green-700" },
//                   { icon: "restaurant", title: "Indian Food Available", desc: "Dedicated Indian mess serving vegetarian and non-vegetarian meals daily.", color: "bg-orange-50", iconColor: "text-orange-700" },
//                   { icon: "apartment", title: "Comfortable Hostels", desc: "Safe, modern hostel accommodation with 24/7 security and high-speed internet.", color: "bg-blue-50", iconColor: "text-blue-700" },
//                   { icon: "support_agent", title: "Dedicated Support", desc: "Round-the-clock student support from admission to graduation and beyond.", color: "bg-purple-50", iconColor: "text-purple-700" },
//                 ].map((item) => (
//                   <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
//                     <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
//                       <span className={`material-symbols-outlined ${item.iconColor} text-2xl`}>{item.icon}</span>
//                     </div>
//                     <h3 className="text-lg font-bold font-headline mb-2">{item.title}</h3>
//                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ── Admission Requirements ── */}
//           <section className="bg-gray-50 py-20 px-6">
//             <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
//               <div className="bg-red-800 px-8 py-10 text-white">
//                 <h2 className="text-3xl font-bold font-headline mb-2">Admission Requirements</h2>
//                 <p className="opacity-80">Simple and transparent process for international applicants.</p>
//               </div>
//               <div className="p-8 md:p-12 space-y-10">
//                 {[
//                   { title: "Academic Record", heading: "12th Grade Certificate", desc: "Minimum 50% aggregate in Physics, Chemistry, and Biology from a recognised board." },
//                   { title: "Entrance Exam", heading: "NEET Qualification (For Indian Students)", desc: "Valid NEET score is mandatory as per NMC guidelines for Indian applicants." },
//                   { title: "Language", heading: "English Proficiency", desc: "No IELTS/TOEFL required if prior schooling was in English medium." },
//                   { title: "Age", heading: "Minimum 17 Years", desc: "Applicant must be at least 17 years of age at the time of admission." },
//                 ].map((item) => (
//                   <div key={item.title} className="flex flex-col md:flex-row gap-6">
//                     <div className="md:w-1/3">
//                       <h3 className="text-lg font-bold font-headline text-red-800 mb-2">{item.title}</h3>
//                       <div className="h-1 w-10 bg-yellow-400 rounded-full"></div>
//                     </div>
//                     <div className="md:w-2/3">
//                       <h4 className="font-bold mb-1">{item.heading}</h4>
//                       <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ── CTA ── */}
//           <section className="w-full bg-gradient-to-r from-red-50 via-yellow-50 to-white py-16 px-6 relative overflow-hidden">
//             <div className="absolute -top-16 -left-16 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
//             <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
//             <div className="relative z-10 max-w-7xl mx-auto text-center">
//               <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider mb-4">
//                 Admissions Open 2026
//               </span>
//               <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-gray-900 leading-tight mb-4">
//                 Begin Your Journey at <br />
//                 <span className="text-[#CC1B1B]">Dong A University</span>
//               </h2>
//               <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
//                 Join one of Vietnam's most progressive universities with international curriculum standards,
//                 modern facilities, and exceptional student support in beautiful Da Nang.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <button type="button" onClick={() => setIsModalOpen(true)} className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300">
//                   Apply Now
//                 </button>
//                 <button type="button" onClick={() => setIsModalOpen(true)} className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition-all duration-300">
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

// export default DongAUniversity;







import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

import Slide1 from "../assets/6I4A3707.jpg";
import Slide2 from "../assets/6I4A3712.jpg";
import Slide3 from "../assets/6I4A3741.jpg";
import About1 from "../assets/6I4A3643.jpg";
import About2 from "../assets/6I4A3742.jpg";
import Gallery1 from "../assets/6I4A3649.jpg";
import Gallery2 from "../assets/6I4A3650.jpg";
import Gallery3 from "../assets/6I4A3651.jpg";
import Gallery4 from "../assets/6I4A3652.jpg";
import Gallery5 from "../assets/6I4A3653.jpg";
import Campus1 from "../assets/6I4A3743.jpg";
import Campus2 from "../assets/6I4A3744.jpg";
import Campus3 from "../assets/6I4A3745.jpg";
import Campus4 from "../assets/6I4A3746.jpg";
import Campus5 from "../assets/6I4A3747.jpg";

const slides = [Slide1, Slide2, Slide3];

const DongAUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
          .slide-fade-enter { opacity: 0; }
          .slide-fade-active { transition: opacity 0.8s ease-in-out; }
        `}</style>

        <main className="pb-24">

          {/* ── Hero Slider Section ── */}
          <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
            {slides.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: currentSlide === i ? 1 : 0 }}
              >
                <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            ))}

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 px-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/90 text-yellow-900 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Da Nang, Vietnam
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-white tracking-tight mb-4 leading-tight drop-shadow-lg">
                Welcome to <span className="text-yellow-400">Dong A University</span>
              </h1>
              <p className="text-white/90 text-lg max-w-2xl mb-8 leading-relaxed drop-shadow">
                A leading private university in Central Vietnam, offering world-class education with international standards and practical medical training.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95"
                >
                  Apply Now
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-md transition-all active:scale-95"
                >
                  Get Free Counseling
                  <span className="material-symbols-outlined">support_agent</span>
                </button>
              </div>

              {/* Slide Dots */}
              <div className="flex gap-2 mt-8">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === i ? "bg-yellow-400 w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </section>

          {/* ── Quick Stats ── */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "groups", value: "15,000+", label: "Students Enrolled" },
                { icon: "public", value: "30+", label: "Countries Represented" },
                { icon: "school", value: "500+", label: "Expert Faculty" },
                { icon: "verified", value: "NMC", label: "Recognised" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-all">
                  <span className="material-symbols-outlined text-red-700 text-4xl mb-3 block">{stat.icon}</span>
                  <div className="text-3xl font-extrabold font-headline text-red-800 mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── About Section ── */}
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs block mb-4">About the University</span>
                <h2 className="text-4xl font-bold font-headline mb-6 leading-tight text-[#CC1B1B]">
                  Excellence in Education <br /> at Da Nang
                </h2>
                <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                  Dong A University (DAU) is one of Vietnam's most dynamic private universities, located in the
                  beautiful coastal city of Da Nang. With a commitment to academic excellence and global
                  standards, DAU has become a preferred destination for international students pursuing
                  medicine and health sciences.
                </p>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                  The university offers a comprehensive medical program with 100% English medium instruction,
                  modern laboratory facilities, and strong hospital partnerships for hands-on clinical training.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "100% English Medium", desc: "All lectures, assessments and textbooks in English." },
                    { title: "NMC Recognised", desc: "Fully recognised by the National Medical Commission of India." },
                    { title: "Affordable Tuition", desc: "World-class education at just $4,500 per year." },
                    { title: "Modern Campus", desc: "State-of-the-art facilities in the heart of Da Nang city." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-800 mt-0.5">check_circle</span>
                      <div>
                        <strong className="text-gray-900 block">{item.title}</strong>
                        <span className="text-slate-500 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Images */}
              <div className="grid grid-cols-2 gap-4">
                <img src={About1} alt="students" className="rounded-2xl w-full h-64 object-cover shadow-md" />
                <img src={About2} alt="campus event" className="rounded-2xl w-full h-64 object-cover shadow-md mt-8" />
                <div className="col-span-2 grid grid-cols-3 gap-3">
                  <img src={Gallery1} alt="students" className="rounded-xl w-full h-32 object-cover" />
                  <img src={Gallery2} alt="students" className="rounded-xl w-full h-32 object-cover" />
                  <img src={Gallery3} alt="students" className="rounded-xl w-full h-32 object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* ── Info Cards ── */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tuition Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-red-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <span className="material-symbols-outlined text-red-700 text-2xl">payments</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline">Tuition Fees</h3>
                </div>
                <div className="text-3xl font-extrabold text-red-800 font-headline mb-1">$4,500 / Year</div>
                <div className="text-sm text-slate-500">≈ ₹4,05,000 per academic year</div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-yellow-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-50 p-3 rounded-full">
                    <span className="material-symbols-outlined text-yellow-600 text-2xl">location_city</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline">City Life – Da Nang</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Da Nang is Vietnam's most liveable city — safe, clean, with beautiful beaches and a thriving student community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Safe City", "Beach Access", "Affordable Living", "Connectivity"].map((tag) => (
                    <span key={tag} className="bg-yellow-50 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Program Card */}
              <div className="bg-red-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-yellow-300 text-3xl">menu_book</span>
                  <h3 className="text-xl font-bold font-headline">MBBS Program</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-extrabold font-headline">6 Years</div>
                    <div className="text-xs opacity-75 uppercase tracking-wider">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold font-headline">English</div>
                    <div className="text-xs opacity-75 uppercase tracking-wider">Medium</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEE STRUCTURE SECTION ── */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10 sm:mb-14">
                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                  Eligibility: 60% in 12th Grade
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                  Tuition <span className="text-[#CC1B1B]">Fee Structure</span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-3">
                  Transparent, year-wise fee breakdown. USD is fixed; INR is approximate reference only.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Fee Table */}
                <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <div className="bg-teal-700 px-4 sm:px-6 py-4 sm:py-5">
                    <h3 className="text-white font-headline font-bold text-sm sm:text-base">
                      Fees Per Year — 6 Years MBBS Program
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="min-w-[400px]">
                      {/* Header */}
                      <div className="grid grid-cols-3 bg-teal-50 px-4 sm:px-6 py-3 text-xs font-bold text-teal-700 uppercase">
                        <span>Year</span>
                        <span>USD</span>
                        <span>INR (Approx)</span>
                      </div>

                      {/* Rows */}
                      {[
                        { year: "1st Year", usd: "$4,500", inr: "₹4,05,000" },
                        { year: "2nd Year", usd: "$4,500", inr: "₹4,05,000" },
                        { year: "3rd Year", usd: "$4,500", inr: "₹4,05,000" },
                        { year: "4th Year", usd: "$4,500", inr: "₹4,05,000" },
                        { year: "5th Year", usd: "$4,500", inr: "₹4,05,000" },
                        { year: "6th Year", usd: "$4,500", inr: "₹4,05,000" },
                      ].map((row, i) => (
                        <div
                          key={row.year}
                          className={`grid grid-cols-3 px-4 sm:px-6 py-3 text-xs sm:text-sm ${
                            i % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } border-b border-gray-100`}
                        >
                          <span className="font-semibold text-gray-900">{row.year}</span>
                          <span className="font-bold text-teal-700">{row.usd}</span>
                          <span className="text-gray-500">{row.inr}</span>
                        </div>
                      ))}

                      {/* Total Row */}
                      <div className="grid grid-cols-3 bg-teal-700 px-4 sm:px-6 py-4 text-sm">
                        <span className="font-extrabold text-white">Grand Total</span>
                        <span className="font-extrabold text-yellow-400">$27,000</span>
                        <span className="font-extrabold text-yellow-400">₹24,30,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side — Before Departure Payables */}
                <div className="flex-1 space-y-5">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 sm:p-7">
                    <h3 className="font-headline font-bold text-sm sm:text-base text-yellow-900 mb-1">
                      Before Departure Payables
                    </h3>
                    <p className="text-yellow-700 text-xs mb-4">
                      One-time charges payable before departure from India
                    </p>

                    {[
                      { label: "Admission & University Registration Fees", amount: "₹1,10,000" },
                      { label: "One Time Processing Fee", amount: "₹3,00,000" },
                      { label: "Hostel Fees Starts From", amount: "₹2,10,000" },
                      { label: "First Semester Fees", amount: "₹2,02,500" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-center py-3 border-b border-yellow-200/50"
                      >
                        <span className="text-yellow-800 text-xs sm:text-sm">{item.label}</span>
                        <span className="font-bold text-teal-700 text-sm sm:text-base whitespace-nowrap ml-4">
                          {item.amount}
                        </span>
                      </div>
                    ))}

                    {/* Grand Total */}
                    <div className="mt-4 bg-teal-700 rounded-xl p-4 flex justify-between items-center">
                      <span className="text-white font-bold text-sm">Grand Total</span>
                      <span className="text-yellow-400 font-extrabold text-lg sm:text-xl">₹8,22,500</span>
                    </div>

                    <p className="text-gray-400 text-[10px] mt-3 text-center">
                      *Some + USD conditions apply
                    </p>
                  </div>

                  {/* Eligibility Badge Card */}
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 sm:p-7">
                    <span
                      className="material-symbols-outlined text-teal-700 text-3xl mb-3 block"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      school
                    </span>
                    <h3 className="font-headline font-bold text-sm sm:text-base mb-1">Eligibility Criteria</h3>
                    <div className="text-3xl sm:text-4xl font-extrabold text-teal-700">60%</div>
                    <div className="text-gray-500 text-xs mb-3">Minimum aggregate in 12th Grade</div>
                    <p className="text-teal-800 text-xs leading-relaxed">
                      NEET qualification mandatory for Indian students as per NMC guidelines. Physics, Chemistry &amp; Biology required subjects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Campus Life Gallery ── */}
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-headline text-[#CC1B1B] mb-4">Life at Dong A University</h2>
                <p className="text-slate-500 max-w-xl mx-auto">A vibrant, diverse and welcoming campus community for students from around the world.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={Gallery4} alt="campus life" className="rounded-2xl w-full h-56 object-cover col-span-2 md:col-span-1" />
                <img src={Gallery5} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
                <img src={Campus1} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
                <img src={Campus2} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
                <img src={Campus3} alt="campus life" className="rounded-2xl w-full h-56 object-cover col-span-2 md:col-span-1" />
                <img src={Campus4} alt="campus life" className="rounded-2xl w-full h-56 object-cover" />
                <img src={Campus5} alt="campus life" className="rounded-2xl w-full h-56 object-cover col-span-2 md:col-span-2" />
              </div>
            </div>
          </section>

          {/* ── Why Choose ── */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-headline text-[#CC1B1B] mb-4">Why Choose Dong A University?</h2>
                <p className="text-slate-500 max-w-xl mx-auto">Everything you need for a successful medical career, all in one place.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "local_hospital", title: "Hospital Training", desc: "Clinical rotations in top Da Nang hospitals from year 3 onwards with real patient exposure.", color: "bg-red-50", iconColor: "text-red-700" },
                  { icon: "science", title: "Modern Labs", desc: "Fully equipped anatomy, physiology, biochemistry, and pathology labs with latest equipment.", color: "bg-yellow-50", iconColor: "text-yellow-700" },
                  { icon: "diversity_3", title: "International Community", desc: "Study alongside students from India, Bangladesh, Nepal, and 30+ other countries.", color: "bg-green-50", iconColor: "text-green-700" },
                  { icon: "restaurant", title: "Indian Food Available", desc: "Dedicated Indian mess serving vegetarian and non-vegetarian meals daily.", color: "bg-orange-50", iconColor: "text-orange-700" },
                  { icon: "apartment", title: "Comfortable Hostels", desc: "Safe, modern hostel accommodation with 24/7 security and high-speed internet.", color: "bg-blue-50", iconColor: "text-blue-700" },
                  { icon: "support_agent", title: "Dedicated Support", desc: "Round-the-clock student support from admission to graduation and beyond.", color: "bg-purple-50", iconColor: "text-purple-700" },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
                    <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <span className={`material-symbols-outlined ${item.iconColor} text-2xl`}>{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold font-headline mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Admission Requirements ── */}
          <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-red-800 px-8 py-10 text-white">
                <h2 className="text-3xl font-bold font-headline mb-2">Admission Requirements</h2>
                <p className="opacity-80">Simple and transparent process for international applicants.</p>
              </div>
              <div className="p-8 md:p-12 space-y-10">
                {[
                  { title: "Academic Record", heading: "12th Grade Certificate", desc: "Minimum 60% aggregate in Physics, Chemistry, and Biology from a recognised board." },
                  { title: "Entrance Exam", heading: "NEET Qualification (For Indian Students)", desc: "Valid NEET score is mandatory as per NMC guidelines for Indian applicants." },
                  { title: "Language", heading: "English Proficiency", desc: "No IELTS/TOEFL required if prior schooling was in English medium." },
                  { title: "Age", heading: "Minimum 17 Years", desc: "Applicant must be at least 17 years of age at the time of admission." },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-bold font-headline text-red-800 mb-2">{item.title}</h3>
                      <div className="h-1 w-10 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-bold mb-1">{item.heading}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="w-full bg-gradient-to-r from-red-50 via-yellow-50 to-white py-16 px-6 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider mb-4">
                Admissions Open 2026
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-gray-900 leading-tight mb-4">
                Begin Your Journey at <br />
                <span className="text-[#CC1B1B]">Dong A University</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Join one of Vietnam's most progressive universities with international curriculum standards,
                modern facilities, and exceptional student support in beautiful Da Nang.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300"
                >
                  Apply Now
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition-all duration-300"
                >
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

export default DongAUniversity;
