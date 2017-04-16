/*
    注：
     此文件不可独立执行.
     标注【？】: 文件中未调用.
*/

var gulp = require('gulp'),
    runSequence = require('run-sequence'), //顺序执行
    gulpif = require('gulp-if'), // 有条件地运行一个任务。
    uglify = require('gulp-uglify'), // JS压缩
    less = require('gulp-less'), // 编译Less
    csslint = require('gulp-csslint'), // // css 代码检查
    minifyCss = require('gulp-minify-css'), // CSS压缩
    changed = require('gulp-changed'),
    jshint = require('gulp-jshint'), // JS代码检查
    stylish = require('jshint-stylish'),
    rev = require('gulp-rev'), // 对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'), // 路径替换（配合模块 gulp-rev 一起使用）
    minifyHtml = require('gulp-minify-html'), // html压缩
    autoprefixer = require('gulp-autoprefixer'), // 自动为css添加浏览器前缀
    clean = require('gulp-clean'), // 清空文件夹
    del = require('del'); // 清理生成文件

    // 指定需要处理的源文件的路径。
var cssSrc = ['main.less', 'layer-box.less', 'tag.less'],
    // 指定处理完后文件输出的路径。
    cssDest = '../server/static/css',

    jsSrc = 'src/js/*.js',
    jsDest = '../server/static/js',

    fontSrc = 'src/fonts/*',
    fontDest = '../server/static/font',

    imgSrc = ['src/images/*', 'src/images/**/*', 'src/images/**/**/*'],
    imgDest = '../server/static/images',

    cssRevSrc = 'src/css/',
    condition = true;
// 【？】
function changePath(basePath) {
    var nowCssSrc = [];
    for (var i = 0; i < cssSrc.length; i++) {
        nowCssSrc.push(cssRevSrc + '/' + cssSrc[i]);
    }
    return nowCssSrc;
}
// 清空图片、样式、js 【？】
gulp.task('clean', function () {
    gulp.src(['../server/static/js/*.js', '../server/static/images', '../server/static/css/*.css'])
        .pipe(clean({ force: true }));
});
//Fonts & Images 根据MD5获取版本号
gulp.task('revFont', function () {
    return gulp.src(fontSrc)
        .pipe(rev())
        .pipe(gulp.dest(fontDest))
        .pipe(rev.manifest())
        .pipe(gulp.dest('src/rev/font'));
});
gulp.task('revImg', function () {
    return gulp.src(imgSrc) // 输入
        .pipe(rev()) // 文件名加MD5后缀
        .pipe(gulp.dest(imgDest)) // 输出
        .pipe(rev.manifest()) // 生成一个rev-manifest.json
        .pipe(gulp.dest('src/rev/img')); // 将 rev-manifest.json 保存到 rev 目录内
});


//检测JS 【？】
gulp.task('lintJs', function () {
    return gulp.src(jsSrc)
        //.pipe(jscs())   //检测JS风格
        .pipe(jshint({
            "undef": false, // 所有的非全局变量，在使用前必须都被声明
            "unused": false // 所有的变量必须都被使用
        }))
        //.pipe(jshint.reporter('default'))  //错误默认提示
        .pipe(jshint.reporter(stylish))   //高亮提示
        .pipe(jshint.reporter('fail'));
});

//压缩JS/生成版本号
gulp.task('miniJs', function () {
    return gulp.src(jsSrc)
    // gulpif(falg, action() )只要 flag 为true时，才会将 action() 添加到stream中去
        .pipe(gulpif(
            condition, uglify() // 压缩 js 文件
        ))
        .pipe(rev()) // 文件名加MD5后缀
        .pipe(gulp.dest(jsDest)) // 输出文件到目的地
        .pipe(rev.manifest())  // 生成一个 rev-manifest.json
        .pipe(gulp.dest('src/rev/js')); // 将 rev-manifest.json 保存到 rev 目录内
});

//CSS里更新引入文件版本号
gulp.task('revCollectorCss', function () {
  // 读取 rev-manifest.json 文件以及需要进行css名替换的文件
    return gulp.src(['./src/rev/**/*.json', './src/css/*.css'])
        // gulp-rev-collector进行文件路径替换是依据 rev-manifest.json 的，
        // 所以要先成生 .json 文件，然后再进行替换；
        .pipe(revCollector())  // 执行文件内css名的替换
        .pipe(gulp.dest(cssDest));
});

//检测CSS 【？】
gulp.task('lintCss', function () {
    return gulp.src(cssSrc)
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(csslint.failReporter());
});


//压缩/合并CSS/生成版本号
gulp.task('miniCss', function () {
    return gulp.src('src/less/*.less')
        .pipe(less()) // 编译 less
        .pipe(minifyCss()) // 压缩 css
        .pipe(rev()) // 文件名加MD5后缀
        .pipe(gulp.dest(cssRevSrc)) // 输出
        .pipe(rev.manifest()) // 生成一个 rev-manifest.json
        .pipe(gulp.dest('src/rev/css')); // 将 rev-manifest.json 保存到 rev 目录内
});

// 压缩Html/更新引入文件版本
gulp.task('miniHtml', function () {
    return gulp.src(['./src/rev/**/*.json', './src/*.html']) // 输入
        .pipe(revCollector()) // 执行文件内 js & css 和 html 替换
        .pipe(gulp.dest('../server/views')); // 输出
});


//正式构建 【？】
gulp.task('build', function (done) {
    runSequence(
        ['clean'],
        ['revFont', 'revImg'],
        ['miniCss'],
        ['revCollectorCss'],
        ['miniJs'],
        ['miniHtml'],
        done);
});


gulp.task('font_img', function (done) {
  // run-sequence 顺序执行任务
  // 圆括号里面串行执行，中括号里面并行执行
    runSequence(
        ['revFont', 'revImg', 'miniCss'],
        ['revCollectorCss'],
        ['miniHtml'],
        done);
})

gulp.task('css', function (done) {
    runSequence(
        ['miniCss'],
        ['revCollectorCss'],
        ['miniHtml'],
        done);
})

gulp.task('js', function (done) {
    runSequence(
        ['miniJs'],
        ['miniHtml'],
        done);
})

gulp.task('html', function (done) {
    runSequence(
        ['miniHtml'],
        done);
})

// 默认执行任务（运行 gulp 执行）
gulp.task('default', function () {
  // 监听文件，并且可以在文件发生改动时候做一些事情 (执行回调函数)
    gulp.watch('src/*.html', function () {
      // gulp.run 方法的作用是运行gulp任务。
        gulp.run('html');
    })
    gulp.watch(['src/images/*', 'src/images/**/*', 'src/images/**/**/*'], function () {
        gulp.run('font_img');
    })
    gulp.watch('src/js/*.js', function () {
        gulp.run('js');
    })
    gulp.watch('src/less/*.less', function () {
        gulp.run('css');
    })
})
