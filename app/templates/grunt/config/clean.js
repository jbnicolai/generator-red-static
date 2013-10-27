/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		deploy: config.deploy,
		server: config.deploy + '/*'
	}
};