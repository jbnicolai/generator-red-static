/*jshint node:true*/
'use strict';

var CONFIG = {
	pages: 'pages/',
	source: 'static/',
	static: 'deploy/static/',
	deploy: 'deploy/',
	livereloadPort: 34567
};

module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('grunt/tasks');

	[
		'clean',
		'compass',
		'connect',
		'copy',
		'emberTemplates',
		'haychtml',
		'jshint',
		'neuter',
		'notify',
		'open',
		'uglify',
		'watch',
		'webfont'
	].forEach(function (key) {
		grunt.config(key, require('./grunt/config/' + key)(CONFIG));
	});

	grunt.registerTask('server', function (port) {
		if (port) {
			CONFIG.livereloadPort = +port + 30000;
			grunt.config('watch.livereload.options.livereload', CONFIG.livereloadPort);
			grunt.config('connect.options.port', port);
		}

		grunt.task.run([
			// Run tasks once before starting watchers
			'develop',

			// Start server
			'connect:livereload',
			'open',

			// Watch files for changes
			'watch'
		]);
	});

	// Build unminified files during development
	grunt.registerTask('develop', [
		'clean',

		// JS
		'neuter:libsDevelop',
		'neuter:app',
		'emberTemplates',

		// CSS
		'compass:develop',

		// HTML
		'haychtml:develop',

		// OTHER FILES
		'copy'
	]);

	// Build minified files for deployment
	grunt.registerTask('build', [
		'clean',

		// JS
		'jshint',
		'neuter:libsBuild',
		'neuter:app',
		'emberTemplates',
		'uglify',

		// CSS
		'compass:build',

		// HTML
		'haychtml:build',

		// OTHER FILES
		'copy',
		'notify:build'
	]);

	grunt.registerTask('default', ['build']);
};
