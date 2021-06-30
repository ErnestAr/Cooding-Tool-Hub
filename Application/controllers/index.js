const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const privLib = require('./account-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/account', privLib)

module.exports = router;
