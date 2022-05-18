const getMonths = require('./getMonths');

module.exports = (settl) => {
  const months = getMonths(settl.startDate);
  const monthlyPayment = settl.amount / settl.installments;
  const balance = settl
    .ledgers.reduce((sum, entry) => sum + entry.amount, 0) - settl.amount;
  const totalPaid = settl.amount + balance;
  let status = 'em atraso';
  if ((totalPaid / months) > monthlyPayment) status = 'em dia';
  if (balance >= 0) status = 'quitado';
  return { 
      ...settl, 
      months,
      monthlyPayment,
      totalPaid, 
      balance, 
      status };
};