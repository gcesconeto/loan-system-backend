module.exports = (ledger) => {
  const processedLedger = ledger.map((entry) => entry.toJSON());
  const balance = processedLedger.reduce((sum, entry) => sum + entry.amount, 0);
  return balance;
};