const { OK } = require('http-status-codes').StatusCodes;

const { client } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { full = false } = req.query;
    const clientList = await client.list(full);
    res.status(OK).json(clientList);
  } catch (err) {
    next(err);
  }
};