const router = require("express").Router();
const pool = require("../db");

router.get("/all", async (_, res) => {
  try {
    const results = {};

    const allPros = await pool.query(
      `
        SELECT u.id userid, name, social, position, company FROM users u 
        JOIN worksat w on u.id = w.pro_id 
        JOIN companies c on w.company_id = c.id
        WHERE 
          u.id in (SELECT id FROM PROFESSIONALS);
      `
    );

    results.data = allPros.rows;

    console.log(allPros.rows);
    return res.json(results);
  } catch (err) {
    console.log(err.message);
    return res.status(401).json("professional error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const results = {};
    const searchId = req.params.id;

    const specificPro = await pool.query(
      `
        SELECT u.id userid, name, social, position, company FROM users u 
        JOIN worksat w on u.id = w.pro_id 
        JOIN companies c on w.company_id = c.id
        WHERE 
          u.id = (SELECT id FROM PROFESSIONALS WHERE id = $1); 
      `,
      [searchId]
    );

    results.data = specificPro.rows;

    return res.json(results);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json("proid Server Error");
  }
});

module.exports = router;
