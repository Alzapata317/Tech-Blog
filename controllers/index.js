const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes')
const signupRoutes = require('./signup-routes')

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);
router.use('/', signupRoutes);
router.use('/api', apiRoutes);

module.exports = router;
