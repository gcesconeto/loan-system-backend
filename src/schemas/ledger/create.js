const Joi = require('joi');

module.exports = Joi.object(
  {
    loanId: Joi.required(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
  },
);