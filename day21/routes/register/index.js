import fs from "fs";
import {userListPath} from "../../global";

import readFileList from '../../utils/readFileList'

function register (req, res, next) {
  //1:接收请求
  //2:判断有没有这个用户 有 注册失败 没有 成功
  //3:如果成功 利用fs 修改数据

  let {username, password} = req.body;
  //和数据对比  利用fs读取数据

  //判断 userList中是否包含传递过来的username
  let userList = readFileList(userListPath);
  let userIndex = userList.findIndex(item => item.username === username);
  if (userIndex === -1) {
    let uid = Math.floor(Math.random() * 9000000) + 1000000;
    userList.push({uid, username, password});
    //存储到fs中
    fs.writeFileSync(userListPath, JSON.stringify(userList), 'utf-8');
    //注册成功
    let obj = {
      "error_code": 0,
      "data": {
        uid,
        username,
        reg_time: new Date().getTime(),
      }
    };
    res.send(obj)
  } else {
    //注册失败
    res.send({
      "error_code": -1,
      "msg": "用户名已存在"
    })
  }
}

export default register;