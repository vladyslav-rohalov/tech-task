const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, 'Comment is required'],
    },
    parentPost: {
      type: Schema.Types.ObjectId,
      ref: 'post',
      required: [true, 'Post is required'],
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    //   required: [true, 'Owner is required'],
    // },
    owner: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Owner is required'],
      },
      name: {
        type: String,
        required: [true, 'User name is required'],
      },
    },
  },
  { versionKey: false, timestamps: true }
);

commentSchema.post('save', handleMongooseError);

const Comment = model('comment', commentSchema);

module.exports = Comment;
