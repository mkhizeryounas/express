var express = require('express');
var router = express.Router();
const db = require('../config/db');
const locker = require('../src/modules/locker');
/* GET home page. */
router.get('/', async function(req, res, next) {
  res.reply({ data: { title: 'Express Boilerplate with Actions' } });
});

module.exports = router;
