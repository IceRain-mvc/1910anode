import express from 'express';
import apiRouter from './routes/apiRouter';

let path = require('path');

let app = express();

app.use(express.json());

app.use(express.urlencoded());//form

app.use(express.static(path.join(__dirname, './public')));//静态资源文件

//路由 访问 /api/home
app.use('/api', apiRouter);

app.listen(3005, () => `server running at http://localhost:3005`);