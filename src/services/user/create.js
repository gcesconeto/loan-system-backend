const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ email, password }) => {
    if (await user.findOne({ where: { email } })) throw err.ALREADY_EXISTS;

    const created = await user.create(
      { email, password },
    );
    return { id: created.id, email: created.email };
};