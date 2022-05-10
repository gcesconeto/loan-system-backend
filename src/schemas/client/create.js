const Joi = require('joi');

module.exports = Joi.object(
  {
    name: Joi.string().min(2),
    phone: Joi.any(),
    street: Joi.any(),
    city: Joi.any(),
    neighborhood: Joi.any(),
    state: Joi.any(),
    rg: Joi.any(),
    cpf: Joi.any(),
    notes: Joi.any(),
  },
);