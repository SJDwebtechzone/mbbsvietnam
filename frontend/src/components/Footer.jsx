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
    <footer className="border-t-4 shadow-inner mt-12" style={{ background: "#D3D3D3" }}>

      {/* ══ SECTION 1 — Admission Guides by City ══ */}
      <div className="px-6 py-6 max-w-6xl mx-auto">
        <h3 className="text-base font-semibold text-[#CC1B1B] mb-3">
          Admission Guides by Cities
        </h3>
        <div className="flex flex-wrap items-center gap-y-1">
          {allCities.map((city, i) => (
            <span key={city.slug} className="flex items-center">
              <NavLink
                to={`/admission-guides/city/${city.slug}`}
                className="text-sm text-gray-700 hover:text-[#CC1B1B] transition-colors duration-150"
              >
                {city.name}
              </NavLink>
              {i < allCities.length - 1 && (
                <span className="text-gray-400 mx-1.5 text-xs select-none">—</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ══ SECTION 2 — Admission Guides by State ══ */}
      <div className="px-6 py-6 max-w-6xl mx-auto border-t border-gray-300">
        <h3 className="text-base font-semibold text-[#CC1B1B] mb-3">
          Admission Guides by State
        </h3>
        <div className="flex flex-wrap items-center gap-y-1">
          {allStates.map((state, i) => (
            <span key={state.slug} className="flex items-center">
              <NavLink
                to={`/admission-guides/${state.slug}`}
                className="text-sm text-gray-700 hover:text-[#CC1B1B] transition-colors duration-150"
              >
                {state.name}
              </NavLink>
              {i < allStates.length - 1 && (
                <span className="text-gray-400 mx-1.5 text-xs select-none">—</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ══ Main Footer Content ══ */}
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto border-t border-gray-300">

        {/* Logo + About */}
        <div>
          <NavLink to="/" className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="MedViet Logo"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <span className="text-xl font-bold text-[#CC1B1B] uppercase">
              MBBS in Vietnam
            </span>
          </NavLink>
          <p className="text-sm text-gray-700 leading-relaxed">
            MedViet helps Indian students pursue MBBS in Vietnam with direct
            admissions, affordable fees, and recognized universities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#CC1B1B] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><NavLink to="/about" className="hover:text-[#CC1B1B] transition">About Us</NavLink></li>
            <li><NavLink to="/mbbs-vietnam" className="hover:text-[#CC1B1B] transition">MBBS in Vietnam</NavLink></li>
            <li><NavLink to="/universities" className="hover:text-[#CC1B1B] transition">Universities</NavLink></li>
            <li><NavLink to="/admission-services" className="hover:text-[#CC1B1B] transition">Admission Services</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[#CC1B1B] transition">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#CC1B1B] mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📞 +91 90034 20057 | +91 72000 95846</li>
            <li>✉ admission@vietnambbs.com</li>
            <li>
              📍 Old No: 36 G, New No: 1/36-3, North Parade Road, St Thomas Mount, Chennai - 600016
            </li>
            <li>🕐 Mon–Sat: 9 AM – 6 PM</li>
          </ul>
         <div className="flex gap-2 mt-4">
  {/* Facebook */}
  <a href="https://www.facebook.com/vietnammbbs" target="_blank" rel="noopener noreferrer"
    className="w-8 h-8 rounded-md bg-[#1877F2] hover:bg-blue-700 flex items-center justify-center transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/919003420057" target="_blank" rel="noopener noreferrer"
    className="w-8 h-8 rounded-md bg-[#25D366] hover:bg-green-600 flex items-center justify-center transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.876L.057 23.428a.75.75 0 0 0 .916.919l5.671-1.479A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.497-5.268-1.373l-.376-.214-3.924 1.023 1.051-3.814-.234-.389A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/vietnammbbs" target="_blank" rel="noopener noreferrer"
    className="w-8 h-8 rounded-md bg-[#E1306C] hover:bg-pink-700 flex items-center justify-center transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path fill="#E1306C" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#E1306C" strokeWidth="2"/>
    </svg>
  </a>

  {/* YouTube */}
  <a href="https://www.youtube.com/@vietnammbbs" target="_blank" rel="noopener noreferrer"
    className="w-8 h-8 rounded-md bg-[#FF0000] hover:bg-red-700 flex items-center justify-center transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon fill="#FF0000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  </a>
</div>
        </div>
      </div>

      {/* ══ Bottom Bar ══ */}
      <div className="bg-[#CC1B1B] text-white text-xs text-center py-3">
        © {new Date().getFullYear()} DevSpectra. All rights reserved.
      </div>
    </footer>
  );
}
