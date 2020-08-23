let http = require("http");
let fs = require('fs');
let path = require('path');
let indexHtmlPath = path.join(__dirname, '/static/test.html');
let requestJsPath = path.join(__dirname, '/static/request.js');
let userCenterPath = path.join(__dirname, '/datacenter/user.json');
let qs = require('querystring');
http.createServer((req, res) => {
  if (req.url === '/test.html') {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    });
    let data = fs.readFileSync(indexHtmlPath, 'utf-8');
    res.end(data);
  }

  if (req.url === '/request.js') {
    res.writeHead(200, {
      'Content-Type': 'application/javascript;charset=utf-8'
    });
    let data = fs.readFileSync(requestJsPath, 'utf-8');
    res.end(data);
  }


  if (req.url === '/login') {//接口地址 : 返回的是json数据

    /*
    * res.writeHead() : 没得到想要的效果的时候 写一个响应头
    * */

    res.writeHead(200, {
      'Content-Type': 'application/json;charset=utf8'
    });

    let buf = Buffer.alloc(0);//创建一个Buffer池

    req.on('data', (chunk) => {
      buf = Buffer.concat([buf, chunk]);
    });

    req.on('end', function () {
      let data = buf.toString();

      //有问题
      // 以前是怎么解析的?
      // name='123'&age=20
      // console.log(data);//{"name":"张三","age":20}

      //qs 一般处理的是from 的请求

      let {name, password} = JSON.parse(data);
      // console.log(name, age);

      let users = fs.readFileSync(userCenterPath, 'utf-8');
      //users ==> 字符串
      if (!users) {
        users = [];
      } else {
        users = JSON.parse(users);
      }

      let userNameIndex = users.findIndex(item => item.username === name);

      if (userNameIndex !== -1) {
        //判断密码
        if (users[userNameIndex].password === password) {
          //密码正确
          //登录成功
          res.end(JSON.stringify({msg: '登录成功', code: 1}));

        } else {
          res.end(JSON.stringify({msg: '密码不对', code: -2}));
        }
      } else {
        //登录失败了
        res.end(JSON.stringify({msg: '没有此用户', code: -1}));
      }

    });

    // res.end(JSON.stringify({msg: '你好 欢迎你', code: 1}));
  }


}).listen(8080, () => {
  console.log('server is running port is 8080');
});