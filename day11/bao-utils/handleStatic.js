const {handleContentType} = require("./typeUtils");
const {isFile} = require("./fsUtils");
const fs = require('fs');
const path = require('path');
//static 关键字
const staticPath = './static';

function handleStaticFile(pathname,res) {
  if (pathname === '/favicon.ico') {
    res.end('');
    return;
  }
  //静态资源
  //console.log('静态资源');
  //静态资源文件 分类 截取pathname .后面的值
  let type = pathname.slice(pathname.lastIndexOf('.') + 1);
  console.log(type);
  handleContentType(type, res);
  //读取文件
  // 1: url   /test.html   从siatic里面找
  // 2: 拼接成完整路径 ./static/test.html  path.join()
  // 3: 判断有没有这个文件 有 : 读取出来 没有: 返回一个404

  // 相对路径
  let p = path.join(staticPath, pathname);//   /static/img/a.jpeg
  //有没有这个文件
  if (isFile(p)) {
    //是一个文件 开始读取 文件中的数据
    let data = fs.readFileSync(p);
    //数据返回给浏览器
    res.end(data);
  } else {
    //返回404
    res.writeHead(404,'not found',{
      'Content-Type': 'application/json;charset=utf8'
    });
    res.end(JSON.stringify({message: 'not found'}));
  }
}

module.exports = {
  handleStaticFile
};