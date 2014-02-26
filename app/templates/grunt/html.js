/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('html_build',   ['haychtml:html_build']);
	grunt.registerTask('html_develop', ['haychtml:html_develop']);

	/*==========================================
	=            Watch configuration           =
	==========================================*/

	grunt.config('watch.html_develop', {
		files: ['<%= paths.pages %>**/*.html'],
		tasks: ['haychtml:html_develop']
	});

	/*==========================================
	=          Haychtml configuration          =
	==========================================*/

	grunt.config('haychtml.html_develop', {
		engine : 'swig',
		src : '<%= paths.pages %>',
		dest : '<%= paths.deploy %>',
		data : {
			TEMPLATE_DEBUG : true,
			STATIC_URL : '/static/'
		}
	});

	grunt.config('haychtml.html_build', {
		engine : 'swig',
		src : '<%= paths.pages %>',
		dest : '<%= paths.deploy %>',
		data : {
			TEMPLATE_DEBUG : false,
			STATIC_URL : '/static/'
		}
	});
};
