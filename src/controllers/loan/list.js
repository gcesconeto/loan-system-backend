const { OK } = require('http-status-codes').StatusCodes;

const { loan } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { 
      start = new Date(1),
      end = new Date(),
    } = req.query;
    const loanList = await loan.list(start, end);
    res.status(OK).json(loanList);
  } catch (err) {
    next(err);
  }
};