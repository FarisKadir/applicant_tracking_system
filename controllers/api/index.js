const router = require('express').Router();
const jobRoutes = require('./jobs');
const userRoutes = require('./users');
const roleRoutes = require('./roles');
const jobTypeRoutes = require('./jobTypes');
const deptRoutes = require('./departments');
const submissionRoutes = require('./submissions');


router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/jobtypes', jobTypeRoutes);
router.use('/departments', deptRoutes);
router.use('/submissions', submissionRoutes);


module.exports = router;
