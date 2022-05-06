const express = require('express');

const { ledger, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.post('/create', ledger.create, require('./create'));
router.get('/list', require('./list'));
router.get('/balance', require('./balance'));

module.exports = router;
