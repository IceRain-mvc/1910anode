// var a = 20;

//自执行函数(匿名函数) 函数名字 只读 a的值本身不能改变 但是可以添加属性
// (function a() {
//   a.ccc = 111;
//   console.log(a.ccc);//a函数
// })();

// function b() {
//   b = 10;
//   console.log(b);
// }
// b();

(function () {
  window.$request = {
    createAjax(type, url, params = null) {
      let ajax = new XMLHttpRequest();
      ajax.open(type, url, true);
      ajax.setRequestHeader('Content-Type', 'application/json');
      ajax.send(params);//JSON.stringify'{}'
      return ajax;
    },
    getPromise(url = '') {//同步的方式调用
      return new Promise((resolve, reject) => {
        let ajax = this.createAjax('GET', url);
        this.getResult(ajax, resolve, reject);
      })
    },
    postPromise(url = '', params = {}) {
      return new Promise((resolve, reject) => {
        let ajax = this.createAjax('POST', url, JSON.stringify(params));
        //成功
        this.getResult(ajax, resolve, reject);
      })
    },
    getResult(ajax, resolve, reject) {
      //应用层 http https
      //协议层 tcp
      //网络层 数据包
      //数据链路层 电脑网卡
      //物理层  网线
      ajax.onload = function () {
        //成功的回调
        if (ajax.status === 200) {//只有服务器状态码是200的时候 才会真正成功
          try {
            resolve(JSON.parse(ajax.responseText));// 'assdafsd'出错  {aaa:123}:成功
          } catch (e) {
            reject(ajax.responseText);//解析json数据报错的时候
          }
        } else if (ajax.status === 500) {
          reject('服务器错误')
        } else if (ajax.status === 404) {
          reject('404');
        } else {
          reject('未知错误');
        }
      };
      ajax.onerror = function () {
        //失败的回调
        reject('出错了');
      }
    }
    //let res = await $request.getPromise();
  }
})();



