const router = require("express").Router()
const pool = require('../db')


// registering
router.post("/register", async(req, res) => {
    try{
        // desrtucture req.body
        const { name, email, password } = req.body;

        // check if user exists; if yes, throw error
        const user = await pool.query("SELECT * FROM cc_users where user_email = $1", [email])

        res.json(user.rows)

        // bcrypt user's pass

        // enter user into db

        // generate jwt token
    } catch(err) {
        console.log(err.message)
        res.status(500).send("server error")
    }
})


module.exports= router