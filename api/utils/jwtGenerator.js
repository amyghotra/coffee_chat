const jwt = require("jsonwebtoken")
require('dotenv').config() // allows access to env vars

function jwtGenerator(user_id){
    const payload = {
        user: user_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: 60 * 60})
}

module.exports = jwtGenerator