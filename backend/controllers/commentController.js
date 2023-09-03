const Comment = require('../models/comment');
const Post = require('../models/post');
const { HttpError } = require('../helpers');
const { controllerWrapper } = require('../decorators');

const createComment = async (req, res) => {
  // const { _id: owner } = req.user;
  const { _id, name, role } = req.user;
  if (role !== 'Commentator') {
    throw HttpError(403, 'Only the Commentator can add a comments');
  }
  const { parentPost } = req.body;
  const comment = await Comment.create({ ...req.body, owner: { _id, name } });
  const result = await Post.findByIdAndUpdate(
    parentPost,
    { $push: { comments: { ...comment } } },
    { safe: true, upsert: true, new: true }
  );
  res.status(201).json(result);
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

  await Post.findOneAndUpdate(
    {
      _id: comment.parentPost,
      'comments._id': result._id,
    },
    {
      $set: {
        'comments.$.comment': result.comment,
        'comments.$.updatedAt': result.updatedAt,
      },
    }
  );

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

  await Post.findByIdAndUpdate(
    { _id: comment.parentPost },
    {
      $pull: {
        comments: { _id: comment._id },
      },
    }
  );

  res.status(204).json({ message: `Delete success` });
};

module.exports = {
  createComment: controllerWrapper(createComment),
  editComment: controllerWrapper(editComment),
  deleteComment: controllerWrapper(deleteComment),
};
