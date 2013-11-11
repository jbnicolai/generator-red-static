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
	this.copy('bowerrc', '.bowerrc');
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitattributes', '.gitattributes');
	this.copy('gitignore', '.gitignore');
	this.copy('Gruntfile.js', 'Gruntfile.js');
	this.copy('jshintrc', '.jshintrc');
	this.directory('grunt', 'grunt');
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
	this.mkdir('static/js');
};

RedStaticGenerator.prototype.scss = function scss() {
	this.directory('static/scss');
};
