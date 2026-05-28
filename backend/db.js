import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 15000,
  idleTimeoutMillis: 30000,
  max: 10,
});

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const connectWithRetry = async (retries = 5, delay = 3000) => {
  for (let i = 1; i <= retries; i++) {
    try {
      const client = await pool.connect();
      console.log("✅ PostgreSQL Connected");
      client.release();
      return;
    } catch (err) {
      console.error(`❌ DB Attempt ${i}/${retries} failed: ${err.message}`);
      if (i < retries) {
        console.log(`⏳ Retrying in ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("🚨 All DB connection attempts failed.");
      }
    }
  }
};

connectWithRetry();

export default pool;