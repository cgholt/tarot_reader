import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DB,
});

export async function getAllCards() {
  const res = await pool.query("SELECT * FROM tarot.cards ORDER BY id ASC");
  return res.rows;
}

export async function getCardBySlug(slug: string) {
  const res = await pool.query("SELECT * FROM cards WHERE slug = $1", [slug]);
  return res.rows[0];
}
