



import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

const API           = `${BASE_URL}/universities`;
const UPLOAD_API    = `${BASE_URL}/upload-image`;
const BLOGS_API     = `${BASE_URL}/api/blogs`;
const REVIEWS_API   = `${BASE_URL}/api/reviews/admin`;
const REVIEWS_POST  = `${BASE_URL}/api/reviews`;
const TOP_UNIS_API      = `${BASE_URL}/api/top-universities`;
const TOP_UNIS_GET_API  = `${BASE_URL}/api/top-universities/admin`;

const iconOptions = ["🏥", "👩‍⚕️", "📘", "✈️", "🍛", "🎓", "✅"];

const ALL_STATES = [
  "Andhra Pradesh","Goa","Tamil Nadu","Kerala","Karnataka","Telangana",
  "Maharashtra","Gujarat","Rajasthan","Uttar Pradesh","Madhya Pradesh",
  "Bihar","West Bengal","Punjab","Haryana","Delhi","Odisha","Assam",
  "Jharkhand","Chhattisgarh","Uttarakhand","Himachal Pradesh","Tripura",
  "Manipur","Meghalaya","Nagaland","Arunachal Pradesh","Mizoram","Sikkim"
];

/* ═══════════════════════════════════════════════════════════
   SIDEBAR NAV ITEMS
═══════════════════════════════════════════════════════════ */
const NAV = [
  {
    id: "universities",
    label: "Universities",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: "blogs",
    label: "Blogs",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: "enquiries",
    label: "Enquiries",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "admissions",
    label: "Admission Services",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    id: "topuniversities",
    label: "Top Universities",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("universities");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const sectionTitles = {
    universities:    { title: "Universities",        sub: "Manage university listings and highlights" },
    blogs:           { title: "Blogs",               sub: "Create and manage blog posts"              },
    reviews:         { title: "Student Reviews",     sub: "Manage testimonials from students"         },
    enquiries:       { title: "Enquiries",           sub: "View and respond to student enquiries"     },
    admissions:      { title: "Admission Services",  sub: "Manage admission service listings"         },
    topuniversities: { title: "Top Universities",    sub: "Manage top university cards on homepage"   },
  };

  return (
    <div style={S.root}>
      {/* ── Sidebar ── */}
      <aside style={S.sidebar}>
        <div style={S.sbTop}>
          <div style={S.sbLogoBox}>V</div>
          <div>
            <div style={S.sbBrand}>Vietnam MBBS</div>
            <div style={S.sbTitle}>Admin Panel</div>
          </div>
        </div>

        <div style={S.sbDivider} />

        <nav style={S.sbNav}>
          <span style={S.navSection}>Main Menu</span>
          {NAV.map((item) => (
            <button
              key={item.id}
              style={S.navItem(activeSection === item.id)}
              onClick={() => setActiveSection(item.id)}
            >
              <span style={S.navIcon(activeSection === item.id)}>{item.icon}</span>
              <span style={S.navLabel(activeSection === item.id)}>{item.label}</span>
              {activeSection === item.id && <span style={S.navDot} />}
            </button>
          ))}
        </nav>

        <div style={S.sbFoot}>
          <div style={S.sbFootInner}>
            <div style={S.adminAvatar}>A</div>
            <div style={S.adminInfo}>
              <div style={S.adminName}>Administrator</div>
              <div style={S.adminRole}>Super Admin</div>
            </div>
          </div>
          <button style={S.logoutBtn} onClick={handleLogout}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div style={S.main}>
        <header style={S.topbar}>
          <div>
            <div style={S.tbTitle}>{sectionTitles[activeSection]?.title}</div>
            <div style={S.tbSub}>{sectionTitles[activeSection]?.sub}</div>
          </div>
          <div style={S.tbRight}>
            <span style={S.tbBadge}>
              {activeSection === "universities"    ? "Live"         :
               activeSection === "blogs"           ? "Blog CMS"     :
               activeSection === "reviews"         ? "Reviews CMS"  :
               activeSection === "topuniversities" ? "Rankings"     : "Panel"}
            </span>
          </div>
        </header>

        <div style={S.content}>
          {activeSection === "universities"    && <UniversitiesSection />}
          {activeSection === "blogs"           && <BlogsSection />}
          {activeSection === "reviews"         && <ReviewsSection />}
          {activeSection === "enquiries"       && <PlaceholderSection icon="👥" label="Enquiries coming soon" />}
          {activeSection === "admissions"      && <PlaceholderSection icon="📋" label="Admission Services coming soon" />}
          {activeSection === "topuniversities" && <TopUniversitiesSection />}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TOP UNIVERSITIES SECTION — FULLY DYNAMIC WITH IMAGE UPLOAD
   Each entry is its OWN complete card (not linked to universities table)
   Fields: name, location, est_year, student_count, fee, slug,
           image (uploaded), badge, rank, is_nmc_approved
═══════════════════════════════════════════════════════════ */
function TopUniversitiesSection() {
  const token = localStorage.getItem("token");

  const [universities, setUniversities] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState("");
  const [toast, setToast]               = useState("");
  const [deleteModal, setDeleteModal]   = useState({ open: false, id: null, name: "" });
  const [submitting, setSubmitting]     = useState(false);
  const [uploading, setUploading]       = useState(false);

  const [imageFile, setImageFile]       = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef                    = useRef(null);

  const emptyForm = {
    name: "",
    location: "",
    est_year: "",
    student_count: "",
    fee: "",
    slug: "",
    badge: "",
    rank: "",
    is_nmc_approved: true,
  };
  const [form, setForm] = useState(emptyForm);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  useEffect(() => {
    fetch(TOP_UNIS_GET_API, { headers: token ? { Authorization: token } : {} })
      .then((r) => { if (!r.ok) throw new Error("Failed"); return r.json(); })
      .then((data) => { setUniversities(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setUniversities([]); setLoading(false); });
  }, [token]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) { setError("Only JPEG, PNG, WEBP, GIF allowed."); return; }
    if (file.size > 5 * 1024 * 1024)  { setError("Image must be under 5MB."); return; }
    setError("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async () => {
    if (!form.name || !form.fee) { setError("University name and fee are required."); return; }
    setError("");
    setSubmitting(true);
    setUploading(!!imageFile);
    try {
      let imageUrl = "";
      if (imageFile) {
        const fd = new FormData();
        fd.append("image", imageFile);
        const r = await fetch(UPLOAD_API, {
          method: "POST",
          headers: token ? { Authorization: token } : {},
          body: fd,
        });
        if (!r.ok) throw new Error((await r.json()).error || "Image upload failed");
        imageUrl = (await r.json()).imageUrl;
        setUploading(false);
      }

      const payload = {
        name:          form.name.trim(),
        location:      form.location.trim(),
        est_year:      form.est_year ? Number(form.est_year) : null,
        student_count: form.student_count.trim(),
        fee:           form.fee.trim(),
        slug:          form.slug.trim() || null,
        badge:         form.badge.trim() || null,
        rank:          form.rank ? Number(form.rank) : null,
        is_nmc_approved: form.is_nmc_approved,
        image:         imageUrl || null,
      };

      const res = await fetch(TOP_UNIS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: token } : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to add");
      const newEntry = await res.json();
      setUniversities([newEntry, ...universities]);
      showToast("✅ University card added!");
      setForm(emptyForm);
      removeImage();
    } catch (err) { setError(err.message); }
    finally { setSubmitting(false); setUploading(false); }
  };

  const confirmDelete = async () => {
    try {
      const res = await fetch(`${TOP_UNIS_API}/${deleteModal.id}`, {
        method: "DELETE",
        headers: token ? { Authorization: token } : {},
      });
      if (!res.ok) throw new Error("Delete failed");
      setUniversities(universities.filter((u) => u.id !== deleteModal.id));
      showToast("🗑 University card removed");
    } catch (err) { setError(err.message); }
    finally { setDeleteModal({ open: false, id: null, name: "" }); }
  };

  const sorted = [...universities].sort((a, b) => (a.rank || 999) - (b.rank || 999));

  return (
    <>
      {/* Stats */}
      <div style={S.statsRow}>
        <StatCard label="Total Cards"  value={universities.length}                             sub="Shown on homepage"   color="#22c55e" />
        <StatCard label="With Rank"    value={universities.filter(u => u.rank).length}         sub="Have rank number"    color="#ffbe00" />
        <StatCard label="NMC Approved" value={universities.filter(u => u.is_nmc_approved).length} sub="Marked approved"  color="#CC1B1B" />
      </div>

      <div style={S.layout}>
        {/* ── Add Form ── */}
        <Card title="Add University Card">
          {error && <ErrorBar msg={error} />}

          {/* University Image */}
          <Field label="University Image">
            {imagePreview ? (
              <div style={{ position: "relative" }}>
                <img src={imagePreview} alt="Preview" style={S.previewImg} />
                <button type="button" style={S.removeImgBtn} onClick={removeImage}>×</button>
              </div>
            ) : (
              <div style={S.uploadZone} onClick={() => fileInputRef.current?.click()}>
                <svg width="28" height="28" fill="none" stroke="#ccc" strokeWidth="1.5" viewBox="0 0 24 24"
                  style={{ margin: "0 auto", display: "block" }}>
                  <rect x="3" y="3" width="18" height="18" rx="3"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>Click to upload university photo</div>
                <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>JPEG, PNG, WEBP — max 5MB</div>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Field>

          {/* Name */}
          <Field label="University Name *">
            <input
              style={S.input}
              placeholder="e.g. Can Tho University of Medicine and Pharmacy"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Field>

          {/* Location + Est Year */}
          <div style={S.fieldRow}>
            <Field label="Location (City)">
              <input
                style={S.input}
                placeholder="e.g. Can Tho"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </Field>
            <Field label="Est. Year">
              <input
                style={S.input}
                type="number"
                placeholder="e.g. 1966"
                value={form.est_year}
                onChange={(e) => setForm({ ...form, est_year: e.target.value })}
              />
            </Field>
          </div>

          {/* Student Count + Fee */}
          <div style={S.fieldRow}>
            <Field label="Indian Students">
              <input
                style={S.input}
                placeholder="e.g. 350+ Indian Students"
                value={form.student_count}
                onChange={(e) => setForm({ ...form, student_count: e.target.value })}
              />
            </Field>
            <Field label="Total Fee (Package) *">
              <input
                style={S.input}
                placeholder="e.g. ₹47,23,000"
                value={form.fee}
                onChange={(e) => setForm({ ...form, fee: e.target.value })}
              />
            </Field>
          </div>

          {/* Slug + Badge */}
          <div style={S.fieldRow}>
            <Field label="Detail Page Slug">
              <input
                style={S.input}
                placeholder="e.g. can-tho-university"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
            </Field>
            <Field label="Badge Label">
              <input
                style={S.input}
                placeholder="e.g. Most Popular"
                value={form.badge}
                onChange={(e) => setForm({ ...form, badge: e.target.value })}
              />
            </Field>
          </div>

          {/* Rank */}
          <Field label="Display Rank (optional)">
            <input
              style={S.input}
              type="number"
              placeholder="e.g. 1 (lower = shown first)"
              min="1"
              value={form.rank}
              onChange={(e) => setForm({ ...form, rank: e.target.value })}
            />
          </Field>

          {/* NMC Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <label style={{ ...S.fieldLabel, margin: 0 }}>NMC Approved</label>
            <div
              onClick={() => setForm({ ...form, is_nmc_approved: !form.is_nmc_approved })}
              style={{
                width: 40, height: 22, borderRadius: 11,
                background: form.is_nmc_approved ? "#22c55e" : "#e0d8cc",
                position: "relative", cursor: "pointer", transition: "background 0.2s",
              }}
            >
              <div style={{
                position: "absolute", top: 3,
                left: form.is_nmc_approved ? 21 : 3,
                width: 16, height: 16, borderRadius: "50%",
                background: "#fff", transition: "left 0.2s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }} />
            </div>
            <span style={{ fontSize: 11, color: "#a08060" }}>
              {form.is_nmc_approved ? "Will show NMC Approved badge" : "No NMC badge"}
            </span>
          </div>

          <button
            style={S.submitBtn(submitting)}
            disabled={submitting}
            onClick={handleSubmit}
          >
            {uploading ? "Uploading image…" : submitting ? "Adding…" : "Add University Card"}
          </button>
        </Card>

        {/* ── Cards List ── */}
        <Card title={`University Cards (${universities.length})`}>
          {loading ? (
            <div style={S.empty}>Loading…</div>
          ) : sorted.length === 0 ? (
            <div style={S.empty}>No university cards added yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {sorted.map((u) => (
                <div key={u.id} style={S.uniCardRow}>
                  {/* Image */}
                  {u.image ? (
                    <img src={u.image} alt={u.name} style={S.uniCardImg} />
                  ) : (
                    <div style={S.uniCardImgPH}>🎓</div>
                  )}

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", marginBottom: 3 }}>
                      {u.rank && (
                        <span style={{ ...S.badge, fontWeight: 700, fontSize: 11 }}>#{u.rank}</span>
                      )}
                      {u.is_nmc_approved && (
                        <span style={{ ...S.pill, color: "#166534", background: "#dcfce7", border: "0.5px solid #bbf7d0" }}>
                          ✅ NMC
                        </span>
                      )}
                      {u.badge && (
                        <span style={{ ...S.pill, color: "#CC1B1B", fontWeight: 600 }}>{u.badge}</span>
                      )}
                    </div>

                    <div style={{ fontWeight: 600, fontSize: 13, color: "#1a0e00", marginBottom: 2 }}>
                      {u.name}
                    </div>

                    <div style={{ fontSize: 11, color: "#a08060", marginBottom: 3 }}>
                      {[u.location, u.est_year ? `Est. ${u.est_year}` : null, u.student_count]
                        .filter(Boolean).join("  •  ")}
                    </div>

                    <div style={{ fontSize: 12, fontWeight: 700, color: "#CC1B1B" }}>
                      {u.fee}
                      <span style={{ fontWeight: 400, color: "#a08060", fontSize: 11, marginLeft: 4 }}>
                        Total Package
                      </span>
                    </div>

                    {u.slug && (
                      <div style={{ fontSize: 10, color: "#bbb", marginTop: 2, fontFamily: "monospace" }}>
                        /{u.slug}
                      </div>
                    )}
                  </div>

                  {/* Delete */}
                  <button
                    style={S.delBtn}
                    onClick={() => setDeleteModal({ open: true, id: u.id, name: u.name })}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {deleteModal.open && (
        <Modal
          title="Remove University Card?"
          body={
            <>
              Remove <strong>"{deleteModal.name}"</strong> from Top Universities?
              <br />This action cannot be undone.
            </>
          }
          onCancel={() => setDeleteModal({ open: false, id: null, name: "" })}
          onConfirm={confirmDelete}
          confirmLabel="Yes, Remove"
          cancelLabel="Cancel"
        />
      )}
      {toast && <Toast msg={toast} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   REVIEWS SECTION
═══════════════════════════════════════════════════════════ */
function ReviewsSection() {
  const token = localStorage.getItem("token");
  const [reviews, setReviews]         = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState("");
  const [toast, setToast]             = useState("");
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null, name: "" });
  const [submitting, setSubmitting]   = useState(false);

  const [form, setForm] = useState({
    name: "", city: "", state: "Andhra Pradesh",
    university: "", rating: 5, review: "", is_active: true,
  });

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  useEffect(() => {
    fetch(REVIEWS_API, { headers: { Authorization: token } })
      .then((r) => r.json())
      .then((data) => { setReviews(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setReviews([]); setLoading(false); });
  }, [token]);

  const handleSubmit = async () => {
    if (!form.name || !form.city || !form.review) {
      setError("Name, City, and Review are required."); return;
    }
    setError(""); setSubmitting(true);
    try {
      const res = await fetch(REVIEWS_POST, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to add review");
      const newReview = await res.json();
      setReviews([newReview, ...reviews]);
      showToast("✅ Review added successfully");
      setForm({ name: "", city: "", state: "Andhra Pradesh", university: "", rating: 5, review: "", is_active: true });
    } catch (err) { setError(err.message); }
    finally { setSubmitting(false); }
  };

  const handleToggle = async (id) => {
    try {
      const res = await fetch(`${REVIEWS_POST}/${id}/toggle`, {
        method: "PATCH", headers: { Authorization: token },
      });
      const updated = await res.json();
      setReviews(reviews.map((r) => r.id === id ? updated : r));
      showToast("✅ Status updated");
    } catch { setError("Failed to toggle"); }
  };

  const confirmDelete = async () => {
    try {
      const res = await fetch(`${REVIEWS_POST}/${deleteModal.id}`, {
        method: "DELETE", headers: { Authorization: token },
      });
      if (!res.ok) throw new Error("Delete failed");
      setReviews(reviews.filter((r) => r.id !== deleteModal.id));
      showToast("🗑 Review deleted");
    } catch (err) { setError(err.message); }
    finally { setDeleteModal({ open: false, id: null, name: "" }); }
  };

  const StarRating = ({ value, onChange }) => (
    <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} type="button" onClick={() => onChange(star)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0,
            fontSize: 22, color: star <= value ? "#f59e0b" : "#e0d8cc", transition: "color 0.15s" }}>★</button>
      ))}
    </div>
  );

  return (
    <>
      <div style={S.statsRow}>
        <StatCard label="Total Reviews" value={reviews.length}                          sub="All testimonials"  color="#22c55e" />
        <StatCard label="Active"        value={reviews.filter(r => r.is_active).length} sub="Showing on site"   color="#ffbe00" />
        <StatCard label="States"        value={[...new Set(reviews.map(r => r.state))].length} sub="States covered" color="#CC1B1B" />
      </div>

      <div style={S.layout}>
        <Card title="Add New Review">
          {error && <ErrorBar msg={error} />}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            <Field label="Student Name *">
              <input style={S.input} placeholder="e.g. Rahul Sharma" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Field>
            <Field label="City *">
              <input style={S.input} placeholder="e.g. Panaji" value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </Field>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            <Field label="State *">
              <select style={S.input} value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })}>
                {ALL_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="University (optional)">
              <input style={S.input} placeholder="e.g. Can Tho University" value={form.university}
                onChange={(e) => setForm({ ...form, university: e.target.value })} />
            </Field>
          </div>

          <Field label="Star Rating">
            <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
          </Field>

          <Field label="Review Text *">
            <textarea
              style={{ ...S.input, resize: "vertical", minHeight: 100, marginTop: 4 }}
              placeholder="Write the student's review here..."
              rows={4}
              value={form.review}
              onChange={(e) => setForm({ ...form, review: e.target.value })}
            />
          </Field>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <label style={{ ...S.fieldLabel, margin: 0 }}>Active (Show on site)</label>
            <div
              onClick={() => setForm({ ...form, is_active: !form.is_active })}
              style={{ width: 40, height: 22, borderRadius: 11,
                background: form.is_active ? "#22c55e" : "#e0d8cc",
                position: "relative", cursor: "pointer", transition: "background 0.2s" }}
            >
              <div style={{ position: "absolute", top: 3,
                left: form.is_active ? 21 : 3,
                width: 16, height: 16, borderRadius: "50%",
                background: "#fff", transition: "left 0.2s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
            </div>
          </div>

          <button style={S.submitBtn(submitting)} disabled={submitting} onClick={handleSubmit}>
            {submitting ? "Adding…" : "Add Review"}
          </button>
        </Card>

        <Card title={`All Reviews (${reviews.length})`}>
          {loading ? (
            <div style={S.empty}>Loading reviews…</div>
          ) : reviews.length === 0 ? (
            <div style={S.empty}>No reviews added yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {reviews.map((r) => (
                <div key={r.id} style={{
                  border: "0.5px solid #e8e0d0", borderRadius: 10, padding: "12px 14px",
                  background: r.is_active ? "#fff" : "#f9f6f0", opacity: r.is_active ? 1 : 0.65,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "#1a0e00" }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: "#a08060", marginTop: 1 }}>
                        {r.city}, {r.state}
                        {r.university && <span style={{ color: "#CC1B1B", marginLeft: 6 }}>• {r.university}</span>}
                      </div>
                      <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                        {[1,2,3,4,5].map((s) => (
                          <span key={s} style={{ fontSize: 13, color: s <= r.rating ? "#f59e0b" : "#e0d8cc" }}>★</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div onClick={() => handleToggle(r.id)} title={r.is_active ? "Click to hide" : "Click to show"}
                        style={{ width: 34, height: 18, borderRadius: 9,
                          background: r.is_active ? "#22c55e" : "#e0d8cc",
                          position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0 }}>
                        <div style={{ position: "absolute", top: 2,
                          left: r.is_active ? 18 : 2,
                          width: 14, height: 14, borderRadius: "50%",
                          background: "#fff", transition: "left 0.2s" }} />
                      </div>
                      <button style={S.delBtn}
                        onClick={() => setDeleteModal({ open: true, id: r.id, name: r.name })}>Delete</button>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#7a5a38", lineHeight: 1.5, fontStyle: "italic" }}>
                    "{r.review.length > 150 ? r.review.slice(0, 150) + "…" : r.review}"
                  </div>
                  <div style={{ fontSize: 10, color: "#bbb", marginTop: 6 }}>
                    {r.is_active ? "✅ Visible on site" : "⚪ Hidden"} •{" "}
                    {new Date(r.created_at).toLocaleDateString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {deleteModal.open && (
        <Modal
          title="Delete Review?"
          body={<>Delete review by <strong>"{deleteModal.name}"</strong>?<br />This cannot be undone.</>}
          onCancel={() => setDeleteModal({ open: false, id: null, name: "" })}
          onConfirm={confirmDelete}
          confirmLabel="Yes, Delete"
          cancelLabel="Cancel"
        />
      )}
      {toast && <Toast msg={toast} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   UNIVERSITIES SECTION
═══════════════════════════════════════════════════════════ */
function UniversitiesSection() {
  const [universities, setUniversities] = useState([]);
  const [form, setForm]                 = useState({ name: "", shortName: "", fee: "" });
  const [highlights, setHighlights]     = useState([{ icon: "", text: "" }]);
  const [imageFile, setImageFile]       = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading]       = useState(false);
  const [error, setError]               = useState("");
  const [toast, setToast]               = useState("");
  const [deleteModal, setDeleteModal]   = useState({ open: false, id: null, name: "" });
  const fileInputRef                    = useRef(null);
  const token                           = localStorage.getItem("token");

  useEffect(() => {
    fetch(API, { headers: { Authorization: token } })
      .then((r) => { if (!r.ok) throw new Error("Unauthorized"); return r.json(); })
      .then(setUniversities)
      .catch((e) => setError(e.message));
  }, [token]);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) { setError("Only JPEG, PNG, WEBP, GIF allowed."); return; }
    if (file.size > 5 * 1024 * 1024)  { setError("Image must be under 5MB."); return; }
    setError(""); setImageFile(file); setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null); setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(""); setUploading(true);
    try {
      let imageUrl = "";
      if (imageFile) {
        const fd = new FormData();
        fd.append("image", imageFile);
        const r = await fetch(UPLOAD_API, { method: "POST", headers: { Authorization: token }, body: fd });
        if (!r.ok) throw new Error((await r.json()).error || "Upload failed");
        imageUrl = (await r.json()).imageUrl;
      }
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({ name: form.name, shortName: form.shortName, fee: form.fee, image: imageUrl, highlights }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Insert failed");
      setUniversities([await res.json(), ...universities]);
      showToast("✅ University added");
      setForm({ name: "", shortName: "", fee: "" });
      setHighlights([{ icon: "", text: "" }]);
      removeImage();
    } catch (err) { setError(err.message); }
    finally { setUploading(false); }
  };

  const confirmDelete = async () => {
    try {
      const r = await fetch(`${API}/${deleteModal.id}`, { method: "DELETE", headers: { Authorization: token } });
      if (!r.ok) throw new Error("Delete failed");
      setUniversities(universities.filter((u) => u.id !== deleteModal.id));
      showToast("🗑 University deleted");
    } catch (err) { setError(err.message); }
    finally { setDeleteModal({ open: false, id: null, name: "" }); }
  };

  return (
    <>
      <div style={S.statsRow}>
        <StatCard label="Total Universities" value={universities.length}                    sub="All listings active" color="#22c55e" />
        <StatCard label="With Images"        value={universities.filter(u => u.image).length} sub="Have photo"        color="#ffbe00" />
        <StatCard label="With Fees"          value={universities.filter(u => u.fee).length}   sub="Fee listed"        color="#CC1B1B" />
      </div>

      <div style={S.layout}>
        <Card title="Add New University">
          {error && <ErrorBar msg={error} />}
          <form onSubmit={handleSubmit}>
            <Field label="University Name *">
              <input style={S.input} name="name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Hanoi Medical University" required />
            </Field>
            <div style={S.fieldRow}>
              <Field label="Short Name">
                <input style={S.input} name="shortName" value={form.shortName}
                  onChange={(e) => setForm({ ...form, shortName: e.target.value })} placeholder="e.g. HMU" />
              </Field>
              <Field label="Annual Fee">
                <input style={S.input} name="fee" value={form.fee}
                  onChange={(e) => setForm({ ...form, fee: e.target.value })} placeholder="e.g. ₹35,00,000" />
              </Field>
            </div>

            <Field label="University Image">
              {imagePreview ? (
                <div style={{ position: "relative" }}>
                  <img src={imagePreview} alt="Preview" style={S.previewImg} />
                  <button type="button" style={S.removeImgBtn} onClick={removeImage}>×</button>
                </div>
              ) : (
                <div style={S.uploadZone} onClick={() => fileInputRef.current?.click()}>
                  <svg width="28" height="28" fill="none" stroke="#ccc" strokeWidth="1.5" viewBox="0 0 24 24"
                    style={{ margin: "0 auto", display: "block" }}>
                    <rect x="3" y="3" width="18" height="18" rx="3"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>Click to upload</div>
                  <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>JPEG, PNG, WEBP — max 5MB</div>
                </div>
              )}
              <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif"
                style={{ display: "none" }} onChange={handleImageChange} />
            </Field>

            <Field label="Highlights">
              {highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 7 }}>
                  <select style={S.iconSel} value={h.icon}
                    onChange={(e) => { const u = [...highlights]; u[i].icon = e.target.value; setHighlights(u); }}>
                    <option value="">—</option>
                    {iconOptions.map((ic, idx) => <option key={idx} value={ic}>{ic}</option>)}
                  </select>
                  <input style={{ ...S.input, flex: 1 }} placeholder="Highlight text" value={h.text}
                    onChange={(e) => { const u = [...highlights]; u[i].text = e.target.value; setHighlights(u); }} />
                  {highlights.length > 1 && (
                    <button type="button" style={S.removeBtn}
                      onClick={() => setHighlights(highlights.filter((_, j) => j !== i))}>×</button>
                  )}
                </div>
              ))}
              <button type="button" style={S.addBtn}
                onClick={() => setHighlights([...highlights, { icon: "", text: "" }])}>+ Add highlight</button>
            </Field>

            <button type="submit" style={S.submitBtn(uploading)} disabled={uploading}>
              {uploading ? "Uploading…" : "Add University"}
            </button>
          </form>
        </Card>

        <Card title={`All Universities (${universities.length})`}>
          {universities.length === 0 ? (
            <div style={S.empty}>No universities added yet.</div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={S.table}>
                <thead>
                  <tr>{["University", "Fee", "Highlights", ""].map((h) => <th key={h} style={S.th}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {universities.map((u) => (
                    <tr key={u.id}>
                      <td style={S.td}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          {u.image ? <img src={u.image} alt={u.name} style={S.thumb} /> : <div style={S.thumbPH}>🎓</div>}
                          <div>
                            <div style={{ fontWeight: 500, fontSize: 13 }}>{u.name}</div>
                            {u.short_name && <div style={{ fontSize: 11, color: "#888" }}>{u.short_name}</div>}
                          </div>
                        </div>
                      </td>
                      <td style={S.td}>{u.fee ? <span style={S.badge}>{u.fee}</span> : <span style={{ color: "#bbb", fontSize: 12 }}>—</span>}</td>
                      <td style={{ ...S.td, maxWidth: 200 }}>
                        {(u.highlights || []).length > 0
                          ? u.highlights.map((h, i) => <span key={i} style={S.pill}>{h.icon} {h.text}</span>)
                          : <span style={{ color: "#bbb", fontSize: 12 }}>—</span>}
                      </td>
                      <td style={S.td}>
                        <button style={S.delBtn}
                          onClick={() => setDeleteModal({ open: true, id: u.id, name: u.name })}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>

      {deleteModal.open && (
        <Modal
          title="Delete University?"
          body={<>Delete <strong>"{deleteModal.name}"</strong>?<br />This cannot be undone.</>}
          onCancel={() => setDeleteModal({ open: false, id: null, name: "" })}
          onConfirm={confirmDelete}
          confirmLabel="Yes"
          cancelLabel="No"
        />
      )}
      {toast && <Toast msg={toast} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   BLOGS SECTION
═══════════════════════════════════════════════════════════ */
function BlogsSection() {
  const token = localStorage.getItem("token");

  const [blogs, setBlogs]               = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [error, setError]               = useState("");
  const [toast, setToast]               = useState("");
  const [deleteModal, setDeleteModal]   = useState({ open: false, id: null, title: "" });

  const [blogForm, setBlogForm] = useState({
    title: "", slug: "", author: "", date: "",
    sections: [{ heading: "", content: "" }],
  });
  const [blogImageFile, setBlogImageFile]       = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState("");
  const [submitting, setSubmitting]             = useState(false);
  const blogFileRef                             = useRef(null);

  useEffect(() => {
    fetch(BLOGS_API, { headers: { Authorization: token } })
      .then((r) => r.json())
      .then((data) => { setBlogs(Array.isArray(data) ? data : []); setLoadingBlogs(false); })
      .catch(() => { setBlogs([]); setLoadingBlogs(false); });
  }, [token]);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) { setError("Only JPEG, PNG, WEBP, GIF allowed."); return; }
    if (file.size > 5 * 1024 * 1024)  { setError("Image must be under 5MB."); return; }
    setError(""); setBlogImageFile(file); setBlogImagePreview(URL.createObjectURL(file));
  };

  const removeBlogImage = () => {
    setBlogImageFile(null); setBlogImagePreview("");
    if (blogFileRef.current) blogFileRef.current.value = "";
  };

  const handleTitleChange = (val) => {
    const slug = val.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    setBlogForm({ ...blogForm, title: val, slug });
  };

  const submitBlog = async () => {
    if (!blogForm.title || !blogForm.slug) { setError("Title and slug are required."); return; }
    setError(""); setSubmitting(true);
    try {
      let imageUrl = "";
      if (blogImageFile) {
        const fd = new FormData();
        fd.append("image", blogImageFile);
        const r = await fetch(UPLOAD_API, { method: "POST", headers: { Authorization: token }, body: fd });
        if (!r.ok) throw new Error((await r.json()).error || "Image upload failed");
        imageUrl = (await r.json()).imageUrl;
      }
      const res = await fetch(BLOGS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({ ...blogForm, image: imageUrl }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Blog insert failed");
      const newBlog = await res.json();
      setBlogs([newBlog, ...blogs]);
      showToast("✅ Blog published");
      setBlogForm({ title: "", slug: "", author: "", date: "", sections: [{ heading: "", content: "" }] });
      removeBlogImage();
    } catch (err) { setError(err.message); }
    finally { setSubmitting(false); }
  };

  const confirmDeleteBlog = async () => {
    try {
      const r = await fetch(`${BLOGS_API}/${deleteModal.id}`, { method: "DELETE", headers: { Authorization: token } });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Delete failed");
      setBlogs((prev) => prev.filter((b) => b.id !== deleteModal.id));
      showToast("🗑 Blog deleted");
    } catch (err) { setError(err.message); }
    finally { setDeleteModal({ open: false, id: null, title: "" }); }
  };

  return (
    <>
      <div style={S.statsRow}>
        <StatCard label="Total Blogs"  value={blogs.length}                                              sub="Published posts"  color="#22c55e" />
        <StatCard label="With Images"  value={blogs.filter(b => b.image).length}                         sub="Have cover photo" color="#ffbe00" />
        <StatCard label="Authors"      value={[...new Set(blogs.map(b => b.author).filter(Boolean))].length} sub="Unique authors" color="#CC1B1B" />
      </div>

      <div style={S.layout}>
        <Card title="Publish New Blog">
          {error && <ErrorBar msg={error} />}

          <Field label="Blog Title *">
            <input style={S.input} placeholder="e.g. MBBS in Vietnam: Complete Guide" value={blogForm.title}
              onChange={(e) => handleTitleChange(e.target.value)} />
          </Field>

          <Field label="URL Slug *">
            <input style={S.input} placeholder="mbbs-in-vietnam-complete-guide" value={blogForm.slug}
              onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })} />
          </Field>

          <div style={S.fieldRow}>
            <Field label="Author">
              <input style={S.input} placeholder="Dr. Priya Sharma" value={blogForm.author}
                onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} />
            </Field>
            <Field label="Publish Date">
              <input type="date" style={S.input} value={blogForm.date}
                onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })} />
            </Field>
          </div>

          <Field label="Cover Image">
            {blogImagePreview ? (
              <div style={{ position: "relative" }}>
                <img src={blogImagePreview} alt="Preview" style={S.previewImg} />
                <button type="button" style={S.removeImgBtn} onClick={removeBlogImage}>×</button>
              </div>
            ) : (
              <div style={S.uploadZone} onClick={() => blogFileRef.current?.click()}>
                <svg width="28" height="28" fill="none" stroke="#ccc" strokeWidth="1.5" viewBox="0 0 24 24"
                  style={{ margin: "0 auto", display: "block" }}>
                  <rect x="3" y="3" width="18" height="18" rx="3"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>Click to upload cover image</div>
                <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>JPEG, PNG, WEBP — max 5MB</div>
              </div>
            )}
            <input ref={blogFileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif"
              style={{ display: "none" }} onChange={handleBlogImageChange} />
          </Field>

          <Field label="Blog Sections">
            {blogForm.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: 14, background: "#fafafa", border: "0.5px solid #e8e0d0", borderRadius: 8, padding: "12px 12px 8px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#CC1B1B", letterSpacing: 0.5, textTransform: "uppercase" }}>Section {i + 1}</span>
                  {blogForm.sections.length > 1 && (
                    <button type="button" style={S.removeBtn}
                      onClick={() => setBlogForm({ ...blogForm, sections: blogForm.sections.filter((_, j) => j !== i) })}>×</button>
                  )}
                </div>
                <input style={{ ...S.input, marginBottom: 8 }} placeholder="Section heading (optional)" value={sec.heading}
                  onChange={(e) => { const u = [...blogForm.sections]; u[i].heading = e.target.value; setBlogForm({ ...blogForm, sections: u }); }} />
                <textarea style={{ ...S.input, resize: "vertical", minHeight: 80 }} placeholder="Write section content…"
                  rows={4} value={sec.content}
                  onChange={(e) => { const u = [...blogForm.sections]; u[i].content = e.target.value; setBlogForm({ ...blogForm, sections: u }); }} />
              </div>
            ))}
            <button type="button" style={S.addBtn}
              onClick={() => setBlogForm({ ...blogForm, sections: [...blogForm.sections, { heading: "", content: "" }] })}>
              + Add Section
            </button>
          </Field>

          <button style={S.submitBtn(submitting)} disabled={submitting} onClick={submitBlog}>
            {submitting ? "Publishing…" : "Publish Blog"}
          </button>
        </Card>

        <Card title={`All Blogs (${blogs.length})`}>
          {loadingBlogs ? (
            <div style={S.empty}>Loading blogs…</div>
          ) : blogs.length === 0 ? (
            <div style={S.empty}>No blogs published yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {blogs.map((b) => (
                <div key={b.id} style={S.blogCard}>
                  {b.image && <img src={b.image} alt={b.title} style={S.blogThumb} />}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={S.blogTitle}>{b.title}</div>
                    <div style={S.blogMeta}>
                      {b.author && <span>✍️ {b.author}</span>}
                      {b.date   && <span>📅 {b.date}</span>}
                      <span style={S.slugPill}>/{b.slug}</span>
                    </div>
                    {(b.sections || []).length > 0 && (
                      <div style={S.sectionCount}>{b.sections.length} section{b.sections.length !== 1 ? "s" : ""}</div>
                    )}
                  </div>
                  <button style={S.delBtn}
                    onClick={() => setDeleteModal({ open: true, id: b.id, title: b.title })}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {deleteModal.open && (
        <Modal
          title="Delete Blog?"
          body={<>Delete <strong>"{deleteModal.title}"</strong>?<br />This cannot be undone.</>}
          onCancel={() => setDeleteModal({ open: false, id: null, title: "" })}
          onConfirm={confirmDeleteBlog}
          confirmLabel="Yes"
          cancelLabel="No"
        />
      )}
      {toast && <Toast msg={toast} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   PLACEHOLDER
═══════════════════════════════════════════════════════════ */
function PlaceholderSection({ icon, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 400, color: "#bbb", gap: 12 }}>
      <span style={{ fontSize: 48 }}>{icon}</span>
      <span style={{ fontSize: 15 }}>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SHARED SMALL COMPONENTS
═══════════════════════════════════════════════════════════ */
function Card({ title, children }) {
  return (
    <div style={S.card}>
      <div style={S.cardHeader}><span style={S.cardTitle}>{title}</span></div>
      <div style={S.cardBody}>{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={S.fieldLabel}>{label}</label>
      {children}
    </div>
  );
}

function StatCard({ label, value, sub, color }) {
  return (
    <div style={S.statCard}>
      <div style={S.statLabel}>{label}</div>
      <div style={{ ...S.statValue, color }}>{value}</div>
      <div style={S.statSub}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0 }} />
        {sub}
      </div>
    </div>
  );
}

function ErrorBar({ msg }) { return <div style={S.errBar}>{msg}</div>; }
function Toast({ msg }) { return <div style={S.toast}>{msg}</div>; }

function Modal({ title, body, onCancel, onConfirm, confirmLabel, cancelLabel = "Cancel" }) {
  return (
    <div style={S.modalBg} onClick={onCancel}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalIcon}>
          <svg width="22" height="22" fill="none" stroke="#CC1B1B" strokeWidth="1.8" viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </div>
        <div style={S.modalTitle}>{title}</div>
        <div style={S.modalSub}>{body}</div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={S.btnCancel} onClick={onCancel}>{cancelLabel}</button>
          <button style={S.btnDel}    onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════════ */
const S = {
  root:    { display: "flex", minHeight: "100vh", background: "#f7f4ef", fontFamily: "'Outfit', 'Segoe UI', sans-serif" },
  main:    { flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "auto" },
  content: { padding: "20px 24px", flex: 1 },

  sidebar: {
    width: 240, background: "#CC1B1B", display: "flex", flexDirection: "column",
    flexShrink: 0, position: "sticky", top: 0, height: "100vh", overflowY: "auto",
  },

  sbTop: {
    display: "flex", alignItems: "center", gap: 12, padding: "22px 18px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },
  sbLogoBox: {
    width: 40, height: 40, background: "#ffbe00", borderRadius: 10,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: "#CC1B1B", flexShrink: 0,
  },
  sbBrand: { fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.55)", lineHeight: 1 },
  sbTitle: { fontSize: 14, fontWeight: 600, color: "#fff", marginTop: 2 },
  sbDivider: { height: 3, background: "linear-gradient(90deg,#ffbe00 0%,rgba(255,190,0,0.2) 100%)", margin: "0 0 4px" },
  sbNav: { padding: "14px 12px", flex: 1 },
  navSection: {
    display: "block", fontSize: 10, fontWeight: 700, letterSpacing: 2,
    textTransform: "uppercase", color: "rgba(255,255,255,0.45)", padding: "0 8px", marginBottom: 8,
  },
  navItem: (active) => ({
    display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px",
    borderRadius: 10, background: active ? "rgba(255,255,255,0.18)" : "transparent",
    border: active ? "1px solid rgba(255,255,255,0.22)" : "1px solid transparent",
    color: active ? "#fff" : "rgba(255,255,255,0.78)", fontSize: 13.5,
    fontWeight: active ? 600 : 400, cursor: "pointer", marginBottom: 3,
    textAlign: "left", transition: "background 0.15s", position: "relative",
  }),
  navIcon:  (active) => ({ color: active ? "#ffbe00" : "rgba(255,255,255,0.7)", flexShrink: 0 }),
  navLabel: (active) => ({ flex: 1, color: active ? "#fff" : "rgba(255,255,255,0.82)" }),
  navDot: { width: 6, height: 6, borderRadius: "50%", background: "#ffbe00", flexShrink: 0 },
  sbFoot: { padding: "14px 12px 18px", borderTop: "1px solid rgba(255,255,255,0.12)" },
  sbFootInner: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 },
  adminAvatar: {
    width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.18)",
    border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: 15, fontWeight: 600, color: "#fff",
  },
  adminInfo: {},
  adminName: { fontSize: 13, fontWeight: 500, color: "#fff" },
  adminRole: { fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5 },
  logoutBtn: {
    display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.65)",
    fontSize: 13, cursor: "pointer", padding: "7px 10px", borderRadius: 8,
    background: "none", border: "none", fontFamily: "inherit", width: "100%",
  },

  topbar: {
    background: "#fff", borderBottom: "0.5px solid #e8e0d0", padding: "14px 24px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    position: "sticky", top: 0, zIndex: 10, boxShadow: "0 1px 0 #f0e8d5",
  },
  tbTitle: { fontSize: 16, fontWeight: 600, color: "#1a0e00" },
  tbSub:   { fontSize: 12, color: "#a08060", marginTop: 2 },
  tbRight: { display: "flex", alignItems: "center", gap: 10 },
  tbBadge: { fontSize: 11, background: "#fff5f0", color: "#CC1B1B", border: "0.5px solid #fecaca", borderRadius: 6, padding: "4px 12px", fontWeight: 500 },

  statsRow: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 },
  statCard: { background: "#fff", border: "0.5px solid #e8e0d0", borderRadius: 12, padding: "14px 18px", borderLeft: "3px solid #ffbe00" },
  statLabel: { fontSize: 11, color: "#a08060", marginBottom: 5, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.5 },
  statValue: { fontSize: 22, fontWeight: 700, lineHeight: 1 },
  statSub:   { fontSize: 11, color: "#a08060", marginTop: 4, display: "flex", alignItems: "center", gap: 5 },

  layout: { display: "grid", gridTemplateColumns: "400px 1fr", gap: 18, alignItems: "start" },

  card:       { background: "#fff", border: "0.5px solid #e8e0d0", borderRadius: 12, overflow: "hidden", marginBottom: 18 },
  cardHeader: { padding: "14px 20px", borderBottom: "0.5px solid #f0e8d5", background: "#fffdf8" },
  cardTitle:  { fontSize: 13, fontWeight: 600, color: "#1a0e00" },
  cardBody:   { padding: 20 },

  fieldLabel: { display: "block", fontSize: 10, fontWeight: 600, color: "#a08060", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 5 },
  fieldRow:   { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 0 },
  input: {
    width: "100%", padding: "8px 11px", fontSize: 13,
    border: "1px solid #e0d8cc", borderRadius: 8,
    background: "#fafaf8", color: "#1a0e00",
    outline: "none", fontFamily: "inherit",
    boxSizing: "border-box", transition: "border-color 0.15s",
  },
  uploadZone: { border: "1.5px dashed #e0d8cc", borderRadius: 10, padding: "20px 12px", textAlign: "center", cursor: "pointer", background: "#fafaf8" },
  previewImg: { width: "100%", height: 130, objectFit: "cover", borderRadius: 8, border: "0.5px solid #e8e0d0", display: "block" },
  removeImgBtn: { position: "absolute", top: 6, right: 6, background: "rgba(0,0,0,0.55)", color: "#fff", border: "none", borderRadius: "50%", width: 24, height: 24, cursor: "pointer", fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center" },
  iconSel: { padding: "6px 7px", border: "1px solid #e0d8cc", borderRadius: 8, background: "#fafaf8", color: "#1a0e00", fontSize: 14, width: 60, outline: "none", cursor: "pointer" },
  addBtn: { fontSize: 12, color: "#CC1B1B", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, marginTop: 2, background: "none", border: "none", padding: 0, fontFamily: "inherit", fontWeight: 500 },
  removeBtn: { fontSize: 18, color: "#bbb", cursor: "pointer", background: "none", border: "none", padding: "0 4px", lineHeight: 1, flexShrink: 0 },
  submitBtn: (loading) => ({
    width: "100%", padding: "10px", marginTop: 6,
    background: loading ? "#e88" : "#CC1B1B",
    color: "#fff", border: "none", borderRadius: 8,
    fontSize: 13, fontWeight: 600, cursor: loading ? "not-allowed" : "pointer",
    fontFamily: "inherit", letterSpacing: 0.5,
    boxShadow: loading ? "none" : "0 3px 12px rgba(204,27,27,0.25)",
  }),
  errBar: { background: "#fff5f5", border: "1px solid #fecaca", borderLeft: "3px solid #CC1B1B", color: "#CC1B1B", fontSize: 12, padding: "9px 14px", borderRadius: 8, marginBottom: 14 },

  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: { textAlign: "left", fontSize: 10, fontWeight: 600, color: "#a08060", textTransform: "uppercase", letterSpacing: 0.5, padding: "9px 14px", borderBottom: "0.5px solid #e8e0d0", background: "#fffdf8" },
  td: { padding: "11px 14px", borderBottom: "0.5px solid #f0ebe0", color: "#1a0e00", verticalAlign: "middle" },
  thumb:   { width: 40, height: 40, borderRadius: 8, objectFit: "cover", border: "0.5px solid #e8e0d0", flexShrink: 0 },
  thumbPH: { width: 40, height: 40, borderRadius: 8, background: "#f5f0e8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 },
  badge: { fontSize: 11, background: "#fff5f0", color: "#CC1B1B", border: "0.5px solid #fecaca", borderRadius: 6, padding: "2px 8px", display: "inline-block" },
  pill: { display: "inline-flex", alignItems: "center", gap: 3, fontSize: 11, color: "#7a5a38", background: "#f5f0e8", border: "0.5px solid #e8e0d0", borderRadius: 20, padding: "2px 7px", marginRight: 3, marginBottom: 2 },
  delBtn: { fontSize: 12, color: "#888", cursor: "pointer", padding: "4px 10px", border: "0.5px solid #d1d1d1", borderRadius: 6, background: "transparent", fontFamily: "inherit" },
  empty: { padding: "40px 20px", textAlign: "center", color: "#bbb", fontSize: 13 },

  /* Top University card row in list */
  uniCardRow: {
    display: "flex", gap: 12, alignItems: "flex-start",
    padding: "14px 0", borderBottom: "0.5px solid #f0ebe0",
  },
  uniCardImg: {
    width: 80, height: 60, objectFit: "cover", borderRadius: 8,
    border: "0.5px solid #e8e0d0", flexShrink: 0,
  },
  uniCardImgPH: {
    width: 80, height: 60, borderRadius: 8, background: "#f5f0e8",
    flexShrink: 0, display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: 26,
  },

  blogCard: { display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: "0.5px solid #f0ebe0" },
  blogThumb: { width: 72, height: 52, objectFit: "cover", borderRadius: 8, border: "0.5px solid #e8e0d0", flexShrink: 0 },
  blogTitle: { fontSize: 13, fontWeight: 600, color: "#1a0e00", marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  blogMeta: { display: "flex", flexWrap: "wrap", gap: 8, fontSize: 11, color: "#a08060", marginBottom: 4 },
  slugPill: { background: "#f5f0e8", color: "#7a5a38", borderRadius: 4, padding: "1px 6px", fontFamily: "monospace", fontSize: 11 },
  sectionCount: { fontSize: 11, color: "#bbb" },

  modalBg:    { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 },
  modal:      { background: "#fff", border: "0.5px solid #e8e0d0", borderRadius: 14, padding: "28px 28px 22px", width: 340 },
  modalIcon:  { width: 44, height: 44, background: "#fff5f0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" },
  modalTitle: { fontSize: 15, fontWeight: 600, color: "#1a0e00", textAlign: "center", marginBottom: 6 },
  modalSub:   { fontSize: 13, color: "#7a5a38", textAlign: "center", lineHeight: 1.6, marginBottom: 22 },
  btnCancel:  { flex: 1, padding: 9, border: "0.5px solid #d1d1d1", borderRadius: 8, background: "transparent", fontSize: 13, cursor: "pointer", fontFamily: "inherit" },
  btnDel:     { flex: 1, padding: 9, border: "none", borderRadius: 8, background: "#CC1B1B", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },

  toast: { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "#1a1208", color: "#fff", fontSize: 12, padding: "9px 20px", borderRadius: 8, zIndex: 200, pointerEvents: "none", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" },
};
