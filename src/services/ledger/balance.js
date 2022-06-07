const { Op } = require('sequelize');

const { ledger } = require('../../database/models');
const { getBalance } = require('../helpers');

module.exports = async (start, end) => {
    const filter = {
        where: { date: { [Op.and]: [{ [Op.gte]: start }, { [Op.lte]: end }] } },
    };
    const ledgerList = await ledger.findAll(filter);
    const balance = getBalance(ledgerList);
    return balance;
};