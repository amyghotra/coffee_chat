const express = require("express");
const cors = require("cors"); // middleware; allow backend to interact with frontend

// Router
const apiRouter = require("./routes");

const app = express();
// get cors lib ready
app.use(express.json()); // allows for access to req.body
app.use(cors());

// Connect to router
app.use("/", apiRouter);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
