const express = require('express');

const { user, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post('', require('./login'));

router.use(auth);
router.post('/create', user.create, require('./create'));
router.get('/check', require('./check'));

module.exports = router;
