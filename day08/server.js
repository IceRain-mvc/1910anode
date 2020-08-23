

// node 机制: 模块化
// 代码 大卸八块  用到哪一块  就引入哪一块
// 声明一个模块  define  require

// AMD CMD CommonJS  es6中的模块

// node 中用到模块化是 CommonJs
// 如果想要引入一个模块 require('模块的地址')
// node自带模块  require('http')  require('fs')
// 第三方模块  1:下载 npm 2:引入 require('swiper')
// 自己的模块 require('./a.js')  require('../../b.js')


const http = require('http');//http对象

//当做服务器:
//1: 接收请求  request  是对象
//2: 给出响应  response 是对象

//http.createServer: 创建服务的方法
//response:响应
const server = http.createServer(function (req, res) {
  res.write('yhhk789');//给客户端(浏览器)回应
  res.write('<h1>Im coding</h1>');//给客户端(浏览器)回应
  //  正常的服务器 始终等待用户请求
  // finished 关闭
  res.end();
});

//监听  3724
// 80 浏览器默认的端口
// 3306 服务器
// 8080 : 买了一个房子 门牌号  1024 - 65535
server.listen(8080);//finished 一直在运营

//创建服务器的目的 等待客户端访问 // 地址:端口
// http://localhost : 代表的就是本机地址
// localhost:8080

