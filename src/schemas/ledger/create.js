const Joi = require('joi');

module.exports = Joi.object(
  {
    loanId: Joi.number().required(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
  },
);