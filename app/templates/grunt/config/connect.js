/*jshint node:true*/
'use strict';

var path = require("path");

module.exports = function (config) {
	var LIVERELOAD = require('connect-livereload')({ port: config.livereloadPort });

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
						connect.static(path.resolve('.', config.deploy)),
						connect.static(path.resolve('.'))
					];
				}
			}
		}
	};
};
