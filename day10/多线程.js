let fs = require('fs');
setTimeout(() => {
  console.log(1)
}, 0);
setTimeout(() => {
  console.log(2)
}, 1);
setTimeout(() => {
  console.log(3)
}, 2);
setInterval(() => {


  setTimeout(() => {
    console.log(1)
    fs.readFile('./笔记.txt',()=>{
      setTimeout(() => {

      }, 1);
    })
  }, 0);
  setTimeout(() => {
    console.log(2)
    fs.readFile('./笔记.txt',()=>{
      setTimeout(() => {

      }, 1);
    })
  }, 1);
  setTimeout(() => {
    console.log(3)
    fs.readFile('./笔记.txt',()=>{
      setTimeout(() => {

      }, 1);
    })
  }, 2);
}, 1000);

