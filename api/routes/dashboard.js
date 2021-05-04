const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    // req.user has the payload
    // res.json(req.user)
    const user = await pool.query("SELECT * FROM cc_users where user_id = $1", [
      req.user,
    ]);

    if(user.rows[0].is_student) {
      const student = await pool.query("SELECT * FROM students where student_id = $1", [
        req.user,
      ]);
      res.json(student.rows[0]);
    } else {
      const professional = await pool.query("SELECT * FROM professionals where pro_id = $1", [
        req.user,
      ]);
      res.json(professional.rows[0]);
    }

  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
