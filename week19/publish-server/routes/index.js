var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.post('/', function (req, res, next) {
  // req.on('data', (chunk) => {
  //   console.log(req);
  //   console.log(chunk);
  // })
  fs.writeFileSync(`../server/public/${req.query.filename}`, '');
  // console.log(123);
  // res.render('index', { title: 'Express' });
  res.setHeader('OK', 200);
  res.end();
});

module.exports = router;
