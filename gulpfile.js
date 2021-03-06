var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var browserify = require("gulp-browserify");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var scriptsSrc = [
  "src/js/butterCalCore.js",
  "src/js/butterCalUI.js"
];

gulp.task('serve', ['scripts'], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./src/**/*.js", ['scripts']).on('change', browserSync.reload);
  gulp.watch("./src/**/*.scss", ['styles']).on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task("scripts", function () {
  return gulp.src(scriptsSrc)
    // .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(browserify({
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task('styles', function() {
  gulp.src('src/scss/butterCal.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    // Catch any SCSS errors and prevent them from crashing gulp
    .on('error', function (error) {
      console.error(error);
      this.emit('end');
    })
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(cleanCss({
      compatibility: 'ie9'
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('dist/css/'))
});