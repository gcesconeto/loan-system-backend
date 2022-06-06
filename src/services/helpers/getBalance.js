module.exports = (ledger) => {
  const processedLedger = ledger.map((entry) => entry.toJSON());
  let credit = 0;
  let debit = 0;
  // const balance = processedLedger.reduce((sum, entry) => sum + entry.amount, 0);
  processedLedger.forEach((entry) => {
    if (entry.amount > 0) {
      credit += entry.amount;
    } else {
      debit += entry.amount;
    }
  });
  const balance = credit + debit;
  return balance;
};