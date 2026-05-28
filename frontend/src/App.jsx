import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import AdminLogin from "./pages/adminLogin";
import AdminDashboard from "./pages/admin";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blogDetails";
import AdmissionServices from "./pages/admissionServices";
import MbbsVietnam from "./pages/mbbsInVietnam";
import FloatingCallButton from "./pages/floatingCallButton";
import FloatingWhatsApp from "./pages/floatingWhatsapp";
import ScrollToTop from "./components/scrollToTop";
import UniversityDetails from "./pages/universityDetails";
import NamCanThoUniversity from "./pages/namCanTho";
import DaiNamUniversity from "./pages/daiNam";
import PhanChauTrinhUniversity from "./pages/phanChauTrinh";
import BUHMedicalUniversity from "./pages/buonMaThuot";
import CanThoMedicalUniversity from "./pages/canTho";
import TimeBasedPopup from "./components/TimeBasedPopup";
import DongAUniversity from "./pages/dong_A_University";

// ── Dynamic Admission Guide — handles both State & City pages ──
import AdmissionGuide from "./pages/states";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Main pages ── */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/admissionServices" element={<AdmissionServices />} />
        <Route path="/mbbsInVietnam" element={<MbbsVietnam />} />

        {/* ── Universities ── */}
        <Route path="/universities/nam-can-tho-university" element={<NamCanThoUniversity />} />
        <Route path="/universities/dai-nam-university" element={<DaiNamUniversity />} />
        <Route path="/universities/phan-chau-trinh-university" element={<PhanChauTrinhUniversity />} />
        <Route path="/universities/buon-ma-thuot-medical-university" element={<BUHMedicalUniversity />} />
        <Route path="/universities/can-tho-university" element={<CanThoMedicalUniversity />} />
        <Route path="/universities/:slug" element={<UniversityDetails />} />
        <Route path="/universities/dong-a-university" element={<DongAUniversity />} />

        {/* ── Admission Guides — State pages ──
            URL examples:
              /admission-guides/tamil-nadu
              /admission-guides/kerala
              /admission-guides/karnataka
            Adding new state = just add data to statesData.js, no new route needed!
        ── */}
        <Route path="/admission-guides/:slug" element={<AdmissionGuide />} />

        {/* ── Admission Guides — City pages ──
            URL examples:
              /admission-guides/city/chennai      → shows "Chennai", uses Tamil Nadu content
              /admission-guides/city/trichy        → shows "Trichy",   uses Tamil Nadu content
              /admission-guides/city/bengaluru     → shows "Bengaluru", uses Karnataka content
              /admission-guides/city/hyderabad     → shows "Hyderabad", uses Telangana content
            All city → state mappings are in src/data/cityToState.js
        ── */}
        <Route path="/admission-guides/city/:citySlug" element={<AdmissionGuide />} />

        {/* ── Admin ── */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Navigate to="/admin" replace />} />
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated() ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />

        {/* ── Catch-all ── */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <FloatingCallButton />
      <FloatingWhatsApp />
      <ScrollToTop />
      <TimeBasedPopup />
    </BrowserRouter>
  );
}

export default App;
