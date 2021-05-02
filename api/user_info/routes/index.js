const express = require("express");
const router = express();

// Subrouters
const registerRouter = require("./jwtauth"); // login register route
const studentRouter = require("./students");
const companyRouter = require("./companies");

// Mount Routers
router.use("/auth", registerRouter);
router.use("/students", studentRouter);
router.use("/companies", companyRouter);

module.exports = router;
