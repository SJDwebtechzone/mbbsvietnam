import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  

  ssl: {
    rejectUnauthorized: false
  }
});

console.log("DATABASE_URL:", process.env.DATABASE_URL);



// test connection
(async () => {
  try {
    const client = await pool.connect();
    console.log("✅ PostgreSQL Connected");
    client.release();
  } catch (err) {
    console.error("❌ DB Connection FAILED:");
    console.error(err);
    process.exit(1);
  }
})();

export default pool;