const { user } = require('../../database/models');

module.exports = async () => {
  const clients = await user.findAll({});

  return clients;
};