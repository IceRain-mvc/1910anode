import fs from "fs";
import {userListPath} from "../../global";
import readFileList from "../../utils/readFileList";

function login(req, res, next) {
  //1:接收请求过来的参数
  //2:从fs里面读取userList
  //3:判断userList 有没有此用户
  //4:有 判断密码 密码正确 登录成功 错误 登录失败
  //5:没有 登录失败

  let {username, password} = req.body;

  let userList = readFileList(userListPath);

  let userNameIndex = userList.findIndex(item => item.username === username);
  if (userNameIndex !== -1) {
    if (userList[userNameIndex]['password'] === password) {
      //登录成功
      res.send({
        "error_code": 0,
        "data": {
          "uid": userList[userNameIndex]['uid'],
          username
        }
      });
    } else {
      //登录失败
      res.send({
        "error_code": -1,
        msg: '登录失败'
      });
    }
  } else {
    res.send({
      "error_code": -1,
      msg: '登录失败'
    });
  }


}

export default login;