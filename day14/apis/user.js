const fs = require('fs');
const {userPath} = require('../bao-utils/pathUtils')

module.exports = function (req, res) {
  //用户列表的逻辑

  let data = fs.readFileSync(userPath, 'utf-8');
  if (!data) {
    data = [];
  }
  res.end(data);


};