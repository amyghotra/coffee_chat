const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get('/getScheduled', authorization, async(req,res) => {
    try {
        const meetings = await pool.query(
            "SELECT * FROM meetings WHERE pro_id=$1",
            [req.user]
        )

        let proInfo = []

        for(let i = 0; i < meetings.rows.length; i++) {
            const information = await pool.query(
                "SELECT * FROM users WHERE id=$1",
                [meetings.rows[0].student_id]
            )
            const studentInfo = await pool.query(
                "SELECT * FROM students WHERE id=$1",
                [meetings.rows[0].student_id]
            )
            const body = {
                pro_id: meetings.rows[0].pro_id,
                student_social:studentInfo.rows[0].social,
                student_id: meetings.rows[i].student_id,
                student_name: information.rows[0].name,
                school: studentInfo.rows[0].school,
                major: studentInfo.rows[0].major,
                meetingTime: meetings.rows[i].time.toString().substr(0,5),
                meetingDate_DB_FORMAT: meetings.rows[i].date.toJSON().substr(0,10),
                meetingDate: meetings.rows[i].date.toString().substr(0,15),
                zoomID: meetings.rows[i].zoomid,
                zoomPass: meetings.rows[i].zoompass
            }
            // console.log(body)
            proInfo.push(body)
        }

        res.json(proInfo)

    } catch (err) {
        console.log(err)
    }
})

router.put('/cancel', async(req,res) => {
    try {
        console.log(req.body)
        const { pro_id, student_id, meetingDate, meetingTime } = req.body
        
        const removeMeeting = await pool.query(
            "DELETE FROM meetings WHERE pro_id=$1 AND student_id=$2 AND date=$3",
            [pro_id, student_id, meetingDate]
        )

        const addProAvail = await pool.query(
            "INSERT INTO proavailability(pro_id,date,time) VALUES ($1,$2,$3)",
            [pro_id,meetingDate,meetingTime]
        )

        res.json("successfully removed")

    } catch (err) {
        console.log(err)
    }
})

module.exports = router