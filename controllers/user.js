const User = require('../models/user');

const userController = {
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        if (!dbUserData) { return res.status(404).json({ message: 'No user with this id!' }); }
      })
      .then(() => {
        res.json({ message: 'User deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}
module.exports = userController;