const pool = require("../db");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const topCompanies = await pool.query(
      "SELECT * FROM companies ORDER BY totalcompanyhours desc;"
    );
    res.send({
      data: topCompanies.rows,
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
