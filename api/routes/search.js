const router = require("express").Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    let company = null;
    let profession = null;
    if (!req.query.length) {
      company = req.query.company;
      profession = req.query.profession;
    }
    let results = {};
    if (!company && !profession) {
      // If company and profession were both left empty

      const all = await pool.query(
        `
          SELECT u.id pro_id, u.name, u.social, p.experience, w.position, c.company FROM users u 
          JOIN professionals p on p.id = u.id
          JOIN worksAt w on u.id = w.pro_id
          JOIN companies c on w.company_id = c.id
        `
      );

      results.data = all.rows;
      // console.log(results.data);
    } else if (!company) {
      // ONLY PROFESSION WAS ENTERED
      const onlyProfession = await pool.query(
        `
          SELECT u.id pro_id, u.name, u.social, p.experience, w.position, c.company FROM users u 
          JOIN professionals p on p.id = u.id
          JOIN worksAt w on u.id = w.pro_id
          JOIN companies c on w.company_id = c.id
          WHERE w.position = $1
        `,
        [profession]
      );
      results.data = onlyProfession.rows;
    } else if (!profession) {
      // ONLY COMPANY WAS ENTERED
      const onlyCompany = await pool.query(
        `
          SELECT u.id pro_id, u.name, u.social, p.experience, w.position, c.company FROM users u 
          JOIN professionals p on p.id = u.id
          JOIN worksAt w on u.id = w.pro_id
          JOIN companies c on w.company_id = c.id
          WHERE c.company = $1
        `,
        [company]
      );

      results.data = onlyCompany.rows;
    } else {
      // BOTH QUERIES WERE ENTERED
      const searchQuery = await pool.query(
        `
          SELECT u.id pro_id, u.name, u.social, p.experience, w.position, c.company FROM users u 
          JOIN professionals p on p.id = u.id
          JOIN worksAt w on u.id = w.pro_id
          JOIN companies c on w.company_id = c.id
          WHERE c.company = $1 AND w.position = $2
        `,
        [company, profession]
      );
      results.data = searchQuery.rows;
    }

    return res.json(results);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json("search server error");
  }
});

module.exports = router;
