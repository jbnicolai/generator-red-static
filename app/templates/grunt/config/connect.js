/*jshint node:true*/
'use strict';

module.exports = function(config) {

	var PATH = require("path"),
		LIVERELOAD = require('connect-livereload')({ port: config.livereloadPort });

	return {
		options: {
			port: 8000,
			hostname: '0.0.0.0'
		},
		livereload: {
			options: {
				middleware: function (connect) {
					return [
						LIVERELOAD,
						connect.static(PATH.resolve('.', config.deploy))
					];
				}
			}
		}
	}
};