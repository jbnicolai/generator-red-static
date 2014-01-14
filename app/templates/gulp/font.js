'use strict';

var gulp = require('gulp'),
	config = require('./config');

gulp.task('font-clean', config.clean('fonts/**/*'));

gulp.task('font', ['font-clean'], config.copy('fonts/**/*', 'fonts'));
