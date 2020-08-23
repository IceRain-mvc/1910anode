import { LoginLogPath } from '../global'
import { readFile } from '../util'
import url from 'url'

const whiteList = [ // 白名单，不参加验证
  {pathname: '/user/login', method: 'POST'},
  {pathname: '/user/rigister', method: 'POST'}
];
export default (req, res, next) => {
  // 跳过白名单接口
  let pathname = url.parse(req.url).pathname;
  let method = req.method;
  let windex = whiteList.findIndex(item => item.pathname === pathname && item.method === method);
  if (windex !== - 1) {
    next();
    return;
  }
  // 进行验证
  let rs = req.get('rs');
  let logs = readFile(LoginLogPath);
  let index = logs.findIndex(item => item.rs === rs);
  if (index === -1) {
    res.send({ code: 0, msg: '没有登录' });
    return;
  }
  next();
}