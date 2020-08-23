import fs from 'fs'
// 读取文件的方法
export function readFile(filePath) {
  let json = fs.readFileSync(filePath, 'utf-8');
  if (!json) {
    json = '[]'
  }
  return JSON.parse(json);
}
// 写入文件
export function writeFile(filePath, data) {
  if (typeof data !== 'string') {
    data = JSON.stringify(data);
  }
  fs.writeFileSync(filePath, data, 'utf-8')
}
// 生成随机字符串的方法

export function randomString(str) {
  let arr = [];
  // 把字符串变成16进制
  for (let i in str) {
    arr.push(str.charCodeAt(i))
  }
  arr = arr.map(item => item.toString(16));
  // 打乱数组
  arr = arr.sort(() => Math.random() * 100 - 50);
  return arr.join('');
}

randomString('zhangsan');