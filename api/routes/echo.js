const router = require('express').Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const contributors = await pool.query('SELECT * FROM contributors;');

    return res.json(contributors.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json('Server Error');
  }
});

module.exports = router;
