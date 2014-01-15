'use strict';

var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-ruby-sass'),
	csso = require('gulp-csso'),
	gulpif = require('gulp-if'),
	common = require('./common');

common.clean('css', 'css/**/*');
common.watch('css', 'scss/**/*.scss');

gulp.task('css', ['css-clean'], function () {
	return gulp.src(common.src('scss/style.scss'))
		.pipe(sass({
			compass : true,
			loadPath : './static/lib'
		}))
		.pipe(prefix('last 1 version', '> 1%'))
		.pipe(gulpif(common.minify, csso()))
		.pipe(gulp.dest(common.dest('css')));
});
