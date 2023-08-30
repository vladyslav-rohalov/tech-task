const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'missing required title field',
  }),
  description: Joi.string().required().messages({
    'any.required': 'missing required description field',
  }),
});

module.exports = postSchema;
