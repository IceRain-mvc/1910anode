import message from './A';

message.setMessage('a', {name: 'wang', msg: 'Hello', date: '2020-03-20'});
message.setMessage('b', {name: 'li', msg: 'Hello too', date: '2020-03-20'});
message.setMessage('b', {name: 'li', msg: 'Hello wang', date: '2020-03-20'});
message.setMessage('b', {name: 'li', msg: 'Hello xiaowang', date: '2020-03-20'});
message.setMessage('b', {name: 'li', msg: 'Hello wangwangwang', date: '2020-03-20'});
message.setMessage('a', {name: 'wang', msg: 'Hello too too', date: '2020-03-20'});


let res = message.getMessage('a');
let resB = message.getMessage('b');
console.log(res);
console.log(resB);
