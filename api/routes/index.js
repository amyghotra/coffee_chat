const router = require("express").Router();

// Routes
const echoRouter = require("./echo");
const jwtauthRouter = require("./jwtauth");
const dashboardRouter = require("./dashboard");

// Connect routes
router.use("/auth", jwtauthRouter);
router.use("/dashboard", dashboardRouter);

// Testing purposes
router.use("/echo", echoRouter);

module.exports = router;
