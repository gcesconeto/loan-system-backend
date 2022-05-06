const { Op } = require('sequelize');

const { loan, ledger } = require('../../database/models');

const getMonthsBetween = (date) => {
    const then = new Date(date);
    const now = new Date();
    const startDate = {
        y: then.getFullYear(),
        m: then.getMonth(),
        d: then.getDay(),
    };
    const today = {
        y: now.getFullYear(),
        m: now.getMonth(),
        d: now.getDay(),
    };
    let monthsBetween = ((today.y - startDate.y) * 12) + today.m - startDate.m;
    if (today.d < startDate.d) monthsBetween -= 1;
    return monthsBetween;
};

const loanProcessor = (selLoan) => {
    const months = getMonthsBetween(selLoan.startDate);
    const monthlyInterest = selLoan.amount * (selLoan.rate / 100);
    const totalInterest = monthlyInterest * months;
    const totalOwned = selLoan.amount + totalInterest;
    const balance = selLoan.ledgers.reduce((sum, entry) => sum + entry.amount, 0) - totalInterest;
    const totalPaid = balance + totalOwned;
    let status = 'em aberto';
    if (balance >= 0) status = 'quitado';
    return { 
        ...selLoan, 
        months, 
        monthlyInterest, 
        totalInterest, 
        totalOwned, 
        totalPaid, 
        balance, 
        status };
};

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