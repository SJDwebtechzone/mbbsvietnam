import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

const admissionServices = [
  { label: "Admission Selection", href: "/admissionServices#admission" },
  { label: "University Selection", href: "/admissionServices#university" },
  { label: "Documentation Support", href: "/admissionServices#documentation" },
  { label: "Visa Processing", href: "/admissionServices#visa" },
  { label: "Education Loan", href: "/admissionServices#education-loan" },
  { label: "Forex & Insurance", href: "/admissionServices#forex" },
  { label: "Pre-Departure Briefing", href: "/admissionServices#pre-departure" },
  { label: "Airport Pick-Up & Hostel", href: "/admissionServices#airport" },
  { label: "Post-Landing Support", href: "/admissionServices#post-landing" },
];

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [uniOpen, setUniOpen] = useState(false);
  const [admOpen, setAdmOpen] = useState(false);
  const [uniDropOpen, setUniDropOpen] = useState(false);
const [admDropOpen, setAdmDropOpen] = useState(false);

  // ✅ Dynamic universities from API
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/universities/navbar")
      .then((res) => res.json())
      .then((data) => setUniversities(data))
      .catch((err) => console.error("Failed to fetch universities:", err));
  }, []);
useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav")) {
        setUniDropOpen(false);
        setAdmDropOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setUniOpen(false);
    setAdmOpen(false);
    setUniDropOpen(false);  // ✅ add
    setAdmDropOpen(false);  // ✅ add
  };

  return (
    <header className="w-full font-sans">
      {/* ── Top bar ── */}
      <div className="bg-[#CC1B1B] px-6 py-2 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-6 text-white text-xs">
          <span>Call: +91 90034 20057 | +91 72000 95846</span>
          <span>Email: admission@vietnambbs.com</span>
          <span>Hours: Mon-Sat, 10:00 AM - 7:00 PM</span>
        </div>
        <div className="flex sm:hidden items-center gap-3 text-white text-xs">
          <span>+91 90034 20057</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Facebook */}
          <a href="https://www.facebook.com/vietnammbbs" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/919003420057" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.876L.057 23.428a.75.75 0 0 0 .916.919l5.671-1.479A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.497-5.268-1.373l-.376-.214-3.924 1.023 1.051-3.814-.234-.389A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/vietnammbbs" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@vietnammbbs" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon fill="#CC1B1B" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="bg-white px-6 py-3 flex items-center justify-between shadow-md border-b-4 border-[#F5C518] relative z-40">
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
          <img src="/logo.png" alt="MedViet Logo" className="w-16 h-16 rounded-xl object-cover" />
          <div className="text-xl font-bold tracking-widest text-[#CC1B1B] uppercase">MBBS in Vietnam</div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {[
            { label: "About Us", to: "/about" },
            { label: "MBBS in Vietnam", to: "/mbbsInVietnam" },
          ].map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition">
                {item.label}
              </Link>
            </li>
          ))}

          {/* ✅ Universities dropdown - now dynamic */}
        
