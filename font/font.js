'use strict';
var fs = require('fs'),
	path = require('path'),
	_ = require('underscore.string');

function Font(dir) {
	this.name = path.basename(dir);
	this.fontFamily = _.titleize(this.name);
	this.mixinName = _.underscored(this.name);
	this.slug = _.slugify(this.name);

	fs.readdirSync(dir).forEach(function (file) {
		var ext = path.extname(file),
			fullPath = path.join(dir, file);

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
}

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
