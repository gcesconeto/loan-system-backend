const express = require('express');

const { loan, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.post('/create', loan.create, require('./create'));
router.get('/list', require('./list'));

module.exports = router;
