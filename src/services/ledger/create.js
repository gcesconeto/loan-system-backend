const { ledger } = require('../../database/models');

module.exports = async ({ loanId, settlementId, date, amount }) => {
    const createdEntry = await ledger.create(
        { loanId, settlementId, date, amount },
    );
    return createdEntry;
};