const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {

  //querystring  用来解析参数
  let message = qs.parse(req.url);
  let {name, age} = message;
  console.log(name, age);
  //参数 : 前端请求传过来的  应该在页面上发送请求

  /*
  * 前端请求的方式
  * 1:浏览器 地址栏
  * 2:web里面的一些标签  img src  link href  a href  script src
  * 3:form 表单 和后台交互
  *   请求方式
  *   get请求 :
  *   post
  *   put
  *   delete
  *   option
  *   head
  *   ....
  *
  * */




  //1: 解决错误的能力
  //2: 学习能力
  //3: 沟通能力
  res.end();// 参数的格式 : ?键=值&键=值&键=值

});

server.listen(8080,()=>{
  console.log('server running port is 8080');
});