const { User } = require('../models/user');

const userController = {
  // get all users
  getUsers(req, res) {
    return res.send('Users page')
  },
}

module.exports = userController;