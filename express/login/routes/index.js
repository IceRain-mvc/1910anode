var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login', function(req, res, next) {
  let {username, password} = req.body;
  console.log(username, password);
  res.send({code: 1});
});



module.exports = router;
