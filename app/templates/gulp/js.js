'use strict';

var gulp = require('gulp'),
	config = require('./config'),
	concat = require('gulp-concat'),
	libs = require('./libs'),
	transpiler = require('gulp-es6-module-transpiler');

gulp.task('js-clean', config.clean('js/app.js'));

gulp.task('js', ['js-clean'], function () {
	return gulp.src(config.src('js/**/*.js'))
		.pipe(transpiler({
			type: 'amd',
			moduleName: function (name) {
				return 'app/' + name;
			}
		}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.dest('js')));
});

gulp.task('libs-clean', config.clean('js/app.js'));

gulp.task('libs', function () {
	return gulp.src(libs().map(function (file) {
			return config.src('lib/' + file);
		}), {
			base : config.src('.')
		})
		.pipe(concat('libs.js'))
		.pipe(gulp.dest(config.dest('js')));
});
