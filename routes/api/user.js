const router = require('express').Router()
const { getUsers, createUser, deleteUser } = require('../../controllers/user')

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').delete(deleteUser);
module.exports = router;
