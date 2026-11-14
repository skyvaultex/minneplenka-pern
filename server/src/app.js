import express from 'express';
import { pool } from './db/pool.js'

const app = express();

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Running loud and clear'
  })
});

app.get('/api/projects', async (req, res) => {
  try {
    const query = await pool.query('SELECT * FROM test_posts');
    res.status(200).json({
      success: true,
      data: query.rows
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error
    })
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
})