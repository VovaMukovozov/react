var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream')


gulp.task('bundle', ['copy'], function(){
    return browserify({
        entries:'app/main.jsx',
        debug:true
    })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.temp'))
});

gulp.task('copy',function(){
    gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.temp'))
});

gulp.task('serve',['bundle'],  function(){
    browserSync.init(null,{
        proxy:"http://localhost/react_test/app",
        port:3000
    });

    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/*.js").on('change', browserSync.reload);
    gulp.watch("app/*.css").on('change', browserSync.reload);

});