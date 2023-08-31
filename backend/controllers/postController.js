const Post = require('../models/post');
const User = require('../models/user');
const { HttpError } = require('../helpers');
const { controllerWrapper } = require('../decorators');

const addPost = async (req, res) => {
  const { _id: owner } = req.user;

  if (req.user.role !== 'Author') {
    throw HttpError(403, 'Only the Author can add a post');
  }
  const result = await Post.create({ ...req.body, owner });

  res.status(201).json(result);
};

const getAllPosts = async (req, res) => {
  const result = await Post.find({}, '-createdAt -updatedAt');

  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const getAllUserPosts = async (req, res) => {
  const { id } = req.params;
  const result = await Post.find({}, '-createdAt -updatedAt')
    .where('owner')
    .equals(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const result = await Post.findById(id, '-createdAt -updatedAt');
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const editPost = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const post = await Post.findById(id);

  if (String(post.owner) !== String(owner)) {
    throw HttpError(403, 'No edit permission');
  }
  const result = await Post.findByIdAndUpdate(id, req.body, { new: true });

  res.status(201).json(result);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const result = await Post.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'Delete success' });
};

module.exports = {
  addPost: controllerWrapper(addPost),
  getAllPosts: controllerWrapper(getAllPosts),
  getAllUserPosts: controllerWrapper(getAllUserPosts),
  getPostById: controllerWrapper(getPostById),
  editPost: controllerWrapper(editPost),
  deletePost: controllerWrapper(deletePost),
};
