const path = require('path');
function isStaticFile(pathname) {// /  /包含.
  return pathname.indexOf('.') !== -1;
}

const staticFilePath =path.join(__dirname, '../public');
const userPath = path.join(__dirname, '../datacenter/user.json');


module.exports = {isStaticFile, staticFilePath,userPath};