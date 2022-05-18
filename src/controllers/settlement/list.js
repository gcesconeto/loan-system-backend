const { OK } = require('http-status-codes').StatusCodes;

const { settlement } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { 
      start = new Date(1),
      end = new Date(),
    } = req.query;
    const settlementList = await settlement.list(start, end);
    res.status(OK).json(settlementList);
  } catch (err) {
    next(err);
  }
};