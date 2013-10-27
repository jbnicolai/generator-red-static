/*jshint node:true*/
'use strict';

module.exports = function(config) {

	return {
		deploy: {
			files: [{
				expand: true,
				dot: true,
				cwd: config.source,
				dest: config.deploy + '/static',
				src: [
					'*.{ico,txt}',
					'.htaccess',
					'img/{,*/}*.{png,jpg,jpeg,webp,gif}',
					'fonts/*',
					'lib/**/*.js'
				]
			}]
		}
	}
};