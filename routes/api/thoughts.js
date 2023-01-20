const router = require('express').Router()
const { getThoughts, createThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought')

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;