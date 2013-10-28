/*jshint node:true*/
'use strict';

var CONFIG = {
	pages: 'pages',
	source: 'static',
	deploy: 'deploy',
	livereloadPort: 34567
};

module.exports = function (grunt) {

	// show elapsed time at the end
	require('time-grunt')(grunt);
	require('haychtml')(grunt);

	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		project: CONFIG,

		/********* SERVER + WATCH *********/

		watch: require('./grunt/config/watch.js')(CONFIG),

		connect: require('./grunt/config/connect.js')(CONFIG),

		open: require('./grunt/config/open.js')(CONFIG),

		haychtml: require('./grunt/config/haychtml.js')(CONFIG),

		/********* JS *********/

		jshint: require('./grunt/config/jshint.js')(CONFIG),

		/********* SCSS *********/

		compass: require('./grunt/config/compass.js')(CONFIG),

		/********* BUILD *********/

		clean: require('./grunt/config/clean.js')(CONFIG),

		copy: require('./grunt/config/copy.js')(CONFIG),

		concurrent: require('./grunt/config/concurrent.js')(CONFIG)
	});

	grunt.registerTask('server', function (target) {
		if (target) {
			grunt.config('connect.options.port', target);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'clean:deploy',
		'concurrent:deploy',
		'copy:deploy'
	]);

	grunt.registerTask('default', [
		'jshint',
		'build'
	]);
};
