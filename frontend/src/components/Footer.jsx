import { Link, useNavigate } from "react-router-dom";

// ── All cities (alphabetical order) with their slugs
const allCities = [
  { name: "Agartala",           slug: "agartala" },
  { name: "Agra",               slug: "agra" },
  { name: "Ahmedabad",          slug: "ahmedabad" },
  { name: "Aizawl",             slug: "aizawl" },
  { name: "Ajmer",              slug: "ajmer" },
  { name: "Ambala",             slug: "ambala" },
  { name: "Amritsar",           slug: "amritsar" },
  { name: "Asansol",            slug: "asansol" },
  { name: "Aurangabad",         slug: "aurangabad" },
  { name: "Belgaum",            slug: "belgaum" },
  { name: "Bengaluru",          slug: "bengaluru" },
  { name: "Berhampur",          slug: "berhampur" },
  { name: "Bhagalpur",          slug: "bhagalpur" },
  { name: "Bhavnagar",          slug: "bhavnagar" },
  { name: "Bhilai",             slug: "bhilai" },
  { name: "Bhopal",             slug: "bhopal" },
  { name: "Bhubaneswar",        slug: "bhubaneswar" },
  { name: "Bikaner",            slug: "bikaner" },
  { name: "Bilaspur",           slug: "bilaspur" },
  { name: "Bishnupur",          slug: "bishnupur" },
  { name: "Bokaro",             slug: "bokaro" },
  { name: "Champhai",           slug: "champhai" },
  { name: "Chennai",            slug: "chennai" },
  { name: "Coimbatore",         slug: "coimbatore" },
  { name: "Connaught Place",    slug: "connaught-place" },
  { name: "Cuttack",            slug: "cuttack" },
  { name: "Darbhanga",          slug: "darbhanga" },
  { name: "Davangere",          slug: "davangere" },
  { name: "Dehradun",           slug: "dehradun" },
  { name: "Dharamshala",        slug: "dharamshala" },
  { name: "Dharmanagar",        slug: "dharmanagar" },
  { name: "Dhanbad",            slug: "dhanbad" },
  { name: "Dibrugarh",          slug: "dibrugarh" },
  { name: "Dimapur",            slug: "dimapur" },
  { name: "Durg",               slug: "durg" },
  { name: "Durgapur",           slug: "durgapur" },
  { name: "Dwarka",             slug: "dwarka" },
  { name: "Erode",              slug: "erode" },
  { name: "Faridabad",          slug: "faridabad" },
  { name: "Gandhinagar",        slug: "gandhinagar" },
  { name: "Gangtok",            slug: "gangtok" },
  { name: "Gaya",               slug: "gaya" },
  { name: "Ghaziabad",          slug: "ghaziabad" },
  { name: "Guntur",             slug: "guntur" },
  { name: "Gurugram",           slug: "gurugram" },
  { name: "Guwahati",           slug: "guwahati" },
  { name: "Gwalior",            slug: "gwalior" },
  { name: "Gyalshing",          slug: "gyalshing" },
  { name: "Haridwar",           slug: "haridwar" },
  { name: "Hazaribagh",         slug: "hazaribagh" },
  { name: "Hisar",              slug: "hisar" },
  { name: "Howrah",             slug: "howrah" },
  { name: "Hubli",              slug: "hubli" },
  { name: "Hyderabad",          slug: "hyderabad" },
  { name: "Imphal",             slug: "imphal" },
  { name: "Indore",             slug: "indore" },
  { name: "Itanagar",           slug: "itanagar" },
  { name: "Jabalpur",           slug: "jabalpur" },
  { name: "Jaipur",             slug: "jaipur" },
  { name: "Jalandhar",          slug: "jalandhar" },
  { name: "Jamshedpur",         slug: "jamshedpur" },
  { name: "Jodhpur",            slug: "jodhpur" },
  { name: "Jorhat",             slug: "jorhat" },
  { name: "Jowai",              slug: "jowai" },
  { name: "Kakinada",           slug: "kakinada" },
  { name: "Kanpur",             slug: "kanpur" },
  { name: "Kannur",             slug: "kannur" },
  { name: "Karimnagar",         slug: "karimnagar" },
  { name: "Khammam",            slug: "khammam" },
  { name: "Kharagpur",          slug: "kharagpur" },
  { name: "Kochi",              slug: "kochi" },
  { name: "Kohima",             slug: "kohima" },
  { name: "Kolhapur",           slug: "kolhapur" },
  { name: "Kolkata",            slug: "kolkata" },
  { name: "Kollam",             slug: "kollam" },
  { name: "Korba",              slug: "korba" },
  { name: "Kota",               slug: "kota" },
  { name: "Kozhikode",          slug: "kozhikode" },
  { name: "Lucknow",            slug: "lucknow" },
  { name: "Ludhiana",           slug: "ludhiana" },
  { name: "Lunglei",            slug: "lunglei" },
  { name: "Madurai",            slug: "madurai" },
  { name: "Mandi",              slug: "mandi" },
  { name: "Manali",             slug: "manali" },
  { name: "Mangaluru",          slug: "mangaluru" },
  { name: "Mapusa",             slug: "mapusa" },
  { name: "Margao",             slug: "margao" },
  { name: "Meerut",             slug: "meerut" },
  { name: "Mohali",             slug: "mohali" },
  { name: "Mokokchung",         slug: "mokokchung" },
  { name: "Mumbai",             slug: "mumbai" },
  { name: "Muzaffarpur",        slug: "muzaffarpur" },
  { name: "Mysuru",             slug: "mysuru" },
  { name: "Nagpur",             slug: "nagpur" },
  { name: "Naharlagun",         slug: "naharlagun" },
  { name: "Nainital",           slug: "nainital" },
  { name: "Namchi",             slug: "namchi" },
  { name: "Nashik",             slug: "nashik" },
  { name: "New Delhi",          slug: "new-delhi" },
  { name: "Nizamabad",          slug: "nizamabad" },
  { name: "Noida",              slug: "noida" },
  { name: "Panaji",             slug: "panaji" },
  { name: "Panipat",            slug: "panipat" },
  { name: "Pasighat",           slug: "pasighat" },
  { name: "Patiala",            slug: "patiala" },
  { name: "Patna",              slug: "patna" },
  { name: "Prayagraj",          slug: "prayagraj" },
  { name: "Pune",               slug: "pune" },
  { name: "Raipur",             slug: "raipur" },
  { name: "Rajkot",             slug: "rajkot" },
  { name: "Ranchi",             slug: "ranchi" },
  { name: "Rewa",               slug: "rewa" },
  { name: "Rishikesh",          slug: "rishikesh" },
  { name: "Rohini",             slug: "rohini" },
  { name: "Roorkee",            slug: "roorkee" },
  { name: "Rourkela",           slug: "rourkela" },
  { name: "Salem",              slug: "salem" },
  { name: "Sambalpur",          slug: "sambalpur" },
  { name: "Shillong",           slug: "shillong" },
  { name: "Shimla",             slug: "shimla" },
  { name: "Silchar",            slug: "silchar" },
  { name: "Siliguri",           slug: "siliguri" },
  { name: "Solapur",            slug: "solapur" },
  { name: "Solan",              slug: "solan" },
  { name: "Surat",              slug: "surat" },
  { name: "Tezpur",             slug: "tezpur" },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
  { name: "Thoubal",            slug: "thoubal" },
  { name: "Thrissur",           slug: "thrissur" },
  { name: "Tirunelveli",        slug: "tirunelveli" },
  { name: "Tirupati",           slug: "tirupati" },
  { name: "Trichy",             slug: "trichy" },
  { name: "Tura",               slug: "tura" },
  { name: "Udaipur",            slug: "udaipur" },
  { name: "Ujjain",             slug: "ujjain" },
  { name: "Vadodara",           slug: "vadodara" },
  { name: "Varanasi",           slug: "varanasi" },
  { name: "Vasco da Gama",      slug: "vasco-da-gama" },
  { name: "Vellore",            slug: "vellore" },
  { name: "Vijayawada",         slug: "vijayawada" },
  { name: "Visakhapatnam",      slug: "visakhapatnam" },
  { name: "Warangal",           slug: "warangal" },
];

