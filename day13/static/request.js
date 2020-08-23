(function () {
  //自执行函数
  // console.log('111');

  //针对ajax的封装
  //适用于任何请求方法
  //可以传递请求数据
  //数据能被调用方拿到


  //request.get()
  //request.post()

  const request = {
    createAjax(type,url) {
      let ajax = new XMLHttpRequest();
      ajax.open(type, url, true);
      return ajax
    },

    get(url, fn) {
      //1:创建ajax对象
      let ajax = this.createAjax('GET', url);
      //3:发送请求 get请求 send不需要内容的
      ajax.send();
      //4:监听结果
      ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
          //直接可以 .xxx
          let response = null;

          try {//尝试执行这段代码
            response = JSON.parse(ajax.responseText);//
          } catch (e) {//如果出错 就会走catch代码块  不会报错
            response = ajax.responseText;
          }
          //如果传递回调 则执行这个回调 null 没有出错
          fn && fn(response, ajax);
        }
      };
      // ajax.onerror = function (e) {
      //   fn && fn({errMessage: '404'}, null, ajax);
      // }

    },
    //params 请求体
    post(url,params,fn) {
      //1:创建ajax对象

      let ajax = this.createAjax('POST',url)

      //3:发送请求
      // post请求 ajax.send(params);就需要写参数
      // 参数是字符串
      ajax.send(JSON.stringify(params));//现在传递的是 对象  应该传递的是字符串

      //4:监听结果
      ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
          //直接可以 .xxx
          let response = null;

          try {//尝试执行这段代码
            response = JSON.parse(ajax.responseText);//
          } catch (e) {//如果出错 就会走catch代码块  不会报错
            response = ajax.responseText;
          }
          //如果传递回调 则执行这个回调 null 没有出错
          fn && fn(response, ajax);
        }
      };
    }
  };

  window.request = request;

  //request.get()
  //request.post()

})();
