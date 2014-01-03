'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');

function UpdateGenerator(args, options) {
	yeoman.generators.Base.apply(this, arguments);

	this.once('end', function () {
		this.installDependencies({
			skipInstall: options['skip-install'],
			bower: false
		});
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

	// Use files from the main app rather than this directory
	this.sourceRoot(path.resolve(__dirname, '../app/templates'));
}

module.exports = UpdateGenerator;

util.inherits(UpdateGenerator, yeoman.generators.Base);

UpdateGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	console.log(require('../app/logo'));

	var prompts = [{
		name: 'shouldUpdate',
		type : 'confirm',
		message: 'Update your Gruntfile, package.json, and grunt folder?',
		default: true
	}];

	this.prompt(prompts, function (props) {
		this.shouldUpdate = props.shouldUpdate;

		cb();
	}.bind(this));
};

UpdateGenerator.prototype._mergeJson = function _mergeJson(src, dest, keys) {
	var newPkg = JSON.parse(this.read(src));
	var oldPkg = JSON.parse(this.readFileAsString(path.join(this.destinationRoot(), '/' + dest)));

	keys.forEach(function (prop) {
		Object.keys(newPkg[prop]).forEach(function (key) {
			oldPkg[prop][key] = newPkg[prop][key];
		});
	});

	this.write(dest, JSON.stringify(oldPkg, null, 2) + '\n');
};

UpdateGenerator.prototype.update = function update() {
	if (this.shouldUpdate) {
		this._mergeJson('_package.json', 'package.json', ['devDependencies']);
		this.directory('grunt');
		this.copy('Gruntfile.js', 'Gruntfile.js');
	}
};

