const { loan, client, ledger } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ clientId, amount, startDate, paymentDate, rate }) => {
    const clientFound = await client.findByPk(clientId);
    if (!clientFound) throw err.CLIENT_NOT_FOUND;
    const createdLoan = await loan.create(
        { clientId, amount, startDate, paymentDate, rate },
    );
    if (createdLoan) {
        await ledger.create({ 
            loanId: createdLoan.id,
            date: createdLoan.startDate,
            amount: -createdLoan.amount,
        });
    }
    return createdLoan;
};