const express = require('express');

const { user, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post('', require('./login'));

router.use(auth);
router.post('/create', user.create, require('./create'));

module.exports = router;
