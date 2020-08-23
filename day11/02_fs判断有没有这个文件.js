const fs = require('fs');

//node 自带的模块 回调都是异步
//提供了很多同步的方法 +Sync

// fs.readFile();
// fs.writeFile();

//Sync 同步
//stat 对象

//报错了 用try catch捕获错误 能够保证程序不出错
try {
  let stat = fs.statSync('/static/aa.js');
  console.log(stat.isFile()); // 是不是一个文件
  console.log(stat.isDirectory()); // 是不是一个文件
}catch (e) {
  console.log('出错了',e.message);//e.message : ENOENT: no such file or directory, stat './staticq/'
}