import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const result = await pool.query(
  `UPDATE universities SET name=$1 WHERE id=$2 RETURNING *`,
  ['University of Health & Sciences', 15]
);

console.log("✅ Updated:", result.rows[0]);
await pool.end();