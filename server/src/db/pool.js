import process from 'node:process'
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export const query = await pool.query('SELECT * FROM test_posts');
console.log(query);