const { client } = require('../../schemas');

module.exports = (req, _res, next) => {
  const { name, phone, street, city, neighborhood, state, rg, cpf, notes } = req.body;

  const { error } = client.create.validate(
    { name, phone, street, city, neighborhood, state, rg, cpf, notes },
  );

  if (error) return next(error);

  next();
};