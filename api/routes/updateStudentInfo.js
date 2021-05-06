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

        res.json({studentId: user.rows[0].id});
    
      } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
      }
});

router.put("/post", async(req, res) => {
    try {
        // destructure req.body
        const { name, email, social, school, major, studentId } = req.body

        const update_users_table = await pool.query(
            "UPDATE users SET name=$1,email=$2,social=$3 WHERE id=$4",
            [name, email, social,studentId]
        )

        const update_students_table =  await pool.query(
            "UPDATE students SET school=$1,major=$2 WHERE id=$3",
            [school,major,studentId]
        )

        const newObj = await pool.query("SELECT * FROM users where id=$1",[studentId])
        const newObj2 = await pool.query("SELECT * FROM students where id=$1",[studentId])
        console.log(req.body)
        console.log(newObj.rows[0])
        console.log(newObj2.rows[0])

        res.json("update successful")
        const jwtToken = jwtGenerator(studentId);
        // res.json({ jwtToken });
        
    } catch (err) {
        console.log(err.message)
    }
});

// router.put("/post/:id", async(req, res) => {
//     try {
//         res.json(req.body)
//         const { id } = req.params
//         // destructure req.body
//         const { name, email, social, school, major, studentId } = req.body

//         const update_users_table = await pool.query(
//             "UPDATE users SET name=$1,email=$2,social=$3 WHERE id=$4",
//             [name, email, social,id]
//         )

//         const update_students_table =  await pool.query(
//             "UPDATE students SET school=$1,major=$2 WHERE id=$3",
//             [school,major,id]
//         )

//         // res.json({newUsersEntry: update_users_table.rows[0], newStudentsEntry:update_students_table.rows[0]})
//         // const jwtToken = jwtGenerator(id);
//         // res.json({ jwtToken });
        
//     } catch (err) {
//         console.log(err.message)
//     }
// });

module.exports = router