const fs = require('fs');
const url = require('url');
function fileType(req,res) {
  let {pathname} = url.parse(req.url);

  //判断获取的是什么资源
  // 如果路径中包含 . 代表请求的是一个静态资源

  //判断有没有.

  // 客户端向服务器 发送什么地址 代表想请求什么样的资源
  if (pathname.lastIndexOf('.') !== -1) {
    let type = pathname.slice(pathname.lastIndexOf('.') + 1);
    //res.setHeader()
    if (type === 'png') {
      res.writeHead(200, {
        'Content-Type': 'image/png'
      });
      //响应头 image/png
      res.end('https://inews.gtimg.com/newsapp_match/0/3930960584/0');
      return
    }
    //fs模块
    let data;
    if (type === 'html') {
      res.writeHead(200, {//html css js
        'Content-Type': 'text/html'
      });
      data = fs.readFileSync('./static/test.html');//同步:通过返回值拿到结果
    } else if (type === 'css') {
      res.writeHead(200, {//html css js
        'Content-Type': 'text/css'
      });
      data = fs.readFileSync('./static/index.css');//同步:通过返回值拿到结果
    }
    res.write(data);
    res.end();
    return 1;
  }

  return 0;
}

module.exports = {
  fileType
};