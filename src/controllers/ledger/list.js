const { OK } = require('http-status-codes').StatusCodes;

const { ledger } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { 
      start = new Date(1),
      end = new Date(),
    } = req.query;
    const ledgerList = await ledger.list(start, end);
    res.status(OK).json(ledgerList);
  } catch (err) {
    next(err);
  }
};