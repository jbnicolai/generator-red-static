'use strict';
var util = require('util'),
	path = require('path'),
	yeoman = require('yeoman-generator'),
	_ = require('underscore.string'),
	LOGO = require('./logo');

function RedStaticGenerator(args, options) {
	yeoman.generators.Base.apply(this, arguments);

	this.once('end', function () {
		this.installDependencies({
			skipInstall: options['skip-install'],
			bower: false
		});
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
}

module.exports = RedStaticGenerator;

util.inherits(RedStaticGenerator, yeoman.generators.Base);

RedStaticGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	this.projectName = _.titleize(_.humanize(path.basename(this.env.cwd)));

	var prompts = [{
		name: 'projectName',
		message: 'What is the project called?',
		default: this.projectName
	}];

	if (this.options.force) {
		cb();
	} else {
		console.log(LOGO);

		this.prompt(prompts, function (props) {
			this.projectName = props.projectName;

			cb();
		}.bind(this));
	}
};

RedStaticGenerator.prototype.projectfiles = function projectfiles() {
	this.template('_package.json', 'package.json');
	this.template('_bower.json', 'bower.json');
	this.template('_README.md', 'README.md');
	this.copy('jshintrc', '.jshintrc');
	this.copy('bowerrc', '.bowerrc');
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitattributes', '.gitattributes');
	this.copy('gitignore', '.gitignore');
	this.copy('Gemfile', 'Gemfile');
	this.copy('gulpfile.js', 'gulpfile.js');
};

RedStaticGenerator.prototype.gulpDir = function gulpDir() {
	this.directory('gulp');
};

RedStaticGenerator.prototype.pages = function pages() {
	this.directory('pages');
	this.template('pages/_base.html', 'pages/_base.html');
};

RedStaticGenerator.prototype.staticDir = function staticDir() {
	this.mkdir('static');
	this.mkdir('static/fonts');
	this.mkdir('static/icons');
	this.mkdir('static/img');
};

RedStaticGenerator.prototype.scssDir = function scssDir() {
	this.directory('static/scss');
};

RedStaticGenerator.prototype.jsDir = function jsDir() {
	var JS = 'static/js/';
	this.directory(JS);
	this.write(JS + 'components/.gitkeep', '');
	this.write(JS + 'controllers/.gitkeep', '');
	this.write(JS + 'mixins/.gitkeep', '');
	this.write(JS + 'models/.gitkeep', '');
	this.write(JS + 'routes/.gitkeep', '');
	this.write(JS + 'views/.gitkeep', '');
};

RedStaticGenerator.prototype.emberTemplatesDir = function emberTemplatesDir() {
	this.template('static/templates/application.hbs', 'static/templates/application.hbs');
};
