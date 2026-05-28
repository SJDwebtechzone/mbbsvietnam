// ═══════════════════════════════════════════════════════════
// ADD THIS TO YOUR EXISTING backend/server.js (or index.js)
// ═══════════════════════════════════════════════════════════

// ── 1. CREATE REVIEWS TABLE (add this near your other CREATE TABLE statements) ──
/*
  Run this SQL once in your database:

  CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    university VARCHAR(255),
    rating INTEGER DEFAULT 5,
    review TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
  );
*/

// ── 2. ADD THESE ROUTES to your Express app ──

// GET all active reviews (public)
app.get("/api/reviews", async (req, res) => {
  try {
    const state = req.query.state; // optional filter: ?state=goa
    let query = "SELECT * FROM reviews WHERE is_active = true";
    const params = [];
    if (state) {
      params.push(state.toLowerCase());
      query += ` AND LOWER(state) = $${params.length}`;
    }
    query += " ORDER BY created_at DESC";
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// GET all reviews (admin - includes inactive)
app.get("/api/reviews/admin", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM reviews ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// POST create review (admin only)
app.post("/api/reviews", authMiddleware, async (req, res) => {
  try {
    const { name, city, state, university, rating, review, is_active } = req.body;
    if (!name || !city || !state || !review) {
      return res.status(400).json({ error: "name, city, state, review are required" });
    }
    const result = await pool.query(
      `INSERT INTO reviews (name, city, state, university, rating, review, is_active)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, city, state, university || "", rating || 5, review, is_active !== false]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add review" });
  }
});

// PATCH toggle active status (admin only)
app.patch("/api/reviews/:id/toggle", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE reviews SET is_active = NOT is_active WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Not found" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to toggle review" });
  }
});

// DELETE review (admin only)
app.delete("/api/reviews/:id", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM reviews WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete review" });
  }
});


// routes/reviews.js (public GET)
router.get('/', async (req, res) => {
  try {
    const { state } = req.query;
    let query = 'SELECT * FROM reviews WHERE is_active = true';
    const params = [];

    if (state) {
      params.push(state);
      query += ` AND state = $${params.length}`;
    }

    query += ' ORDER BY created_at DESC';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── 3. SQL TO CREATE TABLE (copy-paste into your DB) ──
const CREATE_REVIEWS_TABLE = `
  CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    university VARCHAR(255),
    rating INTEGER DEFAULT 5,
    review TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
  );
`;
// If using pool.query on startup: pool.query(CREATE_REVIEWS_TABLE);
