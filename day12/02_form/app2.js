let http = require('http');
let url = require('url');
const {handleStaticFile} = require("./bao-utils/handleStatic");
const isStaticFile = require("./bao-utils/pathUtils");
const apis = require('./apis/index');
let fs = require('fs');



const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf8'
  });

  //req.url // /  /test.html
  //1 : 根据路径判断是不是静态资源  req.url
  //2 : 如果是静态资源 静态资源 分类 .css 根据不同的分类 设置不同的响应头
  //3 : 如果资源存在 读取这个资源  path fs
  //4 : 如果不存在 返回 404

  //如果请求的不是静态资源 /json  /api
  //返回一个json数据

  //后面: form  ajax...

  let {pathname} = url.parse(req.url);
  // 判断是不是静态资源文件 带不带 .
  let flag = isStaticFile(pathname);
  if (flag) {
    handleStaticFile(pathname, res);
    return;
  }
  //fn&&fn() fn方法存在就执行这个方法
  let fn = apis[`${req.url} ${req.method}`];
  fn && fn(req,res);
  if (!fn) {
    res.writeHead(404,'not found', {
      'Content-Type': 'text/html;charset=utf8'
    });
    let page404 =  fs.readFileSync('./static/404.html');
    res.end(page404)
  }

});
let port = 8080;
server.listen(port, () => {
  console.log(`server is running port is ${port}`);
});

