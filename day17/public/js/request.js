(function () {
  window.request = {
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
      ajax.setRequestHeader('Content-Type', 'application/json'); // 设置请求头
      ajax.send(JSON.stringify(params));
      ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
          fn && fn(JSON.parse(ajax.responseText),ajax);
        }
      }
    }
  }
})();

