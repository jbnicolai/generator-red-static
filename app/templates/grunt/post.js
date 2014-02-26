/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('post_build',   ['copy:post_build', 'clean:post_build', 'notify:post_build']);
	grunt.registerTask('post_develop', ['copy:post_build']);

	/*==========================================
	=           Notify configuration           =
	==========================================*/

	grunt.config('notify.post_build', {
		options: {
			message: 'Build complete.'
		}
	});

	/*==========================================
	=            Clean configuration           =
	==========================================*/

	grunt.config('clean.post_build', '.temp');

	/*==========================================
	=             Copy configuration           =
	==========================================*/

	grunt.config('copy.post_build', {
		expand: true,
		src: [
			'<%= paths.source %>*.{ico,txt}',
			'<%= paths.source %>.htaccess',
			'<%= paths.source %>img/**/*.{jpg,jpeg,png,webp,gif}',
			'<%= paths.source %>fonts/*',
			'<%= paths.source %>lib/modernizr/modernizr.js'
		],
		dest: '<%= paths.deploy %>'
	});

	/*==========================================
	=            Watch configuration           =
	==========================================*/

	grunt.config('watch.post_develop', {
		files: '<%= copy.post_build.src %>',
		tasks: ['newer:copy:post_build']
	});
};
