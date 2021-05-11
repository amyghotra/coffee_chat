const router = require('express').Router();

// Routes
const echoRouter = require('./echo');
const jwtauthRouter = require('./jwtauth');
const dashboardRouter = require('./dashboard');
const companyRouter = require('./companies');
const professionalsRouter = require('./professionals');
const searchRouter = require('./search');
const updateStudentInfo = require('./updateStudentInfo');
const updateProInfo = require('./updateProInfo');
const proSchedule = require('./proSchedule');

// Connect routes
router.use('/auth', jwtauthRouter);
router.use('/dashboard', dashboardRouter);
router.use('/companies', companyRouter);
router.use('/professionals', professionalsRouter);
router.use('/search', searchRouter);
router.use('/updateStudentInfo', updateStudentInfo);
router.use('/updateProInfo', updateProInfo);
router.use('/proSchedule', proSchedule);

// Testing purposes
router.use('/echo', echoRouter);

module.exports = router;
