/*jshint node:true*/
'use strict';

var CONFIG = {
	pages: 'pages/',
	source: 'static/',
	deploy: 'deploy/',
	livereloadPort: 34567
};

module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('haychtml')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('grunt/tasks');

	grunt.initConfig({
		watch      : require('./grunt/config/watch')(CONFIG),
		connect    : require('./grunt/config/connect')(CONFIG),
		open       : require('./grunt/config/open')(CONFIG),
		haychtml   : require('./grunt/config/haychtml')(CONFIG),
		jshint     : require('./grunt/config/jshint')(CONFIG),
		compass    : require('./grunt/config/compass')(CONFIG),
		clean      : require('./grunt/config/clean')(CONFIG),
		copy       : require('./grunt/config/copy')(CONFIG),
		notify     : require('./grunt/config/notify')(CONFIG),
		webfont    : require('./grunt/config/webfont')(CONFIG),
		concurrent : require('./grunt/config/concurrent')(CONFIG)
	});

	grunt.registerTask('server', function (target) {
		if (target) {
			grunt.config('connect.options.port', target);
		}

		grunt.task.run([
			'clean:build',
			'concurrent:develop',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'clean:build',
		'concurrent:build',
		'copy:build',
		'notify:build'
	]);

	grunt.registerTask('default', [
		'jshint',
		'build'
	]);
};
