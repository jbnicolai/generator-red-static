/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		deploy : {
			engine: 'swig',
			src: config.pages,
			dest: config.deploy,
			data : {
				STATIC_URL : '/static/'
			}
		}
	}
};