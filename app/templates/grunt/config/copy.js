/*jshint node:true*/
'use strict';

// https://github.com/gruntjs/grunt-contrib-copy

// Copy files and folders.

module.exports = function (config) {
	return {
		build: {
			files: [{
				expand: true,
				dot: true,
				cwd: config.source,
				dest: config.deploy + 'static/',
				src: [
					'*.{ico,txt}',
					'.htaccess',
					'img/{,*/}*.{jpg,jpeg,png,webp,gif}',
					'fonts/*',
					'lib/**/*.js'
				]
			}]
		}
	};
};
