import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import CanTho from "../assets/canTho.webp";
import NamCan from "../assets/namCan.webp";
import Phan from "../assets/phan.webp";
import Students from "../assets/students.webp";
import BMTMU from "../assets/uclg6.jpeg";
import DNU from "../assets/dnu.jpeg";
import HSU from "../assets/uclg1.jpeg";
import DONG from "../assets/dong.jpg";
import UCL from "../assets/cuu_long.jpg";
import SEO from "../components/SEO";

const universities = [
  {
    name: "University of Health Sciences-Vietnam National University",
    location: "Ho Chi Minh City",
    est: "Est. 2008",
    fees: "$5,100 / Yr",
    course: "6 Years",
    desc: "A well-established private university in Hanoi offering an English-medium MBBS program with state-of-the-art laboratories and hospital tie-ups across the capital.",
    img: HSU,
  },

   {
    name: "Nam Can Tho University",
    location: "Can Tho, Vietnam",
    est: "Est. 2013",
    fees: "$5,250 / Yr",
    course: "6 Years",
    desc: "Offering modern infrastructure and a curriculum aligned with global healthcare standards and technology.",
    img: NamCan,
  },

   {
    name: "Buon Ma Thuot Medical University",
    location: "Buon Ma Thuot, Dak Lak, Vietnam",
    est: "Est. 2007",
    fees: "$5,000 / Yr",
    course: "6 Years",
    desc: "Located in the Central Highlands of Vietnam, this university provides quality medical education with strong regional hospital affiliations for clinical exposure.",
    img: BMTMU,
  },

  {
    name: "Cuu Long University",
    location: "Vinh Long City, Vietnam",
    est: "Est. 2000",
    fees: "$4,500 / Yr",
    course: "6 Years",
    desc: "Cuu Long University (Department of Health Sciences) is a top medical university in Vietnam, offering an English-medium medical education designed for Indian students with an NMC-aligned MBBS curriculum and attached teaching hospital for practical clinical training.",
    img: UCL,
  },

  {
    name: "Can Tho University of Medicine and Pharmacy",
    location: "Can Tho City, Vietnam",
    est: "Est. 1979",
    fees: "$4,500 / Yr",
    course: "6 Years",
    desc: "A premier public university known for its advanced research facilities and extensive clinical training network.",
    img: CanTho,
  },
 
  {
    name: "Phan Chau Trinh University",
    location: "Hoi An, Quang Nam, Vietnam",
    est: "Est. 2008",
    fees: "$5,500 / Yr",
    course: "6 Years",
    desc: "A growing private university offering MBBS with a focus on community medicine and modern clinical training facilities in central Vietnam.",
    img: Phan,
  },
 
  {
    name: "Dai Nam University",
    location: "Hanoi, Vietnam",
    est: "Est. 2008",
    fees: "$4,150 / Yr",
    course: "6 Years",
    desc: "A well-established private university in Hanoi offering an English-medium MBBS program with state-of-the-art laboratories and hospital tie-ups across the capital.",
    img: DNU,
  },

  {
    name: "Dong A University",
    location: "Hanoi, Vietnam",
    est: "Est. 2008",
    fees: "$4,500 / Yr",
    course: "6 Years",
    desc: "A well-established private university in Hanoi offering an English-medium MBBS program with state-of-the-art laboratories and hospital tie-ups across the capital.",
    img: DONG,
  },
];

const steps = [
  { n: 1, title: "Registration", desc: "Submit your documents and registration form to start the process.", active: true },
  { n: 2, title: "Letter of Admission", desc: "University reviews your profile and issues the official admission letter." },
  { n: 3, title: "Visa Processing", desc: "We assist with the complete student visa documentation and interview prep." },
  { n: 4, title: "Documentation", desc: "Legalization and translation of academic transcripts and medical reports." },
  { n: 5, title: "Departure", desc: "Pack your bags! Our team will assist with flight booking and airport pickup." },
];

