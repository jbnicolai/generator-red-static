## History

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
