const { CREATED } = require('http-status-codes').StatusCodes;

const { ledger } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { loanId = null, date, amount } = req.body;
    const createdEntry = await ledger.create({ loanId, date, amount });
    res.status(CREATED).json({ createdEntry });
  } catch (err) {
    next(err);
  }
};