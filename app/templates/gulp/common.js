'use strict';

var path = require('path'),
	gulp = require('gulp'),
	clean = require('gulp-clean');

function srcPath(file) {
	return path.join('./static/', file);
}

function destPath(file) {
	return path.join('./deploy/static/', file);
}

function makeCleanTask(name, files) {
	gulp.task(name + '-clean', function () {
		return gulp.src(destPath(files), {read: false})
			.pipe(clean());
	});
}

function makeCopyTask(name, src, dest) {
	gulp.task(name, [name + '-clean'], function () {
		return gulp.src(srcPath(src))
			.pipe(gulp.dest(destPath(dest)));
	});
}

function makeWatchTask(name, files) {
	gulp.task(name + '-watch', function () {
		gulp.watch(srcPath(files), function () {
			gulp.run(name);
		});
	});
}

module.exports = {
	src : srcPath,
	dest : destPath,
	clean : makeCleanTask,
	copy : makeCopyTask,
	watch : makeWatchTask,
	minify : false
};
