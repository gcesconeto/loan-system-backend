const Joi = require('joi');

module.exports = Joi.object(
  {
    clientId: Joi.number().required(),
    amount: Joi.number().required(),
    startDate: Joi.date().required(),
    paymentDate: Joi.date().required(),
    rate: Joi.number().required(),
  },
);