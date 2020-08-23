import {Router} from 'express'

let router = Router();

//导入
import {userListPath} from '../global' //只有index.js 可以省略不写

import register from './register';
import login from './login';
import changePwd from './changePwd';
import addUser from './addUser';
import getUsers from "./getUsers";



router.post('/register', register);

router.post('/login', login);

router.post('/changepwd', changePwd);

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

router.post('/addUser', addUser);
router.get('/getUsers', getUsers);

export default router;

//步骤: 先写接口文档 --> 写接口 --> 写前端测试页面 --> 写页面