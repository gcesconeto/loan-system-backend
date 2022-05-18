const { CREATED } = require('http-status-codes').StatusCodes;

const { settlement } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { clientId, loanToSettleIds, amount, startDate, installments, notes } = req.body;
    const createdSettlement = await settlement.create(
      { clientId, loanToSettleIds, amount, startDate, installments, notes },
    );
    res.status(CREATED).json({ createdSettlement });
  } catch (err) {
    next(err);
  }
};