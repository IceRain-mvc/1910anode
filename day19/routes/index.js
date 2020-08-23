//创建一个环境 接收请求的
//1: 导入express
//2: 通过express 生成 路由对象

//1.导入express
// import express from 'express';
let express = require('express');

// import data from "../datacenter/data";
let data = require('../datacenter/data');
//2.通过express 生成 路由对象
let router = express.Router();
//3. routes.get  或者 routes.post  作用相当于 app.get app.post
router.get('/list', (req, res) => {
  let {pageSize} = req.query;
  let msg = {msg: 'get请求成功', code: 1, data};
  res.send(msg)
});

// routes.get('/aaa', (req, res) => {
//   let {pageSize} = req.query;
//   console.log(pageSize);
//   //data = [1, 2, 3];//read-only data是只读属性 不能修改
//   let msg = {msg: 'get请求成功', code: 1, data};
//   res.send(msg)
// });

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

//4.routes 导出

module.exports = router;

