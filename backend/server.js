import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import pool from "./db.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

/* =========================
   CRASH HANDLING
========================= */
process.on("uncaughtException", (err) => {
  console.error("❌ UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ UNHANDLED PROMISE:", err);
});

/* =========================
   PATH SETUP
========================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   APP INIT
========================= */
const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   MIDDLEWARE
========================= */
app.use(cors({ origin: "*" }));
app.use(express.json());

/* =========================
   DB CONNECTION CHECK
========================= */
pool
  .query("SELECT 1")
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

/* =========================
   CREATE TABLES ON STARTUP
========================= */
async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS universities (
        id             SERIAL PRIMARY KEY,
        name           VARCHAR(255) NOT NULL,
        short_name     VARCHAR(255),
        fee            VARCHAR(255),
        image          TEXT,
        highlights     TEXT DEFAULT '[]',
        slug           TEXT,
        location       TEXT,
        founded        TEXT,
        duration       TEXT DEFAULT '6 Years',
        description    TEXT,
        stats          JSONB,
        is_active      BOOLEAN DEFAULT true,
        display_order  INTEGER,
        created_at     TIMESTAMP DEFAULT NOW()
      );
    `);

    // ✅ Add missing columns for existing databases
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS slug TEXT`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS location TEXT`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS founded TEXT`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS duration TEXT DEFAULT '6 Years'`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS description TEXT`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS stats JSONB`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true`);
    await pool.query(`ALTER TABLE universities ADD COLUMN IF NOT EXISTS display_order INTEGER`);

    console.log("✅ Universities table ready");
    // Reviews table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id         SERIAL PRIMARY KEY,
        name       VARCHAR(255) NOT NULL,
        city       VARCHAR(255) NOT NULL,
        state      VARCHAR(255) NOT NULL,
        university VARCHAR(255),
        rating     INTEGER DEFAULT 5,
        review     TEXT NOT NULL,
        is_active  BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Reviews table ready");

    // Blogs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id         SERIAL PRIMARY KEY,
        title      VARCHAR(255) NOT NULL,
        slug       VARCHAR(255) UNIQUE NOT NULL,
        author     VARCHAR(255),
        date       VARCHAR(100),
        image      TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Blogs table ready");

    // Blog sections table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_sections (
        id      SERIAL PRIMARY KEY,
        blog_id INTEGER REFERENCES blogs(id) ON DELETE CASCADE,
        heading VARCHAR(255),
        content TEXT
      );
    `);
    console.log("✅ Blog sections table ready");

    // ✅ NEW — Top Universities standalone table (no FK to universities)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS top_universities (
        id              SERIAL PRIMARY KEY,
        name            VARCHAR(255)  NOT NULL,
        location        VARCHAR(100),
        est_year        INTEGER,
        student_count   VARCHAR(100),
        fee             VARCHAR(100)  NOT NULL,
        slug            VARCHAR(255),
        image           TEXT,
        badge           VARCHAR(100),
        rank            INTEGER,
        is_nmc_approved BOOLEAN       DEFAULT TRUE,
        created_at      TIMESTAMP     DEFAULT NOW()
      );
    `);
    console.log("✅ Top Universities table ready");

  } catch (err) {
    console.error("❌ Create table error:", err.message);
  }
}
createTables();

/* =========================
   STATIC FILES
========================= */
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir));

/* =========================
   MULTER SETUP
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `uni_${Date.now()}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Invalid file type"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* =========================
   HELPERS
========================= */
function parseHighlights(highlights) {
  try {
    return Array.isArray(highlights) ? highlights : JSON.parse(highlights || "[]");
  } catch {
    return [];
  }
}

function buildImageUrl(req, filename) {
  if (!filename) return null;
  return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
}

function normalizeImageUrl(req, image) {
  if (!image || typeof image !== "string") return null;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const normalized = image.startsWith("/") ? image : `/${image}`;
  return `${req.protocol}://${req.get("host")}${normalized}`;
}

function createEmailTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
}

