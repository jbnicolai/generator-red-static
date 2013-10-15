'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var _ = require('underscore.string');
var yeoman = require('yeoman-generator');

var FontGenerator = module.exports = function FontGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);
};

util.inherits(FontGenerator, yeoman.generators.Base);

FontGenerator.prototype.getRootPath = function getRootPath() {
	var cb = this.async();

	var prompts = [{
		name: 'root',
		type: 'input',
		message: 'Where are the webfonts located?',
		default: '/Users/timwood/Desktop/fonts'
	}];

	this.prompt(prompts, function (props) {
		this.root = props.root;
		cb();
	}.bind(this));
};

FontGenerator.prototype.getAvailableFonts = function getAvailableFonts() {
	this.availableFonts = fs.readdirSync(this.root).filter(function (file) {
		return fs.statSync(path.join(this.root, file)).isDirectory() && file[0] !== '.';
	}.bind(this));
};

FontGenerator.prototype.getActualPathMap = function getActualPathMap() {
	this.actualPathMap = {};

	this.titleizedPaths = this.availableFonts.map(function (file) {
		var titleized = _.titleize(file);
		this.actualPathMap[titleized] = file;
		return titleized;
	}.bind(this));
};

FontGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [{
		name: 'fonts',
		type: 'checkbox',
		message: 'What fonts do you want to install?',
		choices: this.titleizedPaths
	}, {
		name: 'includeSVG',
		type: 'confirm',
		message: 'Include SVG fonts? Usually only needed in iOS < 5.0',
		default: false
	}];

	this.prompt(prompts, function (props) {
		this.selectedFonts = props.fonts;
		this.includeSVG = props.includeSVG;
		cb();
	}.bind(this));
};

FontGenerator.prototype.files = function files() {
	this.selectedFonts.map(function (file) {
		return path.join(this.root, this.actualPathMap[file]);
	}.bind(this)).forEach(this._processFolder.bind(this));
};

FontGenerator.prototype._processFolder = function _processFolder(folder) {
	var files = {};
	var slugify = _.slugify(path.basename(folder));

	fs.readdirSync(folder).forEach(function (file) {
		var ext = path.extname(file);
		files[ext] = path.join(folder, file);
	});

	this._copyFontFile(files['.woff']);
	this._copyFontFile(files['.ttf']);
	this._copyFontFile(files['.eot']);
	if (this.includeSVG) {
		this._copyFontFile(files['.svg']);
	}
};

FontGenerator.prototype._copyFontFile = function _copyFontFile(file) {
	if (!file) {
		return;
	}

	var done = this.async();
	var destRoot = 'static/fonts';
	var fontName = path.basename(path.dirname(file));
	var destName = _.slugify(fontName) + path.extname(file);
	var dest = path.join(destRoot, destName);

	console.log(file, dest);

	fs.createReadStream(file).pipe(fs.createWriteStream(dest));

	setTimeout(done, 2000);
};

