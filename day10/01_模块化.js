
/*
* 怎么引入模块的
* require 是一个方法
*   作用:用来加载模块的
*   node中有3中模块
*   1:node里面的核心模块 : fs http  url  path  querystring os ...
*   2:自己的模块 必须要加上相对路径
*   3:第三方模块 下载 包管理器 npm  node_modules  require('模块名字')
*
*   html : 变量污染问题
*   CommonJS 模块化机制中
*     作用:模块作用域
*
*   exports:可以关联模块和模块之间的数据
*     默认是一个空对象
*     没有在exports中导出值
*     默认会导出exports(空对象) {}
*
*   注意 引入某一个模块的时候 如果是.js结尾的可以省略.js
* */
var foo = 'aaa';
console.log('Am a');
//加载自己的模块
let {name, ccc} = require('./b.js');
// console.log(require('./b.js'));
console.log('a模块:', foo);
console.log(name, ccc);//name is not defined

console.log(exports);

