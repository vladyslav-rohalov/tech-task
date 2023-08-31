const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'missing required title field',
  }),
  body: Joi.string().required().messages({
    'any.required': 'missing required body field',
  }),
});

module.exports = postSchema;
