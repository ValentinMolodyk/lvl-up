var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');


gulp.task('default', function () {
    gulp.src('./css/*.css')
        .pipe(prefix("last 1 version", "> 1%", "ie 9", "ie 10", { cascade: false }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('less', function () {
     gulp.src('./less/start.less')
        .pipe(less())
         .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'), {cascade: false})
        .pipe(gulp.dest('./css'));

});


// Watcher
gulp.task('watch', function() {
    gulp.run('less');

    gulp.watch('less/**/*.less', function() {
        gulp.run('less');
    });
});
gulp.task('default', ['watch']);



