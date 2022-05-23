const { client } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async (clientId) => {
  const foundClient = await client.findByPk(clientId);
  if (!foundClient) throw err.CLIENT_NOT_FOUND;
  return foundClient;
};