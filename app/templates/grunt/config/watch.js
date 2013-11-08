/*jshint node:true*/
'use strict';

// https://github.com/gruntjs/grunt-contrib-watch

// Run tasks whenever files are changed, added, or deleted.

module.exports = function (config) {
	return {
		compass: {
			files: [config.source + 'scss/**/*.{scss,sass}'],
			tasks: ['compass:develop']
		},
		haychtml: {
			files: [config.pages + '*.html'],
			tasks: ['haychtml']
		},
		livereload: {
			options: {
				livereload: config.livereloadPort
			},
			files: [
				config.deploy + '*.html',
				config.deploy + 'static/{,*/}*.{css,js,png,jpg,jpeg,gif,webp,svg}',
				config.source + '{,*/}*.{css,js,png,jpg,jpeg,gif,webp,svg}'
			]
		}
	};
};
