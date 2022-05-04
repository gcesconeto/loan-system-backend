const { client } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ name, email, phone, street, city, neighborhood, state, rg, cpf }) => {
    if (await client.findOne({ where: { name } })) throw err.ALREADY_EXISTS;

    const created = await client.create(
      { name, email, phone, street, city, neighborhood, state, rg, cpf },
    );
    return created;
};