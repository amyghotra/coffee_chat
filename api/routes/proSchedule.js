const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");
const jwtGenerator = require("../utils/jwtGenerator");

router.get("/getID", authorization, async(req, res) => {
    try {
        // req.user has the payload

        // console.log(`something ${req.body}`)
        const user = await pool.query("SELECT * FROM users where id = $1", [
          req.user,
        ]);

        res.json({proId: user.rows[0].id});
    
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
});


// get list of time/date objects
router.get("/getItems", authorization, async(req,res) => {
    try {
        // req.user has the payload
        // console.log(`something ${req.user}`)
        const user = await pool.query("SELECT * FROM users where id=$1", [
          req.user,
        ]);

        // console.log(user.rows[0].id)

        const items = await pool.query("SELECT * FROM proavailability WHERE pro_id=$1",[user.rows[0].id])
        
        // console.log(items.rows)

        res.json(items.rows)

        // res.json({proId: user.rows[0]});
    
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
})

// create new time/date object
router.post("/post", async(req,res) => {
    const { proId, date, time } = req.body

    const newAvailObject = await pool.query("INSERT INTO proavailability(pro_id,date,time) VALUES ($1,$2,$3) RETURNING *",[proId, date, time])

    res.json(newAvailObject.rows[0])
})

// delete time/date object
router.put("/delete", async(req, res) => {
    console.log(req.body)
    const { selectedDate, selectedTime, selectedproId } = req.body
    
    const updateProAvailTable = await pool.query(
        "DELETE FROM proavailability WHERE pro_id=$1 AND date=$2 AND time=$3",
        [selectedproId, selectedDate, selectedTime]
    )

    const updateMeetingsTable = await pool.query(
        "DELETE FROM meetings WHERE pro_id=$1 AND date=$2 AND time=$3",
        [selectedproId, selectedDate, selectedTime]
    )

    res.json("successfully deleted")
})

module.exports = router