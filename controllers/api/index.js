const router = require('express').Router();
const jobRoutes = require('./jobs');
const userRoutes = require('./users');
const roleRoutes = require('./roles');


router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);
router.use('/roles', roleRoutes);


module.exports = router;
