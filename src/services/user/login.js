const { user } = require('../../database/models');
const errors = require('../../errors/errors');

const auth = require('../auth');

module.exports = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email } });

  if (!userFound) throw errors.NOT_FOUND;

  if (userFound.password !== password) throw errors.INCORRECT_PASSWORD;

  const userEmail = userFound.email;
  const token = auth.generateJwt({ userEmail });

  return token;
};