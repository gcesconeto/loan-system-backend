const { OK } = require('http-status-codes').StatusCodes;

const { ledger } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const balance = await ledger.balance();
    res.status(OK).json(balance);
  } catch (err) {
    next(err);
  }
};