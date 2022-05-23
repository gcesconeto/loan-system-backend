const { ledger, loan, settlement } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ loanId, settlementId, date, amount }) => {
    const loanFound = await loan.findByPk(loanId);
    const settlementFound = await settlement.findByPk(settlementId);
    if ((loanId && !loanFound) || (settlementId && !settlementFound)) throw err.NOT_FOUND;
    const createdEntry = await ledger.create(
        { loanId, settlementId, date, amount },
    );
    return createdEntry;
};