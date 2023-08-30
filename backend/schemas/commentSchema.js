const Joi = require('joi');

const commentSchema = Joi.object({
  comment: Joi.string().required().messages({
    'any.required': 'missing required comment field',
  }),
  parentPost: Joi.string()
    .required()
    .length(24)
    .messages({ 'any.required': 'missing required parentPost id' }),
});

module.exports = commentSchema;
