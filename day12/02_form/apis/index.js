let qs = require('querystring');
let fs = require('fs');
let path = require('path');

const apis = {
  '/register POST': function (req, res) {
    //注册的逻辑
    let buf = Buffer.alloc(0);
    let data = null;
    req.on('data', chunk => {
      buf = Buffer.concat([buf, chunk]);
    });
    req.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf8'
      });
      data = buf.toString();

      let {username, password, verification} = qs.parse(data);
      //如果注册成功  存起来
      //第二次再注册  先判断有没有这个用户名  如果有 用户名冲突  没有的话 注册成功 并且存起来
      //fs 模拟
      //数据库

      //先读取数据
      let usersPath = path.join(__dirname, '../datacenter/user.json');
      let users = fs.readFileSync(usersPath, 'utf-8');
      //判断数据中有没有这个username
      if (!users) {
        users = [];
      } else {
        users = JSON.parse(users);
      }
      let usernameIndex = users.findIndex(item => item.username === username);
      //用户名冲突
      if (usernameIndex !== -1) {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=utf8'
        });
        //{msg:'用户名重复',code:0}
        res.end(JSON.stringify({msg: '用户名重复', code: 0}));
        return
      }
      users.push({username, password, verification});
      fs.writeFileSync(usersPath, JSON.stringify(users), 'utf-8');
      //[{},{}]
      //如果没有 就push进去
      //如果有 告诉前端 冲突了
      res.end(JSON.stringify({username, password, verification}));
    });
  },
  '/login POST': function (req, res) {
    //登录的逻辑
    let buf = Buffer.alloc(0);
    let data = null;
    req.on('data', (chunk) => {
      buf = Buffer.concat([buf, chunk]);
    });
    req.on('end', () => {
      data = buf.toString();
      res.end(JSON.stringify(data));
    });
  }
};

module.exports = apis;