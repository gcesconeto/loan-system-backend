const { client } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ name, phone, street, city, neighborhood, state, rg, cpf, notes }) => {
    if (await client.findOne({ where: { name } })) throw err.ALREADY_EXISTS;

    const created = await client.create(
      { name, phone, street, city, neighborhood, state, rg, cpf, notes },
    );
    return created;
};