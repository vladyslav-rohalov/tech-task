const express = require('express');
const postController = require('../controllers/postController');
const schemas = require('../schemas/postShema');
const { authenticate, validateBody, isValidId } = require('../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', postController.getAllPosts);

router.get('/:id', isValidId, postController.getPostById);

router.post('/', validateBody(schemas), postController.addPost);

router.patch('/:id', isValidId, validateBody(schemas), postController.editPost);

router.delete('/:id', isValidId, postController.deletePost);

module.exports = router;
