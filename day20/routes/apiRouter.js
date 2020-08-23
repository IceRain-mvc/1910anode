import {Router} from 'express'
import fs from 'fs';

let router = Router();

//导入
import {userListPath} from '../global' //只有index.js 可以省略不写



router.post('/register', function (req, res, next) {
  //1:接收请求
  //2:判断有没有这个用户 有 注册失败 没有 成功
  //3:如果成功 利用fs 修改数据

  let {username, password} = req.body;
  //和数据对比  利用fs读取数据
  let userList = fs.readFileSync(userListPath, 'utf-8');
  console.log(userList);
  if (!userList) {
    userList = [];
  } else {
    userList = JSON.parse(userList)
  }
  //判断 userList中是否包含传递过来的username

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
});

router.post('/login', function (req, res, next) {
  //1:接收请求过来的参数
  //2:从fs里面读取userList
  //3:判断userList 有没有此用户
  //4:有 判断密码 密码正确 登录成功 错误 登录失败
  //5:没有 登录失败

  let {username, password} = req.body;

  let userList = fs.readFileSync(userListPath, 'utf-8');

  if (!userList) {
    userList = [];
  } else {
    userList = JSON.parse(userList);
  }
  console.log(typeof userList);

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


});

router.post('/changepwd', function (req, res, next) {
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

});

router.post('/publish', function (req, res, next) {
  //1:接收参数
  //2:新建一个新的文件 moodList.json
  //3:用户名存在么 ? 如果存在 写入数据 moodList 多了一条  [{username:'',msg:'心情'}]
  //4:告诉前端 写成功了还是失败了

});

router.get('/moodlist', function (req, res, next) {
  // next()//继续执行第二个/home
  //读取moodlist.json
  //fs moodList.json 获取数据 返回给客户端

});

export default router;

//步骤: 先写接口文档 --> 写接口 --> 写前端测试页面 --> 写页面