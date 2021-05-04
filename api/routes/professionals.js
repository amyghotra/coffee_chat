const router = require("express").Router();
const pool = require("../db");

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
    return res.json(specificPro.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json("proid Server Error");
  }
});

router.get("/all", async (_, res) => {
  try {
    const results = {};

    const allPros = await pool.query(
      `
        SELECT u.id userid, name, social, position, company FROM users u 
        JOIN worksat w on u.id = w.pro_id 
        JOIN companies c on w.company_id = c.id
        WHERE 
          u.id = (SELECT id FROM PROFESSIONALS);
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

module.exports = router;
