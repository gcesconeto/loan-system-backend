const Joi = require('joi');

module.exports = Joi.object(
  {
    clientId: Joi.number().required(),
    loanToSettleIds: Joi.array().required(),
    amount: Joi.number().required(),
    startDate: Joi.date().required(),
    installments: Joi.number().required(),
    notes: Joi.any(),
  },
);