/* =========================
   AUTH MIDDLEWARE
========================= */
function verifyAdmin(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token provided" });
  if (token !== "admin-token") return res.status(403).json({ error: "Invalid token" });
  next();
}

/* =========================
   ROUTES
========================= */

app.get("/", (req, res) => res.send("✅ API is running..."));

/* ===== IMAGE UPLOAD ===== */
app.post("/upload-image", verifyAdmin, upload.single("image"), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No image uploaded" });
    res.json({
      success: true,
      imageUrl: buildImageUrl(req, req.file.filename),
      filename: req.file.filename,
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: "Upload failed" });
  }
});

/* ===== UNIVERSITIES ===== */
app.get("/universities", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM universities ORDER BY id DESC"
    );
    const data = result.rows.map((row) => ({
      ...row,
      highlights: parseHighlights(row.highlights),
      image: normalizeImageUrl(req, row.image),
    }));
    res.json(data);
  } catch (err) {
    console.error("GET UNIVERSITIES ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/universities", verifyAdmin, async (req, res) => {
  try {
    const { name, shortName, fee, image, highlights } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const result = await pool.query(
      `INSERT INTO universities (name, short_name, fee, image, highlights)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        name,
        shortName || null,
        fee || null,
        image || null,
        JSON.stringify(highlights || []),
      ]
    );
    res.status(201).json({
      ...result.rows[0],
      highlights: parseHighlights(result.rows[0].highlights),
    });
  } catch (err) {
    console.error("POST UNIVERSITY ERROR:", err);
    res.status(500).json({ error: "Insert failed" });
  }
});

app.put("/universities/:id", verifyAdmin, async (req, res) => {
  try {
    const { name, shortName, fee, image, highlights } = req.body;
    const result = await pool.query(
      `UPDATE universities SET name=$1, short_name=$2, fee=$3, image=$4, highlights=$5
       WHERE id=$6 RETURNING *`,
      [name, shortName, fee, image, JSON.stringify(highlights || []), req.params.id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: "Not found" });
    res.json({
      ...result.rows[0],
      highlights: parseHighlights(result.rows[0].highlights),
    });
  } catch (err) {
    console.error("UPDATE UNIVERSITY ERROR:", err);
    res.status(500).json({ error: "Update failed" });
  }
});

app.delete("/universities/:id", verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM universities WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: "Not found" });
    const image = result.rows[0].image;
    if (image) {
      const filePath = path.join(uploadsDir, path.basename(image));
      try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      } catch {}
    }
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE UNIVERSITY ERROR:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

/* ===== UNIVERSITIES BY SLUG (Dynamic Pages) ===== */

// GET all universities for navbar dropdown
app.get("/api/universities/navbar", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, slug, display_order 
      FROM universities 
      WHERE is_active = true 
      ORDER BY display_order ASC NULLS LAST
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("GET NAVBAR UNIS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET single university by slug (for dynamic page)
app.get("/api/universities/slug/:slug", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM universities WHERE slug = $1 AND is_active = true",
      [req.params.slug]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "University not found" });
    const row = result.rows[0];
    res.json({
      ...row,
      highlights: parseHighlights(row.highlights),
      stats: row.stats || [],
      image: normalizeImageUrl(req, row.image),
    });
  } catch (err) {
    console.error("GET UNI BY SLUG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST — add new university (admin)
app.post("/api/universities/add", verifyAdmin, async (req, res) => {
  try {
    const {
      name, short_name, fee, image, slug, location,
      founded, duration, description, highlights,
      stats, display_order
    } = req.body;

    if (!name || !slug)
      return res.status(400).json({ error: "Name and slug are required" });

    const result = await pool.query(
      `INSERT INTO universities 
        (name, short_name, fee, image, slug, location, founded, duration, 
         description, highlights, stats, display_order, is_active)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,true) RETURNING *`,
      [
        name, short_name || null, fee || null, image || null,
        slug, location || null, founded || null,
        duration || "6 Years", description || null,
        JSON.stringify(highlights || []),
        JSON.stringify(stats || []),
        display_order || null,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("ADD UNIVERSITY ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// PUT — edit university (admin)
app.put("/api/universities/edit/:id", verifyAdmin, async (req, res) => {
  try {
    const {
      name, short_name, fee, image, slug, location,
      founded, duration, description, highlights,
      stats, display_order, is_active
    } = req.body;

    const result = await pool.query(
      `UPDATE universities SET
        name=$1, short_name=$2, fee=$3, image=$4, slug=$5,
        location=$6, founded=$7, duration=$8, description=$9,
        highlights=$10, stats=$11, display_order=$12, is_active=$13
       WHERE id=$14 RETURNING *`,
      [
        name, short_name, fee, image, slug, location,
        founded, duration, description,
        JSON.stringify(highlights || []),
        JSON.stringify(stats || []),
        display_order, is_active !== false,
        req.params.id,
      ]
    );
    if (result.rowCount === 0)
      return res.status(404).json({ error: "University not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error("EDIT UNIVERSITY ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

/* ===== LOGIN ===== */
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USERNAME || "admin";
  const adminPass = process.env.ADMIN_PASSWORD || "admin123";
  if (username === adminUser && password === adminPass) {
    return res.json({ token: "admin-token" });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

/* ===== EMAIL ===== */
app.post("/send-email", async (req, res) => {
  const { fullName, email, phone, message } = req.body;
  if (!fullName || !email || !phone)
    return res.status(400).json({ message: "Missing required fields" });
  const transporter = createEmailTransporter();
  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `"Vietnam MBBS" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "ramyashan.1010@gmail.com",
      subject: `New Enquiry from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("SEND EMAIL ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/enquiry", async (req, res) => {
  const { fullName, email, phone, state } = req.body;
  if (!fullName || !phone)
    return res.status(400).json({ message: "Missing required fields (fullName and phone are required)" });
  try {
    const transporter = createEmailTransporter();
    await transporter.verify();

    const mailOptions = {
      from: `"Vietnam MBBS" <${process.env.EMAIL_USER}>`,
      to: "ramyashan.1010@gmail.com",
      subject: "New MBBS Enquiry Form Submission",
      html: `<h3>New Enquiry</h3>
             <p><b>Name:</b> ${fullName}</p>
             <p><b>Email:</b> ${email || "Not provided"}</p>
             <p><b>Phone:</b> ${phone}</p>
             <p><b>State:</b> ${state || "Not provided"}</p>`,
    };

    if (email && email.trim() !== "") {
      mailOptions.replyTo = email;
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("ENQUIRY EMAIL ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});

/* ===== BLOGS ===== */
app.post("/api/blogs", verifyAdmin, async (req, res) => {
  const { title, slug, author, date, image, sections } = req.body;
  try {
    const blogResult = await pool.query(
      "INSERT INTO blogs (title, slug, author, date, image) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [title, slug, author, date, image]
    );
    const blog = blogResult.rows[0];
    for (let sec of sections) {
      await pool.query(
        "INSERT INTO blog_sections (blog_id, heading, content) VALUES ($1,$2,$3)",
        [blog.id, sec.heading, sec.content]
      );
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT b.*,
        COALESCE(json_agg(json_build_object('heading', s.heading, 'content', s.content))
          FILTER (WHERE s.id IS NOT NULL), '[]') AS sections
      FROM blogs b
      LEFT JOIN blog_sections s ON b.id = s.blog_id
      GROUP BY b.id ORDER BY b.id DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("BLOG FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const blogRes = await pool.query("SELECT * FROM blogs WHERE slug=$1", [
      req.params.slug,
    ]);
    if (blogRes.rows.length === 0)
      return res.status(404).json({ error: "Blog not found" });
    const blog = blogRes.rows[0];
    const sectionsRes = await pool.query(
      "SELECT * FROM blog_sections WHERE blog_id=$1",
      [blog.id]
    );
    blog.sections = sectionsRes.rows;
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/blogs/:id", verifyAdmin, async (req, res) => {
  try {
    await pool.query("DELETE FROM blog_sections WHERE blog_id=$1", [
      req.params.id,
    ]);
    const result = await pool.query(
      "DELETE FROM blogs WHERE id=$1 RETURNING *",
      [req.params.id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Blog not found" });
    res.json({ success: true, deleted: result.rows[0] });
  } catch (err) {
    console.error("BLOG DELETE ERROR:", err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

/* ===== REVIEWS ===== */
app.get("/api/reviews", async (req, res) => {
  try {
    const { state } = req.query;
    let query = "SELECT * FROM reviews WHERE is_active = true";
    const params = [];
    if (state) {
      params.push(state);
      query += ` AND LOWER(state) = LOWER($${params.length})`;
    }
    query += " ORDER BY created_at DESC";
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error("GET REVIEWS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// ✅ /admin MUST be BEFORE /:id
app.get("/api/reviews/admin", verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM reviews ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("GET REVIEWS ADMIN ERROR:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.post("/api/reviews", verifyAdmin, async (req, res) => {
  try {
    const { name, city, state, university, rating, review, is_active } = req.body;
    if (!name || !city || !state || !review) {
      return res
        .status(400)
        .json({ error: "name, city, state, and review are required" });
    }
    const result = await pool.query(
      `INSERT INTO reviews (name, city, state, university, rating, review, is_active)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, city, state, university || "", rating || 5, review, is_active !== false]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST REVIEW ERROR:", err);
    res.status(500).json({ error: "Failed to add review" });
  }
});

