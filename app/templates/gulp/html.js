'use strict';

var gulp = require('gulp'),
	path = require('path'),
	consolidate = require('gulp-consolidate'),
	ignore = require('gulp-ignore'),
	config = require('./config'),
	minify = require('gulp-minify-html'),
	prettify = require('gulp-html-prettify');

gulp.task('html-clean', config.clean('**/*.html'));

gulp.task('html', ['html-clean'], function () {
	return gulp.src('./pages/**/*.html')
		.pipe(ignore({
			pattern : ['**/_**']
		}))
		.pipe(consolidate('swig', function (file) {
			var URL = path.join(path.dirname(file.path), '..');
			return {
				STATIC_URL : path.relative(URL, config.src('')) + '/'
			};
		}, {
			usePath : true
		}))
		.pipe(minify({
			conditionals: true
		}))
		.pipe(prettify())
		.pipe(gulp.dest('./deploy'));
});
