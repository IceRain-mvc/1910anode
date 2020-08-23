import request from '../../commons/js/request';
request.get('/app/commons/html/hw.html', (html) => {
  document.getElementById('header').innerHTML = html;
});
document.getElementsByTagName('p')[0].innerHTML = '世界，你好'