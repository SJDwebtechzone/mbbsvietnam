import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import SEO from "../components/SEO";

import Slide1 from "../assets/dong.jpg";
import Slide2 from "../assets/dong1.webp";
import Slide3 from "../assets/dongu.jpg";
import About1 from "../assets/dong.jpg";
import About2 from "../assets/don1.jpg";
import Gallery1 from "../assets/26.jpg";
import Gallery2 from "../assets/don.jpg";
import Gallery3 from "../assets/07.jpg";
import Gallery4 from "../assets/04.jpg";
import Gallery5 from "../assets/555.jpg";
import Campus1 from "../assets/444.JPG";
import Campus2 from "../assets/333.JPG";
import Campus3 from "../assets/222.jpg";
import Campus4 from "../assets/111.jpg";
import Campus5 from "../assets/dongu.jpg";

const slides = [Slide1, Slide2, Slide3];

const DongAUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <SEO
        title="Dong A University MBBS 2026 | Da Nang Vietnam | VietnamBBS"
        description="Study MBBS at Dong A University Da Nang Vietnam. NMC recognised, fees from ₹4.5 lakhs, English medium. Beautiful coastal city. Apply now for 2026."
        keywords="Dong A University MBBS, DAU Vietnam, Dong A fees, MBBS Da Nang Vietnam, Dong A admission 2026"
        canonical="https://www.vietnambbs.com/universities/dong-a-university"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          "name": "Dong A University",
          "url": "https://www.vietnambbs.com/universities/dong-a-university",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Da Nang",
            "addressCountry": "VN"
          },
          "description": "NMC recognised private university in Da Nang, Vietnam offering MBBS in English medium.",
          "telephone": "+91-90034-20057"
        }}
      />
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

          {/* ── Hero Banner Section (Static Image, No Carousel) ── */}
          <section className="relative w-full min-h-[751px] flex items-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={Slide1} alt="Dong A University campus" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/90 text-yellow-900 text-xs font-black uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Da Nang, Vietnam
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline text-white tracking-tight mb-4 leading-tight drop-shadow-lg">
                Welcome to <br className="hidden lg:block" />
                <span className="text-yellow-400">Dong A University</span>
              </h1>
              <p className="text-white font-semibold text-lg max-w-2xl mb-6 leading-relaxed drop-shadow">
                A leading private university in Central Vietnam, offering world-class education with international standards and practical medical training.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
                  Get Free Counselling
                  <span className="material-symbols-outlined">support_agent</span>
                </button>
              </div>
            </div>
          </section>

          {/* ── Quick Stats ── */}
          <section className="py-10 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "groups", value: "950+", label: "Students Enrolled" },
                { icon: "public", value: "15+", label: "Countries Represented" },
                { icon: "school", value: "200+", label: "Expert Faculty" },
                { icon: "verified", value: "NMC", label: "Recognised" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:shadow-md transition-all">
                  <span className="material-symbols-outlined text-red-700 text-4xl mb-3 block">{stat.icon}</span>
                  <div className="text-3xl sm:text-4xl font-black font-headline text-red-800 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── About Section ── */}
          <section className="py-12 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-yellow-600 font-black uppercase tracking-widest text-xs sm:text-sm block mb-4">About the University</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline mb-4 leading-tight text-[#CC1B1B] tracking-tight">
                  Excellence in Education <br /> at Da Nang
                </h2>
                <p className="text-slate-750 text-lg font-semibold mb-4 leading-relaxed text-justify">
                  Dong A University (DAU) is one of Vietnam's most dynamic private universities, located in the
                  beautiful coastal city of Da Nang. With a commitment to academic excellence and global
                  standards, DAU has become a preferred destination for international students pursuing
                  medicine and health sciences.
                </p>
                <p className="text-slate-750 text-lg font-semibold mb-5 leading-relaxed text-justify">
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
                        <strong className="text-gray-900 block text-base sm:text-lg font-extrabold">{item.title}</strong>
                        <span className="text-slate-650 text-sm sm:text-base font-semibold">{item.desc}</span>
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
          <section className="py-10 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tuition Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-red-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <span className="material-symbols-outlined text-red-700 text-2xl">payments</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-headline mb-2.5">Tuition Fees</h3>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-red-800 font-headline mb-1">$4,500 / Year</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold">≈ ₹4,05,000 per academic year</div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-yellow-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-50 p-3 rounded-full">
                    <span className="material-symbols-outlined text-yellow-600 text-2xl">location_city</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-headline mb-2.5">City Life – Da Nang</h3>
                </div>
                <p className="text-slate-650 text-sm sm:text-base font-semibold leading-relaxed mb-4">
                  Da Nang is Vietnam's most liveable city — safe, clean, with beautiful beaches and a thriving student community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Safe City", "Beach Access", "Affordable Living", "Connectivity"].map((tag) => (
                    <span key={tag} className="bg-yellow-50 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Program Card */}
              <div className="bg-red-800 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-yellow-300 text-3xl">menu_book</span>
                  <h3 className="text-xl sm:text-2xl font-black font-headline mb-2.5">MBBS Program</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-headline">6 Years</div>
                    <div className="text-xs sm:text-sm font-bold opacity-85 uppercase tracking-wider">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-headline">English</div>
                    <div className="text-xs sm:text-sm font-bold opacity-85 uppercase tracking-wider">Medium</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEE STRUCTURE SECTION ── */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10 sm:mb-14">
                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                  Eligibility: 60% in 12th Grade
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Tuition <span className="text-[#CC1B1B]">Fee Structure</span>
                </h2>
                <p className="text-slate-655 text-base sm:text-lg font-semibold mt-3">
                  Transparent, year-wise fee breakdown. USD is fixed; INR is approximate reference only.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Fee Table */}
                <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <div className="bg-[#CC1B1B] px-4 sm:px-6 py-4 sm:py-5">
                    <h3 className="text-white font-headline font-extrabold text-sm sm:text-base">
                      Fees Per Year — 6 Years MBBS Program
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="min-w-[400px]">
                      {/* Header */}
                      <div className="grid grid-cols-3 bg-red-50 px-4 sm:px-6 py-3 text-xs font-black text-[#CC1B1B] uppercase">
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
                          <span className="font-extrabold text-gray-900">{row.year}</span>
                          <span className="font-extrabold text-[#CC1B1B]">{row.usd}</span>
                          <span className="text-slate-650 font-semibold">{row.inr}</span>
                        </div>
                      ))}

                      {/* Total Row */}
                      <div className="grid grid-cols-3 bg-[#CC1B1B] px-4 sm:px-6 py-4 text-sm">
                        <span className="font-black text-white">Grand Total</span>
                        <span className="font-black text-yellow-400">$27,000</span>
                        <span className="font-black text-yellow-400">₹24,30,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side — Before Departure Payables */}
                <div className="flex-1 space-y-5">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 sm:p-7">
                    <h3 className="font-headline font-black text-base sm:text-lg text-yellow-900 mb-1">
                      Before Departure Payables
                    </h3>
                    <p className="text-yellow-700 text-xs sm:text-sm font-semibold mb-4">
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
                        <span className="text-yellow-800 text-xs sm:text-sm font-semibold">{item.label}</span>
                        <span className="font-extrabold text-[#CC1B1B] text-sm sm:text-base whitespace-nowrap ml-4">
                          {item.amount}
                        </span>
                      </div>
                    ))}

                    {/* Grand Total */}
                    <div className="mt-4 bg-[#CC1B1B] rounded-xl p-4 flex justify-between items-center">
                      <span className="text-white font-extrabold text-sm sm:text-base">Grand Total</span>
                      <span className="text-yellow-400 font-black text-xl sm:text-2xl">₹8,22,500</span>
                    </div>

                    <p className="text-gray-400 text-[10px] mt-3 text-center">
                      *Some + USD conditions apply
                    </p>
                  </div>

                  {/* Eligibility Badge Card */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5 sm:p-7">
                    <span
                      className="material-symbols-outlined text-[#CC1B1B] text-3xl mb-3 block"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      school
                    </span>
                    <h3 className="font-headline font-black text-base sm:text-lg mb-1">Eligibility Criteria</h3>
                    <div className="text-3xl sm:text-4xl font-black text-[#CC1B1B]">60%</div>
                    <div className="text-slate-650 text-xs sm:text-sm font-semibold mb-3">Minimum aggregate in 12th Grade</div>
                    <p className="text-red-800 text-xs sm:text-sm font-semibold leading-relaxed">
                      NEET qualification mandatory for Indian students as per NMC guidelines. Physics, Chemistry &amp; Biology required subjects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Campus Life Gallery ── */}
          <section className="py-12 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline text-[#CC1B1B] tracking-tight mb-4">Life at Dong A University</h2>
                <p className="text-slate-650 text-base sm:text-lg font-semibold max-w-xl mx-auto mb-8">A vibrant, diverse and welcoming campus community for students from around the world.</p>
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
          <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline text-[#CC1B1B] tracking-tight mb-4">Why Choose Dong A University?</h2>
                <p className="text-slate-655 text-base sm:text-lg font-semibold max-w-xl mx-auto mb-8">Everything you need for a successful medical career, all in one place.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: "local_hospital", title: "Hospital Training", desc: "Clinical rotations in top Da Nang hospitals from year 3 onwards with real patient exposure.", color: "bg-red-50", iconColor: "text-red-700" },
                  { icon: "science", title: "Modern Labs", desc: "Fully equipped anatomy, physiology, biochemistry, and pathology labs with latest equipment.", color: "bg-yellow-50", iconColor: "text-yellow-700" },
                  { icon: "diversity_3", title: "International Community", desc: "Study alongside students from India, Bangladesh, Nepal, and 30+ other countries.", color: "bg-green-50", iconColor: "text-green-700" },
                  { icon: "restaurant", title: "Indian Food Available", desc: "Dedicated Indian mess serving vegetarian and non-vegetarian meals daily.", color: "bg-orange-50", iconColor: "text-orange-700" },
                  { icon: "apartment", title: "Comfortable Hostels", desc: "Safe, modern hostel accommodation with 24/7 security and high-speed internet.", color: "bg-blue-50", iconColor: "text-blue-700" },
                  { icon: "support_agent", title: "Dedicated Support", desc: "Round-the-clock student support from admission to graduation and beyond.", color: "bg-purple-50", iconColor: "text-purple-700" },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all">
                    <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <span className={`material-symbols-outlined ${item.iconColor} text-2xl`}>{item.icon}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-headline mb-2.5">{item.title}</h3>
                    <p className="text-slate-650 text-sm sm:text-base font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Admission Requirements ── */}
          <section className="bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200/60">
              <div className="bg-red-800 px-8 py-10 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline mb-3">Admission Requirements</h2>
                <p className="opacity-80">Simple and transparent process for international applicants.</p>
              </div>
              <div className="p-6 md:p-12 space-y-10">
                {[
                  { title: "Academic Record", heading: "12th Grade Certificate", desc: "Minimum 60% aggregate in Physics, Chemistry, and Biology from a recognised board." },
                  { title: "Entrance Exam", heading: "NEET Qualification (For Indian Students)", desc: "Valid NEET score is mandatory as per NMC guidelines for Indian applicants." },
                  { title: "Language", heading: "English Proficiency", desc: "No IELTS/TOEFL required if prior schooling was in English medium." },
                  { title: "Age", heading: "Minimum 17 Years", desc: "Applicant must be at least 17 years of age at the time of admission." },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                      <h3 className="text-lg sm:text-xl font-black font-headline text-red-800 mb-2.5">{item.title}</h3>
                      <div className="h-1 w-10 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-extrabold mb-1.5">{item.heading}</h4>
                      <p className="text-slate-650 leading-relaxed text-sm sm:text-base font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="w-full bg-gradient-to-r from-red-50 via-yellow-50 to-white py-10 px-6 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-black uppercase tracking-wider mb-4">
                Admissions Open 2026
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline text-gray-900 tracking-tight leading-tight mb-4">
                Begin Your Journey at <br />
                <span className="text-[#CC1B1B]">Dong A University</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8 font-semibold">
                Join one of Vietnam's most progressive universities with international curriculum standards,
                modern facilities, and exceptional student support in beautiful Da Nang.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#CC1B1B] hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 border-none"
                >
                  Apply Now
                </button>
                <a
                  href="https://donga.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-[#CC1B1B] text-[#CC1B1B] hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center"
                >
                  Visit University
                </a>
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
