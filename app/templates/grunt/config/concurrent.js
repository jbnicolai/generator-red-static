/*jshint node:true*/
'use strict';

// https://github.com/sindresorhus/grunt-concurrent

// Run grunt tasks concurrently.

module.exports = function () {
	return {
		options: {
			logConcurrentOutput: true
		},
		develop : [
			'compass:develop',
			'haychtml:build'
		],
		build : [
			'compass:build',
			'jshint',
		]
	};
};
