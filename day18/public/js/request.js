(function () {
  window.$request = {
    createAjax(type, url) {
      let ajax = new XMLHttpRequest();
      ajax.open(type, url, true);
      return ajax;
    },
    //地址  回调
    get(url, fn) {
      let ajax = this.createAjax('GET', url);
      ajax.send(null);//兼容性 传递null
      ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
          fn && fn(JSON.parse(ajax.responseText),ajax);
        }
      }
    },
    //地址  请求体  回调
    post(url, params, fn) {
      let ajax = this.createAjax('POST', url);
      // ajax.send(JSON.stringify(params));
      //将当前的数据以json的形式发送过去
      ajax.setRequestHeader('Content-Type', 'application/json'); // 设置请求头
      ajax.send(JSON.stringify(params));
      ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
          //回调 : 传过来的函数 执行的时候 回传过去一些参数
          fn && fn(JSON.parse(ajax.responseText),ajax);
        }
      }
    }
  }
})();

