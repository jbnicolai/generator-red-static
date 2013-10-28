/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		server: [
			'compass:server',
			'haychtml:deploy'
		],
		deploy: [
			'compass:deploy',
			'haychtml:deploy'
		]
	}
};