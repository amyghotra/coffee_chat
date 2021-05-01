const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db");

const apiRouter = require("./routes");

app.use(express.json()) // allows access to 'req.body' (data from client side)
app.use(cors()) // allows backend to interact with frontend

app.use("/api", apiRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})