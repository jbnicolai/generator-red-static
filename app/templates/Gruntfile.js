/*jshint node:true*/
'use strict';

var path = require("path");

var LIVERELOAD_PORT = 34567;
var LIVERELOAD = require('connect-livereload')({port: LIVERELOAD_PORT});
var CONFIG = {
	pages: 'pages',
	source: 'static',
	deploy: 'deploy'
};

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	require('haychtml')(grunt);

	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		project: CONFIG,
		watch: {
			compass: {
				files: ['<%= project.source %>/scss/**/*.{scss,sass}'],
				tasks: ['compass:server']
			},
			alone: {
				files: ['<%= project.pages %>/*.html'],
				tasks: ['alone']
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'<%= project.deploy %>/*.html',
					'<%= project.deploy %>/static/{,*/}*.{css,js,png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},
		connect: {
			options: {
				port: 8000,
				hostname: '0.0.0.0'
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							LIVERELOAD,
							connect.static(path.resolve(CONFIG.deploy)),
							connect.static(path.resolve('.'))
						];
					}
				}
			}
		},
		open: {
			server: {
				path: 'http://0.0.0.0:<%= connect.options.port %>'
			}
		},
		haychtml: {
			deploy : {
				engine: 'swig',
				src: '<%= project.pages %>',
				dest: '<%= project.deploy %>',
				data : {
					STATIC_URL : '/static/'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= project.source %>/js/**/*.js'
			]
		},
		compass: {
			options: {
				config: '<%= project.source %>/scss/config.rb'
			},
			deploy: {},
			server: {
				options: {
					outputStyle: "expanded"
				}
			}
		},
		clean: {
			deploy: '<%= project.deploy %>/*',
			server: '<%= project.deploy %>/*'
		},
		imagemin: {
			deploy: {
				files: [{
					expand: true,
					cwd: '<%= project.source %>/img',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= project.deploy %>/img'
				}]
			}
		},
		// Put files not handled in other tasks here
		copy: {
			deploy: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= project.source %>',
					dest: '<%= project.deploy %>/static',
					src: [
						'*.{ico,txt}',
						'.htaccess',
						'img/{,*/}*.{webp,gif}',
						'fonts/*',
						'lib/**/*.js'
					]
				}]
			}
		},
		concurrent: {
			server: [
				'compass:server',
				'haychtml:deploy'
			],
			deploy: [
				'compass:deploy',
				'imagemin:deploy',
				'haychtml:deploy'
			]
		}
	});

	grunt.registerTask('server', function (target) {
		if (target) {
			grunt.config('connect.options.port', target);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'clean:deploy',
		'concurrent:deploy',
		'copy:deploy'
	]);

	grunt.registerTask('default', [
		'jshint',
		'build'
	]);
};
