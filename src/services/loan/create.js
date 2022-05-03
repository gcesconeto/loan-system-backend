const { loan } = require('../../database/models');

module.exports = async ({ clientId, amount, startDate, paymentDate, rate }) => {
    const createdLoan = await loan.create(
        { clientId, amount, startDate, paymentDate, rate, status: 'pending' },
    );
    return createdLoan;
};