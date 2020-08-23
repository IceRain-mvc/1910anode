const fs = require('fs');
const {userPath} = require("../bao-utils/pathUtils");

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
    console.log(username, password);

    //接下来?
    //取出 user.json文件中的数据  undefined  []
    // 判断 内容 有没有值
    // 如果有值 默认读取到的是字符串


    let result = fs.readFileSync(userPath, "utf-8");

    //undefined  []
    if (!result) {
      result = [];
    } else {
      result = JSON.parse(result);
    }

    let userNameIndex = result.findIndex(item => item.username === username);
    if (userNameIndex !== -1) {
      res.end(JSON.stringify({msg: '用户名重复了 换一个', code: -1}));
    } else {
      //注册逻辑
      let random = Math.floor(Math.random() * 90000 + 10000);
      result.push({id: random,username, password});
      //写入文件
      fs.writeFileSync(userPath, JSON.stringify(result), 'utf-8');
      res.end(JSON.stringify({msg: '注册成功', code: 1}));
    }
  });

  //读取这个文件
  //判断有没有这个人
  //如果有 用户名重复
  //注册成功


  //注册的逻辑

};