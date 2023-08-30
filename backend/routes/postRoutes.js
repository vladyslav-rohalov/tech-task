const express = require('express');
const postController = require('../controllers/postController');
const { postSchema } = require('../schemas');
const { authenticate, validateBody, isValidId } = require('../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', postController.getAllPosts);

router.get('/user/:id', postController.getAllUserPosts);

router.get('/:id', isValidId, postController.getPostById);

router.post('/', validateBody(postSchema), postController.addPost);

router.patch(
  '/:id',
  isValidId,
  validateBody(postSchema),
  postController.editPost
);

router.delete('/:id', isValidId, postController.deletePost);

module.exports = router;
