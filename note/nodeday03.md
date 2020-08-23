[toc]

# es6面向对象

## 什么是面向对象

机器语言->汇编语言->低级语言(面向过程)->高级语言(面向对象)->框架->api

面向对象 : 把一些公共的东西封装起来 , 通过new出来的对象直接调用就行

## 面向对象的知识点-call

### 类和构造函数

```js

```

### call 是什么

```js

```

### call的应用-类型判断

```js
/*
* 所以 对于类型检测 最好采用下面方式:
* */
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);

const isArray = isType("Array");
const isObject = isType("Object");
const isRegExp = isType("RegExp");
const isNull = isType("Null");
console.log(isArray({}));
```

### call的应用 - 继承

```js

```

## 面向对象的知识点-prototype

### prototype的本质

```js

```

### es5实现完整的继承

```js

```

## es6的面向对象

```js

```

### es6继承

```js

```

## 面向对象-小球案例

```js

```

