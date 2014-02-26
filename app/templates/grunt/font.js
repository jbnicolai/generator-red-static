/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('icons',   ['webfont:icons']);

	/*==========================================
	=            Webfont configuration           =
	==========================================*/

	grunt.config('webfont.icons', {
		src : '<%= paths.source %>icons/*.{svg,eps}',
		dest : '<%= paths.source %>fonts',
		destCss : '<%= paths.source %>scss/fonts',
		options: {
			font : 'icons',
			hashes : false,
			syntax : 'bootstrap',
			stylesheet : 'scss',
			relativeFontPath : '../fonts/'
		}
	});
};
