const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
