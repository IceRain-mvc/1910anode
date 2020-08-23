let express = require('express');
let path = require('path');
let app = express();

// import indexRouter from './routes/indexRouter';
let indexRouter = require('./router/indexRouter');
// 解析不了post 里面的参数
// let bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());//处理json数据  JSON.parse
app.use(express.urlencoded({ extended: false }));//用来处理form表单的请求  ?name=123&aaa=123 ==> {name:123}

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

//req.body  获取的是post 请求的参数
//req.query 获取get请求的参数
//req.method 获取请求的方法
//req.originalUrl : 请求的地址
//req,res和node中的req,res 本质上是一样的
/*
* res.redirect()  重定向
  res.render()    渲染一个页面  'html'
  res.send()      和node中的res.end/res.write是一样的
* */

app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// app.get('/list', (req, res,next) => {
//   next();
// });
// app.post('/login', (req, res) => {
//   // let {username, password} = req.body;
//   console.log(req);
//   // if (username === 'zhang' && password === '123') {
//   //   res.send({code: 1, msg: '登录成功'});
//   // } else {
//   //   res.send({code: -1, msg: '登录失败'});
//   // }
// });

app.use((req, res) => {
  res.send({code: 404})
});


app.listen(3000);

