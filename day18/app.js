import express from 'express';

import data from './datacenter/data';

import path from 'path';

import fs from 'fs';

// 创建express 实例
const app = express();

//1:设置静态资源目录
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './static')));

//json
app.use(express.json());

//表单请求
app.use(express.urlencoded());//post  {}

//接收请求 get post

app.get('/list', function (req, res) {
  let {pageSize} = req.query;
  console.log(pageSize);
  //data = [1, 2, 3];//read-only data是只读属性 不能修改
  let msg = {msg: 'get请求成功', code: 1, data};
  res.send(msg)
});


app.post('/login', function (req, res) {
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

app.get('/getList', function (req, res) {

  let data = fs.readFileSync(path.join(__dirname, './datacenter/data.json'), 'utf-8');

  let msg = {msg: '商品列表', code: 1, data: JSON.parse(data)};
  res.send(msg)
});

app.post('/buy', function (req, res) {

  //let data = fs.readFileSync(path.join(__dirname, './datacenter/data.json'), 'utf-8');
  let {params} = req.body;
  console.log(params);
  let msg = {msg: '购买商品成功', code: 1 ,params};
  res.send(msg)
});




app.listen(9999);


