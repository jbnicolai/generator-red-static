'use strict';

var gulp = require('gulp'),
	common = require('./common'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	gulpif = require('gulp-if');

function libs() {
	return [
		'jquery/jquery.js',
		'handlebars/handlebars.runtime.js',
		'ember/ember.js',
		'ember-model/ember-model.js',
		'resolver.js',
		'ember-resolver/dist/ember-resolver.js'
	];
}

common.clean('libs', 'js/libs.js');
common.watch('libs', 'lib/**/*.js');

gulp.task('libs', ['libs-clean'], function () {
	return gulp.src(libs().map(function (file) {
			return common.src('lib/' + file);
		}), {
			base : common.src('.')
		})
		.pipe(concat('libs.js'))
		.pipe(gulpif(common.minify, uglify()))
		.pipe(gulp.dest(common.dest('js')));
});
