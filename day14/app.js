
/*
* 搭建一个服务器
* */
const http = require('http');
const {isStaticFile,staticFilePath} = require('./bao-utils/pathUtils');//自己的包 包含路径
const handleStaticFile = require('./bao-utils/staticUtils');//自己的包 包含路径
const apis = require('./apis/apis');

//针对文件的处理
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
  /*
  * 默认设置响应头
  * */
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8'
  });
  let {pathname} = url.parse(req.url);
  // 访问根路径  /  返回首页  === /login.html
  if (pathname === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    });
    let data = fs.readFileSync(staticFilePath + '/login.html', 'utf-8');
    //二进制
    res.end(data);
    return;
  }

  /*
  * 判断是不是静态资源 /  /xxx.html  /api  /login
  * */
  if (isStaticFile(pathname)) {
    /*
    * 如果是  处理静态资源
    * */
    handleStaticFile(pathname, res);
    return;
  }

  // /login POST
  let fn = apis[`${pathname} ${req.method}`];

  fn && fn(req, res);

  if (!fn) {
    res.writeHead(404, 'not found', {
      'Content-Type': 'application/json;charset=utf-8'
    });

    res.end(JSON.stringify({msg: '404'}));
  }
}).listen(3000, () => {
  console.log('server is running port is 3000');
});


