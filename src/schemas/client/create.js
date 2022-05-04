const Joi = require('joi');

module.exports = Joi.object(
  {
    name: Joi.string().min(2),
    email: Joi.string(),
    phone: Joi.string().min(8),
    street: Joi.string(),
    city: Joi.string(),
    neighborhood: Joi.string(),
    state: Joi.string(),
    rg: Joi.string().min(5),
    cpf: Joi.string().length(11),
  },
);