const router = require("express").Router();
const pool = require("../db");
const auth = require("../middleware/authorization");

router.get("/", auth, async (req, res) => {
  try {
    const { company, profession } = req.body;

    if (!company && !profession) {
      const allPros = await pool.query("SELECT * FROM professionals");
      return res.json(allPros.rows);
    } else if (!company) {
      const specificProfession = await pool.query(
        "SELECT * FROM professionals WHERE pro_id in (SELECT pro_id FROM worksAt where position = $1);",
        [profession]
      );
      return res.json(specificProfession.rows);
    } else if (!profession) {
      const specificCompany = await pool.query(
        "SELECT * FROM professionals WHERE pro_id in (SELECT pro_id FROM worksAt WHERE company_id in (SELECT id FROM companies WHERE name = $1));",
        [company]
      );

      return res.json(specificCompany.rows);
    } else {
      return res.json("error");
    }

    return res.json("hello");
  } catch (err) {
    console.error(err.message);
    return res.status(401).json("Professionals| Error");
  }
});

module.exports = router;
