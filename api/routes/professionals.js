const router = require('express').Router();
const pool = require('../db');
const authorized = require('../middleware/authorization');

// GetAllProfessionalInformationHandler
router.get('/all', async (_, res) => {
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
    return res.status(401).json('professional error');
  }
});

// GetProfessionalInfomationHandler
router.get('/:id', async (req, res) => {
  try {
    // const results = {};
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

    const results = specificPro.rows[0];

    return res.json(results);
  } catch (err) {
    console.error(err.message);
    return res.status(401).json('proid Server Error');
  }
});

// GetAProfessionalsAvailbility
router.get('/:id/availability', async (req, res) => {
  try {
    const pro_id = req.params.id;
    let availablility;

    const dbAvailability = await pool.query(
      `
        SELECT date, time FROM proavailability WHERE pro_id = $1
      `,
      [pro_id]
    );

    availablility = dbAvailability.rows;

    return res.status(200).json({
      results: availablility,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(401).json('proid avail Server Error');
  }
});

// GetProfessionalInfo
router.get('/', authorized, async (req, res) => {
  try {
    const userId = req.user;

    const professionalInfo = await pool.query(
      `
        SELECT u.id userid, name, social, position, company FROM users u 
        JOIN worksat w on u.id = w.pro_id 
        JOIN companies c on w.company_id = c.id
        WHERE 
          u.id = (SELECT id FROM PROFESSIONALS WHERE id = $1); 
      `,
      [userId]
    );

    return res.status(200).json({ results: professionalInfo.rows[0] });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
