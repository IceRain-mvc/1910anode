
// 封装ajax请求
// 试用用于任何请求方法
// 可以传递请求数据
// 保证数据类型（MIMIE）正确
// 正确处理响应数据

const request = {
  createAjax() {
    return new XMLHttpRequest();
  },
  decode(obj) {
    let arr = [];
    for (let i in obj) {
      arr.push(`${i}=${obj[i]}`);
    }
    return arr.join('&')
  },
  get(url, query, fn) {
    if (typeof query === 'function') {
      fn = query;
      query = {};
    }
    // 处理参数
    let strQuery = this.decode(query);
    if (strQuery) {
      url = url + '?' + strQuery;
    }
    let ajax = this.createAjax();
    ajax.open('GET', url, true);
    ajax.send(null);
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        let response = null;
        let ct = ajax.getResponseHeader('Content-Type');
        if (ct === 'application/json') {
          response = JSON.parse(ajax.responseText);
        } else {
          response = ajax.responseText
        }
        fn && fn(response, ajax);
      }
    }
  },
  post(url, body, fn) {
    if (typeof body === 'function') {
      fn = body;
      body = {};
    }
    body = JSON.stringify(body);
    let ajax = this.createAjax();
    ajax.open('POST', url, true);
    ajax.setRequestHeader('Content-Type', 'application/json'); // 设置请求头
    ajax.send(body);
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        let response = null;
        let ct = ajax.getResponseHeader('Content-Type');
        if (ct === 'application/json') {
          response = JSON.parse(ajax.responseText);
        } else {
          response = ajax.responseText
        }
        fn && fn(response, ajax);
      }
    }
  }
}
export default request;
