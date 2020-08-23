
// 把es6的模块化 全部转换成 commonjs的模块化机制
require('@babel/register')({
  plugins: ['@babel/plugin-transform-modules-commonjs']
});

//引入了index.js文件 相当于执行了index.js文件
require('./index.js');
//@babel/plugin-transform-modules-commonjs

//这个是入口文件

new Promise(resolve => {

});