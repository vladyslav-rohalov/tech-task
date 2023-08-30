const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Owner is required'],
    },
  },
  { versionKey: false }
);

postSchema.post('save', handleMongooseError);

const Post = model('post', postSchema);

module.exports = Post;
