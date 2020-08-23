var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('￿/list', function (req, res) {
  res.send({msg: 'success'})
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.send({msg: 'success'});
});


module.exports = router;
