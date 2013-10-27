/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		options: {
			config: config.source + '/scss/config.rb'
		},
		deploy: {},
		server: {
			options: {
				outputStyle: "expanded"
			}
		}
	}
};