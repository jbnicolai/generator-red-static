'use strict';

var gulp = require('gulp'),
	config = require('./config'),
	concat = require('gulp-concat'),
	libs = require('./libs'),
	transpiler = require('gulp-es6-module-transpiler');

gulp.task('js-clean', config.clean('js/app.js'));

gulp.task('js', ['js-clean'], function (done) {
	gulp.src(config.src('js/**/*.js'))
		.pipe(transpiler({
			type: 'amd'
		}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.dest('js')))
		.on('end', done);
});

gulp.task('libs-clean', config.clean('js/app.js'));

gulp.task('libs', function (done) {
	gulp.src(libs().map(function (file) {
			return config.src('lib/' + file);
		}), {
			base : config.src('.')
		})
		.pipe(concat('libs.js'))
		.pipe(gulp.dest(config.dest('js')))
		.on('end', done);
});
