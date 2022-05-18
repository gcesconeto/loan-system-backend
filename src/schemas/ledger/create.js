const Joi = require('joi');

module.exports = Joi.object(
  {
    loanId: Joi.required(),
    settlementId: Joi.required(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
  },
);