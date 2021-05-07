const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");
const jwtGenerator = require("../utils/jwtGenerator");

router.get("/get", authorization, async(req, res) => {
    try {
        // req.user has the payload
        // res.json(req.user)
        const user = await pool.query("SELECT * FROM users where id = $1", [
          req.user,
        ]);
        // console.log(user.rows[0])
    
        // const student = await pool.query("SELECT * FROM students where id = $1", [
        //     user.rows[0].id,
        // ]);
        // console.log(student.rows[0])
        // console.log(user.rows[0])

        res.json({proId: user.rows[0].id});
    
      } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
      }
});

router.put("/post", async(req, res) => {
    try {
        // destructure req.body
        const { name, email, social, company, role, yearsExperience, proId } = req.body

        // UPDATE USERS TABLE
        const currentEmail = await pool.query(
            "SELECT email FROM users WHERE id=$1",
            [proId]
        )

        if(currentEmail.rows[0].email !== email){
            const update_users_table = await pool.query(
                "UPDATE users SET email=$1 WHERE id=$2",
                [email, proId]
            )
        }

        const currentName = await pool.query(
            "SELECT name FROM users WHERE id=$1",
            [proId]
        )

        if(currentName.rows[0].name !== name){
            const update_users_table = await pool.query(
                "UPDATE users SET name=$1 WHERE id=$2",
                [name, proId]
            )
        }

        const currentSocial = await pool.query(
            "SELECT social FROM users WHERE id=$1",
            [proId]
        )

        if(currentSocial.rows[0].social !== social){
            const update_users_table = await pool.query(
                "UPDATE users SET social=$1 WHERE id=$2",
                [social, proId]
            )
        }

        // UPDATE PROFESSIONALS TABLE
        const currentExperience = await pool.query(
            "SELECT experience FROM professionals WHERE id=$1",
            [proId]
        )

        if(currentExperience.rows[0].experience !== yearsExperience){
            const update_professionals_table = await pool.query(
                "UPDATE professionals SET experience=$1 WHERE id=$2",
                [yearsExperience, proId]
            )
        }

        // UPDATE WORKSAT and COMPANIES TABLES
        const currentRole = await pool.query(
            "SELECT position FROM worksat WHERE pro_id=$1",
            [proId]
        )

        if(currentRole.rows[0].position !== role) {
            const newPosition = await pool.query(
                "UPDATE worksat SET position=$1 WHERE pro_id=$2",
                [role, proId]
            )
        }

        // check to see if 'company' (being passed) exists in db
        const getCompany = await pool.query(
            "SELECT * from companies where company=$1",
            [company]
        )

        // if it does not exist in the db
        if(getCompany.rowCount === 0) {
            // add the company to the companies db
            const hours = 0
            const newCompany = await pool.query(
                "INSERT INTO companies(company, totalhours) VALUES ($1, $2)",
                [company, hours]
            )
            // get the id of the new company
            let newCompanyID = await pool.query(
                "SELECT id FROM companies WHERE company=$1",
                [company]
            )
            newCompanyID = newCompanyID.rows[0].id
            // assign it to the professional
            const newWorksAt = await pool.query(
                "UPDATE worksat SET company_id=$1 WHERE pro_id=$2",
                [newCompanyID, proId]
            )
        } else { // else if the passed-in company already exists in the db
            // compare the one passed in to the one currently associated with the professional
            // get the ID of the current one
            const getCurrentlyAssignedID = await pool.query(
                "SELECT company_id FROM worksat WHERE pro_id=$1",
                [proId]
            )
            // get the ID of the one passed in
            const getPassedInName = await pool.query(
                "SELECT id FROM companies where company=$1",
                [company]
            )
            // if it's not the same, reassign 
            if(getCurrentlyAssignedID.rows[0].company_id !== getPassedInName.rows[0].id){
                const newWorksAt = await pool.query(
                    "UPDATE worksat SET company_id=$1 WHERE pro_id=$2",
                    [getPassedInName.rows[0].id, proId]
                )
            }
        }


        res.json("update successful")
        const jwtToken = jwtGenerator(proId);
        // res.json({ jwtToken });
        
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router