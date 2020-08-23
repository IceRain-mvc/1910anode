const {userPath} = require("../bao-utils/pathUtils");
const fs = require('fs');
module.exports = function (req, res) {

  //文件 users.json

  //参数的获取

  let buf = Buffer.alloc(0);
  let data = null;
  req.on('data', chunk => {
    buf = Buffer.concat([buf, chunk])
  });
  req.on('end', () => {
    data = buf.toString();
    let {username, password} = JSON.parse(data);
    let result = fs.readFileSync(userPath, "utf-8");
    if (!result) {
      result = [];
    } else {
      result = JSON.parse(result);
    }

    let userNameIndex = result.findIndex(item => item.username === username);
    if (userNameIndex !== -1) {
      if (result[userNameIndex].password === password) {

        res.end(JSON.stringify({msg: '登录成功', code: 1}));
      } else {
        res.end(JSON.stringify({msg: '登录失败 密码错误', code: -2}));
      }
    } else {
      res.end(JSON.stringify({msg: '登录失败 没有该用户', code: -1}));

    }
  });


};