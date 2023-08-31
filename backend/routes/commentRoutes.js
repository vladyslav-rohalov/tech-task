const express = require('express');
const commentController = require('../controllers/commentController');
const { commentSchema } = require('../schemas');
const { authenticate, validateBody, isValidId } = require('../middlewares');

const router = express.Router();

router.use(authenticate);

router.post('/', commentController.createComment);

router.patch(
  '/:id',
  isValidId,
  validateBody(commentSchema),
  commentController.editComment
);

router.delete('/:id', isValidId, commentController.deleteComment);

module.exports = router;
