'use strict';

var gulp = require('gulp'),
	common = require('./gulp/common');

var types = 'css js img font html libs'.split(' ');
var watch = types.map(function (type) {
	return type + '-watch';
});

types.forEach(function (type) {
	require('./gulp/' + type);
});

gulp.task('watch', types, function () {
	gulp.run.apply(gulp, watch);
});

gulp.task('build', function () {
	common.minify = true;
	gulp.run.apply(gulp, types);
});

gulp.task('default', ['build']);
