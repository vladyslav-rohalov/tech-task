const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const postSchema = new Schema(
  {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
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
