import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

// ✅ Uploaded images imported
import UHSBanner from "../assets/uclg3.jpeg";
import CanPic1 from "../assets/uclg8.jpeg";
import CanPic3 from "../assets/uclg10.jpeg";
import DocImage from "../assets/uclg11.jpeg";
import Hero1 from "../assets/uclg7.jpeg";
import BlogImg from "../assets/uclg9.jpeg";

const Icon = ({ name, className = "", style = {} }) => (
  <span className={`material-symbols-outlined ${className}`} style={style}>{name}</span>
);

export default function UHSVNUUniversity() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      
      {/* Tailwind CSS + Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          display: inline-block;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-gray-50 font-body text-gray-900 overflow-x-hidden">
        <main>
          <HeroSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <ImageGalleryStrip />
          <AdmissionFlow />
          <UniversityHighlights />
          <StudentLifeSection />
          <FeeStructure />
          <ServicesSection />
          <HostelSection />
          <DisclaimerSection />
          <CTASection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </main>
      </div>
      
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   HERO SECTION - Mobile Responsive
───────────────────────────────────────────────────────── */
function HeroSection({ isModalOpen, setIsModalOpen }) {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:h-[751px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="UHS VNU Ho Chi Minh City"
          className="w-full h-full object-cover"
          src={UHSBanner}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Left Content */}
          <div className="w-full lg:max-w-[620px] text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <Icon name="verified" className="text-sm" style={{ color: "#3d2f00" }} />
                No.1 Government Medical University
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 backdrop-blur-sm">
                NMC Recognised
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight">
              University of Health & Sciences-Vietnam National University
            </h1>
            <h2 className="font-headline text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-yellow-400 mb-6 sm:mb-7">
              Vietnam National University — Ho Chi Minh City
            </h2>

            <div className="border-l-4 border-yellow-400 pl-4 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Become a Doctor Beyond Your Dreams. Study MBBS at Vietnam's premier government
                medical institution — WHO listed & globally recognised.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 sm:mb-8">
              {["NMC India", "WHO Listed", "USMLE Ready", "MOH Vietnam"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold"
                >
                  <Icon name="check_circle" className="text-sm" style={{ color: "#fecc00", fontVariationSettings: "'FILL' 1" }} />
                  {label}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-yellow-400 text-yellow-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base hover:shadow-lg transition-all active:scale-95"
              >
                Apply for Admission
                <Icon name="trending_flat" className="text-xl" style={{ color: "#1a1a00" }} />
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-white/20 transition-all"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Stat Card */}
          <div className="w-full sm:max-w-sm lg:max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-6 lg:mt-0">
            <div className="text-center mb-6">
              <div className="font-headline text-4xl sm:text-5xl font-extrabold text-yellow-400">960+</div>
              <div className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-wide mt-1">Indian Students Currently</div>
              <div className="text-white/60 text-[10px] sm:text-xs mt-0.5">Studying MBBS in Vietnam</div>
            </div>
            <div className="h-px bg-white/20 mb-5" />
            <div className="space-y-3">
              {[
                { label: "Program Duration", value: "6 Years" },
                { label: "NEET Required", value: "2024/25/26" },
                { label: "Location", value: "Ho Chi Minh City" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-white/60 text-xs sm:text-sm">{item.label}</span>
                  <span className="text-white text-xs sm:text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   IMAGE GALLERY STRIP - Mobile Responsive
───────────────────────────────────────────────────────── */
function ImageGalleryStrip() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Campus Life & Academics
          </span>
          <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">
            Experience <span className="text-[#CC1B1B]">UHS VNU HCM</span>
          </h2>
        </div>

        {/* Row 1: 2 images — big left, medium right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="relative overflow-hidden rounded-2xl h-56 sm:h-64 md:h-72 group">
            <img src={Hero1} alt="MBBS in Vietnam" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-yellow-400 font-bold text-sm">MBBS in Vietnam</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl h-56 sm:h-64 md:h-72 group">
            <img src={CanPic1} alt="Anatomy Lab Session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-white font-bold text-sm">Anatomy Lab Sessions</span>
            </div>
          </div>
        </div>

        {/* Row 2: 3 equal images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="relative overflow-hidden rounded-2xl h-48 sm:h-52 md:h-60 group">
            <img src={DocImage} alt="Indian Medical Students" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-white font-bold text-sm">Our Students</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl h-48 sm:h-52 md:h-60 group">
            <img src={BlogImg} alt="MBBS Program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-yellow-400 font-bold text-sm">Medical Program</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl h-48 sm:h-52 md:h-60 group">
            <img src={CanPic3} alt="Clinical Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-white font-bold text-sm">Hands-On Clinical Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ─────────────────────────────────────────────────────────
   ADMISSION FLOW - Mobile Responsive
───────────────────────────────────────────────────────── */
function AdmissionFlow() {
  const steps = [
    { icon: "description", label: "Required Documents", desc: "SSLC, HSC, TC, NEET Admit & Score Card, Passport, PAN, Aadhar, Birth Cert, 8 Photos, Income, MOI" },
    { icon: "quiz", label: "NEET Qualified", desc: "Year 2024, 2025 or 2026 qualifying score required" },
    { icon: "payment", label: "Online Application Fee", desc: "₹900 INR online application fee" },
    { icon: "verified_user", label: "Document Verification", desc: "Student document verification by UHS VNU" },
    { icon: "mark_email_read", label: "Confirmation Letter", desc: "Admission confirmation & registration fee ₹30,000 INR" },
    { icon: "how_to_reg", label: "International Enrollment", desc: "Enrollment & registration to UHS VNU" },
    { icon: "mail", label: "Invitation Letter", desc: "Receiving invitation letter from UHS VNU HCM" },
    { icon: "travel_explore", label: "Visa Processing", desc: "Visa application processing at Vietnam Embassy" },
    { icon: "hotel", label: "Hostel Payment", desc: "Accommodation payment for the year" },
    { icon: "account_balance", label: "Tuition Fee", desc: "Payment of first year tuition fees" },
    { icon: "flight_takeoff", label: "Departure from India", desc: "Departure from India to Ho Chi Minh City" },
    { icon: "celebration", label: "Opening Ceremony", desc: "Opening ceremony for Indian students in UHS VNU, Ho Chi Minh City" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Step-by-Step Process
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Flow of the <span className="text-[#CC1B1B]">Admission Process</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-md mx-auto">
            A clear, guided path from document preparation to your first day at UHS VNU.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="relative bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
              style={{
                background: i % 3 === 0 ? "#f0faf5" : i % 3 === 1 ? "#fafafa" : "#fff9f0",
                borderColor: i % 3 === 0 ? "#b2dfcf" : i % 3 === 1 ? "#e5e7eb" : "#fde9c0",
              }}
            >
              <div className="absolute -top-3 left-4 bg-teal-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <Icon name={step.icon} className="text-teal-700 text-3xl mb-2 mt-1" />
              <h4 className="font-headline font-bold text-sm sm:text-base text-gray-900 mb-1">{step.label}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   UNIVERSITY HIGHLIGHTS - Mobile Responsive
───────────────────────────────────────────────────────── */
function UniversityHighlights() {
  const highlights = [
    { icon: "account_balance", title: "Vietnam National University", desc: "Part of VNU, Vietnam's premier public university system — the most prestigious academic institution in the country.", bg: "#005c3f", color: "white", iconColor: "#fecc00" },
    { icon: "verified", title: "NMC & WHO Recognised", desc: "Fully recognized by India's National Medical Commission (NMC), Ministry of Health Vietnam, and listed in WHO World Directory.", bg: "white", color: "#191c1d", iconColor: "#005c3f" },
    { icon: "translate", title: "English Medium MBBS", desc: "Complete 6-year MBBS program conducted in English, designed for international medical aspirants from India and beyond.", bg: "#fecc00", color: "#1a1a00", iconColor: "#1a1a00" },
    { icon: "biotech", title: "USMLE / FMGE / NEXT Ready", desc: "Specialized coaching for FMGE, NEXT, PLAB, and USMLE from the very first year — giving you a global career head start.", bg: "white", color: "#191c1d", iconColor: "#CC1B1B" },
    { icon: "groups", title: "Indian Faculty & Coordinators", desc: "Aswad Overseas appoints dedicated Indian faculties and coordinators to support students throughout the journey.", bg: "#f0faf5", color: "#191c1d", iconColor: "#005c3f" },
    { icon: "location_city", title: "Ho Chi Minh City", desc: "Vietnam's economic capital — vibrant, safe, student-friendly with excellent connectivity and modern infrastructure.", bg: "white", color: "#191c1d", iconColor: "#005c3f" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#CC1B1B]">Why Choose UHS VNU HCM?</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">Vietnam's No.1 Government Medical University with global recognition.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl sm:rounded-2xl p-6 sm:p-7 shadow-sm transition-all hover:shadow-md"
              style={{ background: item.bg, color: item.color, border: item.bg === "white" ? "1.5px solid #e5e7eb" : "none" }}
            >
              <Icon name={item.icon} className="text-3xl sm:text-4xl mb-4" style={{ color: item.iconColor, fontVariationSettings: "'FILL' 1" }} />
              <h3 className="font-headline font-bold text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-85">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   STUDENT LIFE SECTION - Mobile Responsive
───────────────────────────────────────────────────────── */
function StudentLifeSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">Student Life</span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Life at <span className="text-teal-700">UHS VNU</span> — Learning & Beyond
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-2xl">From practical anatomy labs to a supportive Indian community — your journey here is more than just a degree.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:flex-1">
            <img src={CanPic1} alt="Anatomy Lab" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-800/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <Icon name="science" className="text-yellow-400 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }} />
              <h3 className="text-white text-xl sm:text-2xl font-headline font-extrabold mb-1">Hands-On Anatomy Labs</h3>
              <p className="text-white/85 text-xs sm:text-sm">State-of-the-art anatomy dissection labs with expert faculty guiding students through every session from Year 1.</p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4 lg:flex-1">
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-56">
              <img src={DocImage} alt="Indian Medical Students" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-yellow-400 text-xs sm:text-sm font-bold">🇮🇳 Strong Indian Student Community</span>
                <p className="text-white/85 text-xs mt-1">960+ Indian students currently enrolled — you're never alone.</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-56">
              <img src={CanPic3} alt="Clinical Training" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-yellow-400 text-xs sm:text-sm font-bold">🏥 Clinical Training from Year 1</span>
                <p className="text-white/85 text-xs mt-1">Real patient exposure at VNU-affiliated hospitals across Ho Chi Minh City.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {[
            { icon: "groups", value: "960+", label: "Indian Students" },
            { icon: "calendar_month", value: "6 Years", label: "Full MBBS Program" },
            { icon: "local_hospital", value: "15+", label: "Affiliated Hospitals" },
            { icon: "verified", value: "NMC", label: "India Recognised" },
          ].map((stat) => (
            <div key={stat.label} className="bg-teal-50 rounded-xl p-4 sm:p-5 text-center border border-teal-200">
              <Icon name={stat.icon} className="text-teal-700 text-2xl sm:text-3xl mx-auto mb-2" style={{ fontVariationSettings: "'FILL' 1" }} />
              <div className="font-headline text-xl sm:text-2xl font-extrabold text-teal-700">{stat.value}</div>
              <div className="text-gray-500 text-xs sm:text-sm font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   FEE STRUCTURE - Mobile Responsive
───────────────────────────────────────────────────────── */
function FeeStructure() {
  const fees = [
    { year: "University Registration", usd: "1,500 USD", inr: "₹1,30,000" },
    { year: "1st Year", usd: "$5,100", inr: "₹4,78,890" },
    { year: "2nd Year", usd: "$5,610", inr: "₹5,26,779" },
    { year: "3rd Year", usd: "$6,171", inr: "₹5,79,456" },
    { year: "4th Year", usd: "$6,788", inr: "₹6,37,402" },
    { year: "5th Year", usd: "$7,466", inr: "₹7,01,142" },
    { year: "6th Year", usd: "$8,213", inr: "₹7,71,257" },
  ];

  const initialPayments = [
    { label: "University Registration Fee", amount: "₹1,30,000" },
    { label: "Processing Fee", amount: "₹2,63,000" },
    { label: "Tuition Fee for 1st Sem", amount: "₹2,39,445" },
    { label: "Hostel Fee", amount: "₹2,32,000" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">Scholarship Available</span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Tuition <span className="text-[#CC1B1B]">Fee Structure</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">Transparent, year-wise fee breakdown. USD is fixed; INR is approximate reference only.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Fee Table */}
          <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
            <div className="bg-teal-700 px-4 sm:px-6 py-4 sm:py-5">
              <h3 className="text-white font-headline font-bold text-sm sm:text-base">Fees Per Year — 6 Years Program</h3>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-3 bg-teal-50 px-4 sm:px-6 py-3 text-xs font-bold text-teal-700 uppercase">
                  <span>Year</span><span>USD</span><span>INR (Approx)</span>
                </div>
                {fees.map((row, i) => (
                  <div key={row.year} className={`grid grid-cols-3 px-4 sm:px-6 py-3 text-xs sm:text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}>
                    <span className="font-semibold text-gray-900">{row.year}</span>
                    <span className="font-bold text-teal-700">{row.usd}</span>
                    <span className="text-gray-500">{row.inr}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 bg-teal-700 px-4 sm:px-6 py-4 text-sm">
                  <span className="font-extrabold text-white">Grand Total</span>
                  <span className="font-extrabold text-yellow-400">$40,848</span>
                  <span className="font-extrabold text-yellow-400">₹38,24,928</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-5">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 sm:p-7">
              <h3 className="font-headline font-bold text-sm sm:text-base text-yellow-900 mb-1">Payment Before Departure from India</h3>
              <p className="text-yellow-700 text-xs mb-4">One time charges for total 6 years</p>
              {initialPayments.map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-yellow-200/50">
                  <span className="text-yellow-800 text-xs sm:text-sm">{item.label}</span>
                  <span className="font-bold text-teal-700 text-sm sm:text-base">{item.amount}</span>
                </div>
              ))}
              <div className="mt-4 bg-teal-700 rounded-xl p-4 flex justify-between items-center">
                <span className="text-white font-bold text-sm">Grand Total</span>
                <span className="text-yellow-400 font-extrabold text-lg sm:text-xl">₹8,64,445</span>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 sm:p-7">
              <Icon name="hotel" className="text-teal-700 text-3xl mb-3" />
              <h3 className="font-headline font-bold text-sm sm:text-base mb-1">Food & Accommodation</h3>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">$2,500</div>
              <div className="text-gray-500 text-xs mb-3">Approx ₹2,32,000 per year</div>
              <p className="text-teal-800 text-xs leading-relaxed">Hostel for Boys and Girls with dedicated Indian food — North, South & North East Indian cuisine available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SERVICES SECTION - Mobile Responsive
───────────────────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    "Application Form", "Registration Fee", "Immigration Clearance", "Legalization from MEA, India",
    "Document Support", "Visa Stamping – Study Visa 6 Years", "NMC Eligibility Certificate",
    "6.5 Years Local Support & Guidance", "Medical Clearance", "NEXT/FMGE/USMLE & PLAB Coaching (1st Yr)",
    "One Way Flight Ticket", "Consularization by Embassy of Vietnam", "Medical Insurance Processing",
    "North/South & North East Indian Food", "Student Caretaker/Manager/Warden", "Agreement Undertaking by Students & Parents",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#CC1B1B]">Complete Services by Aswad Overseas</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">End-to-end support from India to Vietnam — everything handled for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service) => (
            <div key={service} className="bg-white rounded-xl p-3 sm:p-4 flex items-start gap-3 border border-gray-200 shadow-sm">
              <Icon name="check_circle" className="text-teal-600 text-xl flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }} />
              <span className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   HOSTEL SECTION - Mobile Responsive
───────────────────────────────────────────────────────── */
function HostelSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-yellow-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-red-100/20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">Student Life</span>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Hostel & Indian Food — <span className="text-red-700">Feel at Home</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">Separate hostels for boys and girls with dedicated caretakers. Enjoy authentic North, South, and North East Indian meals daily. Aswad-appointed Indian coordinators ensure your comfort throughout.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "home", label: "Separate Boys & Girls Hostel" },
                  { icon: "restaurant", label: "Indian Cuisine Daily" },
                  { icon: "support_agent", label: "Indian Coordinators" },
                  { icon: "security", label: "Safe & Secure Campus" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-red-100">
                    <Icon name={item.icon} className="text-red-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }} />
                    <span className="text-gray-800 text-xs sm:text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0 space-y-4">
              <div className="rounded-xl overflow-hidden h-36 sm:h-40">
                <img src={Hero1} alt="MBBS Student Life" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-xl p-5 text-center">
                <div className="font-headline text-3xl sm:text-4xl font-extrabold text-white">₹2,63,000</div>
                <div className="text-white/80 text-xs sm:text-sm mt-1">Initial Processing Fee (1st Year)</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center border-2 border-red-600">
                <div className="font-headline text-3xl sm:text-4xl font-extrabold text-red-600">6.5 Yrs</div>
                <div className="text-gray-500 text-xs sm:text-sm mt-1">Local Support & Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   DISCLAIMER SECTION - Mobile Responsive
───────────────────────────────────────────────────────── */
function DisclaimerSection() {
  return (
    <section className="py-10 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-2 border-dashed border-teal-200 rounded-2xl p-5 sm:p-7 bg-white">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Icon name="policy" className="text-teal-700 text-4xl flex-shrink-0" />
            <div>
              <h3 className="font-headline text-base sm:text-lg font-extrabold text-[#CC1B1B] mb-3">Eligibility & Important Notes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {[
                  { icon: "verified_user", label: "NMC Recognised Programs" },
                  { icon: "public", label: "Listed in WHO Directory" },
                  { icon: "language", label: "English Medium Instruction" },
                  { icon: "school", label: "Minimum 67% in High School" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon name={item.icon} className="text-teal-600 text-xl" />
                    <span className="text-gray-700 text-xs sm:text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
                Disclaimer: Candidates must have obtained a minimum aggregate of 67% marks in high school studies. NEET qualification (2024/2025/2026) is mandatory for Indian students as per NMC guidelines. Fees are non-refundable under any circumstances once the admission process is completed. USD is fixed; INR is for approximate reference only. Scholarship availability subject to eligibility criteria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   CTA SECTION - Mobile Responsive
───────────────────────────────────────────────────────── */
function CTASection({ isModalOpen, setIsModalOpen }) {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-teal-50 via-white to-yellow-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="inline-block bg-yellow-400 text-yellow-900 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2 rounded-full uppercase tracking-wider mb-4">2026 Admissions Open — Scholarship Available</span>
        
        <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Begin Your Medical Journey at <span className="text-teal-700">UHS VNU HCM</span>
        </h2>
        
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Vietnam's No.1 Government Medical University. Secure your MBBS seat with expert guidance on admission, documentation, visa processing, and full travel support.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
          <button onClick={() => setIsModalOpen(true)} className="bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-teal-800 transition-all shadow-lg">
            Apply Now
          </button>
          <a href="https://uhs.edu.vn/" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-teal-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base border-2 border-teal-200 hover:bg-teal-50 transition-all">
              Visit University
            </button>
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {[
            { value: "960+", label: "Indian Students" },
            { value: "100%", label: "Visa Support" },
            { value: "₹0", label: "Counselling Fee" },
            { value: "6.5 Yrs", label: "Local Support" },
          ].map((item) => (
            <div key={item.label} className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200">
              <div className="font-headline text-xl sm:text-2xl font-extrabold text-teal-700">{item.value}</div>
              <div className="text-gray-500 text-[10px] sm:text-xs font-semibold mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}