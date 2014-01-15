'use strict';

var gulp = require('gulp'),
	path = require('path'),
	consolidate = require('gulp-consolidate'),
	ignore = require('gulp-ignore'),
	common = require('./common'),
	gulpif = require('gulp-if'),
	minify = require('gulp-minify-html'),
	prettify = require('gulp-html-prettify');

common.clean('html', '../**/*.html');
common.watch('html', '../pages/**/*.html');

gulp.task('html', ['html-clean'], function () {
	return gulp.src('./pages/**/*.html')
		.pipe(ignore({
			pattern : ['**/_**']
		}))
		.pipe(consolidate('swig', function (file) {
			var URL = path.join(path.dirname(file.path), '..');
			return {
				STATIC_URL : path.relative(URL, common.src('')) + '/'
			};
		}))
		.pipe(minify({
			conditionals: true
		}))
		.pipe(gulpif(!common.minify, prettify()))
		.pipe(gulp.dest('./deploy'));
});
