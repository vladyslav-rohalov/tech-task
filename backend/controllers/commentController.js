const Comment = require('../models/comment');
const { HttpError } = require('../helpers');
const { controllerWrapper } = require('../decorators');

const addComment = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Comment.create({ ...req.body, owner });

  res.status(201).json(result);
};

const getAllComments = async (req, res) => {
  const { id: parentPost } = req.params;
  const result = await Comment.find({ parentPost });

  res.json(result);
};

const editComment = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const comment = await Comment.findById(id);

  if (String(comment.owner) !== String(owner)) {
    throw HttpError(403, 'No edit permission');
  }

  const result = await Comment.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, 'Comment not found');
  }

  res.status(201).json(result);
};

const deleteComment = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const comment = await Comment.findById(id);

  if (String(comment.owner) !== String(owner)) {
    throw HttpError(403, 'No edit permission');
  }

  const result = await Comment.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, 'Task not found');
  }

  res.status(204).json({ message: `Delete success` });
};

module.exports = {
  addComment: controllerWrapper(addComment),
  getAllComments: controllerWrapper(getAllComments),
  editComment: controllerWrapper(editComment),
  deleteComment: controllerWrapper(deleteComment),
};