export default function MbbsVietnam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onEnquire = () => setIsModalOpen(true);

  return (
    <>
      <SEO
        title="MBBS in Vietnam 2026 | Complete Guide for Indian Students | VietnamBBS"
        description="Complete guide to studying MBBS in Vietnam. NMC recognised universities, affordable fees, English medium, WHO listed. Everything Indian students need to know."
        keywords="MBBS in Vietnam guide, why study MBBS Vietnam, Vietnam MBBS eligibility, Vietnam MBBS fees structure, MBBS Vietnam NMC"
        canonical="https://www.vietnambbs.com/mbbsInVietnam"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is MBBS in Vietnam recognised by NMC India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, multiple universities in Vietnam are NMC recognised including UHS VNU, Nam Can Tho University, Dong A University and others."
              }
            },
            {
              "@type": "Question",
              "name": "What is the fee for MBBS in Vietnam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MBBS fees in Vietnam start from ₹3.5 lakhs per year depending on the university."
              }
            },
            {
              "@type": "Question",
              "name": "Is MBBS in Vietnam taught in English?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, MBBS programs in Vietnam are conducted in English medium for international students."
              }
            }
          ]
        }}
      />
      <Header />
      <div className="bg-[#f8f9fa] text-[#191c1d] font-[Work_Sans] selection:bg-[#fdcc22] selection:text-[#6e5700]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Work+Sans:wght@300;400;500;600&family=Inter:wght@400;500;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
          .font-headline { font-family: 'Manrope', sans-serif; }
          .font-body     { font-family: 'Work Sans', sans-serif; }
          .font-label    { font-family: 'Inter', sans-serif; }
          .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24; }
          .hero-gradient { background: linear-gradient(135deg, #a4000b 0%, #cc1b1b 100%); }
          .editorial-shadow { box-shadow: 0px 10px 30px rgba(25,28,29,0.05); }
          .step-circle:hover { background: #a4000b !important; color: #fff !important; border-color: #a4000b !important; }
        `}</style>

        <main className="pt-0">
          {/* Hero - extra compact */}
          <section className="relative min-h-[480px] flex items-center overflow-hidden bg-[#f8f9fa] py-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
              <div className="z-10 py-4">
                <span className="inline-block px-4 py-2 rounded-full bg-[#fdcc22] text-[#6e5700] font-label text-xs sm:text-sm font-black uppercase tracking-widest mb-4">
                  World Class Medical Education
                </span>
                <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-[#191c1d] leading-[1.1] tracking-tight mb-4">
                  Study MBBS in <span className="text-[#a4000b]">Vietnam</span>
                </h1>
                <p className="font-body text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-8 text-justify font-semibold">
                  Experience a globally recognized medical curriculum, English-medium instructions, and high-quality clinical exposure at a fraction of the cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="button" onClick={() => setIsModalOpen(true)} className="hero-gradient text-white px-6 py-3 rounded-xl font-headline font-bold text-base transition-transform active:scale-95 flex items-center justify-center gap-2">
                    Apply Now
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-[#e1e3e4] text-[#191c1d] px-6 py-3 rounded-xl font-headline font-bold text-base transition-transform active:scale-95">
                    Download Brochure
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3qReGuRt-f2N5eZfz2oZdM0ugb7bfQxogtflQyGrxoWr3wHuluvuzYn0HZxUzZqMol8Si73U0dqCybdYLG-BoWNeBHL9nUDvbXqJis2yLsv5PKQyVMQWpKOf8ODwVEKmeSwUpyAR7WN7oS-2XVI_Fcg4S2UM15sCi7VrQy0TMinFlbYfZ4jCAQTESnuzO2Hiz-bWCuxyGYsYOjBZhZWibwYa3P_m38_XdKZm8nEkiehMQ_0RsEtqScc_YYcy1EZsjriUF5R_v5WE",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3yBqgJzeLIIda0zqfBQZ0aXEvi4suphNVRi3KKn3ondcl2K75XQwHrjuQZoZ52_YnxzWiAZ8YkOWh1I2sVikS9KAj_oXoiP2u-sakMyvPHudLvRH5ZIAADlVShtRlN80TiH2EA2fd2JLujBeQ7IIXhoTwZ1XaKWC6LHf0WcQYUsQZVaUBZgQ2yyrclVC3MInTY6rMg0tggMO2JhWZxRr57ZoVvbDC_v7ZMSTgekU6LWR5o6gUrJB95f123-Y3jHvKHixaWawJ5oE",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgvMzf0Yo4HZEItIbF0dMNPI17-iqHfL5_ctpnInG4NGBv4Hs5V__5K2wSXs-KpWuxojM2t118iJst61Ok4ZQ00KUJ5vXVj9YOl2qxxI0M68GCZAWGWzfITy6w3XJ9P6xeWF38yn0Oj8nfTa7StpLqE_I4ql_rT2zblny8pYnnSFUF9nbZqk9GfCDAdwWvRjGo5XlaWHIYKdrtD3DoupzwSq_8y_B1dL_i7e24rn8kiGBMDzezTRUFZSzOhRxybi4LW9HF6dN1LNU",
                    ].map((src, i) => (
                      <img key={i} src={src} alt="student" className="w-10 h-10 rounded-full border-4 border-[#f8f9fa] object-cover" />
                    ))}
                  </div>
                  <p className="font-label text-xs sm:text-sm text-slate-700 font-semibold">
                    <span className="font-extrabold text-[#191c1d]">500+ Students</span> applied this session
                  </p>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-[#fdcc22]/20 rounded-[2rem] rotate-3 -z-10 translate-x-4" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMA7imJy-nlZQolZUnPDAMjaDtvmbq06Ng6qK37KGM8khwHWat_nDROGrYWKkftusgNvIiujxfJBW7QBVWfoD9a2FqFLZH-5PlX6kL8sVnNZixS6dSmkvB90nIOE6uKhcTdH56KrBNuE2jWfRtkzOpunUbY0fr-MggBWb47QuDRQgnDQk_7-2uxFgcDRKof97PiXVmLwmPwBBA5TjS0_RcMrOnnVFqF4zvYtZQ3WHvh5Eg7XMkq8mrbzL-gPMrsYiGwPZq6ERWvAI"
                  alt="Medical university"
                  className="rounded-[2rem] editorial-shadow w-full h-[420px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl editorial-shadow max-w-xs border border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#745b00] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="font-headline font-black text-[#191c1d] text-sm sm:text-base">WHO Recognized</span>
                  </div>
                  <p className="text-xs font-body text-slate-600 font-semibold mt-0.5">Globally valid including MCI/NMC, ECFMG, GMC.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Vietnam - compact */}
          <section className="py-12 bg-[#f3f4f5]" id="why">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-8">
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#CC1B1B] tracking-tight mb-3">Why Vietnam for MBBS?</h2>
                <p className="font-body text-base sm:text-lg font-semibold text-slate-600 max-w-2xl mx-auto">Discover the strategic advantages of pursuing your medical degree in Southeast Asia.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-6 rounded-2xl editorial-shadow border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-[#a4000b] text-4xl mb-4 block">monetization_on</span>
                    <h3 className="font-headline text-xl sm:text-2xl font-black text-[#191c1d] mb-2">Unbeatable Affordability</h3>
                    <p className="font-body text-slate-700 text-sm sm:text-base leading-relaxed text-justify font-semibold">Vietnam offers one of the most cost-effective MBBS programs globally. Tuition fees and cost of living are significantly lower than in Western nations and private colleges in India.</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e7e8e9] flex items-center justify-between">
                    <span className="font-label text-xs sm:text-sm font-black text-[#a4000b]">60% LOWER COSTS</span>
                    <span className="text-[10px] sm:text-xs font-label text-slate-600 font-bold uppercase">COMPARED TO PRIVATE INDIAN COLLEGES</span>
                  </div>
                </div>
                <div className="bg-[#cc1b1b] text-white p-6 rounded-2xl editorial-shadow flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-4 block">translate</span>
                    <h3 className="font-headline text-xl sm:text-2xl font-black mb-2">100% English Medium</h3>
                    <p className="font-body text-sm sm:text-base leading-relaxed opacity-95 text-justify font-semibold">No language barrier. All courses conducted in English by international faculty.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl editorial-shadow border border-slate-200">
                  <span className="material-symbols-outlined text-[#745b00] text-4xl mb-4 block">health_and_safety</span>
                  <h3 className="font-headline text-xl sm:text-2xl font-black text-[#191c1d] mb-2">Safety &amp; Culture</h3>
                  <p className="font-body text-sm sm:text-base leading-relaxed text-slate-700 text-justify font-semibold">Vietnam is one of the safest countries for international students, with a welcoming culture.</p>
                </div>
                <div className="md:col-span-2 bg-white p-6 rounded-2xl editorial-shadow border border-slate-200 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <span className="material-symbols-outlined text-[#a4000b] text-4xl mb-4 block">public</span>
                    <h3 className="font-headline text-xl sm:text-2xl font-black text-[#191c1d] mb-2">WHO &amp; WDOMS Recognized</h3>
                    <p className="font-body text-sm sm:text-base leading-relaxed text-slate-700 text-justify font-semibold">Universities listed in World Directory of Medical Schools, recognized by WHO.</p>
                  </div>
                  <div className="w-full md:w-48 h-32 bg-[#f8f9fa] rounded-2xl flex items-center justify-center p-4 border border-slate-200">
                    <p className="font-headline font-black text-[#a4000b] text-xl tracking-wider">GLOBAL STANDARDS</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility - compact */}
          <section className="py-12 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#CC1B1B] tracking-tight mb-4">Eligibility Criteria</h2>
                <p className="font-body text-base sm:text-lg font-semibold text-slate-600 mb-6">To secure your seat, students must meet the following baseline requirements.</p>
                <div className="space-y-5">
                  {[
                    { icon: "medical_information", title: "NEET Qualification", desc: "Valid NEET-UG score as per admission year." },
                    { icon: "school", title: "Academic Scores", desc: "Minimum 50% marks in PCB in 10+2 (40% for reserved)." },
                    { icon: "calendar_month", title: "Age Requirement", desc: "At least 17 years old as of 31st December of admission year." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#fdcc22] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#6e5700] text-lg">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-extrabold text-[#191c1d] text-base sm:text-lg mb-1">{item.title}</h4>
                        <p className="font-body text-sm sm:text-base text-slate-600 font-semibold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={Students}
                  alt="Medical students"
                  className="rounded-2xl editorial-shadow h-[380px] w-full object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-[#cc1b1b] text-white p-6 rounded-2xl shadow-xl">
                  <p className="font-headline font-black text-4xl mb-0.5">50%</p>
                  <p className="font-label text-xs uppercase tracking-wider font-black">Minimum PCB Score</p>
                </div>
              </div>
            </div>
          </section>

          {/* Top Medical Universities - compact */}
          <section className="py-12 bg-[#f3f4f5]" id="universities">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div className="max-w-2xl">
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#CC1B1B] tracking-tight mb-3">Top Medical Universities</h2>
                  <p className="font-body text-base sm:text-lg font-semibold text-slate-600">We partner with the most prestigious medical institutions in Vietnam.</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-[#e6bdb8] flex items-center justify-center hover:bg-[#e1e3e4] transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-[#e6bdb8] flex items-center justify-center hover:bg-[#e1e3e4] transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {universities.map((u) => (
                  <div key={u.name} className="bg-white rounded-2xl overflow-hidden editorial-shadow flex flex-col sm:flex-row border border-slate-200">
                    <div className="sm:w-2/5 relative">
                      <img src={u.img} alt={u.name} className="h-full w-full object-cover" />
                      <div className="absolute top-3 left-3 bg-[#fdcc22] text-[#6e5700] px-2 py-0.5 rounded-full text-[10px] font-bold font-label">{u.est}</div>
                    </div>
                    <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline text-lg sm:text-xl font-black text-[#CC1B1B] mb-1.5 leading-tight">{u.name}</h3>
                        <div className="flex items-center gap-1 text-slate-600 text-xs sm:text-sm font-bold mb-3">
                          <span className="material-symbols-outlined text-xs">location_on</span>
                          {u.location}
                        </div>
                        <p className="font-body text-xs sm:text-sm text-slate-700 mb-4 text-justify leading-relaxed font-semibold line-clamp-3">{u.desc}</p>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          <div className="bg-[#f3f4f5] p-2 rounded-lg border border-slate-200">
                            <p className="text-[10px] font-label text-slate-600 uppercase tracking-tighter font-semibold">Est. Fees</p>
                            <p className="font-headline font-extrabold text-[#a4000b] text-sm sm:text-base">{u.fees}</p>
                          </div>
                          <div className="bg-[#f3f4f5] p-2 rounded-lg border border-slate-200">
                            <p className="text-[10px] font-label text-slate-600 uppercase tracking-tighter font-semibold">Course</p>
                            <p className="font-headline font-extrabold text-[#745b00] text-sm sm:text-base">{u.course}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setIsModalOpen(true)} className="flex-1 py-2 bg-[#a4000b] text-white rounded-lg font-headline font-bold text-xs sm:text-sm">Enquire Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Process - minimal bottom space */}
          <section className="pt-12 pb-4 bg-[#f8f9fa]" id="process">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-8">
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#CC1B1B] tracking-tight mb-3">Admission Process</h2>
                <p className="font-body text-base sm:text-lg font-semibold text-slate-600 max-w-2xl mx-auto">Your journey to becoming a doctor in Vietnam simplified in five steps.</p>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute top-7 left-0 w-full h-0.5 bg-[#e6bdb8]/30 -z-10" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                  {steps.map((s) => (
                    <div key={s.n} className="flex flex-col items-center text-center group">
                      <div
                        className="step-circle w-14 h-14 rounded-full border-4 flex items-center justify-center font-headline font-black text-lg mb-3 shadow-lg transition-all duration-300 cursor-default"
                        style={{
                          background: s.active ? "#a4000b" : "#fff",
                          borderColor: s.active ? "#a4000b" : "#e6bdb8",
                          color: s.active ? "#fff" : "#5c403c",
                        }}
                      >
                        {s.n}
                      </div>
                      <h4 className="font-headline font-extrabold text-[#191c1d] text-[15px] sm:text-base mb-1">{s.title}</h4>
                      <p className="text-xs font-body text-slate-600 px-1 font-semibold leading-normal">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - compact */}
          <section className="py-12 bg-[#f8f9fa] w-full">
            <div className="w-full">
              <div
                className="relative overflow-hidden text-center px-6 py-12 border border-red-100"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
                }}
              >
                <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#cc1b1b]/5 pointer-events-none" />
                <div className="absolute -bottom-16 -left-8 w-48 h-48 rounded-full bg-[#cc1b1b]/5 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <span className="inline-block mb-3 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-[#cc1b1b] font-label text-[10px] sm:text-xs font-black uppercase tracking-widest">
                    Limited Seats — 2026 Intake Open
                  </span>
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 max-w-2xl text-[#111827]">
                    Your Medical Career Starts Here
                  </h2>
                  <p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8 font-semibold">
                    Join hundreds of Indian students who have secured their MBBS seats in Vietnam.
                    Let our experts guide you from application to arrival — completely free.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={onEnquire}
                      className="bg-[#cc1b1b] text-white px-8 py-3 rounded-xl font-headline font-bold text-base flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:scale-95"
                    >
                      Apply Now
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                    <button
                      type="button"
                      onClick={onEnquire}
                      className="border-2 border-[#cc1b1b]/30 text-[#cc1b1b] px-8 py-3 rounded-xl font-headline font-bold text-base transition-colors hover:bg-[#cc1b1b]/5 active:scale-95"
                    >
                      Talk to a Counsellor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
}