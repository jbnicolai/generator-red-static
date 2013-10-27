/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		options: {
			jshintrc: '.jshintrc'
		},
		all: [
			'Gruntfile.js',
			config.source + '/js/**/*.js'
		]
	}
};