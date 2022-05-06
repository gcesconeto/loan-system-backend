const { ledger } = require('../../database/models');
const { getBalance } = require('../helpers');

module.exports = async () => {
    const ledgerList = await ledger.findAll();
    const balance = getBalance(ledgerList);
    console.log(balance);
    return balance;
};