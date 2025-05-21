import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "tarotdb",
});

export async function getAllCards() {
  const res = await pool.query("SELECT * FROM tarot.cards ORDER BY id ASC");
  return res.rows;
}

export async function getCardBySlug(slug: string) {
  const res = await pool.query("SELECT * FROM cards WHERE slug = $1", [slug]);
  return res.rows[0];
}
