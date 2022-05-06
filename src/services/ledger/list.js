const { Op } = require('sequelize');

const { ledger } = require('../../database/models');

module.exports = async (start, end) => {
    const filter = {
        where: { date: { [Op.between]: [start, end] } },
    };
    const ledgerList = await ledger.findAll(filter);
    return ledgerList;
};