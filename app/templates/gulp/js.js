'use strict';

var gulp = require('gulp'),
	common = require('./common'),
	includer = require('gulp-includer'),
	uglify = require('gulp-uglify'),
	gulpif = require('gulp-if');

common.clean('js', 'js/app.js');
common.watch('js', 'js/**/*.js');

gulp.task('js', ['js-clean'], function () {
	return gulp.src(common.src('js/{app,libs}.js'))
		.pipe(includer({
			debug : true
		}))
		.pipe(gulpif(common.minify, uglify()))
		.pipe(gulp.dest(common.dest('js')));
});
