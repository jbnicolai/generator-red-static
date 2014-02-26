/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('server', function (port) {
		if (port) {
			port = Math.round(port);
			grunt.config('watch.livereload.options.livereload', port + 30000);
			grunt.config('connect.options.livereload',          port + 30000);
			grunt.config('connect.options.port',                port);
		}

		grunt.task.run([
			'develop',                // Run tasks once before starting watchers
			'connect:server_develop', // Start server
			'watch'                   // Watch files for changes
		]);
	});

	/*==========================================
	=            Watch configuration           =
	==========================================*/

	grunt.config('watch.livereload', {
		options: {
			debounceDelay : 250,
			livereload : 38000
		},
		files : '<%= paths.deploy %>**/*.{html,css,js,png,jpg,jpeg,gif,webp,svg}'
	});

	/*==========================================
	=           Connect configuration          =
	==========================================*/

	grunt.config('connect.options', {
		hostname : '*',
		port : 8000,
		base : '<%= paths.deploy %>',
		livereload : 38000,
		open : true
	});

	grunt.config('connect.server_develop', {});
};
