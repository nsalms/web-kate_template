var gulp         = require('gulp');
var sass         = require('gulp-sass')(require('sass'));
var order        = require('gulp-order');
var concat       = require('gulp-concat');
var rename       = require("gulp-rename");
var uglify       = require('gulp-uglify');
var nano         = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');


// gulp.task('default', gulp.series('css', 'sass', 'javascript'));

function gulpCSS() {
  return gulp
  .src(['src/css/**/*.css'])
  .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(nano({reduceIdents: false}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('css'))
}
gulp.task(gulpCSS);

function gulpSASS() {
  return gulp
  .src(['src/sass/main.scss'])
  .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(nano())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('css'))
}
gulp.task(gulpSASS);

function gulpJS() {
  return gulp
  .src(['src/js/**/*.js'])
  .pipe(order([
    "vendor/modernizr.js",
    "vendor/jquery.easing.js"
  ]))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('js'))
  .pipe(uglify())
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest('js'))
}
gulp.task(gulpJS);