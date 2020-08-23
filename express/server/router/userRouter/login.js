import { userPath, LoginLogPath } from '../../global'
import { readFile, writeFile, randomString } from '../../util'

export default (req, res, next) => {
  // 获取前端数据
  const { username, password } = req.body;
  // 读取所有的用户
  let users = readFile(userPath);
  // 验证用户名是否存在
  let usernameIndex = users.findIndex(item => item.username === username);
  if (usernameIndex === -1) {
    res.send({ code: 0, msg: `用户名不存在，${username}尚未注册` })
    return;
  }
  // 验证密码是否正确
  if (password !== users[usernameIndex].password) {
    res.send({ code: 0, msg: `密码错误` });
    return;
  }
  // 根据该用户名生成一个随机数
  let rs = randomString(username);
  // 记录登录凭证
  let logs = readFile(LoginLogPath);
  logs.push({ rs, username });
  writeFile(LoginLogPath, logs);
  res.send({ code: 1, msg: '登录成功', rs });
}