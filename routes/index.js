const router = require("express").Router();

router.use((req, res) => {
  return res.send('Default page')
})

module.exports = router;