// ── All states (alphabetical order) with their slugs
const allStates = [
  { name: "Andhra Pradesh",    slug: "andhra-pradesh" },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
  { name: "Assam",             slug: "assam" },
  { name: "Bihar",             slug: "bihar" },
  { name: "Chhattisgarh",      slug: "chhattisgarh" },
  { name: "Delhi",             slug: "delhi" },
  { name: "Goa",               slug: "goa" },
  { name: "Gujarat",           slug: "gujarat" },
  { name: "Haryana",           slug: "haryana" },
  { name: "Himachal Pradesh",  slug: "himachal-pradesh" },
  { name: "Jharkhand",         slug: "jharkhand" },
  { name: "Karnataka",         slug: "karnataka" },
  { name: "Kerala",            slug: "kerala" },
  { name: "Madhya Pradesh",    slug: "madhya-pradesh" },
  { name: "Maharashtra",       slug: "maharashtra" },
  { name: "Manipur",           slug: "manipur" },
  { name: "Meghalaya",         slug: "meghalaya" },
  { name: "Mizoram",           slug: "mizoram" },
  { name: "Nagaland",          slug: "nagaland" },
  { name: "Odisha",            slug: "odisha" },
  { name: "Punjab",            slug: "punjab" },
  { name: "Rajasthan",         slug: "rajasthan" },
  { name: "Sikkim",            slug: "sikkim" },
  { name: "Tamil Nadu",        slug: "tamil-nadu" },
  { name: "Telangana",         slug: "telangana" },
  { name: "Tripura",           slug: "tripura" },
  { name: "Uttar Pradesh",     slug: "uttar-pradesh" },
  { name: "Uttarakhand",       slug: "uttarakhand" },
  { name: "West Bengal",       slug: "west-bengal" },
];

