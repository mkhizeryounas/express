var express = require("express");
var router = express.Router();
const db = require("../config/db");
const locker = require("../src/locker");
/* GET home page. */
router.get("/", locker.unlock, async function(req, res, next) {
  res.reply({ data: { title: "Express" } });
});

module.exports = router;
