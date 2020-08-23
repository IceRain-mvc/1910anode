const fs = require('fs');

function isFile(p) {
  try{
    //stat对象 用来判断是不是文件或者文件夹  /static/aaa.aaa
    let stat = fs.statSync(p);
    return stat.isFile()
  }catch (e) {
    console.log(e.message);
  }
  return false;

}


function isDirectory(p) {
  try{
    let stat = fs.statSync(p);
    return stat.isDirectory()
  }catch (e) {
    console.log(e.message);
  }
  return false;
}

module.exports = {
  isFile, isDirectory
};