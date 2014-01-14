'use strict';

var gulp = require('gulp');

require('./gulp/css');
require('./gulp/font');
require('./gulp/html');
require('./gulp/img');
require('./gulp/js');

gulp.task('default', function (done) {
	gulp.run('css', 'js', 'img', 'font', 'html', done);
});
