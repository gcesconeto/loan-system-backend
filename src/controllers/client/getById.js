const { OK } = require('http-status-codes').StatusCodes;

const { client } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const foundClient = await client.getById(clientId);
    res.status(OK).json(foundClient);
  } catch (err) {
    next(err);
  }
};