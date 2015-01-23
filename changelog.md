## History

### `0.5.0` _2015-01-23_

* Added `grunt-modernizr` at `~0.6.0`
* Updated `ember` from `1.5.1` to `1.7.1`
* Updated `ember-model` from `0.0.11` to `0.0.14`
* Updated `grunt` from `0.4.2` to `0.4.5`
* Updated `grunt-autoprefixer` from `0.7.4` to `2.2.0`
* Updated `grunt-contrib-connect` from `0.8.0` to `0.9.0`
* Updated `grunt-contrib-copy` from `0.5.0` to `0.7.0`
* Updated `grunt-contrib-clean` from `0.5.0` to `0.6.0`
* Updated `grunt-contrib-jshint` from `0.10.0` to `0.11.0`
* Updated `grunt-contrib-uglify` from `0.5.0` to `0.7.0`
* Updated `grunt-ember-templates` from `0.4.18` to `0.4.23`
* Updated `grunt-newer` from `0.7.0` to `1.1.0`
* Updated `grunt-notify` from `0.3.0` to `0.4.1`
* Updated `grunt-sass` from `0.12.1` to `0.17.0`
* Updated `grunt-webfont` from `0.4.2` to `0.5.1`
* Updated `load-grunt-tasks` from `0.5.0` to `3.0.0`
* Updated `swig` from `1.3.2` to `1.4.2`
* Updated `time-grunt` from `0.3.2` to `1.0.0`

### `0.4.0` _2014-06-17_

* Changed js directory to group Routes, Controllers, and Views by app.
* Updated `red-sass` from `~0.1.0` to `~0.2.0`. [See Changelog](https://github.com/ff0000/red-sass/blob/master/changelog.md)
* Updated `jquery` from `~1.10.2` to `~1.11.1`. [See Changelog](http://blog.jquery.com/2014/05/01/jquery-1-11-1-and-2-1-1-released/)
* Updated `ember` from `~1.3.2` to `~1.5.1`. [See Changelog](http://emberjs.com/blog/2014/03/30/ember-1-5-0-and-ember-1-6-beta-released.html)
* Updated `modernizr` from `~2.7.1` to `~2.8.2`. [See Changelog](https://github.com/Modernizr/Modernizr/compare/v2.7.1...v2.8.2)
* Updated `qunit` from `~1.12.0` to `~1.14.0`. [See Changelog](https://github.com/jquery/qunit/blob/master/History.md)
* Updated `grunt-autoprefixer` from `~0.6.5` to `~0.7.4`. [See Changelog](https://github.com/nDmitry/grunt-autoprefixer/blob/master/CHANGELOG)
* Updated `grunt-contrib-connect` from `~0.6.0` to `~0.8.0`. [See Changelog](https://github.com/gruntjs/grunt-contrib-connect/blob/master/CHANGELOG)
* Updated `grunt-contrib-jshint` from `~0.8.0` to `~0.10.0`. [See Changelog](https://github.com/gruntjs/grunt-contrib-jshint/blob/master/CHANGELOG)
* Updated `grunt-contrib-uglify` from `~0.3.2` to `~0.5.0`. [See Changelog](https://github.com/gruntjs/grunt-contrib-uglify/blob/master/CHANGELOG)
* Updated `grunt-contrib-watch` from `~0.5.3` to `~0.6.1`. [See Changelog](https://github.com/gruntjs/grunt-contrib-watch/blob/master/CHANGELOG)
* Updated `grunt-newer` from `~0.6.1` to `~0.7.0`. [See Changelog](https://github.com/tschaub/grunt-newer/blob/master/changelog.md)
* Updated `grunt-notify` from `~0.2.17` to `~0.3.0`. [See Changelog](https://github.com/dylang/grunt-notify/blob/master/CHANGELOG.md)
* Updated `grunt-sass` from `~0.11.0` to `~0.12.1`. [See Changelog](https://github.com/sindresorhus/grunt-sass/compare/v0.11.0...v0.12.0)
* Updated `grunt-webfont` from `~0.3.2` to `~0.4.2`. [See Changelog](https://github.com/sapegin/grunt-webfont/blob/master/Changelog.md)
* Updated `load-grunt-tasks` from `~0.3.0` to `~0.5.0`. [See Changelog](https://github.com/sindresorhus/load-grunt-tasks/compare/v0.3.0...v0.5.0)
* Updated `time-grunt` from `~0.2.8` to `~0.3.2`. [See Changelog](https://github.com/sindresorhus/time-grunt/compare/v0.2.8...v0.3.2)

### `0.3.0` _2014-03-10_

* Added `qunit` testing framework.
* Switched from `compass` to `libsass`. Removed `ruby sass bundler rbenv compass` dependencies.
* Switched from `caboose` to `red-sass`.

### `0.2.1` _2014-02-10_

* Added `handlebars` bower dependency at `~1.3.0`.

### `0.2.0` _2014-02-10_

* Added `grunt-autoprefixer`. Prefixing CSS3 properties within `.scss` files is no longer necessary.
* Added `lib/modernizr/modernizr.js` to the copy task.
* Added separate `haychtml:build` and `haychtml:develop` tasks to allow deployed files to use minified javascript.
* Added watcher for `static/js/libs.js`.
* Added `grunt develop` task to build a development version of the project.
* Added `grunt watch:copy` to continuously copy files during development.
* Added `grunt-newer` to only copy changed files while watching.
* Changed global js namespace to `App` instead of a project specific namespace.
* Changed `config.rb` to use the correct `generated_images_dir` path.
* Changed `config.rb` to include `static/lib` as an import path for easier importing of bower libs.
* Updated `jQuery` from `~1.9.1` to `~1.10.2`.
* Updated `ember` from `~1.1.2` to `~1.3.2`.
* Updated `ember-model` from `~0.0.10` to `~0.0.11`.
* Updated `modernizr` from `~2.6.3` to `~2.7.1`.
* Updated `grunt` from `~0.4.1` to `~0.4.2`.
* Updated `grunt-contrib-connect` from `~0.3.0` to `~0.6.0`.
* Updated `grunt-contrib-compass` from `~0.6.0` to `~0.7.1`.
* Updated `grunt-contrib-copy` from `~0.4.1` to `~0.5.0`.
* Updated `grunt-contrib-jshint` from `~0.7.1` to `~0.8.0`.
* Updated `grunt-contrib-uglify` from `~0.2.7` to `~0.3.2`.
* Updated `grunt-ember-templates` from `~0.4.16` to `~0.4.18`.
* Updated `grunt-notify` from `~0.2.16` to `~0.2.17`.
* Updated `grunt-webfont` from `~0.2.0` to `~0.3.2`.
* Updated `time-grunt` from `~0.2.1` to `~0.2.8`.
* Updated `load-grunt-tasks` from `~0.2.0` to `~0.3.0`.
* Updated `swig` from `~1.1.0` to `~1.3.2`.
* Removed `grunt-concurrent`. It providing no significant performance improvement and made the build process more confusing.
* Removed `connect-livereload`. The newer version of `grunt-contrib-connect` now handles this functionality.
* Removed `grunt-open`. The newer version of `grunt-contrib-connect` now handles this functionality.

### `0.1.0` _2014-01-03_

* Added `yo red-static:update` to update grunt tasks
* Updated dependency versions
* Fixed watch paths for empty folders
* Made `bower install` only run via `npm postinstall` hook rather than on `yo red-static`

### `0.0.1` _2013-11-21_

* Initial version
