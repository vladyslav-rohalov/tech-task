const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'missing required name field',
  }),
  email: Joi.string()
    .email()
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  password: Joi.string()
    .required()
    .min(6)
    .messages({ 'any.required': 'missing required password field' }),
  role: Joi.string()
    .required()
    .messages({ 'any.required': 'missing required role field' }),
});

module.exports = registerSchema;
