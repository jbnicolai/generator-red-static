'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var _ = require('underscore.string');
var Font = require('./font');
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
		default: '/Volumes/Resource/Web Resources/Webfonts'
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
	console.log('Don\'t forget to add these fonts to your style.scss');

	this.selectedFonts.forEach(function (file) {
		var font = new Font(path.join(this.root, this.actualPathMap[file]));
		font.save('static/fonts', this.includeSVG);
		this.template('_font.scss', 'static/scss/fonts/_' + font.slug + '.scss', font);
		console.log('@include "fonts/' +  font.slug + '";');
	}.bind(this));
};