// ── NavLink helper — navigates + scrolls to top
function NavLink({ to, children, className }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-4 shadow-inner mt-12 font-sans" style={{ background: "#D3D3D3" }}>

      {/* ══ SECTION 1 — Admission Guides by City ══ */}
      <div className="px-6 py-8 max-w-6xl mx-auto">
        <h3 className="text-lg sm:text-xl font-extrabold text-[#CC1B1B] mb-4 tracking-wide uppercase">
          Admission Guides by Cities
        </h3>
        <div className="flex flex-wrap items-center gap-y-2">
          {allCities.map((city, i) => (
            <span key={city.slug} className="flex items-center">
              <NavLink
                to={`/admission-guides/city/${city.slug}`}
                className="text-[14px] sm:text-[15px] font-semibold text-gray-800 hover:text-[#CC1B1B] hover:underline transition duration-150"
              >
                {city.name}
              </NavLink>
              {i < allCities.length - 1 && (
                <span className="text-gray-500 mx-2 text-xs select-none">—</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ══ SECTION 2 — Admission Guides by State ══ */}
      <div className="px-6 py-8 max-w-6xl mx-auto border-t border-gray-400/45">
        <h3 className="text-lg sm:text-xl font-extrabold text-[#CC1B1B] mb-4 tracking-wide uppercase">
          Admission Guides by State
        </h3>
        <div className="flex flex-wrap items-center gap-y-2">
          {allStates.map((state, i) => (
            <span key={state.slug} className="flex items-center">
              <NavLink
                to={`/admission-guides/${state.slug}`}
                className="text-[14px] sm:text-[15px] font-semibold text-gray-800 hover:text-[#CC1B1B] hover:underline transition duration-150"
              >
                {state.name}
              </NavLink>
              {i < allStates.length - 1 && (
                <span className="text-gray-500 mx-2 text-xs select-none">—</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ══ Main Footer Content ══ */}
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto border-t border-gray-400/45">

        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MedViet Logo"
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover shadow-sm border border-gray-300"
            />
            <span className="text-2xl sm:text-3xl font-black text-[#CC1B1B] tracking-wider uppercase leading-none">
              MBBS in Vietnam
            </span>
          </NavLink>
          <p className="text-[15px] sm:text-base font-medium text-gray-800 leading-relaxed text-justify">
            MBBS in Vietnam helps Indian students pursue MBBS in Vietnam with direct
            admissions, affordable fees, and recognized universities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-extrabold text-[#CC1B1B] mb-4 tracking-wide uppercase border-b-2 border-gray-400/30 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-[15px] sm:text-base font-semibold text-gray-800">
            <li><NavLink to="/about" className="hover:text-[#CC1B1B] hover:underline transition">About Us</NavLink></li>
            <li><NavLink to="/mbbsInVietnam" className="hover:text-[#CC1B1B] hover:underline transition">MBBS in Vietnam</NavLink></li>
            <li><NavLink to="/universities" className="hover:text-[#CC1B1B] hover:underline transition">Universities</NavLink></li>
            <li><NavLink to="/admissionServices" className="hover:text-[#CC1B1B] hover:underline transition">Admission Services</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[#CC1B1B] hover:underline transition">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-extrabold text-[#CC1B1B] mb-4 tracking-wide uppercase border-b-2 border-gray-400/30 pb-2">Contact Us</h3>
          <ul className="space-y-3 text-[15px] sm:text-base font-semibold text-gray-800">
            <li className="flex items-center gap-2">
              <span className="text-lg">📞</span>
              <span>+91 90034 20057 | +91 72000 95846</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">✉</span>
              <a href="mailto:admission@vietnambbs.com" className="hover:text-[#CC1B1B] hover:underline transition">admission@vietnambbs.com</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg shrink-0 mt-0.5">📍</span>
              <span className="leading-relaxed">Old No: 36 G, New No: 1/36-3, North Parade Road, St Thomas Mount, Chennai - 600016</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">🕐</span>
              <span>Mon–Sat: 9 AM – 6 PM</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/vietnammbbs" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-125"
              aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/919003420057" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-125"
              aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25D366" viewBox="0 0 24 24">
                <path d="M12 .02c-6.614 0-12 5.393-12 12 0 2.112.551 4.167 1.597 5.978L.053 23.51a.734.734 0 0 0 .912.912l5.513-1.543A11.96 11.96 0 0 0 12 24.02c6.614 0 12-5.393 12-12s-5.386-12-12-12zm6.262 16.55c-.247.695-1.222 1.362-1.68 1.4-.457.039-.908.192-2.923-.604-2.58-1.018-4.22-3.642-4.348-3.812-.128-.17-.123-.393-.119-.45.004-.057.147-.282.222-.394.075-.112.1-.187.15-.312.05-.125.025-.237-.012-.312s-.937-2.25-1.287-3.094c-.34-.82-.693-.71-.955-.723-.247-.012-.53-.012-.812-.012-.281 0-.737.106-1.125.525-.387.419-1.48 1.444-1.48 3.525 0 2.08 1.512 4.093 1.725 4.381.212.288 2.975 4.544 7.206 6.369.975.42 1.737.67 2.33.86.97.31 1.854.265 2.553.16.78-.117 2.4-1.026 2.737-1.988.337-.962.337-1.787.237-1.962-.1-.175-.362-.275-.725-.462z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/vietnammbbs" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-125"
              aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <path fill="url(#instagram-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@vietnammbbs" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-125"
              aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FF0000" viewBox="0 0 24 24">
                <path d="M23.498 6.163c-.272-1.025-1.077-1.83-2.101-2.102C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.397.561c-1.025.272-1.83 1.077-2.102 2.102C0 8.04 0 12 0 12s0 3.96.501 5.837c.272 1.025 1.077 1.83 2.102 2.102C4.48 20.5 12 20.5 12 20.5s7.52 0 9.397-.561c1.024-.272 1.83-1.077 2.101-2.102C24 15.96 24 12 24 12s0-3.96-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ══ Bottom Bar ══ */}
      <div 
        className="bg-[#CC1B1B] text-white text-sm sm:text-base font-bold text-center py-4 cursor-pointer hover:bg-red-800 transition-colors duration-200"
        onClick={() => window.open('https://devspectra.in/', '_blank')}
      >
        © {new Date().getFullYear()} DevSpectra. All rights reserved.
      </div>
    </footer>
  );
}
