const router = require('express').Router();
const userRoute = require('./user');
const thoughtsRoute = require('./thoughts')

router.use('/users', userRoute);
router.use('/thoughts', thoughtsRoute);

module.exports = router;