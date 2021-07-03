const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const accountRoutes = require('./account-routes');
const loginRoutes = require('./login-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/account', accountRoutes);
router.use("/login", loginRoutes)

module.exports = router;
