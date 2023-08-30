const { Schema, model } = require('mongoose');
const { handleMogooseError } = require('../helpers');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    token: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ['Author', 'Commentator'],
      default: 'Author',
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMogooseError);

const User = model('user', userSchema);

module.exports = User;
