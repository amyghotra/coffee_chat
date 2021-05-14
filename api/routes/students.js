const express = require('express');

const pool = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allStudents = await pool.query('SELECT * FROM students;');
    // console.log(allStudents.rows);
    res.send({
      data: allStudents.rows,
    });
  } catch (err) {
    console.error(err.message);
  }
});

// router.post("/");

module.exports = router;
