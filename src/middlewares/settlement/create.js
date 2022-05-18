const { settlement } = require('../../schemas');

module.exports = (req, _res, next) => {
    const { clientId, loanToSettleIds, amount, startDate, installments, notes } = req.body;
        
    const { error } = settlement.create.validate(
        { clientId, loanToSettleIds, amount, startDate, installments, notes },
    );
    if (error) return next(error);

    next();
};