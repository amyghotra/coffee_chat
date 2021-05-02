const express = require("express")
// const bcrypt = requre("bcrypt")
const app = express()
const cors = require("cors") // middleware; allow backend to interact with frontend

// get cors lib ready
app.use(express.json()) // allows for access to req.body
app.use(cors())

// Routes
// login register route
app.use('/auth', require('./routes/jwtauth'))


app.listen(5000, () => {
    console.log("listening on port 5000")
})