class Message {
  constructor() {
    this.msgObj = {
      // 'a': [{ name: 'wang', msg: 'Hello', date: '2020-03-20' },]
      // 'a':[{ name: 'wang', msg: 'Hello', date: '2020-03-20' },...]
      // 'b':[{ name: 'li', msg: 'Hello wang', date: '2020-03-20' },...]
    };
  }

  setMessage(key, obj) {//a b
    //设置值
    if (!this.msgObj[key]) {
      this.msgObj[key] = [];
    }
    this.msgObj[key].push(obj);// 'push' of undefined
  }

  getMessage(key) {
    //得到值
    return this.msgObj[key];
  }
}

let mg = new Message();
export default mg;
