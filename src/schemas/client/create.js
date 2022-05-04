const Joi = require('joi');

module.exports = Joi.object(
  {
    name: Joi.string().min(2).required(),
    email: Joi.string().required(),
    phone: Joi.string().min(8).required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    neighborhood: Joi.string().required(),
    state: Joi.string().required(),
    rg: Joi.string().min(5).required(),
    cpf: Joi.string().length(11).required(),
  },
);