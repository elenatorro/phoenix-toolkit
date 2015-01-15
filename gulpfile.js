/********* Dependencies *********/
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');

/************* Paths *************/
/* from */
var config_scripts = 'config/scripts/*.js';
var config_styles  = 'config/styles/*.scss';
var config_views   = 'config/views/*.html';

/* to */
var assets_scripts = 'assets/scripts';
var assets_styles  = 'assets/styles';
var assets_views   = 'assets/views';


/************* Tasks *************/
gulp.task('lint', function() {
  return gulp.src('config/scripts/components/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

/* TODO */

//task to erase components

//task to compile script component
gulp.task('compile_script_component', function() {
  return gulp.src('config/scripts/components/' + process.argv[0] + '/*.js')
  .pipe(concat(process.argv[0] + '.js'))
  .pipe(gulp.dest('assets/scripts/components/' + process.argv[0]))
});

//task to compile style component
gulp.task('compile_style_component', function() {
  return gulp.src('config/styles/components/' + process.argv[0] + '/*.scss')
  .pipe(sass())
  .pipe(concat(process.argv[0] + '.css'))
  .pipe(gulp.dest('assets/styles/components/' + process.argv[0]))
});

//task to compile general sass to css
gulp.task('style', function() {
  return gulp.src('config/styles/*.scss')
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('assets/styles/general'));
});

//task to compile and minify javascript
gulp.task('scripts', function() {
  return gulp.src('config/scripts/*.js')
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets/scripts/general'))
  .pipe(rename('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts'));
});

gulp.task('default', ['watch']);
