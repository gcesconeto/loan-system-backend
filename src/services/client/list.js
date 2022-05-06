const { client } = require('../../database/models');

module.exports = async (full) => {
  let filter = {};
  if (!full) {
    filter = {
      attributes: ['id', 'name'],
    };
  }
  const clients = await client.findAll(filter);
  return clients;
};