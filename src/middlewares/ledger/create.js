const { ledger } = require('../../schemas');

module.exports = (req, _res, next) => {
    const { loanId = null, settlementId = null, date, amount } = req.body;
        
    const { error } = ledger.create.validate({ loanId, settlementId, date, amount });

    if (error) return next(error);

    next();
};