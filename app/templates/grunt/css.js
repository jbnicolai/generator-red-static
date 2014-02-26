/*jshint node:true*/
'use strict';

module.exports = function (grunt) {
	/*==========================================
	=              Global exports              =
	==========================================*/

	grunt.registerTask('css_build',   ['sass:css_build',   'autoprefixer:css_build']);
	grunt.registerTask('css_develop', ['sass:css_develop', 'autoprefixer:css_develop', 'newer:copy:css_develop']);

	/*==========================================
	=            Sass configuration            =
	==========================================*/

	grunt.config('sass.css_build', {
		files : [{
			expand: true,
			cwd : '<%= paths.source %>scss/',
			src: '*.scss',
			dest: '.temp/css/',
			ext: '.css'
		}],
		options : {
			outputStyle : 'compressed',
			includePaths: ['<%= paths.source %>lib']
		}
	});

	grunt.config('sass.css_develop', {
		files : '<%= sass.css_build.files %>',
		options : {
			includePaths: ['<%= paths.source %>lib']
		}
	});

	/*==========================================
	=        Autoprefixer configuration        =
	==========================================*/

	grunt.config('autoprefixer.options', {
		browsers: ['> 1%', 'last 2 versions', 'ie 9']
	});

	grunt.config('autoprefixer.css_build', {
		files : [{
			expand: true,
			cwd: '.temp/css/',
			src: '*.css',
			dest: '<%= paths.static %>css/'
		}]
	});

	grunt.config('autoprefixer.css_develop', {
		files : '<%= autoprefixer.css_build.files %>',
		options: {
			map: true
		}
	});

	/*==========================================
	=            Watch configuration           =
	==========================================*/

	grunt.config('watch.css', {
		files: ['<%= paths.source %>scss/**/*.scss'],
		tasks: ['css_develop']
	});

	/*==========================================
	=            Copy configuration            =
	==========================================*/

	grunt.config('copy.css_develop',  {
		expand: true,
		src: ['<%= paths.source %>scss/**/*.scss'],
		dest: '<%= paths.deploy %>'
	});
};
