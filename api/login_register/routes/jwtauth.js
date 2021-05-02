const router = require("express").Router()
const pool = require('../db')
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")

// registering
router.post("/register", async(req, res) => {
    try{
        // desrtucture req.body
        const { name, email, password, is_student, pro_company, pro_role } = req.body;

        // check if user exists; if yes, throw error
        const user = await pool.query("SELECT * FROM cc_users where user_email = $1", [email])

        // res.json(user.rows)
        if(user.rows.length !== 0) {
            return res.status(401).send("user alrady exists")
        }

        // bcrypt user's pass
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptpassword = await bcrypt.hash(password, salt);
        // res.json(req.body)

        const newUser = await pool.query("INSERT INTO cc_users (username,user_email,user_password, is_student) VALUES ($1,$2,$3,$4) RETURNING *", [name, email, bcryptpassword, is_student])

        // res.json(newUser.rows[0])
        
        let user_id = newUser.rows[0].user_id
        
        // enter user into db
        if(is_student){
            const newStudent = await pool.query("INSERT INTO students (student_id, student_name,student_email,student_password) VALUES ($1,$2,$3, $4)", [user_id, name, email, bcryptpassword])
            // res.json(newStudent.rows[0])
        }
        if(!is_student){
            const newPro = await pool.query("INSERT INTO professionals (pro_id, pro_name, pro_email, pro_password, pro_company, pro_role) VALUES ($1, $2, $3, $4, $5, $6)", [user_id, name, email, bcryptpassword, pro_company, pro_role])
            // res.json(newPro.rows[0])
        }

        // generate jwt token
        const token = jwtGenerator(newUser.rows[0].user_id)
        res.json({token})
    } catch(err) {
        console.log(err.message)
        res.status(500).send("server error")
    }
})

// Login Route
router.post("/login", async (req,res) => {
    try {
        // destructure req.body
        const {email, password} = req.body;

        // check if user doesnt exist;if not then throw err
        const user = await pool.query("SELECT * FROM cc_users where user_email = $1", [email])

        if(user.rows.length === 0){// if user doesnt exist
            return res.status(401).send("password or email is incorrect")
        }

        // check if given password = db password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)

        if(!validPassword) {
            return res.status(401).send("password or email is incorrect")
        }

        // give jwt token
        const jwtToken = jwtGenerator(user.rows[0].user_id)
        res.json({jwtToken})
    } catch(err) {
        console.log(err.message)
        res.status(500).send("server error")
    }
})


module.exports= router