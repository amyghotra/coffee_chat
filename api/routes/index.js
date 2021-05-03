const router = require("express").Router();

// Routes
const jwtauthRouter = require("./jwtauth");
const dashboardRouter = require("./dashboard");
const companyRouter = require("./companies");
const professionalsRouter = require("./professionals");

// Connect routes
router.use("/auth", jwtauthRouter);
router.use("/dashboard", dashboardRouter);
router.use("/companies", companyRouter);
router.use("/professionals", professionalsRouter);

module.exports = router;
