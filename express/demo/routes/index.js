var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('￿/list', function (req, res) {
 res.send({msg: 'success'})
});
router.post('￿/login', function (req, res) {
  let {username, password} = req.body;//
  console.log(username, password);
  if (username === 'zhang' && password === '123') {
    let msg = {msg: '登录成功', code: 1};
    res.send(msg);
  } else {
    let msg = {msg: '登录失败', code: -1};
    res.send(msg);
  }
});
module.exports = router;
