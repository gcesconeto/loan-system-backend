const { OK } = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  try {
    const { email } = req.user;

    res.status(OK).json({ email });
  } catch (err) {
    next(err);
  }
};