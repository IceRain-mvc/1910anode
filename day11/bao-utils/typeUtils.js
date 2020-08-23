function handleContentType(type, res) {
  switch (type) {
    case 'html':
      //处理html的响应头
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
      });
      break;
    case 'css':
      //处理css的响应头
      res.writeHead(200, {
        'Content-Type': 'text/css;charset=utf8'
      });
      break;
    case 'js':
      //处理js的响应头
      res.writeHead(200, {
        'Content-Type': 'application/javascript;charset=utf8'
      });
      break;
    case 'png':
      //处理png的响应头
      res.writeHead(200, {
        'Content-Type': 'image/png;charset=utf8'
      });
      break;
    case 'jpg':
      //处理jpg的响应头
      res.writeHead(200, {
        'Content-Type': 'image/jpeg;charset=utf8'
      });
      break;
    case 'gif':
      //处理gif的响应头
      res.writeHead(200, {
        'Content-Type': 'image/gif;charset=utf8'
      });
      break;
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
      });
  }

}

module.exports = {
  handleContentType
};