<li className="relative">
  <span onClick={() => { setUniDropOpen(!uniDropOpen); setAdmDropOpen(false); }}
    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer">
    Universities
    <svg className={`w-4 h-4 transition-transform duration-200 ${uniDropOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-b-xl shadow-xl min-w-[260px] z-50 py-2 transition-all duration-200 ${uniDropOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <p className="text-[10px] font-bold tracking-widest text-[#CC1B1B] uppercase px-3 py-1">
                Top Medical Universities
              </p>
              {universities.length === 0 ? (
                <p className="px-3 py-2 text-sm text-gray-400">Loading...</p>
              ) : (
                universities.map((university, index) => (
                  <Link
                    key={university.slug}
                    to={`/universities/${university.slug}`}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-[#CC1B1B] transition"
                  >
                    <span className="w-5 h-5 rounded bg-red-50 text-[#CC1B1B] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    {university.name}
                  </Link>
                ))
              )}
              <div className="border-t border-gray-100 mt-1 pt-1 px-3">
                <Link to="/universities" className="text-xs font-semibold text-[#CC1B1B]">
                  View all universities →
                </Link>
              </div>
            </div>
          </li>

          {/* Admission Services dropdown */}
         
<li className="relative">
  <div className="flex items-center">
    <Link to="/admissionServices" className="px-3 py-1 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer flex items-center gap-1">
      Admission Services
    </Link>
    <span onClick={() => { setAdmDropOpen(!admDropOpen); setUniDropOpen(false); }}
      className="px-1 py-1.5 text-gray-700 cursor-pointer hover:text-[#CC1B1B]">
      <svg className={`w-4 h-4 transition-transform duration-200 ${admDropOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
  <div className={`absolute top-full left-0 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-xl shadow-xl min-w-[220px] z-50 py-1 transition-all duration-200 ${admDropOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
             {admissionServices.map((s) => (
  <a
    key={s.href}
    href={s.href}
    onClick={() => setAdmDropOpen(false)}
    className="block px-4 py-1.5 text-sm text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition">
    {s.label}
  </a>
))}
            </div>
          </li>

          {[
            { label: "Blogs", to: "/blog" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setIsModalOpen(true)}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#CC1B1B] text-white text-sm font-bold rounded-xl hover:bg-white hover:text-[#CC1B1B] transition border-2 border-[#CC1B1B]">
          <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
          Enquiry
        </button>

        <div className="flex lg:hidden items-center gap-3">
          <button onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#CC1B1B] text-white text-xs font-bold rounded-lg border-2 border-[#CC1B1B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
            Enquiry
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-gray-200 gap-1.5 hover:bg-red-50 transition">
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`lg:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {[
            { label: "About Us", to: "/about" },
            { label: "MBBS in Vietnam", to: "/mbbsInVietnam" },
          ].map((item) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}
              className="block px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition">
              {item.label}
            </Link>
          ))}

          {/* ✅ Mobile Universities accordion - dynamic */}
          <div>
            <button onClick={() => setUniOpen(!uniOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition">
              Universities
              <svg className={`w-4 h-4 transition-transform duration-200 ${uniOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${uniOpen ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="ml-3 border-l-2 border-[#F5C518] pl-3 py-1 flex flex-col gap-0.5">
                {universities.map((university, index) => (
                  <Link key={university.slug} to={`/universities/${university.slug}`} onClick={closeMenu}
                    className="flex items-center gap-2 px-2 py-2 text-sm text-gray-600 rounded-lg hover:bg-red-50 hover:text-[#CC1B1B] transition">
                    <span className="w-5 h-5 rounded bg-red-50 text-[#CC1B1B] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    {university.name}
                  </Link>
                ))}
                <Link to="/universities" onClick={closeMenu} className="px-2 py-2 text-xs font-semibold text-[#CC1B1B]">
                  View all universities →
                </Link>
              </div>
            </div>
          </div>

          {/* Admission Services accordion */}
          <div>
            <button onClick={() => setAdmOpen(!admOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition">
              Admission Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${admOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${admOpen ? "max-h-96" : "max-h-0"}`}>
              <div className="ml-3 border-l-2 border-[#F5C518] pl-3 py-1 flex flex-col gap-0.5">

{admissionServices.map((s) => (
   <a
    key={s.href}
    href={s.href}
    onClick={() => setAdmDropOpen(false)}
    className="block px-4 py-1.5 text-sm text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition"
    >
    {s.label}
  </a>
))}

              </div>
            </div>
          </div>

          {[
            { label: "Blogs", to: "/blog" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}
              className="block px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition">
              {item.label}
            </Link>
          ))}

          <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-1 text-xs text-gray-500 px-3 pb-2">
            <span>📞 +91 90034 20057 | 90032 26407</span>
            <span>✉ admission@vietnambbs.com</span>
            <span>🕐 Mon-Sat, 9 AM – 6 PM</span>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}