import readFileList from "../../utils/readFileList";
import {addUserListPath} from "../../global";
import fs from "fs";

function addUser(req, res, next) {
  //1:接收请求
  //2:判断有没有这个用户 有 注册失败 没有 成功
  //3:如果成功 利用fs 修改数据

  let {username, img,phone} = req.body;
  //和数据对比  利用fs读取数据

  //判断 userList中是否包含传递过来的username
  let addUserList = readFileList(addUserListPath);
  let userIndex = addUserList.findIndex(item => item.username === username);
  if (userIndex === -1) {
    addUserList.push({img, username, phone});
    //存储到fs中
    fs.writeFileSync(addUserListPath, JSON.stringify(addUserList), 'utf-8');
    //添加成功
    let obj = {
      "error_code": 0,
      "msg": "添加成功"
    };
    res.send(obj)
  } else {
    //添加失败
    res.send({
      "error_code": -1,
      "msg": "该已存在"
    })
  }

}

export default addUser