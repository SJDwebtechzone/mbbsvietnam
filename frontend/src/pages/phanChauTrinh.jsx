import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import PhanBanner from "../assets/phan-banner.webp";
import USMLEImg from "../assets/students.webp";
import DoctorsImg from "../assets/uclg9.jpeg";
import HostelImg from "../assets/_DSC9355.JPG";
import IndianFoodImg from "../assets/_DSC9356.JPG";
import DaNangImg from "../assets/phan.webp";
import SEO from "../components/SEO";

const PhanChauTrinhUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SEO
        title="Phan Chau Trinh University MBBS 2026 | Da Nang | VietnamBBS"
        description="Study MBBS at Phan Chau Trinh University Da Nang Vietnam. NMC recognised, fees from ₹7.2 lakhs, English medium. Apply now for 2026 admissions."
        keywords="Phan Chau Trinh University MBBS, PCTU Vietnam, Phan Chau Trinh fees, Da Nang medical university"
        canonical="https://www.vietnambbs.com/universities/phan-chau-trinh-university"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          "name": "Phan Chau Trinh University",
          "url": "https://www.vietnambbs.com/universities/phan-chau-trinh-university",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Da Nang",
            "addressCountry": "VN"
          },
          "description": "NMC recognised medical university in Da Nang, Vietnam.",
          "telephone": "+91-90034-20057"
        }}
      />
      <Header />
      <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
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
            white-space: nowrap;
          }
          .material-symbols-filled {
            font-family: 'Material Symbols Outlined';
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-style: normal;
            display: inline-block;
            line-height: 1;
          }
          .glass-card {
            backdrop-filter: blur(12px);
            background: rgba(255, 255, 255, 0.4);
          }
        `}</style>

        <main>
          {/* Hero Section */}
          <section className="relative min-h-[751px] flex items-center overflow-hidden bg-gray-50">
            <div className="absolute inset-0 z-0">
              <img
                src={PhanBanner}
                alt="PCTU Campus"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 backdrop-blur-md rounded-full border border-red-100">
                  <span className="material-symbols-filled text-[#CC1B1B] text-sm">verified</span>
                  <span className="text-xs font-black text-[#CC1B1B] tracking-widest uppercase">NMC RECOGNISED</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                  Phan Chau Trinh <br />
                  <span className="text-red-800">University</span>
                </h1>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                    Apply Now <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-yellow-100 text-yellow-800 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                    Download Brochure <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="glass-card p-8 rounded-3xl border border-white/50 shadow-2xl space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-red-800 font-black text-sm uppercase tracking-widest mb-1">Standard Training</p>
                      <h3 className="font-headline text-3xl font-black">USMLE Oriented</h3>
                    </div>
                    <span className="material-symbols-outlined text-4xl text-red-800">clinical_notes</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/50 rounded-2xl">
                      <p className="text-xs text-slate-650 font-bold">Annual Tuition</p>
                      <p className="text-2xl font-black text-gray-900">$5,000 – $6k</p>
                    </div>
                    <div className="p-4 bg-white/50 rounded-2xl">
                      <p className="text-xs text-slate-655 font-bold">Location</p>
                      <p className="text-2xl font-black text-gray-900">Da Nang</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights Bento Grid */}
          <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16 text-center">
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#CC1B1B] tracking-tight mb-4">Core Program Highlights</h2>
                <div className="h-1.5 w-24 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Clinical Training Network */}
                <div className="md:col-span-8 bg-white p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden relative">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-red-800">apartment</span>
                    </div>
                    <h3 className="text-3xl font-headline font-black mb-4">Clinical Training Network</h3>
                    <p className="text-slate-700 max-w-md text-lg font-semibold leading-relaxed text-justify">
                      Access to 9 affiliated hospitals with over 1500+ beds for immersive clinical rotations and
                      hands-on patient care experience.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
                    {["TAM TRI GENERAL HOSPITAL", "DA NANG C HOSPITAL", "QUANG NAM GENERAL"].map((h) => (
                      <span key={h} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-extrabold whitespace-nowrap">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 100% English */}
                <div className="md:col-span-4 bg-red-100 p-8 rounded-[2rem] text-red-900 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-filled text-4xl">translate</span>
                  </div>
                  <h3 className="text-5xl font-headline font-black mb-2">100%</h3>
                  <p className="text-sm tracking-widest uppercase font-black opacity-80">English Medium Instruction</p>
                </div>

                {/* Hospital-University Model */}
                <div className="md:col-span-4 bg-yellow-100 p-8 rounded-[2rem] text-yellow-900">
                  <span className="material-symbols-outlined text-4xl mb-4">medical_services</span>
                  <h3 className="text-2xl sm:text-3xl font-headline font-black mb-3.5">Hospital-University Integrated Model</h3>
                  <p className="text-slate-705 text-sm sm:text-base font-semibold leading-relaxed text-justify">
                    Our unique curriculum integrates hospital rounds from year one, ensuring medical theory is
                    immediately applicable in clinical settings.
                  </p>
                </div>

                {/* USMLE Support */}
                <div className="md:col-span-8 bg-white p-8 rounded-[2rem] border border-gray-100 flex items-center gap-8">
                  <div className="hidden sm:block w-1/3 h-full rounded-2xl overflow-hidden">
                    <img
                      src={USMLEImg}
                      alt="USMLE Study"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-headline font-black mb-4">USMLE Step 1 &amp; 2 Support</h3>
                    <p className="text-slate-700 font-semibold mb-6 text-justify">
                      Specialized coaching and resource access for students aiming for US Residency through the USMLE
                      pathway.
                    </p>
                    <div className="flex items-center gap-2 text-red-800 font-extrabold">
                      <span className="material-symbols-outlined">trending_up</span>
                      <span>High Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Post-Grad Path Section */}
          <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                  <img
                    src={DoctorsImg}
                    alt="Doctors"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-xs -rotate-3">
                  <p className="text-red-800 font-bold text-lg mb-2">Global Career Path</p>
                  <p className="text-sm text-slate-500 italic font-semibold">
                    "The curriculum is designed for those who look beyond borders. USMLE readiness is our DNA."
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Your Gateway to <br />
                  <span className="text-red-800">US Medical Practice</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      n: "1",
                      title: "Standardised Curriculum",
                      desc: "Courses mapped to USMLE requirements, ensuring students are ready for Step exams early in their degree.",
                    },
                    {
                      n: "2",
                      title: "International Faculty",
                      desc: "Classes led by experienced professionals familiar with international licensing standards.",
                    },
                    {
                      n: "3",
                      title: "US Electives Support",
                      desc: "Assistance in securing clinical electives in the United States to build competitive residency profiles.",
                    },
                  ].map((item) => (
                    <div key={item.n} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-800 font-bold">
                        {item.n}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-lg mb-1.5">{item.title}</h4>
                        <p className="text-slate-650 font-semibold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Life at PCTU */}
          <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#CC1B1B] tracking-tight mb-4">Life at PCTU</h2>
                  <p className="text-slate-650 text-base sm:text-lg font-semibold max-w-xl mb-8">
                    A home away from home, specifically tailored for international students from India and across the
                    globe.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Hostel */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200/50">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={HostelImg}
                      alt="Hostel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5">Modern Hostels</h3>
                    <p className="text-sm sm:text-base text-slate-650 font-semibold text-justify">
                      Safe, secure, and fully-equipped residency halls with high-speed internet and quiet study zones.
                    </p>
                  </div>
                </div>

                {/* Indian Food */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200/50">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={IndianFoodImg}
                      alt="Indian Cuisine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5">Indian Cuisine</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                        Speciality
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-650 font-semibold text-justify">
                      Dedicated kitchen staff serving authentic Indian meals (Veg &amp; Non-Veg) daily in the university
                      mess.
                    </p>
                  </div>
                </div>

                {/* Da Nang */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200/50">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={DaNangImg}
                      alt="Da Nang"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5">Da Nang Vicinity</h3>
                    <p className="text-sm sm:text-base text-slate-655 font-semibold text-justify">
                      Minutes away from Da Nang's beautiful beaches and cultural heritage sites, offering a perfect
                      balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 bg-gradient-to-r from-[#fff7f7] via-[#ffffff] to-[#fff1f1] overflow-hidden relative">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-100 rounded-full blur-3xl"></div>

            <div className="relative z-10 w-full px-6 md:px-12 text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-black uppercase tracking-widest mb-4">
                Admissions Open 2026
              </span>

              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 text-gray-900 tracking-tight">
                Begin Your Journey at <br />
                <span className="text-[#CC1B1B]">Phan Chau Trinh University</span>
              </h2>

              <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 font-semibold leading-relaxed mb-8">
                Join one of Vietnam's most progressive medical universities with
                integrated hospital training, global curriculum standards, and
                exceptional student support.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#CC1B1B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-md"
                >
                  Apply Now
                </button>
                
                <a
                  href="https://pctu.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-sm text-center"
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

export default PhanChauTrinhUniversity;