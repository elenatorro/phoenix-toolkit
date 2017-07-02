const gulp       = require('gulp');
const livereload = require('gulp-livereload');
const connect    = require('gulp-connect');
const sass       = require('gulp-sass');
const concat     = require('gulp-concat');
const cssmin     = require('gulp-cssmin');
const rename     = require('gulp-rename');

const Tasks = Object.freeze({
  BUILD:   'build',
  SCRIPTS: 'scripts',
  STYLES:  'styles',
  DEFAULT: 'default',
  WATCH:   'watch',
  CONNECT: 'connect'
});

const Paths = Object.freeze({
  DIST: './dist',
  DIST_MAIN: '.',
  SCRIPTS: './assets/scripts/**/*.js',
  STYLES: ['./src/styles/*.scss', './src/styles/**/*.scss'],
  STYLE_DIST: '/src/phoenix-toolkit.css',
  MAIN_STYLE_FILE: './src/styles/main.scss',
  INDEX: './index.html'
});

gulp.task(Tasks.STYLES, function() {
  return gulp.src(Paths.MAIN_STYLE_FILE)
  .pipe(sass())
  .pipe(concat(Paths.STYLE_DIST))
  .pipe(gulp.dest(Paths.DIST))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(Paths.DIST));
});

gulp.task(Tasks.WATCH, function () {
    livereload.listen();
    gulp.watch(
      [
        Paths.STYLES,
        Paths.MAIN_STYLE_FILE,
        Paths.INDEX
      ],[
        Tasks.STYLES
      ]
    );
});

gulp.task(Tasks.CONNECT, function() {
  connect.server({
    root: '.',
    port: 8883
  });
});

gulp.task(Tasks.DEFAULT, [
  Tasks.CONNECT,
  Tasks.STYLES,
  Tasks.WATCH
]);
