const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get('/getScheduled', authorization, async(req,res) => {
    try {
        const meetings = await pool.query(
            "SELECT * FROM meetings WHERE student_id=$1",
            [req.user]
        )

        console.log(meetings.rows)

        let proInfo = []

        for(let i = 0; i < meetings.rows.length; i++) {
            const information = await pool.query(
                "SELECT * FROM users WHERE id=$1",
                [meetings.rows[i].pro_id]
            )
            const workInfo = await pool.query(
                "SELECT * FROM worksat WHERE pro_id=$1",
                [meetings.rows[i].pro_id]
            )
            const companyInfo = await pool.query(
                "SELECT * FROM companies WHERE id=$1",
                [workInfo.rows[0].company_id]
            )
            const body = {
                pro_id: information.rows[0].id,
                pro_social:information.rows[0].social,
                student_id: meetings.rows[i].student_id,
                pro_name: information.rows[0].name,
                pro_email: information.rows[0].email,
                position: workInfo.rows[0].position,
                company: companyInfo.rows[0].company,
                company_id: companyInfo.rows[0].id,
                meetingTime: meetings.rows[i].time.toString().substr(0,5),
                meetingDate_DB_FORMAT: meetings.rows[i].date.toJSON().substr(0,10),
                meetingDate: meetings.rows[i].date.toString().substr(0,15),
                zoomID: Math.floor(Math.random() * 9999999999),
                zoomPass: Math.floor(Math.random() * 9999999999)
            }
            proInfo.push(body)
        }

        res.json(proInfo)

    } catch (err) {
        console.log(err)
    }
})

router.put('/cancel', async(req,res) => {
    try {
        const { pro_id, student_id, meetingDate, meetingTime } = req.body
        // console.log(req.body)
        const removeMeeting = await pool.query(
            "DELETE FROM meetings WHERE pro_id=$1 AND student_id=$2 AND date=$3 AND time=$4",
            [pro_id, student_id, meetingDate, meetingTime]
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