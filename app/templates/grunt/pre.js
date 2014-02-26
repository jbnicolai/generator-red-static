/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('pre_build',   ['clean:pre_build']);
	grunt.registerTask('pre_develop', ['clean:pre_develop']);

	/*==========================================
	=            Clean configuration           =
	==========================================*/

	grunt.config('clean.pre_build', '<%= paths.deploy %>');
	grunt.config('clean.pre_develop', '<%= paths.deploy %>');
};
