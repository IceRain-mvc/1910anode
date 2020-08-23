import obj,{aaa,bbb,a,animal} from './components';

class Person {

  constructor(props = {name:'无名氏', age: 20}) {
    let {name, age} = props;
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.name, this.age);
  }

}

aaa();
bbb();
let {nickName, girlFriends} = obj;
console.log(nickName, girlFriends);
animal.say();
// console.log();//报错 是因为 node中不支持 es6的模块化
// console.log(bbb());
console.log(a);

new Promise(resolve => {

});
async function abc() {
  await new Promise((resolve, reject) => {})
}
new Person({name: '小洸', age: 20}).say();


