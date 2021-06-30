const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const accountRoutes = require('./account-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/account', accountRoutes)

module.exports = router;
