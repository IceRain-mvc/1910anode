const fs = require('fs');
const path = require('path');

const pageName = process.argv[2];
let pagePath = path.join(__dirname, '../src/pages', pageName);
// 判断页面是否存在
if (fs.existsSync(pagePath)) {
  throw new Error('页面' + pageName + '已经存在');
}

// 创建页面目录

fs.mkdirSync(pagePath);

// 创建 test.html
let html = fs.readFileSync(path.join(__dirname, './template/test.html'), 'utf-8');
fs.writeFileSync(path.join(pagePath, 'test.html'), html, 'utf-8');

// 创建index.css
fs.writeFileSync(path.join(pagePath, 'index.css'), '', 'utf-8');
// 创建index.js
fs.writeFileSync(path.join(pagePath, 'index.js'), '', 'utf-8');
// 创建css.json
let json = [
  './src/pages/' + pageName + '/index.css'
]
fs.writeFileSync(path.join(pagePath, 'css.json'), JSON.stringify(json), 'utf-8');

