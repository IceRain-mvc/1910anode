/*
* 如果想一并导出多个值
*   不能给exports赋值
*   就是不能 exports = {}
*
*   module:也是node提供
*   module.exports
*     可以导出多个值
*
*   module.exports = {
*     random,name, ccc
*   }
*
*   module.exports 就是 exports
*   不一样的:
*     module.exports 可以赋值
*     exports 不能赋值
*   一个文件既有 module.exports 又有exports
*   是以 module.exports 为准
*   module.exports 把exports 给覆盖掉了
*
* */



// let {random, ccc, name} = require('./b');
console.log(require('./b'));
// let number = random(20, 40);
// console.log(number);
