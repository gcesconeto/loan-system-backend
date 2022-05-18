const { loan, client, settlement } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ clientId, loanToSettleIds, amount, startDate, installments, notes }) => {
    console.log(settlement);
    const clientFound = await client.findByPk(clientId);
    if (!clientFound) throw err.CLIENT_NOT_FOUND;
    const createdSettlement = await settlement.create(
        { clientId, amount, startDate, installments, notes },
    );
    if (createdSettlement) {
        loan.update({ settlementId: createdSettlement.id }, { where: { id: loanToSettleIds } });
    }
    return createdSettlement; 
};