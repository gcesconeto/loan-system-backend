const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/client', require('./client/router'));
root.use('/loan', require('./loan/router'));
root.use('/settlement', require('./settlement/router'));
root.use('/login', require('./user/login'));
root.use('/ledger', require('./ledger/router'));

module.exports = root;