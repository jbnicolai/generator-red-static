'use strict';

var gulp = require('gulp'),
	config = require('./config');

gulp.task('img-clean', config.clean('img/**/*'));

gulp.task('img', ['img-clean'], config.copy('img/**/*', 'img'));
