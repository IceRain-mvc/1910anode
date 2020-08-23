let http = require('http');
let url = require('url');
const {handleStaticFile} = require("./bao-utils/handleStatic");
const isStaticFile = require("./bao-utils/pathUtils");
const qs = require('querystring');


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

  let requestUrl = req.url;//   /login
  console.log(req.method);//前端的请求方式  POST   GET
  //post请求 放在请求体中
  //GET 请求 路径在浏览器的地址拼接 ?username=111&password=222&verification=333
  //处理的是接口
  //获取form表单请求过来的参数
  //Buffer池 管理二进制
  let buf = Buffer.alloc(0);
  let data = null;
  //1:接收请求的时候 监听 回调:只要请求数据 就走这个回调  有可能请求的内容比较多 就会多次走这个回调
  //接收的是post请求的数据  ajax
  req.on('data', (chunk) => {//二进制-->拼接起来
    buf = Buffer.concat([buf, chunk]);
  });
  //2:接收完成的监听  前端向服务器传递完数据就走这个回调
  req.on('end', () => {//拼接完了
    console.log('222');
    //参数接收完了  buf拼接完的二进制
    data = buf.toString();//可以识别的字段
    console.log(data); //username=beiyu&password=123456&verification=123456

    let {username,password,verification} = qs.parse(data);
    //前端向服务器发送过来的数据
    console.log(username, password, verification);
    //存起来 请求  /login
  });

  let json = [{msg: "我有1个老婆"}];
  res.end(JSON.stringify(json));

});
let port = 8080;
server.listen(port, () => {
  console.log(`server is running port is ${port}`);
});

