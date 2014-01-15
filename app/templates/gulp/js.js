'use strict';

var gulp = require('gulp'),
	common = require('./common'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	transpiler = require('gulp-es6-module-transpiler');

common.clean('js', 'js/app.js');
common.watch('js', 'js/**/*.js');

gulp.task('js', ['js-clean'], function () {
	return gulp.src(common.src('js/**/*.js'))
		.pipe(transpiler({
			type: 'amd',
			moduleName: function (name) {
				return 'app/' + name;
			}
		}))
		.pipe(concat('app.js'))
		.pipe(gulpif(common.minify, uglify()))
		.pipe(gulp.dest(common.dest('js')));
});
