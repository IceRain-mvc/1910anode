import express from 'express';

import data from './datacenter/data';

import path from 'path';

import fs from 'fs';
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


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
//路由: 不是路由器的路由  请求地址的 路径 /list

//服务器的封装
//第一步: 根据不同的路径指定不同的功能的路由
//第二步: 为了维护起见 把不同功能的路由放在不同文件中
//第三步: 新建 routes 文件夹 存放不同功能的文件

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.get('/user/list', function (req, res) {
//   let {pageSize} = req.query;
//   console.log(pageSize);
//   //data = [1, 2, 3];//read-only data是只读属性 不能修改
//   let msg = {msg: 'get请求成功', code: 1, data};
//   res.send(msg)
// });
//
//
// app.post('/users/login', function (req, res) {
//   let {username, password} = req.body;//
//   console.log(username, password);
//   if (username === 'zhang' && password === '123') {
//     let msg = {msg: '登录成功', code: 1};
//     res.send(msg);
//   } else {
//     let msg = {msg: '登录失败', code: -1};
//     res.send(msg);
//   }
// });
//
// app.get('/list/getList', function (req, res) {
//
//   let data = fs.readFileSync(path.join(__dirname, './datacenter/data.json'), 'utf-8');
//
//   let msg = {msg: '商品列表', code: 1, data: JSON.parse(data)};
//   res.send(msg)
// });
//
// app.post('/list/buy', function (req, res) {
//
//   //let data = fs.readFileSync(path.join(__dirname, './datacenter/data.json'), 'utf-8');
//   let {params} = req.body;
//   console.log(params);
//   let msg = {msg: '购买商品成功', code: 1 ,params};
//   res.send(msg)
// });




app.listen(9999);


