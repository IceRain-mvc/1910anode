const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
  //req 接收请求
  //res 发出响应

  //req和res : 都是对象  对象特点就是可以.出很多方法
  // 包含请求过来的包含的内容
  // req.url : 接收的是 ip:端口/  后面的参数
  /*
  * / 后面没有参数
  * /1
    /add
    /register
    /favicon.ico : 图标
    /login
  * */

  let {url} = req;
  // console.log(url);
  if (url === '/') {
    //让服务器返回一个页面  首页
    // res.write('./html/test.html');
    //回调 : 同步的还是亦不得
    // 同步代码
    // setTimeout(()=>{异步代码})
    //
    fs.readFile('./html/test.html', function (err, data) {
      if (err) {
        console.log('出错了');
      } else {
        console.log(data.toString());
        res.write(data.toString());
        //这么写行不行 ????
        //write after end
        //end 代表服务器发送消息完成
        res.end();
      }
    });

  } else if (url === '/login') {
    fs.readFile('./html/login.html', function (err, data) {
      if (err) {
        console.log('读取出错');
      } else {
        //data.toString() 也能出来效果
        //服务器和浏览器之间的通信 不同toString
        res.write(data);
        res.end();
      }
    });
  } else if (url.includes('register')) {

    //服务器给客户端返回数据的时候  使用的编码 是utf-8
    //浏览器不知道 服务器是utf8 编码
    //不知道服务器编码的情况下 就会按照系统的编码去解析
    // 中文系统 -- gbk 编码
    // 英文系统 -- utf-8编码
    //解决方案 传递数据的时候  告诉浏览器 用什么编码去解析
    //res.setHeader()

    //响应头
    //Content-Type : 告诉浏览器发送的内容是什么类型
    // text/plain 发送的是一个文本
    // text/html  发送的是一个超文本
    // charset=utf8 告诉浏览器 用什么编码来解析 传递的内容
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    //只写了响应体
    res.write('<h1>注册</h1>');//乱码
    res.end();

  } else if (url === '/favicon.ico') {

  } else if (url === '/json') {
    //json
    let json = [{name: '老婆1', age: 22}, {name: '老婆2', age: 23}, {name: '老婆3', age: 24}];
    // The first argument must be one of type string or Buffer
    //参数类型 二进制类型或者 字符串类型 object:不行
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.write(JSON.stringify(json));//乱码  把别的类型转换成字符串类型
    //json
    res.end();
  } else {
    res.write('other');
    res.end();
  }
});
//ip:定位的电脑 端口号:定位一个服务器 ip+端口号
//本机 ip: localhost: 127.0.0.1:8082
// http://127.0.0.1:8082/参数
// 协议   ip地址     端口号

//每次修改代码 服务器都要重启服务
server.listen(8082, () => {
  console.log('服务器启动成功');
});