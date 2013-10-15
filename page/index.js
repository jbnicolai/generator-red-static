'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
	yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
	var name = this._.slugify(this.name);
	this.template('_page.html', 'pages/' + name + '.html');
	this.template('_page.scss', 'static/scss/pages/_' + name + '.scss');
};
