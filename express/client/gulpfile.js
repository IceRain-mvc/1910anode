const gulp = require('gulp');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const uglyfly = require('gulp-uglyfly');
const fs = require('fs');
const path = require('path');
const postcss = require('gulp-postcss');
const minCss = require('gulp-css');

// 常量

const src = 'src'; // 前端开发的源码目录
const dist = '../server/public'; // 打包完生成的目录
const distName = 'app'; // 打包完生成的目录名
const pagesName = 'pages'; // 包裹所有页面的目录名，必须紧跟在src目录下

// 转码 es6 to es5
function es6to5() {
  return gulp.src(src + '/**/*.js').pipe(babel({presets: ['@babel/env']})).pipe(gulp.dest('es5'));
}

// clean es5
function cleanEs5() {
  return gulp.src('es5').pipe(clean());
}

// clean app
function cleanApp(cb) {
  if (!fs.existsSync('./' + dist + '/' + distName)) {
    cb();
    return;
  }
  return gulp.src(dist + '/' + distName).pipe(clean({force: true}));
}

// 打包js

function browserifyJs() {
  return gulp.src('es5/' + pagesName + '/*/index.js').pipe(browserify()).pipe(uglyfly()).pipe(gulp.dest(`${dist}/${distName}/${pagesName}`))
}

// copy all file not css js
function copyNotcssjs() {
  return gulp.src(src + '/**/*.!(js|css)').pipe(gulp.dest(`${dist}/${distName}`))
}

// 合并,压缩，加前缀css
function concatCss(cb) {
  let dirs = fs.readdirSync(path.join(__dirname, './' + src + '/' + pagesName));
  let cssjsons = dirs.map(item => {
    let p = path.join(__dirname, src + '/' + pagesName, item, 'css.json');
    return {
      dir: `${dist}/${distName}/${pagesName}/` + item,
      cssPaths: JSON.parse(fs.readFileSync(p))
    }
  });
  cssjsons.forEach((obj) => {
    gulp.src(obj.cssPaths)
      .pipe(concat('index.css'))
      .pipe(postcss([
        require('autoprefixer')({
          overrideBrowserslist: ['last 10 version']
        })
      ]))
      .pipe(minCss())
      .pipe(gulp.dest(obj.dir));
  });
  cb();
}

const js = gulp.series(es6to5, browserifyJs, cleanEs5); // 组合js对应的任务
const resTask = gulp.parallel(js, concatCss, copyNotcssjs);
const build = gulp.series(cleanApp, resTask);

// 实时更新

function dev() {
  build();
  gulp.watch('src/**', build)
}

module.exports = {build, dev};