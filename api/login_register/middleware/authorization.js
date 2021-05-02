// use this middleware to authorze person
const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = async(req,res,next) => {
    try {
        // destruct token (get token from fetch req)
        const token = req.header("jwtToken")
        // console.log(`your token is ${req.header("jwtToken")}`)

        if(!token){
            return res.status(403).send("not authorized")
        }

        // validate jwtToken
        const payload = jwt.verify(token, process.env.jwtSecret) 
        //if verified, will return payload that we can use within routes

        req.user = payload.user

    } catch(err){
        console.log(err.message)
        return res.status(403).send("not authorizedd")
    }

    next()
}