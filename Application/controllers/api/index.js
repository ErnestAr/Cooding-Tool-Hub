const router = require('express').Router();

const userRoutes = require('./user-routes');
const techRoutes = require('./edit-tech');

router.use('/users', userRoutes);
router.use('/tech', techRoutes);

module.exports = router;
