/* ═══════════════════════════════════════════════════════════════════════
   top_universities router  —  standalone card (no FK to universities table)
   Mount in server.js:
     app.use('/api/top-universities', require('./routes/topUniversitiesRouter'));
═══════════════════════════════════════════════════════════════════════ */

const express        = require('express');
const router         = express.Router();
const pool           = require('../db');             // ← adjust path to your pg pool
const authMiddleware = require('../authMiddleware'); // ← adjust path to your JWT middleware

/* ─────────────────────────────────────────────────────────────────────
   GET /api/top-universities/admin
   Protected — returns all rows for admin dashboard
───────────────────────────────────────────────────────────────────── */
router.get('/admin', authMiddleware, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT *
       FROM   top_universities
       ORDER  BY rank ASC NULLS LAST, created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error('[top_universities] GET /admin error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

/* ─────────────────────────────────────────────────────────────────────
   GET /api/top-universities/public
   Public — returns all rows for AdmissionGuide page
───────────────────────────────────────────────────────────────────── */
router.get('/public', async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, name, location, est_year, student_count,
              fee, slug, image, badge, rank, is_nmc_approved
       FROM   top_universities
       ORDER  BY rank ASC NULLS LAST, created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error('[top_universities] GET /public error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

/* ─────────────────────────────────────────────────────────────────────
   POST /api/top-universities
   Protected — add a new university card from admin dashboard
───────────────────────────────────────────────────────────────────── */
router.post('/', authMiddleware, async (req, res) => {
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

  // Validate required fields
  if (!name || !String(name).trim()) {
    return res.status(400).json({ error: 'University name is required' });
  }
  if (!fee || !String(fee).trim()) {
    return res.status(400).json({ error: 'Fee is required' });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO top_universities
         (name, location, est_year, student_count, fee, slug, image, badge, rank, is_nmc_approved)
       VALUES
         ($1,   $2,       $3,       $4,            $5,  $6,   $7,    $8,    $9,   $10)
       RETURNING *`,
      [
        String(name).trim(),
        location      ? String(location).trim()      : null,
        est_year      ? Number(est_year)              : null,
        student_count ? String(student_count).trim()  : null,
        String(fee).trim(),
        slug          ? String(slug).trim()           : null,
        image         ? String(image).trim()          : null,
        badge         ? String(badge).trim()          : null,
        rank          ? Number(rank)                  : null,
        is_nmc_approved !== undefined ? Boolean(is_nmc_approved) : true,
      ]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('[top_universities] POST error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

/* ─────────────────────────────────────────────────────────────────────
   DELETE /api/top-universities/:id
   Protected — remove a university card
───────────────────────────────────────────────────────────────────── */
router.delete('/:id', authMiddleware, async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  try {
    const { rowCount } = await pool.query(
      `DELETE FROM top_universities WHERE id = $1`,
      [id]
    );
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('[top_universities] DELETE error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
