/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('grunt');

	grunt.config('paths', {
		'pages'  : 'pages/',
		'source' : 'static/',
		'static' : 'deploy/static/',
		'deploy' : 'deploy/'
	});

	// Build unminified files during development
	grunt.registerTask('develop', [
		'pre_develop',
		'js_develop',
		'css_develop',
		'html_develop',
		'post_develop'
	]);

	// Build minified files for deployment
	grunt.registerTask('build', [
		'pre_build',
		'js_build',
		'css_build',
		'html_build',
		'post_build'
	]);

	grunt.registerTask('default', ['build']);
};
