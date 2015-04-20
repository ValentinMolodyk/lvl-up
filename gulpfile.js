
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var htmlreplace = require('gulp-html-replace');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html', 'less/*.less'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  LESS:['less/start.less', 'less/**/start.less'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'build'
};


gulp.task('transform', function(){
  gulp.src(path.JS)
      .pipe(react())
      .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
      .pipe(gulp.dest(path.DEST));
});

gulp.task('less', function () {
  var processors = [
    autoprefixer({browsers: ['last 5 version']}),
    mqpacker,
    csswring
  ];
     gulp.src(path.LESS)
         .pipe(less())
         .pipe(postcss(processors))
         .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy', 'less']);
});

gulp.task('default', ['watch']);


gulp.task('build', function(){
  gulp.src(path.JS)
      .pipe(react())
      .pipe(concat(path.MINIFIED_OUT))
      .pipe(uglify(path.MINIFIED_OUT))
      .pipe(gulp.dest(path.DEST_BUILD));
});


gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
      .pipe(htmlreplace({
        'js': 'build/' + path.MINIFIED_OUT
      }))
      .pipe(gulp.dest(path.DEST));
});


gulp.task('production', ['replaceHTML', 'build']);