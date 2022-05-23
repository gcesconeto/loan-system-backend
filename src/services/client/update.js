const { client } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async (
  clientId, 
  { name, phone, street, city, neighborhood, state, rg, cpf, notes },
) => {
  const foundClient = await client.findByPk(clientId);
  if (!foundClient) throw err.CLIENT_NOT_FOUND;

  foundClient.set({ name, phone, street, city, neighborhood, state, rg, cpf, notes });
  const updated = await foundClient.save();
  return updated;
};