app.patch("/api/reviews/:id/toggle", verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE reviews SET is_active = NOT is_active WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Review not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error("TOGGLE REVIEW ERROR:", err);
    res.status(500).json({ error: "Failed to toggle review" });
  }
});

app.delete("/api/reviews/:id", verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Review not found" });
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE REVIEW ERROR:", err);
    res.status(500).json({ error: "Failed to delete review" });
  }
});

/* ===================================================
   ✅ TOP UNIVERSITIES — NEW STANDALONE TABLE
   Table: top_universities (no FK to universities)
   Columns: id, name, location, est_year, student_count,
            fee, slug, image, badge, rank, is_nmc_approved
=================================================== */

// ✅ /public MUST be BEFORE /:id
app.get("/api/top-universities/public", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, location, est_year, student_count,
             fee, slug, image, badge, rank, is_nmc_approved
      FROM   top_universities
      ORDER  BY rank ASC NULLS LAST, created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("GET PUBLIC TOP UNIS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ /admin MUST be BEFORE /:id
app.get("/api/top-universities/admin", verifyAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM   top_universities
      ORDER  BY rank ASC NULLS LAST, created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("GET TOP UNIS ADMIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST — add standalone university card
app.post("/api/top-universities", verifyAdmin, async (req, res) => {
  try {
    const {
      name,
      location,
      est_year,
      student_count,
      fee,
      slug,
      image,
      badge,
      rank,
      is_nmc_approved,
    } = req.body;

    // ✅ Only name + fee required — NO university_id check
    if (!name || !String(name).trim()) {
      return res.status(400).json({ error: "University name is required" });
    }
    if (!fee || !String(fee).trim()) {
      return res.status(400).json({ error: "Fee is required" });
    }

    const result = await pool.query(
      `INSERT INTO top_universities
         (name, location, est_year, student_count, fee, slug, image, badge, rank, is_nmc_approved)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [
        String(name).trim(),
        location      ? String(location).trim()     : null,
        est_year      ? Number(est_year)             : null,
        student_count ? String(student_count).trim() : null,
        String(fee).trim(),
        slug          ? String(slug).trim()          : null,
        image         ? String(image).trim()         : null,
        badge         ? String(badge).trim()         : null,
        rank          ? Number(rank)                 : null,
        is_nmc_approved !== undefined ? Boolean(is_nmc_approved) : true,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST TOP UNI ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE — remove a university card
app.delete("/api/top-universities/:id", verifyAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }
    const result = await pool.query(
      "DELETE FROM top_universities WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0)
      return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE TOP UNI ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ error: err.message || "Server error" });
});

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
