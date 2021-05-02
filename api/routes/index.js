const express = require("express");
const router = express();

// Subrouters
const studentRouter = require("./students");

// Mount Routers
router.use("/students", studentRouter);

module.exports = router;
