const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  password: Joi.string()
    .required()
    .messages({ 'any.required': 'missing required password field' }),
});

module.exports = loginSchema;
