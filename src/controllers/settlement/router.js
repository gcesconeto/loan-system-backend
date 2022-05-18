const express = require('express');

const { settlement, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.post('/create', settlement.create, require('./create'));
router.get('/list/:clientId', require('./listByClient'));
router.get('/list', require('./list'));

module.exports = router;
