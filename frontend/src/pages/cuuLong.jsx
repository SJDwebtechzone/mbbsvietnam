import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import CuuLongHeroImg from "../assets/cuu_long.jpg";
import SEO from "../components/SEO";

// Gallery assets
import ImgHostel from "../assets/uclg3.jpg";
import ImgCampus from "../assets/uclg5.jpg";
import ImgLab from "../assets/uclg6.jpg";
import ImgBuilding from "../assets/uclg8.jpg";
import ImgStudents from "../assets/uclg9.jpg";
import ImgHospital from "../assets/uclg10.jpg";
import ImgSimulation from "../assets/uclg11.jpg";
import ImgHos from "../assets/uclg04.jpg"; 
import ImgLaboratory from "../assets/uclg06.jpg"; 

const CuuLongUniversity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Cuu Long University MBBS 2026 | Admission open for Indian Students"
        description="Study MBBS at Cuu Long University, Department of Health Sciences. NMC aligned, 100% English medium, attached teaching hospital, affordable fees. Apply now for 2026."
        keywords="Cuu Long University MBBS, Mekong University medical, University of Cuu Long fees, MBBS Vinh Long City Vietnam"
        canonical="https://www.vietnambbs.com/universities/cuu-long-university"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          "name": "Cuu Long University",
          "url": "https://www.vietnambbs.com/universities/cuu-long-university",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vinh Long City",
            "addressCountry": "VN"
          },
          "description": "Top Medical University in Vietnam offering NMC aligned English medium MBBS course.",
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
            background: rgba(255, 255, 255, 0.55);
          }
        `}</style>

        <main>
          {/* Hero Section */}
          <section className="relative min-h-[650px] flex items-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0">
              <img
                src={CuuLongHeroImg}
                alt="Cuu Long University Campus"
                className="w-full h-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CC1B1B]/80 backdrop-blur-md rounded-full border border-red-500/30">
                  <span className="material-symbols-filled text-yellow-400 text-sm">verified</span>
                  <span className="text-xs font-bold text-white tracking-widest uppercase">NMC ALIGNED & APPROVED</span>
                </div>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
                  Cuu Long <br />
                  <span className="text-yellow-400">University</span>
                </h1>
                <p className="text-lg text-slate-200 font-body max-w-lg">
                  Become a Doctor Beyond Your Dreams. Offering world-class MBBS education at the Department of Health Sciences in Vinh Long City, Vietnam.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-[#CC1B1B] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-red-800 transition-all active:scale-95 shadow-lg">
                    Apply Now <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button type="button" onClick={() => setIsModalOpen(true)} className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/30 transition-all active:scale-95 border border-white/20">
                    Get Counselling <span className="material-symbols-outlined">support_agent</span>
                  </button>
                </div>
              </div>

              <div>
                <div className="glass-card p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6 text-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#CC1B1B] font-bold text-xs uppercase tracking-widest mb-1">Mekong Delta Hub</p>
                      <h3 className="font-headline text-2xl font-bold text-slate-900">Vinh Long City</h3>
                    </div>
                    <span className="material-symbols-outlined text-4xl text-[#CC1B1B]">school</span>
                  </div>
                  <div className="h-px bg-slate-200"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/70 rounded-2xl">
                      <p className="text-xs text-slate-500 font-medium uppercase">Tuition Fee</p>
                      <p className="text-xl font-extrabold text-slate-900">$4,500/Yr</p>
                    </div>
                    <div className="p-4 bg-white/70 rounded-2xl">
                      <p className="text-xs text-slate-500 font-medium uppercase">Course</p>
                      <p className="text-xl font-extrabold text-slate-900">6 Years</p>
                    </div>
                    <div className="p-4 bg-white/70 rounded-2xl">
                      <p className="text-xs text-slate-500 font-medium uppercase">Hostel</p>
                      <p className="text-xl font-extrabold text-slate-900">Indian Food</p>
                    </div>
                    <div className="p-4 bg-white/70 rounded-2xl">
                      <p className="text-xs text-slate-500 font-medium uppercase">Flight Time</p>
                      <p className="text-xl font-extrabold text-slate-900">~4 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Cuu Long */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-headline text-4xl font-extrabold text-[#CC1B1B] mb-4">Why Choose Cuu Long University?</h2>
                <p className="text-slate-500">Key highlights and advantages for Indian students pursuing their medical dream in Vietnam.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: "g_translate", title: "English Medium", desc: "100% English medium medical curriculum tailored for Indian students." },
                  { icon: "verified", title: "NMC Aligned", desc: "Syllabus matches requirements set by the National Medical Commission of India." },
                  { icon: "payments", title: "Affordable Fees", desc: "Highly economical tuition fees and extremely low cost of living." },
                  { icon: "local_hospital", title: "Attached Hospital", desc: "Attached teaching hospital inside/close to campus for clinical rotations." },
                  { icon: "biotech", title: "Modern Labs", desc: "Equipped with advanced laboratory apparatus and research equipment." },
                  { icon: "shield", title: "Safe Environment", desc: "Studying in a secure, friendly atmosphere in Vinh Long City." },
                  { icon: "restaurant", title: "Indian Hostels", desc: "Air-conditioned accommodations with dedicated Indian kitchen and chefs." },
                  { icon: "flight_takeoff", title: "Quick Travel", desc: "Only 4 hours flight time from India to Ho Chi Minh City." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:bg-white transition duration-300">
                    <span className="material-symbols-outlined text-[#CC1B1B] text-3xl mb-4 bg-red-50 p-3 rounded-xl">{item.icon}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Flowchart */}
          <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-headline text-4xl font-extrabold text-slate-900 mb-4">Flow of Admission Process</h2>
                <p className="text-slate-500">Step-by-step roadmap from your local registration to arriving at the campus.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {[
                  { step: "01", title: "Submit & Verify", desc: "Provide SSLC, HSC, TC, NEET scorecard, and Passport for verification." },
                  { step: "02", title: "Online Registration", desc: "Complete online application fee payment of ₹900 INR." },
                  { step: "03", title: "Admission Letter", desc: "Confirm seat and receive the Admission Confirmation Letter from CLU." },
                  { step: "04", title: "First Year Fees", desc: "Pay initial registration (₹30,000) and processing fees." },
                  { step: "05", title: "Tuition & Hostel", desc: "Complete payment for the 1st semester tuition fee and hostel." },
                  { step: "06", title: "Visa Stamping", desc: "Vietnam Embassy stamps student visa; travel arrangements are finalized." },
                  { step: "07", title: "Departure", desc: "Fly to Ho Chi Minh City (approx 4 hours) with cohort caretakers." },
                  { step: "08", title: "Opening Ceremony", desc: "Complete residency procedures and attend the opening ceremony in Vinh Long City!" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-150 relative">
                    <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200">{item.step}</div>
                    <h3 className="text-md font-bold text-[#CC1B1B] mb-2 pr-6">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Fee Structure Table */}
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-extrabold text-[#CC1B1B] mb-4">Cuu Long University Fee Structure</h2>
                <p className="text-slate-500">6 Years English-Medium MBBS Program Fee Breakdown</p>
              </div>

              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-md">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-[#CC1B1B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Fee Category</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider">USD</th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider">INR (Approx)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 text-sm text-slate-800">
                    <tr>
                      <td className="px-6 py-4 font-semibold">University Registration Fees (One-time)</td>
                      <td className="px-6 py-4 text-center font-bold text-slate-900">$1,500</td>
                      <td className="px-6 py-4 text-center text-slate-600">₹1,30,000</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold">Tuition Fees per Semester (1st to 12th Sem)</td>
                      <td className="px-6 py-4 text-center font-bold text-slate-900">$2,250</td>
                      <td className="px-6 py-4 text-center text-slate-600">₹2,13,750</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Food & Accommodation per Year</td>
                      <td className="px-6 py-4 text-center font-bold text-slate-900">$2,600</td>
                      <td className="px-6 py-4 text-center text-slate-600">₹2,40,000</td>
                    </tr>
                    <tr className="bg-red-50 text-red-900 font-extrabold">
                      <td className="px-6 py-4 text-left">Total 6-Year Course Tuition</td>
                      <td className="px-6 py-4 text-center">$28,500</td>
                      <td className="px-6 py-4 text-center">₹26,95,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Package Before Departure Summary */}
              <div className="mt-16 bg-slate-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-[15rem]">account_balance_wallet</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-6 text-yellow-400">Estimated Initial Payment Before Departure</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-300 text-sm">
                      <span>University Registration Fee:</span>
                      <span className="font-bold text-white">₹1,30,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300 text-sm">
                      <span>Initial Processing Fee (1st Year):</span>
                      <span className="font-bold text-white">₹2,63,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300 text-sm">
                      <span>Tuition Fee for 1st Semester:</span>
                      <span className="font-bold text-white">₹2,13,750</span>
                    </div>
                    <div className="flex justify-between text-slate-300 text-sm">
                      <span>Hostel Accommodation Fee (1st Year):</span>
                      <span className="font-bold text-white">₹2,40,000</span>
                    </div>
                    <div className="h-px bg-white/20 my-4"></div>
                    <div className="flex justify-between text-lg font-bold text-white">
                      <span>Grand Total:</span>
                      <span className="text-yellow-400">₹8,46,000</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400">1st Year Processing Covers (₹2,63,000)</h4>
                    <ul className="text-xs text-slate-200 space-y-2">
                      <li className="flex items-center gap-2">✓ Student Visa processing, MoFA authentication</li>
                      <li className="flex items-center gap-2">✓ One-way flight ticket & airport transfers</li>
                      <li className="flex items-center gap-2">✓ Medical health insurance, local bank account setup</li>
                      <li className="flex items-center gap-2">✓ Study materials & FMGE/NEXT Coaching classes</li>
                      <li className="flex items-center gap-2">✓ 6 years local caretakers and support in Vietnam</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Campus & Infrastructure Gallery ── */}
          <section className="py-20 px-6 bg-slate-50 border-t border-slate-150">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-headline text-[#CC1B1B] mb-4">Life at Cuu Long University </h2>
                <p className="text-slate-500 max-w-xl mx-auto">Explore the facilities, hostels, laboratories, and dynamic student experience at the University of Cuu Long.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative group overflow-hidden rounded-2xl h-56">
                  <img src={ImgBuilding} alt="University Main Building" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56">
                  <img src={ImgLab} alt="Modern Medical Laboratories" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                   
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56">
                  <img src={ImgCampus} alt="Campus Dining Hall" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56">
                  <img src={ImgHostel} alt="Hostels Residency" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56 col-span-2 md:col-span-1">
                  <img src={ImgStudents} alt="Medical Practicals" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56">
                  <img src={ImgHospital} alt="Teaching Hospital" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56 ">
                  <img src={ImgSimulation} alt="Clinical Skills Center" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                  
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56 ">
                  <img src={ImgLaboratory} alt="Clinical Center" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                  
                </div>
                <div className="relative group overflow-hidden rounded-2xl h-56 ">
                  <img src={ImgHos} alt="Clinical Skills" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-16 text-center">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold">Begin Your Doctor Career at Cuu Long</h2>
              <p className="text-white/80 max-w-lg mx-auto">Get free professional guidance from expert counselors about fee payment installments, document translations, and study visa processing.</p>
              <button type="button" onClick={() => setIsModalOpen(true)} className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition shadow-lg active:scale-95 text-lg">
                Get Free Counselling
              </button>
            </div>
          </section>
        </main>
        <Footer />
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
};

export default CuuLongUniversity;
