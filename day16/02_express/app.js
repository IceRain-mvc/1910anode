// 服务器的入口文件
// let express = require('express');
//1:创建一个express对象
import express from 'express';
import path from 'path';
//2:app对象  是express的实例对象
const app = express();//静态资源  json数据
//3:app对象. 方法  记住3个
// 万能方法 处理静态资源
//找到地方放静态资源  .html .css .js
app.use(express.static(path.join(__dirname, './public')));
// json数据  JSON.stringify()
app.use(express.json());//把所有需要用JSON.xxx处理的结果都自动处理了

app.use(express.urlencoded());//用来处理form表单的请求

//get
app.get('/get', function (req, res) {
  //req.body  获取的是post 请求的参数
  //req.query 获取get请求的参数
  //req.method 获取请求的方法
  //req.originalUrl : 请求的地址
  //req,res和node中的req,res 本质上是一样的
  /*
  * res.redirect()  重定向
    res.render()    渲染一个页面  'html'
    res.send()      和node中的res.end/res.write是一样的
  * */
  console.log(req.query);//get请求的参数
  let {name, like} = req.query;
  console.log(req.method);//get请求的参数
  res.send({msg:'hello Am get', code: 1,name, like})
});
app.post('/post/center', function (req, res) {


});


app.listen(3000);