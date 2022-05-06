const { Op } = require('sequelize');

const { loan, ledger } = require('../../database/models');
const { loanProcessor } = require('../helpers');

module.exports = async (start, end) => {
    const filter = {
        where: { startDate: { [Op.between]: [start, end] } },
        include: [{ model: ledger }],
    };
    const loanList = await loan.findAll(filter);
    if (loanList.length > 0) {
        const processedList = loanList.map((selLoan) => loanProcessor(selLoan.toJSON()));
        return processedList;
    }
    return loanList;
};