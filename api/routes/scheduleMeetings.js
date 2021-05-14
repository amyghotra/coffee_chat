const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get('/get',authorization,async(req,res) => {
    try {
        const user = await pool.query("SELECT * FROM users where id = $1", [
            req.user,
          ]);
  
          res.json({studentID: user.rows[0].id});
    } catch (err) {
        console.log(err)
    }
})

router.put('/post', async(req,res) => {
    try {
        const { userid, studentId, selectedDate, selectedTime } = req.body

        // create new meeting
        console.log(req.body)
        const newMeeting = await pool.query(
            "INSERT INTO meetings(student_id,pro_id,date,time) VALUES ($1,$2,$3,$4)",
            [studentId,userid,selectedDate,selectedTime]
        )

        // remove date and time from proavailability
        const removeAvail = await pool.query(
            "DELETE FROM proavailability WHERE pro_id=$1 AND date=$2 AND time=$3",
            [userid,selectedDate,selectedTime]
        )

        res.json("update successful")

    } catch (err) {
        console.log(err)
    }
})

module.exports = router