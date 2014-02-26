/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('js_build', [
		'neuter:app_build',
		'neuter:lib_build',
		'emberTemplates:js_build',
		'uglify:app_build',
		'uglify:lib_build'
	]);

	grunt.registerTask('js_develop', [
		'neuter:app_develop',
		'neuter:lib_develop',
		'emberTemplates:js_develop'
	]);

	/*==========================================
	=            Watch configuration           =
	==========================================*/

	grunt.config('watch.ember-templates', {
		files: ['<%= paths.source %>templates/{,**/}{,*.hbs}'],
		tasks: ['emberTemplates:js_develop']
	});

	grunt.config('watch.js-app', {
		files: ['<%= paths.source %>js/{,**/}{,*.js}'],
		tasks: ['neuter:app_develop', 'jshint:js_build']
	});

	grunt.config('watch.js-lib', {
		files: ['<%= paths.source %>js/libs.js'],
		tasks: ['neuter:lib_develop']
	});

	/*==========================================
	=           Neuter configuration           =
	==========================================*/

	grunt.config('neuter.options', {
		basePath : '<%= paths.source %>'
	});

	grunt.config('neuter.app_develop', {
		src :  '<%= paths.source %>js/app.js',
		dest : '<%= paths.static %>js/app.js'
	});

	grunt.config('neuter.app_build', {
		src :  '<%= neuter.app_develop.src %>',
		dest : '<%= neuter.app_develop.dest %>'
	});

	grunt.config('neuter.lib_develop', {
		src :  '<%= paths.source %>js/libs.js',
		dest : '<%= paths.static %>js/libs.js',
		options : {
			template : '{%= src %}'
		}
	});

	grunt.config('neuter.lib_build', {
		src :  '<%= neuter.lib_develop.src %>',
		dest : '<%= neuter.lib_develop.dest %>',
		options : {
			template : '{%= src %}',
			process : function (src) {
				// Use the production version of ember in production.
				return src.replace('lib/ember/ember.js', 'lib/ember/ember.prod.js');
			}
		}
	});

	/*==========================================
	=      Ember Templates configuration       =
	==========================================*/

	grunt.config('emberTemplates.options', {
		templateBasePath: '<%= paths.source %>templates/'
	});

	grunt.config('emberTemplates.js_build', {
		src :  '<%= paths.source %>templates/**/*.hbs',
		dest : '<%= paths.static %>js/templates.js'
	});

	grunt.config('emberTemplates.js_develop', {
		src :  '<%= emberTemplates.js_build.src %>',
		dest : '<%= emberTemplates.js_build.dest %>'
	});

	/*==========================================
	=           Uglify configuration           =
	==========================================*/

	grunt.config('uglify.app_build', {
		src :  '<%= paths.static %>js/{templates,app}.js',
		dest : '<%= paths.static %>js/app.min.js'
	});

	grunt.config('uglify.lib_build', {
		src :  '<%= paths.static %>js/libs.js',
		dest : '<%= paths.static %>js/libs.min.js'
	});

	/*==========================================
	=            JSHint configuration          =
	==========================================*/

	grunt.config('jshint.js_build', {
		options: {
			jshintrc: '.jshintrc'
		},
		src: [
			'Gruntfile.js',
			'grunt/*.js',
			'<%= paths.source %>js/**/*.js'
		]
	});
};
