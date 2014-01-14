'use strict';

var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-ruby-sass'),
	csso = require('gulp-csso'),
	config = require('./config');

gulp.task('css-clean', config.clean('css/**/*'));

gulp.task('css', ['css-clean'], function () {
	return gulp.src(config.src('scss/style.scss'))
		.pipe(sass({
			compass : true,
			loadPath : './static/lib'
		}))
		.pipe(prefix('last 1 version', '> 1%'))
		.pipe(csso())
		.pipe(gulp.dest(config.dest('css')));
});
