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

	console.log(LOGO);

	var prompts = [{
		name: 'projectName',
		message: 'What is the project called?',
		default: _.titleize(_.humanize(path.basename(this.env.cwd)))
	}];

	this.prompt(prompts, function (props) {
		this.projectName = props.projectName;

		cb();
	}.bind(this));
};

RedStaticGenerator.prototype.projectfiles = function projectfiles() {
	this.template('_package.json', 'package.json');
	this.template('_bower.json', 'bower.json');
	this.template('_README.md', 'README.md');
	this.template('_jshintrc', '.jshintrc');
	this.copy('bowerrc', '.bowerrc');
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitattributes', '.gitattributes');
	this.copy('gitignore', '.gitignore');
	this.copy('Gruntfile.js', 'Gruntfile.js');
};

RedStaticGenerator.prototype.gruntDir = function gruntDir() {
	this.directory('grunt');
	this.write('grunt/tasks/.gitkeep', '');
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
	this.directory('static/js/');
};

RedStaticGenerator.prototype.testsDir = function testsDir() {
	this.directory('static/tests/');
};

RedStaticGenerator.prototype.emberTemplatesDir = function emberTemplatesDir() {
	this.template('static/templates/application.hbs', 'static/templates/application.hbs');
};
