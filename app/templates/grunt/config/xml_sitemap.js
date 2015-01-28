/*jshint node:true*/
'use strict';

// https://github.com/furzeface/grunt-xml-sitemap

// Generate XML sitemaps for search engine indexing.

module.exports = function (config) {
	return {
		build: {
			expand: false,
			cwd: config.deploy,
			src: [
				'**/*.html',
				'!{404,500}/*'
			],
			options: {
				dest: config.deploy
			}
		}
	};
};
