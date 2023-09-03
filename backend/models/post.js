const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    body: {
      type: String,
      required: [true, 'Body is required'],
    },
    comments: {
      type: Schema.Types.Array,
      default: [],
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

postSchema.post('save', handleMongooseError);

const Post = model('post', postSchema);

module.exports = Post;
