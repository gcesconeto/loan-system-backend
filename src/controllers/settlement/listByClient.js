const { OK } = require('http-status-codes').StatusCodes;

const { settlement } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const settlementList = await settlement.listByClient(clientId);
    res.status(OK).json(settlementList);
  } catch (err) {
    next(err);
  }
};