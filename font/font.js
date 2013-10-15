'use strict';
var fs = require('fs'),
	path = require('path'),
	_ = require('underscore.string');

function Font(dir) {
	this.dir = dir;
	this.name = path.basename(dir);
	this.fontFamily = _.titleize(this.name);
	this.fontWeight = 400;
	this.fontStyle = 'normal';
	this.mixinName = _.underscored(this.name);
	this.slug = _.slugify(this.name);

	this.parseWeightAndStyle();
	this.findFiles();
}

Font.prototype.parseWeightAndStyle = function () {
	[
		null,
		/\W(100|hairline|thin|(extra|ultra).?light)/i,
		/\W(200|light)/i,
		/\W(300|book)/i,
		/\W(400|normal|regular|roman|plain)/i,
		/\W(500|medium|(demi|semi).?bold)/i,
		/\W(600|extra.?bold|extra|bold)/i,
		/\W(700|heavy|black|(extra|ultra).?black|ultra)/i
	].forEach(function (weight, i) {
		this.fontFamily = this.fontFamily.replace(weight, function () {
			this.fontWeight = i * 100;
			return "";
		}.bind(this));
	}.bind(this));

	this.fontFamily = this.fontFamily.replace(/\W(italic|oblique)/i, function () {
		this.fontStyle = 'italic';
		return "";
	}.bind(this));

	this.fontFamily = _.titleize(this.fontFamily);
};

Font.prototype.findFiles = function () {
	fs.readdirSync(this.dir).forEach(function (file) {
		var ext = path.extname(file),
			fullPath = path.join(this.dir, file);

		switch (ext) {
		case '.ttf':
			this.ttf = fullPath;
			break;
		case '.eot':
			this.eot = fullPath;
			break;
		case '.woff':
			this.woff = fullPath;
			break;
		case '.svg':
			this.svg = fullPath;
			break;
		}
	}.bind(this));
};

Font.prototype.save = function (dir, includeSVG) {
	var fonts = ['ttf', 'woff', 'eot'];

	if (includeSVG) {
		fonts.push('svg');
	}

	fonts.forEach(function (ext) {
		if (!this[ext]) {
			console.error('No font file with extension %s for %s', ext, this.name);
			return;
		}
		var dest = path.join(dir, this.slug + '.' + ext);
		fs.createReadStream(this[ext]).pipe(fs.createWriteStream(dest));
	}.bind(this));
};

module.exports = Font;
