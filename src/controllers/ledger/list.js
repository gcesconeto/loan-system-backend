const { OK } = require('http-status-codes').StatusCodes;

const { ledger } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    let { 
      start = new Date(1),
      end = new Date(),
    } = req.query;
    start = new Date(start).toISOString();
    end = new Date(end).toISOString();
    const ledgerList = await ledger.list(start, end);
    res.status(OK).json(ledgerList);
  } catch (err) {
    next(err);
  }
};