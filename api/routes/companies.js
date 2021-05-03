const pool = require("../db");
const authorization = require("../middleware/authorization");

const express = require("express");
const router = express.Router();

router.get("/", authorization, async (req, res) => {
  try {
    const topCompanies = await pool.query(
      "SELECT name company, totalhours FROM companies ORDER BY totalhours desc;"
    );
    res.send({
      data: topCompanies.rows,
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
