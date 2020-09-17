const express = require('express');
const router = express.Router();
const { Product } = require('../models');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    let data = await Product.create({
      name: 'token',
      sku: 'sd001',
    });
    console.log('data', data);
    res.reply({
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
