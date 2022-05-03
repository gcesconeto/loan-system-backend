const { OK } = require('http-status-codes').StatusCodes;

const { loan } = require('../../services');

module.exports = async (_req, res, next) => {
  try {
    const loanList = await loan.list();
    res.status(OK).json(loanList);
  } catch (err) {
    next(err);
  }
};