'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'); //处理sass
var prefixer = require('gulp-autoprefixer'); //css兼容性前缀
var csso = require('gulp-csso'); //压缩css
var replace = require('gulp-replace'); //配置文件修改
var babel = require('gulp-babel');  // 配置babel编译es6

var watch = require('gulp-watch');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var sftp = require('gulp-sftp');

var runSequence = require('run-sequence');
var del = require('del');

var configPath = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        fonts: 'build/fonts/',
        img: 'build/img/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/**/**',
        fonts: 'src/fonts/**',
        style: 'src/scss/**',
        img: 'src/img/**'
    },
    watch: {
        html: 'src/*.html',
        js: 'src/js/**/**',
        style: 'src/scss/**',
        img: 'src/img/**'
    }
};

/***************** webserver *****************/
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8008,
    logPrefix: "oujizeng"
};
gulp.task('webserver', function() {
    browserSync.init(config);
});

/**************** build start ******************/

gulp.task('html:build', function() {
    return gulp.src(configPath.src.html)
        .pipe(replace('{version}', new Date().getTime()))
        .pipe(gulp.dest(configPath.build.html))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('js:build', function() {
    return gulp.src([configPath.src.js, '!src/js/libs/**'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(configPath.build.js));
        //为什么不能加reload，加了之后就会有些文件拷贝不进去
});

gulp.task('fonts:build', function() {
    return gulp.src(configPath.src.fonts)
        .pipe(gulp.dest(configPath.build.fonts));
});

gulp.task('style:build', function() {
    return gulp.src(configPath.src.style)
        .pipe(sass({
            includepaths: ['src/scss/'],
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        // 一定要加error，防止直接gulp watch中段不往下执行
        .on('error', sass.logError)
        .pipe(prefixer())
        .pipe(csso())
        .pipe(gulp.dest(configPath.build.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('image:build', function() {
    return gulp.src(configPath.src.img)
        .pipe(gulp.dest(configPath.build.img))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('clean', function() {
    return del(['build/js/page/common.js']);
});

gulp.task('config', function(){
    return gulp.src(['src/js/page/common.js'])
        .pipe(replace('https://api.bshapp.cn/v1/', 'https://api.tinstone-course.com/v1/'))
        .pipe(gulp.dest('build/js/page/'));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('release', function(done) {
    runSequence(
        ['html:build'],
        ['js:build'],
        ['style:build'],
        ['fonts:build'],
        ['image:build'],
        ['clean'],
        ['config'],
    done);
});

/**************** build end ******************/

gulp.task('watch', function() {
    watch([configPath.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([configPath.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([configPath.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([configPath.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
});

gulp.task('default', ['watch', 'build', 'webserver']);


/**************** upload **********************/

gulp.task('ftpDevelop', function() {
    return gulp.src('build/**')
        .pipe(sftp({
            host: '139.129.62.160',
            user: 'root',
            port: '22',
            pass: 'Tin$t0ne',
            remotePath: '/home/active/'
        }));
});
