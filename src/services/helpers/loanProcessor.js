/* eslint-disable max-lines-per-function */
const getMonths = require('./getMonths');

const getLastPaymentDate = (ledgers) => ledgers.sort((e1, e2) => e2.date - e1.date)[0].date;

const calculateLoan = (loan, toLastPayment) => {
  const monthlyInterest = loan.amount * (loan.rate / 100);
  let months = getMonths(loan.startDate);
  if (toLastPayment) {
    const lastPaymentDate = getLastPaymentDate(loan.ledgers);
    months = getMonths(loan.startDate, lastPaymentDate);
  }
  const totalInterest = monthlyInterest * months;
  const totalOwned = loan.amount + totalInterest;
  const balance = loan.ledgers.reduce((sum, entry) => sum + entry.amount, 0) - totalInterest;
  const totalPaid = balance + totalOwned;
  return {
    months, 
    monthlyInterest, 
    totalInterest, 
    totalOwned, 
    totalPaid, 
    balance, 
  };
};

module.exports = (selLoan) => {
  let res = calculateLoan(selLoan, true);
  let status = 'em dia';
  // console.log(res);
  if (res.balance <= 0) {
    res = calculateLoan(selLoan, false);
    if (selLoan.settlementId) status = 'acordo';
    else if (res.totalInterest - res.totalPaid > res.monthlyInterest) status = 'em atraso';
  } else status = 'quitado';

  return { 
    ...selLoan, 
    ...res, 
    status,
  };
};