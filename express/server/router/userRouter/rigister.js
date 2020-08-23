import { userPath } from '../../global'
import { readFile, writeFile } from '../../util'
export default (req, res, next) => {
  // 获取前端数据
  const { username, password } = req.body;
  // 读取所有的用户
  let users = readFile(userPath);
  // 验证用户名是否重复
  let usernameIndex = users.findIndex(item => item.username === username);
  if (usernameIndex !== -1) {
    res.send({ code: 0, msg: `用户名重复，${username}已经被使用` })
    return;
  }
  // 存储注册信息
  users.push({ username, password });
  // 写入数据中心
  writeFile(userPath, users);
  res.send({ code: 1, msg: '注册成功' });
}