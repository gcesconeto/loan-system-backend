const { loan } = require('../../schemas');

module.exports = (req, _res, next) => {
    const { clientId, amount, startDate, paymentDate, rate } = req.body;
        
    const { error } = loan.create.validate({ clientId, amount, startDate, paymentDate, rate });

    if (error) return next(error);

    next();
};