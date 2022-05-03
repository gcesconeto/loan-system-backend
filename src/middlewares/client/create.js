const { client } = require('../../schemas');

module.exports = (req, _res, next) => {
  const { name, email, phone, street, city, neighborhood, state, rg, cpf } = req.body;

  const { error } = client.create.validate(
    { name, email, phone, street, city, neighborhood, state, rg, cpf },
  );

  if (error) return next(error);

  next();
};