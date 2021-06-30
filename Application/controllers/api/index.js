const router = require('express').Router();

const userRoutes = require('./user-routes');
const techRoutes = require('./newtech-routes');

router.use('/users', userRoutes);
router.use('/tech', techRoutes);

module.exports = router;
