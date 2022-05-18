const { user } = require('../../schemas');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;

  const { error } = user.create.validate(
    { email, password },
  );

  if (error) return next(error);

  next();
};