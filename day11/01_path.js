
//path node中自带的模块 : 作用就是用来处理路径

const path = require('path');

console.log(path.join('/static', 'test.html'));//   /static/test.html
console.log(path.join('/static','/dir', '/test.html'));//   /static/dir/test.html
console.log(path.join('/static','/dir', './test.html'));//   /static/dir/test.html
console.log(path.join('/static','/dir', '../test.html'));//   /static/test.html
console.log(path.join('/static','/dir', '../test.html'));//   /static/dir/../test.html ===> /static/test.html
console.log(path.join('/static','/dir', '/test.html'));//  /static/test.html

//相对路径  从当前目录找  找到相对的路径
//绝对路径  从磁盘根目录找 找到当前文件的路径

//  /Users/sairitsutakara/project/web/node/classcode/node/day11
//  C:/sairitsutakara/project/web/node/classcode/node/day11
//  __dirname: 魔法变量 : 获取绝对路径
console.log(__dirname);//  /static/test.html
console.log(path.join(__dirname,'/static','/test.html'));//  /static/test.html