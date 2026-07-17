import { useState } from 'react'
import { Link } from 'react-router-dom'

const universities = [
  'Hanoi Medical University',
  'Hue University of Medicine',
  'Ho Chi Minh City University',
  'Can Tho University',
  'Hai Phong University',
  'Thai Nguyen University',
]

export default function Header() {
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#CC1B1B] px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6 text-white text-xs">
          <span className="flex items-center gap-1">📞 +91 98765 43210</span>
          <span className="flex items-center gap-1">✉ info@medviet.in</span>
          <span className="flex items-center gap-1">🕐 Mon–Sat: 9 AM – 6 PM</span>
        </div>
        <div className="flex items-center gap-2">
          {['f', 'in', '𝕏'].map((s, i) => (
            <div key={i} className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xs cursor-pointer transition">
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white px-6 py-3 flex items-center justify-between shadow-md border-b-4 border-[#F5C518]">
        {/* Logo */}
<Link to="/" className="flex items-center gap-4">
  {/* Logo image */}
  <img
    src="/logo.png"
    alt="MedViet Logo"
    className="w-16 h-16 rounded-xl object-cover"
  />

  {/* Brand text */}
  <div>
    {/* <div className="text-2xl font-serif font-extrabold text-gray-900">
      Med<span className="text-[#CC1B1B]">Viet</span>
    </div> */}
    <div className="text-xl font-bold tracking-widest text-[#CC1B1B] uppercase">
      MBBS in Vietnam
    </div>
  </div>
</Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {[
            { label: 'About Us', to: '/about' },
            { label: 'MBBS in Vietnam', to: '/mbbs-vietnam' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

         {/* Universities Dropdown */}
<li className="relative group">
  <span className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#CC1B1B] hover:bg-red-50 transition cursor-pointer">
    Universities
    <svg
      className="w-4 h-4 transition-transform group-hover:rotate-180"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  {/* Dropdown menu appears on hover */}
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-red-100 border-t-2 border-t-[#CC1B1B] rounded-b-xl shadow-xl min-w-[240px] z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
    <p className="text-[10px] font-bold tracking-widest text-[#CC1B1B] uppercase px-3 py-1">
      Top Medical Universities
    </p>
    {universities.map((uni, i) => (
      <Link
        key={i}
        to={`/universities/${i + 1}`}
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-[#CC1B1B] transition"
      >
        <span className="w-5 h-5 rounded bg-red-50 text-[#CC1B1B] text-xs font-bold flex items-center justify-center flex-shrink-0">
          {i + 1}
        </span>
        {uni}
      </Link>
    ))}
    <div className="border-t border-gray-100 mt-1 pt-1 px-3">
      <Link to="/universities" className="text-xs font-semibold text-[#CC1B1B]">
        View all universities →
      </Link>
    </div>
  </div>
</li>

          {[
            { label: 'Blogs', to: '/blogs' },
            { label: 'Admission Services', to: '/admission-services' },
            { label: 'Contact Us', to: '/contact' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-[#CC1B1B] hover:bg-red-50 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Enquiry Button */}
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#CC1B1B] text-white text-sm font-bold rounded-xl hover:bg-[#b01616] transition border-2 border-[#CC1B1B] hover:bg-white hover:text-[#CC1B1B]"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
          Enquiry
        </Link>
      </nav>
    </header>
  )
}