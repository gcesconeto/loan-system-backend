const { CREATED } = require('http-status-codes').StatusCodes;

const { loan } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { clientId, amount, startDate, paymentDate, rate } = req.body;
    const createdLoan = await loan.create({ clientId, amount, startDate, paymentDate, rate });
    res.status(CREATED).json({ createdLoan });
  } catch (err) {
    next(err);
  }
};