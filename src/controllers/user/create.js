const { CREATED } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
      
    const createdUser = await user.create({ email, password });
    res.status(CREATED).json(createdUser);
  } catch (err) {
    next(err);
  }
};
