const {staticFilePath} = require('./pathUtils');
const handleContentType = require('./typeUtils');
const fs = require('fs');
const {isFile} = require('./fsUtils');
const path = require('path');



function handleStaticFile(pathname,res) {
  if (pathname === '/favicon.ico') {
    res.end('');
    return;
  }

  console.log('静态资源');

  //1:处理静态资源类型 处理不同的响应头
  let type = pathname.slice(pathname.lastIndexOf('.') + 1);

  handleContentType(type,res);

  //2:根据pathname 传过来的路径 读取文件
  let p = path.join(staticFilePath, pathname);
  //3:有没有这个文件 如果有 读取 没有 返回404
  if (isFile(p)) {
    let data = fs.readFileSync(p, 'utf-8');
    res.end(data);
  } else {
    //404
    //设置响应头
    res.writeHead(404, 'not found', {
      'Content-Type': 'application/json;charset=utf8'
    });
    res.end(JSON.stringify({msg: 'not found'}))
  }
}

module.exports = handleStaticFile;