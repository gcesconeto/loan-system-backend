const { OK } = require('http-status-codes').StatusCodes;

const { loan } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const loanList = await loan.listByClient(clientId);
    res.status(OK).json(loanList);
  } catch (err) {
    next(err);
  }
};