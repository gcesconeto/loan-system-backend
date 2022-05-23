const { client } = require('../../database/models');

module.exports = async (clientId) => {
  const foundClient = await client.findByPk(clientId);
  return foundClient;
};