
/*
* 1. 引入进来
* */
const fs = require('fs');


//相对路径
// 同级 ./
// 上一级 ../
// 上一级的上一级 ../../
//2: 读取一个文件  fs.readFile('读取文件所在的目录',回调)
//.txt .js .md  .excel
fs.readFile('./note.txt',function (error,data) {
  //error : 如果读文件 出错了  error就会变成错误对象
  //{ [Error: ENOENT: no such file or directory, open './note1.txt']
  //   errno: -2,
  //   code: 'ENOENT',
  //   syscall: 'open',
  //   path: './note1.txt' }
  //   如果不出错 : error 就是 null
  if (error) {
    console.log('读取出错');
  } else {
    console.log('读取成功');
    /*
    * 二进制 : 计算机之间都是通过二进制通信的
    * 只要涉及到文件 基本都是二进制形式  010101
    * 把二进制 通过16进制的方式来显示
    * <Buffer 0a 0a e5 9b 9e e9 a1 be 3a 0a 20
    * 20 6e 6f 64 65 3a 0a 20 20 20 20 6a 61 76 61 73 63 72
    * 69 70 74 e7 9a 84 e8 bf 90 e8 a1 8c e7 8e af e5 a2 83 0a 20 20 ... >
    * */
    console.log(data.toString());//转换成文本 咱们能识别的语言
  }
  // console.log(error);
});
//参数一 : 文件写到哪里
// no such file or directory
//writeFile 不会创建文件夹  只操作文件 以及文件的内容

let hello = '## 我是file文件夹的内容';
fs.writeFile('./file/file.md', hello, function (error) {
  console.log(error);//error如果出错就会变成错误对象 没出错 就是null
});
