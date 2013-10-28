/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		server: {
			path: 'http://0.0.0.0:<%= connect.options.port %>'
		}
	}
};