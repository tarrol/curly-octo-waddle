const router = require('express').Router();
const apiRoute = require('./api');

router.use('/api', apiRoute);

router.use((req, res) => {
  return res.send('Default page')
})

module.exports = router;
