/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		compass: {
			files: [config.source + '/scss/**/*.{scss,sass}'],
			tasks: ['compass:server']
		},
		haychtml: {
			files: [config.pages + '/*.html'],
			tasks: ['haychtml']
		},
		livereload: {
			options: {
				livereload: config.livereloadPort
			},
			files: [
				config.deploy + '/*.html',
				config.deploy + '/static/{,*/}*.{css,js,png,jpg,jpeg,gif,webp,svg}'
			]
		}
	}
};