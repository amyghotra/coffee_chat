const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json()) // allows access to 'req.body' (data from client side)
app.use(cors()) // allows backend to interact with frontend

// Routes


app.listen(5000, () => {
    console.log("server is running on port 5000")
})