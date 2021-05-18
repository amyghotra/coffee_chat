const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInput = require('../middleware/validinfo');
const authorization = require('../middleware/authorization'); // check if token valid

// registering
router.post('/register', validInput, async (req, res) => {
  try {
    // destructure req.body
    const {
      name,
      email,
      password,
      isStudent,
      school,
      major,
      company,
      jobTitle,
      yearsExperience,
    } = req.body;

    // check if user exists; if yes, throw error
    const user = await pool.query('SELECT * FROM users where email = $1', [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send('user alrady exists');
    }

    // bcrypt user's pass
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptpassword = await bcrypt.hash(password, salt);
    // res.json(req.body)

    const newUser = await pool.query(
      'INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *',
      [name, email, bcryptpassword]
    );

    let id = newUser.rows[0].id;

    // enter user into db
    if (isStudent) {
      const newStudent = await pool.query(
        'INSERT INTO students (id, school, major) VALUES ($1,$2,$3)',
        [id, school, major]
      );
    } else {
      const newPro = await pool.query(
        'INSERT INTO professionals (id, experience) VALUES ($1, $2)',
        [id, yearsExperience]
      );
      const companyid = await pool.query(
        'SELECT * FROM companies WHERE company = $1',
        [company]
      );
      if (companyid.rows.length) {
        const company_id_ = companyid.rows[0].id;
        const newWorksAt = await pool.query(
          'INSERT INTO worksat (pro_id, company_id, position) VALUES ($1, $2, $3)',
          [id, company_id_, jobTitle]
        );
      } else {
        let hours = 0;
        const newCompany = await pool.query(
          'INSERT INTO companies (company, totalhours) VALUES ($1, $2)',
          [company, hours]
        );
        const companyid = await pool.query(
          'SELECT * FROM companies WHERE company = $1',
          [company]
        );
        const company_id_ = companyid.rows[0].id;
        const newWorksAt = await pool.query(
          'INSERT INTO worksat (pro_id, company_id, position) VALUES ($1, $2, $3)',
          [id, company_id_, jobTitle]
        );
      }
    }

    // generate jwt token
    const token = jwtGenerator(newUser.rows[0].id);
    res.json({ token: token, id: newUser.rows[0].id });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

// Login Route
router.post('/login', validInput, async (req, res) => {
  try {
    // destructure req.body
    const { email, password } = req.body;

    // check if user doesnt exist;if not then throw err
    const user = await pool.query('SELECT * FROM users where email = $1', [
      email,
    ]);

    if (user.rows.length === 0) {
      // if user doesnt exist
      return res.status(401).send('password or email is incorrect');
    }

    // check if given password = db password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).send('password or email is incorrect');
    }

    // give jwt token
    const jwtToken = jwtGenerator(user.rows[0].id);
    res.json({ token: jwtToken, id: user.rows[0].id });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

router.get('/verify', authorization, async (req, res) => {
  try {
    let userType = 'guest';
    const userId = req.user;
    const student = await pool.query(
      `
        SELECT * FROM students WHERE id = $1
      `,
      [userId]
    );
    const professional = await pool.query(
      `
        SELECT * FROM professionals WHERE id = $1
      `,
      [userId]
    );

    if (student.rows.length !== 0) {
      userType = 'student';
    } else if (professional.rows.length !== 0) {
      userType = 'professional';
    }

    return res.status(200).json({
      userType,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

router.get('/info/student', authorization, async (req, res) => {
  try {
    const studentId = req.user;

    const studentInfo = await pool.query(
      `
        SELECT name, social, school, major 
        FROM users u
        JOIN students s ON s.id = u.id
        WHERE u.id = $1
      `,
      [studentId]
    );

    // console.log(studentInfo.rows[0]);
    return res.status(200).json({
      results: studentInfo.rows[0],
    });
  } catch (error) {
    console.error(error.message, 'info/student');
    res.status(500).json('server error gwt info/student');
  }
});

router.get('/info/pro', authorization, async (req, res) => {
  try {
    const proId = req.user;

    const professionalInfo = await pool.query(
      `
        SELECT name, social, position, company FROM users u
        JOIN worksat w on u.id = w.pro_id
        JOIN companies c on w.company_id = c.id
        WHERE
          u.id = (SELECT id FROM PROFESSIONALS WHERE id = $1);
      `,
      [proId]
    );

    // console.log(professionalInfo.rows[0]);
    return res.status(200).json({
      results: professionalInfo.rows[0],
    });
  } catch (error) {
    console.error(error.message, 'info/pro');
    res.status(500).json('server error gwt info/pro');
  }
});

module.exports = router;
