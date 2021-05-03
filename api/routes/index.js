const router = require("express").Router();

// Routes
const jwtauthRouter = require("./jwtauth");
const dashboardRouter = require("./dashboard");

// Connect routes
router.use("/auth", jwtauthRouter);
router.use("/dashboard", dashboardRouter);

module.exports = router;
