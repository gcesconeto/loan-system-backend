const { loan, ledger, client } = require('../../database/models');
const { loanProcessor } = require('../helpers');

module.exports = async (clientId) => {
    const filter = {
        where: { clientId },
        include: [{ model: ledger }, { model: client, attributes: ['name'] }],
    };
    const loanList = await loan.findAll(filter);
    if (loanList.length > 0) {
        const processedList = loanList.map((selLoan) => loanProcessor(selLoan.toJSON()));
        return processedList;
    }
    return loanList;
};