import pool from '../config/database.mjs';

export async function getAllViajes() {
  const res = await pool.query('select * from viajes.viajes;');
  return res.rows;
}

export async function getViajeBySlug(slug) {
  const res = await pool.query('SELECT * FROM viajes.viajes WHERE slug = $1', [slug]);
  return res.rows[0];
}

export async function getThreeRandomViajes() {
  const res = await pool.query('SELECT * FROM viajes.viajes ORDER BY RANDOM() LIMIT 3;');
  return res.rows;
}