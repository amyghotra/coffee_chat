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

    res.json(user.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;