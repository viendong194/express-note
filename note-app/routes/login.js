var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  if(req.body.userName) {
    req.session.user = {name: req.body.userName};
    res.redirect('../');
  } else {
    var err = '入力が正しくありません。確認して再入力してください。';
    res.render('login', {error: err});
  }
});

module.exports = router;