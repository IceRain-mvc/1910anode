/*
* 判断是不是一个目录  fs
* content-type
* 求情的时候 很多种方法  get post
* 响应的类型 json格式 静态资源
* */

const http = require('http');
const fs = require('fs');
const url = require('url');
const {fileType} = require('./module/filetype');

//node 中自带了一些关于地址处理的模块
const server = http.createServer((req, res) => {
  /*req.url : 获取请求的路径*/
  /*console.log(req.statusCode); */
  // res.setHeader() : 只是用于设置响应头

  // let {url} = req;
  // console.log(url);
  //作用 解析 地址中是否含有参数
  // console.log();

  let type = fileType(req, res);// 把静态资源 和 json数据分开
  if (type !== 1) {
    res.writeHead(200, {
      'Content-Type': 'application/json;charset=utf8'
    });

    //json数据
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        msg: `我有${i}个老婆`
      })
    }
    res.end(JSON.stringify(arr));
  }


  //search 和 query 作用差不多  获取参数
  //pathname: 不带参数的地址 不带?
  //pathname  href  path

  //200 成功 404 :没有找到
  //Content-Type
  //  text/plain : 文本
  //  text/html : 超文本
  //  application/json : json格式的数据
  //  image/* : 图片资源
  // res.writeHead(404, 'not found xxxx', {
  //   'Content-Type': 'application/json'
  // });
  // let json = {msg: 'sorry'};
  //
  // res.end(JSON.stringify(json));
  /*
  * 请求的路径
  * */


});

server.listen(8888, () => {
  console.log('server running port is 8888');

});


