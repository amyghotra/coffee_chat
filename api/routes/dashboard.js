const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async (req, res) => {
  try {
    // req.user has the payload
    // console.log("req.user")
    // console.log(req.user)
    // console.log("req.body")
    // console.log(req.body)
    const user = await pool.query('SELECT * FROM users where id = $1', [
      req.user,
    ]);

    const student = await pool.query('SELECT * FROM students where id = $1', [
      req.user,
    ]);
    if (student.rows.length) {
      res.json({ userInfo: user.rows[0], studentInfo: student.rows[0] });
    } else {
      const professional = await pool.query(
        'SELECT * FROM professionals where id = $1',
        [req.user]
      ); // professional's id and EXP YEARS
      const workInfo = await pool.query(
        'SELECT * FROM worksAt where pro_id = $1',
        [req.user]
      ); // pro id, company id, ROLE
      const companyInfo = await pool.query(
        'SELECT * FROM companies where id = $1',
        [workInfo.rows[0].company_id]
      ); // company id and COMPANY NAME
      res.json({
        userInfo: user.rows[0],
        professionalInfo: professional.rows[0],
        role: workInfo.rows[0],
        company: companyInfo.rows[0],
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
