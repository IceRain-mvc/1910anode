import express from 'express'
import path from 'path'
import userRouter from './router/userRouter'
import checkLoginStatus from './middlewares/checkLoginStatus'
const app = express();

app.use(express.static(path.join(__dirname, './public')))
app.use(express.json());
app.use(express.urlencoded());

// 验证接口是否有权限访问

app.use(checkLoginStatus)

// 管理路由（api）

app.use('/user', userRouter);


// 响应404

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, './view/404.html'));
});


app.listen(3002, () => `server had run at http://localhost:3000`)
