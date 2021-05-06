const router = require("express").Router();

// Routes
const echoRouter = require("./echo");
const jwtauthRouter = require("./jwtauth");
const dashboardRouter = require("./dashboard");
const companyRouter = require("./companies");
const professionalsRouter = require("./professionals");
const searchRouter = require("./search");
const updateStudentInfo = require("./updateStudentInfo")

// Connect routes
router.use("/auth", jwtauthRouter);
router.use("/dashboard", dashboardRouter);
router.use("/companies", companyRouter);
router.use("/professionals", professionalsRouter);
router.use("/search", searchRouter);
router.use("/updateStudentInfo", updateStudentInfo);

// Testing purposes
router.use("/echo", echoRouter);

module.exports = router;
