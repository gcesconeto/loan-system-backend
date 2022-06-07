const getMonths = require('./getMonths');

module.exports = (selLoan) => {
  const months = getMonths(selLoan.startDate);
  const monthlyInterest = selLoan.amount * (selLoan.rate / 100);
  const totalInterest = monthlyInterest * months;
  const totalOwned = selLoan.amount + totalInterest;
  const balance = selLoan.ledgers.reduce((sum, entry) => sum + entry.amount, 0) - totalInterest;
  const totalPaid = balance + totalOwned;
  let status = 'em dia';
  if (balance >= 0) status = 'quitado';
  else if (selLoan.settlementId) status = 'acordo';
  else if (totalInterest - totalPaid > monthlyInterest) status = 'em atraso';
  return { ...selLoan, 
      months, 
      monthlyInterest, 
      totalInterest, 
      totalOwned, 
      totalPaid, 
      balance, 
      status };
};