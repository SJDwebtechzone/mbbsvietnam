// cityToState.js
// Maps city slug → state slug
// City pages show city name but use the state's content

const cityToState = {
  // ── ANDHRA PRADESH ──
  "visakhapatnam":   "andhra-pradesh",
  "vijayawada":      "andhra-pradesh",
  "guntur":          "andhra-pradesh",
  "tirupati":        "andhra-pradesh",
  "kakinada":        "andhra-pradesh",

  // ── ARUNACHAL PRADESH ──
  "itanagar":        "arunachal-pradesh",
  "naharlagun":      "arunachal-pradesh",
  "pasighat":        "arunachal-pradesh",

  // ── ASSAM ──
  "guwahati":        "assam",
  "dibrugarh":       "assam",
  "jorhat":          "assam",
  "silchar":         "assam",
  "tezpur":          "assam",

  // ── BIHAR ──
  "patna":           "bihar",
  "gaya":            "bihar",
  "muzaffarpur":     "bihar",
  "bhagalpur":       "bihar",
  "darbhanga":       "bihar",

  // ── CHHATTISGARH ──
  "raipur":          "chhattisgarh",
  "bilaspur":        "chhattisgarh",
  "bhilai":          "chhattisgarh",
  "durg":            "chhattisgarh",
  "korba":           "chhattisgarh",

  // ── DELHI ──
  "new-delhi":       "delhi",
  "dwarka":          "delhi",
  "rohini":          "delhi",
  "connaught-place": "delhi",
  "noida":           "delhi",   // technically UP but treated as Delhi NCR
  "ghaziabad":       "delhi",   // UP but Delhi NCR

  // ── GOA ──
  "panaji":          "goa",
  "margao":          "goa",
  "vasco-da-gama":   "goa",
  "mapusa":          "goa",

  // ── GUJARAT ──
  "ahmedabad":       "gujarat",
  "surat":           "gujarat",
  "vadodara":        "gujarat",
  "rajkot":          "gujarat",
  "bhavnagar":       "gujarat",
  "gandhinagar":     "gujarat",

  // ── HARYANA ──
  "gurugram":        "haryana",
  "faridabad":       "haryana",
  "hisar":           "haryana",
  "panipat":         "haryana",
  "ambala":          "haryana",

  // ── HIMACHAL PRADESH ──
  "shimla":          "himachal-pradesh",
  "dharamshala":     "himachal-pradesh",
  "mandi":           "himachal-pradesh",
  "solan":           "himachal-pradesh",
  "manali":          "himachal-pradesh",

  // ── JHARKHAND ──
  "ranchi":          "jharkhand",
  "jamshedpur":      "jharkhand",
  "dhanbad":         "jharkhand",
  "bokaro":          "jharkhand",
  "hazaribagh":      "jharkhand",

  // ── KARNATAKA ──
  "bengaluru":       "karnataka",
  "mysuru":          "karnataka",
  "mangaluru":       "karnataka",
  "hubli":           "karnataka",
  "belgaum":         "karnataka",
  "davangere":       "karnataka",

  // ── KERALA ──
  "kochi":           "kerala",
  "thiruvananthapuram": "kerala",
  "kozhikode":       "kerala",
  "thrissur":        "kerala",
  "kannur":          "kerala",
  "kollam":          "kerala",

  // ── MADHYA PRADESH ──
  "bhopal":          "madhya-pradesh",
  "indore":          "madhya-pradesh",
  "jabalpur":        "madhya-pradesh",
  "gwalior":         "madhya-pradesh",
  "ujjain":          "madhya-pradesh",
  "rewa":            "madhya-pradesh",

  // ── MAHARASHTRA ──
  "mumbai":          "maharashtra",
  "pune":            "maharashtra",
  "nagpur":          "maharashtra",
  "nashik":          "maharashtra",
  "aurangabad":      "maharashtra",
  "solapur":         "maharashtra",
  "kolhapur":        "maharashtra",

  // ── MANIPUR ──
  "imphal":          "manipur",
  "bishnupur":       "manipur",
  "thoubal":         "manipur",

  // ── MEGHALAYA ──
  "shillong":        "meghalaya",
  "tura":            "meghalaya",
  "jowai":           "meghalaya",

  // ── MIZORAM ──
  "aizawl":          "mizoram",
  "lunglei":         "mizoram",
  "champhai":        "mizoram",

  // ── NAGALAND ──
  "kohima":          "nagaland",
  "dimapur":         "nagaland",
  "mokokchung":      "nagaland",

  // ── ODISHA ──
  "bhubaneswar":     "odisha",
  "cuttack":         "odisha",
  "rourkela":        "odisha",
  "sambalpur":       "odisha",
  "berhampur":       "odisha",

  // ── PUNJAB ──
  "amritsar":        "punjab",
  "ludhiana":        "punjab",
  "jalandhar":       "punjab",
  "patiala":         "punjab",
  "mohali":          "punjab",

  // ── RAJASTHAN ──
  "jaipur":          "rajasthan",
  "jodhpur":         "rajasthan",
  "udaipur":         "rajasthan",
  "kota":            "rajasthan",
  "bikaner":         "rajasthan",
  "ajmer":           "rajasthan",

  // ── SIKKIM ──
  "gangtok":         "sikkim",
  "namchi":          "sikkim",
  "gyalshing":       "sikkim",

  // ── TAMIL NADU ──
  "chennai":         "tamil-nadu",
  "coimbatore":      "tamil-nadu",
  "madurai":         "tamil-nadu",
  "trichy":          "tamil-nadu",
  "salem":           "tamil-nadu",
  "tirunelveli":     "tamil-nadu",
  "vellore":         "tamil-nadu",
  "erode":           "tamil-nadu",

  // ── TELANGANA ──
  "hyderabad":       "telangana",
  "warangal":        "telangana",
  "karimnagar":      "telangana",
  "nizamabad":       "telangana",
  "khammam":         "telangana",

  // ── TRIPURA ──
  "agartala":        "tripura",
  "dharmanagar":     "tripura",

  // ── UTTAR PRADESH ──
  "lucknow":         "uttar-pradesh",
  "kanpur":          "uttar-pradesh",
  "varanasi":        "uttar-pradesh",
  "agra":            "uttar-pradesh",
  "meerut":          "uttar-pradesh",
  "prayagraj":       "uttar-pradesh",

  // ── UTTARAKHAND ──
  "dehradun":        "uttarakhand",
  "haridwar":        "uttarakhand",
  "rishikesh":       "uttarakhand",
  "nainital":        "uttarakhand",
  "roorkee":         "uttarakhand",

  // ── WEST BENGAL ──
  "kolkata":         "west-bengal",
  "howrah":          "west-bengal",
  "durgapur":        "west-bengal",
  "asansol":         "west-bengal",
  "siliguri":        "west-bengal",
  "kharagpur":       "west-bengal",
};

// Helper: get display name from slug
export function cityNameFromSlug(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default cityToState;
