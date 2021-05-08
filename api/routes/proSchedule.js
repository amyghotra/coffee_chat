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
// router.get("/get", async(req,res) => {
//     // console.log(req.body)
//     res.json("schedule")
// })

// // create new time/date object
router.post("/post", async(req,res) => {
    const { proId, date, time } = req.body

    const newAvailObject = await pool.query("INSERT INTO proavailability(pro_id,date,time) VALUES ($1,$2,$3) RETURNING *",[proId, date, time])


    res.json(newAvailObject.rows[0])
})

// delete time/date object

module.exports = router