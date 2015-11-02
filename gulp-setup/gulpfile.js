// Reference: http://gulpjs.com/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// variables for better readability in gulp tasks
// var cssFiles = [],
// 	jsFiles = [];

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('concat-js', function() {
	return gulp.src(['assets/js/dev/component1.js', 'assets/js/dev/event-handlers.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('assets/js/'));
});


gulp.task('concat-css', function() {
	return gulp.src(['assets/css/dev/base.css','assets/css/dev/global-layout.css', 'assets/css/dev/buttons.css', 'assets/css/dev/homepage.css', 'assets/css/dev/media-lt-768.css', 'assets/css/dev/media-lt-640.css', 'assets/css/dev/animations.css'])
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('assets/css/'));
});

gulp.task('minify-js', function() {
  return gulp.src('assets/js/scripts.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/production/'));
});

gulp.task('minify-css', function() {
  return gulp.src('assets/css/styles.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css/production/'));
});

