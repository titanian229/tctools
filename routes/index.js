const express = require('express');
const search = require('./search');
const api = require('./api');

const router = express.Router();

router.get('/', search.page);

router.get('/api/search/:search', api.search);

module.exports = router;
