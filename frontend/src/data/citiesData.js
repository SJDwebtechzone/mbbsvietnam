// citiesData.js — All Major Indian Cities mapped to State MBBS Vietnam Data
// Each city inherits its state's content, with city-specific name overrides
// Usage: import citiesData from "./citiesData";
//        const data = citiesData["chennai"];

// Helper to create city entry from state data
function city(slug, cityName, stateSlug, stateName, airport, flightTime, nearbyAirport) {
  return { slug, cityName, stateSlug, stateName, airport, flightTime, nearbyAirport };
}

// City registry: slug -> city metadata
// Full data is derived from statesData[stateSlug] with city overrides
const citiesRegistry = {

  // ══════════════════════════════════════
  // UTTAR PRADESH
  // ══════════════════════════════════════
  "lucknow":    city("lucknow",    "Lucknow",    "uttar-pradesh", "Uttar Pradesh", "Chaudhary Charan Singh International Airport (LKO)", "5–6 hours", "Lucknow (LKO)"),
  "kanpur":     city("kanpur",     "Kanpur",     "uttar-pradesh", "Uttar Pradesh", "Kanpur Airport (KNU) / Delhi (DEL)", "5–6 hours", "Kanpur (KNU) / Delhi (DEL)"),
  "agra":       city("agra",       "Agra",       "uttar-pradesh", "Uttar Pradesh", "Agra Airport (AGR) / Delhi (DEL)", "5–6 hours", "Agra (AGR) / Delhi (DEL)"),
  "varanasi":   city("varanasi",   "Varanasi",   "uttar-pradesh", "Uttar Pradesh", "Lal Bahadur Shastri Airport, Varanasi (VNS)", "5–6 hours", "Varanasi (VNS)"),
  "prayagraj":  city("prayagraj",  "Prayagraj",  "uttar-pradesh", "Uttar Pradesh", "Prayagraj Airport (IXD)", "5–6 hours", "Prayagraj (IXD)"),
  "noida":      city("noida",      "Noida",      "uttar-pradesh", "Uttar Pradesh", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),
  "ghaziabad":  city("ghaziabad",  "Ghaziabad",  "uttar-pradesh", "Uttar Pradesh", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),
  "meerut":     city("meerut",     "Meerut",     "uttar-pradesh", "Uttar Pradesh", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),

  // ══════════════════════════════════════
  // DELHI
  // ══════════════════════════════════════
  "new-delhi":          city("new-delhi",          "New Delhi",          "delhi", "Delhi", "Indira Gandhi International Airport (DEL)", "5–6 hours", "New Delhi (DEL)"),
  "dwarka":             city("dwarka",             "Dwarka",             "delhi", "Delhi", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),
  "rohini":             city("rohini",             "Rohini",             "delhi", "Delhi", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),
  "connaught-place":    city("connaught-place",    "Connaught Place",    "delhi", "Delhi", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),

  // ══════════════════════════════════════
  // RAJASTHAN
  // ══════════════════════════════════════
  "jaipur":   city("jaipur",   "Jaipur",   "rajasthan", "Rajasthan", "Jaipur International Airport (JAI)", "5–6 hours", "Jaipur (JAI)"),
  "jodhpur":  city("jodhpur",  "Jodhpur",  "rajasthan", "Rajasthan", "Jodhpur Airport (JDH)", "5–6 hours", "Jodhpur (JDH)"),
  "udaipur":  city("udaipur",  "Udaipur",  "rajasthan", "Rajasthan", "Maharana Pratap Airport, Udaipur (UDR)", "5–6 hours", "Udaipur (UDR)"),
  "kota":     city("kota",     "Kota",     "rajasthan", "Rajasthan", "Kota Airport (KTU) / Jaipur (JAI)", "5–6 hours", "Kota (KTU) / Jaipur (JAI)"),
  "ajmer":    city("ajmer",    "Ajmer",    "rajasthan", "Rajasthan", "Jaipur International Airport (JAI)", "5–6 hours", "Jaipur (JAI)"),
  "bikaner":  city("bikaner",  "Bikaner",  "rajasthan", "Rajasthan", "Nal Airport, Bikaner (BKB)", "5–6 hours", "Bikaner (BKB)"),

  // ══════════════════════════════════════
  // HARYANA
  // ══════════════════════════════════════
  "gurugram":  city("gurugram",  "Gurugram",  "haryana", "Haryana", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),
  "faridabad": city("faridabad", "Faridabad", "haryana", "Haryana", "Indira Gandhi International Airport (DEL)", "5–6 hours", "Delhi (DEL)"),
  "panipat":   city("panipat",   "Panipat",   "haryana", "Haryana", "Chandigarh Airport (IXC) / Delhi (DEL)", "5–6 hours", "Chandigarh (IXC)"),
  "ambala":    city("ambala",    "Ambala",    "haryana", "Haryana", "Chandigarh Airport (IXC)", "5–6 hours", "Chandigarh (IXC)"),
  "hisar":     city("hisar",     "Hisar",     "haryana", "Haryana", "Hisar Airport (HSS) / Delhi (DEL)", "5–6 hours", "Delhi (DEL)"),

  // ══════════════════════════════════════
  // PUNJAB
  // ══════════════════════════════════════
  "amritsar":  city("amritsar",  "Amritsar",  "punjab", "Punjab", "Sri Guru Ram Dass Jee International Airport (ATQ)", "5–6 hours", "Amritsar (ATQ)"),
  "ludhiana":  city("ludhiana",  "Ludhiana",  "punjab", "Punjab", "Sahnewal Airport, Ludhiana (LUH)", "5–6 hours", "Ludhiana (LUH)"),
  "jalandhar": city("jalandhar", "Jalandhar", "punjab", "Punjab", "Adampur Airport (AIP) / Amritsar (ATQ)", "5–6 hours", "Amritsar (ATQ)"),
  "patiala":   city("patiala",   "Patiala",   "punjab", "Punjab", "Chandigarh Airport (IXC)", "5–6 hours", "Chandigarh (IXC)"),
  "mohali":    city("mohali",    "Mohali",    "punjab", "Punjab", "Chandigarh Airport (IXC)", "5–6 hours", "Chandigarh (IXC)"),

  // ══════════════════════════════════════
  // HIMACHAL PRADESH
  // ══════════════════════════════════════
  "shimla":       city("shimla",       "Shimla",       "himachal-pradesh", "Himachal Pradesh", "Chandigarh Airport (IXC) / Delhi (DEL)", "5–6 hours", "Chandigarh (IXC)"),
  "manali":       city("manali",       "Manali",       "himachal-pradesh", "Himachal Pradesh", "Bhuntar Airport (KUU)", "5–6 hours", "Bhuntar (KUU)"),
  "dharamshala":  city("dharamshala",  "Dharamshala",  "himachal-pradesh", "Himachal Pradesh", "Gaggal Airport (DHM)", "5–6 hours", "Dharamshala (DHM)"),
  "solan":        city("solan",        "Solan",        "himachal-pradesh", "Himachal Pradesh", "Chandigarh Airport (IXC)", "5–6 hours", "Chandigarh (IXC)"),
  "mandi":        city("mandi",        "Mandi",        "himachal-pradesh", "Himachal Pradesh", "Bhuntar Airport (KUU)", "5–6 hours", "Bhuntar (KUU)"),

  // ══════════════════════════════════════
  // UTTARAKHAND
  // ══════════════════════════════════════
  "dehradun":  city("dehradun",  "Dehradun",  "uttarakhand", "Uttarakhand", "Jolly Grant Airport, Dehradun (DED)", "5–6 hours", "Dehradun (DED)"),
  "haridwar":  city("haridwar",  "Haridwar",  "uttarakhand", "Uttarakhand", "Jolly Grant Airport, Dehradun (DED)", "5–6 hours", "Dehradun (DED)"),
  "rishikesh": city("rishikesh", "Rishikesh", "uttarakhand", "Uttarakhand", "Jolly Grant Airport, Dehradun (DED)", "5–6 hours", "Dehradun (DED)"),
  "nainital":  city("nainital",  "Nainital",  "uttarakhand", "Uttarakhand", "Pantnagar Airport (PGH)", "5–6 hours", "Pantnagar (PGH)"),
  "roorkee":   city("roorkee",   "Roorkee",   "uttarakhand", "Uttarakhand", "Jolly Grant Airport, Dehradun (DED)", "5–6 hours", "Dehradun (DED)"),

  // ══════════════════════════════════════
  // TAMIL NADU
  // ══════════════════════════════════════
  "chennai":      city("chennai",      "Chennai",      "tamil-nadu", "Tamil Nadu", "Chennai International Airport (MAA)", "4–5 hours", "Chennai (MAA)"),
  "coimbatore":   city("coimbatore",   "Coimbatore",   "tamil-nadu", "Tamil Nadu", "Coimbatore International Airport (CJB)", "4–5 hours", "Coimbatore (CJB)"),
  "madurai":      city("madurai",      "Madurai",      "tamil-nadu", "Tamil Nadu", "Madurai Airport (IXM)", "4–5 hours", "Madurai (IXM)"),
  "salem":        city("salem",        "Salem",        "tamil-nadu", "Tamil Nadu", "Salem Airport (SXV) / Chennai (MAA)", "4–5 hours", "Chennai (MAA)"),
  "trichy":       city("trichy",       "Trichy",       "tamil-nadu", "Tamil Nadu", "Tiruchirappalli International Airport (TRZ)", "4–5 hours", "Trichy (TRZ)"),
  "tirunelveli":  city("tirunelveli",  "Tirunelveli",  "tamil-nadu", "Tamil Nadu", "Tuticorin Airport (TCR) / Madurai (IXM)", "4–5 hours", "Madurai (IXM)"),
  "vellore":      city("vellore",      "Vellore",      "tamil-nadu", "Tamil Nadu", "Chennai International Airport (MAA)", "4–5 hours", "Chennai (MAA)"),
  "erode":        city("erode",        "Erode",        "tamil-nadu", "Tamil Nadu", "Coimbatore International Airport (CJB)", "4–5 hours", "Coimbatore (CJB)"),

  // ══════════════════════════════════════
  // KERALA
  // ══════════════════════════════════════
  "thiruvananthapuram": city("thiruvananthapuram", "Thiruvananthapuram", "kerala", "Kerala", "Trivandrum International Airport (TRV)", "4 hours", "Trivandrum (TRV)"),
  "kochi":              city("kochi",              "Kochi",              "kerala", "Kerala", "Cochin International Airport (COK)", "4 hours", "Kochi (COK)"),
  "kozhikode":          city("kozhikode",          "Kozhikode",          "kerala", "Kerala", "Calicut International Airport (CCJ)", "4 hours", "Kozhikode (CCJ)"),
  "thrissur":           city("thrissur",           "Thrissur",           "kerala", "Kerala", "Cochin International Airport (COK)", "4 hours", "Kochi (COK)"),
  "kollam":             city("kollam",             "Kollam",             "kerala", "Kerala", "Trivandrum International Airport (TRV)", "4 hours", "Trivandrum (TRV)"),
  "kannur":             city("kannur",             "Kannur",             "kerala", "Kerala", "Kannur International Airport (CNN)", "4 hours", "Kannur (CNN)"),

  // ══════════════════════════════════════
  // KARNATAKA
  // ══════════════════════════════════════
  "bengaluru":  city("bengaluru",  "Bengaluru",  "karnataka", "Karnataka", "Kempegowda International Airport (BLR)", "4–5 hours", "Bangalore (BLR)"),
  "mysuru":     city("mysuru",     "Mysuru",     "karnataka", "Karnataka", "Mysore Airport (MYQ) / Bangalore (BLR)", "4–5 hours", "Bangalore (BLR)"),
  "mangaluru":  city("mangaluru",  "Mangaluru",  "karnataka", "Karnataka", "Mangalore International Airport (IXE)", "4–5 hours", "Mangalore (IXE)"),
  "hubli":      city("hubli",      "Hubli",      "karnataka", "Karnataka", "Hubli Airport (HBX)", "4–5 hours", "Hubli (HBX)"),
  "belgaum":    city("belgaum",    "Belgaum",    "karnataka", "Karnataka", "Belgaum Airport (IXG)", "4–5 hours", "Belgaum (IXG)"),
  "davangere":  city("davangere",  "Davangere",  "karnataka", "Karnataka", "Hubli Airport (HBX) / Bangalore (BLR)", "4–5 hours", "Bangalore (BLR)"),

  // ══════════════════════════════════════
  // ANDHRA PRADESH
  // ══════════════════════════════════════
  "visakhapatnam": city("visakhapatnam", "Visakhapatnam", "andhra-pradesh", "Andhra Pradesh", "Visakhapatnam International Airport (VTZ)", "4–5 hours", "Visakhapatnam (VTZ)"),
  "vijayawada":    city("vijayawada",    "Vijayawada",    "andhra-pradesh", "Andhra Pradesh", "Vijayawada Airport (VGA)", "4–5 hours", "Vijayawada (VGA)"),
  "guntur":        city("guntur",        "Guntur",        "andhra-pradesh", "Andhra Pradesh", "Vijayawada Airport (VGA)", "4–5 hours", "Vijayawada (VGA)"),
  "tirupati":      city("tirupati",      "Tirupati",      "andhra-pradesh", "Andhra Pradesh", "Tirupati Airport (TIR)", "4–5 hours", "Tirupati (TIR)"),
  "kakinada":      city("kakinada",      "Kakinada",      "andhra-pradesh", "Andhra Pradesh", "Rajahmundry Airport (RJA)", "4–5 hours", "Rajahmundry (RJA)"),

  // ══════════════════════════════════════
  // TELANGANA
  // ══════════════════════════════════════
  "hyderabad":   city("hyderabad",   "Hyderabad",   "telangana", "Telangana", "Rajiv Gandhi International Airport (HYD)", "4–5 hours", "Hyderabad (HYD)"),
  "warangal":    city("warangal",    "Warangal",    "telangana", "Telangana", "Mamnoor Airport (WGC) / Hyderabad (HYD)", "4–5 hours", "Hyderabad (HYD)"),
  "karimnagar":  city("karimnagar",  "Karimnagar",  "telangana", "Telangana", "Rajiv Gandhi International Airport (HYD)", "4–5 hours", "Hyderabad (HYD)"),
  "nizamabad":   city("nizamabad",   "Nizamabad",   "telangana", "Telangana", "Rajiv Gandhi International Airport (HYD)", "4–5 hours", "Hyderabad (HYD)"),
  "khammam":     city("khammam",     "Khammam",     "telangana", "Telangana", "Rajiv Gandhi International Airport (HYD)", "4–5 hours", "Hyderabad (HYD)"),

  // ══════════════════════════════════════
  // MAHARASHTRA
  // ══════════════════════════════════════
  "mumbai":      city("mumbai",      "Mumbai",      "maharashtra", "Maharashtra", "Chhatrapati Shivaji Maharaj International Airport (BOM)", "5–6 hours", "Mumbai (BOM)"),
  "pune":        city("pune",        "Pune",        "maharashtra", "Maharashtra", "Pune Airport (PNQ)", "5–6 hours", "Pune (PNQ)"),
  "nagpur":      city("nagpur",      "Nagpur",      "maharashtra", "Maharashtra", "Dr. Babasaheb Ambedkar International Airport (NAG)", "5–6 hours", "Nagpur (NAG)"),
  "nashik":      city("nashik",      "Nashik",      "maharashtra", "Maharashtra", "Ozar Airport (ISK) / Mumbai (BOM)", "5–6 hours", "Mumbai (BOM)"),
  "aurangabad":  city("aurangabad",  "Aurangabad",  "maharashtra", "Maharashtra", "Aurangabad Airport (IXU)", "5–6 hours", "Aurangabad (IXU)"),
  "solapur":     city("solapur",     "Solapur",     "maharashtra", "Maharashtra", "Solapur Airport (SSE) / Pune (PNQ)", "5–6 hours", "Pune (PNQ)"),
  "kolhapur":    city("kolhapur",    "Kolhapur",    "maharashtra", "Maharashtra", "Kolhapur Airport (KLH)", "5–6 hours", "Kolhapur (KLH)"),

  // ══════════════════════════════════════
  // GUJARAT
  // ══════════════════════════════════════
  "ahmedabad":   city("ahmedabad",   "Ahmedabad",   "gujarat", "Gujarat", "Sardar Vallabhbhai Patel International Airport (AMD)", "5–6 hours", "Ahmedabad (AMD)"),
  "surat":       city("surat",       "Surat",       "gujarat", "Gujarat", "Surat Airport (STV)", "5–6 hours", "Surat (STV)"),
  "vadodara":    city("vadodara",    "Vadodara",    "gujarat", "Gujarat", "Vadodara Airport (BDQ)", "5–6 hours", "Vadodara (BDQ)"),
  "rajkot":      city("rajkot",      "Rajkot",      "gujarat", "Gujarat", "Rajkot Airport (RAJ)", "5–6 hours", "Rajkot (RAJ)"),
  "gandhinagar": city("gandhinagar", "Gandhinagar", "gujarat", "Gujarat", "Sardar Vallabhbhai Patel International Airport (AMD)", "5–6 hours", "Ahmedabad (AMD)"),
  "bhavnagar":   city("bhavnagar",   "Bhavnagar",   "gujarat", "Gujarat", "Bhavnagar Airport (BHU)", "5–6 hours", "Bhavnagar (BHU)"),

  // ══════════════════════════════════════
  // GOA
  // ══════════════════════════════════════
  "panaji":         city("panaji",         "Panaji",         "goa", "Goa", "Goa International Airport, Dabolim (GOI)", "~6 hours", "Goa Dabolim (GOI)"),
  "margao":         city("margao",         "Margao",         "goa", "Goa", "Goa International Airport, Dabolim (GOI)", "~6 hours", "Goa Dabolim (GOI)"),
  "vasco-da-gama":  city("vasco-da-gama",  "Vasco da Gama",  "goa", "Goa", "Goa International Airport, Dabolim (GOI)", "~6 hours", "Goa Dabolim (GOI)"),
  "mapusa":         city("mapusa",         "Mapusa",         "goa", "Goa", "Goa International Airport, Dabolim (GOI)", "~6 hours", "Goa Dabolim (GOI)"),

  // ══════════════════════════════════════
  // MADHYA PRADESH
  // ══════════════════════════════════════
  "bhopal":    city("bhopal",    "Bhopal",    "madhya-pradesh", "Madhya Pradesh", "Raja Bhoj Airport, Bhopal (BHO)", "5–6 hours", "Bhopal (BHO)"),
  "indore":    city("indore",    "Indore",    "madhya-pradesh", "Madhya Pradesh", "Devi Ahilya Bai Holkar Airport (IDR)", "5–6 hours", "Indore (IDR)"),
  "jabalpur":  city("jabalpur",  "Jabalpur",  "madhya-pradesh", "Madhya Pradesh", "Dumna Airport, Jabalpur (JLR)", "5–6 hours", "Jabalpur (JLR)"),
  "gwalior":   city("gwalior",   "Gwalior",   "madhya-pradesh", "Madhya Pradesh", "Rajmata Vijaya Raje Scindia Airport (GWL)", "5–6 hours", "Gwalior (GWL)"),
  "ujjain":    city("ujjain",    "Ujjain",    "madhya-pradesh", "Madhya Pradesh", "Devi Ahilya Bai Holkar Airport (IDR)", "5–6 hours", "Indore (IDR)"),
  "rewa":      city("rewa",      "Rewa",      "madhya-pradesh", "Madhya Pradesh", "Rewa Airport (REW) / Jabalpur (JLR)", "5–6 hours", "Jabalpur (JLR)"),

  // ══════════════════════════════════════
  // WEST BENGAL
  // ══════════════════════════════════════
  "kolkata":    city("kolkata",    "Kolkata",    "west-bengal", "West Bengal", "Netaji Subhas Chandra Bose International Airport (CCU)", "4–5 hours", "Kolkata (CCU)"),
  "howrah":     city("howrah",     "Howrah",     "west-bengal", "West Bengal", "Netaji Subhas Chandra Bose International Airport (CCU)", "4–5 hours", "Kolkata (CCU)"),
  "durgapur":   city("durgapur",   "Durgapur",   "west-bengal", "West Bengal", "Kazi Nazrul Islam Airport (RDP) / Kolkata (CCU)", "4–5 hours", "Kolkata (CCU)"),
  "asansol":    city("asansol",    "Asansol",    "west-bengal", "West Bengal", "Kazi Nazrul Islam Airport (RDP)", "4–5 hours", "Kolkata (CCU)"),
  "siliguri":   city("siliguri",   "Siliguri",   "west-bengal", "West Bengal", "Bagdogra Airport (IXB)", "4–5 hours", "Bagdogra (IXB)"),
  "kharagpur":  city("kharagpur",  "Kharagpur",  "west-bengal", "West Bengal", "Netaji Subhas Chandra Bose International Airport (CCU)", "4–5 hours", "Kolkata (CCU)"),

  // ══════════════════════════════════════
  // BIHAR
  // ══════════════════════════════════════
  "patna":        city("patna",        "Patna",        "bihar", "Bihar", "Jay Prakash Narayan Airport (PAT)", "5–6 hours", "Patna (PAT)"),
  "gaya":         city("gaya",         "Gaya",         "bihar", "Bihar", "Gaya Airport (GAY)", "5–6 hours", "Gaya (GAY)"),
  "muzaffarpur":  city("muzaffarpur",  "Muzaffarpur",  "bihar", "Bihar", "Muzaffarpur Airport (MZU) / Patna (PAT)", "5–6 hours", "Patna (PAT)"),
  "bhagalpur":    city("bhagalpur",    "Bhagalpur",    "bihar", "Bihar", "Patna Airport (PAT)", "5–6 hours", "Patna (PAT)"),
  "darbhanga":    city("darbhanga",    "Darbhanga",    "bihar", "Bihar", "Darbhanga Airport (DBR)", "5–6 hours", "Darbhanga (DBR)"),

  // ══════════════════════════════════════
  // ODISHA
  // ══════════════════════════════════════
  "bhubaneswar":  city("bhubaneswar",  "Bhubaneswar",  "odisha", "Odisha", "Biju Patnaik International Airport (BBI)", "4–5 hours", "Bhubaneswar (BBI)"),
  "cuttack":      city("cuttack",      "Cuttack",      "odisha", "Odisha", "Biju Patnaik International Airport (BBI)", "4–5 hours", "Bhubaneswar (BBI)"),
  "rourkela":     city("rourkela",     "Rourkela",     "odisha", "Odisha", "Rourkela Airport (RRK) / Bhubaneswar (BBI)", "4–5 hours", "Bhubaneswar (BBI)"),
  "berhampur":    city("berhampur",    "Berhampur",     "odisha", "Odisha", "Bhubaneswar Airport (BBI)", "4–5 hours", "Bhubaneswar (BBI)"),
  "sambalpur":    city("sambalpur",    "Sambalpur",    "odisha", "Odisha", "Veer Surendra Sai Airport (VSSB)", "4–5 hours", "Sambalpur (VSSB)"),

  // ══════════════════════════════════════
  // JHARKHAND
  // ══════════════════════════════════════
  "ranchi":      city("ranchi",      "Ranchi",      "jharkhand", "Jharkhand", "Birsa Munda Airport (IXR)", "5–6 hours", "Ranchi (IXR)"),
  "jamshedpur":  city("jamshedpur",  "Jamshedpur",  "jharkhand", "Jharkhand", "Sonari Airport (IXW) / Ranchi (IXR)", "5–6 hours", "Ranchi (IXR)"),
  "dhanbad":     city("dhanbad",     "Dhanbad",     "jharkhand", "Jharkhand", "Ranchi Airport (IXR)", "5–6 hours", "Ranchi (IXR)"),
  "bokaro":      city("bokaro",      "Bokaro",      "jharkhand", "Jharkhand", "Ranchi Airport (IXR)", "5–6 hours", "Ranchi (IXR)"),
  "hazaribagh":  city("hazaribagh",  "Hazaribagh",  "jharkhand", "Jharkhand", "Ranchi Airport (IXR)", "5–6 hours", "Ranchi (IXR)"),

  // ══════════════════════════════════════
  // ASSAM
  // ══════════════════════════════════════
  "guwahati":   city("guwahati",   "Guwahati",   "assam", "Assam", "Lokpriya Gopinath Bordoloi International Airport (GAU)", "3–4 hours", "Guwahati (GAU)"),
  "dibrugarh":  city("dibrugarh",  "Dibrugarh",  "assam", "Assam", "Dibrugarh Airport (DIB)", "3–4 hours", "Dibrugarh (DIB)"),
  "silchar":    city("silchar",    "Silchar",    "assam", "Assam", "Silchar Airport (IXS)", "3–4 hours", "Silchar (IXS)"),
  "jorhat":     city("jorhat",     "Jorhat",     "assam", "Assam", "Jorhat Airport (JRH)", "3–4 hours", "Jorhat (JRH)"),
  "tezpur":     city("tezpur",     "Tezpur",     "assam", "Assam", "Tezpur Airport (TEZ)", "3–4 hours", "Tezpur (TEZ)"),

  // ══════════════════════════════════════
  // MEGHALAYA
  // ══════════════════════════════════════
  "shillong":  city("shillong",  "Shillong",  "meghalaya", "Meghalaya", "Shillong Airport (SHL) / Guwahati (GAU)", "3–4 hours", "Guwahati (GAU)"),
  "tura":      city("tura",      "Tura",      "meghalaya", "Meghalaya", "Tura Airport (TUR) / Guwahati (GAU)", "3–4 hours", "Guwahati (GAU)"),
  "jowai":     city("jowai",     "Jowai",     "meghalaya", "Meghalaya", "Shillong Airport (SHL)", "3–4 hours", "Shillong (SHL)"),

  // ══════════════════════════════════════
  // MANIPUR
  // ══════════════════════════════════════
  "imphal":     city("imphal",     "Imphal",     "manipur", "Manipur", "Bir Tikendrajit International Airport (IMF)", "3–4 hours", "Imphal (IMF)"),
  "thoubal":    city("thoubal",    "Thoubal",    "manipur", "Manipur", "Imphal Airport (IMF)", "3–4 hours", "Imphal (IMF)"),
  "bishnupur":  city("bishnupur",  "Bishnupur",  "manipur", "Manipur", "Imphal Airport (IMF)", "3–4 hours", "Imphal (IMF)"),

  // ══════════════════════════════════════
  // NAGALAND
  // ══════════════════════════════════════
  "kohima":      city("kohima",      "Kohima",      "nagaland", "Nagaland", "Dimapur Airport (DMU)", "3–4 hours", "Dimapur (DMU)"),
  "dimapur":     city("dimapur",     "Dimapur",     "nagaland", "Nagaland", "Dimapur Airport (DMU)", "3–4 hours", "Dimapur (DMU)"),
  "mokokchung":  city("mokokchung",  "Mokokchung",  "nagaland", "Nagaland", "Dimapur Airport (DMU)", "3–4 hours", "Dimapur (DMU)"),

  // ══════════════════════════════════════
  // TRIPURA
  // ══════════════════════════════════════
  "agartala":      city("agartala",      "Agartala",      "tripura", "Tripura", "Maharaja Bir Bikram Airport (IXA)", "3–4 hours", "Agartala (IXA)"),
  "dharmanagar":   city("dharmanagar",   "Dharmanagar",   "tripura", "Tripura", "Kamalpur Airport (IXQ) / Agartala (IXA)", "3–4 hours", "Agartala (IXA)"),
  "udaipur-tripura": city("udaipur-tripura", "Udaipur", "tripura", "Tripura", "Agartala Airport (IXA)", "3–4 hours", "Agartala (IXA)"),

  // ══════════════════════════════════════
  // MIZORAM
  // ══════════════════════════════════════
  "aizawl":   city("aizawl",   "Aizawl",   "mizoram", "Mizoram", "Lengpui Airport (AJL)", "3–4 hours", "Aizawl (AJL)"),
  "lunglei":  city("lunglei",  "Lunglei",  "mizoram", "Mizoram", "Lengpui Airport (AJL)", "3–4 hours", "Aizawl (AJL)"),
  "champhai": city("champhai", "Champhai", "mizoram", "Mizoram", "Lengpui Airport (AJL)", "3–4 hours", "Aizawl (AJL)"),

  // ══════════════════════════════════════
  // ARUNACHAL PRADESH
  // ══════════════════════════════════════
  "itanagar":    city("itanagar",    "Itanagar",    "arunachal-pradesh", "Arunachal Pradesh", "Hollongi Airport (HGI) / Guwahati (GAU)", "3–4 hours", "Guwahati (GAU)"),
  "naharlagun":  city("naharlagun",  "Naharlagun",  "arunachal-pradesh", "Arunachal Pradesh", "Hollongi Airport (HGI)", "3–4 hours", "Guwahati (GAU)"),
  "pasighat":    city("pasighat",    "Pasighat",    "arunachal-pradesh", "Arunachal Pradesh", "Pasighat Airport (IXT)", "3–4 hours", "Dibrugarh (DIB)"),

  // ══════════════════════════════════════
  // SIKKIM
  // ══════════════════════════════════════
  "gangtok":    city("gangtok",    "Gangtok",    "sikkim", "Sikkim", "Pakyong Airport (PYG) / Bagdogra (IXB)", "3–4 hours", "Bagdogra (IXB)"),
  "namchi":     city("namchi",     "Namchi",     "sikkim", "Sikkim", "Pakyong Airport (PYG) / Bagdogra (IXB)", "3–4 hours", "Bagdogra (IXB)"),
  "gyalshing":  city("gyalshing",  "Gyalshing",  "sikkim", "Sikkim", "Pakyong Airport (PYG) / Bagdogra (IXB)", "3–4 hours", "Bagdogra (IXB)"),

  // ══════════════════════════════════════
  // CHHATTISGARH
  // ══════════════════════════════════════
  "raipur":    city("raipur",    "Raipur",    "chhattisgarh", "Chhattisgarh", "Swami Vivekananda Airport (RPR)", "5–6 hours", "Raipur (RPR)"),
  "bhilai":    city("bhilai",    "Bhilai",    "chhattisgarh", "Chhattisgarh", "Swami Vivekananda Airport (RPR)", "5–6 hours", "Raipur (RPR)"),
  "bilaspur":  city("bilaspur",  "Bilaspur",  "chhattisgarh", "Chhattisgarh", "Bilaspur Airport (PAB)", "5–6 hours", "Bilaspur (PAB)"),
  "korba":     city("korba",     "Korba",     "chhattisgarh", "Chhattisgarh", "Raipur Airport (RPR)", "5–6 hours", "Raipur (RPR)"),
  "durg":      city("durg",      "Durg",      "chhattisgarh", "Chhattisgarh", "Swami Vivekananda Airport (RPR)", "5–6 hours", "Raipur (RPR)"),
};

export default citiesRegistry;
