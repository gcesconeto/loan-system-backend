const { auth } = require('../services');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const { email } = auth.verifyJwt(token);

    req.user = { email };

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};