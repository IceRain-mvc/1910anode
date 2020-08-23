console.log('Am B');

var foo = 'bbb';
var name = '小三';
// console.log(foo);
let {ccc} = require('./c.js');
// console.log('b模块:', foo);

let fn = () => {
};

// exports.name = name;
exports.ccc = ccc;
// exports.ccc = fn;
// //默认 都会导出东西
// //没有在exports中添加值
// //默认会导出空对象 {}
//
// exports.random =
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);

}

// console.log(module.exports === exports);
//exports 不能赋值
module.exports ={
  random,name
};
// exports =