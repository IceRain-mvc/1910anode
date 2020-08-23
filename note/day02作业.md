1. 打印结果

```js
var obj = {
  value:0,
  fn:function(){
    var f = function(){
      this.value ++
    }
    f();
  }
}
obj.fn();
console.log(obj.value);

```

2. 使用剪头函数改进上述代码 使之每次调用value都增加
3.  编写并打印结果

```js
let obj = {
    fn:function(){
        console.log('我是普通函数',this === obj)
        return ()=>{
            console.log('第一个箭头函数',this === obj)
            return ()=>{
                console.log('第二个箭头函数',this === obj)
                return ()=>{
                    console.log('第三个箭头函数',this === obj)
                }
            }
        }
    }
}
console.log(obj.fn()()()())

```



4. 打印结果并解释为啥

```js
let obj = {
    fn:()=>{
        console.log(this === window);
    }
}

console.log(obj.fn())

```

5. 预习题 call 、apply和 bind 

```js
window.name = 'window_name';

let f1 = function(){return this.name}
let f2 = ()=> this.name

let obj = {name:'obj_name'}

f1.call(obj) // ?
f2.call(obj) // ?

f1.apply(obj) // ?
f2.apply(obj) // ?

f1.bind(obj)() // ?
f2.bind(obj)() // ?
```

7. 输出结果

```js
function foo(n) {
  var f = () => arguments[0] + n;
  return f();
}

let res = foo(2);

console.log(res); // 问 输出结果
```

8. 输出结果

```js
function A() {
  this.foo = 1
}

A.prototype.bar = () => console.log(this.foo)

let a = new A()
a.bar() // 问 输出结果
```

9. 填空

```js
var object = {}
object.__proto__ ===  ????填空1????  // 为 true

var fn = function(){}
fn.__proto__ === ????填空2????  // 为 true
fn.__proto__.__proto__ === ????填空3???? // 为 true

var array = []
array.__proto__ === ????填空4???? // 为 true
array.__proto__.__proto__ === ????填空5???? // 为 true

Function.__proto__ === ????填空6???? // 为 true
Array.__proto__ === ????填空7???? // 为 true
Object.__proto__ === ????填空8???? // 为 true

true.__proto__ === ????填空9???? // 为 true

Function.prototype.__proto__ === ????填空10???? // 为 true
```

9 答案

```js
1.object.__proto__ === Object.prototype
2.fn.__proto__ === Function.prototype
3.fn.__proto__.__proto__ === Function.prototype.__proto__
4.array.__proto__ === Array.prototype
5.array.__proto__.__proto__ === Array.prototype.__proto__
6.Function.__proto__ === Function.prototype
7.Array.__proto__ === Function.prototype
8.Object.__proto__===Function.prototype
9.true.__proto__ === Boolean.prototype
10.Function.prototype.__proto__ === Object.prototype
```

10.

```js
var fun = function(){}
fun.prototype = {
  info : {
    name : 'peter',
    age : 25
  }
}
var a = new fun();
var b = new fun();
a.info.name = 'jack';
b.info.name = 'tom';
console.log(a.info.name);   
console.log(b.info.name);   
```

11.转换成模板字符串

```js
var a = 20;
var b = 10;
var c = "JavaScript";
var str = "My age is " + (a + b) + " and I love " + c;
console.log(str);
```

