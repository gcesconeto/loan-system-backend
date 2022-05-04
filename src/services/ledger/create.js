const { ledger } = require('../../database/models');

module.exports = async ({ loanId, date, amount }) => {
    const createdEntry = await ledger.create(
        { loanId, date, amount },
    );
    return createdEntry;
};