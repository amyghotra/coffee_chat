const express = require("express");
const router = express();

// Subrouters
const registerRouter = require("./jwtauth"); // login register route
const studentRouter = require("./students");

// Mount Routers
router.use("/auth", registerRouter);
router.use("/students", studentRouter);

module.exports = router;
