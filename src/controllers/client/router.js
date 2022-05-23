const express = require('express');

const { client, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.post('/create', client.create, require('./create'));
router.get('/list', require('./list'));
router.get('/:clientId', require('./getById'));
router.put('/:clientId', require('./update'));

module.exports = router;
