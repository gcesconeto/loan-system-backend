const { ledger } = require('../../schemas');

module.exports = (req, _res, next) => {
    const { loanId = null, date, amount } = req.body;
        
    const { error } = ledger.create.validate({ loanId, date, amount });

    if (error) return next(error);

    next();
};