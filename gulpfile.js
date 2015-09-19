/********* Dependencies *********/
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');
var sass = require('gulp-sass');
var argv = require('yargs').argv;
var inject = require('gulp-inject');

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

//task to compile script component
gulp.task('compile_script_components', function() {
  return gulp.src('config/scripts/components/' + argv.comp + '/*.js')
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets/scripts/components/' + argv.comp));
})

  //task to compile style component
  gulp.task('compile_style_components', function() {
    return gulp.src('config/styles/components/' + argv.comp + '/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('assets/styles/components/' + argv.comp));
  })


//task to compile general sass to css
gulp.task('style', function() {
  return gulp.src('config/styles/main.scss')
  .pipe(sass())
  .pipe(concat('phoenixfw.css'))
  .pipe(gulp.dest('dist/src/'));
});

gulp.task('fonts', function() {
  return gulp.src('assets/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));
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

//html injections
gulp.task('yields', function() {
  return gulp.src('views/' + argv.comp + '.html')
  .pipe(inject(gulp.src('views/components/header.html', {read: false}), {name: 'header'}))
  .pipe(gulp.dest('./'));
})


gulp.task('default', ['style', 'scripts', 'fonts']);
