import fs from "fs";
import {userListPath} from "../../global";

function changePwd (req, res, next) {
  let {uid, username, oripassword, newpassword} = req.body;
  //fs查找用没有这个用户
  //如果有  判断原始密码 和userList中密码 是否一致
  //一致 : 修改 原始密码变成 新密码
  //不一致 : 不修改

  let userList = fs.readFileSync(userListPath, 'utf-8');
  if (!userList) {
    userList = [];
  } else {
    userList = JSON.parse(userList);
  }

  let userNameIndex = userList.findIndex(item => item.username === username);
  if (userNameIndex !== -1) {
    if (userList[userNameIndex]['password'] === oripassword) {
      userList[userNameIndex]['password'] = newpassword;

      //数据写到 fs中

      fs.writeFileSync(userListPath, JSON.stringify(userList), 'utf-8');
      //可以修改
      res.send({
        "error_code": 0,
        "data": {
          msg: '修改成功'
        }
      })

    } else {
      //不可修改
      res.send({
        "error_code": -1,
        "data": {
          msg: '修改失败'
        }
      })
    }
  } else {
    //不可修改
    res.send({
      "error_code": -1,
      "data": {
        msg: '修改失败'
      }
    })
  }

}

export default changePwd;