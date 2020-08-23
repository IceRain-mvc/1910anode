class Animal {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log('animal 中的 name:', this.name);
  }

}

//node :
// module.exports = Animal;

//es6:导出 export 关键字

//export  后面可以导出两种类型的数据
// 第一种:{}
// 完整的表达式 变量 / 函数 类
let animal = new Animal('小花');

function aaa() {
  console.log('conponents 中的 aaaa')
}

export function bbb() {
  console.log('conponents 中的 bbbb')

}

export {aaa, animal};
export let a = 10;

let obj = {
  nickName: '渣渣',
  girlFriends: 10
};

export default obj



