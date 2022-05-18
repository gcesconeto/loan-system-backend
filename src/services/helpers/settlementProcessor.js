const getMonths = require('./getMonths');

module.exports = (settl) => {
  const months = getMonths(settl.startDate);
  const monthlyPayment = settl.amount / settl.installments;
  const balance = settl
    .ledgers.reduce((sum, entry) => sum + entry.amount, 0) - settl.amount;
  const totalPaid = settl.amount + balance;
  const ownedToDate = months * monthlyPayment;
  const monthsDelayed = Math.floor((ownedToDate - totalPaid) / monthlyPayment);
  let status = 'em atraso';
  if (monthsDelayed <= 0) status = 'em dia';
  if (balance >= 0) status = 'quitado';
  return { 
      ...settl, 
      months,
      monthlyPayment,
      monthsDelayed,
      totalPaid, 
      balance, 
      status };
};