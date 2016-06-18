/**
 * Created by Administrator on 2016/6/17.
 */
var gulp = require('gulp'),
    reactify=require('reactify'),
    source=require('vinyl-source-stream'),//处理文件流
    browserify=require('browserify');

gulp.task('merge',function(){
    return browserify('./js/comLayout.js')//jsx//将任务交给browserify处理
        .transform(reactify)//jsx------>js reactify
        .bundle()//将入口文件依赖的全部读入通过bundle合并
        .pipe(source('app.js'))//将合并后的文件起名app.js
        .pipe(gulp.dest('app'))

});

gulp.task('default',function(){
   gulp.start('merge')
});
