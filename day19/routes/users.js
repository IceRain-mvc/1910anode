//创建一个环境 接收请求的
//1: 导入express
//2: 通过express 生成 路由对象

//1.导入express
// import express from 'express';
// import data from "../datacenter/data";
let {Router} = require('express');
//2.通过express 生成 路由对象
let router = Router();
let data = require('../datacenter/data');
//3. routes.get  或者 routes.post  作用相当于 app.get app.post
router.get('/list', (req, res) => {
  let {pageSize} = req.query;
  console.log(pageSize);
  //data = [1, 2, 3];//read-only data是只读属性 不能修改
  let msg = {msg: 'get请求成功', code: 1, data};
  res.send(msg)
});



router.post('/login', function (req, res, next) {
  let {username, password} = req.body;
  console.log(username, password);
  res.send({code: 1});
});

// router.post('￿/login', function (req, res, next) {
//  ￿ let {username, password} = req.body;
//   ￿￿￿￿￿￿￿￿console.log(username, password);
//   res.send({code: 1});
// });￿


module.exports = router;


// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
//
// router.post('/login', function(req, res, next) {
//   let {username, password} = req.body;
//   console.log(username, password);
//   res.send({code: 1});
// });
// // export default router;
// module.exports = router;
