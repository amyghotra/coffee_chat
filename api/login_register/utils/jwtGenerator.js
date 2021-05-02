const jwt = require("jsonwebtoken")
require('dotenv').config() // allows access to env vars

function jwtGnerator(user_id){
    const payload = {
        user: user_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"})
}

module.exports = jwtGnerator